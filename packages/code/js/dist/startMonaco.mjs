var $=Object.create,v=Object.defineProperty,T=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,D=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,j=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=e=>v(e,"__esModule",{value:!0}),N=(e,t)=>function(){return t||(0,e[S(e)[0]])((t={exports:{}}).exports,t),t.exports},L=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of S(t))!R.call(e,r)&&(n||r!=="default")&&v(e,r,{get:()=>t[r],enumerable:!(o=T(t,r))||o.enumerable});return e},z=(e,t)=>L(A(v(e!=null?$(D(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),V=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n),k=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},W=(e,t,n)=>(k(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},H=(e,t,n,o)=>(k(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),F=N({"(disabled):os"(){}}),B="0.31.1",b={monaco:null},G=async()=>{if(b.monaco)return b.monaco;let e=(o,r=[])=>typeof window=="undefined"?{}:document.head.querySelector(`script[src="${o}"]`)&&window||new Promise(function(s,i){let a=document.createElement("script");a.src=o,a.async="async",a.type="application/javascript",a.onload=()=>{r.length===0&&s(window);let c={};r.forEach(d=>Object.assign(c,window[d])),s(c)},a.onerror=i,document.head.appendChild(a)}),t=`https://unpkg.com/monaco-editor@${B}/min/vs`,{require:n}=await e(`${t}/loader.js`);return n.config({paths:{vs:t},"vs/css":{disabled:!0}}),b.monaco=await new Promise(o=>n(["vs/editor/editor.main"],r=>o(r))),b.monaco};function U(e,t=1,n={}){let{indent:o=" ",includeEmptyLines:r=!1}=n;if(typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof t!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(t<0)throw new RangeError(`Expected \`count\` to be at least 0, got \`${t}\``);if(typeof o!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof o}\``);if(t===0)return e;let s=r?/^/gm:/^(?!\s*$)/gm;return e.replace(s,o.repeat(t))}var O=z(F(),1);function Y(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var I=/\s+at.*[(\s](.*)\)?/,J=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,K=typeof O.default.homedir=="undefined"?"":O.default.homedir().replace(/\\/g,"/");function Q(e,{pretty:t=!1,basePath:n}={}){let o=n&&new RegExp(`(at | \\()${Y(n.replace(/\\/g,"/"))}`,"g");if(typeof e=="string")return e.replace(/\\/g,"/").split(`
`).filter(r=>{let s=r.match(I);if(s===null||!s[1])return!0;let i=s[1];return i.includes(".app/Contents/Resources/electron.asar")||i.includes(".app/Contents/Resources/default_app.asar")?!1:!J.test(i)}).filter(r=>r.trim()!=="").map(r=>(o&&(r=r.replace(o,"$1")),t&&(r=r.replace(I,(s,i)=>s.replace(i,i.replace(K,"~")))),r)).join(`
`)}var X=e=>e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""),_,Z=class extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError(`Expected input to be an Array, got ${typeof e}`);e=e.map(n=>n instanceof Error?n:n!==null&&typeof n=="object"?Object.assign(new Error(n.message),n):new Error(n));let t=e.map(n=>typeof n.stack=="string"?X(Q(n.stack)):String(n)).join(`
`);t=`
`+U(t,4);super(t);q(this,_,void 0),V(this,"name","AggregateError"),H(this,_,e)}get errors(){return W(this,_).slice()}};_=new WeakMap;async function ee(e,t,{concurrency:n=Number.POSITIVE_INFINITY,stopOnError:o=!0}={}){return new Promise((r,s)=>{if(e[Symbol.iterator]===void 0&&e[Symbol.asyncIterator]===void 0)throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if(typeof t!="function")throw new TypeError("Mapper function is required");if(!((Number.isSafeInteger(n)||n===Number.POSITIVE_INFINITY)&&n>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);let i=[],a=[],c=new Map,d=!1,l=!1,u=!1,h=0,p=0,m=e[Symbol.iterator]===void 0?e[Symbol.asyncIterator]():e[Symbol.iterator](),x=f=>{d=!0,l=!0,s(f)},E=async()=>{if(l)return;let f=await m.next(),w=p;if(p++,f.done){if(u=!0,h===0&&!l){if(!o&&a.length>0){x(new Z(a));return}if(l=!0,!c.size){r(i);return}let g=[];for(let[y,P]of i.entries())c.get(y)!==M&&g.push(P);r(g)}return}h++,(async()=>{try{let g=await f.value;if(l)return;let y=await t(g,w);y===M&&c.set(w,y),i[w]=y,h--,await E()}catch(g){if(o)x(g);else{a.push(g),h--;try{await E()}catch(y){x(y)}}}})()};(async()=>{for(let f=0;f<n;f++){try{await E()}catch(w){x(w);break}if(u||d)break}})()})}var M=Symbol("skip");async function te(e,t){return ee(e,n=>n(),t)}var ne=G();var C=async({onChange:e,code:t,language:n,container:o,options:r})=>{let s=await ne,i=o.attachShadow({mode:"open"}),a=document.createElement("div");if(i.appendChild(a),o.parentElement){let{width:p,height:m}=o.getClientRects()[0];a.style.width=`${Math.min(window.innerWidth,p)}px`,a.style.height=`${m}px`}let d=document.createElement("style");d.innerText='@import "https://unpkg.com/monaco-editor@0.30.1/min/vs/editor/editor.main.css";',i.appendChild(d),s.languages.typescript.typescriptDefaults.setCompilerOptions({target:99,lib:["DOM","DOM.Iterable","ES2018.Regexp","ES2018.AsyncIterable","ES2018","ES2019"],allowNonTsExtensions:!0,moduleResolution:2,declaration:!0,noEmit:!0,noEmitOnError:!0,jsx:4,skipLibCheck:!0,esModuleInterop:!0,allowSyntheticDefaultImports:!0,allowUmdGlobalAccess:!0,noLibCheck:!0}),s.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!0,noSemanticValidation:!0,noSyntaxValidation:!0});let{Uri:l}=s,u=s.editor.create(a,{model:s.editor.createModel(t,"typescript",l.file("/index.ts")),lightbulb:{enabled:!1},language:"typescript",theme:"vs-dark",codeLens:!1,suggest:{showStatusBar:!1,preview:!1},smoothScrolling:!0,scrollPredominantAxis:!0,scrollbar:{handleMouseWheel:!0,alwaysConsumeMouseWheel:!1,horizontal:"auto",vertical:"auto",useShadows:!0},selectionHighlight:!0,selectOnLineNumbers:!0,cursorSmoothCaretAnimation:!0,cursorBlinking:"smooth",hideCursorInOverviewRuler:!0,cursorSurroundingLinesStyle:"all",cursorSurroundingLines:4,formatOnPaste:!0,formatOnType:!0,useShadowDOM:!0});function h(){return{target:99,jsx:1,allowNonTsExtensions:!0}}return window.addEventListener("resize",()=>{let{width:p,height:m}=o.getClientRects()[0];a.style.width=`${Math.min(window.innerWidth,p)}px`,a.style.height=`${Math.min(window.innerHeight,m)}px`,u.layout()}),u.onDidChangeModelContent(p=>e(u.getValue(),p)),setTimeout(()=>re((p,m)=>s.languages.typescript.typescriptDefaults.addExtraLib(p,m),p=>s.languages.typescript.typescriptDefaults.setDiagnosticsOptions(p)),100),()=>u};async function re(e,t){let o=[{name:"react",url:"https://unpkg.com/@types/react@17.0.38/index.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"react/jsx-dev-runtime",url:"https://unpkg.com/@types/react@17.0.38/jsx-dev-runtime.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"react-exp",url:"https://unpkg.com/@types/react@17.0.38/experimental.d.ts",depend:[]},{name:"global",url:"https://unpkg.com/@types/react@17.0.38/global.d.ts",depend:[]},{name:"prop-types",url:"https://unpkg.com/@types/prop-types@15.7.4/index.d.ts",depend:[]},{name:"react-dom",url:"https://unpkg.com/@types/react-dom@17.0.11/index.d.ts",depend:[]},{name:"csstype",url:"https://unpkg.com/csstype@3.0.9/index.d.ts",depend:[]},{name:"@emotion/styled/base.d.ts",url:"https://unpkg.com/@emotion/styled@11.6.0/types/base.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/styled/index.d.ts",url:"https://unpkg.com/@emotion/styled@11.6.0/types/index.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/cache/index.d.ts",url:"https://unpkg.com/@emotion/cache@11.6.0/types/index.d.ts",depend:["@emotion/utils"]},{name:"@emotion/react/index.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/index.d.ts",depend:["@emotion/cache"]},{name:"@emotion/react/jsx-namespace.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/jsx-namespace.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/css-prop.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/css-prop.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/helper.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/helper.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/theming.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/theming.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/serialize/index.d.ts",url:"https://unpkg.com/@emotion/serialize@1.0.2/types/index.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/utils/index.d.ts",url:"https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",depend:[]},{name:"framer-motion",url:"https://unpkg.com/framer-motion@5.5.5/types/index.d.ts",depend:["popmotion"]},{name:"framer-motion/types/render/dom/motion.d.ts",url:" https://unpkg.com/framer-motion@5.5.5/types/render/dom/motion.d.ts",depend:["popmotion"]},{name:"popmotion",url:"https://unpkg.com/popmotion@11.0.0/lib/index.d.ts"}].map(({name:r,url:s})=>async()=>{let i=await(await fetch(s)).text(),a=r.includes("@")?`/node_modules/${r}`:r.endsWith(".d.ts")?"/node_modules/@types"+r:"/node_modules/@types/"+r+"/index.d.ts";e(i,a)});await te(o,{concurrency:2}),t({noSuggestionDiagnostics:!1,noSemanticValidation:!1,noSyntaxValidation:!1})}var ae=C;export{ae as default};
//# sourceMappingURL=startMonaco.mjs.map
