// js/reactMod.ts
var { React, ReactDOM, ReactDOMClient } = globalThis;
var {
  Children,
  Component,
  Fragment,
  PureComponent,
  StrictMode,
  Suspense,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
} = React;
var {
  createRoot,
  hydrateRoot
} = ReactDOMClient;
var {
  createPortal,
  flushSync,
  render,
  findDOMNode,
  hydrate,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version
} = ReactDOM;

// js/load.ts
var codeSpace = location.pathname.slice(1).split("/")[1];
var start = (dry = false) => import(`${location.origin}/live/${codeSpace}/mST.mjs`).then(
  ({
    mST,
    codeSpace: codeSpace2,
    address
  }) => import(`${location.origin}/ws.mjs`).then(
    ({ run }) => run({
      mST,
      dry,
      codeSpace: codeSpace2,
      address
    })
  )
);
if (location.pathname.endsWith("/hydrated")) {
  let i = document.getElementById("root")?.getAttribute("data-i");
  let unmount = () => {
  };
  const bc = new BroadcastChannel(location.origin);
  bc.onmessage = (event) => {
    if (event.data.codeSpace === codeSpace) {
      const rootDiv = document.createElement("div");
      rootDiv.style.height = "100%";
      i = event.data.sess.i;
      const root = createRoot(rootDiv);
      const current = i;
      importShim(
        `${location.origin}/live/${codeSpace}/index.js/${i}`
      ).then((mod) => i === current && root.render(mod.default())).then(
        () => document.querySelectorAll("#root>div>div")[0].replaceWith(rootDiv)
      ).then(unmount).then(
        () => unmount = () => {
          root.unmount();
        }
      );
    }
  };
  importShim(
    `${location.origin}/live/${codeSpace}/index.js/${i}`
  ).then((mod) => hydrateRoot(document.querySelectorAll("#root>div>div")[0], mod.default()));
} else {
  const dry = false;
  start(dry);
}
