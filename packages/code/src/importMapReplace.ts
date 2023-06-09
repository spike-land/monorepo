// import { skipImportmapReplaceNames } from "./esbuildEsm";
import { importMapImports as imports } from "./importMap";

export function importMapReplace(code: string) {
  // Create a regex pattern that matches any top-level import statements
  const topLevelImportPattern = /(import\s+[\w{},*\s]+\s+from\s+)(['"`][^'`"]+['"`])/g;

  // Create a regex pattern that matches any dynamic import or require statements
  const dynamicImportPattern = /(import|require)\(([^)]+)\)/g;

  // Replace the top-level import statements with the mapped import
  code = code.replace(topLevelImportPattern, (_, importStatement, importPath) => {
    // Remove quotes from the import path
    const path: keyof typeof imports = importPath.replace(/['"`]/g, '');

    // Check if the path is in the imports map
    if (imports[path]) {
      // If it is, replace it with the mapped import
      return `${importStatement}'/${imports[path]}'`;
    } else {
      // If it's not, transform it and append ?bundle
      return `${importStatement}'/${path}?bundle&target=es2020'`;
    }
  });

  // Replace the dynamic import or require statements with the mapped import
  code = code.replace(dynamicImportPattern, (_, importType, importPath) => {
    // Remove quotes from the import path
    const path: keyof typeof imports = importPath.replace(/['"`]/g, '');

    // Check if the path is in the imports map
    if (imports[path]) {
      // If it is, replace it with the mapped import
      return `${importType}('/${imports[path]}')`;
    } else {
      // If it's not, transform it and append ?bundle
      return `${importType}('/${path}?bundle&target=es2020')`;
    }
  });

  return code;
}
