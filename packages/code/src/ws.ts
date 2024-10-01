import { useCodeSpace } from "@/hooks/use-code-space";
import type { ICodeSession, RenderedApp } from "@/lib/interfaces";

import type { EmotionCache } from "@emotion/cache";
import { Mutex } from "async-mutex";
import { initializeApp } from "./hydrate";
import { Code } from "./services/CodeSession";

import { md5 } from "@/lib/md5";
import { processImage } from "@/lib/process-image";
import { renderApp } from "@/lib/render-app";
import { prettierCss } from "@/lib/shared";
import { wait } from "@/lib/wait";
import { renderPreviewWindow } from "./renderPreviewWindow";
import { mineFromCaches } from "./utils/mineCss";

const codeSpace = useCodeSpace();
const cSess = new Code(codeSpace);
Object.assign(globalThis, { cSess });

declare global {
  interface Window {
    rendered: RenderedApp | null;
    renderedMd5: string;
  }
}

let { rendered, renderedMd5 } = window;

const waitForCSess = cSess.run();

const handleDefaultPage = async () => {
  try {
    const mutex = new Mutex();
    const runningOperations = new Map<
      string,
      { controller: AbortController; cleanup: () => void }
    >();

    const updateRenderedApp = async (sess: ICodeSession) => {
      try {
        await mutex.runExclusive(async () => {
          const { transpiled } = sess;

          renderedMd5 = md5(transpiled);
          if (renderedMd5 === window.renderedMd5) {
            console.log("Skipping update as md5 is the same");
            return;
          }
          window.renderedMd5 = renderedMd5;
          console.log("Updating rendered app...");

          const myEl = document.createElement("div");
          myEl.style.cssText = "height: 100%; width: 100%;";
          document.body.appendChild(myEl);

          // Clean up previous rendered app if any
          rendered?.cleanup();
          rendered = null;

          rendered = await renderApp({
            transpiled,
            codeSpace,
            rootElement: myEl,
          });

          document.getElementById("embed")?.remove();
        });
      } catch (error) {
        rendered?.cleanup();
        console.error("Error updating rendered app:", error);
      }
    };

    cSess.sub(updateRenderedApp);

    window.onmessage = async ({ data }) => {
      try {
        const { type, requestId } = data;
        if (!type) return;

        if (type === "screenShot") {
          await handleScreenshot();
        } else if (type === "run" && requestId) {
          await handleRunMessage(data, requestId, mutex, runningOperations);
        } else if (type === "cancel" && requestId) {
          handleCancelMessage(requestId, runningOperations);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };
  } catch (error) {
    console.error("Error in handleDefaultPage:", error);
  }
};

const handleRunMessage = async (
data: { transpiled: string; requestId: string; }, requestId: string, mutex: Mutex, runningOperations: Map<string, { controller: AbortController; cleanup: () => void; }>,
) => {
  const { transpiled } = data;

  // Abort any existing operation with the same requestId
  if (runningOperations.has(requestId)) {
    const { controller, cleanup } = runningOperations.get(requestId)!;
    controller.abort();
    cleanup();
    runningOperations.delete(requestId);
  }

  const controller = new AbortController();
  const operation = { controller, cleanup: () => {} };
  runningOperations.set(requestId, operation);

  // await mutex.runExclusive(async () => {
  // if (signal.aborted) return;

  const myEl = document.createElement("div");
  myEl.style.cssText = "height: 100%; width: 100%; display: none;";
  document.body.appendChild(myEl);

  const renderedNew = await renderApp({
    rootElement: myEl,
    transpiled,
  });

  if (!renderedNew) {
    runningOperations.delete(requestId);
    return;
  }

  operation.cleanup = renderedNew.cleanup;

  const res = await handleRender(myEl, renderedNew.cssCache, signal);

  if (res !== false) {
    const { css, html } = res;

    window.parent.postMessage(
      {
        type: "result",
        requestId,
        html,
        css,
      },
      "*",
    );
  }
  operation.cleanup();

  runningOperations.delete(requestId);
  // });
};

const handleCancelMessage = (
  requestId: string,
  runningOperations: Map<string, { controller: AbortController; cleanup: () => void }>,
) => {
  if (runningOperations.has(requestId)) {
    const { controller, cleanup } = runningOperations.get(requestId)!;
    controller.abort();
    cleanup();
    runningOperations.delete(requestId);
  }
};

const handleScreenshot = async () => {
  try {
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(document.body);
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Failed to create blob from canvas"));
        }
      }, "image/png");
    });
    const file = new File([blob], `screenshot-${codeSpace}.png`, {
      type: "image/png",
    });
    const imageData = await processImage(file);
    window.parent.postMessage({ type: "screenShot", imageData }, "*");
  } catch (error) {
    console.error("Error taking screenshot:", error);
  }
};

export const main = async () => {
  await waitForCSess;

  try {
    if (location.pathname === `/live/${codeSpace}` || location.pathname === `/live-cms/${codeSpace}`) {
      console.log("Rendering preview window...");
      await initializeApp();
      await renderPreviewWindow({ codeSpace, cSess });
    } else if (location.pathname === `/live/${codeSpace}/dehydrated`) {
      handleDehydratedPage();
    } else {
      await handleDefaultPage();
    }
  } catch (error) {
    console.error("Error in main function:", error);
  }
};

(() => {
  try {
    cSess.sub(
      (sess: ICodeSession) => {
        const { i, code, transpiled } = sess;
        console.table({ i, code, transpiled });
      },
    );
  } catch (error) {
    console.error("Error in cSess subscription:", error);
  }
})();

const handleDehydratedPage = () => {
  try {
    cSess.sub(
      (sess: ICodeSession) => {
        const { html, css } = sess;
        const root = document.getElementById("embed");
        if (root && html && css) {
          root.innerHTML = `<style>${css}</style><div>${html}</div>`;
        }
      },
    );
  } catch (error) {
    console.error("Error handling dehydrated page:", error);
  }
};

function getClassNamesFromHTML(htmlString: string) {
  const classNames = new Set<string>();
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const elements = tempDiv.getElementsByTagName("*");
  for (const el of elements) {
    let className = "";
    if (typeof el.className === "string") {
      className = el.className;
    } else if (typeof el.className === "object" && "baseVal" in el.className) {
      // Handle SVGAnimatedString
      className = (el.className as SVGAnimatedString).baseVal;
    }
    if (className) {
      className
        .trim()
        .split(/\s+/)
        .forEach((cls) => classNames.add(cls));
    }
  }
  return Array.from(classNames);
}

const handleRender = async (
  rootEl: HTMLDivElement,
  cache: EmotionCache,
  signal: AbortSignal,
): Promise<{ css: string; html: string } | false> => {
  try {
    if (!rootEl) return false;
    if (!rootEl.innerHTML) await wait(100);
    if (!rootEl.innerHTML) await wait(200);
    if (!rootEl.innerHTML) await wait(400);

    const html = rootEl.innerHTML;
    // const classNames = getClassNamesFromHTML(html);

    if (!html) return false;
    for (let attempts = 5; attempts > 0; attempts--) {
      if (signal.aborted) return false;

      const css = mineFromCaches(cache);
      const criticalClasses = new Set(
        css
          .map((line) => {
            const rule = line.slice(1, line.indexOf("{")).trim();
            return html.includes(rule) ? rule : null;
          })
          .filter(Boolean) as string[],
      );

      const styleElement = document.querySelector("head > style:last-child");
      const tailWindClasses = styleElement
        ? Array.from((styleElement as HTMLStyleElement).sheet!.cssRules).map(
          (x) => x.cssText,
        )
        : [];

      const eCss = css
        .filter((line) => Array.from(criticalClasses).some((rule) => rule ? line.includes(rule) : false))
        .map((x) => x.trim())
        .filter(Boolean);

      const htmlClasses = getClassNamesFromHTML(html);
      let cssStrings = [...eCss, ...tailWindClasses].sort().filter(x => {
        // we have all the classnames from the html, filering out those css rules that are not used
        // in the html

        const rule = x.slice(1, x.indexOf("{")).trim();

        return htmlClasses.includes(rule);
      }).join("\n");

      try {
        cssStrings = cssStrings ? await prettierCss(cssStrings) : "";
      } catch (error) {
        console.error("Error prettifying CSS:", error);
      }

      if (signal.aborted) return false;

      return {
        css: cssStrings.split(cache.key).join("x"),
        html: html.split(cache.key).join("x"),
      };
    }
    return false;
  } catch (error) {
    console.error("Error in handleRender:", error);
    return false;
  }
};
