import { ICodeSession } from "@/lib/interfaces";
import { useCodeSpace } from "./hooks/useCodeSpace";

import { EmotionCache } from "@emotion/cache";
import { Mutex } from "async-mutex";
import { initializeApp } from "./hydrate";
import { Code } from "./services/CodeSession";

import { renderApp, renderedAPPS } from "@/components/app/wrapper";
import { prettierCss } from "@/lib/shared";
import { mineFromCaches } from "./utils/mineCss";
import { wait } from "./wait";

const cSess = new Code();

const waitForCSess = cSess.run();

const run = async () => {
  const { renderPreviewWindow } = await import("./renderPreviewWindow");
  renderPreviewWindow({ codeSpace: useCodeSpace(), cSess });
};

const handleDefaultPage = async () => {
  try {
    const mod = { ...cSess.session, counter: cSess.session.i, controller: new AbortController() };

    const mutex = new Mutex();

    cSess.sub(async (sess: ICodeSession) => {
      try {
        const { transpiled } = sess;

        const myEl = document.createElement("div");
        myEl.style.height = "100%";
        myEl.style.width = "100%";
        myEl.style.display = "none";
        document.body.appendChild(myEl);

        await renderApp({
          transpiled,
          rootElement: myEl,
        });

        const root = document.getElementById("root")!;
        const oldApp = renderedAPPS.get(root);
        if (oldApp) {
          oldApp?.cleanup();
        }

        myEl.style.display = "block";
        myEl.id = "root";
      } catch (error) {
        console.error("Error in cSess subscription:", error);
      }
    });

    window.onmessage = async ({ data }) => {
      try {
        const { i, transpiled } = data;

        if (!i || !transpiled) return;

        if (mod.counter >= i) return;

        mod.counter = i;
        mod.controller.abort();
        const { signal } = (mod.controller = new AbortController());

        if (signal.aborted) return false;

        await mutex.runExclusive(async () => {
          if (signal.aborted) return;

          const myEl = document.createElement("div");
          myEl.style.height = "100%";
          myEl.style.width = "100%";
          myEl.style.display = "none";
          document.body.appendChild(myEl);

          const rendered = await renderApp({ rootElement: myEl, transpiled });

          if (!rendered) return false;

          await wait(100);
          if (signal.aborted) return rendered.cleanup();

          const res = await handleRender(
            myEl,
            rendered.cssCache,
            signal,
            mod,
          );

          if (res === false) {
            if (signal.aborted) return rendered.cleanup();
          } else {
            const { css, html } = res;
            if (html === "<div style=\"width: 100%; height: 100%;\"></div>") {
              return rendered.cleanup();
            }

            window.parent.postMessage({ i, css, html }, "*");

            const old = document.getElementById("root")!;
            const oldApp = renderedAPPS.get(old);
            if (oldApp) {
              oldApp.cleanup();
            }

            myEl.id = "root";
          }
        });
      } catch (error) {
        console.error("Error in window.onmessage handler:", error);
      }
      return false;
    };
  } catch (error) {
    console.error("Error in handleDefaultPage:", error);
  }
};

const main = async () => {
  const codeSpace = useCodeSpace();
  await waitForCSess;

  try {
    if (location.pathname === `/live/${codeSpace}`) {
      await run();
      await initializeApp();
    } else if (location.pathname === `/live/${codeSpace}/dehydrated`) {
      handleDehydratedPage();
    } else if (location.pathname === `/live/${codeSpace}/iframe`) {
      await handleDefaultPage();
    }
  } catch (error) {
    console.error("Error in main function:", error);
  }
};

if (location.pathname.startsWith("/live")) {
  main();
}

(() => {
  try {
    cSess.sub((sess: ICodeSession) => {
      const { i, code, transpiled } = sess;
      console.table({ i, code, transpiled });
    });
  } catch (error) {
    console.error("Error in cSess subscription:", error);
  }
})();

export const handleDehydratedPage = () => {
  try {
    cSess.sub((sess: ICodeSession) => {
      const { html, css } = sess;

      const root = document.getElementById("root");

      if (root && html && css) {
        root.innerHTML = `<style>${css}</style><div>${html}</div>`;
      }
    });
  } catch (error) {
    console.error("Error handling dehydrated page:", error);
  }
};

const handleRender = async (
  rootEl: HTMLDivElement,
  cache: EmotionCache,
  signal: AbortSignal,
  mod: {
    counter: number;
    code: string;
    transpiled: string;
    controller: AbortController;
  },
) => {
  try {
    console.log("handleRender");
    const counter = mod.counter;

    if (!rootEl) return false;

    for (let attempts = 5; attempts > 0; attempts--) {
      if (signal.aborted) return false;

      const html = rootEl.innerHTML;
      console.log("Initial HTML length:", html.length);

      if (html) {
        let css = mineFromCaches(cache, html);
        console.log("Initial CSS length:", css.length);

        const criticalClasses = css.split("\n").map((line) => {
          const rule = line.slice(1, 12);
          if (html.includes(rule)) return rule;
          return null;
        }).filter((rule) => rule !== null);
        console.log("Critical classes found:", criticalClasses.length);

        // filter all the css for the critical classes
        css = css.split("\n").filter((line) => {
          return criticalClasses.some((rule) => line.includes(rule));
        }).join("\n");
        console.log("CSS length after filtering:", css.length);

        try {
          console.log("Prettifying CSS");
          if (css) {
            const prettifiedCss = await prettierCss(css);
            console.log("Prettified CSS length:", prettifiedCss.length);
            css = prettifiedCss;
          } else {
            console.log("CSS is empty before prettifying");
          }
        } catch (error) {
          console.error("Error prettifying CSS:", error);
          // Preserve original CSS if prettifying fails
          console.log("Preserving original CSS due to prettify error");
        }

        if (mod.counter !== counter) {
          console.log("Counter mismatch, returning false");
          return false;
        }

        console.log("Final CSS length:", css.length);
        console.log("Final HTML length:", html.length);
        return { css, html };
      } else {
        console.log("HTML is empty, returning without processing");
        await wait(100);
      }
    }
    return false;
  } catch (error) {
    console.error("Error in handleRender:", error);
    return false;
  }
};
