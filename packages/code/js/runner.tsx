// import type { Dispatch, ReactNode, SetStateAction } from "react";
import { saveCode } from "./ws";
import { mST, patchSync } from "./session";
// import { renderFromString } from "./renderToString";
// import { toUmd } from "./toUmd";
import type { TransformOptions } from "esbuild-wasm";
import {init} from "./esbuildEsm"
// import { appFactory } from "starter";
// import { wait } from "wait";

// import type { Dispatch, SetStateAction, ReactNode } from "react";
// import { md5 } from "./md5";
// var Stream = require('stream/')

// import "es-module-shims";

// if ("serviceWorker" in navigator) {
//   const wb = new Workbox("/sw.js");

//   wb.register();
// }

// const hash = new Sha256();

// const importMap = { imports: {
//   "framer-motion": "/framer-motion.mjs",
//   "react-dom/server": "/react.mjs",
//   "@emotion/react": "/emotion.mjs",
//   "react": "/react.mjs",} };

// importShim.addImportMap(importMap)

// const debounced = debounce(runner, 300, {
//   maxWait: 600,
//   trailing: true,
//   leading: true,
// });

// export const runnerDebounced: typeof runner = (props) => debounced(props);
const mod = {
  i: 0,
  esbuild: init()
};


const esb = (async ()=>({transform: await (await (mod.esbuild)).transform}))();

export async function runner({ code, counter }: {
  code: string;
  codeSpace: string;
  counter: number;
}) {
  const esbuild = await esb;
  

  patchSync({...mST(), code, i: counter});

  // console.log({ i, counter });



  // mod.i = counter;

  // if (code === mST().code) return;
  // if (mod.i > counter) return;

  // session.changes.push(changes);
  // esbuildEsmTransform = esbuildEsmTransform ||
  //   (await import("./esbuildEsm.ts")).transform;

  try {
    const transpiled = await esbuild.transform(code, {
      loader: "tsx",
      format: "esm",
      treeShaking: true,
      tsconfigRaw: {
        "compilerOptions": {
          "jsx": "react-jsx",
          "module": "es2022",
          "jsxImportSource": "@emotion/react",
        },
      },
      target: "es2021",
    } as unknown as TransformOptions);

    patchSync({...mST(), transpiled: transpiled.code});


    //   try{
    //     (async ()=>{
    //       const name = `${location.origin}/live/${codeSpace}-${md5(code)}.tsx`;
    //   const UMD = await toUmd(code,name);
    //   console.log({ UMD });
    // //  console.log(UMD?.toJs(name));
    //     // const hashName = UMD?.hashMap[name];
    //     // UMD?.data[hashName!].code +
    //   // console.log(UMD.toJs(`${location.origin}/live/${codeSpace}-${md5(code)}.tsx`))
    //     })();
    //   }
    //   catch(e){
    //     console.error({e});
    //   }
    // if (transpiled.code === mST().transpiled) return;

    // let restartError = false;
    /// yellow
    if (transpiled.code.length > 0) {
      try {
        // console.log(transpiled);

        // await appFactory();
        // await wait(50);
        // const res = renderFromString( App);

        // if (res === null) {
        //   console.error("COULD NOT RENDER:");
        //   console.error({ code, transpiled: transpiled.code });
        //   return;
        // }
        // const { html, css } = renderFromString(codeSpace);

        // patchSync({...mST(), html, css});
        // console.log({html, css});
// if (counter !== mod.i) return;
         saveCode();

        // return;
      } catch (error) {
        console.error("EXCEPTION");
        console.error(error);
        // restartError = true;
        // console.error({ restartError });
        // return;
      }
    }
  } catch (error) {
    console.error({ error });
  }
}
