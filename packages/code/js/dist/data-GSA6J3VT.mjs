import"./chunk-UPO26O35.mjs";import{sha256 as c,shaDB as o}from"https://ga.jspm.io/npm:@spike.land/shadb@0.4.15/dist/shaDB.mjs";import f from"https://unpkg.com/@spike.land/esm@0.3.75/dist/ipfs-only-hash.mjs";var h={},s,D=async()=>{s=await m();let t=await o.get(s,"json"),e=null;if(t&&t.signal)return t.signal;if(typeof t=="string"||t===null||!t.list){let a=self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./uidV4-RUWO73OC.mjs")).default;return await o.put(s,JSON.stringify({...t,list:[a],[a]:{lastOpen:Date.now()}})),e!==null&&await o.put(a,e),[a]}return e!==null&&await o.put(t.list[0],e),t.list};async function I(t,e){s=await m();let a=await o.get(s,"json")||{list:[]},i=self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./uidV4-RUWO73OC.mjs")).default,n={...a,projects:{...a.projects,[t]:{projectId:i,lastOpen:Date.now()}},[i]:{lastOpen:Date.now()},list:[i,...a.list]};await o.put(s,JSON.stringify(n)),await o.put(i,e)}async function m(){if(s)return s;let t=await o.get("uuid","string");if(!t){let a=await(await fetch("https://spike.land/register")).json();return s||(s=a.uuid,await o.put("uuid",a.uuid),a.uuid)}return t}var d;async function O(){if(d)return d;let t=await D();return t.rootUrl?t:(d=t[0],d)}async function S(t){console.log(t);let e=window.location.href.endsWith("/edit/")?window.location.href.slice(0,-5):window.location.href.slice(0,-4),a=await fetch(`${e}/app.tsx`).then(u=>u.text()),i=await c(a);await o.put(i,a);let n=JSON.stringify({code:i,transpiled:"",html:"",url:e}),r=await c(n);await o.put(r,n),await I(t,r),console.log("done"),location.href="https://code.spike.land"}async function P(t){let e=t||(window.location.href.endsWith("/edit/")?window.location.href.slice(0,-5):window.location.href.slice(0,-4)),n={code:await(await fetch(e+"app.tsx")).text(),url:e,transpiled:"",html:""};return console.log({ret:n}),n}var g={code:"",html:null,css:"",transpiled:null,url:null},N={code:"",html:null,transpiled:null},b=async(t,e)=>{let{code:a,codeNonFormatted:i,html:n,transpiled:r}=t;if(N.code=a,window.sess.i>e)return;if(globalThis.broad&&i){let U=await f.of(i);h.codeNonFormatted=i,setTimeout(async()=>h.codeNonFormatted===i&&globalThis.broad({starterCode:window.starterCode,code:i,transpiled:r,i:t.i,css:t.css,html:t.html,hashOfStarterCode:window.starterCode&&await f.of(window.starterCode),hashOfCode:U}),500);return}let{shareItAsHtml:u}=await import("./share-CP7QLD5U.mjs"),y=u(t);if(t.i>e)return;let w=await y,j=t.room||await O();if(t.i>e)return;t.url=w;let l={url:await c(w),code:await c(a),html:await c(n),transpiled:await c(r)},p=await c(JSON.stringify(l));return await o.put(p,JSON.stringify(l)),a&&await o.put(l.code,a),n&&await o.put(l.html,n),r&&await o.put(l.transpiled,r),await o.put(j,p),Object.assign(g,{html:n,code:a,transpiled:r,url:w}),g};export{S as edit,P as getIPFSCodeToLoad,D as getProjects,m as getUserId,b as saveCode};
//# sourceMappingURL=data-GSA6J3VT.mjs.map
