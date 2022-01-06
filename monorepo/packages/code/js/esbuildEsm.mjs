import { Mutex } from "async-mutex";
import * as esbuild from "https://unpkg.com/esbuild-wasm@0.14.10/esm/browser.min.js";
import { wait } from "./wait";

const init = esbuild.initialize({
  wasmURL: "https://unpkg.com/esbuild-wasm@0.14.10/esbuild.wasm",
});

let initFinished = false;
const mutex = new Mutex();

export const transform = async (code, retry = 4) => {
  const startTime = performance.now();

  if (initFinished || await init) {
    initFinished = true;
  }

  let result;
  try {
    await mutex.waitForUnlock();
    result = await esbuild.transform(code, {
      loader: "tsx",
      target: "es2018",
    });
  } catch (e) {
    if (retry > 0) {
      await wait(100);
      return transform(code, retry - 1);
    }
    throw e;
  }

  const endTime = performance.now();

  console.log(`esbuildEsmTransform: took ${endTime - startTime} milliseconds`);
  return result.code;
};
