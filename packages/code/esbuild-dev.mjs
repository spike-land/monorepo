import esbuild from "esbuild";
import inlineWorkerPlugin from 'esbuild-plugin-inline-worker';
// import autoprefixer from "autoprefixer"
// import postcssNested from "postcss-nested"
import fs from "fs/promises";
// const { request } = require("http");
// require("monaco-editor/esm/vs/language/css/css.worker")
// const rmAsync = promisify(fs.rm);

const environment = process.env.NODE_ENV === "production"
  ? "production"
  : "development";

const isDevelopment = environment === "development";

const outdir = "./dist";
const target = "es2018";

console.log(`
-------------------------------------------------
--------------${environment}---------------------
-------------------------------------------------
-------------------------------------------------`);

const define = {
  "process.env.NODE_ENV": `"${environment}"`,
  "process.env.NODE_DEBUG": JSON.stringify(false),
  "process.env.DEBUG": JSON.stringify(false),
  "process.env.version": `"1.1.1"`,
  "global": "globalThis",
  "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
  // "libFileMap": JSON.stringify({}),
  "process": JSON.stringify({
    env: { NODE_ENV: "production" },
    version: "1.1.1",
    browser: true,
  }),
};
const plugins = [inlineWorkerPlugin()];

//[postcss({
 // plugins: [
   // inlineWorkerPlugin))
    // autoprefixer,
    // postcssNested
  // ]
// })];//

const buildOptions = {
  define,
  target,
  platform: "browser",
  plugins,
  external: ["./mST"],
  legalComments: "none",
};

const workerEntryPoints = [
  "vs/language/json/json.worker",
  "vs/language/css/css.worker",
  "vs/language/html/html.worker",
  "vs/language/typescript/ts.worker",
  "vs/editor/editor.worker",
];

const build = (entryPoints, format = "esm") =>
  esbuild.build({
    ...buildOptions,
    entryPoints,
    "outExtension": { ".js": ".mjs" },
    bundle: true,
    splitting: true,
    target,
    sourcemap: false,

    minify: false, //!isDevelopment,
    minifyWhitespace: false, //!isDevelopment,
    minifyIdentifiers: false, //!isDevelopment,
    minifySyntax: false, //!isDevelopment,
    legalComments: "none",
    ignoreAnnotations: true, //true,
    // external
    // external: [ "@emotion/react/*"],
    // sourcemap: true,
    treeShaking: true,
    logLimit: 0,
    metafile: true,
    keepNames: false,
    format,
    tsconfig: "./tsconfig.json",
    allowOverwrite: true,
    platform: "browser",
    chunkNames: "chunk-[name]-[hash]",
    assetNames: "chunk-[name]-[hash]",
    // entryNames: "[name]-[hash]",
    resolveExtensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".d.ts",
      ".css",
      ".json",
      ".mjs",
      ".js",
      ".wasm",
      ".workerJs.js",
      ".js?worker",
    ],
    metafile: true,
    define,
    loader: {
      ".ttf": "file",
      ".webp": "file",
      ".tsx": "tsx",
      ".jsx": "tsx",
      ".css": "css",
      ".ttf": "file",
      ".d.ts": "file",
      ".js": "tsx",
      ".workerJs.js": "file",
      ".wasm": "file",
    },
    outdir,
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  });

(async () => {
  await fs.rm("js/monaco-workers", { "recursive": true, force: true });

  await esbuild.build({
    entryPoints: workerEntryPoints.map((entry) => `monaco-editor/esm/${entry}`),
    bundle: true,
    define,
    treeShaking: true,
    minify: true, //!isDevelopment,
    minifyWhitespace: true, //!isDevelopment,
    minifyIdentifiers: true, //!isDevelopment,
    minifySyntax: true, //!isDevelopment,
    ignoreAnnotations: true,
    metafile: true,
    keepNames: false,
    platform: "browser",
    outExtension: { ".js": ".worker.js" },
    format: "iife",
    outbase: "monaco-editor/esm/vs",
    outdir: "./js/monaco-workers",
  });

  await build([
    "js/session.ts",
    "js/react-preact.ts",
    "js/motion.ts",
    "js/emotion.ts",
    "js/emotionJsxRuntime.ts",
    "js/ws.ts",
  ]);
})();

// await esbuild
//   .build({
//     entryPoints: ['dist/startMonaco.css'],
//     bundle: true,
//     outdir: 'dist',
//     allowOverwrite: true,
//     loader: {
//       ".ttf": "file",
//     },
//     plugins,
//   })
//   .catch(() => process.exit(1));
