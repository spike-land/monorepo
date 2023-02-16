import Parser from "@typescript-eslint/typescript-estree";
import types from "ast-module-types";
import Walker from "node-source-walk";

/**
 * Extracts the dependencies of the supplied TypeScript module
 *
 * @param  {String|Object} src - File's content or AST
 * @return {String[]}
 */
const detective = (src, options = {}) => {
  const walkerOptions = { ...options, parser: Parser };

  // Determine whether to skip "type-only" imports
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#import-types
  // https://www.typescriptlang.org/v2/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
  const skipTypeImports = Boolean(options.skipTypeImports);
  // Remove skipTypeImports option, as this option may not be recognized by the walker/parser
  walkerOptions.skipTypeImports = undefined;

  const mixedImports = Boolean(options.mixedImports);
  walkerOptions.mixedImports = undefined;

  const dependencies = [];

  if (typeof src === "undefined") throw new Error("src not given");
  if (src === "") return dependencies;

  const walker = new Walker(walkerOptions);

  walker.walk(src, (node) => {
    switch (node.type) {
      case "ImportExpression":
        if (!options.skipAsyncImports && node.source && node.source.value) {
          dependencies.push(node.source.value);
        }
        break;
      case "ImportDeclaration":
        if (skipTypeImports && node.importKind === "type") {
          break;
        }
        if (node.source?.value) {
          dependencies.push(node.source.value);
        }
        break;
      case "ExportNamedDeclaration":
      case "ExportAllDeclaration":
        if (node.source?.value) {
          dependencies.push(node.source.value);
        }
        break;
      case "TSExternalModuleReference":
        if (node.expression?.value) {
          dependencies.push(node.expression.value);
        }
        break;
      case "TSImportType":
        if (!skipTypeImports && node.parameter.type === "TSLiteralType") {
          dependencies.push(node.parameter.literal.value);
        }
        break;
      case "CallExpression":
        if (
          !(((mixedImports && types.isRequire(node))
            && node.arguments)
            && node.arguments.length)
        ) {
          break;
        }

        if (types.isPlainRequire(node)) {
          const result = extractDependencyFromRequire(node);
          if (result) {
            dependencies.push(result);
          }
        } else if (types.isMainScopedRequire(node)) {
          dependencies.push(extractDependencyFromMainRequire(node));
        }

        break;
      default:
        // nothing
    }
  });

  return dependencies;
};

export const tsx = (src, options) => {
  return detective(src, { ...options, jsx: true });
};

function extractDependencyFromRequire(node) {
  if (
    node.arguments[0].type === "Literal"
    || node.arguments[0].type === "StringLiteral"
  ) {
    return node.arguments[0].value;
  }

  if (node.arguments[0].type === "TemplateLiteral") {
    return node.arguments[0].quasis[0].value.raw;
  }
}

function extractDependencyFromMainRequire(node) {
  return node.arguments[0].value;
}
