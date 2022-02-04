import { jsx } from "@emotion/react";

let formatter;
let transform;

let esbuildEsmTransform;
// Let esbuildTransform;
let babelTransform;
let getHtmlAndCss;
let initSess;

export const initSession = async (room, initData) => {
  initSess = initSess || (await import("./session.tsx")).default;

  return initSess(room, initData);
};

export const prettier = async (code) => {
  formatter = formatter || (await import("./formatter.mjs")).formatter;
  return await formatter(code);
};

// //

export async function startMonacoWithSession(session) {
  const monacoEditorDom = document.querySelector("#monacoEditor");

  const { startMonaco } = await import("./editor.ts");
  const throttle = (await import("lodash/throttle")).default;
  const onchangeCode = (ev) =>
    runner(editor.getModel().getValue(), ev.changes, session, ++session.i);
  const { editor, monaco } = await startMonaco(
    /**
     * @param {any} code
     */
    {
      language: "typescript",
      container: monacoEditorDom,
      code: session.code,
      /**
       * @param {string} code
       */
    },
  );

  editor.onDidChangeModelContent(throttle(onchangeCode, 100));

  window.monaco = monaco;
  session.editor = editor;

  // monaco.languages.registerOnTypeFormattingEditProvider("typescript", {
  //   autoFormatTriggerCharacters: ["}", "{", ")", "(", ";"],

  //   async provideOnTypeFormattingEdits(model) {
  //     const text = await formatter(model.getValue());

  //     return [
  //       {
  //         range: model.getFullModelRange(),

  //         text,
  //       },
  //     ];
  //   },
  // });

  window.sess = session;
}

async function getErrors({ monaco, editor }) {
  if (!monaco) {
    return [{ messageText: "Error with the error checking. Try to reload!" }];
  }

  const model = editor.getModel();
  const worker = await monaco.languages.typescript.getTypeScriptWorker();
  const client = await worker(model);

  const filename = model.uri.toString();
  const diag = client.getSemanticDiagnostics(filename);
  const comp = client.getCompilerOptionsDiagnostics(filename);
  const syntax = client.getSyntacticDiagnostics(filename);
  const fastError = await Promise.race([diag, comp, syntax]);

  // Model.dispose();
  console.log(fastError);
  return [];
}

// Let getHtmlAndCss;

async function runner(c, changes = null, session, counter) {
  session.changes.push(changes);
  formatter = formatter || (await import("./formatter.mjs")).formatter;
  babelTransform = babelTransform ||
    (await import("./babelEsm.ts")).transform;

  esbuildEsmTransform = esbuildEsmTransform ||
    (await import("./esbuildEsm.ts")).transform;

  transform = esbuildEsmTransform;

  session.errorText = "";

  try {
    const cd = await formatter(c);

    const transpiled = await transform(cd);

    let restartError = false;
    /// yellow
    if (transpiled.length > 0) {
      if (counter < session.i) {
        return;
      }

      try {
        const { getHtmlAndCss } = await import("./vendor/renderToString.mjs");

        if (counter < session.i) {
          return;
        }

        const App = await getApp(transpiled);
        const { html, css } = getHtmlAndCss(App);

        session.transpiled = transpiled;
        session.html = html;

        const children = await getReactChild(transpiled);

        // Session.html = zbody.innerHTML;

        session.setChild((c) => [...c, children]);
        session.children = children;
        restartError = !html;
        session.code = cd;
        session.codeNonFormatted = c;
        // GetCss = getCss || (await import("./templates.ts")).getCss;
        // setTimeout(async () => {
        //     session.html = document.getElementById("zbody").innerHTML;
        // const css = getCss(session);
        const code = cd;
        session.css = css;
        if (session.i !== counter) {
          return;
        }

        session.saveCode &&
          await session.saveCode({ transpiled, code, i: counter, css, html });
        // }, 10);
        return;
      } catch (error) {
        console.error("EXCEPTION");
        console.log({ e: error });
        restartError = true;
        console.error({ restartError });
      }
    }

    if (session.i > counter) {
      return;
    }

    const error = await getErrors(session);
    if (session.i > counter) {
      return;
    }

    if (restartError) {
      error.push(
        { messageText: "Error while starting the app. Check the console!" },
      );
    }

    if (error.length > 0) {
      console.log({ err: error });
    }
  } catch (error) {
    session.errorText = error.message;
    console.error(error.message);
  }
}

export const startFromCode = async ({ code }) => {
  const session = {
    code,
    i: 0,
    changes: [],
    saveCode: () => {},
    setChild: () => {},
  };
  await runner(code, null, session);
  await quickStart(session);
};

export async function quickStart(session, room, keepFullScreen, saveCode) {
  session.saveCode = saveCode;
  // Session.children = await getReactChild(session.transpiled);
  session.children = null;
  const { renderPreviewWindow } = await import(
    "./renderPreviewWindow.tsx"
  );

  await renderPreviewWindow(session, room, keepFullScreen);

  // If (localStorage && session) {
  //   const { code, transpiled, html, css, i } = session;
  //   localStorage.setItem(
  //     `state-${session.room}`,
  //     JSON.stringify({ code, transpiled, html, css, i }),
  //   );
  // }
  // // document.getElementById("root").remove();

  if (!keepFullScreen) {
    await startMonacoWithSession(session);
  }

  session.update = (c) => runner(c, null, session);
  runner(session.code, null, session, -1);
}

async function getReactChild(transpiled, mode = "window") {
  const codeToHydrate = mode === "window"
    ? transpiled.replace("body{", "#zbody{")
    : transpiled;

  const objectUrl = createJsBlob(
    codeToHydrate,
  );

  const mod = (await import(objectUrl));
  URL.revokeObjectURL(objectUrl);

  return jsx(mod.default);
}

// Function createPatch(oldCode, newCode, createDelta) {
//   return JSON.stringify(createDelta(oldCode, newCode));
// }

/**
 * @param {BlobPart} code
 */
function createJsBlob(code) {
  const blob = new Blob([code], { type: "application/javascript" });

  return URL.createObjectURL(blob);
}

async function getApp(transpiled, mode = "window") {
  const codeToHydrate = mode === "window"
    ? transpiled.replace("body{", "#zbody{")
    : transpiled;

  const objectUrl = createJsBlob(
    codeToHydrate,
  );

  const App = (await import(objectUrl)).default;

  URL.revokeObjectURL(objectUrl);

  return App;
}
