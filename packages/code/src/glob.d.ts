import type { EmotionCache } from "@emotion/cache";
import EmotionReact from "@emotion/react";
import type { FC } from "react";
import type {} from "react-dom";
import ear from "@emotion/react";
import FS from "@isomorphic-git/lightning-fs";
import { RequestInitWithRetry } from "fetch-retry";
import {} from "monaco-editor";
import type { createRoot as Cr, hydrateRoot as Hr } from "react-dom/client";
// import { esbuildEsm as Transpile } from "./esbuildEsm";
// import { ICodeSession } from "./session";
import { Code } from "./ws";

declare global {
  var sharedWorker: SharedWorker;
  var cSess: Code;
  // var MonacoEnvironment:  { baseUrl: string,
  // getWorkerUrl: (_: string, label: string)=>string}
  // if (label === "json") {
  /// return originToUse + `/language/json/json.js`;
  // }}
  var superFetch: (
    input: RequestInfo,
    init?: RequestInitWithRetry,
  ) => Promise<Response>;
  var firstRender: {
    code: string;
    css: string;
    html: string;
  };

  // var session: ICodeSession;
  // var esbuildEsm: Transpile;
  var swVersion: string;
  var apps: { [key: string]: FC<{ appId: string }> };
  var eCaches: { [key: string]: EmotionCache };
  const emotionReact: typeof ear;

  const workerDom: boolean;
  export namespace ReactJSXRuntime {
    export const jsx: typeof EmotionReact.jsx;
  }
  export namespace ReactDOMClient {
    export const createRoot: typeof Cr;
    export const hydrateRoot: typeof Hr;
  }
}

// types.d.ts
declare global {
  interface FileSystemHandle {
    kind: 'file' | 'directory';
    name: string;
    getFile?: () => Promise<File>;
  }

  interface FileSystemFileHandle extends FileSystemHandle {
    kind: 'file';
  }

  interface FileSystemDirectoryHandle extends FileSystemHandle {
    kind: 'directory';
    values: () => AsyncIterable<FileSystemHandle>;
    getDirectoryHandle: (name: string, options?: FileSystemHandlePermissionDescriptor) => Promise<FileSystemDirectoryHandle>;
    getFileHandle: (name: string, options?: FileSystemHandlePermissionDescriptor) => Promise<FileSystemFileHandle>;
    removeEntry: (name: string, options?: FileSystemHandlePermissionDescriptor) => Promise<void>;
  }
}