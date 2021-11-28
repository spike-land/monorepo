import esbuild from "esbuild";

import * as importMap from "esbuild-plugin-import-map";

import jsonData from "./js/importmap.json" assert { type: "json" };

const importData = Object.keys(jsonData.imports).filter((name) =>
  !name.includes("@spike.land") || name.includes("@spike.land/esm")
);

let imports = {};
importData.map((d) => (Object.assign(imports, { [d]: jsonData.imports[d] })));

importMap.load({
  imports,
});

console.log(imports);

esbuild.build({
  entryPoints: ["js/codeLoader.mjs"],
  bundle: true,
  format: "esm",
  minify: false,
  treeShaking: false,
  sourcemap: true,
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".json", ".mjs"],
  target: ["es2018"],
  plugins: [importMap.plugin()],
  outfile: "dev.mjs",
}).catch(() => process.exit(1));
