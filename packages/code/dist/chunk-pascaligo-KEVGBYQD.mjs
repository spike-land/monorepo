import {
  init_define_process
} from "./chunk-chunk-GEEV2XKK.mjs";

// ../../.yarn/cache/monaco-editor-npm-0.34.0-2a8aa5269e-10a28c1fe0.zip/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js
init_define_process();
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["(*", "*)"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pascaligo",
  ignoreCase: true,
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  keywords: [
    "begin",
    "block",
    "case",
    "const",
    "else",
    "end",
    "fail",
    "for",
    "from",
    "function",
    "if",
    "is",
    "nil",
    "of",
    "remove",
    "return",
    "skip",
    "then",
    "type",
    "var",
    "while",
    "with",
    "option",
    "None",
    "transaction"
  ],
  typeKeywords: [
    "bool",
    "int",
    "list",
    "map",
    "nat",
    "record",
    "string",
    "unit",
    "address",
    "map",
    "mtz",
    "xtz"
  ],
  operators: [
    "=",
    ">",
    "<",
    "<=",
    ">=",
    "<>",
    ":",
    ":=",
    "and",
    "mod",
    "or",
    "+",
    "-",
    "*",
    "/",
    "@",
    "&",
    "^",
    "%"
  ],
  symbols: /[=><:@\^&|+\-*\/\^%]+/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_][\w]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": "identifier"
          }
        }
      ],
      { include: "@whitespace" },
      [/[{}()\[\]]/, "@brackets"],
      [/[<>](?!@symbols)/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }
      ],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\$[0-9a-fA-F]{1,16}/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/'/, "string", "@string"],
      [/'[^\\']'/, "string"],
      [/'/, "string.invalid"],
      [/\#\d+/, "string"]
    ],
    comment: [
      [/[^\(\*]+/, "comment"],
      [/\*\)/, "comment", "@pop"],
      [/\(\*/, "comment"]
    ],
    string: [
      [/[^\\']+/, "string"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\(\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ]
  }
};
export {
  conf,
  language
};
