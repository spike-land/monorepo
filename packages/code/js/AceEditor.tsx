/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from "react";
import { mST } from "./session";

import { css } from "@emotion/react";

import type { Ace, edit } from "ace-builds";

import { runnerDebounced } from "./runner";

type IPrettier = (code: string) => string;
let formatter: null | IPrettier = null;
export const AceEditor = () => {
  const ref = useRef<HTMLPreElement>(null) as null | {
    current: HTMLPreElement;
  };

  const [{ code, i, editor }, changeContent] = useState({
    ...mST(),
    editor: null as null | Ace.Editor,
  });

  useEffect(() => {
    if (ref === null) return;
    const load = async () => {
      const editor = await startAce(mST().code);

      changeContent((x) => ({ ...x, editor }));
    };
    load();
  }, [ref]);

  useEffect(() => {
    if (!editor) return;

    const listener = async () => {
      const newCode = editor.getSession().getValue();
      if (newCode === code) return;

      const counter = i + 1;

      try {
        changeContent((x) => ({ ...x, i: counter, code: newCode }));
        await runnerDebounced({ code: newCode, counter });
      } catch (err) {
        console.error({ err });
        console.error("restore editor");

        // model?.setValue(code);
      }
    };
    editor?.session.on("change", listener);

    return () => editor?.session.off("change", listener);
  }, [editor, code, i, changeContent]);

  globalThis.setValue = (newCode, counter, force) => {
    if (!force && counter <= i) {
      return;
    }

    changeContent((x) => ({ ...x, i: counter, code: newCode }));
    setTimeout(() => editor?.setValue(newCode), 100);
  };

  return (
    <pre
      css={css`
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`}
      id="editor"
      ref={ref}
    />
  );
};

async function startAce(code: string) {
  const ace = (await import("ace-builds/src/ace")).default;

  // const {ace} = window;
  var editor = (ace.edit as typeof edit)("editor");
  var js = ace.createEditSession(code);
  editor.setSession(js);

  await import("ace-builds/src/theme-monokai");

  editor.setTheme("ace/theme/monokai");
  await import("ace-builds/src/mode-typescript");
  // await import("ace-builds/src/mode-typescript-highlight-rules");

  editor.session.setMode(
    "ace/mode/typescript",
    () => ({ jsx: true }),
  );

  return editor;
}
