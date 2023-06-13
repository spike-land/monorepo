import { EmotionCache } from "@emotion/cache";
import type { FC, ReactNode } from "react";

import createCache from "./emotionCache";
import { stat } from "./memfs";
// import { unmountComponentAtNode } from "react-dom";import { createRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { ICodeSession } from "./makeSess";
import ParentSize from "./ParentSize";
import type { ParentSizeState } from "./ParentSize";
import { appFactory } from "./starter";
import { wait } from "./wait";

const runtime = require("react-refresh/runtime");
runtime.injectIntoGlobalHook(window);

// BEFORE EVERY MODULE EXECUTES

function reFresh() {
  var prevRefreshReg = window.$RefreshReg$;
  var prevRefreshSig = window.$RefreshSig$;
  var RefreshRuntime = require("react-refresh/runtime");

  window.$RefreshReg$ = (type, id) => {
    // Note module.id is webpack-specific, this may vary in other bundlers
    const fullId = module.id + " " + id;
    RefreshRuntime.register(type, fullId);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

  try {
    // !!!
    // ...ACTUAL MODULE SOURCE CODE...
    // !!!
  } finally {
    window.$RefreshReg$ = prevRefreshReg;
    window.$RefreshSig$ = prevRefreshSig;
  }
}

const codeSpace = location.pathname.slice(1).split("/")[1];

const BC = new BroadcastChannel(`${location.origin}/live/${codeSpace}/`);

let i = 0;
let controller = new AbortController();
const mod: {
  [i: number]: {
    retry: number;
    rootEl: HTMLDivElement;
    root: Root;
    i: number;
    signal: AbortSignal;
  };
} = {};

async function rerender(data: ICodeSession & { transpiled: string }) {
  if (data.i) {
    if (i >= data.i) return;
    console.log("rerender", { i: data.i });
    i = data.i;

    controller.abort();
    controller = new AbortController();
    const signal = controller.signal;

    const el = document.createElement("div");
    el.style.opacity = "0";
    el.style.height = "100%";
    document.body.appendChild(el);

    const myRoot = createRoot(el);

    const indexMjs = await stat(`/live/${codeSpace}/index.mjs`);

    let AppBundled: typeof AppTranspiled;

    const AppTranspiled = (await (data.transpiled ? appFactory(data.transpiled) : import(
      `${location.origin}/live/${codeSpace}/index.js?i=${data.i}`
    ))).default;

    if (indexMjs) {
      try {
        AppBundled = (await import(
          `${location.origin}/live/${codeSpace}/index.mjs`
        )).default;
      } catch {
        AppBundled = null;
      }
    }

    const App = AppBundled || AppTranspiled;
    if (signal.aborted) return;
    if (data.i !== i) return;

    myRoot.render(
      <ParentSize>
        {({ width, height, top, left, ref }) => (
          <App
            {...(width ? { width } : {})}
            {...(height ? { height } : {})}
            {...(top ? { top } : {})}
            {...(left ? { left } : {})}
            {...(ref ? { ref } : {})}
          />
        )}
      </ParentSize>,
    );

    // //(await import(
    //   createJsBlob(importMapReplace(data.transpiled, origin, origin))
    // )).default;
    // const rootEl = document.createElement("div");
    // rootEl.style.height = "100%";

    // const root = createRoot(rootEl);
    const m = mod[i] || {
      i,
      signal,
      root: myRoot,
      rootEl: el,
      retry: 100,
    };
    // const r = createRoot(newRoot);

    if (m.signal.aborted) {
      m.root.unmount();
      m.rootEl.remove();
    }

    // check(myMod);

    // async function check(m: typeof mod[0]) {
    // ReactDOM.flushSync(() => {

    while (m.retry--) {
      if (signal.aborted) {
        m.root.unmount();
        m.rootEl.remove();
        // root.unmount();
        return;
      }
      const html = m.rootEl.innerHTML;
      if (html) {
        const css = mineFromCaches({ key: "css" } as EmotionCache, html);
        try {
          // root.unmount();
          console.log({ html, css, i: m.i });
          // document.getElementById("root")?.appendChild(newRoot);
          // root.unmount();
          // root = r;
          root.unmount();

          // root = m.root;

          m.rootEl.style.opacity = "1";
          m.rootEl.style.height = "100%";
          //        rootEl = m.rootEl;
          document.getElementById("root")?.remove();

          m.rootEl.id = "root";
        } catch (e) {
          "some error";
        }
        if (!data.html) {
          BC.postMessage({
            ...data,
            html,
            css,
          });
        }
        controller.abort();
        // root.unmount();
        return;
      }
      await wait(1);
    }
    return;
  }
}

let root: Root;
globalThis.firstRender = globalThis.firstRender || {
  html: "",
  css: "",
  code: "",
};

let __rootEl: HTMLElement;
BC.onmessage = ({ data }) => data.html && data.i && rerender(data);

export const render = async (
  _rootEl: HTMLElement,
  codeSpace: string,
) => {
  __rootEl = _rootEl;
  if (!__rootEl) return;
  let App: FC<
    {
      width?: number;
      height?: number;
      top?: number;
      left?: number;
      ref?: HTMLDivElement;
      resize?: (state: ParentSizeState) => void;
      children?: ReactNode;
    }
  >;
  try {
    App = (await import(
      `${location.origin}/live/${codeSpace}/index.js`
    )).default;
  } catch (err) {
    App = () => (
      <div>
        <h1>Error</h1>
        <pre>{JSON.stringify({err})}</pre>
      </div>
    );
  }

  root = root || createRoot(_rootEl);
  if (root) {
    root.render(
      <ParentSize>
        {({ width, height, top, left, ref }) => (
          <App
            {...(width ? { width } : { width: window.innerWidth })}
            {...(height ? { height } : { height: window.innerHeight })}
            {...(top ? { top } : { top: 0 })}
            {...(left ? { left } : { left: 0 })}
            {...(ref ? { ref } : {})}
          />
        )}
      </ParentSize>,
    );
    return;
  }

  const el = document.createElement("div");
  el.style.opacity = "0";
  el.remove();
  _rootEl.parentElement?.appendChild(el);
  _rootEl.parentElement;
  const cache = createCache({
    key: "css",
    speedy: false,
  });

  cache.compat = undefined;

  // rootEl = _rootEl;
  root = createRoot(el);
  root.render(
    <CacheProvider value={cache}>
      <ParentSize>
        {({ width, height, top, left }) => (
          <App
            {...(width ? { width } : { width: window.innerWidth })}
            {...(height ? { height } : { height: window.innerHeight })}
            {...(top ? { top } : { top: 0 })}
            {...(left ? { left } : { left: 0 })}
          />
        )}
      </ParentSize>
    </CacheProvider>,
  );

  let i = (location.href.endsWith("iframe") || location.href.endsWith("/")
      || location.href.endsWith("public"))
    ? 100
    : 0;
  while (i-- > 0) {
    const html = el.innerHTML;
    if (html && html !== "") {
      const css = mineFromCaches(
        cache,
        html,
      );

      // root.unmount();
      console.log({ html, css });
      globalThis.firstRender.html = html;
      globalThis.firstRender.css = css;
      el.style.opacity = "1";
      el.style.height = "100%";
      const id = _rootEl.id;

      _rootEl.remove();
      el.setAttribute(id, id);
      window?.parent?.postMessage({ type: "firstRender", html, css });

      return { html, css };
    }

    await wait(10);
  }

  return root;
};

export const prerender = async (
  App: FC<
    {
      width?: number;
      height?: number;
      top?: number;
      left?: number;
      ref?: HTMLDivElement;
      resize?: (state: ParentSizeState) => void;
      children?: ReactNode;
    }
  >,
) => {
  const _rootEl = document.getElementById("root")!;
  const el = document.createElement("div");
  el.style.opacity = "0";
  _rootEl.parentElement?.appendChild(el);
  _rootEl.parentElement;

  root = root || createRoot(el);
  root.render(
    <ParentSize>
      {({ width, height, top, left }) => (
        <App
          {...(width ? { width } : { width: window.innerWidth })}
          {...(height ? { height } : { height: window.innerHeight })}
          {...(top ? { top } : { top: 0 })}
          {...(left ? { left } : { left: 0 })}
        />
      )}
    </ParentSize>,
  );

  let i = 100;
  while (i-- > 0) {
    const html = document.getElementById("root")!.innerHTML;
    if (html && html !== "") {
      const css = mineFromCaches(
        { key: "css" } as unknown as EmotionCache,
        html,
      );
      //      root.unmount();
      console.log({ html, css });
      return { html, css };
    }

    await wait(10);
  }

  return { html: "", css: "" };
};

function mineFromCaches(_cache: EmotionCache, html: string) {
  const key = "css";
  // const key = cache.key || "css";
  try {
    return Array.from(document.querySelectorAll("style[data-styled-jsx")).map(
      (x) => x.textContent,
    )
      + Array.from(
        new Set(
          Array.from(
            document.querySelectorAll(`style[data-emotion="${key}"]`),
          ).map((x) => x.textContent),
        ),
      ).join("\n");
  } catch {
    // const keys = Object.keys(cache.inserted).map((x) => `.${cache.key}-${x}`);
    return Array.from(document.styleSheets).map((x) => {
      try {
        return x.cssRules[0] as CSSPageRule;
      } catch {
        return null;
      }
    }).filter((x) =>
      x?.selectorText && x.selectorText.indexOf(key) !== -1
      && html.indexOf(x.selectorText.slice(4, 11)) !== -1
    )
      .map((x) => x!.cssText)
      // .filter((x) => x && keys.includes(x.selectorText)).map((x) => x!.cssText)
      .join("\n");
  }
}

if (
  location.pathname.endsWith("/iframe") || location.pathname.endsWith("/")
  || location.pathname.endsWith("/public")
) {
  window.onmessage = async ({ data }) => {
    rerender(data);
  };
}
