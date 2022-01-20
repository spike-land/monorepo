import "./chunk-L7N3FHV6.mjs";

// ../../node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js
var conf = {
  comments: {
    blockComment: ["/*", "*/"],
    lineComment: "//"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string"] },
    { open: "[", close: "]", notIn: ["string"] },
    { open: "(", close: ")", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "<", close: ">" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".flow",
  keywords: [
    "import",
    "require",
    "export",
    "forbid",
    "native",
    "if",
    "else",
    "cast",
    "unsafe",
    "switch",
    "default"
  ],
  types: [
    "io",
    "mutable",
    "bool",
    "int",
    "double",
    "string",
    "flow",
    "void",
    "ref",
    "true",
    "false",
    "with"
  ],
  operators: [
    "=",
    ">",
    "<",
    "<=",
    ">=",
    "==",
    "!",
    "!=",
    ":=",
    "::=",
    "&&",
    "||",
    "+",
    "-",
    "*",
    "/",
    "@",
    "&",
    "%",
    ":",
    "->",
    "\\",
    "$",
    "??",
    "^"
  ],
  symbols: /[@$=><!~?:&|+\-*\\\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@types": "type",
            "@default": "identifier"
          }
        }
      ],
      { include: "@whitespace" },
      [/[{}()\[\]]/, "delimiter"],
      [/[<>](?!@symbols)/, "delimiter"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }
      ],
      [/((0(x|X)[0-9a-fA-F]*)|(([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)/, "number"],
      [/[;,.]/, "delimiter"],
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/"/, "string", "@string"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\*\//, "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, "string", "@pop"]
    ]
  }
};
export {
  conf,
  language
};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
//# sourceMappingURL=flow9-VSHSPUON.mjs.map
