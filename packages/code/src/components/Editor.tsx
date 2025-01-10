import type { ICode, ICodeSession } from "@/lib/interfaces";
import { prettierToThrow } from "@/lib/shared";
import { edit } from "ace-builds";
import { set } from "immutable";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useEditorState } from "../hooks/use-editor-state";
import { useErrorHandling } from "../hooks/useErrorHandling";
import { initializeAce, initializeMonaco } from "./editorUtils";
import { EditorNode } from "./ErrorReminder";

interface EditorProps {
  codeSpace: string;
  cSess: ICode;
}

export const Editor: React.FC<EditorProps> = ({ codeSpace, cSess }) => {
  const { containerRef, engine, editorState, setEditorState } = useEditorState();
  const { errorType, throttledTypeCheck } = useErrorHandling(engine || "ace");

  const [changeId, setChangeId] = useState(0);

  // Decide which init function we use based on the current engine
  const initializeEditor = useMemo(
    () => (engine === "monaco" ? initializeMonaco : initializeAce),
    [engine],
  );

  const handleContentChange = useCallback(
    async (newCode: string) => {
      if (newCode === editorState.code) return;
      setChangeId((id) => id + 1);

      await cSess.setCode(newCode);
      throttledTypeCheck();
    },
    [cSess, editorState.code, throttledTypeCheck],
  );

  // Listen for external code changes in cSess
  useEffect(() => {
    if (!editorState.started || !editorState.setValue) return;

    const unsubscribe = cSess.sub(async (sess: ICodeSession) => {
      // Prevent applying changes if there's no new code or an outdated index
      if (sess.code === editorState.code) return;
      if (sess.i <= changeId) return;
      setChangeId(sess.i);

      // Optional formatting check (skip if identical)
      const formatted = await prettierToThrow({
        code: editorState.code,
        toThrow: false,
      });
      if (formatted && formatted === sess.code) return;
      setEditorState((prev) => ({ ...prev, code: sess.code }));

      editorState.setValue(sess.code);
    });

    return () => unsubscribe();
  }, [editorState.started, editorState.code, editorState.setValue, cSess, changeId]);

  // Initialize the editor once containerRef is available
  useEffect(() => {
    // Validate if we need to run type checks again
    if (errorType) throttledTypeCheck();

    // Exit early if we already started or no container to render into
    if (!containerRef.current || editorState.started) return;

    (async () => {
      const { setValue } = await initializeEditor({
        container: containerRef.current,
        codeSpace,
        code: cSess.session.code,
        onChange: handleContentChange,
        // Add readOnly if you want to handle it:
        // readOnly,
      });

      setChangeId(cSess.session.i);
      setEditorState((prev) => ({
        ...prev,
        started: true,
        code: cSess.session.code,
        setValue,
      }));
    })();
  }, [
    errorType,
    throttledTypeCheck,
    containerRef,
    editorState.started,
    setEditorState,
    initializeEditor,
    codeSpace,
    cSess,
    handleContentChange,
  ]);

  return (
    <div className="flex h-screen w-full max-w-[800px] overflow-hidden">
      <div className="flex-grow overflow-hidden">
        <EditorNode
          engine={engine as "monaco" | "ace"}
          errorType={errorType}
          containerRef={containerRef}
          codeSpace={codeSpace}
        />
      </div>
    </div>
  );
};
