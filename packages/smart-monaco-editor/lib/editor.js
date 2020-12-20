import { importScript } from "https://unpkg.com/@zedvision/code@8.6.6/src/importScript.js";
import * as monaco from "https://cdn.skypack.dev/monaco-editor";
export const isMobile = () => {
    if (typeof window === "undefined")
        return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
};
export const startMonaco = async ({ onChange, code, language, options }) => {
    let aceEditor = null;
    const { document } = window;
    const container = document.getElementById("container");
    if (!container) {
        const el = document.getElementById("container");
        el.id = "container";
        document.body.appendChild(el);
    }
    const modelUri = language === "typescript"
        ? "file:///main.tsx"
        : "file:///main.html";
    if (isMobile()) {
        // some code.
        const aceEl = window.document.createElement("div");
        aceEl.id = "ace";
        window.document.body.appendChild(aceEl);
        await importScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js");
        language === "typescript"
            ? await importScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-typescript.min.js")
            : await importScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js");
        await importScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-monokai.min.js");
        window.document.getElementById("ace").style.setProperty("display", "block");
        container.style.setProperty("display", "none");
        const { ace } = window;
        aceEditor = ace.edit("ace");
        aceEditor.getSession().setMode("ace/mode/typescript");
        const setThemeForAce = (wait) => setTimeout(() => {
            const aceEditor = ace.edit("ace");
            const theme = aceEditor.getTheme();
            if (theme !== "ace/theme/monokai ") {
                aceEditor.setOptions({
                    fontSize: "14pt",
                });
                aceEditor.setTheme("ace/theme/monokai");
                setThemeForAce(2 * wait);
            }
        }, wait);
        setThemeForAce(100);
        aceEditor.setValue(code);
        aceEditor.blur();
    }
    let model;
    try {
        model = monaco.editor.getModel(modelUri);
        if (model.getValue() !== code) {
            model.setValue(code);
        }
    }
    catch (_a) {
        model = await monaco.editor.createModel(code, language, monaco.Uri.parse(modelUri));
    }
    const modules = {
        monaco: monaco,
        editor: monaco.editor.create(window.document.getElementById("container"), {
            formatOnType: false,
            scrollbar: {
                horizontal: "hidden",
                verticalHasArrows: true,
                verticalScrollbarSize: 20,
            },
            minimap: {
                enabled: false,
            },
            folding: false,
            glyphMargin: false,
            wordWrap: "off",
            mouseWheelZoom: false,
            wordWrapColumn: 80,
            useTabStops: false,
            dragAndDrop: false,
            disableLayerHinting: true,
            formatOnPaste: false,
            disableMonospaceOptimizations: true,
            showUnused: true,
            //       glyphMargin: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            autoIndent: "full",
            accessibilitySupport: "off",
            autoClosingQuotes: "beforeWhitespace",
            padding: {
                bottom: 300,
            },
            lineNumbers: "on",
            autoClosingBrackets: "beforeWhitespace",
            autoClosingOvertype: "auto",
            suggest: {},
            codeLens: true,
            autoSurround: "languageDefined",
            // acceptSuggestionOnCommitCharacter: true,
            trimAutoWhitespace: false,
            codeActionsOnSaveTimeout: 100,
            model,
            value: code,
            language: language,
            theme: "vs-dark",
            ...options,
        }),
    };
    modules.editor.onDidChangeModelContent(() => onChange(modules.editor.getValue()));
    aceEditor && aceEditor.session.on("change", function () {
        const value = aceEditor.getValue();
        modules.editor.setValue(value);
        onChange(value);
    });
    aceEditor &&
        document.getElementById("container").replaceWith(document.getElementById("ace"));
    modules.monaco.languages.typescript.typescriptDefaults
        .setDiagnosticsOptions({
        noSuggestionDiagnostics: true,
        noSemanticValidation: true,
        noSyntaxValidation: true,
    });
    if (language === "typescript") {
        const importHelper = [
            {
                name: "react",
                url: "https://cdn.skypack.dev/@types/react@17.0.0/index.d.ts",
                depend: ["global", "csstype", "react-dom", "prop-types"],
            },
            {
                name: "global",
                url: "https://cdn.skypack.dev/@types/react@17.0.0/global.d.ts",
                depend: [],
            },
            {
                name: "prop-types",
                url: "https://cdn.skypack.dev/@types/prop-types@15.7.3/index.d.ts",
                depend: [],
            },
            {
                name: "react-dom",
                url: "https://cdn.skypack.dev/@types/react-dom@17.0.0/index.d.ts",
                depend: [],
            },
            {
                name: "csstype",
                url: "https://cdn.skypack.dev/csstype@3.0.5/index.d.ts",
                depend: [],
            },
            {
                name: "@emotion/styled/base.d.ts",
                url: "https://cdn.skypack.dev/@emotion/styled@11.0.0/types/base.d.ts",
                depend: ["@emotion/react", "@emotion/serialize", "react"],
            },
            {
                name: "@emotion/styled/index.d.ts",
                url: "https://cdn.skypack.dev/@emotion/styled@11.0.0/types/index.d.ts",
                depend: ["@emotion/react", "@emotion/serialize", "react"],
            },
            {
                name: "@emotion/cache/index.d.ts",
                url: "https://cdn.skypack.dev/@emotion/cache@11.0.0/types/index.d.ts",
                depend: ["@emotion/utils"],
            },
            {
                name: "@emotion/react/index.d.ts",
                url: "https://cdn.skypack.dev/@emotion/react@11.1.2/types/index.d.ts",
                depend: ["@emotion/cache"],
            },
            {
                name: "@emotion/react/jsx-namespace.d.ts",
                url: "https://cdn.skypack.dev/@emotion/react@11.1.2/types/jsx-namespace.d.ts",
                depend: ["@emotion/utils", "csstype"],
            },
            {
                name: "@emotion/react/css-prop.d.ts",
                url: "https://cdn.skypack.dev/@emotion/react@11.1.2/types/css-prop.d.ts",
                depend: ["@emotion/utils", "csstype"],
            },
            {
                name: "@emotion/react/helper.d.ts",
                url: "https://cdn.skypack.dev/@emotion/react@11.1.2/types/helper.d.ts",
                depend: ["@emotion/utils", "csstype"],
            },
            {
                name: "@emotion/react/theming.d.ts",
                url: "https://cdn.skypack.dev/@emotion/react@11.1.2/types/theming.d.ts",
                depend: ["@emotion/utils", "csstype"],
            },
            {
                name: "@emotion/serialize/index.d.ts",
                url: "https://cdn.skypack.dev/@emotion/serialize@1.0.0/types/index.d.ts",
                depend: ["@emotion/utils", "csstype"],
            },
            {
                name: "@emotion/utils/index.d.ts",
                url: "https://cdn.skypack.dev/@emotion/utils@1.0.0/types/index.d.ts",
                depend: [],
            },
            {
                name: "framer-motion",
                url: "https://cdn.skypack.dev/framer-motion@3.1.1/dist/framer-motion.d.ts",
                depend: [],
            },
            {
                name: "popmotion",
                url: "https://cdn.skypack.dev/popmotion@9.0.2/lib/index.d.ts",
            },
            {
                name: "@zedvision/qrious/index.d.ts",
                url: "https://unpkg.com/@zedvision/qrious@8.5.7/dist/qrious.d.ts",
            },
        ];
        //# sourceMappingURL=importHelper.js.map
        const dts = importHelper.map(({ name, url }) => (async () => modules.monaco.languages.typescript.typescriptDefaults.addExtraLib(await (await fetch(url)).text(), name.includes("@")
            ? `file:///node_modules/${name}`
            : `file:///node_modules/@types/${name}/index.d.ts`))());
        modules.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: modules.monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTsExtensions: true,
            allowUmdGlobalAccess: true,
            strict: true,
            allowJs: true,
            noEmitOnError: true,
            allowSyntheticDefaultImports: true,
            moduleResolution: modules.monaco.languages.typescript.ModuleResolutionKind.Nodejs,
            module: modules.monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            typeRoots: ["node_modules/@types"],
            jsx: "react-jsx",
            esModuleInterop: true,
        });
        await Promise.all(dts);
        modules.monaco.languages.typescript.typescriptDefaults
            .setDiagnosticsOptions({
            noSuggestionDiagnostics: false,
            noSemanticValidation: false,
            noSyntaxValidation: false,
        });
        return modules;
    }
};
//# sourceMappingURL=editor.js.map