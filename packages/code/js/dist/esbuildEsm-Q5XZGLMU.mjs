import*as e from"https://unpkg.com/esbuild-wasm@0.14.9/esm/browser.min.js";var n=e.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.14.9/esbuild.wasm"}),s=!1,o=async i=>{var t=performance.now();s||(await n,s=!0);let r=await e.transform(i,{loader:"tsx",minify:!0,treeShaking:!0,target:"es2018"});var a=performance.now();return console.log(`esbuildEsmTransform: took ${a-t} milliseconds`),r.code};export{o as transform};
//# sourceMappingURL=esbuildEsm-Q5XZGLMU.mjs.map
