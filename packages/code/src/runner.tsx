// Import type { Dispatch, ReactNode, SetStateAction } from "react";
// import { Mutex } from "async-mutex";
// import { buildT } from "./esbuildEsm";
import { esmTransform } from "./esmTran";
import { syncWS } from "./ws";

// import { RpcProvider } from "worker-rpc";

// import type { ICodeSession } from "./session";
import { buildT } from "./esbuildEsm";
import { unlink, writeFile } from "./fs";
import { // HTML, importMapReplace, md5,
  mST, // resetCSS
} from "./session";
// import { createHTML } from "./starter";
//
// Object.assign(globalThis, { buildT });

const origin = location.origin;
// const IIFE = {};

// export const umdTransform = async (code: string) => {
//   const transpiled = await transform(code, {
//     loader: "tsx",
//     format: "esm",
//     treeShaking: true,
//     platform: "browser",
//     minify: false,
//     globalName: md5(code),
//     keepNames: true,
//     tsconfigRaw: {
//       compilerOptions: {
//         jsx: "react-jsx",
//         module: "ESNext",
//         jsxFragmentFactory: "Fragment",
//         useDefineForClassFields: false,
//         jsxImportSource: "@emotion/react",
//       },
//     },
//     target: "es2021",
//   } as unknown as TransformOptions);

//   Object.assign(IIFE, { [md5(transpiled.code)]: md5(code) });
//   // apps[md5(transpiled.code)] = require(md5(code));

//   return transpiled.code;
// };

// const BCbundle = new BroadcastChannel(location.href + "/bundle");
// Object.assign(globalThis, {
//   _toUmd: () => toUmd(mST().code, codeSpace),
//   toUmd,

//   IIFE,
//   umdTransform,
// });
// let rpcProvider;
// const mutex = new Mutex();

// BC.onmessage = async ({ data }) => {
//   if (!data.html) return;
//   if (data.counter === mST().i) return;

//   if (data.counter !== counterMax) return;

//   // counterMax--;

//   const sess = {
//     ...mST(),
//     // code,
//     ...data,
//     // codeSpace,
//     // i: counter,
//     // transpiled: transpiledCode!,
//     // html,
//     // css,
//   };

//   await wait(100);
//   if (data.counter !== counterMax) return;

//   syncWS(sess);
// };
const codeSpace = location.pathname.slice(1).split("/")[1];

let counterMax = 0;
const BC = new BroadcastChannel(`${location.origin}/live/${codeSpace}/`);

let processed = 0;
let s: AbortSignal;
BC.onmessage = async ({ data }) => {
  const signal = s;

  if (counterMax !== data.i) return;
  if (processed === data.i) return;
  processed = data.i;
  const { html, css, i } = data;
  console.log(i, { css, html });

  if (html) {
    // window.removeEventListener("message", responseListener);
    if (signal.aborted) return;
    const newSession = { ...mST(codeSpace), html, css, code: sess.code, transpiled: sess.transpiled, i };
    const jsonStr = JSON.stringify(newSession);
    const file = `/live/${codeSpace}/session.json`;

    await Promise.all([
      syncWS(newSession, signal),
      writeFile(file, jsonStr).catch(() => unlink(file).then(() => writeFile(file, jsonStr))),
    ]);

    // const BC = new BroadcastChannel(`${location.origin}/live/${codeSpace}/`);
    // BC.postMessage({ html, css, code, transpiled, i: counter });
    await buildT(codeSpace, location.origin, signal, { bundle: true });
    // BCbundle.postMessage({ counterMax });
  }
};
// let iframe: HTMLIFrameElement;
const sess = {
  i: counterMax,
  codeSpace,
  transpiled: "",
  code: "",
};
export async function runner({ code, counter, codeSpace, signal }: {
  code: string;
  codeSpace: string;
  counter: number;
  signal: AbortSignal;
}) {
  s = signal;
  console.log({ counter });
  if (counter <= counterMax) return;
  // if (!rpcProvider) {
  // rpcProvider = new RpcProvider(
  // (message, transfer) => iRef.current.contentWindow.postMessage(message, transfer),
  // );

  // iRef.current.contentWindow.onmessage = e => rpcProvider.dispatch(e.data);
  // }
  counterMax = counter;
  sess.i = counterMax;
  sess.code = code;

  // await mutex.runExclusive(async () => {
  // Console.log({ i, counter });

  // mod.i = counter;

  // if (code === mST().code) return;
  // if (mod.i > counter) return;

  // session.changes.push(changes);false
  // esbuildEsmTransform = esbuildEsmTransform ||
  //   (await import("./esbuildEsm.ts")).transform;

  try {
    // const ab = new AbortController();
    // const pp = await buildT(codeSpace, counter, ab.signal);
    // if (!pp) return;

    sess.transpiled = await esmTransform(code, origin);

    if (signal.aborted) return;

    BC.postMessage({ i: sess.i, transpiled: sess.transpiled });
    try {
      await writeFile(`/live/${codeSpace}/index.tsx`, code);
      await writeFile(`/live/${codeSpace}/index.js`, sess.transpiled);
    } catch {
      await unlink(`/live/${codeSpace}/index.tsx`);
      await unlink(`/live/${codeSpace}/index.js`);
      await writeFile(`/live/${codeSpace}/index.tsx`, code);
      await writeFile(`/live/${codeSpace}/index.js`, sess.transpiled);
    }

    // if (iframe) {
    //   iframe.remove();
    // }
    // iframe = document.createElement("iframe");
    // iframe.style.opacity = "0";
    // iframe.style.height = "1px";
    // iframe.style.width = "1px";
    // iframe.style.position = "absolute";

    // iframe.src = prerender(transpiled, origin, codeSpace);

    // window.addEventListener("message", responseListener);

    // document.body.appendChild(iframe);

    // BC .postMessage({ counter, i: counter, transpiled, codeSpace, code });

    // console.log("still alive2");
    // // patchSync(sess);
    // console.log("still alive3");

    // const built = await build(code, counter, controller.signal);
    // if (!built) return;
    // const { html, css } = await render(transpiledCode, codeSpace);
    //
    // console.log({ html, css });

    // if (!html) {
    // return;
    // }
    // console.log("still alive1");
    // // sess = {
    // //   ...mST(),
    // //   code,
    // //   // codeSpace,
    // //   i: counter,.
    // //   transpiled: transpiledCode,
    // //   html,
    // //   css,
    // // };
    // console.log("still alive2");
    // // patchSync(sess);
    // console.log("still alive3");
    // // syncWS(sess);
    // console.log("still alive4");
  } catch (error) {
    console.error({ error });
  } finally {
  }
  // });
}

// function prerender(transpiled: string, origin: string, codeSpace: string) {
//   const ASSET_HASH = md5(transpiled);

//   const js = importMapReplace(transpiled, location.origin, location.origin).replace(
//     `export {`,
//     "const ModASSET_HASH = stdin_default;",
//   ).replace("stdin_default as default", "").slice(0, -3);

//   return createHTML(
//     HTML.replace(
//       "/**reset*/",
//       resetCSS,
//     )
//       .replace(
//         `<div id="root"></div>`,
//         `
//         <div id="root" style="height: 100%;"></div>
//         <script type="module">

//         import {render, prerender} from "${origin}/src/render.mjs";

//         ${js}

//         prerender(ModASSET_HASH).then(res=>window.parent.postMessage(res))

//         </script>`,
//       ).split("ASSET_HASH").join(ASSET_HASH),
//   );
// }
