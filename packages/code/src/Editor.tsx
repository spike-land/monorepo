import { css } from "@emotion/react";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";

// import { IModelContentChangedEvent, IRange, ISingleEditOperation } from "monaco-editor";
import { isMobile } from "./isMobile.mjs";
import { prettier } from "./prettier";
import { runner } from "./runner";
import { mST, onSessionUpdate } from "./session";

// Export type IStandaloneCodeEditor = editor.Ist;
let startedM = 0;
let startedAce = 0;

const mst = mST();
export const Editor: FC<
  {
    codeSpace: string;
  }
> = (
  { codeSpace },
) => {
  const ref = useRef<HTMLDivElement>(null);
  const engine = isMobile() ? "ace" : "monaco";

  const [
    { i, code, started, setValue, controller },
    changeContent,
  ] = useState({
    code: mst.code,
    i: mst.i,
    started: false,
    controller: new AbortController(),
    setValue: (_code: string) => null,
  });

  useEffect(() => {
    if (started) return;
    const _code = code;

    const start = async () => {
      const code = await prettier(_code);
      if (!ref?.current || started) {
        return;
      }

      const container = ref?.current;
      if (container === null) return;

      const { setValue } = await (engine === "monaco"
        ? setMonaco(container, codeSpace)
        : setAce(container)) as { setValue: (code: string) => null };

      changeContent(x => ({ ...x, started: true, code, setValue }));
    };
    start();
  }, [started, ref.current]);

  // UseInsertionEffect(()=>{

  // })
  // useEffect(
  //   () => {
  //     // mod.getErrors().then(console.log);
  //     onChange(() =>
  //       mod.getValue().then(() =>
  //         changeContent((x: typeof mySession) => ({
  //           ...x,
  //           counter: mod.counter,
  //           myCode: mod.code,
  //         }))
  //       )
  //     );
  //   },
  //   [onChange, myCode, changeContent],
  // );

  onSessionUpdate(async () => {
    const { i } = mST();
    const code = await prettier(mST().code);

    if (!code) return;

    if (i !== mST().i) return;

    changeContent((x) => ({
      ...x,
      i,
      code,
    }));
    setValue(code);
  }, "editor");

  const EditorNode = (
    <div
      data-test-id="editor"
      ref={ref}
      css={css`
    ${
        (engine === "ace") ? `` : `border-right: 4px dashed gray;
    border-bottom: 4px dashed gray;`
      }

    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    `}
    />
  );
  const onChange = async (_code: string) => {
    console.log(_code);

    const c = await prettier(_code);

    if (c == code) return;
    controller.abort();

    changeContent((x) => ({
      ...x,
      i: i + 1,
      code: c,
      controller: new AbortController(),
    }));
  };

  useEffect(() => {
    runner({ code, counter: i, codeSpace, signal: controller.signal });
    return () => controller.abort();
  }, [code, i, codeSpace, controller]);

  if (engine === "ace") return EditorNode;

  return (
    <Rnd
      enableResizing={true}
      disableDragging={true}
      minWidth={800}
      minHeight={"100vh"}
      bounds={"body"}
      allowAnyClick={true}
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

  async function setMonaco(container: HTMLDivElement, codeSpace: string) {
    if (startedM) return;
    startedM = 1;
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.href = origin + "/Editor.css";
    document.head.append(link);
    const { startMonaco } = await import("./startMonaco");
    return await startMonaco({
      container,
      codeSpace,
      i,
      code,
      onChange,
    });
  }

  async function setAce(container: HTMLDivElement) {
    if (startedAce) return;
    startedAce = 1;
    const { startAce } = await import("./startAce");

    return await startAce(
      code,
      onChange,
      container,
    );
  }
};

// let room = new AbortController();

// room.abort();
