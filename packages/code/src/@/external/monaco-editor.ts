import type { editor as Editor, languages as Languages, Uri as MonacoUri } from "monaco-editor";
import "@/workers/monaco-editor.worker";

export const {
  editor,
  languages,
  Uri,
} = globalThis as unknown as {
  editor: typeof Editor;
  languages: typeof Languages;
  Uri: typeof MonacoUri;
};
