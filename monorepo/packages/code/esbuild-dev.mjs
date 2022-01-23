import esbuild from "esbuild";

import * as importMap from "esbuild-plugin-import-map";

import jsonData from "./js/importmap.json" assert { type: "json" };

const workerEntryPoints = [
  // "vs/language/json/json.worker.js",
  // "vs/language/css/css.worker.js",
  // "vs/language/html/html.worker.js",
  "vs/language/typescript/ts.worker.js",
  "vs/editor/editor.worker.js",
].map((entry) => `monaco-editor/esm/${entry}`);

await esbuild.build({
  entryPoints: [...workerEntryPoints, "./js/workers/prettier.worker.js"],
  bundle: true,
  minify: true,
  target: "es",
  sourcemap: false,
  treeShaking: true,
  format: "iife",
  outdir: "js/dist/workers/",
});

await esbuild.build({
  entryPoints: ["js/monacoTs.ts"],
  bundle: true,
  minify: true,
  treeShaking: true,
  target: "esnext",
  sourcemap: false,
  format: "esm",
  platform: "browser",
  loader: {
    ".ttf": "file",
    ".css": "file",
  },
  outdir: "js/vendor/monaco",
});

// await esbuild.build({
//   entryPoints: [""],
//   bundle: false,
//   format: "esm",
//   outfile: "js/dist/editor.mjs",
//   loader: {
//     ".ttf": "file",
//   },
// });

// const impData = jsonData.imports;
// console.log(jsonData.imports);

// const importData = Object.keys(jsonData.imports).filter((name) =>
//   !name.includes("@spike.land") || name.includes("@spike.land/esm")
// );

// let imports = {};
// importData.map((d) => (Object.assign(imports, { [d]: jsonData.imports[d] })));

importMap.load(jsonData);

// console.log(imports);

// esbuild.build({
//   entryPoints: ["js/codeLoader.mjs"],
//   bundle: true,
//   format: "esm",
//   minify: false,
//   treeShaking: false,
//   sourcemap: true,
//   resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
//   target: ["es2018"],
//   plugins: [importMap.plugin()],
//   outfile: "dist/dev.mjs",
// }).catch(() => process.exit(1));
const build = (entryPoints) =>
  esbuild.build({
    entryPoints,
    "outExtension": { ".js": ".mjs" },
    bundle: true,
    format: "esm",
    minify: false,
    splitting: true,
    sourcemap: "inline",
    allowOverwrite: true,
    treeShaking: true,
    platform: "browser",
    chunkNames: "chunks/[name]-[hash]",
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
    target: ["esnext"],
    plugins: [importMap.plugin()],
    loader: {
      ".ttf": "file",
      ".worker.js": "dataurl",
      ".wasm": "dataurl",
    },
    outdir: "js/dist",
  }).catch(() => process.exit(1));

// await build([
//   "js/renderPreviewWindow.tsx",
//   "js/renderToString.tsx",
//   "js/session.tsx",
// ]);
// await build([
//   //   "js/renderPreviewWindow.tsx",
//   //   "js/templates.ts",
//   //   "js/renderToString.tsx",

// ]);

await build([
  "js/starter.mjs",
  "js/LazyLoadedComponent.tsx",
]);

// esbuild.build({
//   entryPoints: [
//     "js/mui.ts",
//   ],
//   "outExtension": { ".js": ".mjs" },
//   bundle: true,
//   format: "esm",
// minify: fa,

//   splitting: true,
//   treeShaking: true,
//   platform: "browser",
//   sourcemap: false,
//   resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
//   target: ["es2020"],
//   plugins: [importMap.plugin()],
//   outdir: "dist",
// }).catch(() => process.exit(1));

// esbuild.build({
//   entryPoints: ["js/ws.mjs"],
//   bundle: true,
//   format: "esm",
//   minify: false,
//   treeShaking: false,
//   sourcemap: true,
//   resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
//   target: ["es2018"],
//   plugins: [importMap.plugin()],
//   outfile: "dist/ws.mjs",
// }).catch(() => process.exit(1));
