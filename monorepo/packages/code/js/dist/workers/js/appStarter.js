(()=>{(function(){let fe=!!navigator.userAgent.match(/Edge\/\d+\.\d+/),D=!!window.safari,T=document.baseURI;function O(r,a="text/javascript"){return URL.createObjectURL(new Blob([r],{type:a}))}let J=()=>{};function $0(r){try{return new URL(r),!0}catch(a){return!1}}let A0=/\\/g;function N(r,a){if(a=a&&a.split("#")[0].split("?")[0],r.indexOf("\\")!==-1&&(r=r.replace(A0,"/")),r[0]==="/"&&r[1]==="/")return a.slice(0,a.indexOf(":")+1)+r;if(r[0]==="."&&(r[1]==="/"||r[1]==="."&&(r[2]==="/"||r.length===2&&(r+="/"))||r.length===1&&(r+="/"))||r[0]==="/"){let l=a.slice(0,a.indexOf(":")+1),o;if(a[l.length+1]==="/"?l!=="file:"?(o=a.slice(l.length+2),o=o.slice(o.indexOf("/")+1)):o=a.slice(8):o=a.slice(l.length+(a[l.length]==="/")),r[0]==="/")return a.slice(0,a.length-o.length-1)+r;let u=o.slice(0,o.lastIndexOf("/")+1)+r,d=[],h=-1;for(let p=0;p<u.length;p++){if(h!==-1){u[p]==="/"&&(d.push(u.slice(h,p+1)),h=-1);continue}else if(u[p]==="."){if(u[p+1]==="."&&(u[p+2]==="/"||p+2===u.length)){d.pop(),p+=2;continue}else if(u[p+1]==="/"||p+1===u.length){p+=1;continue}}for(;u[p]==="/";)p++;h=p}return h!==-1&&d.push(u.slice(h)),a.slice(0,a.length-o.length)+d.join("")}}function qe(r,a){return N(r,a)||(r.indexOf(":")!==-1?r:N("./"+r,a))}function He(r,a,l,o){for(let u in r){let d=N(u,l)||u;if(a[d]&&a[d]!==r[d])throw Error(`Rejected map override "${d}" from ${a[d]} to ${r[d]}.`);let h=r[u];if(typeof h!="string")continue;let p=ue(o,N(h,l)||h,l);if(p){a[d]=p;continue}console.warn(`Mapping "${u}" -> "${r[u]}" does not resolve`)}}function C0(r,a,l){let o={imports:Object.assign({},l.imports),scopes:Object.assign({},l.scopes)};if(r.imports&&He(r.imports,o.imports,a,l),r.scopes)for(let u in r.scopes){let d=qe(u,a);He(r.scopes[u],o.scopes[d]||(o.scopes[d]={}),a,l)}return o}function le(r,a){if(a[r])return r;let l=r.length;do{let o=r.slice(0,l+1);if(o in a)return o}while((l=r.lastIndexOf("/",l-1))!==-1)}function De(r,a){let l=le(r,a);if(l){let o=a[l];return o===null?void 0:o+r.slice(l.length)}}function ue(r,a,l){let o=l&&le(l,r.scopes);for(;o;){let u=De(a,r.scopes[o]);if(u)return u;o=le(o.slice(0,o.lastIndexOf("/")),r.scopes)}return De(a,r.imports)||a.indexOf(":")!==-1&&a}let Je=document.querySelector("script[type=esms-options]"),S=Je?JSON.parse(Je.innerHTML):self.esmsInitOptions?self.esmsInitOptions:{},g=!!S.shimMode,Fe=U(g&&S.resolve),Be=S.skip?new RegExp(S.skip):null,F=S.nonce;if(!F){let r=document.querySelector("script[nonce]");r&&(F=r.nonce||r.getAttribute("nonce"))}let S0=U(S.onerror||J),L0=S.onpolyfill?U(S.onpolyfill):()=>console.info("OK: ^ TypeError module failure has been polyfilled"),{revokeBlobURLs:ze,noLoadEventRetriggers:Ke,enforceIntegrity:x0}=S,Qe=S.fetch?U(S.fetch):fetch;function U(r){return typeof r=="string"?self[r]:r}let Ge=Array.isArray(S.polyfillEnable)?S.polyfillEnable:[],de=Ge.includes("css-modules"),be=Ge.includes("json-modules");function I0(){g=!0}let B;window.addEventListener("error",r=>B=r);function Ve(r,{errUrl:a=r}={}){B=void 0;let l=O(`import*as m from'${r}';self._esmsi=m`),o=Object.assign(document.createElement("script"),{type:"module",src:l});o.setAttribute("nonce",F),o.setAttribute("noshim","");let u=new Promise((d,h)=>{o.addEventListener("error",p),o.addEventListener("load",p);function p(k){document.head.removeChild(o),self._esmsi?(d(self._esmsi,T),self._esmsi=void 0):(h(!(k instanceof Event)&&k||B&&B.error||new Error(`Error loading or executing the graph of ${a} (check the console for ${l}).`)),B=void 0)}});return document.head.appendChild(o),u}let j=Ve,E0=Ve(O("export default u=>import(u)")).then(r=>(r&&(j=r.default),!!r),J),he=!1,pe=!1,ke=!1,me=!1,we=!1,O0=Promise.resolve(E0).then(r=>{if(!!r)return we=!0,Promise.all([j(O("import.meta")).then(()=>ke=!0,J),de&&j(O('import"data:text/css,{}"assert{type:"css"}')).then(()=>pe=!0,J),be&&j(O('import"data:text/json,{}"assert{type:"json"}')).then(()=>he=!0,J),new Promise(a=>{self._$s=o=>{document.head.removeChild(l),o&&(me=!0),delete self._$s,a()};let l=document.createElement("iframe");l.style.display="none",document.head.appendChild(l),l.src=O(`<script type=importmap nonce="${F}">{"imports":{"x":"data:text/javascript,"}}<\/script><script nonce="${F}">import('x').then(()=>1,()=>0).then(v=>parent._$s(v))<\/script>`,"text/html")})])}),$,ye,ge,z=4194304,R0=new Uint8Array(new Uint16Array([1]).buffer)[0]===1,v,We,w;function j0(r,a="@"){if(v=r,We=a,v.length>z||!$){for(;v.length>z;)z*=2;ye=new ArrayBuffer(4*z),$=function(d,h,p){var k=new d.Int8Array(p),c=new d.Int16Array(p),t=new d.Int32Array(p),_=new d.Uint8Array(p),L=new d.Uint16Array(p),C=816;function P(e){e=e|0;var s=0,i=0,n=0,f=0,b=0;b=C,C=C+14336|0,f=b,k[589]=1,c[291]=0,c[292]=0,c[293]=-1,t[15]=t[2],k[590]=0,t[14]=0,k[588]=0,t[16]=b+10240,t[17]=b+2048,k[591]=0,e=(t[3]|0)+-2|0,t[18]=e,s=e+(t[12]<<1)|0,t[19]=s;e:for(;;){if(i=e+2|0,t[18]=i,e>>>0>=s>>>0){n=18;break}t:do switch(c[i>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{if((((c[292]|0)==0?Y(i)|0:0)?q(e+4|0,120,112,111,114,116)|0:0)?(p0(),(k[589]|0)==0):0){n=9;break e}else n=17;break}case 105:{(Y(i)|0?q(e+4|0,109,112,111,114,116)|0:0)&&k0(),n=17;break}case 59:{n=17;break}case 47:switch(c[e+4>>1]|0){case 47:{Pe();break t}case 42:{Re(1);break t}default:{n=16;break e}}default:{n=16;break e}}while(0);(n|0)==17&&(n=0,t[15]=t[18]),e=t[18]|0,s=t[19]|0}(n|0)==9?(e=t[18]|0,t[15]=e,n=19):(n|0)==16?(k[589]=0,t[18]=e,n=19):(n|0)==18&&(k[588]|0?e=0:(e=i,n=19));do if((n|0)==19){e:for(;;){if(s=e+2|0,t[18]=s,i=s,e>>>0>=(t[19]|0)>>>0){n=75;break}t:do switch(c[s>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{(((c[292]|0)==0?Y(s)|0:0)?q(e+4|0,120,112,111,114,116)|0:0)&&p0(),n=74;break}case 105:{(Y(s)|0?q(e+4|0,109,112,111,114,116)|0:0)&&k0(),n=74;break}case 99:{((Y(s)|0?oe(e+4|0,108,97,115,115)|0:0)?Ne(c[e+12>>1]|0)|0:0)&&(k[591]=1),n=74;break}case 40:{s=t[15]|0,i=t[17]|0,n=c[292]|0,c[292]=n+1<<16>>16,t[i+((n&65535)<<2)>>2]=s,n=74;break}case 41:{if(e=c[292]|0,!(e<<16>>16)){n=36;break e}n=e+-1<<16>>16,c[292]=n,e=t[11]|0,((e|0)!=0?(t[e+20>>2]|0)==(t[(t[17]|0)+((n&65535)<<2)>>2]|0):0)&&(s=e+4|0,t[s>>2]|0||(t[s>>2]=i),t[e+12>>2]=i,t[11]=0),n=74;break}case 123:{n=t[15]|0,i=t[8]|0,e=n;do if((c[n>>1]|0)==41&(i|0)!=0?(t[i+4>>2]|0)==(n|0):0)if(s=t[9]|0,t[8]=s,s){t[s+28>>2]=0;break}else{t[4]=0;break}while(0);s=c[292]|0,n=s&65535,k[f+n>>0]=k[591]|0,k[591]=0,i=t[17]|0,c[292]=s+1<<16>>16,t[i+(n<<2)>>2]=e,n=74;break}case 125:{if(e=c[292]|0,!(e<<16>>16)){n=49;break e}if(i=e+-1<<16>>16,c[292]=i,s=c[293]|0,e<<16>>16!=s<<16>>16)if(s<<16>>16!=-1&(i&65535)<(s&65535)){n=53;break e}else{n=74;break t}else{i=t[16]|0,n=(c[291]|0)+-1<<16>>16,c[291]=n,c[293]=c[i+((n&65535)<<1)>>1]|0,m0(),n=74;break t}}case 39:{x(39),n=74;break}case 34:{x(34),n=74;break}case 47:switch(c[e+4>>1]|0){case 47:{Pe();break t}case 42:{Re(1);break t}default:{s=t[15]|0,i=c[s>>1]|0;s:do if(U0(i)|0)switch(i<<16>>16){case 46:if(((c[s+-2>>1]|0)+-48&65535)<10){n=68;break s}else{n=71;break s}case 43:if((c[s+-2>>1]|0)==43){n=68;break s}else{n=71;break s}case 45:if((c[s+-2>>1]|0)==45){n=68;break s}else{n=71;break s}default:{n=71;break s}}else{switch(i<<16>>16){case 41:if(t1(t[(t[17]|0)+(L[292]<<2)>>2]|0)|0){n=71;break s}else{n=68;break s}case 125:break;default:{n=68;break s}}e=L[292]|0,(W0(t[(t[17]|0)+(e<<2)>>2]|0)|0?0:(k[f+e>>0]|0)==0)?n=68:n=71}while(0);s:do if((n|0)==68)if(n=0,Q0(s)|0)n=71;else{switch(i<<16>>16){case 0:{n=71;break s}case 47:break;default:{e=1;break s}}k[590]|0?n=71:e=1}while(0);(n|0)==71&&(X0(),e=0),k[590]=e,n=74;break t}}case 96:{m0(),n=74;break}default:n=74}while(0);(n|0)==74&&(n=0,t[15]=t[18]),e=t[18]|0}if((n|0)==36){I(),e=0;break}else if((n|0)==49){I(),e=0;break}else if((n|0)==53){I(),e=0;break}else if((n|0)==75){e=(c[293]|0)==-1&(c[292]|0)==0&(k[588]|0)==0;break}}while(0);return C=b,e|0}function p0(){var e=0,s=0,i=0,n=0,f=0,b=0;f=t[18]|0,b=f+12|0,t[18]=b,s=m(1)|0,e=t[18]|0,((e|0)==(b|0)?!(je(s)|0):0)||(n=3);e:do if((n|0)==3){t:do switch(s<<16>>16){case 100:{X(e,e+14|0);break e}case 97:{t[18]=e+10,m(1)|0,e=t[18]|0,n=6;break}case 102:{n=6;break}case 99:{if(oe(e+2|0,108,97,115,115)|0?(i=e+10|0,R(c[i>>1]|0)|0):0){t[18]=i,f=m(1)|0,b=t[18]|0,H(f)|0,X(b,t[18]|0),t[18]=(t[18]|0)+-2;break e}e=e+4|0,t[18]=e,n=13;break}case 108:case 118:{n=13;break}case 123:{for(t[18]=e+2,e=m(1)|0,i=t[18]|0;;){if(Z(e)|0?(x(e),e=(t[18]|0)+2|0,t[18]=e):(H(e)|0,e=t[18]|0),m(1)|0,e=w0(i,e)|0,e<<16>>16==44&&(t[18]=(t[18]|0)+2,e=m(1)|0),s=i,i=t[18]|0,e<<16>>16==125){n=32;break}if((i|0)==(s|0)){n=29;break}if(i>>>0>(t[19]|0)>>>0){n=31;break}}if((n|0)==29){I();break e}else if((n|0)==31){I();break e}else if((n|0)==32){t[18]=i+2,n=34;break t}break}case 42:{t[18]=e+2,m(1)|0,n=t[18]|0,w0(n,n)|0,n=34;break}default:}while(0);if((n|0)==6){t[18]=e+16,e=m(1)|0,e<<16>>16==42&&(t[18]=(t[18]|0)+2,e=m(1)|0),b=t[18]|0,H(e)|0,X(b,t[18]|0),t[18]=(t[18]|0)+-2;break}else if((n|0)==13){e=e+4|0,t[18]=e,k[589]=0;t:for(;;){switch(t[18]=e+2,b=m(1)|0,e=t[18]|0,(H(b)|0)<<16>>16){case 91:case 123:{n=15;break t}default:}if(s=t[18]|0,(s|0)==(e|0))break e;switch(X(e,s),(m(1)|0)<<16>>16){case 61:{n=19;break t}case 44:break;default:{n=20;break t}}e=t[18]|0}if((n|0)==15){t[18]=(t[18]|0)+-2;break}else if((n|0)==19){t[18]=(t[18]|0)+-2;break}else if((n|0)==20){t[18]=(t[18]|0)+-2;break}}else(n|0)==34&&(s=m(1)|0);if(e=t[18]|0,s<<16>>16==102?Te(e+2|0,114,111,109)|0:0){t[18]=e+8,Ee(f,m(1)|0);break}t[18]=e+-2}while(0)}function k0(){var e=0,s=0,i=0,n=0,f=0;f=t[18]|0,s=f+12|0,t[18]=s;e:do switch((m(1)|0)<<16>>16){case 40:{if(s=t[17]|0,i=c[292]|0,c[292]=i+1<<16>>16,t[s+((i&65535)<<2)>>2]=f,(c[t[15]>>1]|0)!=46){switch(Oe(f,(t[18]|0)+2|0,0,f),t[11]=t[8],t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 39:{x(39);break}case 34:{x(34);break}default:{t[18]=(t[18]|0)+-2;break e}}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 44:{f=t[18]|0,t[(t[8]|0)+4>>2]=f,t[18]=f+2,m(1)|0,f=t[18]|0,i=t[8]|0,t[i+16>>2]=f,k[i+24>>0]=1,t[18]=f+-2;break e}case 41:{c[292]=(c[292]|0)+-1<<16>>16,i=t[18]|0,f=t[8]|0,t[f+4>>2]=i,t[f+12>>2]=i,k[f+24>>0]=1;break e}default:{t[18]=(t[18]|0)+-2;break e}}}break}case 46:{t[18]=(t[18]|0)+2,(((m(1)|0)<<16>>16==109?(e=t[18]|0,Te(e+2|0,101,116,97)|0):0)?(c[t[15]>>1]|0)!=46:0)&&Oe(f,f,e+8|0,2);break}case 42:case 39:case 34:{n=16;break}case 123:{if(e=t[18]|0,c[292]|0){t[18]=e+-2;break e}for(;!(e>>>0>=(t[19]|0)>>>0);){if(e=m(1)|0,Z(e)|0)x(e);else if(e<<16>>16==125){n=31;break}e=(t[18]|0)+2|0,t[18]=e}if((n|0)==31&&(t[18]=(t[18]|0)+2),m(1)|0,e=t[18]|0,!(oe(e,102,114,111,109)|0)){I();break e}if(t[18]=e+8,e=m(1)|0,Z(e)|0){Ee(f,e);break e}else{I();break e}}default:(t[18]|0)!=(s|0)&&(n=16)}while(0);do if((n|0)==16){if(c[292]|0){t[18]=(t[18]|0)+-2;break}for(e=t[19]|0,s=t[18]|0;;){if(s>>>0>=e>>>0){n=23;break}if(i=c[s>>1]|0,Z(i)|0){n=21;break}n=s+2|0,t[18]=n,s=n}if((n|0)==21){Ee(f,i);break}else if((n|0)==23){I();break}}while(0)}function Ee(e,s){e=e|0,s=s|0;var i=0,n=0;switch(i=(t[18]|0)+2|0,s<<16>>16){case 39:{x(39),n=5;break}case 34:{x(34),n=5;break}default:I()}do if((n|0)==5){if(Oe(e,i,t[18]|0,1),t[18]=(t[18]|0)+2,n=(m(0)|0)<<16>>16==97,s=t[18]|0,n?q(s+2|0,115,115,101,114,116)|0:0){if(t[18]=s+12,(m(1)|0)<<16>>16!=123){t[18]=s;break}e=t[18]|0,i=e;e:for(;;){switch(t[18]=i+2,i=m(1)|0,i<<16>>16){case 39:{x(39),t[18]=(t[18]|0)+2,i=m(1)|0;break}case 34:{x(34),t[18]=(t[18]|0)+2,i=m(1)|0;break}default:i=H(i)|0}if(i<<16>>16!=58){n=16;break}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 39:{x(39);break}case 34:{x(34);break}default:{n=20;break e}}switch(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16){case 125:{n=25;break e}case 44:break;default:{n=24;break e}}if(t[18]=(t[18]|0)+2,(m(1)|0)<<16>>16==125){n=25;break}i=t[18]|0}if((n|0)==16){t[18]=s;break}else if((n|0)==20){t[18]=s;break}else if((n|0)==24){t[18]=s;break}else if((n|0)==25){n=t[8]|0,t[n+16>>2]=e,t[n+12>>2]=(t[18]|0)+2;break}}t[18]=s+-2}while(0)}function Q0(e){e=e|0;e:do switch(c[e>>1]|0){case 100:switch(c[e+-2>>1]|0){case 105:{e=_e(e+-4|0,118,111)|0;break e}case 108:{e=ae(e+-4|0,121,105,101)|0;break e}default:{e=0;break e}}case 101:{switch(c[e+-2>>1]|0){case 115:break;case 116:{e=Me(e+-4|0,100,101,108,101)|0;break e}default:{e=0;break e}}switch(c[e+-4>>1]|0){case 108:{e=W(e+-6|0,101)|0;break e}case 97:{e=W(e+-6|0,99)|0;break e}default:{e=0;break e}}}case 102:{if((c[e+-2>>1]|0)==111?(c[e+-4>>1]|0)==101:0)switch(c[e+-6>>1]|0){case 99:{e=y0(e+-8|0,105,110,115,116,97,110)|0;break e}case 112:{e=_e(e+-8|0,116,121)|0;break e}default:{e=0;break e}}else e=0;break}case 110:{e=e+-2|0,W(e,105)|0?e=1:e=g0(e,114,101,116,117,114)|0;break}case 111:{e=W(e+-2|0,100)|0;break}case 114:{e=Z0(e+-2|0,100,101,98,117,103,103,101)|0;break}case 116:{e=Me(e+-2|0,97,119,97,105)|0;break}case 119:switch(c[e+-2>>1]|0){case 101:{e=W(e+-4|0,110)|0;break e}case 111:{e=ae(e+-4|0,116,104,114)|0;break e}default:{e=0;break e}}default:e=0}while(0);return e|0}function m0(){var e=0,s=0,i=0;s=t[19]|0,i=t[18]|0;e:for(;;){if(e=i+2|0,i>>>0>=s>>>0){s=8;break}switch(c[e>>1]|0){case 96:{s=9;break e}case 36:{if((c[i+4>>1]|0)==123){s=6;break e}break}case 92:{e=i+4|0;break}default:}i=e}(s|0)==6?(t[18]=i+4,e=c[293]|0,s=t[16]|0,i=c[291]|0,c[291]=i+1<<16>>16,c[s+((i&65535)<<1)>>1]=e,i=(c[292]|0)+1<<16>>16,c[292]=i,c[293]=i):(s|0)==8?(t[18]=e,I()):(s|0)==9&&(t[18]=e)}function m(e){e=e|0;var s=0,i=0,n=0;i=t[18]|0;e:do{s=c[i>>1]|0;t:do if(s<<16>>16!=47)if(e){if(Ne(s)|0)break;break e}else{if(r1(s)|0)break;break e}else switch(c[i+2>>1]|0){case 47:{Pe();break t}case 42:{Re(e);break t}default:{s=47;break e}}while(0);n=t[18]|0,i=n+2|0,t[18]=i}while(n>>>0<(t[19]|0)>>>0);return s|0}function x(e){e=e|0;var s=0,i=0,n=0,f=0;for(f=t[19]|0,s=t[18]|0;;){if(n=s+2|0,s>>>0>=f>>>0){s=9;break}if(i=c[n>>1]|0,i<<16>>16==e<<16>>16){s=10;break}if(i<<16>>16==92)i=s+4|0,(c[i>>1]|0)==13?(s=s+6|0,s=(c[s>>1]|0)==10?s:i):s=i;else if(v0(i)|0){s=9;break}else s=n}(s|0)==9?(t[18]=n,I()):(s|0)==10&&(t[18]=n)}function Oe(e,s,i,n){e=e|0,s=s|0,i=i|0,n=n|0;var f=0,b=0;f=t[13]|0,t[13]=f+32,b=t[8]|0,t[((b|0)==0?16:b+28|0)>>2]=f,t[9]=b,t[8]=f,t[f+8>>2]=e;do if((n|0)!=2)if((n|0)==1){t[f+12>>2]=i+2;break}else{t[f+12>>2]=t[3];break}else t[f+12>>2]=i;while(0);t[f>>2]=s,t[f+4>>2]=i,t[f+16>>2]=0,t[f+20>>2]=n,k[f+24>>0]=(n|0)==1&1,t[f+28>>2]=0}function G0(){var e=0,s=0,i=0;i=t[19]|0,s=t[18]|0;e:for(;;){if(e=s+2|0,s>>>0>=i>>>0){s=6;break}switch(c[e>>1]|0){case 13:case 10:{s=6;break e}case 93:{s=7;break e}case 92:{e=s+4|0;break}default:}s=e}return(s|0)==6?(t[18]=e,I(),e=0):(s|0)==7&&(t[18]=e,e=93),e|0}function V0(e,s,i,n,f,b,y,A){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,A=A|0,((((((c[e+12>>1]|0)==A<<16>>16?(c[e+10>>1]|0)==y<<16>>16:0)?(c[e+8>>1]|0)==b<<16>>16:0)?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function W0(e){switch(e=e|0,c[e>>1]|0){case 62:{e=(c[e+-2>>1]|0)==61;break}case 41:case 59:{e=1;break}case 104:{e=Me(e+-2|0,99,97,116,99)|0;break}case 121:{e=y0(e+-2|0,102,105,110,97,108,108)|0;break}case 101:{e=ae(e+-2|0,101,108,115)|0;break}default:e=0}return e|0}function w0(e,s){e=e|0,s=s|0;var i=0,n=0;return i=t[18]|0,n=c[i>>1]|0,n<<16>>16==97&&(t[18]=i+4,i=m(1)|0,e=t[18]|0,Z(i)|0?(x(i),s=(t[18]|0)+2|0,t[18]=s):(H(i)|0,s=t[18]|0),n=m(1)|0,i=t[18]|0),(i|0)!=(e|0)&&X(e,s),n|0}function X0(){var e=0,s=0,i=0;e:for(;;){if(e=t[18]|0,s=e+2|0,t[18]=s,e>>>0>=(t[19]|0)>>>0){i=7;break}switch(c[s>>1]|0){case 13:case 10:{i=7;break e}case 47:break e;case 91:{G0()|0;break}case 92:{t[18]=e+4;break}default:}}(i|0)==7&&I()}function Re(e){e=e|0;var s=0,i=0,n=0,f=0,b=0;for(f=(t[18]|0)+2|0,t[18]=f,i=t[19]|0;s=f+2|0,!(f>>>0>=i>>>0||(n=c[s>>1]|0,e?0:v0(n)|0));){if(n<<16>>16==42?(c[f+4>>1]|0)==47:0){b=8;break}f=s}(b|0)==8&&(t[18]=s,s=f+4|0),t[18]=s}function Y0(e,s,i,n,f,b,y){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,(((((c[e+10>>1]|0)==y<<16>>16?(c[e+8>>1]|0)==b<<16>>16:0)?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function Z0(e,s,i,n,f,b,y,A){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0,A=A|0;var E=0,ce=0;return ce=e+-12|0,E=t[3]|0,(ce>>>0>=E>>>0?V0(ce,s,i,n,f,b,y,A)|0:0)?(ce|0)==(E|0)?E=1:E=R(c[e+-14>>1]|0)|0:E=0,E|0}function je(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:{e=1;break}default:if((e&-8)<<16>>16==40|(e+-58&65535)<6)e=1;else{switch(e<<16>>16){case 91:case 93:case 94:{e=1;break e}default:}e=(e+-123&65535)<4}}while(0);return e|0}function U0(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:break;default:if(!((e+-58&65535)<6|(e+-40&65535)<7&e<<16>>16!=41)){switch(e<<16>>16){case 91:case 94:break e;default:}return e<<16>>16!=125&(e+-123&65535)<4|0}}while(0);return 1}function y0(e,s,i,n,f,b,y){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,y=y|0;var A=0,E=0;return E=e+-10|0,A=t[3]|0,(E>>>0>=A>>>0?Y0(E,s,i,n,f,b,y)|0:0)?(E|0)==(A|0)?A=1:A=R(c[e+-12>>1]|0)|0:A=0,A|0}function g0(e,s,i,n,f,b){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0;var y=0,A=0;return A=e+-8|0,y=t[3]|0,(A>>>0>=y>>>0?q(A,s,i,n,f,b)|0:0)?(A|0)==(y|0)?y=1:y=R(c[e+-10>>1]|0)|0:y=0,y|0}function e1(e){e=e|0;var s=0,i=0,n=0,f=0;return i=C,C=C+16|0,n=i,t[n>>2]=0,t[12]=e,s=t[3]|0,f=s+(e<<1)|0,e=f+2|0,c[f>>1]=0,t[n>>2]=e,t[13]=e,t[4]=0,t[8]=0,t[6]=0,t[5]=0,t[10]=0,t[7]=0,C=i,s|0}function q(e,s,i,n,f,b){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,b=b|0,((((c[e+8>>1]|0)==b<<16>>16?(c[e+6>>1]|0)==f<<16>>16:0)?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function Me(e,s,i,n,f){e=e|0,s=s|0,i=i|0,n=n|0,f=f|0;var b=0,y=0;return y=e+-6|0,b=t[3]|0,(y>>>0>=b>>>0?oe(y,s,i,n,f)|0:0)?(y|0)==(b|0)?b=1:b=R(c[e+-8>>1]|0)|0:b=0,b|0}function ae(e,s,i,n){e=e|0,s=s|0,i=i|0,n=n|0;var f=0,b=0;return b=e+-4|0,f=t[3]|0,(b>>>0>=f>>>0?Te(b,s,i,n)|0:0)?(b|0)==(f|0)?f=1:f=R(c[e+-6>>1]|0)|0:f=0,f|0}function _e(e,s,i){e=e|0,s=s|0,i=i|0;var n=0,f=0;return f=e+-2|0,n=t[3]|0,(f>>>0>=n>>>0?n1(f,s,i)|0:0)?(f|0)==(n|0)?n=1:n=R(c[e+-4>>1]|0)|0:n=0,n|0}function oe(e,s,i,n,f){return e=e|0,s=s|0,i=i|0,n=n|0,f=f|0,(((c[e+6>>1]|0)==f<<16>>16?(c[e+4>>1]|0)==n<<16>>16:0)?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function W(e,s){e=e|0,s=s|0;var i=0;return i=t[3]|0,(i>>>0<=e>>>0?(c[e>>1]|0)==s<<16>>16:0)?(i|0)==(e|0)?i=1:i=R(c[e+-2>>1]|0)|0:i=0,i|0}function R(e){e=e|0;e:do if((e+-9&65535)<5)e=1;else{switch(e<<16>>16){case 32:case 160:{e=1;break e}default:}e=e<<16>>16!=46&(je(e)|0)}while(0);return e|0}function Pe(){var e=0,s=0,i=0;e=t[19]|0,i=t[18]|0;e:for(;s=i+2|0,!(i>>>0>=e>>>0);)switch(c[s>>1]|0){case 13:case 10:break e;default:i=s}t[18]=s}function H(e){for(e=e|0;!(Ne(e)|0||je(e)|0);)if(e=(t[18]|0)+2|0,t[18]=e,e=c[e>>1]|0,!(e<<16>>16)){e=0;break}return e|0}function X(e,s){e=e|0,s=s|0;var i=0,n=0;i=t[13]|0,t[13]=i+12,n=t[10]|0,t[((n|0)==0?20:n+8|0)>>2]=i,t[10]=i,t[i>>2]=e,t[i+4>>2]=s,t[i+8>>2]=0}function Te(e,s,i,n){return e=e|0,s=s|0,i=i|0,n=n|0,((c[e+4>>1]|0)==n<<16>>16?(c[e+2>>1]|0)==i<<16>>16:0)?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function t1(e){return e=e|0,(g0(e,119,104,105,108,101)|0?0:!(ae(e,102,111,114)|0))?e=_e(e,105,102)|0:e=1,e|0}function s1(){var e=0;switch(e=t[(t[6]|0)+20>>2]|0,e|0){case 1:{e=-1;break}case 2:{e=-2;break}default:e=e-(t[3]|0)>>1}return e|0}function n1(e,s,i){return e=e|0,s=s|0,i=i|0,(c[e+2>>1]|0)==i<<16>>16?s=(c[e>>1]|0)==s<<16>>16:s=0,s|0}function r1(e){switch(e=e|0,e<<16>>16){case 160:case 32:case 12:case 11:case 9:{e=1;break}default:e=0}return e|0}function Y(e){return e=e|0,(t[3]|0)==(e|0)?e=1:e=R(c[e+-2>>1]|0)|0,e|0}function i1(){var e=0;return e=t[(t[6]|0)+16>>2]|0,e?e=e-(t[3]|0)>>1:e=-1,e|0}function a1(){var e=0;return e=t[6]|0,e=t[((e|0)==0?16:e+28|0)>>2]|0,t[6]=e,(e|0)!=0|0}function o1(){var e=0;return e=t[7]|0,e=t[((e|0)==0?20:e+8|0)>>2]|0,t[7]=e,(e|0)!=0|0}function c1(e){e=e|0;var s=0;return s=C,C=C+e|0,C=C+15&-16,s|0}function I(){k[588]=1,t[14]=(t[18]|0)-(t[3]|0)>>1,t[18]=(t[19]|0)+2}function Ne(e){return e=e|0,(e|128)<<16>>16==160|(e+-9&65535)<5|0}function Z(e){return e=e|0,e<<16>>16==39|e<<16>>16==34|0}function f1(){return(t[(t[6]|0)+12>>2]|0)-(t[3]|0)>>1|0}function l1(){return(t[(t[6]|0)+8>>2]|0)-(t[3]|0)>>1|0}function v0(e){return e=e|0,e<<16>>16==13|e<<16>>16==10|0}function u1(){return(t[(t[6]|0)+4>>2]|0)-(t[3]|0)>>1|0}function d1(){return(t[(t[7]|0)+4>>2]|0)-(t[3]|0)>>1|0}function b1(){return(t[t[6]>>2]|0)-(t[3]|0)>>1|0}function h1(){return(t[t[7]>>2]|0)-(t[3]|0)>>1|0}function p1(){return _[(t[6]|0)+24>>0]|0|0}function k1(e){e=e|0,t[3]=e}function m1(){return(k[589]|0)!=0|0}function w1(){return t[14]|0}return{ai:i1,e:w1,ee:d1,es:h1,f:m1,id:s1,ie:u1,ip:p1,is:b1,p:P,re:o1,ri:a1,sa:e1,se:f1,ses:k1,ss:l1,sta:c1}}({Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array},{},ye),ge=$.sta(2*z)}let l=v.length+1;$.ses(ge),$.sa(l-1),(R0?_0:M0)(v,new Uint16Array(ye,ge,l)),$.p()||(w=$.e(),M());let o=[],u=[];for(;$.ri();){let d=$.is(),h=$.ie(),p=$.ai(),k=$.id(),c=$.ss(),t=$.se(),_;$.ip()&&(_=Xe(k===-1?d:d+1,v.charCodeAt(k===-1?d-1:d))),o.push({n:_,s:d,e:h,ss:c,se:t,d:k,a:p})}for(;$.re();){let d=$.es(),h=v.charCodeAt(d);u.push(h===34||h===39?Xe(d+1,h):v.slice($.es(),$.ee()))}return[o,u,!!$.f()]}function M0(r,a){let l=r.length,o=0;for(;o<l;){let u=r.charCodeAt(o);a[o++]=(255&u)<<8|u>>>8}}function _0(r,a){let l=r.length,o=0;for(;o<l;)a[o]=r.charCodeAt(o++)}function Xe(r,a){w=r;let l="",o=w;for(;;){w>=v.length&&M();let u=v.charCodeAt(w);if(u===a)break;u===92?(l+=v.slice(o,w),l+=P0(),o=w):(u===8232||u===8233||Ye(u)&&M(),++w)}return l+=v.slice(o,w++),l}function P0(){let r=v.charCodeAt(++w);switch(++w,r){case 110:return`
`;case 114:return"\r";case 120:return String.fromCharCode(ve(2));case 117:return function(){let a;return v.charCodeAt(w)===123?(++w,a=ve(v.indexOf("}",w)-w),++w,a>1114111&&M()):a=ve(4),a<=65535?String.fromCharCode(a):(a-=65536,String.fromCharCode(55296+(a>>10),56320+(1023&a)))}();case 116:return"	";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:v.charCodeAt(w)===10&&++w;case 10:return"";case 56:case 57:M();default:if(r>=48&&r<=55){let a=v.substr(w-1,3).match(/^[0-7]+/)[0],l=parseInt(a,8);return l>255&&(a=a.slice(0,-1),l=parseInt(a,8)),w+=a.length-1,r=v.charCodeAt(w),a==="0"&&r!==56&&r!==57||M(),String.fromCharCode(l)}return Ye(r)?"":String.fromCharCode(r)}}function ve(r){let a=w,l=0,o=0;for(let u=0;u<r;++u,++w){let d,h=v.charCodeAt(w);if(h!==95){if(h>=97)d=h-97+10;else if(h>=65)d=h-65+10;else{if(!(h>=48&&h<=57))break;d=h-48}if(d>=16)break;o=h,l=16*l+d}else o!==95&&u!==0||M(),o=h}return o!==95&&w-a===r||M(),l}function Ye(r){return r===13||r===10}function M(){throw Object.assign(new Error(`Parse error ${We}:${v.slice(0,w).split(`
`).length}:${w-v.lastIndexOf(`
`,w-1)}`),{idx:w})}async function T0(r,a){return ue(Q,N(r,a)||r,a)}async function N0(r,a){let l=N(r,a);return{r:ue(Q,l||r,a),b:!l&&!$0(r)}}let $e=Fe?async(r,a)=>({r:await Fe(r,a,T0),b:!1}):N0,K={};async function Ze(r,a){r.b||a[r.u]||(a[r.u]=1,await r.L,await Promise.all(r.d.map(l=>Ze(l,a))),r.n||(r.n=r.d.some(l=>l.n)))}let Q={imports:{},scopes:{}},ee=!1,G,te=O0.then(()=>{if(!g)if(document.querySelectorAll("script[type=module-shim],script[type=importmap-shim],link[rel=modulepreload-shim]").length)I0();else{let r=!1;for(let a of document.querySelectorAll("script[type=module],script[type=importmap]"))if(!r)a.type==="module"&&(r=!0);else if(a.type==="importmap"){ee=!0;break}}if(G=we&&ke&&me&&(!be||he)&&(!de||pe)&&!ee&&!0,g||!G){new MutationObserver(r=>{for(let a of r)if(a.type==="childList")for(let l of a.addedNodes)l.tagName==="SCRIPT"?(l.type===(g?"module-shim":"module")&&b0(l),l.type===(g?"importmap-shim":"importmap")&&d0(l)):l.tagName==="LINK"&&l.rel===(g?"modulepreload-shim":"modulepreload")&&h0(l)}).observe(document,{childList:!0,subtree:!0}),ie(),c0();return}}),se=te,Ue=!0,V=!0;async function e0(r,a,l,o,u){if(g||(V=!1),await se,!g&&G)return o?null:(await u,j(l?O(l):r,{errUrl:r||l}));let d=o0(r,a,l),h={};if(await Ze(d,h),re=void 0,r0(d,h),await u,l&&!g&&!d.n){let k=await j(O(l),{errUrl:l});return ze&&t0(Object.keys(h)),k}Ue&&!g&&d.n&&o&&(L0(),Ue=!1);let p=await j(!g&&!d.n&&o?d.u:d.b,{errUrl:d.u});return d.s&&(await j(d.s)).u$_(p),ze&&t0(Object.keys(h)),p}function t0(r){let a=0,l=r.length,o=self.requestIdleCallback?self.requestIdleCallback:self.requestAnimationFrame;o(u);function u(){let d=a*100;if(!(d>l)){for(let h of r.slice(d,d+100)){let p=K[h];p&&URL.revokeObjectURL(p.b)}a++,o(u)}}}async function s0(r,a=T,l){return await te,(V||g||!G)&&(ie(),g||(V=!1)),await se,e0((await $e(r,a)).r||Ie(r,a),{credentials:"same-origin"})}self.importShim=s0,g&&(s0.getImportMap=()=>JSON.parse(JSON.stringify(Q)));let n0={};async function q0(r,a=this.url){return(await $e(r,`${a}`)).r||Ie(r,a)}self._esmsm=n0;function ne(r){return`'${r.replace(/'/g,"\\'")}'`}let re;function r0(r,a){if(r.b||!a[r.u])return;a[r.u]=0;for(let h of r.d)r0(h,a);let[l]=r.a,o=r.S,u=fe&&re?`import '${re}';`:"";if(!l.length)u+=o;else{let h=0,p=0;for(let{s:k,e:c,se:t,d:_}of l)if(_===-1){let L=r.d[p++],C=L.b;if(!C)(C=L.s)||(C=L.s=O(`export function u$_(m){${L.a[1].map(P=>P==="default"?"$_default=m.default":`${P}=m.${P}`).join(",")}}${L.a[1].map(P=>P==="default"?"let $_default;export{$_default as default}":`export let ${P}`).join(";")}
//# sourceURL=${L.r}?cycle`));else if(L.s){u+=`${o.slice(h,k-1)}/*${o.slice(k-1,t)}*/${ne(C)};import*as m$_${p} from'${L.b}';import{u$_ as u$_${p}}from'${L.s}';u$_${p}(m$_${p})`,h=t,L.s=void 0;continue}u+=`${o.slice(h,k-1)}/*${o.slice(k-1,t)}*/${ne(C)}`,h=t}else _===-2?(n0[r.r]={url:r.r,resolve:q0},u+=`${o.slice(h,k)}self._esmsm[${ne(r.r)}]`,h=t):(u+=`${o.slice(h,_+6)}Shim(${o.slice(k,c)}, ${ne(r.r)}${o.slice(c,t)}`,h=t);u+=o.slice(h)}let d=!1;u=u.replace(H0,(h,p,k)=>(d=!p,h.replace(k,()=>new URL(k,r.r)))),d||(u+=`
//# sourceURL=`+r.r),r.b=re=O(u),r.S=void 0}let H0=/\n\/\/# source(Mapping)?URL=([^\n]+)\s*((;|\/\/[^#][^\n]*)\s*)*$/,D0=/^(text|application)\/(x-)?javascript(;|$)/,J0=/^(text|application)\/json(;|$)/,F0=/^(text|application)\/css(;|$)/,B0=/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,Ae=[],i0=0;function z0(){if(++i0>100)return new Promise(r=>Ae.push(r))}function K0(){i0--,Ae.length&&Ae.shift()()}async function a0(r,a){if(x0&&!a.integrity)throw Error(`No integrity for ${r}`);let l=z0();l&&await l;try{var o=await Qe(r,a)}finally{K0()}if(!o.ok)throw Error(`${o.status} ${o.statusText} ${o.url}`);let u=o.headers.get("content-type");if(D0.test(u))return{r:o.url,s:await o.text(),t:"js"};if(J0.test(u))return{r:o.url,s:`export default ${await o.text()}`,t:"json"};if(F0.test(u))return{r:o.url,s:`var s=new CSSStyleSheet();s.replaceSync(${JSON.stringify((await o.text()).replace(B0,(d,h="",p,k)=>`url(${h}${qe(p||k,r)}${h})`))});export default s;`,t:"css"};throw Error(`Unsupported Content-Type "${u}"`)}function o0(r,a,l){let o=K[r];if(o&&!l)return o;if(o={u:r,r:l?r:void 0,f:void 0,S:void 0,L:void 0,a:void 0,d:void 0,b:void 0,s:void 0,n:!1,t:null},K[r]){let u=0;for(;K[o.u+ ++u];);o.u+=u}return K[o.u]=o,o.f=(async()=>{if(!l){let u;if({r:o.r,s:l,t:u}=await(xe[r]||a0(r,a)),u&&!g){if(u==="css"&&!de||u==="json"&&!be)throw Error(`${u}-modules require <script type="esms-options">{ "polyfillEnable": ["${u}-modules"] }<\/script>`);(u==="css"&&!pe||u==="json"&&!he)&&(o.n=!0)}}try{o.a=j0(l,o.u)}catch(u){console.warn(u),o.a=[[],[]]}return o.S=l,o})(),o.L=o.f.then(async()=>{let u=a;o.d=(await Promise.all(o.a[0].map(async({n:d,d:h})=>{if((h>=0&&!we||h===2&&!ke)&&(o.n=!0),!d)return;let{r:p,b:k}=await $e(d,o.r||o.u);if(k&&(!me||ee)&&(o.n=!0),h===-1)return p||Ie(d,o.r||o.u),Be&&Be.test(p)?{b:p}:(u.integrity&&(u=Object.assign({},u,{integrity:void 0})),o0(p,u).f)}))).filter(d=>d)}),o}function c0(){for(let r of document.querySelectorAll(g?"script[type=module-shim]":"script[type=module]"))b0(r);for(let r of document.querySelectorAll(g?"link[rel=modulepreload-shim]":"link[rel=modulepreload]"))h0(r)}function ie(){for(let r of document.querySelectorAll(g?'script[type="importmap-shim"]':'script[type="importmap"]'))d0(r)}function f0(r){let a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}let l0=Promise.resolve(),Ce=1;function u0(){--Ce===0&&!Ke&&document.dispatchEvent(new Event("DOMContentLoaded"))}document.addEventListener("DOMContentLoaded",async()=>{await te,u0(),(g||!G)&&(ie(),c0())});let Se=1;document.readyState==="complete"?Le():document.addEventListener("readystatechange",async()=>{ie(),await te,Le()});function Le(){--Se===0&&!Ke&&document.dispatchEvent(new Event("readystatechange"))}function d0(r){if(!r.ep&&!(!r.src&&!r.innerHTML)){if(r.ep=!0,r.src){if(!g)return;ee=!0}V&&(se=se.then(async()=>{Q=C0(r.src?await(await Qe(r.src)).json():JSON.parse(r.innerHTML),r.src||T,Q)}).catch(a=>setTimeout(()=>{throw a})),g||(V=!1))}}function b0(r){if(r.ep||r.getAttribute("noshim")!==null||!r.src&&!r.innerHTML)return;r.ep=!0;let a=Se>0,l=Ce>0;a&&Se++,l&&Ce++;let o=r.getAttribute("async")===null&&a,u=e0(r.src||T,f0(r),!r.src&&r.innerHTML,!g,o&&l0).catch(d=>{D?console.error(d):setTimeout(()=>{throw d}),S0(d)});o&&(l0=u.then(Le)),l&&u.then(u0)}let xe={};function h0(r){r.ep||(r.ep=!0,!xe[r.href]&&(xe[r.href]=a0(r.href,f0(r))))}function Ie(r,a){throw Error("Unable to resolve specifier '"+r+(a?"' from "+a:"'"))}})();(async()=>{window.esmsInitOptions={shimMode:!0,revokeBlobURLs:!0,resolve:(D,T)=>T+D,polyfillEnable:["css-modules","json-modules"],onerror:D=>console.log(D),noLoadEventRetriggers:!0,skip:/^https?:\/\/(cdn\.skypack\.dev|jspm\.dev)\//};let{run:fe}=await importShim("https://spike.land/dist/starter.mjs");fe()})();})();
