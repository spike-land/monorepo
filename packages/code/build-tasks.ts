import { copy } from "esbuild-plugin-copy";
import { readdir } from "fs/promises";
import { getCommonBuildOptions } from "./build-config.ts";
import { build } from "./buildOperations.ts";
import { environment } from "./helpers.ts";

export type Environment = "development" | "production";

const isProduction = environment === "production";

const buildWorkerEntryPoint = async (entry: string): Promise<void> => {
  await build({
    ...getCommonBuildOptions(environment),
    entryPoints: [`monaco-editor/esm/${entry}`],
    bundle: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    footer: { js: "// build time: 1" },
    minifyWhitespace: false,
    treeShaking: true,
    mangleQuoted: true,
    platform: "browser",
    format: "iife",
    outdir: "dist",
    minify: true,
  });
};

export async function buildWorkers(): Promise<void> {
  const workerEntryPoints = [
    "vs/language/json/json.worker.js",
    "vs/language/css/css.worker.js",
    "vs/language/html/html.worker.js",
    "vs/language/typescript/ts.worker.js",
    "vs/editor/editor.worker.js",
  ];

  await Promise.all(workerEntryPoints.map(buildWorkerEntryPoint));
}

export async function buildMainScripts(): Promise<void> {
  const entryPoints = [
    "src/prettierEsm.ts",
    "src/memfs.ts",
    "src/ata.ts",
    "src/LangChain.ts",
    "src/dts.ts",
    "src/ataWorker.ts",
  ];

  await build({
    ...getCommonBuildOptions(environment),
    entryPoints,
    format: "iife",
    outdir: "dist/workerScripts",
    minify: true,
    outExtension: { ".js": ".js" },
  });
}

export async function buildTranspileScript(): Promise<void> {
  await build({
    ...getCommonBuildOptions(environment),
    entryPoints: ["src/transpile.ts"],
    outExtension: { ".js": ".js" },
    format: "iife",
    outdir: "dist/workerScripts",
    minify: false,
    treeShaking: false,
  });
}

export const buildWasm = async (): Promise<void> => {
  await build({
    ...getCommonBuildOptions(environment),
    entryPoints: ["src/esbuildWASM.ts"],
    format: "esm",
    outdir: "dist",
    minify: true,
  });
};

export async function buildServiceWorker(): Promise<void> {
  await build({
    ...getCommonBuildOptions(environment),
    entryPoints: ["src/sw.ts"],
    format: "iife",
    outExtension: { ".js": ".js" },
    minifySyntax: true,
    minifyIdentifiers: true,
    minifyWhitespace: false,
    target: "es2024",
  });
}

const createEntryPoints = async (dir: string): Promise<string[]> => {
  const files = await readdir(`src/@/${dir}`);
  return files.filter(Boolean).map((file) => `src/@/${dir}/${file}`);
};

const createAliases = async (dir: string): Promise<Record<string, string>> => {
  const files = await readdir(`src/@/${dir}`);
  return Object.fromEntries(
    files.map((file) => [
      `@/${dir}/${file}`,
      `/@/${dir}/${file.replace(/\.(ts|tsx)$/, ".mjs")}`,
    ]),
  );
};

export async function buildMainBundle(wasmFile: string): Promise<void> {
  const buildOptions = getCommonBuildOptions(environment);

  const uiEntryPoints = await createEntryPoints("components/ui");
  const libEntryPoints = await createEntryPoints("lib");
  const externalEntryPoints = await createEntryPoints("external");

  await build({
    ...buildOptions,
    splitting: false,
    format: "esm",
    minifySyntax: isProduction,
    minifyIdentifiers: isProduction,
    minifyWhitespace: false,
    bundle: false,
    treeShaking: isProduction,
    mangleQuoted: false,
    sourcemap: false,
    legalComments: "none",
    target: "es2024",
    external: undefined,
    alias: undefined,
    outdir: "dist/@/",
    platform: "browser",
    entryPoints: [...uiEntryPoints, ...libEntryPoints, ...externalEntryPoints],
  });

  const uiAliases = await createAliases("components/ui");
  const libAliases = await createAliases("lib");
  const externalAliases = await createAliases("external");

  const extraAliases = { ...uiAliases, ...libAliases, ...externalAliases };

  await build({
    ...buildOptions,
    splitting: true,
    format: "esm",
    minifySyntax: isProduction,
    minifyIdentifiers: isProduction,
    minifyWhitespace: false,
    bundle: true,
    treeShaking: isProduction,
    mangleQuoted: false,
    sourcemap: false,
    target: "es2024",
    allowOverwrite: true,
    legalComments: "none",
    platform: "browser",
    plugins: [
      ...buildOptions.plugins,
      copy({
        resolveFrom: "cwd",
        assets: [
          {
            from: ["./src/assets/*"],
            to: ["./dist/assets"],
          },
          {
            from: "./src/assets/manifest.json",
            to: "./dist",
          },
          {
            from: "./src/index.html",
            to: "./dist",
          },
          {
            from: "./src/assets/favicons/favicon.ico",
            to: "./dist",
          },
          {
            from: "./src/assets/favicons/chunk-chunk-fe2f7da4f9ccc2.png",
            to: "./dist/assets/favicons/chunk-chunk-fe2f7da4f9ccc2.png",
          },
        ],
      }),
    ],
    entryPoints: [
      "src/modules.ts",
      "src/motion.ts",
      "src/start.ts",
      "src/emotion.ts",
      "src/cf-esbuild.mjs",
      "src/reactMod.ts",
      "src/reactDom.ts",
      "src/reactDomClient.ts",
      "src/jsx.ts",
      "src/emotionJsxRuntime.ts",
      "src/shared.ts",
      "src/Wrapper.tsx",
      "src/app/globals.css",
    ],
    alias: {
      ...buildOptions.alias,
      "@src/swVersion": "/swVersion.mjs",
      "esbuild-wasm/esbuild.wasm": `./${wasmFile}`,
      ...extraAliases,
      ...(isProduction ? {} : {
        "react": "preact/compat",
        "react-dom": "preact/compat",
      }),
    },
    external: [
      ...(buildOptions.external ?? []),
      "/swVersion.mjs",
      `./${wasmFile}`,
      "esbuild-wasm/esbuild.wasm",
    ],
  });
}
