import { css } from "@emotion/react";
import type { ForwardRefRenderFunction } from "react";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { isMobile } from "../isMobile.mjs";
import { runner } from "../runner";
import { prettier } from "../shared";

const codeSpace = location.pathname.slice(1).split("/")[1];
const BC = new BroadcastChannel(`${location.origin}/live/${codeSpace}/`);

const mod = {
  i: 0,
  code: "",
  controller: new AbortController(),
};

interface EditorProps {
  codeSpace: string;
  onCodeUpdate: (newCode: string) => void;
}

export interface EditorRef {
  setValue: (code: string) => void;
}

const EditorComponent: ForwardRefRenderFunction<EditorRef, EditorProps> = ({ codeSpace, onCodeUpdate }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engine = isMobile() ? "ace" : "monaco";
  // const [showVersionHistory, setShowVersionHistory] = useState(false);
  // const [versions, setVersions] = useState<Version[]>([]);

  useImperativeHandle(ref, () => ({
    setValue: (code: string) => {
      editorState.setValue(code);
      handleContentChange(code);
    },
  }));

  const [editorState, setEditorState] = useState({
    i: globalThis.cSess.session.i,
    code: globalThis.cSess.session.code,
    started: false,
    setValue: (_code: string) => {},
  });

  useEffect(() => {
    if (editorState.started) return;

    const initializeEditor = async () => {
      mod.i = Number(globalThis.cSess.session.i);
      mod.code = globalThis.cSess.session.code;

      if (!containerRef || !containerRef.current) return;

      const editorModule = await (engine === "monaco"
        ? initializeMonaco(containerRef.current, codeSpace, mod.code)
        : initializeAce(containerRef.current, mod.code));

      setEditorState({
        ...editorState,
        started: true,
        code: mod.code,
        setValue: editorModule.setValue,
      });

      
    };

    initializeEditor();
  }, [editorState.started, ref, codeSpace]);

  const handleContentChange = (() => {
    let timeoutId: NodeJS.Timeout | null = null;
    return async (_code: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(async () => {
        const formattedCode = await prettier(_code);
        if (mod.code === formattedCode) return;

        mod.i += 1;
        mod.code = formattedCode;

        // const newVersion = { timestamp: Date.now(), code: formattedCode };
        // const updatedVersions = addVersion(codeSpace, newVersion, versions);
        // setVersions(updatedVersions);

        mod.controller.abort();
        mod.controller = new AbortController();
        const { signal } = mod.controller;

        runner({ code: mod.code, counter: mod.i, codeSpace, signal });
        onCodeUpdate(formattedCode);
      }, 300); // 300ms throttle
    };
  })();

  BC.onmessage = ({ data }) => {
    console.table(data);
    if (!data.i || !data.code || data.code === mod.code) return;
    if (mod.i >= data.i) return;

    mod.i = Number(data.i);
    mod.code = data.code;

    setEditorState({ ...editorState, ...mod });
    editorState.setValue(mod.code);

    const { signal } = mod.controller;
    runner({ ...mod, counter: mod.i, codeSpace, signal });
  };


  const EditorNode = (
    <>
      <div
        data-test-id="editor"
        ref={containerRef}
        css={css`
        ${
          engine === "ace" ? "" : `
          border-right: 4px dashed gray;
          border-bottom: 4px dashed gray;
        `
        }
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      `}
      />
    </>
  );

  if (engine === "ace") return EditorNode;

  return (
    <Rnd
      enableResizing
      disableDragging
      minWidth={800}
      minHeight="100vh"
      bounds="body"
      allowAnyClick
      lockAspectRatio={false}
      enable={{
        top: false,
        bottom: true,
        right: true,
        left: false,
      }}
      defaultSize={{
        width: "800px",
        height: "100vh",
      }}
    >
      {EditorNode}
    </Rnd>
  );

  async function initializeMonaco(
    container: HTMLDivElement,
    codeSpace: string,
    code: string,
  ) {
    // const style = document.createElement("style");
    // style.innerHTML = `@import url("${location.origin}/node_modules/monaco-editor/min/vs/editor/editor.main.css");`;
    // document.head.appendChild(style);

    const { startMonaco } = await import("../startMonaco");
    return await startMonaco({
      container,
      codeSpace,
      code,
      onChange: handleContentChange,
    });
  }

  async function initializeAce(container: HTMLDivElement, code: string) {
    const { startAce } = await import("../startAce");
    return await startAce(code, handleContentChange, container);
  }
};

const Editor = forwardRef<EditorRef, EditorProps>(EditorComponent);

export default Editor;
