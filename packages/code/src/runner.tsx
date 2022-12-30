// Import type { Dispatch, ReactNode, SetStateAction } from "react";
// import { Mutex } from "async-mutex";
import { buildT } from "./esbuildEsm";
import { esmTransform } from "./esmTran";
import { wait } from "./wait";
import { syncWS } from "./ws";

// import { RpcProvider } from "worker-rpc";

// import type { ICodeSession } from "./session";
import { unlink, writeFile } from "./fs";
import { mST } from "./session";

// Object.assign(globalThis, { transform, build, toUmd });

let counterMax = mST().i;
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

const BC = new BroadcastChannel(location.href + "/");
const BCbundle = new BroadcastChannel(location.href + "/bundle");
// Object.assign(globalThis, {
//   _toUmd: () => toUmd(mST().code, codeSpace),
//   toUmd,

//   IIFE,
//   umdTransform,
// });
// let rpcProvider;
// const mutex = new Mutex();

BC.onmessage = async ({ data }) => {
  if (!data.html) return;
  if (data.counter === mST().i) return;

  if (data.counter !== counterMax) return;

  // counterMax--;

  const sess = {
    ...mST(),
    // code,
    ...data,
    // codeSpace,
    // i: counter,
    // transpiled: transpiledCode!,
    // html,
    // css,
  };

  await wait(100);
  if (data.counter !== counterMax) return;

  syncWS(sess);
};

export async function runner({ code, counter, codeSpace, signal }: {
  code: string;
  codeSpace: string;
  counter: number;
  signal: AbortSignal;
}) {
  if (counter <= counterMax) return;
  // if (!rpcProvider) {
  // rpcProvider = new RpcProvider(
  // (message, transfer) => iRef.current.contentWindow.postMessage(message, transfer),
  // );

  // iRef.current.contentWindow.onmessage = e => rpcProvider.dispatch(e.data);
  // }
  counterMax = counter;

  // await mutex.runExclusive(async () => {
  // Console.log({ i, counter });

  // mod.i = counter;

  // if (code === mST().code) return;
  // if (mod.i > counter) return;

  // session.changes.push(changes);false
  // esxildEsmTransform = esbuildEsmTransform ||
  //   (await import("./esbuildEsm.ts")).transform;

  try {
    // const ab = new AbortController();
    // const pp = await buildT(codeSpace, counter, ab.signal);
    // if (!pp) return;

    const transpiled = await esmTransform(code, origin);
    if (signal.aborted) return;
    await writeFile(`/live/${codeSpace}/index.js`, transpiled);
    BC.postMessage({ counter, i: counter, transpiled, codeSpace, code });

    try {
      console.log({ transpiled });

      await unlink(`/live/${codeSpace}/index.tsx`);

      await writeFile(`/live/${codeSpace}/index.tsx`, code);

      await buildT(codeSpace, location.origin, signal, true);
      BCbundle.postMessage({ counterMax });

      // fs.promises.writeFile(`/live/${codeSpace}/index.js`, bundle);
    } catch {
      console.error("bundle failed");
    }

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
