/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 2.1.1(06e6d8254486059e4228c960a182e3722bd9d035)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
  "vs/basic-languages/restructuredtext/restructuredtext",
  ["require", "exports"],
  (function (e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      n.language = n.conf = void 0,
      n.conf = {
        brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
        autoClosingPairs: [
          { open: "{", close: "}" },
          { open: "[", close: "]" },
          { open: "(", close: ")" },
          { open: "<", close: ">", notIn: ["string"] },
        ],
        surroundingPairs: [
          { open: "(", close: ")" },
          { open: "[", close: "]" },
          { open: "`", close: "`" },
        ],
        folding: {
          markers: {
            start: new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),
            end: new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e"),
          },
        },
      },
      n.language = {
        defaultToken: "",
        tokenPostfix: ".rst",
        control: /[\\`*_\[\]{}()#+\-\.!]/,
        escapes: /\\(?:@control)/,
        empty: [
          "area",
          "base",
          "basefont",
          "br",
          "col",
          "frame",
          "hr",
          "img",
          "input",
          "isindex",
          "link",
          "meta",
          "param",
        ],
        alphanumerics: /[A-Za-z0-9]/,
        alphanumericsplus: /[A-Za-z0-9-_+:.]/,
        simpleRefNameWithoutBq:
          /(?:@alphanumerics@alphanumericsplus*@alphanumerics)+|(?:@alphanumerics+)/,
        simpleRefName: /(?:`@simpleRefNameWithoutBq`|@simpleRefNameWithoutBq)/,
        phrase: /@simpleRefName(?:\s@simpleRefName)*/,
        citationName: /[A-Za-z][A-Za-z0-9-_.]*/,
        blockLiteralStart: /(?:[!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~]|[\s])/,
        precedingChars: /(?:[ -:/'"<([{])/,
        followingChars: /(?:[ -.,:;!?/'")\]}>]|$)/,
        punctuation: /(=|-|~|`|#|"|\^|\+|\*|:|\.|'|_|\+)/,
        tokenizer: {
          root: [
            [/^(@punctuation{3,}$){1,1}?/, "keyword"],
            [
              /^\s*([\*\-+‣•]|[a-zA-Z0-9]+\.|\([a-zA-Z0-9]+\)|[a-zA-Z0-9]+\))\s/,
              "keyword",
            ],
            [/([ ]::)\s*$/, "keyword", "@blankLineOfLiteralBlocks"],
            [/(::)\s*$/, "keyword", "@blankLineOfLiteralBlocks"],
            { include: "@tables" },
            { include: "@explicitMarkupBlocks" },
            { include: "@inlineMarkup" },
          ],
          explicitMarkupBlocks: [
            { include: "@citations" },
            { include: "@footnotes" },
            [/^(\.\.\s)(@simpleRefName)(::\s)(.*)$/, [
              { token: "", next: "subsequentLines" },
              "keyword",
              "",
              "",
            ]],
            [/^(\.\.)(\s+)(_)(@simpleRefName)(:)(\s+)(.*)/, [
              { token: "", next: "hyperlinks" },
              "",
              "",
              "string.link",
              "",
              "",
              "string.link",
            ]],
            [/^((?:(?:\.\.)(?:\s+))?)(__)(:)(\s+)(.*)/, [
              { token: "", next: "subsequentLines" },
              "",
              "",
              "",
              "string.link",
            ]],
            [/^(__\s+)(.+)/, ["", "string.link"]],
            [/^(\.\.)( \|)([^| ]+[^|]*[^| ]*)(\| )(@simpleRefName)(:: .*)/, [
              { token: "", next: "subsequentLines" },
              "",
              "string.link",
              "",
              "keyword",
              "",
            ], "@rawBlocks"],
            [/(\|)([^| ]+[^|]*[^| ]*)(\|_{0,2})/, ["", "string.link", ""]],
            [/^(\.\.)([ ].*)$/, [{ token: "", next: "@comments" }, "comment"]],
          ],
          inlineMarkup: [
            { include: "@citationsReference" },
            { include: "@footnotesReference" },
            [/(@simpleRefName)(_{1,2})/, ["string.link", ""]],
            [/(`)([^<`]+\s+)(<)(.*)(>)(`)(_)/, [
              "",
              "string.link",
              "",
              "string.link",
              "",
              "",
              "",
            ]],
            [/\*\*([^\\*]|\*(?!\*))+\*\*/, "strong"],
            [/\*[^*]+\*/, "emphasis"],
            [/(``)((?:[^`]|\`(?!`))+)(``)/, ["", "keyword", ""]],
            [/(__\s+)(.+)/, ["", "keyword"]],
            [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, [
              "",
              "keyword",
              "",
              "",
              "",
            ]],
            [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, [
              "",
              "",
              "",
              "keyword",
              "",
            ]],
            [/(`)([^`]+)(`)/, ""],
            [/(_`)(@phrase)(`)/, ["", "string.link", ""]],
          ],
          citations: [[/^(\.\.\s+\[)((?:@citationName))(\]\s+)(.*)/, [
            { token: "", next: "@subsequentLines" },
            "string.link",
            "",
            "",
          ]]],
          citationsReference: [[/(\[)(@citationName)(\]_)/, [
            "",
            "string.link",
            "",
          ]]],
          footnotes: [[/^(\.\.\s+\[)((?:[0-9]+))(\]\s+.*)/, [
            { token: "", next: "@subsequentLines" },
            "string.link",
            "",
          ]], [/^(\.\.\s+\[)((?:#@simpleRefName?))(\]\s+)(.*)/, [
            { token: "", next: "@subsequentLines" },
            "string.link",
            "",
            "",
          ]], [/^(\.\.\s+\[)((?:\*))(\]\s+)(.*)/, [
            { token: "", next: "@subsequentLines" },
            "string.link",
            "",
            "",
          ]]],
          footnotesReference: [
            [/(\[)([0-9]+)(\])(_)/, ["", "string.link", "", ""]],
            [/(\[)(#@simpleRefName?)(\])(_)/, ["", "string.link", "", ""]],
            [/(\[)(\*)(\])(_)/, ["", "string.link", "", ""]],
          ],
          blankLineOfLiteralBlocks: [[
            /^$/,
            "",
            "@subsequentLinesOfLiteralBlocks",
          ], [/^.*$/, "", "@pop"]],
          subsequentLinesOfLiteralBlocks: [[/(@blockLiteralStart+)(.*)/, [
            "keyword",
            "",
          ]], [/^(?!blockLiteralStart)/, "", "@popall"]],
          subsequentLines: [[/^[\s]+.*/, ""], [/^(?!\s)/, "", "@pop"]],
          hyperlinks: [[/^[\s]+.*/, "string.link"], [/^(?!\s)/, "", "@pop"]],
          comments: [[/^[\s]+.*/, "comment"], [/^(?!\s)/, "", "@pop"]],
          tables: [[/\+-[+-]+/, "keyword"], [/\+=[+=]+/, "keyword"]],
        },
      };
  }),
);
