import{e as o}from"./chunks/chunk-R25N5FFR.mjs";var y=o((Lu,Jr)=>{var W=function(r){return r&&r.Math==Math&&r};Jr.exports=W(typeof globalThis=="object"&&globalThis)||W(typeof window=="object"&&window)||W(typeof self=="object"&&self)||W(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var w=o((Fu,Zr)=>{Zr.exports=function(r){try{return!!r()}catch(e){return!0}}});var x=o((Mu,Qr)=>{var eo=w();Qr.exports=!eo(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var R=o((Du,re)=>{var to=w();re.exports=!to(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var k=o((_u,ee)=>{var no=R(),U=Function.prototype.call;ee.exports=no?U.bind(U):function(){return U.apply(U,arguments)}});var ie=o(oe=>{"use strict";var te={}.propertyIsEnumerable,ne=Object.getOwnPropertyDescriptor,oo=ne&&!te.call({1:2},1);oe.f=oo?function(e){var t=ne(this,e);return!!t&&t.enumerable}:te});var rr=o((Au,ae)=>{ae.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var b=o((Bu,ce)=>{var ue=R(),se=Function.prototype,io=se.bind,er=se.call,ao=ue&&io.bind(er,er);ce.exports=ue?function(r){return r&&ao(r)}:function(r){return r&&function(){return er.apply(r,arguments)}}});var tr=o((Wu,le)=>{var ve=b(),uo=ve({}.toString),so=ve("".slice);le.exports=function(r){return so(uo(r),8,-1)}});var pe=o((Uu,fe)=>{var co=y(),vo=b(),lo=w(),fo=tr(),nr=co.Object,po=vo("".split);fe.exports=lo(function(){return!nr("z").propertyIsEnumerable(0)})?function(r){return fo(r)=="String"?po(r,""):nr(r)}:nr});var or=o((ku,ye)=>{var yo=y(),go=yo.TypeError;ye.exports=function(r){if(r==null)throw go("Can't call method on "+r);return r}});var G=o((Gu,ge)=>{var ho=pe(),bo=or();ge.exports=function(r){return ho(bo(r))}});var m=o((Ku,de)=>{de.exports=function(r){return typeof r=="function"}});var j=o((Vu,he)=>{var mo=m();he.exports=function(r){return typeof r=="object"?r!==null:mo(r)}});var L=o(($u,be)=>{var ir=y(),qo=m(),wo=function(r){return qo(r)?r:void 0};be.exports=function(r,e){return arguments.length<2?wo(ir[r]):ir[r]&&ir[r][e]}});var qe=o((Yu,me)=>{var So=b();me.exports=So({}.isPrototypeOf)});var ar=o((zu,we)=>{var Eo=L();we.exports=Eo("navigator","userAgent")||""});var Te=o((Hu,Pe)=>{var Ie=y(),ur=ar(),Se=Ie.process,Ee=Ie.Deno,Oe=Se&&Se.versions||Ee&&Ee.version,xe=Oe&&Oe.v8,q,K;xe&&(q=xe.split("."),K=q[0]>0&&q[0]<4?1:+(q[0]+q[1]));!K&&ur&&(q=ur.match(/Edge\/(\d+)/),(!q||q[1]>=74)&&(q=ur.match(/Chrome\/(\d+)/),q&&(K=+q[1])));Pe.exports=K});var sr=o((Xu,Ce)=>{var je=Te(),Oo=w();Ce.exports=!!Object.getOwnPropertySymbols&&!Oo(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&je&&je<41})});var cr=o((Ju,Re)=>{var xo=sr();Re.exports=xo&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var vr=o((Zu,Le)=>{var Io=y(),Po=L(),To=m(),jo=qe(),Co=cr(),Ro=Io.Object;Le.exports=Co?function(r){return typeof r=="symbol"}:function(r){var e=Po("Symbol");return To(e)&&jo(e.prototype,Ro(r))}});var Me=o((Qu,Fe)=>{var Lo=y(),Fo=Lo.String;Fe.exports=function(r){try{return Fo(r)}catch(e){return"Object"}}});var lr=o((rs,De)=>{var Mo=y(),Do=m(),_o=Me(),No=Mo.TypeError;De.exports=function(r){if(Do(r))return r;throw No(_o(r)+" is not a function")}});var Ne=o((es,_e)=>{var Ao=lr();_e.exports=function(r,e){var t=r[e];return t==null?void 0:Ao(t)}});var Be=o((ts,Ae)=>{var Bo=y(),fr=k(),pr=m(),yr=j(),Wo=Bo.TypeError;Ae.exports=function(r,e){var t,n;if(e==="string"&&pr(t=r.toString)&&!yr(n=fr(t,r))||pr(t=r.valueOf)&&!yr(n=fr(t,r))||e!=="string"&&pr(t=r.toString)&&!yr(n=fr(t,r)))return n;throw Wo("Can't convert object to primitive value")}});var Ue=o((ns,We)=>{We.exports=!1});var V=o((os,Ge)=>{var ke=y(),Uo=Object.defineProperty;Ge.exports=function(r,e){try{Uo(ke,r,{value:e,configurable:!0,writable:!0})}catch(t){ke[r]=e}return e}});var $=o((is,Ve)=>{var ko=y(),Go=V(),Ke="__core-js_shared__",Ko=ko[Ke]||Go(Ke,{});Ve.exports=Ko});var gr=o((as,Ye)=>{var Vo=Ue(),$e=$();(Ye.exports=function(r,e){return $e[r]||($e[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.21.1",mode:Vo?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})});var He=o((us,ze)=>{var $o=y(),Yo=or(),zo=$o.Object;ze.exports=function(r){return zo(Yo(r))}});var S=o((ss,Xe)=>{var Ho=b(),Xo=He(),Jo=Ho({}.hasOwnProperty);Xe.exports=Object.hasOwn||function(e,t){return Jo(Xo(e),t)}});var dr=o((cs,Je)=>{var Zo=b(),Qo=0,ri=Math.random(),ei=Zo(1 .toString);Je.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+ei(++Qo+ri,36)}});var nt=o((vs,tt)=>{var ti=y(),ni=gr(),Ze=S(),oi=dr(),Qe=sr(),et=cr(),C=ni("wks"),I=ti.Symbol,rt=I&&I.for,ii=et?I:I&&I.withoutSetter||oi;tt.exports=function(r){if(!Ze(C,r)||!(Qe||typeof C[r]=="string")){var e="Symbol."+r;Qe&&Ze(I,r)?C[r]=I[r]:et&&rt?C[r]=rt(e):C[r]=ii(e)}return C[r]}});var ut=o((ls,at)=>{var ai=y(),ui=k(),ot=j(),it=vr(),si=Ne(),ci=Be(),vi=nt(),li=ai.TypeError,fi=vi("toPrimitive");at.exports=function(r,e){if(!ot(r)||it(r))return r;var t=si(r,fi),n;if(t){if(e===void 0&&(e="default"),n=ui(t,r,e),!ot(n)||it(n))return n;throw li("Can't convert object to primitive value")}return e===void 0&&(e="number"),ci(r,e)}});var hr=o((fs,st)=>{var pi=ut(),yi=vr();st.exports=function(r){var e=pi(r,"string");return yi(e)?e:e+""}});var mr=o((ps,vt)=>{var gi=y(),ct=j(),br=gi.document,di=ct(br)&&ct(br.createElement);vt.exports=function(r){return di?br.createElement(r):{}}});var qr=o((ys,lt)=>{var hi=x(),bi=w(),mi=mr();lt.exports=!hi&&!bi(function(){return Object.defineProperty(mi("div"),"a",{get:function(){return 7}}).a!=7})});var wr=o(pt=>{var qi=x(),wi=k(),Si=ie(),Ei=rr(),Oi=G(),xi=hr(),Ii=S(),Pi=qr(),ft=Object.getOwnPropertyDescriptor;pt.f=qi?ft:function(e,t){if(e=Oi(e),t=xi(t),Pi)try{return ft(e,t)}catch(n){}if(Ii(e,t))return Ei(!wi(Si.f,e,t),e[t])}});var gt=o((ds,yt)=>{var Ti=x(),ji=w();yt.exports=Ti&&ji(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})});var Sr=o((hs,ht)=>{var dt=y(),Ci=j(),Ri=dt.String,Li=dt.TypeError;ht.exports=function(r){if(Ci(r))return r;throw Li(Ri(r)+" is not an object")}});var Pr=o(mt=>{var Fi=y(),Mi=x(),Di=qr(),_i=gt(),Y=Sr(),bt=hr(),Ni=Fi.TypeError,Er=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,Or="enumerable",xr="configurable",Ir="writable";mt.f=Mi?_i?function(e,t,n){if(Y(e),t=bt(t),Y(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Ir in n&&!n[Ir]){var a=Ai(e,t);a&&a[Ir]&&(e[t]=n.value,n={configurable:xr in n?n[xr]:a[xr],enumerable:Or in n?n[Or]:a[Or],writable:!1})}return Er(e,t,n)}:Er:function(e,t,n){if(Y(e),t=bt(t),Y(n),Di)try{return Er(e,t,n)}catch(a){}if("get"in n||"set"in n)throw Ni("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var z=o((ms,qt)=>{var Bi=x(),Wi=Pr(),Ui=rr();qt.exports=Bi?function(r,e,t){return Wi.f(r,e,Ui(1,t))}:function(r,e,t){return r[e]=t,r}});var jr=o((qs,wt)=>{var ki=b(),Gi=m(),Tr=$(),Ki=ki(Function.toString);Gi(Tr.inspectSource)||(Tr.inspectSource=function(r){return Ki(r)});wt.exports=Tr.inspectSource});var Ot=o((ws,Et)=>{var Vi=y(),$i=m(),Yi=jr(),St=Vi.WeakMap;Et.exports=$i(St)&&/native code/.test(Yi(St))});var Pt=o((Ss,It)=>{var zi=gr(),Hi=dr(),xt=zi("keys");It.exports=function(r){return xt[r]||(xt[r]=Hi(r))}});var Cr=o((Es,Tt)=>{Tt.exports={}});var Mt=o((Os,Ft)=>{var Xi=Ot(),Lt=y(),Rr=b(),Ji=j(),Zi=z(),Lr=S(),Fr=$(),Qi=Pt(),ra=Cr(),jt="Object already initialized",Dr=Lt.TypeError,ea=Lt.WeakMap,H,F,X,ta=function(r){return X(r)?F(r):H(r,{})},na=function(r){return function(e){var t;if(!Ji(e)||(t=F(e)).type!==r)throw Dr("Incompatible receiver, "+r+" required");return t}};Xi||Fr.state?(E=Fr.state||(Fr.state=new ea),Ct=Rr(E.get),Mr=Rr(E.has),Rt=Rr(E.set),H=function(r,e){if(Mr(E,r))throw new Dr(jt);return e.facade=r,Rt(E,r,e),e},F=function(r){return Ct(E,r)||{}},X=function(r){return Mr(E,r)}):(P=Qi("state"),ra[P]=!0,H=function(r,e){if(Lr(r,P))throw new Dr(jt);return e.facade=r,Zi(r,P,e),e},F=function(r){return Lr(r,P)?r[P]:{}},X=function(r){return Lr(r,P)});var E,Ct,Mr,Rt,P;Ft.exports={set:H,get:F,has:X,enforce:ta,getterFor:na}});var Nt=o((xs,_t)=>{var _r=x(),oa=S(),Dt=Function.prototype,ia=_r&&Object.getOwnPropertyDescriptor,Nr=oa(Dt,"name"),aa=Nr&&function(){}.name==="something",ua=Nr&&(!_r||_r&&ia(Dt,"name").configurable);_t.exports={EXISTS:Nr,PROPER:aa,CONFIGURABLE:ua}});var kt=o((Is,Ut)=>{var sa=y(),At=m(),ca=S(),Bt=z(),va=V(),la=jr(),Wt=Mt(),fa=Nt().CONFIGURABLE,pa=Wt.get,ya=Wt.enforce,ga=String(String).split("String");(Ut.exports=function(r,e,t,n){var a=n?!!n.unsafe:!1,f=n?!!n.enumerable:!1,c=n?!!n.noTargetGet:!1,s=n&&n.name!==void 0?n.name:e,v;if(At(t)&&(String(s).slice(0,7)==="Symbol("&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ca(t,"name")||fa&&t.name!==s)&&Bt(t,"name",s),v=ya(t),v.source||(v.source=ga.join(typeof s=="string"?s:""))),r===sa){f?r[e]=t:va(e,t);return}else a?!c&&r[e]&&(f=!0):delete r[e];f?r[e]=t:Bt(r,e,t)})(Function.prototype,"toString",function(){return At(this)&&pa(this).source||la(this)})});var Ar=o((Ps,Gt)=>{var da=Math.ceil,ha=Math.floor;Gt.exports=function(r){var e=+r;return e!==e||e===0?0:(e>0?ha:da)(e)}});var Vt=o((Ts,Kt)=>{var ba=Ar(),ma=Math.max,qa=Math.min;Kt.exports=function(r,e){var t=ba(r);return t<0?ma(t+e,0):qa(t,e)}});var Yt=o((js,$t)=>{var wa=Ar(),Sa=Math.min;$t.exports=function(r){return r>0?Sa(wa(r),9007199254740991):0}});var Ht=o((Cs,zt)=>{var Ea=Yt();zt.exports=function(r){return Ea(r.length)}});var Zt=o((Rs,Jt)=>{var Oa=G(),xa=Vt(),Ia=Ht(),Xt=function(r){return function(e,t,n){var a=Oa(e),f=Ia(a),c=xa(n,f),s;if(r&&t!=t){for(;f>c;)if(s=a[c++],s!=s)return!0}else for(;f>c;c++)if((r||c in a)&&a[c]===t)return r||c||0;return!r&&-1}};Jt.exports={includes:Xt(!0),indexOf:Xt(!1)}});var en=o((Ls,rn)=>{var Pa=b(),Br=S(),Ta=G(),ja=Zt().indexOf,Ca=Cr(),Qt=Pa([].push);rn.exports=function(r,e){var t=Ta(r),n=0,a=[],f;for(f in t)!Br(Ca,f)&&Br(t,f)&&Qt(a,f);for(;e.length>n;)Br(t,f=e[n++])&&(~ja(a,f)||Qt(a,f));return a}});var nn=o((Fs,tn)=>{tn.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var an=o(on=>{var Ra=en(),La=nn(),Fa=La.concat("length","prototype");on.f=Object.getOwnPropertyNames||function(e){return Ra(e,Fa)}});var sn=o(un=>{un.f=Object.getOwnPropertySymbols});var vn=o((_s,cn)=>{var Ma=L(),Da=b(),_a=an(),Na=sn(),Aa=Sr(),Ba=Da([].concat);cn.exports=Ma("Reflect","ownKeys")||function(e){var t=_a.f(Aa(e)),n=Na.f;return n?Ba(t,n(e)):t}});var pn=o((Ns,fn)=>{var ln=S(),Wa=vn(),Ua=wr(),ka=Pr();fn.exports=function(r,e,t){for(var n=Wa(e),a=ka.f,f=Ua.f,c=0;c<n.length;c++){var s=n[c];!ln(r,s)&&!(t&&ln(t,s))&&a(r,s,f(e,s))}}});var gn=o((As,yn)=>{var Ga=w(),Ka=m(),Va=/#|\.prototype\./,M=function(r,e){var t=Ya[$a(r)];return t==Ha?!0:t==za?!1:Ka(e)?Ga(e):!!e},$a=M.normalize=function(r){return String(r).replace(Va,".").toLowerCase()},Ya=M.data={},za=M.NATIVE="N",Ha=M.POLYFILL="P";yn.exports=M});var hn=o((Bs,dn)=>{var Wr=y(),Xa=wr().f,Ja=z(),Za=kt(),Qa=V(),ru=pn(),eu=gn();dn.exports=function(r,e){var t=r.target,n=r.global,a=r.stat,f,c,s,v,g,i;if(n?c=Wr:a?c=Wr[t]||Qa(t,{}):c=(Wr[t]||{}).prototype,c)for(s in e){if(g=e[s],r.noTargetGet?(i=Xa(c,s),v=i&&i.value):v=c[s],f=eu(n?s:t+(a?".":"#")+s,r.forced),!f&&v!==void 0){if(typeof g==typeof v)continue;ru(g,v)}(r.sham||v&&v.sham)&&Ja(g,"sham",!0),Za(c,s,g,r)}}});var Sn=o((Ws,wn)=>{var tu=R(),qn=Function.prototype,bn=qn.apply,mn=qn.call;wn.exports=typeof Reflect=="object"&&Reflect.apply||(tu?mn.bind(bn):function(){return mn.apply(bn,arguments)})});var xn=o((Us,On)=>{var En=b(),nu=lr(),ou=R(),iu=En(En.bind);On.exports=function(r,e){return nu(r),e===void 0?r:ou?iu(r,e):function(){return r.apply(e,arguments)}}});var Pn=o((ks,In)=>{var au=L();In.exports=au("document","documentElement")});var jn=o((Gs,Tn)=>{var uu=b();Tn.exports=uu([].slice)});var Rn=o((Ks,Cn)=>{var su=y(),cu=su.TypeError;Cn.exports=function(r,e){if(r<e)throw cu("Not enough arguments");return r}});var Fn=o((Vs,Ln)=>{var vu=ar();Ln.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(vu)});var Dn=o(($s,Mn)=>{var lu=tr(),fu=y();Mn.exports=lu(fu.process)=="process"});var Kn=o((Ys,Gn)=>{var h=y(),pu=Sn(),yu=xn(),_n=m(),gu=S(),du=w(),Nn=Pn(),hu=jn(),An=mr(),bu=Rn(),mu=Fn(),qu=Dn(),$r=h.setImmediate,Yr=h.clearImmediate,wu=h.process,Ur=h.Dispatch,Su=h.Function,Bn=h.MessageChannel,Eu=h.String,kr=0,D={},Wn="onreadystatechange",N,T,Gr,Kr;try{N=h.location}catch(r){}var zr=function(r){if(gu(D,r)){var e=D[r];delete D[r],e()}},Vr=function(r){return function(){zr(r)}},Un=function(r){zr(r.data)},kn=function(r){h.postMessage(Eu(r),N.protocol+"//"+N.host)};(!$r||!Yr)&&($r=function(e){bu(arguments.length,1);var t=_n(e)?e:Su(e),n=hu(arguments,1);return D[++kr]=function(){pu(t,void 0,n)},T(kr),kr},Yr=function(e){delete D[e]},qu?T=function(r){wu.nextTick(Vr(r))}:Ur&&Ur.now?T=function(r){Ur.now(Vr(r))}:Bn&&!mu?(Gr=new Bn,Kr=Gr.port2,Gr.port1.onmessage=Un,T=yu(Kr.postMessage,Kr)):h.addEventListener&&_n(h.postMessage)&&!h.importScripts&&N&&N.protocol!=="file:"&&!du(kn)?(T=kn,h.addEventListener("message",Un,!1)):Wn in An("script")?T=function(r){Nn.appendChild(An("script"))[Wn]=function(){Nn.removeChild(this),zr(r)}}:T=function(r){setTimeout(Vr(r),0)});Gn.exports={set:$r,clear:Yr}});var Ou=hn(),Vn=y(),$n=Kn(),xu=!Vn.setImmediate||!Vn.clearImmediate;Ou({global:!0,bind:!0,enumerable:!0,forced:xu},{setImmediate:$n.set,clearImmediate:$n.clear});import{hydrate as ju}from"https://spike.land/dist/react.mjs";function Yn(r){let e=new Uint8Array(r.length);for(let a=0;a<e.length;a++)e[a]=r.charCodeAt(a);let t=new Uint16Array(e.buffer),n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n}import{jsx as Cu}from"https://spike.land/dist/emotion.mjs";try{self["workbox:window:6.5.1"]&&_()}catch(r){}function zn(r,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(a){t(a.data)},r.postMessage(e,[n.port2])})}function Hn(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Xn(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Iu(r,e){var t;if(typeof Symbol=="undefined"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=function(a,f){if(a){if(typeof a=="string")return Xn(a,f);var c=Object.prototype.toString.call(a).slice(8,-1);return c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set"?Array.from(a):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Xn(a,f):void 0}}(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=r[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.1"]&&_()}catch(r){}var Hr=function(){var r=this;this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})};function Xr(r,e){var t=location.href;return new URL(r,t).href===new URL(e,t).href}var A=function(r,e){this.type=r,Object.assign(this,e)};function J(r,e,t){return t?e?e(r):r:(r&&r.then||(r=Promise.resolve(r)),e?r.then(e):r)}function Pu(){}var Tu={type:"SKIP_WAITING"};function Jn(r,e){if(!e)return r&&r.then?r.then(Pu):Promise.resolve()}var Zn=function(r){var e,t;function n(v,g){var i,u;return g===void 0&&(g={}),(i=r.call(this)||this).nn={},i.tn=0,i.rn=new Hr,i.en=new Hr,i.on=new Hr,i.un=0,i.an=new Set,i.cn=function(){var p=i.fn,l=p.installing;i.tn>0||!Xr(l.scriptURL,i.sn.toString())||performance.now()>i.un+6e4?(i.vn=l,p.removeEventListener("updatefound",i.cn)):(i.hn=l,i.an.add(l),i.rn.resolve(l)),++i.tn,l.addEventListener("statechange",i.ln)},i.ln=function(p){var l=i.fn,d=p.target,O=d.state,Z=d===i.vn,Q={sw:d,isExternal:Z,originalEvent:p};!Z&&i.mn&&(Q.isUpdate=!0),i.dispatchEvent(new A(O,Q)),O==="installed"?i.wn=self.setTimeout(function(){O==="installed"&&l.waiting===d&&i.dispatchEvent(new A("waiting",Q))},200):O==="activating"&&(clearTimeout(i.wn),Z||i.en.resolve(d))},i.dn=function(p){var l=i.hn,d=l!==navigator.serviceWorker.controller;i.dispatchEvent(new A("controlling",{isExternal:d,originalEvent:p,sw:l,isUpdate:i.mn})),d||i.on.resolve(l)},i.gn=(u=function(p){var l=p.data,d=p.ports,O=p.source;return J(i.getSW(),function(){i.an.has(O)&&i.dispatchEvent(new A("message",{data:l,originalEvent:p,ports:d,sw:O}))})},function(){for(var p=[],l=0;l<arguments.length;l++)p[l]=arguments[l];try{return Promise.resolve(u.apply(this,p))}catch(d){return Promise.reject(d)}}),i.sn=v,i.nn=g,navigator.serviceWorker.addEventListener("message",i.gn),i}t=r,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var a,f,c,s=n.prototype;return s.register=function(v){var g=(v===void 0?{}:v).immediate,i=g!==void 0&&g;try{var u=this;return function(p,l){var d=p();return d&&d.then?d.then(l):l(d)}(function(){if(!i&&document.readyState!=="complete")return Jn(new Promise(function(p){return window.addEventListener("load",p)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),J(u.bn(),function(p){u.fn=p,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var l=u.fn.waiting;return l&&Xr(l.scriptURL,u.sn.toString())&&(u.hn=l,Promise.resolve().then(function(){u.dispatchEvent(new A("waiting",{sw:l,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(p){return Promise.reject(p)}},s.update=function(){try{return this.fn?Jn(this.fn.update()):void 0}catch(v){return Promise.reject(v)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(v){try{return J(this.getSW(),function(g){return zn(g,v)})}catch(g){return Promise.reject(g)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&zn(this.fn.waiting,Tu)},s.pn=function(){var v=navigator.serviceWorker.controller;return v&&Xr(v.scriptURL,this.sn.toString())?v:void 0},s.bn=function(){try{var v=this;return function(g,i){try{var u=g()}catch(p){return i(p)}return u&&u.then?u.then(void 0,i):u}(function(){return J(navigator.serviceWorker.register(v.sn,v.nn),function(g){return v.un=performance.now(),g})},function(g){throw g})}catch(g){return Promise.reject(g)}},a=n,(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Hn(a.prototype,f),c&&Hn(a,c),n}(function(){function r(){this.Pn=new Map}var e=r.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,a=Iu(this.Sn(t.type));!(n=a()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},r}());"serviceWorker"in navigator&&new Zn("/sw.js").register();var B=location.pathname.split("/"),Ru=(B[1]==="api"&&B[2]==="room"?B[3]:(B.pop()||B.pop()).slice(-12))||"code-main",Qn=async r=>{globalThis.monacoEditorModule=import("./chunks/editor-D5HX6YZM.mjs"),globalThis.renderPreviewModule=import("./chunks/renderPreviewWindow-DKGR4RMJ.mjs");let e=document.querySelector("#root");if(ju(e,Cu(r)),console.log("HYDRATED"),location.href.endsWith("hydrated"))return;globalThis.App=r;let{join:t}=await import("./chunks/ws-SWO4D3CN.mjs");t()},ec=async r=>{let e=(await import(ro(Yn(r)))).default;Qn(e)},tc=async()=>{if(globalThis.App)return;let e=await(await fetch(`https://spike.land/api/room/${Ru}/session`)).json(),t=document.getElementById("root");t.innerHTML=`<style>${e.css}</style><div id="zbody">${e.html}</div>`;let n=(await import(ro(e.transpiled))).default;Qn(n)};function ro(r){let e=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(e)}export{ro as createJsBlob,ec as hydrateBinary,tc as run};
