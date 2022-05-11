import * as monaco from "monaco-editor";
import type { FC, ReactNode } from "react";
import type { ICodeSession } from "session";

declare global {
  // let MonacoEnvironment: monaco.Environment;
  var editor: ReturnType<typeof monaco.editor.create>;
  var model: monaco.editor.IModel;
  var App: FC;
  var appFactory: (transpiled: string)=> void;
  var transpiled: string;
  var notify: ()=> void;
  var startState: ICodeSession
  var polyfilling: ()=>void

}
