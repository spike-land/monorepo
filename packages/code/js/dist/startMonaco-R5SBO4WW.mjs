var C=Object.create,w=Object.defineProperty,M=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,D=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,N=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=e=>w(e,"__esModule",{value:!0}),A=(e,t)=>function(){return t||(0,e[k(e)[0]])((t={exports:{}}).exports,t),t.exports},L=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of k(t))!P.call(e,r)&&(n||r!=="default")&&w(e,r,{get:()=>t[r],enumerable:!(o=M(t,r))||o.enumerable});return e},R=(e,t)=>L(_(w(e!=null?C(D(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),z=(e,t,n)=>(N(e,typeof t!="symbol"?t+"":t,n),n),S=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},V=(e,t,n)=>(S(e,t,"read from private field"),n?n.call(e):t.get(e)),W=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},q=(e,t,n,o)=>(S(e,t,"write to private field"),o?o.call(e,n):t.set(e,n),n),B=A({"(disabled):os"(){}}),F="0.31.1",b={monaco:null},H=async()=>{if(b.monaco)return b.monaco;let e=(o,r=[])=>typeof window=="undefined"?{}:window.document.head.querySelector(`script[src="${o}"]`)&&window||new Promise(function(i,a){let s=window.document.createElement("script");s.src=o,s.async="async",s.type="application/javascript",s.onload=()=>{r.length===0&&i(window);let l={};r.forEach(g=>Object.assign(l,window[g])),i(l)},s.onerror=a,window.document.head.appendChild(s)}),t=`https://unpkg.com/monaco-editor@${F}/min/vs`,{require:n}=await e(`${t}/loader.js`);return n.config({paths:{vs:t},"vs/css":{disabled:!0}}),b.monaco=await new Promise(o=>n(["vs/editor/editor.main"],r=>o(r))),b.monaco};function U(e,t=1,n={}){let{indent:o=" ",includeEmptyLines:r=!1}=n;if(typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof t!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(t<0)throw new RangeError(`Expected \`count\` to be at least 0, got \`${t}\``);if(typeof o!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof o}\``);if(t===0)return e;let i=r?/^/gm:/^(?!\s*$)/gm;return e.replace(i,o.repeat(t))}var O=R(B(),1);function Y(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var j=/\s+at.*[(\s](.*)\)?/,G=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,J=typeof O.default.homedir=="undefined"?"":O.default.homedir().replace(/\\/g,"/");function K(e,{pretty:t=!1,basePath:n}={}){let o=n&&new RegExp(`(at | \\()${Y(n.replace(/\\/g,"/"))}`,"g");if(typeof e=="string")return e.replace(/\\/g,"/").split(`
`).filter(r=>{let i=r.match(j);if(i===null||!i[1])return!0;let a=i[1];return a.includes(".app/Contents/Resources/electron.asar")||a.includes(".app/Contents/Resources/default_app.asar")?!1:!G.test(a)}).filter(r=>r.trim()!=="").map(r=>(o&&(r=r.replace(o,"$1")),t&&(r=r.replace(j,(i,a)=>i.replace(a,a.replace(J,"~")))),r)).join(`
`)}var Q=e=>e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""),x,X=class extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError(`Expected input to be an Array, got ${typeof e}`);e=e.map(n=>n instanceof Error?n:n!==null&&typeof n=="object"?Object.assign(new Error(n.message),n):new Error(n));let t=e.map(n=>typeof n.stack=="string"?Q(K(n.stack)):String(n)).join(`
`);t=`
`+U(t,4);super(t);W(this,x,void 0),z(this,"name","AggregateError"),q(this,x,e)}get errors(){return V(this,x).slice()}};x=new WeakMap;async function Z(e,t,{concurrency:n=Number.POSITIVE_INFINITY,stopOnError:o=!0}={}){return new Promise((r,i)=>{if(e[Symbol.iterator]===void 0&&e[Symbol.asyncIterator]===void 0)throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if(typeof t!="function")throw new TypeError("Mapper function is required");if(!((Number.isSafeInteger(n)||n===Number.POSITIVE_INFINITY)&&n>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);let a=[],s=[],l=new Map,g=!1,d=!1,E=!1,p=0,c=0,$=e[Symbol.iterator]===void 0?e[Symbol.asyncIterator]():e[Symbol.iterator](),f=m=>{g=!0,d=!0,i(m)},v=async()=>{if(d)return;let m=await $.next(),h=c;if(c++,m.done){if(E=!0,p===0&&!d){if(!o&&s.length>0){f(new X(s));return}if(d=!0,!l.size){r(a);return}let u=[];for(let[y,T]of a.entries())l.get(y)!==I&&u.push(T);r(u)}return}p++,(async()=>{try{let u=await m.value;if(d)return;let y=await t(u,h);y===I&&l.set(h,y),a[h]=y,p--,await v()}catch(u){if(o)f(u);else{s.push(u),p--;try{await v()}catch(y){f(y)}}}})()};(async()=>{for(let m=0;m<n;m++){try{await v()}catch(h){f(h);break}if(E||g)break}})()})}var I=Symbol("skip");async function ee(e,t){return Z(e,n=>n(),t)}var te=H(),ne=async({onChange:e,code:t,language:n,container:o,options:r})=>{let i=await te,a=o.attachShadow({mode:"open"}),s=document.createElement("div");if(a.appendChild(s),o.parentElement){let{width:p,height:c}=o.getClientRects()[0];s.style.width=`${Math.min(window.innerWidth,p)}px`,s.style.height=`${c}px`}let l=document.createElement("style");l.innerText='@import "https://unpkg.com/monaco-editor@0.30.1/min/vs/editor/editor.main.css";',a.appendChild(l),i.languages.typescript.typescriptDefaults.setCompilerOptions({target:99,lib:["DOM","DOM.Iterable","ES2018.Regexp","ES2018.AsyncIterable","ES2018","ES2019"],allowNonTsExtensions:!0,moduleResolution:2,declaration:!0,noEmit:!0,noEmitOnError:!0,jsx:4,skipLibCheck:!0,esModuleInterop:!0,allowSyntheticDefaultImports:!0,allowUmdGlobalAccess:!0,noLibCheck:!0}),i.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!0,noSemanticValidation:!0,noSyntaxValidation:!0});let{Uri:g}=i,d=i.editor.create(s,{model:i.editor.createModel(t,"typescript",g.file("/index.ts")),lightbulb:{enabled:!1},language:"typescript",theme:"vs-dark",codeLens:!1,suggest:{showStatusBar:!1,preview:!1},smoothScrolling:!0,scrollPredominantAxis:!0,scrollbar:{handleMouseWheel:!0,alwaysConsumeMouseWheel:!1,horizontal:"auto",vertical:"auto",useShadows:!0},selectionHighlight:!0,selectOnLineNumbers:!0,cursorSmoothCaretAnimation:!0,cursorBlinking:"smooth",hideCursorInOverviewRuler:!0,cursorSurroundingLinesStyle:"all",cursorSurroundingLines:4,formatOnPaste:!0,formatOnType:!0,useShadowDOM:!0});function E(){return{target:99,jsx:1,allowNonTsExtensions:!0}}return window.addEventListener("resize",()=>{let{width:p,height:c}=o.getClientRects()[0];s.style.width=`${Math.min(window.innerWidth,p)}px`,s.style.height=`${Math.min(window.innerHeight,c)}px`,d.layout()}),d.onDidChangeModelContent(p=>e(d.getValue(),p)),setTimeout(()=>oe((p,c)=>i.languages.typescript.typescriptDefaults.addExtraLib(p,c),p=>i.languages.typescript.typescriptDefaults.setDiagnosticsOptions(p)),100),()=>d};async function oe(e,t){let n=[{name:"react",url:"https://unpkg.com/@types/react@17.0.38/index.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"react/jsx-dev-runtime",url:"https://unpkg.com/@types/react@17.0.38/jsx-dev-runtime.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"react-exp",url:"https://unpkg.com/@types/react@17.0.38/experimental.d.ts",depend:[]},{name:"global",url:"https://unpkg.com/@types/react@17.0.38/global.d.ts",depend:[]},{name:"prop-types",url:"https://unpkg.com/@types/prop-types@15.7.4/index.d.ts",depend:[]},{name:"react-dom",url:"https://unpkg.com/@types/react-dom@17.0.11/index.d.ts",depend:[]},{name:"csstype",url:"https://unpkg.com/csstype@3.0.9/index.d.ts",depend:[]},{name:"@emotion/styled/base.d.ts",url:"https://unpkg.com/@emotion/styled@11.6.0/types/base.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/styled/index.d.ts",url:"https://unpkg.com/@emotion/styled@11.6.0/types/index.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/cache/index.d.ts",url:"https://unpkg.com/@emotion/cache@11.6.0/types/index.d.ts",depend:["@emotion/utils"]},{name:"@emotion/react/index.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/index.d.ts",depend:["@emotion/cache"]},{name:"@emotion/react/jsx-namespace.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/jsx-namespace.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/css-prop.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/css-prop.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/helper.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/helper.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/theming.d.ts",url:"https://unpkg.com/@emotion/react@11.7.0/types/theming.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/serialize/index.d.ts",url:"https://unpkg.com/@emotion/serialize@1.0.2/types/index.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/utils/index.d.ts",url:"https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",depend:[]},{name:"framer-motion",url:"https://unpkg.com/framer-motion@5.5.5/types/index.d.ts",depend:["popmotion"]},{name:"framer-motion/types/render/dom/motion.d.ts",url:" https://unpkg.com/framer-motion@5.5.5/types/render/dom/motion.d.ts",depend:["popmotion"]},{name:"popmotion",url:"https://unpkg.com/popmotion@11.0.0/lib/index.d.ts"}].map(({name:o,url:r})=>async()=>{let i=await(await fetch(r)).text(),a=o.includes("@")?`/node_modules/${o}`:o.endsWith(".d.ts")?"/node_modules/@types"+o:"/node_modules/@types/"+o+"/index.d.ts";e(i,a)});await ee(n,{concurrency:2}),t({noSuggestionDiagnostics:!1,noSemanticValidation:!1,noSyntaxValidation:!1})}var re=ne;export{re as default};
//# sourceMappingURL=startMonaco-R5SBO4WW.mjs.map
