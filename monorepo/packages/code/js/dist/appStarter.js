(()=>{(function(){let O=()=>{},te=document.querySelector("script[type=esms-options]"),C=te?JSON.parse(te.innerHTML):{};Object.assign(C,self.esmsInitOptions||{});let y=!!C.shimMode,se=T(y&&C.onimport),re=T(y&&C.resolve),$t=C.fetch?T(C.fetch):fetch,St=C.meta?T(shimModule&&C.meta):O,De=C.skip?new RegExp(C.skip):null,D=C.nonce,Ct=C.mapOverrides;if(!D){let s=document.querySelector("script[nonce]");s&&(D=s.nonce||s.getAttribute("nonce"))}let xt=T(C.onerror||O),Lt=C.onpolyfill?T(C.onpolyfill):()=>console.log("%c^^ Module TypeError above is polyfilled and can be ignored ^^","font-weight:900;color:#391"),{revokeBlobURLs:Je,noLoadEventRetriggers:Fe,enforceIntegrity:Et}=C;function T(s){return typeof s=="string"?self[s]:s}let Be=Array.isArray(C.polyfillEnable)?C.polyfillEnable:[],be=Be.includes("css-modules"),he=Be.includes("json-modules");function Ot(){y=!0}let At=!navigator.userAgentData&&!!navigator.userAgent.match(/Edge\/\d+\.\d+/),J=document.baseURI;function I(s,i="text/javascript"){return URL.createObjectURL(new Blob([s],{type:i}))}let It=s=>setTimeout(()=>{throw s}),pe=s=>{(window.reportError||window.safari&&console.error||It)(s),xt(s)};function F(s){return s?` imported from ${s}`:""}let jt=/\\/g;function me(s){if(s.indexOf(":")===-1)return!1;try{return new URL(s),!0}catch{return!1}}function ze(s,i){return _(s,i)||(me(s)?s:_("./"+s,i))}function _(s,i){let c=i.indexOf("?",i.indexOf("#")===-1?i.indexOf("#"):i.length);if(c!==-1&&(i=i.slice(0,c)),s.indexOf("\\")!==-1&&(s=s.replace(jt,"/")),s[0]==="/"&&s[1]==="/")return i.slice(0,i.indexOf(":")+1)+s;if(s[0]==="."&&(s[1]==="/"||s[1]==="."&&(s[2]==="/"||s.length===2&&(s+="/"))||s.length===1&&(s+="/"))||s[0]==="/"){let u=i.slice(0,i.indexOf(":")+1),f;if(i[u.length+1]==="/"?u!=="file:"?(f=i.slice(u.length+2),f=f.slice(f.indexOf("/")+1)):f=i.slice(8):f=i.slice(u.length+(i[u.length]==="/")),s[0]==="/")return i.slice(0,i.length-f.length-1)+s;let d=f.slice(0,f.lastIndexOf("/")+1)+s,b=[],p=-1;for(let h=0;h<d.length;h++){if(p!==-1){d[h]==="/"&&(b.push(d.slice(p,h+1)),p=-1);continue}else if(d[h]==="."){if(d[h+1]==="."&&(d[h+2]==="/"||h+2===d.length)){b.pop(),h+=2;continue}else if(d[h+1]==="/"||h+1===d.length){h+=1;continue}}for(;d[h]==="/";)h++;p=h}return p!==-1&&b.push(d.slice(p)),i.slice(0,i.length-f.length)+b.join("")}}function Mt(s,i,c){let u={imports:Object.assign({},c.imports),scopes:Object.assign({},c.scopes)};if(s.imports&&Ge(s.imports,u.imports,i,c),s.scopes)for(let f in s.scopes){let d=ze(f,i);Ge(s.scopes[f],u.scopes[d]||(u.scopes[d]={}),i,c)}return u}function ke(s,i){if(i[s])return s;let c=s.length;do{let u=s.slice(0,c+1);if(u in i)return u}while((c=s.lastIndexOf("/",c-1))!==-1)}function Qe(s,i){let c=ke(s,i);if(c){let u=i[c];return u===null?void 0:u+s.slice(c.length)}}function we(s,i,c){let u=c&&ke(c,s.scopes);for(;u;){let f=Qe(i,s.scopes[u]);if(f)return f;u=ke(u.slice(0,u.lastIndexOf("/")),s.scopes)}return Qe(i,s.imports)||i.indexOf(":")!==-1&&i}function Ge(s,i,c,u){for(let f in s){let d=_(f,c)||f;if((!y||!Ct)&&i[d]&&i[d]!==s[d])throw Error(`Rejected map override "${d}" from ${i[d]} to ${s[d]}.`);let b=s[f];if(typeof b!="string")continue;let p=we(u,_(b,c)||b,c);if(p){i[d]=p;continue}console.warn(`Mapping "${f}" -> "${s[f]}" does not resolve`)}}let B;window.addEventListener("error",s=>B=s);function Ke(s,{errUrl:i=s}={}){B=void 0;let c=I(`import*as m from'${s}';self._esmsi=m`),u=Object.assign(document.createElement("script"),{type:"module",src:c});u.setAttribute("nonce",D),u.setAttribute("noshim","");let f=new Promise((d,b)=>{u.addEventListener("error",p),u.addEventListener("load",p);function p(h){document.head.removeChild(u),self._esmsi?(d(self._esmsi,J),self._esmsi=void 0):(b(!(h instanceof Event)&&h||B&&B.error||new Error(`Error loading or executing the graph of ${i} (check the console for ${c}).`)),B=void 0)}});return document.head.appendChild(u),f}let R=Ke,Rt=Ke(I("export default u=>import(u)")).then(s=>(s&&(R=s.default),!!s),O),ye=!1,ge=!1,ve=!1,$e=!1,Se=!1,Pt=Promise.resolve(Rt).then(s=>{if(!!s)return Se=!0,Promise.all([R(I("import.meta")).then(()=>ve=!0,O),be&&R(I('import"data:text/css,{}"assert{type:"css"}')).then(()=>ge=!0,O),he&&R(I('import"data:text/json,{}"assert{type:"json"}')).then(()=>ye=!0,O),new Promise(i=>{self._$s=u=>{document.head.removeChild(c),u&&($e=!0),delete self._$s,i()};let c=document.createElement("iframe");c.style.display="none",c.srcdoc=`<script type=importmap nonce="${D}">{"imports":{"x":"data:text/javascript,"}}<\/script><script nonce="${D}">import('x').then(()=>1,()=>0).then(v=>parent._$s(v))<\/script>`,document.head.appendChild(c)})])}),v,ne,Ce,z=2<<19,Ve=new Uint8Array(new Uint16Array([1]).buffer)[0]===1?function(s,i){let c=s.length,u=0;for(;u<c;)i[u]=s.charCodeAt(u++)}:function(s,i){let c=s.length,u=0;for(;u<c;){let f=s.charCodeAt(u);i[u++]=(255&f)<<8|f>>>8}},_t="xportmportlassetafromssertvoyiedeleinstantyreturdebuggeawaithrwhileforifcatcfinallels",$,We,w;function Tt(s,i="@"){$=s,We=i;let c=2*$.length+(2<<18);if(c>z||!v){for(;c>z;)z*=2;ne=new ArrayBuffer(z),Ve(_t,new Uint16Array(ne,16,85)),v=function(b,p,h){var m=new b.Int8Array(h),l=new b.Int16Array(h),t=new b.Int32Array(h),j=new b.Uint8Array(h),W=new b.Uint16Array(h),S=992;function N(e){e=e|0;var r=0,n=0,o=0,a=0,g=0,de=0,q=0;q=S,S=S+11520|0,g=q+2048|0,m[763]=1,l[377]=0,l[378]=0,l[379]=0,l[380]=-1,t[57]=t[2],m[764]=0,t[56]=0,m[762]=0,t[58]=q+10496,t[59]=q+2304,t[60]=q,m[765]=0,e=(t[3]|0)+-2|0,t[61]=e,r=e+(t[54]<<1)|0,t[62]=r;e:for(;;){if(n=e+2|0,t[61]=n,e>>>0>=r>>>0){a=18;break}t:do switch(l[n>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{if((l[379]|0)==0&&U(n)|0&&(A(e+4|0,16,10)|0)==0&&(X(),(m[763]|0)==0)){a=9;break e}else a=17;break}case 105:{U(n)|0&&(A(e+4|0,26,10)|0)==0&&M(),a=17;break}case 59:{a=17;break}case 47:switch(l[e+4>>1]|0){case 47:{He();break t}case 42:{Te(1);break t}default:{a=16;break e}}default:{a=16;break e}}while(0);(a|0)==17&&(a=0,t[57]=t[61]),e=t[61]|0,r=t[62]|0}(a|0)==9?(e=t[61]|0,t[57]=e,a=19):(a|0)==16?(m[763]=0,t[61]=e,a=19):(a|0)==18&&(m[762]|0?e=0:(e=n,a=19));do if((a|0)==19){e:for(;;){if(r=e+2|0,t[61]=r,o=r,e>>>0>=(t[62]|0)>>>0){a=75;break}t:do switch(l[r>>1]|0){case 9:case 10:case 11:case 12:case 13:case 32:break;case 101:{(l[379]|0)==0&&U(r)|0&&(A(e+4|0,16,10)|0)==0&&X(),a=74;break}case 105:{U(r)|0&&(A(e+4|0,26,10)|0)==0&&M(),a=74;break}case 99:{U(r)|0&&(A(e+4|0,36,8)|0)==0&&qe(l[e+12>>1]|0)|0&&(m[765]=1),a=74;break}case 40:{n=t[57]|0,o=t[59]|0,a=l[379]|0,l[379]=a+1<<16>>16,t[o+((a&65535)<<2)>>2]=n,a=74;break}case 41:{if(r=l[379]|0,!(r<<16>>16)){a=36;break e}r=r+-1<<16>>16,l[379]=r,n=l[378]|0,n<<16>>16!=0&&(de=t[(t[60]|0)+((n&65535)+-1<<2)>>2]|0,(t[de+20>>2]|0)==(t[(t[59]|0)+((r&65535)<<2)>>2]|0))&&(r=de+4|0,t[r>>2]|0||(t[r>>2]=o),t[de+12>>2]=e+4,l[378]=n+-1<<16>>16),a=74;break}case 123:{a=t[57]|0,o=t[51]|0,e=a;do if((l[a>>1]|0)==41&(o|0)!=0&&(t[o+4>>2]|0)==(a|0))if(r=t[52]|0,t[51]=r,r){t[r+28>>2]=0;break}else{t[47]=0;break}while(0);n=l[379]|0,a=n&65535,m[g+a>>0]=m[765]|0,m[765]=0,o=t[59]|0,l[379]=n+1<<16>>16,t[o+(a<<2)>>2]=e,a=74;break}case 125:{if(e=l[379]|0,!(e<<16>>16)){a=49;break e}if(n=e+-1<<16>>16,l[379]=n,r=l[380]|0,e<<16>>16!=r<<16>>16)if(r<<16>>16!=-1&(n&65535)<(r&65535)){a=53;break e}else{a=74;break t}else{o=t[58]|0,a=(l[377]|0)+-1<<16>>16,l[377]=a,l[380]=l[o+((a&65535)<<1)>>1]|0,kt(),a=74;break t}}case 39:{L(39),a=74;break}case 34:{L(34),a=74;break}case 47:switch(l[e+4>>1]|0){case 47:{He();break t}case 42:{Te(1);break t}default:{r=t[57]|0,n=l[r>>1]|0;s:do if(Xt(n)|0)switch(n<<16>>16){case 46:if(((l[r+-2>>1]|0)+-48&65535)<10){a=68;break s}else{a=71;break s}case 43:if((l[r+-2>>1]|0)==43){a=68;break s}else{a=71;break s}case 45:if((l[r+-2>>1]|0)==45){a=68;break s}else{a=71;break s}default:{a=71;break s}}else{switch(n<<16>>16){case 41:if(Ut(t[(t[59]|0)+(W[379]<<2)>>2]|0)|0){a=71;break s}else{a=68;break s}case 125:break;default:{a=68;break s}}e=W[379]|0,!(Wt(t[(t[59]|0)+(e<<2)>>2]|0)|0)&&(m[g+e>>0]|0)==0?a=68:a=71}while(0);s:do if((a|0)==68)if(a=0,Gt(r)|0)a=71;else{switch(n<<16>>16){case 0:{a=71;break s}case 47:break;default:{e=1;break s}}m[764]|0?a=71:e=1}while(0);(a|0)==71&&(Vt(),e=0),m[764]=e,a=74;break t}}case 96:{kt(),a=74;break}default:a=74}while(0);(a|0)==74&&(a=0,t[57]=t[61]),e=t[61]|0}if((a|0)==36){E(),e=0;break}else if((a|0)==49){E(),e=0;break}else if((a|0)==53){E(),e=0;break}else if((a|0)==75){e=(l[380]|0)==-1&(l[379]|0)==0&(m[762]|0)==0&(l[378]|0)==0;break}}while(0);return S=q,e|0}function X(){var e=0,r=0,n=0,o=0,a=0,g=0;a=t[61]|0,g=a+12|0,t[61]=g,r=k(1)|0,e=t[61]|0,(e|0)==(g|0)&&!(Ne(r)|0)||(o=3);e:do if((o|0)==3){t:do switch(r<<16>>16){case 100:{Z(e,e+14|0);break e}case 97:{t[61]=e+10,k(1)|0,e=t[61]|0,o=6;break}case 102:{o=6;break}case 99:{if((A(e+2|0,36,8)|0)==0&&(n=e+10|0,ue(l[n>>1]|0)|0)){t[61]=n,a=k(1)|0,g=t[61]|0,H(a)|0,Z(g,t[61]|0),t[61]=(t[61]|0)+-2;break e}e=e+4|0,t[61]=e,o=13;break}case 108:case 118:{o=13;break}case 123:{for(t[61]=e+2,e=k(1)|0,n=t[61]|0;;){if(ee(e)|0?(L(e),e=(t[61]|0)+2|0,t[61]=e):(H(e)|0,e=t[61]|0),k(1)|0,e=wt(n,e)|0,e<<16>>16==44&&(t[61]=(t[61]|0)+2,e=k(1)|0),r=n,n=t[61]|0,e<<16>>16==125){o=32;break}if((n|0)==(r|0)){o=29;break}if(n>>>0>(t[62]|0)>>>0){o=31;break}}if((o|0)==29){E();break e}else if((o|0)==31){E();break e}else if((o|0)==32){t[61]=n+2,o=34;break t}break}case 42:{t[61]=e+2,k(1)|0,o=t[61]|0,wt(o,o)|0,o=34;break}default:}while(0);if((o|0)==6){t[61]=e+16,e=k(1)|0,e<<16>>16==42&&(t[61]=(t[61]|0)+2,e=k(1)|0),g=t[61]|0,H(e)|0,Z(g,t[61]|0),t[61]=(t[61]|0)+-2;break}else if((o|0)==13){e=e+4|0,t[61]=e,m[763]=0;t:for(;;){switch(t[61]=e+2,g=k(1)|0,e=t[61]|0,(H(g)|0)<<16>>16){case 91:case 123:{o=15;break t}default:}if(r=t[61]|0,(r|0)==(e|0))break e;switch(Z(e,r),(k(1)|0)<<16>>16){case 61:{o=19;break t}case 44:break;default:{o=20;break t}}e=t[61]|0}if((o|0)==15){t[61]=(t[61]|0)+-2;break}else if((o|0)==19){t[61]=(t[61]|0)+-2;break}else if((o|0)==20){t[61]=(t[61]|0)+-2;break}}else(o|0)==34&&(r=k(1)|0);if(e=t[61]|0,r<<16>>16==102&&(A(e+2|0,52,6)|0)==0){t[61]=e+8,Pe(a,k(1)|0);break}t[61]=e+-2}while(0)}function M(){var e=0,r=0,n=0,o=0,a=0;a=t[61]|0,r=a+12|0,t[61]=r;e:do switch((k(1)|0)<<16>>16){case 40:{if(e=t[61]|0,r=t[59]|0,n=l[379]|0,l[379]=n+1<<16>>16,t[r+((n&65535)<<2)>>2]=e,(l[t[57]>>1]|0)!=46){switch(e=t[61]|0,t[61]=e+2,n=k(1)|0,_e(a,t[61]|0,0,e),e=t[51]|0,r=t[60]|0,a=l[378]|0,l[378]=a+1<<16>>16,t[r+((a&65535)<<2)>>2]=e,n<<16>>16){case 39:{L(39);break}case 34:{L(34);break}default:{t[61]=(t[61]|0)+-2;break e}}switch(e=(t[61]|0)+2|0,t[61]=e,(k(1)|0)<<16>>16){case 44:{t[61]=(t[61]|0)+2,k(1)|0,n=t[51]|0,t[n+4>>2]=e,a=t[61]|0,t[n+16>>2]=a,m[n+24>>0]=1,t[61]=a+-2;break e}case 41:{l[379]=(l[379]|0)+-1<<16>>16,a=t[51]|0,t[a+4>>2]=e,t[a+12>>2]=(t[61]|0)+2,m[a+24>>0]=1,l[378]=(l[378]|0)+-1<<16>>16;break e}default:{t[61]=(t[61]|0)+-2;break e}}}break}case 46:{t[61]=(t[61]|0)+2,(k(1)|0)<<16>>16==109&&(e=t[61]|0,(A(e+2|0,44,6)|0)==0)&&(l[t[57]>>1]|0)!=46&&_e(a,a,e+8|0,2);break}case 42:case 39:case 34:{o=16;break}case 123:{if(e=t[61]|0,l[379]|0){t[61]=e+-2;break e}for(;!(e>>>0>=(t[62]|0)>>>0);){if(e=k(1)|0,ee(e)|0)L(e);else if(e<<16>>16==125){o=31;break}e=(t[61]|0)+2|0,t[61]=e}if((o|0)==31&&(t[61]=(t[61]|0)+2),k(1)|0,e=t[61]|0,A(e,50,8)|0){E();break e}if(t[61]=e+8,e=k(1)|0,ee(e)|0){Pe(a,e);break e}else{E();break e}}default:(t[61]|0)!=(r|0)&&(o=16)}while(0);do if((o|0)==16){if(l[379]|0){t[61]=(t[61]|0)+-2;break}for(e=t[62]|0,r=t[61]|0;;){if(r>>>0>=e>>>0){o=23;break}if(n=l[r>>1]|0,ee(n)|0){o=21;break}o=r+2|0,t[61]=o,r=o}if((o|0)==21){Pe(a,n);break}else if((o|0)==23){E();break}}while(0)}function Pe(e,r){e=e|0,r=r|0;var n=0,o=0;switch(n=(t[61]|0)+2|0,r<<16>>16){case 39:{L(39),o=5;break}case 34:{L(34),o=5;break}default:E()}do if((o|0)==5){if(_e(e,n,t[61]|0,1),t[61]=(t[61]|0)+2,o=(k(0)|0)<<16>>16==97,r=t[61]|0,o&&(A(r+2|0,58,10)|0)==0){if(t[61]=r+12,(k(1)|0)<<16>>16!=123){t[61]=r;break}e=t[61]|0,n=e;e:for(;;){switch(t[61]=n+2,n=k(1)|0,n<<16>>16){case 39:{L(39),t[61]=(t[61]|0)+2,n=k(1)|0;break}case 34:{L(34),t[61]=(t[61]|0)+2,n=k(1)|0;break}default:n=H(n)|0}if(n<<16>>16!=58){o=16;break}switch(t[61]=(t[61]|0)+2,(k(1)|0)<<16>>16){case 39:{L(39);break}case 34:{L(34);break}default:{o=20;break e}}switch(t[61]=(t[61]|0)+2,(k(1)|0)<<16>>16){case 125:{o=25;break e}case 44:break;default:{o=24;break e}}if(t[61]=(t[61]|0)+2,(k(1)|0)<<16>>16==125){o=25;break}n=t[61]|0}if((o|0)==16){t[61]=r;break}else if((o|0)==20){t[61]=r;break}else if((o|0)==24){t[61]=r;break}else if((o|0)==25){o=t[51]|0,t[o+16>>2]=e,t[o+12>>2]=(t[61]|0)+2;break}}t[61]=r+-2}while(0)}function Gt(e){e=e|0;e:do switch(l[e>>1]|0){case 100:switch(l[e+-2>>1]|0){case 105:{e=x(e+-4|0,68,2)|0;break e}case 108:{e=x(e+-4|0,72,3)|0;break e}default:{e=0;break e}}case 101:{switch(l[e+-2>>1]|0){case 115:break;case 116:{e=x(e+-4|0,78,4)|0;break e}default:{e=0;break e}}switch(l[e+-4>>1]|0){case 108:{e=Y(e+-6|0,101)|0;break e}case 97:{e=Y(e+-6|0,99)|0;break e}default:{e=0;break e}}}case 102:{if((l[e+-2>>1]|0)==111&&(l[e+-4>>1]|0)==101)switch(l[e+-6>>1]|0){case 99:{e=x(e+-8|0,86,6)|0;break e}case 112:{e=x(e+-8|0,98,2)|0;break e}default:{e=0;break e}}else e=0;break}case 110:{e=e+-2|0,Y(e,105)|0?e=1:e=x(e,102,5)|0;break}case 111:{e=Y(e+-2|0,100)|0;break}case 114:{e=x(e+-2|0,112,7)|0;break}case 116:{e=x(e+-2|0,126,4)|0;break}case 119:switch(l[e+-2>>1]|0){case 101:{e=Y(e+-4|0,110)|0;break e}case 111:{e=x(e+-4|0,134,3)|0;break e}default:{e=0;break e}}default:e=0}while(0);return e|0}function kt(){var e=0,r=0,n=0;r=t[62]|0,n=t[61]|0;e:for(;;){if(e=n+2|0,n>>>0>=r>>>0){r=8;break}switch(l[e>>1]|0){case 96:{r=9;break e}case 36:{if((l[n+4>>1]|0)==123){r=6;break e}break}case 92:{e=n+4|0;break}default:}n=e}(r|0)==6?(t[61]=n+4,e=l[380]|0,r=t[58]|0,n=l[377]|0,l[377]=n+1<<16>>16,l[r+((n&65535)<<1)>>1]=e,n=(l[379]|0)+1<<16>>16,l[379]=n,l[380]=n):(r|0)==8?(t[61]=e,E()):(r|0)==9&&(t[61]=e)}function k(e){e=e|0;var r=0,n=0,o=0;n=t[61]|0;e:do{r=l[n>>1]|0;t:do if(r<<16>>16!=47)if(e){if(qe(r)|0)break;break e}else{if(e0(r)|0)break;break e}else switch(l[n+2>>1]|0){case 47:{He();break t}case 42:{Te(e);break t}default:{r=47;break e}}while(0);o=t[61]|0,n=o+2|0,t[61]=n}while(o>>>0<(t[62]|0)>>>0);return r|0}function L(e){e=e|0;var r=0,n=0,o=0,a=0;for(a=t[62]|0,r=t[61]|0;;){if(o=r+2|0,r>>>0>=a>>>0){r=9;break}if(n=l[o>>1]|0,n<<16>>16==e<<16>>16){r=10;break}if(n<<16>>16==92)n=r+4|0,(l[n>>1]|0)==13?(r=r+6|0,r=(l[r>>1]|0)==10?r:n):r=n;else if(yt(n)|0){r=9;break}else r=o}(r|0)==9?(t[61]=o,E()):(r|0)==10&&(t[61]=o)}function _e(e,r,n,o){e=e|0,r=r|0,n=n|0,o=o|0;var a=0,g=0;a=t[55]|0,t[55]=a+32,g=t[51]|0,t[((g|0)==0?188:g+28|0)>>2]=a,t[52]=g,t[51]=a,t[a+8>>2]=e,(o|0)==2?e=n:e=(o|0)==1?n+2|0:0,t[a+12>>2]=e,t[a>>2]=r,t[a+4>>2]=n,t[a+16>>2]=0,t[a+20>>2]=o,m[a+24>>0]=(o|0)==1&1,t[a+28>>2]=0}function Kt(){var e=0,r=0,n=0;n=t[62]|0,r=t[61]|0;e:for(;;){if(e=r+2|0,r>>>0>=n>>>0){r=6;break}switch(l[e>>1]|0){case 13:case 10:{r=6;break e}case 93:{r=7;break e}case 92:{e=r+4|0;break}default:}r=e}return(r|0)==6?(t[61]=e,E(),e=0):(r|0)==7&&(t[61]=e,e=93),e|0}function wt(e,r){e=e|0,r=r|0;var n=0,o=0;return n=t[61]|0,o=l[n>>1]|0,o<<16>>16==97&&(t[61]=n+4,n=k(1)|0,e=t[61]|0,ee(n)|0?(L(n),r=(t[61]|0)+2|0,t[61]=r):(H(n)|0,r=t[61]|0),o=k(1)|0,n=t[61]|0),(n|0)!=(e|0)&&Z(e,r),o|0}function Vt(){var e=0,r=0,n=0;e:for(;;){if(e=t[61]|0,r=e+2|0,t[61]=r,e>>>0>=(t[62]|0)>>>0){n=7;break}switch(l[r>>1]|0){case 13:case 10:{n=7;break e}case 47:break e;case 91:{Kt()|0;break}case 92:{t[61]=e+4;break}default:}}(n|0)==7&&E()}function Wt(e){switch(e=e|0,l[e>>1]|0){case 62:{e=(l[e+-2>>1]|0)==61;break}case 41:case 59:{e=1;break}case 104:{e=x(e+-2|0,160,4)|0;break}case 121:{e=x(e+-2|0,168,6)|0;break}case 101:{e=x(e+-2|0,180,3)|0;break}default:e=0}return e|0}function Te(e){e=e|0;var r=0,n=0,o=0,a=0,g=0;for(a=(t[61]|0)+2|0,t[61]=a,n=t[62]|0;r=a+2|0,!(a>>>0>=n>>>0||(o=l[r>>1]|0,!e&&yt(o)|0));){if(o<<16>>16==42&&(l[a+4>>1]|0)==47){g=8;break}a=r}(g|0)==8&&(t[61]=r,r=a+4|0),t[61]=r}function A(e,r,n){e=e|0,r=r|0,n=n|0;var o=0,a=0;e:do if(!n)e=0;else{for(;o=m[e>>0]|0,a=m[r>>0]|0,o<<24>>24==a<<24>>24;)if(n=n+-1|0,n)e=e+1|0,r=r+1|0;else{e=0;break e}e=(o&255)-(a&255)|0}while(0);return e|0}function Ne(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:{e=1;break}default:if((e&-8)<<16>>16==40|(e+-58&65535)<6)e=1;else{switch(e<<16>>16){case 91:case 93:case 94:{e=1;break e}default:}e=(e+-123&65535)<4}}while(0);return e|0}function Xt(e){e=e|0;e:do switch(e<<16>>16){case 38:case 37:case 33:break;default:if(!((e+-58&65535)<6|(e+-40&65535)<7&e<<16>>16!=41)){switch(e<<16>>16){case 91:case 94:break e;default:}return e<<16>>16!=125&(e+-123&65535)<4|0}}while(0);return 1}function Yt(e){e=e|0;var r=0,n=0,o=0,a=0;return n=S,S=S+16|0,o=n,t[o>>2]=0,t[54]=e,r=t[3]|0,a=r+(e<<1)|0,e=a+2|0,l[a>>1]=0,t[o>>2]=e,t[55]=e,t[47]=0,t[51]=0,t[49]=0,t[48]=0,t[53]=0,t[50]=0,S=n,r|0}function x(e,r,n){e=e|0,r=r|0,n=n|0;var o=0,a=0;return o=e+(0-n<<1)|0,a=o+2|0,e=t[3]|0,a>>>0>=e>>>0&&(A(a,r,n<<1)|0)==0?(a|0)==(e|0)?e=1:e=ue(l[o>>1]|0)|0:e=0,e|0}function Y(e,r){e=e|0,r=r|0;var n=0;return n=t[3]|0,n>>>0<=e>>>0&&(l[e>>1]|0)==r<<16>>16?(n|0)==(e|0)?n=1:n=ue(l[e+-2>>1]|0)|0:n=0,n|0}function ue(e){e=e|0;e:do if((e+-9&65535)<5)e=1;else{switch(e<<16>>16){case 32:case 160:{e=1;break e}default:}e=e<<16>>16!=46&(Ne(e)|0)}while(0);return e|0}function He(){var e=0,r=0,n=0;e=t[62]|0,n=t[61]|0;e:for(;r=n+2|0,!(n>>>0>=e>>>0);)switch(l[r>>1]|0){case 13:case 10:break e;default:n=r}t[61]=r}function Z(e,r){e=e|0,r=r|0;var n=0,o=0;n=t[55]|0,t[55]=n+12,o=t[53]|0,t[((o|0)==0?192:o+8|0)>>2]=n,t[53]=n,t[n>>2]=e,t[n+4>>2]=r,t[n+8>>2]=0}function H(e){for(e=e|0;!(qe(e)|0||Ne(e)|0);)if(e=(t[61]|0)+2|0,t[61]=e,e=l[e>>1]|0,!(e<<16>>16)){e=0;break}return e|0}function Zt(){var e=0;switch(e=t[(t[49]|0)+20>>2]|0,e|0){case 1:{e=-1;break}case 2:{e=-2;break}default:e=e-(t[3]|0)>>1}return e|0}function Ut(e){return e=e|0,!(x(e,140,5)|0)&&!(x(e,150,3)|0)?e=x(e,156,2)|0:e=1,e|0}function e0(e){switch(e=e|0,e<<16>>16){case 160:case 32:case 12:case 11:case 9:{e=1;break}default:e=0}return e|0}function U(e){return e=e|0,(t[3]|0)==(e|0)?e=1:e=ue(l[e+-2>>1]|0)|0,e|0}function t0(){var e=0;return e=t[(t[49]|0)+12>>2]|0,e?e=e-(t[3]|0)>>1:e=-1,e|0}function s0(){var e=0;return e=t[(t[49]|0)+16>>2]|0,e?e=e-(t[3]|0)>>1:e=-1,e|0}function r0(){var e=0;return e=t[(t[49]|0)+4>>2]|0,e?e=e-(t[3]|0)>>1:e=-1,e|0}function n0(){var e=0;return e=t[49]|0,e=t[((e|0)==0?188:e+28|0)>>2]|0,t[49]=e,(e|0)!=0|0}function i0(){var e=0;return e=t[50]|0,e=t[((e|0)==0?192:e+8|0)>>2]|0,t[50]=e,(e|0)!=0|0}function E(){m[762]=1,t[56]=(t[61]|0)-(t[3]|0)>>1,t[61]=(t[62]|0)+2}function qe(e){return e=e|0,(e|128)<<16>>16==160|(e+-9&65535)<5|0}function ee(e){return e=e|0,e<<16>>16==39|e<<16>>16==34|0}function a0(){return(t[(t[49]|0)+8>>2]|0)-(t[3]|0)>>1|0}function o0(){return(t[(t[50]|0)+4>>2]|0)-(t[3]|0)>>1|0}function yt(e){return e=e|0,e<<16>>16==13|e<<16>>16==10|0}function c0(){return(t[t[49]>>2]|0)-(t[3]|0)>>1|0}function f0(){return(t[t[50]>>2]|0)-(t[3]|0)>>1|0}function l0(){return j[(t[49]|0)+24>>0]|0|0}function u0(e){e=e|0,t[3]=e}function d0(){return(m[763]|0)!=0|0}function b0(){return t[56]|0}function h0(e){return e=e|0,S=e+992+15&-16,992}return{su:h0,ai:s0,e:b0,ee:o0,es:f0,f:d0,id:Zt,ie:r0,ip:l0,is:c0,p:N,re:i0,ri:n0,sa:Yt,se:t0,ses:u0,ss:a0}}(typeof self<"u"?self:global,{},ne),Ce=v.su(z-(2<<17))}let u=$.length+1;v.ses(Ce),v.sa(u-1),Ve($,new Uint16Array(ne,Ce,u)),v.p()||(w=v.e(),P());let f=[],d=[];for(;v.ri();){let b=v.is(),p=v.ie(),h=v.ai(),m=v.id(),l=v.ss(),t=v.se(),j;v.ip()&&(j=Xe(m===-1?b:b+1,$.charCodeAt(m===-1?b-1:b))),f.push({n:j,s:b,e:p,ss:l,se:t,d:m,a:h})}for(;v.re();){let b=v.es(),p=$.charCodeAt(b);d.push(p===34||p===39?Xe(b+1,p):$.slice(v.es(),v.ee()))}return[f,d,!!v.f()]}function Xe(s,i){w=s;let c="",u=w;for(;;){w>=$.length&&P();let f=$.charCodeAt(w);if(f===i)break;f===92?(c+=$.slice(u,w),c+=Nt(),u=w):(f===8232||f===8233||Ye(f)&&P(),++w)}return c+=$.slice(u,w++),c}function Nt(){let s=$.charCodeAt(++w);switch(++w,s){case 110:return`
`;case 114:return"\r";case 120:return String.fromCharCode(xe(2));case 117:return function(){let i;return $.charCodeAt(w)===123?(++w,i=xe($.indexOf("}",w)-w),++w,i>1114111&&P()):i=xe(4),i<=65535?String.fromCharCode(i):(i-=65536,String.fromCharCode(55296+(i>>10),56320+(1023&i)))}();case 116:return"	";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:$.charCodeAt(w)===10&&++w;case 10:return"";case 56:case 57:P();default:if(s>=48&&s<=55){let i=$.substr(w-1,3).match(/^[0-7]+/)[0],c=parseInt(i,8);return c>255&&(i=i.slice(0,-1),c=parseInt(i,8)),w+=i.length-1,s=$.charCodeAt(w),i==="0"&&s!==56&&s!==57||P(),String.fromCharCode(c)}return Ye(s)?"":String.fromCharCode(s)}}function xe(s){let i=w,c=0,u=0;for(let f=0;f<s;++f,++w){let d,b=$.charCodeAt(w);if(b!==95){if(b>=97)d=b-97+10;else if(b>=65)d=b-65+10;else{if(!(b>=48&&b<=57))break;d=b-48}if(d>=16)break;u=b,c=16*c+d}else u!==95&&f!==0||P(),u=b}return u!==95&&w-i===s||P(),c}function Ye(s){return s===13||s===10}function P(){throw Object.assign(Error(`Parse error ${We}:${$.slice(0,w).split(`
`).length}:${w-$.lastIndexOf(`
`,w-1)}`),{idx:w})}async function Ze(s,i){let c=_(s,i);return{r:we(G,c||s,i)||et(s,i),b:!c&&!me(s)}}let Ue=re?async(s,i)=>{let c=re(s,i,Le);return c&&c.then&&(c=await c),c?{r:c,b:!_(s,i)&&!me(s)}:Ze(s,i)}:Ze;async function ie(s,...i){let c=i[i.length-1];return typeof c!="string"&&(c=J),await oe,se&&await se(s,typeof i[1]!="string"?i[1]:{},c),(V||y||!K)&&(le(),y||(V=!1)),await ce,nt((await Ue(s,c)).r,{credentials:"same-origin"})}self.importShim=ie;function Le(s,i){return we(G,_(s,i)||s,i)||et(s,i)}function et(s,i){throw Error(`Unable to resolve specifier '${s}'${F(i)}`)}let tt=(s,i=J)=>{i=`${i}`;let c=re&&re(s,i,Le);return c&&!c.then?c:Le(s,i)};function Ht(s,i=this.url){return tt(s,i)}ie.resolve=tt,ie.getImportMap=()=>JSON.parse(JSON.stringify(G));let Q=ie._r={};async function st(s,i){s.b||i[s.u]||(i[s.u]=1,await s.L,await Promise.all(s.d.map(c=>st(c,i))),s.n||(s.n=s.d.some(c=>c.n)))}let G={imports:{},scopes:{}},ae=!1,K,oe=Pt.then(()=>{if(!y)if(document.querySelectorAll("script[type=module-shim],script[type=importmap-shim],link[rel=modulepreload-shim]").length)Ot();else{let s=!1;for(let i of document.querySelectorAll("script[type=module],script[type=importmap]"))if(!s)i.type==="module"&&(s=!0);else if(i.type==="importmap"){ae=!0;break}}if(K=C.polyfillEnable!==!0&&Se&&ve&&$e&&(!he||ye)&&(!be||ge)&&!ae&&!0,y||!K){new MutationObserver(s=>{for(let i of s)if(i.type==="childList")for(let c of i.addedNodes)c.tagName==="SCRIPT"?(c.type===(y?"module-shim":"module")&&pt(c),c.type===(y?"importmap-shim":"importmap")&&ht(c)):c.tagName==="LINK"&&c.rel===(y?"modulepreload-shim":"modulepreload")&&mt(c)}).observe(document,{childList:!0,subtree:!0}),le(),ut();return}}),ce=oe,rt=!0,V=!0;async function nt(s,i,c,u,f){if(y||(V=!1),await ce,se&&await se(id,typeof args[1]!="string"?args[1]:{},parentUrl),!y&&K)return u?null:(await f,R(c?I(c):s,{errUrl:s||c}));let d=lt(s,i,null,c),b={};if(await st(d,b),fe=void 0,at(d,b),await f,c&&!y&&!d.n){let h=await R(I(c),{errUrl:c});return Je&&it(Object.keys(b)),h}rt&&!y&&d.n&&u&&(Lt(),rt=!1);let p=await R(!y&&!d.n&&u?d.u:d.b,{errUrl:d.u});return d.s&&(await R(d.s)).u$_(p),Je&&it(Object.keys(b)),p}function it(s){let i=0,c=s.length,u=self.requestIdleCallback?self.requestIdleCallback:self.requestAnimationFrame;u(f);function f(){let d=i*100;if(!(d>c)){for(let b of s.slice(d,d+100)){let p=Q[b];p&&URL.revokeObjectURL(p.b)}i++,u(f)}}}function Ee(s){return`'${s.replace(/'/g,"\\'")}'`}let fe;function at(s,i){if(s.b||!i[s.u])return;i[s.u]=0;for(let b of s.d)at(b,i);let[c]=s.a,u=s.S,f=At&&fe?`import '${fe}';`:"";if(!c.length)f+=u;else{let m=function(l){for(;h[h.length-1]<l;){let t=h.pop();f+=`${u.slice(b,t)}, ${Ee(s.r)}`,b=t}f+=u.slice(b,l),b=l},b=0,p=0,h=[];for(let{s:l,ss:t,se:j,d:W}of c)if(W===-1){let S=s.d[p++],N=S.b,X=!N;X&&((N=S.s)||(N=S.s=I(`export function u$_(m){${S.a[1].map(M=>M==="default"?"d$_=m.default":`${M}=m.${M}`).join(",")}}${S.a[1].map(M=>M==="default"?"let d$_;export{d$_ as default}":`export let ${M}`).join(";")}
//# sourceURL=${S.r}?cycle`))),m(l-1),f+=`/*${u.slice(l-1,j)}*/${Ee(N)}`,!X&&S.s&&(f+=`;import*as m$_${p} from'${S.b}';import{u$_ as u$_${p}}from'${S.s}';u$_${p}(m$_${p})`,S.s=void 0),b=j}else W===-2?(s.m={url:s.r,resolve:Ht},St(s.m,s.u),m(l),f+=`importShim._r[${Ee(s.u)}].m`,b=j):(m(t+6),f+="Shim(",h.push(j-1),b=l);m(u.length)}let d=!1;f=f.replace(qt,(b,p,h)=>(d=!p,b.replace(h,()=>new URL(h,s.r)))),d||(f+=`
//# sourceURL=`+s.r),s.b=fe=I(f),s.S=void 0}let qt=/\n\/\/# source(Mapping)?URL=([^\n]+)\s*((;|\/\/[^#][^\n]*)\s*)*$/,Dt=/^(text|application)\/(x-)?javascript(;|$)/,Jt=/^(text|application)\/json(;|$)/,Ft=/^(text|application)\/css(;|$)/,Bt=/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,Oe=[],ot=0;function zt(){if(++ot>100)return new Promise(s=>Oe.push(s))}function Qt(){ot--,Oe.length&&Oe.shift()()}async function ct(s,i,c){if(Et&&!i.integrity)throw Error(`No integrity for ${s}${F(c)}.`);let u=zt();u&&await u;try{var f=await $t(s,i)}catch(d){throw d.message=`Unable to fetch ${s}${F(c)} - see network log for details.
`+d.message,d}finally{Qt()}if(!f.ok)throw Error(`${f.status} ${f.statusText} ${f.url}${F(c)}`);return f}async function ft(s,i,c){let u=await ct(s,i,c),f=u.headers.get("content-type");if(Dt.test(f))return{r:u.url,s:await u.text(),t:"js"};if(Jt.test(f))return{r:u.url,s:`export default ${await u.text()}`,t:"json"};if(Ft.test(f))return{r:u.url,s:`var s=new CSSStyleSheet();s.replaceSync(${JSON.stringify((await u.text()).replace(Bt,(d,b="",p,h)=>`url(${b}${ze(p||h,s)}${b})`))});export default s;`,t:"css"};throw Error(`Unsupported Content-Type "${f}" loading ${s}${F(c)}. Modules must be served with a valid MIME type like application/javascript.`)}function lt(s,i,c,u){let f=Q[s];if(f&&!u)return f;if(f={u:s,r:u?s:void 0,f:void 0,S:void 0,L:void 0,a:void 0,d:void 0,b:void 0,s:void 0,n:!1,t:null,m:null},Q[s]){let d=0;for(;Q[f.u+ ++d];);f.u+=d}return Q[f.u]=f,f.f=(async()=>{if(!u){let d;if({r:f.r,s:u,t:d}=await(Re[s]||ft(s,i,c)),d&&!y){if(d==="css"&&!be||d==="json"&&!he)throw Error(`${d}-modules require <script type="esms-options">{ "polyfillEnable": ["${d}-modules"] }<\/script>`);(d==="css"&&!ge||d==="json"&&!ye)&&(f.n=!0)}}try{f.a=Tt(u,f.u)}catch(d){pe(d),f.a=[[],[],!1]}return f.S=u,f})(),f.L=f.f.then(async()=>{let d=i;f.d=(await Promise.all(f.a[0].map(async({n:b,d:p})=>{if((p>=0&&!Se||p===2&&!ve)&&(f.n=!0),p!==-1||!b)return;let{r:h,b:m}=await Ue(b,f.r||f.u);return m&&(!$e||ae)&&(f.n=!0),De&&De.test(h)?{b:h}:(d.integrity&&(d=Object.assign({},d,{integrity:void 0})),lt(h,d,f.r).f)}))).filter(b=>b)}),f}function ut(){for(let s of document.querySelectorAll(y?"script[type=module-shim]":"script[type=module]"))pt(s);for(let s of document.querySelectorAll(y?"link[rel=modulepreload-shim]":"link[rel=modulepreload]"))mt(s)}function le(){for(let s of document.querySelectorAll(y?'script[type="importmap-shim"]':'script[type="importmap"]'))ht(s)}function Ae(s){let i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}let dt=Promise.resolve(),Ie=1;function bt(){--Ie===0&&!Fe&&document.dispatchEvent(new Event("DOMContentLoaded"))}document.addEventListener("DOMContentLoaded",async()=>{await oe,bt(),(y||!K)&&(le(),ut())});let je=1;document.readyState==="complete"?Me():document.addEventListener("readystatechange",async()=>{le(),await oe,Me()});function Me(){--je===0&&!Fe&&document.dispatchEvent(new Event("readystatechange"))}function ht(s){if(!s.ep&&!(!s.src&&!s.innerHTML)){if(s.ep=!0,s.src){if(!y)return;ae=!0}V&&(ce=ce.then(async()=>{G=Mt(s.src?await(await ct(s.src,Ae(s))).json():JSON.parse(s.innerHTML),s.src||J,G)}).catch(pe),y||(V=!1))}}function pt(s){if(s.ep||s.getAttribute("noshim")!==null||!s.src&&!s.innerHTML)return;s.ep=!0;let i=je>0,c=Ie>0;i&&je++,c&&Ie++;let u=s.getAttribute("async")===null&&i,f=nt(s.src||J,Ae(s),!s.src&&s.innerHTML,!y,u&&dt).catch(pe);u&&(dt=f.then(Me)),c&&f.then(bt)}let Re={};function mt(s){s.ep||(s.ep=!0,!Re[s.href]&&(Re[s.href]=ft(s.href,Ae(s))))}})();var p0={react:"https://spike.land/dist/react.mjs","react-dom":"https://spike.land/dist/react.mjs","framer-motion":"https://spike.land/dist/framer-motion.mjs","@emotion/react":"https://spike.land/dist/emotion.mjs"},vt={imports:p0};var m0={shimMode:!1,revokeBlobURLs:!0,fetch,resolve:(O,te)=>te+O,polyfillEnable:["css-modules","json-modules"],onerror:O=>console.log(O),noLoadEventRetriggers:!0,skip:/^https?:\/\/(cdn\.skypack\.dev|jspm\.dev)\//};Object.assign(window,{smsInitOptions:m0});document.body.appendChild(Object.assign(document.createElement("script"),{type:"importmap-shim",innerHTML:JSON.stringify(vt)}));importShim("/dist/starter.mjs").then(({run:O})=>O());})();
