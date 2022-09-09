// import { createPortal } from "react-dom";
// import { prefixer } from 'stylis';

// import type * as next from "react-dom/next";
// import "es-module-shims";

// import {CacheProvider, createCache } from "@emotion/react"
import {  mST } from "./session";
import { css } from "@emotion/react";
import ErrorBoundary from "./ErrorBoundary";
import { md5 } from "md5";
import { useRef } from "react";
import "es-module-shims";


try{
  importShim.addImportMap(JSON.parse((Array.from(document.scripts).find(s=>s.type==="importmap").innerText)));
} catch{
  console.error("no importmap")
}
// (async()=>{
// Array.from( document.scripts).find(s=>s.type==="importmap")
// const res = await fetch(location.origin + '/importmap.json')
// const importMap = await res.json();


// importShim.addImportMap(importMap);
// })();
// Object.assign(window, {});

// const modalRoot = document.getElementById("root")!;

// export class Root extends React.Component<{children: ReactNode, codeSpace: string}> {
//   #el: HTMLDivElement;
//   #codeSpace: string;
//   children: ReactNode
//   constructor(props: {children: ReactNode, codeSpace: string}) {
//      super(props);
//     this.#codeSpace=props.codeSpace;
//      this.#el=document.createElement("div");
//      this.#el.id=`root-${this.#codeSpace}`;
//      this.#el.style.height='100%';

//   }

//   componentDidMount() {
//     // The portal element is inserted in the DOM tree after
//     // the Modal's children are mounted, meaning that children
//     // will be mounted on a detached DOM node. If a child
//     // component requires to be attached to the DOM tree
//     // immediately when mounted, for example to measure a
//     // DOM node, or uses 'autoFocus' in a descendant, add
//     // state to Modal and only render the children when Modal
//     // is inserted in the DOM tree.
//     modalRoot.innerHTML ="";
//     modalRoot.append(this.#el);
//   }

//   componentWillUnmount() {
//     modalRoot.appendChild(this.#el);
//   }

//   render() {
//     return createPortal(
//       this.props.children,
//       this.#el,
//     );
//   }
// }

// const orig = location.origin.includes("localhost") ? "." : location.origin;
// let isEsModuleShimsLoaded = false;
// export const initShims = async (assets: { [key: string]: string }) => {
// if (isEsModuleShimsLoaded) return;
// isEsModuleShimsLoaded = true;
// const {importShim} = await import("es-module-shims");

// location.origin.includes("localhost")
//   ? importShim.addImportMap({
//     "imports": {
//       "@emotion/react":
//         "https://esm.sh/@emotion/react@11.10.0?alias=react:/react.mjs",
//       "framer-motion": "./framer-motion",
//       "react": orig + "/" + assets["react.mjs"],
//       "react-dom": orig + "/" + assets["react.mjs"],
//       "react-dom/client": orig + "/" + assets["react.mjs"],
//       "react-dom/server": orig + "/" + assets["react.mjs"],
//       "react/jsx-runtime": orig + "/" + assets["react.mjs"],
//     },
//   })
//   : importShim.addImportMap({
//     "imports": {
//       // ...imap,
//       "framer-motion": location.origin + "/" + assets["framer-motion.mjs"],
//       "@emotion/react": location.origin + "/" + assets["emotion.mjs"],
//       "react": location.origin + "/npm:million/react",
//       "react-dom": location.origin + "/npm:million/react",
//       "react-dom/client": location.origin + "/" + assets["react.mjs"],
//       "react-dom/server": location.origin + "/" + assets["react.mjs"],
//       "react/jsx-runtime": location.origin + "/" + assets["react.mjs"],
//       // "preact": "https://ga.jspm.io/npm:preact@10.8.2/dist/preact.module.js",
//       // "preact-render-to-string": "https://ga.jspm.io/npm:preact-render-to-string@5.2.0/dist/index.mjs",
//       // "preact/compat": "https://ga.jspm.io/npm:preact@10.8.2/compat/dist/compat.module.js",
//       // "preact/jsx-runtime": "https://ga.jspm.io/npm:preact@10.8.2/jsx-runtime/dist/jsxRuntime.module.js"
//     },
//   });
// };

const apps: { [key: string]: React.FC } = {};

// {[md5(starter.transpiled)]: await appFactory(starter.transpiled)};

const ErrorBoundaryJ = ErrorBoundary as unknown as React.FC;
export const AutoUpdateApp: React.FC<{ hash: number }> = ({ hash }) => {
  // const result = md5(mST().transpiled);

  const ref = useRef(null);  
  const transpiled = mST().transpiled;
  const App = apps[md5(transpiled)];
3
  // return <Root codeSpace={codeSpace}>
  return (
    <ErrorBoundaryJ ref={ref} key={hash}>
      <App />
    </ErrorBoundaryJ>
  );
};

export async function appFactory(transpiled = ""): Promise<React.FC> {
  // const hashC = hashCode();

  const trp = transpiled.length?transpiled: mST().transpiled;

  const hash = md5(trp);

  if (!apps[hash]) {
    try {
      apps[hash] = (await importShim(createJsBlob(trp))).default as unknown as React.FC;
    } catch (err) {

      // try {
      //   apps[hash] = (await importShim(createJsBlob(trp))).default as unknown as React.FC;
      // } catch {
      //   console.error("not even importshim");
      // }

      if (err instanceof SyntaxError) {
        const name = err.name;
        const message = err.message;
        apps[hash] = () => (
          <div
            css={css`
        background-color: orange;
        `}
          >
            <h1>Syntax Error</h1>
            <h2>{name}: {message}</h2>
            <p>{JSON.stringify({ err })}</p>
          </div>
        );
      } else if (err instanceof Error) {
        const name = err.name;
        const message = err.message;

        apps[hash] = () => (
          <div
            css={css`
        background-color: orange;
        `}
          >
            <h1>Syntax Error</h1>
            <h2>{name}: {message}</h2>
            <p>{JSON.stringify({ err })}</p>
          </div>
        );
      } else {
        apps[hash] = () => (
          <div
            css={css`
        background-color: orange;
      `}
          >
            <h1>Unknown Error: ${hash}</h1>
          </div>
        );
      }
    }
  }


  // if ( mST().transpiled !== trp) {
  //   if (hashC===hashCode()){
  //     apps[hashC]=apps[hash];
  //   } else {
  //     apps[hashC] =  await  appFactory(mST().transpiled)
  //   }
   
  // }
  //   const newApp = apps[hash];

  //   // delete apps[hash];
  //   return newApp;
  // }
  return apps[hash];
}

export function createJsBlob(code: string) {
  const file = new File([code], "index.mjs", {
    type: "application/javascript",
  });
  const blobUrl = URL.createObjectURL(file);
  return blobUrl;
  // const actualUrl = new URL(blobUrl,'//live/');

  // return actualUrl;
}
