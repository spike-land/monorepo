import{jsx as b}from"https://unpkg.com/@spike.land/esm@0.3.75/dist/emotion-react.mjs";var g,f,s,m,h,p;async function E(e){let r=document.getElementById("shadowEditor"),o=await(await import("./startMonaco-R5SBO4WW.mjs")).default({language:"typescript",container:r,code:e.code,onChange:(a,n)=>y(a,n,e,++e.i)});e.editor=o(),window.monaco.languages.registerOnTypeFormattingEditProvider("typescript",{autoFormatTriggerCharacters:["}","{",")","(",";"],async provideOnTypeFormattingEdits(a){let n=await g(a.getValue());return[{range:a.getFullModelRange(),text:n}]}}),window.sess=e,e.monaco=window.monaco}async function O({monaco:e,editor:r}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=r.getModel(),i=await(await e.languages.typescript.getTypeScriptWorker())(t),a=t.uri.toString(),n=i.getSemanticDiagnostics(a),d=i.getCompilerOptionsDiagnostics(a),c=i.getSyntacticDiagnostics(a),l=await Promise.race([n,d,c]);return console.log(l),[]}async function y(e,r=null,t,o){if(t.changes.push(r),f=f||(await import("./data-3RL66AUZ.mjs")).saveCode,g=g||(await import("./formatter-DZIXOK54.mjs")).formatter,m=m||(await import("./esbuildEsm-J5F7TKTE.mjs")).transform,s=m,window.sendChannel){let a=(await import("https://unpkg.com/@spike.land/esm@0.3.75/dist/ipfs-only-hash.mjs")).default,n=await a.of(e);if(window.hashOfCode===window.hashOfStarterCode&&window.hashOfCode===n)return;window[n]=e;let d=await a.of(t.code);if(window[d]=t.code,window.hashOfCode!==n){let c=t.code,l=(await import("https://unpkg.com/@spike.land/esm@0.3.75/dist/textdiff-create.mjs")).default,w=x(c,e,l);if(o<t.i)return;window.sendChannel.send({changes:r,i:t.i,hashOfCode:n,prevHash:d,codeDiff:w})}}t.errorText="";let{monaco:i}=t;try{let a=await g(e),n=await s(a),d=!1;if(n.length){if(o<t.i)return;try{if(h=h||(await import("./renderToString-ITNKYY5A.mjs")).getHtmlAndCss,o<t.i)return;let l=await S(n),{html:w}=h(l);t.transpiled=n,t.html=w;let u=await v(n);t.setChild(T=>[...T,u]),t.children=u,d=!w,t.codeNonFormatted=e,p=p||(await import("./templates-3NLHBFCE.mjs")).getCss,p(t),await f(t,t.i),i.editor.setTheme("vs-dark");return}catch(l){console.log({e:l}),d=!0,console.error({restartError:d})}}if(t.i>o)return;let c=await O(t);if(t.i>o)return;if(d&&c.push({messageText:"Error while starting the app. Check the console!"}),c.length&&console.log({err:c}),c.length===0&&n.length){if(t.i>o)return;t.code=a,t.codeNonFormatted=e,f(t,o)}else{if(console.log({code:e,transpiled:n}),t.i>o)return;if(a.length<1e3&&t.code.length<1e3){let w=await(await import("https://ga.jspm.io/npm:@spike.land/shadb@0.4.15/dist/shaDB.mjs")).diff(t.code,a);if(w.c.length<=3){t.lastErrors=0;return}if(w.c.length==4){t.lastErrors=0,i.editor.setTheme("hc-black");return}}c&&c[0]&&c[0].messageText&&console.error(c[0].messageText.toString());return}i.editor.setTheme("vs-dark")}catch(a){i.editor.setTheme("vs-light"),setTimeout(()=>{i.editor.setTheme("hc-black")},50),t.errorText=a.message,console.error(a.message)}}var U=async({code:e})=>{let r={code:e,i:0,setChild:()=>{}};await y(e,null,r),await k(r)};async function k(e){e.children=null;let{renderPreviewWindow:r}=await import("./renderPreviewWindow-TBN73J2I.mjs");await r(e),localStorage&&e&&localStorage.setItem(`state-${e.room}`,JSON.stringify({session:e})),await E(e)}async function v(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,o=C(t),i=await import(o);return URL.revokeObjectURL(o),b(i.default)}function x(e,r,t){return JSON.stringify(t(e,r))}function C(e){let r=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(r)}async function S(e,r="window"){let t=r==="window"?e.replace("body{","#zbody{"):e,o=C(t),i=(await import(o)).default;return URL.revokeObjectURL(o),i}export{k as quickStart,U as startFromCode,E as startMonacoWithSession};
//# sourceMappingURL=quickStart.mjs.map
