import"./chunk-6XRSRXUF.mjs";import{jsx as C}from"https://spike.land/dist/emotion.mjs";var h,g,p;var R=(await import("./session-DAWSVOXB.mjs")).default,x=(await import("./prettierEsm-K2KRJTWP.mjs")).formatter;async function E(o){console.log("start monaco with session");let e=document.querySelector("#monacoEditor");g=g||(globalThis.monacoEditorModule&&await globalThis.monacoEditorModule||await import("./editor-EVRFJQH4.mjs")).startMonaco;let t=n=>u(r.getModel().getValue(),n.changes,o,++o.i),{editor:r,monaco:a}=await g({language:"typescript",container:e,code:o.code});r.onDidChangeModelContent(t),window.monaco=a,o.editor=r,window.sess=o}async function M({monaco:o,editor:e}){if(!o)return[{messageText:"Error with the error checking. Try to reload!"}];let t=e.getModel(),a=await(await o.languages.typescript.getTypeScriptWorker())(t),n=t.uri.toString(),c=a.getSemanticDiagnostics(n),i=a.getCompilerOptionsDiagnostics(n),l=a.getSyntacticDiagnostics(n),d=await Promise.race([c,i,l]);return console.log(d),[]}async function u(o,e=null,t,r){t.changes.push(e),p=p||(await import("./babelEsm-T57EWQE2.mjs")).babelTransform,h=p,t.errorText="";try{let a=await x(o),n=await h(a),c=!1;if(n.length>0){if(r<t.i)return;try{let{getHtmlAndCss:l}=await import("./renderToString-CAUECEZ5.mjs");if(r<t.i)return;let d=await k(n),{html:s,css:m}=l(d);t.transpiled=n,t.html=s;let w=await j(n);t.setChild(T=>[...T,w]),globalThis.App=w,t.children=w,c=!s,t.code=a,t.codeNonFormatted=o;let y=a;if(t.css=m,t.i!==r)return;let{saveCode:b}=await import("./ws-EESJFX2C.mjs");b({transpiled:n,code:y,i:r,css:m,html:s});return}catch(l){console.error("EXCEPTION"),console.log({e:l}),c=!0,console.error({restartError:c})}}if(t.i>r)return;let i=await M(t);if(t.i>r)return;c&&i.push({messageText:"Error while starting the app. Check the console!"}),i.length>0&&console.log({err:i})}catch(a){t.errorText=a.message,console.error(a.message)}}var S=async({code:o})=>{let e={code:o,i:0,changes:[],setChild:()=>{}};await u(o,null,e),await U(e)};async function U(o,e,t){o.children=null;let{renderPreviewWindow:r}=globalThis.renderPreviewModule&&await globalThis.renderPreviewModule||await import("./renderPreviewWindow-YRN64Y3Z.mjs");await r(o,e,t),t||await E(o)}async function j(o,e="window"){let t=e==="window"?o.replace("body{","#zbody{"):o,r=f(t),a=await import(r);return URL.revokeObjectURL(r),C(a.default)}function f(o){let e=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(e)}async function k(o,e="window"){let t=e==="window"?o.replace("body{","#zbody{"):o,r=f(t),a=(await import(r)).default;return URL.revokeObjectURL(r),a}export{R as initSession,x as prettier,U as quickStart,S as startFromCode,E as startMonacoWithSession};
