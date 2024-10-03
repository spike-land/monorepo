// CodeSession.ts

// import { useCodeSpace } from "@/hooks/use-code-space";
import type { ICode, ICodeSession, ImageData } from "@/lib/interfaces";
import { makeHash, makeSession } from "@/lib/make-sess";
import { md5 } from "@/lib/md5";
import { connect } from "@/lib/shared";
// import { build } from "@/lib/shared";
import { Mutex } from "async-mutex";
import { hash } from "immutable";
import {
  formatCode as formatCodeUtil,
  runCode as runCodeUtil,
  screenShot,
  transpileCode as transpileCodeUtil,
} from "../components/editorUtils";
import { CodeSessionBC } from "./CodeSessionBc";
const mutex = new Mutex();

async function fetchAndCreateExtraModels(
  code: string,
  origin: string,
  extraModels: Record<string, string> = {},
): Promise<Record<string, string>> {
  const patterns = [
    ` from "(${origin})/live/[\\w-]+"`,
    ` from "\\./((?!@/)[\\w-]+)"`,
    ` from "/live/[\\w-]+"`,
  ];

  const regex = new RegExp(patterns.join("|"), "gm");
  const matches = code.matchAll(regex);

  for (const match of matches) {
    const matchedPath = match[0];
    const codeSpace = matchedPath.split("/").pop()?.replace(/"$/, "");
    if (!codeSpace || extraModels[codeSpace]) continue;

    const extraModelUrl = new URL(`/live/${codeSpace}/index.tsx`, origin).toString();
    const response = await fetch(extraModelUrl);
    const fetchedCode = await response.text();

    extraModels[codeSpace] = fetchedCode;
    await fetchAndCreateExtraModels(fetchedCode, origin, extraModels);
  }

  return extraModels;
}

interface BroadcastMessage extends ICodeSession {
  sender: string;
}

class CodeProcessor {
  async process(
    rawCode: string,
    skipRunning: boolean = false,
    counter: number,
    signal: AbortSignal,
  ): Promise<Partial<ICodeSession> | false> {
    try {
      const transpiledCode = await this.transpileCode(rawCode);
      if (signal?.aborted) return false;

      const formattedCodePromise = this.formatCode(rawCode);
      if (signal?.aborted) return false;

      let html = "<div></div>";
      let css = "";

      if (!skipRunning) {
        try {
          const res = await this.runCode(transpiledCode, signal);

          if (signal?.aborted) return false;

          if (res) {
            html = res.html || "<div></div>";
            css = res.css || "";
          }
        } catch (error) {
          // const res = await build({
          //   codeSpace: useCodeSpace(),
          //   format: "esm",
          //   splitting: true,
          //   origin: location.origin,
          // });

          // const transpiledCode = res.find((r) => r.path.includes("wrapper.mjs"))?.text;
          // const extraCss = res.find((r) => r.path.includes("wrapper.css"))?.text;

          // const resp = await this.runCode(transpiledCode, signal);
          // if (signal?.aborted) return false;
          // html = resp.html;
          // css = extraCss + resp.css;

          console.error("Error running code:", error);
        }
      }

      if (signal?.aborted) return false;

      return {
        code: await formattedCodePromise,
        transpiled: transpiledCode,
        html,
        css,
        i: counter,
      };
    } catch (error) {
      console.error("Error processing code:", error);
      return false;
    }
  }

  private async formatCode(code: string): Promise<string> {
    try {
      return await formatCodeUtil(code);
    } catch (error) {
      console.error("Error formatting code:", { code });
      throw new Error(`Error formatting code: ${error}`);
    }
  }

  private async transpileCode(code: string): Promise<string> {
    try {
      const transpiled = await transpileCodeUtil(code);
      if (!transpiled) {
        console.log("Error Transpiled code:", { code });
        throw new Error("Transpilation resulted in empty output");
      }
      return transpiled;
    } catch (error) {
      console.log("Error Transpiled code:", { code });
      throw new Error(`Error transpiling code: ${error}`);
    }
  }

  private async runCode(code: string, signal: AbortSignal): Promise<{ html: string; css: string }> {
    try {
      const result = await runCodeUtil(code, signal);
      if (!result) {
        if (signal.aborted) return { html: "", css: "" };
        throw new Error("Running code produced no output");
      }
      return result;
    } catch (error) {
      if (signal.aborted) return { html: "", css: "" };
      console.error("Error running code:", { code });
      throw new Error(`Error running code: ${error}`);
    }
  }
}

export class Code implements ICode {
  session: ICodeSession; // #endregion

  private user: string;
  private broadcastChannel: CodeSessionBC;

  private codeProcessor = new CodeProcessor();
  private releaseWorker: () => void = () => {};
  private models: Map<string, Code> = new Map();
  private setCodeController: AbortController | null = null;

  constructor(private codeSpace: string) {
    this.session = makeSession({ i: 0, code: "", html: "", css: "", codeSpace, transpiled: "" });
    if (this.session.code.startsWith(`\n// ${codeSpace}.tsx\n`)) this.session.code = `\n// ${codeSpace}.tsx\n`;

    this.user = localStorage.getItem(`${this.codeSpace} user`) || md5(crypto.randomUUID());
    this.broadcastChannel = new CodeSessionBC(codeSpace);
    this.broadcastChannel.sub((session) => {
      this.session = session;
    });
    this.models.set(this.codeSpace, this);
  }

  async init(): Promise<ICodeSession> {
    this.session = await this.broadcastChannel.init();
    let swVersion = "unknown";
    try {
      const swVersionModule = await import(`${location.origin}/swVersion.mjs`);
      swVersion = swVersionModule.swVersion;
    } catch (error) {
      console.warn("Failed to import swVersion.mjs:", error);
    }

    this.releaseWorker = await connect({
      signal: `${this.codeSpace} ${this.user}`,
      sess: this.session,
      swVersion,
    });
    return this.session;
  }

  public hash = () => {
    makeHash(makeSession({ ...this.session }));
  };

  static makeHash = (session: ICodeSession) => {
    makeHash(session);
  };

  async getCode(): Promise<string> {
    if (mutex.isLocked()) await mutex.waitForUnlock();
    return this.session.code;
  }

  async setCode(
    rawCode: string,
    skipRunning = false,
  ): Promise<string> {
    if (mutex.isLocked()) await mutex.waitForUnlock();
    mutex.acquire();

    try {
      if (rawCode === this.session.code) return this.session.code;

      if (this.setCodeController) {
        this.setCodeController.abort();
      }
      this.setCodeController = new AbortController();
      const { signal } = this.setCodeController;
      const counter = this.session.i;

      const processedSession = await this.codeProcessor.process(
        rawCode,
        skipRunning,
        counter,
        signal,
      );
      if (!processedSession || signal.aborted) return this.session.code;

      const session = makeSession({ ...this.session, ...processedSession });
      if (hash(session) === hash(this.session)) return this.session.code;

      this.session = makeSession({ ...session, i: this.session.i + 1 });

      this.broadcastChannel.postMessage({
        ...this.session,
        sender: "Editor",
      } as BroadcastMessage);

      return this.session.code;
    } finally {
      mutex.release();
    }
  }

  async setModelsByCurrentCode(newCodes: string): Promise<string> {
    const sections = newCodes.split(/^#\s+/gm).filter(Boolean);
    const errors: string[] = [];

    for (const section of sections) {
      const lines = section.trim().split("\n");
      const codeSpaceLine = lines.shift();
      if (!codeSpaceLine) continue;

      const codeSpaceMatch = codeSpaceLine.match(/^([\w-.]+)\.tsx$/);
      if (!codeSpaceMatch) continue;
      const codeSpace = codeSpaceMatch[1];

      const codeContentMatch = lines.join("\n").match(/```tsx\s*([\s\S]*?)\s*```/m);
      if (!codeContentMatch) continue;
      const codeContent = codeContentMatch[1];

      let codeInstance = this.models.get(codeSpace);
      if (!codeInstance) {
        codeInstance = new Code(codeSpace);
        await codeInstance.init();
        this.models.set(codeSpace, codeInstance);
      }

      if (codeInstance.session.code !== codeContent) {
        const updatedCode = await codeInstance.setCode(
          codeContent + "\n\n\n",
          codeSpace !== this.codeSpace,
        );

        if (updatedCode !== codeContent + "\n\n\n") {
          errors.push(`Failed to update code for ${codeSpace}`);
        }
      }
    }

    this.session = makeSession({
      ...this.session,
      transpiled: (await transpileCodeUtil(this.session.code))
        + "\n\n\n\n\n"
        + `const cacheBust4=${this.session.i};`,
    });

    this.broadcastChannel.postMessage(this.session);

    return errors.join("\n");
  }

  async currentCodeWithExtraModels(): Promise<string> {
    const extraModels = await fetchAndCreateExtraModels(this.session.code, location.origin);

    const extraCodeSections = Object.entries(extraModels)
      .filter(([codeSpace]) => codeSpace !== this.codeSpace)
      .map(([codeSpace, code]) => this.formatCodeAsSection(codeSpace, code));

    const currentCodeSection = this.formatCodeAsSection(this.codeSpace, this.session.code);

    return [currentCodeSection, ...extraCodeSections].join("\n");
  }

  private formatCodeAsSection(codeSpace: string, code: string): string {
    return `# ${codeSpace}.tsx\n\n\`\`\`tsx\n${code}\n\`\`\`\n`;
  }

  sub(callback: (session: ICodeSession) => void): void {
    this.broadcastChannel.sub(callback);
  }

  async release(): Promise<void> {
    this.releaseWorker();
    this.broadcastChannel.close();
  }

  screenShot(): Promise<ImageData> {
    return screenShot();
  }

  async run(): Promise<void> {
    await this.init();
  }
}
