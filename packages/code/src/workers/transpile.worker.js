// deno-lint-ignore-file
// @ts-ignore
self.importScripts(`https://unpkg.com/comlink@4.3.0/dist/umd/comlink.js`);
// @ts-ignore
self.importScripts(
  `https://unpkg.com/@babel/standalone@7.12.12/babel.min.js`,
);

// @ts-ignore
if (!String.prototype.replaceAll) {
  // @ts-ignore
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (
      Object.prototype.toString.call(str).toLowerCase() === "[object regexp]"
    ) {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

// @ts-ignore
addEventListener("install", () => skipWaiting());
// @ts-ignore
addEventListener("activate", () => clients.claim());

const searchRegExp2 = /import.*from '/gi;
const replace2 = "https://cdn.skypack.dev/";
// const from = / from '/gi;

// const replaceWith = `const { $1 } = await import('$2');`;
const searchRegExp = /import.*react';/gi;

const searchRegExpMotion = /import.*framer-motion';/gi;
// const searchRegExp = /import /gi;

// const from = / from '/gi;
const replaceWith = "";
//

/**
 * @param {string} code
 *  @param {{emotionRenderer: string}} v
 */
const transform = (code, v) => {
  try {
    // @ts-ignore
    const safeCode = code.replaceAll(
      searchRegExp,
      replaceWith,
    ).replaceAll(
      searchRegExpMotion,
      replaceWith,
    ).replaceAll(searchRegExp2, replace2);

    // console.log(safeCode);

    // @ts-ignore
    const transformed = Babel.transform(
      `/** @jsx jsx */
      import {jsx, React, css, Fragment, Global, Motion, motion} from "${v.emotionRenderer}";
      
      ` + safeCode + `
      
      const {useState, useRef, useEffect} = React

      `,
      {
        compact: false,
        comments: false,
        plugins: [],
        presets: [
          "react",
          "es2017",
          ["typescript", { isTSX: true, allExtensions: true }],
        ],
      },
    ).code;

    // console.log(transformed);
    return transformed;
  } catch (e) {
    console.error(e);
    return "";
  }
};

// @ts-ignore
self.addEventListener(
  "connect",
  // @ts-ignore
  (e) => Comlink.expose(transform, e.ports[0]),
);

// @ts-ignore
self.addEventListener("message", (event) => {
  if (event.data.comlinkInit) {
    //@ts
    // @ts-ignore
    Comlink.expose(transform, event.data.port);
    return;
  }
});
