import"./chunk-R25N5FFR.mjs";import{jsx as E}from"https://spike.land/dist/emotion.mjs";var g,f,p,m;var u,A=async(t,e)=>(u=u||(await import("./session-BO4AL4K3.mjs")).default,u(t,e)),M=async t=>(g=g||(await import("./prettierEsm-3WCLH452.mjs")).formatter,await g(t));async function S(t){console.log("start monaco with session");let e=document.querySelector("#monacoEditor");p=p||(globalThis.monacoEditorModule&&await globalThis.monacoEditorModule||await import("./editor-D6MC7DCP.mjs")).startMonaco;let o=c=>y(r.getModel().getValue(),c.changes,t,++t.i),{editor:r,monaco:a}=await p({language:"typescript",container:e,code:t.code}),n=(await import("./throttle-UJQ536PU.mjs")).default;r.onDidChangeModelContent(n(o,100)),window.monaco=a,t.editor=r,window.sess=t}async function U({monaco:t,editor:e}){if(!t)return[{messageText:"Error with the error checking. Try to reload!"}];let o=e.getModel(),a=await(await t.languages.typescript.getTypeScriptWorker())(o),n=o.uri.toString(),c=a.getSemanticDiagnostics(n),i=a.getCompilerOptionsDiagnostics(n),l=a.getSyntacticDiagnostics(n),s=await Promise.race([c,i,l]);return console.log(s),[]}async function y(t,e=null,o,r){o.changes.push(e),m=m||(await import("./babelEsm-JLCGIKIP.mjs")).babelTransform,f=m,o.errorText="";try{let a=await M(t),n=await f(a),c=!1;if(n.length>0){if(r<o.i)return;try{let{getHtmlAndCss:l}=await import("./renderToString-2TH2GRUO.mjs");if(r<o.i)return;let s=await v(n),{html:d,css:h}=l(s);o.transpiled=n,o.html=d;let w=await k(n);o.setChild(x=>[...x,w]),globalThis.App=w,o.children=w,c=!d,o.code=a,o.codeNonFormatted=t;let T=a;if(o.css=h,o.i!==r)return;let{saveCode:C}=await import("./ws-PJLEL464.mjs");C({transpiled:n,code:T,i:r,css:h,html:d});return}catch(l){console.error("EXCEPTION"),console.log({e:l}),c=!0,console.error({restartError:c})}}if(o.i>r)return;let i=await U(o);if(o.i>r)return;c&&i.push({messageText:"Error while starting the app. Check the console!"}),i.length>0&&console.log({err:i})}catch(a){o.errorText=a.message,console.error(a.message)}}var L=async({code:t})=>{let e={code:t,i:0,changes:[],setChild:()=>{}};await y(t,null,e),await j(e)};async function j(t,e,o){t.children=null;let{renderPreviewWindow:r}=globalThis.renderPreviewModule&&await globalThis.renderPreviewModule||await import("./renderPreviewWindow-QIFATZHP.mjs");await r(t,e,o),o||await S(t)}async function k(t,e="window"){let o=e==="window"?t.replace("body{","#zbody{"):t,r=b(o),a=await import(r);return URL.revokeObjectURL(r),E(a.default)}function b(t){let e=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(e)}async function v(t,e="window"){let o=e==="window"?t.replace("body{","#zbody{"):t,r=b(o),a=(await import(r)).default;return URL.revokeObjectURL(r),a}export{A as initSession,M as prettier,j as quickStart,L as startFromCode,S as startMonacoWithSession};
