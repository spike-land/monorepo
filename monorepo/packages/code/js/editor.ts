import * as monaco from "monaco-editor";
import "monaco-editor/min/vs/editor/editor.main.css";
import { dtsFiles } from "./types.mjs";

import pAll from "p-all";

const {
  reactDts,
  jsxDevRuntimeDts,
  jsxRuntimeDts,
  reactExpDts,
  globalDts,
  propTypesDts,
  cssTypeDts,
  framerDts,
} = dtsFiles;

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId: string, label: string) {
    //     // if (label === "json") {
    //     //   return "./dist/workers/monaco-editor/esm/vs/language/json/json.worker.js";
    //     // }
    //     // if (label === "css" || label === "scss" || label === "less") {
    //     //   return "./dist/workers/monaco-editor/esm/vs/language/css/css.worker.js";
    //     // }
    //     // if (label === "html" || label === "handlebars" || label === "razor") {
    //     //   return "./dist/workers/monaco-editor/esm/vs/language/html/html.worker.js";
    //     // }
    if (label === "typescript" || label === "javascript") {
      return "dist/workers/language/typescript/ts.worker.js";
    }
    return "dist/workers/editor/editor.worker.js";
    //     return editorWorker;
  },
};
// };

// self.MonacoEnvironment = MonacoEnvironment;

let started = false;

export const startMonaco = async (
  { code, container }: { code: string; container: HTMLDivElement },
) => {
  console.log("monaco-editor");
  if (!started) started = true;
  else return;
  const shadowRoot = container.attachShadow({
    mode: "open",
  });
  const innerContainer = document.createElement("div");
  shadowRoot.appendChild(innerContainer);
  innerContainer.style.width = "100%";
  innerContainer.style.height = "100%";

  const outerStyle = document.createElement("style");
  outerStyle.innerText = ` @font-face {
    font-family: codicon;
    font-display: block;
    src: url(./base/browser/ui/codicons/codicon/codicon.ttf) format("truetype");
}`;
  document.head.appendChild(outerStyle);

  const innerStyle = document.createElement("style");
  innerStyle.innerText = `@import url("dist/starter.css");
  @font-face {
    font-family: codicon;
    font-display: block;
    src: url(./base/browser/ui/codicons/codicon/codicon.ttf) format("truetype");
}
  
  `;
  shadowRoot.appendChild(innerStyle);

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES5,
    lib: [
      "dom",
      "dom.iterable",
      "esnext",
    ],
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,

    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    declaration: false,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    noEmitOnError: true,
    // jsxFactory: "jsx",
    maxNodeModuleJsDepth: 10,

    jsxImportSource: "@emotion/react",
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    allowUmdGlobalAccess: true,
    // allowUmdGlobalAccess : true,
    // noLibCheck: t,
  });

  monaco.languages.typescript.typescriptDefaults
    .setDiagnosticsOptions({
      noSuggestionDiagnostics: true,
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });

  // document.head.appendChild(Object.assign(document.createElement("link"), {
  //   "data-name": "vs/editor/editor.main",
  //   "rel": "stylesheet",
  //   "href": "./dist/css/" + ],
  // }));

  const editor = monaco.editor.create(innerContainer, {
    model: monaco.editor.createModel(
      code,
      "typescript",
      monaco.Uri.parse("file:///app/index.tsx"),
    ),
    // lightbulb: { enabled: false },
    language: "typescript",
    useShadowDOM: false,
    theme: "vs-dark",
    // codeLens: false,
    // suggest: false,
    // smoothScrolling: true,
    // scrollPredominantAxis: true,
    // scrollbar: {
    //   handleMouseWheel: true,
    //   alwaysConsumeMouseWheel: false,
    //   horizontal: "auto",
    //   vertical: "auto",
    //   useShadows: true,
    // },
    // selectionHighlight: true,
    // selectOnLineNumbers: true,
    // cursorSmoothCaretAnimation: true,
    //  cursorBlinking: "smooth",
    // hideCursorInOverviewRuler: true,
    // cursorSurroundingLinesStyle: "all",
    // cursorSurroundingLines: 4,
    autoClosingBrackets: "languageDefined",
    //autoClosingDelete: "auto",
    //autoClosingOvertype: "auto",
    // autoClosingQuotes: "always",
    // autoDetectHighContrast: true,
    // autoIndent: "full",
    //   autoSurround: "languageDefined",
    //  automaticLayout: true,
    // trimAutoWhitespace: true,
    // acceptSuggestionOnCommitCharacter: true,
    // acceptSuggestionOnEnter: "smart",
    //  cursorSmoothCaretAnimation: true,
    // smartSelect: {
    //   selectLeadingAndTrailingWhitespace: false,
    // },
    // wordBasedSuggestionsOnlySameLanguage: true,

    // smoothScrolling: true,
    // scrollBeyondLastColumn: 20,
    // scrollBeyondLastLine: true,
    // formatOnPaste: true,
    // formatOnType: true,
  });

  // const { AutoTypings, LocalStorageCache } = await import(
  //   "@spike.land/monaco-editor-auto-typings"
  // );

  // const autoTypings = AutoTypings.create(editor, monacoTs.languages, {
  //   sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
  //   // Other options...
  // });

  // monacoTs.editor.create(
  //   innerContainer,
  //   {
  //     formatOnType: false,

  //     scrollbar: {
  //       // Subtle shadows to the left & top. Defaults to true.
  //       useShadows: false,

  //       // Render vertical arrows. Defaults to false.
  //       verticalHasArrows: true,
  //       // Render horizontal arrows. Defaults to false.
  //       horizontalHasArrows: true,

  //       // Render vertical scrollbar.
  //       // Accepted values: 'auto', 'visible', 'hidden'.
  //       // Defaults to 'auto'
  //       vertical: "visible",
  //       // Render horizontal scrollbar.
  //       // Accepted values: 'auto', 'visible', 'hidden'.
  //       // Defaults to 'auto'
  //       horizontal: "visible",

  //       verticalScrollbarSize: 17,
  //       horizontalScrollbarSize: 17,
  //       arrowSize: 30,
  //     },
  //     minimap: {
  //       enabled: true,
  //       side: "right",
  //       size: "fit",
  //       showSlider: "always",
  //     },
  //     folding: true,
  //     glyphMargin: false,
  //     wordWrap: "off",
  //     showUnused: true,

  //     //       glyphMargin: true,
  //     scrollBeyondLastLine: false,
  //     autoClosingQuotes: "beforeWhitespace",
  //     padding: {
  //       bottom: 300,
  //     },
  //     lineNumbers: "on", //isMobile() ? "off" : "on",

  //     autoClosingBrackets: "beforeWhitespace",

  //     smartSelect: {
  //       selectLeadingAndTrailingWhitespace: true,
  //     },
  //     autoClosingOvertype: "auto",

  //     suggest: {},
  //     codeLens: true,
  //     autoSurround: "languageDefined",
  //     // acceptSuggestionOnCommitCharacter: true,
  //     trimAutoWhitespace: false,
  //     codeActionsOnSaveTimeout: 100,
  //     model,
  //     value: code,
  //     language: language,
  //     theme: "vs-dark",
  //     ...options,
  //   },
  // ),
  //};

  // function getDefaultComplierOpts() {
  //   return { target: 99, jsx: 1, allowNonTsExtensions: true };
  // }

  window.addEventListener("resize", () => {
    // const { width, height } = container.getClientRects()[0];
    // innerContainer.style.width = `${Math.min(window.innerWidth, width)}px`;
    // innerContainer.style.height = `${Math.min(window.innerHeight, height)}px`;

    editor.layout();
  });

  // monaco.languages.typescript.typescriptDefaults.addExtraLib(
  //   `export interface RegisteredCache {
  //     [key: string]: string
  //   }

  //   export interface StyleSheet {
  //     container: HTMLElement
  //     nonce?: string
  //     key: string
  //     insert(rule: string): void
  //     flush(): void
  //     tags: Array<HTMLStyleElement>
  //   }

  //   export interface EmotionCache {
  //     inserted: {
  //       [key: string]: string | true
  //     }
  //     registered: RegisteredCache
  //     sheet: StyleSheet
  //     key: string
  //     compat?: true
  //     nonce?: string
  //     insert(
  //       selector: string,
  //       serialized: SerializedStyles,
  //       sheet: StyleSheet,
  //       shouldCache: boolean
  //     ): string | void
  //   }

  //   export interface SerializedStyles {
  //     name: string
  //     styles: string
  //     map?: string
  //     next?: SerializedStyles
  //   }

  //   export const isBrowser: boolean
  //   export function getRegisteredStyles(
  //     registered: RegisteredCache,
  //     registeredStyles: Array<string>,
  //     classNames: string
  //   ): string
  //   export function insertStyles(
  //     cache: EmotionCache,
  //     serialized: SerializedStyles,
  //     isStringTag: boolean
  //   ): string | void`,
  //   "/app/types/emotionu/index.d.ts",
  // );

  // monaco.languages.typescript.typescriptDefaults.addExtraLib(
  //   `export const i: number;`,
  //   "file:///node_modules/@types/zozi/index.d.ts",
  // );

  (async () => {
    const importHelper = [
      {
        name: "react",
        url: reactDts,
        depend: ["global", "csstype", "prop-types"],
      },
      {
        name: "react/jsx-runtime",
        url: jsxRuntimeDts,
        depend: ["global", "csstype", "prop-types"],
      },
      {
        name: "react/jsx-dev-runtime",
        url: jsxDevRuntimeDts,
        depend: ["global", "csstype", "prop-types"],
      },
      {
        name: "react-exp",
        url: reactExpDts,
        depend: [],
      },
      {
        name: "global",
        url: globalDts,
        depend: [],
      },
      {
        name: "prop-types",
        url: propTypesDts,
        depend: [],
      },
      {
        name: "csstype",
        url: cssTypeDts,
        depend: [],
      },
      {
        name: "@emotion/base",
        url: "https://unpkg.com/@emotion/styled@11.8.1/types/base.d.ts",
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/styled",
        url: "https://unpkg.com/@emotion/styled@11.8.1/types/index.d.ts",
        depend: [
          "@emotion/react",
          "@emotion/serialize",
          "react",
        ],
      },
      {
        name: "@emotion/cache",
        url: "https://unpkg.com/@emotion/cache@11.7.1/types/index.d.ts",
        depend: ["@emotion/utils"],
      },
      {
        name: "@emotion/react",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/index.d.ts",
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-runtime",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/jsx-runtime.d.ts",
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-dev-runtime",
        url:
          "https://unpkg.com/@emotion/react@11.8.1/types/jsx-dev-runtime.d.ts",
        depend: ["@emotion/cache"],
      },
      {
        name: "@emotion/react/jsx-namespace",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/jsx-namespace.d.ts",
        depend: ["@emotion/utils", "type"],
      },
      {
        name: "@emotion/react/theming",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/theming.d.ts",
        depend: ["@emotion/utils", "type"],
      },
      {
        name: "@emotion/react/css-prop",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/css-prop.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/react/helper",
        url: "https://unpkg.com/@emotion/react@11.8.1/types/helper.d.ts",
        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/serialize",
        url: "https://unpkg.com/@emotion/serialize@1.0.2/types/index.d.ts",

        depend: ["@emotion/utils", "csstype"],
      },
      {
        name: "@emotion/utils",
        url: "https://unpkg.com/@emotion/utils@1.1.0/types/index.d.ts",
        depend: [],
      },
      {
        name: "framer-motion",
        url: framerDts,
        depend: ["popmotion"],
      },
      {
        name: "popmotion",
        url: "https://unpkg.com/popmotion@11.0.3/lib/index.d.ts",
      },
    ];

    const dts = importHelper.map(({ name, url }) =>
      async () =>
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          await (await fetch(
            url,
          )).text(),
          `file:///node_modules/${name}/index.d.ts`,
        )
    );

    await pAll(dts, { concurrency: 2 });

    monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSuggestionDiagnostics: false,
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });
  })();

  // return modules;
  return { editor, monaco: { ...monaco } };
};

// modules.monacoTs.languages.typescript.typescriptDefaults.setCompilerOptions({
//     target: 99,
//     allowNonTsExtensions: true,
//     allowUmdGlobalAccess: true,
//     strict: true,
//     allowJs: true,
//     noEmitOnError: true,
//     allowSyntheticDefaultImports: true,
//     moduleResolution: 2, //nodeJS
//     module: 99,
//     noEmit: true,

//     typeRoots: ["node_modules/@types"],
// jsx: 3,
//     esModuleInterop: true,
//   });
// );
//};

// function isMobile() {
//   if (typeof window === "undefined") {
//     return false;
//   }

//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
//     .test(
//       window.navigator.userAgent,
//     );
// }
