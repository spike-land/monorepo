import{e as o}from"./chunks/chunk-YUH35O52.mjs";var d=o((Wu,Qr)=>{var W=function(r){return r&&r.Math==Math&&r};Qr.exports=W(typeof globalThis=="object"&&globalThis)||W(typeof window=="object"&&window)||W(typeof self=="object"&&self)||W(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var S=o((ku,re)=>{re.exports=function(r){try{return!!r()}catch(e){return!0}}});var I=o((Vu,ee)=>{var io=S();ee.exports=!io(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var D=o((Gu,te)=>{var ao=S();te.exports=!ao(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var V=o((Ku,ne)=>{var uo=D(),k=Function.prototype.call;ne.exports=uo?k.bind(k):function(){return k.apply(k,arguments)}});var ue=o(ae=>{"use strict";var oe={}.propertyIsEnumerable,ie=Object.getOwnPropertyDescriptor,so=ie&&!oe.call({1:2},1);ae.f=so?function(e){var t=ie(this,e);return!!t&&t.enumerable}:oe});var tr=o((Yu,se)=>{se.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var b=o((zu,ve)=>{var ce=D(),le=Function.prototype,co=le.bind,nr=le.call,lo=ce&&co.bind(nr,nr);ve.exports=ce?function(r){return r&&lo(r)}:function(r){return r&&function(){return nr.apply(r,arguments)}}});var or=o((Hu,pe)=>{var fe=b(),vo=fe({}.toString),fo=fe("".slice);pe.exports=function(r){return fo(vo(r),8,-1)}});var ge=o((Xu,de)=>{var po=d(),go=b(),yo=S(),ho=or(),ir=po.Object,mo=go("".split);de.exports=yo(function(){return!ir("z").propertyIsEnumerable(0)})?function(r){return ho(r)=="String"?mo(r,""):ir(r)}:ir});var ar=o((Ju,ye)=>{var bo=d(),qo=bo.TypeError;ye.exports=function(r){if(r==null)throw qo("Can't call method on "+r);return r}});var G=o((Zu,he)=>{var wo=ge(),So=ar();he.exports=function(r){return wo(So(r))}});var q=o((Qu,me)=>{me.exports=function(r){return typeof r=="function"}});var C=o((rs,be)=>{var Eo=q();be.exports=function(r){return typeof r=="object"?r!==null:Eo(r)}});var L=o((es,qe)=>{var ur=d(),Oo=q(),xo=function(r){return Oo(r)?r:void 0};qe.exports=function(r,e){return arguments.length<2?xo(ur[r]):ur[r]&&ur[r][e]}});var Se=o((ts,we)=>{var Io=b();we.exports=Io({}.isPrototypeOf)});var sr=o((ns,Ee)=>{var Po=L();Ee.exports=Po("navigator","userAgent")||""});var Ce=o((os,je)=>{var Te=d(),cr=sr(),Oe=Te.process,xe=Te.Deno,Ie=Oe&&Oe.versions||xe&&xe.version,Pe=Ie&&Ie.v8,w,K;Pe&&(w=Pe.split("."),K=w[0]>0&&w[0]<4?1:+(w[0]+w[1]));!K&&cr&&(w=cr.match(/Edge\/(\d+)/),(!w||w[1]>=74)&&(w=cr.match(/Chrome\/(\d+)/),w&&(K=+w[1])));je.exports=K});var lr=o((is,De)=>{var Re=Ce(),To=S();De.exports=!!Object.getOwnPropertySymbols&&!To(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Re&&Re<41})});var vr=o((as,Le)=>{var jo=lr();Le.exports=jo&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var fr=o((us,Fe)=>{var Co=d(),Ro=L(),Do=q(),Lo=Se(),Fo=vr(),Mo=Co.Object;Fe.exports=Fo?function(r){return typeof r=="symbol"}:function(r){var e=Ro("Symbol");return Do(e)&&Lo(e.prototype,Mo(r))}});var _e=o((ss,Me)=>{var _o=d(),No=_o.String;Me.exports=function(r){try{return No(r)}catch(e){return"Object"}}});var pr=o((cs,Ne)=>{var Ao=d(),Bo=q(),Uo=_e(),Wo=Ao.TypeError;Ne.exports=function(r){if(Bo(r))return r;throw Wo(Uo(r)+" is not a function")}});var Be=o((ls,Ae)=>{var ko=pr();Ae.exports=function(r,e){var t=r[e];return t==null?void 0:ko(t)}});var We=o((vs,Ue)=>{var Vo=d(),dr=V(),gr=q(),yr=C(),Go=Vo.TypeError;Ue.exports=function(r,e){var t,n;if(e==="string"&&gr(t=r.toString)&&!yr(n=dr(t,r))||gr(t=r.valueOf)&&!yr(n=dr(t,r))||e!=="string"&&gr(t=r.toString)&&!yr(n=dr(t,r)))return n;throw Go("Can't convert object to primitive value")}});var Ve=o((fs,ke)=>{ke.exports=!1});var $=o((ps,Ke)=>{var Ge=d(),Ko=Object.defineProperty;Ke.exports=function(r,e){try{Ko(Ge,r,{value:e,configurable:!0,writable:!0})}catch(t){Ge[r]=e}return e}});var Y=o((ds,Ye)=>{var $o=d(),Yo=$(),$e="__core-js_shared__",zo=$o[$e]||Yo($e,{});Ye.exports=zo});var hr=o((gs,He)=>{var Ho=Ve(),ze=Y();(He.exports=function(r,e){return ze[r]||(ze[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.21.1",mode:Ho?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})});var Je=o((ys,Xe)=>{var Xo=d(),Jo=ar(),Zo=Xo.Object;Xe.exports=function(r){return Zo(Jo(r))}});var E=o((hs,Ze)=>{var Qo=b(),ri=Je(),ei=Qo({}.hasOwnProperty);Ze.exports=Object.hasOwn||function(e,t){return ei(ri(e),t)}});var mr=o((ms,Qe)=>{var ti=b(),ni=0,oi=Math.random(),ii=ti(1 .toString);Qe.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+ii(++ni+oi,36)}});var it=o((bs,ot)=>{var ai=d(),ui=hr(),rt=E(),si=mr(),et=lr(),nt=vr(),R=ui("wks"),P=ai.Symbol,tt=P&&P.for,ci=nt?P:P&&P.withoutSetter||si;ot.exports=function(r){if(!rt(R,r)||!(et||typeof R[r]=="string")){var e="Symbol."+r;et&&rt(P,r)?R[r]=P[r]:nt&&tt?R[r]=tt(e):R[r]=ci(e)}return R[r]}});var ct=o((qs,st)=>{var li=d(),vi=V(),at=C(),ut=fr(),fi=Be(),pi=We(),di=it(),gi=li.TypeError,yi=di("toPrimitive");st.exports=function(r,e){if(!at(r)||ut(r))return r;var t=fi(r,yi),n;if(t){if(e===void 0&&(e="default"),n=vi(t,r,e),!at(n)||ut(n))return n;throw gi("Can't convert object to primitive value")}return e===void 0&&(e="number"),pi(r,e)}});var br=o((ws,lt)=>{var hi=ct(),mi=fr();lt.exports=function(r){var e=hi(r,"string");return mi(e)?e:e+""}});var wr=o((Ss,ft)=>{var bi=d(),vt=C(),qr=bi.document,qi=vt(qr)&&vt(qr.createElement);ft.exports=function(r){return qi?qr.createElement(r):{}}});var Sr=o((Es,pt)=>{var wi=I(),Si=S(),Ei=wr();pt.exports=!wi&&!Si(function(){return Object.defineProperty(Ei("div"),"a",{get:function(){return 7}}).a!=7})});var Er=o(gt=>{var Oi=I(),xi=V(),Ii=ue(),Pi=tr(),Ti=G(),ji=br(),Ci=E(),Ri=Sr(),dt=Object.getOwnPropertyDescriptor;gt.f=Oi?dt:function(e,t){if(e=Ti(e),t=ji(t),Ri)try{return dt(e,t)}catch(n){}if(Ci(e,t))return Pi(!xi(Ii.f,e,t),e[t])}});var ht=o((xs,yt)=>{var Di=I(),Li=S();yt.exports=Di&&Li(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})});var Or=o((Is,bt)=>{var mt=d(),Fi=C(),Mi=mt.String,_i=mt.TypeError;bt.exports=function(r){if(Fi(r))return r;throw _i(Mi(r)+" is not an object")}});var jr=o(wt=>{var Ni=d(),Ai=I(),Bi=Sr(),Ui=ht(),z=Or(),qt=br(),Wi=Ni.TypeError,xr=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Ir="enumerable",Pr="configurable",Tr="writable";wt.f=Ai?Ui?function(e,t,n){if(z(e),t=qt(t),z(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Tr in n&&!n[Tr]){var i=ki(e,t);i&&i[Tr]&&(e[t]=n.value,n={configurable:Pr in n?n[Pr]:i[Pr],enumerable:Ir in n?n[Ir]:i[Ir],writable:!1})}return xr(e,t,n)}:xr:function(e,t,n){if(z(e),t=qt(t),z(n),Bi)try{return xr(e,t,n)}catch(i){}if("get"in n||"set"in n)throw Wi("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var H=o((Ts,St)=>{var Vi=I(),Gi=jr(),Ki=tr();St.exports=Vi?function(r,e,t){return Gi.f(r,e,Ki(1,t))}:function(r,e,t){return r[e]=t,r}});var Rr=o((js,Et)=>{var $i=b(),Yi=q(),Cr=Y(),zi=$i(Function.toString);Yi(Cr.inspectSource)||(Cr.inspectSource=function(r){return zi(r)});Et.exports=Cr.inspectSource});var It=o((Cs,xt)=>{var Hi=d(),Xi=q(),Ji=Rr(),Ot=Hi.WeakMap;xt.exports=Xi(Ot)&&/native code/.test(Ji(Ot))});var jt=o((Rs,Tt)=>{var Zi=hr(),Qi=mr(),Pt=Zi("keys");Tt.exports=function(r){return Pt[r]||(Pt[r]=Qi(r))}});var Dr=o((Ds,Ct)=>{Ct.exports={}});var _t=o((Ls,Mt)=>{var ra=It(),Ft=d(),Lr=b(),ea=C(),ta=H(),Fr=E(),Mr=Y(),na=jt(),oa=Dr(),Rt="Object already initialized",Nr=Ft.TypeError,ia=Ft.WeakMap,X,F,J,aa=function(r){return J(r)?F(r):X(r,{})},ua=function(r){return function(e){var t;if(!ea(e)||(t=F(e)).type!==r)throw Nr("Incompatible receiver, "+r+" required");return t}};ra||Mr.state?(O=Mr.state||(Mr.state=new ia),Dt=Lr(O.get),_r=Lr(O.has),Lt=Lr(O.set),X=function(r,e){if(_r(O,r))throw new Nr(Rt);return e.facade=r,Lt(O,r,e),e},F=function(r){return Dt(O,r)||{}},J=function(r){return _r(O,r)}):(T=na("state"),oa[T]=!0,X=function(r,e){if(Fr(r,T))throw new Nr(Rt);return e.facade=r,ta(r,T,e),e},F=function(r){return Fr(r,T)?r[T]:{}},J=function(r){return Fr(r,T)});var O,Dt,_r,Lt,T;Mt.exports={set:X,get:F,has:J,enforce:aa,getterFor:ua}});var Bt=o((Fs,At)=>{var Ar=I(),sa=E(),Nt=Function.prototype,ca=Ar&&Object.getOwnPropertyDescriptor,Br=sa(Nt,"name"),la=Br&&function(){}.name==="something",va=Br&&(!Ar||Ar&&ca(Nt,"name").configurable);At.exports={EXISTS:Br,PROPER:la,CONFIGURABLE:va}});var Gt=o((Ms,Vt)=>{var fa=d(),Ut=q(),pa=E(),Wt=H(),da=$(),ga=Rr(),kt=_t(),ya=Bt().CONFIGURABLE,ha=kt.get,ma=kt.enforce,ba=String(String).split("String");(Vt.exports=function(r,e,t,n){var i=n?!!n.unsafe:!1,f=n?!!n.enumerable:!1,c=n?!!n.noTargetGet:!1,s=n&&n.name!==void 0?n.name:e,l;if(Ut(t)&&(String(s).slice(0,7)==="Symbol("&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!pa(t,"name")||ya&&t.name!==s)&&Wt(t,"name",s),l=ma(t),l.source||(l.source=ba.join(typeof s=="string"?s:""))),r===fa){f?r[e]=t:da(e,t);return}else i?!c&&r[e]&&(f=!0):delete r[e];f?r[e]=t:Wt(r,e,t)})(Function.prototype,"toString",function(){return Ut(this)&&ha(this).source||ga(this)})});var Ur=o((_s,Kt)=>{var qa=Math.ceil,wa=Math.floor;Kt.exports=function(r){var e=+r;return e!==e||e===0?0:(e>0?wa:qa)(e)}});var Yt=o((Ns,$t)=>{var Sa=Ur(),Ea=Math.max,Oa=Math.min;$t.exports=function(r,e){var t=Sa(r);return t<0?Ea(t+e,0):Oa(t,e)}});var Ht=o((As,zt)=>{var xa=Ur(),Ia=Math.min;zt.exports=function(r){return r>0?Ia(xa(r),9007199254740991):0}});var Jt=o((Bs,Xt)=>{var Pa=Ht();Xt.exports=function(r){return Pa(r.length)}});var rn=o((Us,Qt)=>{var Ta=G(),ja=Yt(),Ca=Jt(),Zt=function(r){return function(e,t,n){var i=Ta(e),f=Ca(i),c=ja(n,f),s;if(r&&t!=t){for(;f>c;)if(s=i[c++],s!=s)return!0}else for(;f>c;c++)if((r||c in i)&&i[c]===t)return r||c||0;return!r&&-1}};Qt.exports={includes:Zt(!0),indexOf:Zt(!1)}});var nn=o((Ws,tn)=>{var Ra=b(),Wr=E(),Da=G(),La=rn().indexOf,Fa=Dr(),en=Ra([].push);tn.exports=function(r,e){var t=Da(r),n=0,i=[],f;for(f in t)!Wr(Fa,f)&&Wr(t,f)&&en(i,f);for(;e.length>n;)Wr(t,f=e[n++])&&(~La(i,f)||en(i,f));return i}});var an=o((ks,on)=>{on.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var sn=o(un=>{var Ma=nn(),_a=an(),Na=_a.concat("length","prototype");un.f=Object.getOwnPropertyNames||function(e){return Ma(e,Na)}});var ln=o(cn=>{cn.f=Object.getOwnPropertySymbols});var fn=o((Ks,vn)=>{var Aa=L(),Ba=b(),Ua=sn(),Wa=ln(),ka=Or(),Va=Ba([].concat);vn.exports=Aa("Reflect","ownKeys")||function(e){var t=Ua.f(ka(e)),n=Wa.f;return n?Va(t,n(e)):t}});var gn=o(($s,dn)=>{var pn=E(),Ga=fn(),Ka=Er(),$a=jr();dn.exports=function(r,e,t){for(var n=Ga(e),i=$a.f,f=Ka.f,c=0;c<n.length;c++){var s=n[c];!pn(r,s)&&!(t&&pn(t,s))&&i(r,s,f(e,s))}}});var hn=o((Ys,yn)=>{var Ya=S(),za=q(),Ha=/#|\.prototype\./,M=function(r,e){var t=Ja[Xa(r)];return t==Qa?!0:t==Za?!1:za(e)?Ya(e):!!e},Xa=M.normalize=function(r){return String(r).replace(Ha,".").toLowerCase()},Ja=M.data={},Za=M.NATIVE="N",Qa=M.POLYFILL="P";yn.exports=M});var bn=o((zs,mn)=>{var kr=d(),ru=Er().f,eu=H(),tu=Gt(),nu=$(),ou=gn(),iu=hn();mn.exports=function(r,e){var t=r.target,n=r.global,i=r.stat,f,c,s,l,g,a;if(n?c=kr:i?c=kr[t]||nu(t,{}):c=(kr[t]||{}).prototype,c)for(s in e){if(g=e[s],r.noTargetGet?(a=ru(c,s),l=a&&a.value):l=c[s],f=iu(n?s:t+(i?".":"#")+s,r.forced),!f&&l!==void 0){if(typeof g==typeof l)continue;ou(g,l)}(r.sham||l&&l.sham)&&eu(g,"sham",!0),tu(c,s,g,r)}}});var On=o((Hs,En)=>{var au=D(),Sn=Function.prototype,qn=Sn.apply,wn=Sn.call;En.exports=typeof Reflect=="object"&&Reflect.apply||(au?wn.bind(qn):function(){return wn.apply(qn,arguments)})});var Pn=o((Xs,In)=>{var xn=b(),uu=pr(),su=D(),cu=xn(xn.bind);In.exports=function(r,e){return uu(r),e===void 0?r:su?cu(r,e):function(){return r.apply(e,arguments)}}});var jn=o((Js,Tn)=>{var lu=L();Tn.exports=lu("document","documentElement")});var Rn=o((Zs,Cn)=>{var vu=b();Cn.exports=vu([].slice)});var Ln=o((Qs,Dn)=>{var fu=d(),pu=fu.TypeError;Dn.exports=function(r,e){if(r<e)throw pu("Not enough arguments");return r}});var Mn=o((rc,Fn)=>{var du=sr();Fn.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(du)});var Nn=o((ec,_n)=>{var gu=or(),yu=d();_n.exports=gu(yu.process)=="process"});var $n=o((tc,Kn)=>{var m=d(),hu=On(),mu=Pn(),An=q(),bu=E(),qu=S(),Bn=jn(),wu=Rn(),Un=wr(),Su=Ln(),Eu=Mn(),Ou=Nn(),zr=m.setImmediate,Hr=m.clearImmediate,xu=m.process,Vr=m.Dispatch,Iu=m.Function,Wn=m.MessageChannel,Pu=m.String,Gr=0,N={},kn="onreadystatechange",A,j,Kr,$r;try{A=m.location}catch(r){}var Xr=function(r){if(bu(N,r)){var e=N[r];delete N[r],e()}},Yr=function(r){return function(){Xr(r)}},Vn=function(r){Xr(r.data)},Gn=function(r){m.postMessage(Pu(r),A.protocol+"//"+A.host)};(!zr||!Hr)&&(zr=function(e){Su(arguments.length,1);var t=An(e)?e:Iu(e),n=wu(arguments,1);return N[++Gr]=function(){hu(t,void 0,n)},j(Gr),Gr},Hr=function(e){delete N[e]},Ou?j=function(r){xu.nextTick(Yr(r))}:Vr&&Vr.now?j=function(r){Vr.now(Yr(r))}:Wn&&!Eu?(Kr=new Wn,$r=Kr.port2,Kr.port1.onmessage=Vn,j=mu($r.postMessage,$r)):m.addEventListener&&An(m.postMessage)&&!m.importScripts&&A&&A.protocol!=="file:"&&!qu(Gn)?(j=Gn,m.addEventListener("message",Vn,!1)):kn in Un("script")?j=function(r){Bn.appendChild(Un("script"))[kn]=function(){Bn.removeChild(this),Xr(r)}}:j=function(r){setTimeout(Yr(r),0)});Kn.exports={set:zr,clear:Hr}});var Tu=bn(),Yn=d(),zn=$n(),ju=!Yn.setImmediate||!Yn.clearImmediate;Tu({global:!0,bind:!0,enumerable:!0,forced:ju},{setImmediate:zn.set,clearImmediate:zn.clear});import{hydrate as Au}from"https://spike.land/dist/react.mjs";function Hn(r){let e=new Uint8Array(r.length);for(let i=0;i<e.length;i++)e[i]=r.charCodeAt(i);let t=new Uint16Array(e.buffer),n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n}import{jsx as Bu}from"https://spike.land/dist/emotion.mjs";var Z,Cu=new Uint8Array(16);function Ru(){if(!Z&&(Z=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(Cu)}var Du=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function Lu(r){return typeof r=="string"&&Du.test(r)}var h=[];for(let r=0;r<256;++r)h.push((r+256).toString(16).slice(1));function Fu(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(h[r[e+0]]+h[r[e+1]]+h[r[e+2]]+h[r[e+3]]+"-"+h[r[e+4]]+h[r[e+5]]+"-"+h[r[e+6]]+h[r[e+7]]+"-"+h[r[e+8]]+h[r[e+9]]+"-"+h[r[e+10]]+h[r[e+11]]+h[r[e+12]]+h[r[e+13]]+h[r[e+14]]+h[r[e+15]]).toLowerCase();if(!Lu(t))throw new TypeError("Stringified UUID is invalid");return t}function Xn(r,e,t){r=r||{};let n=r.random||(r.rng||Ru)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=n[i];return e}return Fu(n)}try{self["workbox:window:6.4.1"]&&_()}catch(r){}function Jn(r,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(i){t(i.data)},r.postMessage(e,[n.port2])})}function Zn(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Qn(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Mu(r,e){var t;if(typeof Symbol=="undefined"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=function(i,f){if(i){if(typeof i=="string")return Qn(i,f);var c=Object.prototype.toString.call(i).slice(8,-1);return c==="Object"&&i.constructor&&(c=i.constructor.name),c==="Map"||c==="Set"?Array.from(i):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Qn(i,f):void 0}}(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=r[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.4.1"]&&_()}catch(r){}var Jr=function(){var r=this;this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})};function Zr(r,e){var t=location.href;return new URL(r,t).href===new URL(e,t).href}var B=function(r,e){this.type=r,Object.assign(this,e)};function Q(r,e,t){return t?e?e(r):r:(r&&r.then||(r=Promise.resolve(r)),e?r.then(e):r)}function _u(){}var Nu={type:"SKIP_WAITING"};function ro(r,e){if(!e)return r&&r.then?r.then(_u):Promise.resolve()}var eo=function(r){var e,t;function n(l,g){var a,u;return g===void 0&&(g={}),(a=r.call(this)||this).nn={},a.tn=0,a.rn=new Jr,a.en=new Jr,a.on=new Jr,a.un=0,a.an=new Set,a.cn=function(){var p=a.fn,v=p.installing;a.tn>0||!Zr(v.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=v,p.removeEventListener("updatefound",a.cn)):(a.hn=v,a.an.add(v),a.rn.resolve(v)),++a.tn,v.addEventListener("statechange",a.ln)},a.ln=function(p){var v=a.fn,y=p.target,x=y.state,rr=y===a.vn,er={sw:y,isExternal:rr,originalEvent:p};!rr&&a.mn&&(er.isUpdate=!0),a.dispatchEvent(new B(x,er)),x==="installed"?a.wn=self.setTimeout(function(){x==="installed"&&v.waiting===y&&a.dispatchEvent(new B("waiting",er))},200):x==="activating"&&(clearTimeout(a.wn),rr||a.en.resolve(y))},a.dn=function(p){var v=a.hn,y=v!==navigator.serviceWorker.controller;a.dispatchEvent(new B("controlling",{isExternal:y,originalEvent:p,sw:v,isUpdate:a.mn})),y||a.on.resolve(v)},a.gn=(u=function(p){var v=p.data,y=p.ports,x=p.source;return Q(a.getSW(),function(){a.an.has(x)&&a.dispatchEvent(new B("message",{data:v,originalEvent:p,ports:y,sw:x}))})},function(){for(var p=[],v=0;v<arguments.length;v++)p[v]=arguments[v];try{return Promise.resolve(u.apply(this,p))}catch(y){return Promise.reject(y)}}),a.sn=l,a.nn=g,navigator.serviceWorker.addEventListener("message",a.gn),a}t=r,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i,f,c,s=n.prototype;return s.register=function(l){var g=(l===void 0?{}:l).immediate,a=g!==void 0&&g;try{var u=this;return function(p,v){var y=p();return y&&y.then?y.then(v):v(y)}(function(){if(!a&&document.readyState!=="complete")return ro(new Promise(function(p){return window.addEventListener("load",p)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),Q(u.bn(),function(p){u.fn=p,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var v=u.fn.waiting;return v&&Zr(v.scriptURL,u.sn.toString())&&(u.hn=v,Promise.resolve().then(function(){u.dispatchEvent(new B("waiting",{sw:v,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(p){return Promise.reject(p)}},s.update=function(){try{return this.fn?ro(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(l){try{return Q(this.getSW(),function(g){return Jn(g,l)})}catch(g){return Promise.reject(g)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Jn(this.fn.waiting,Nu)},s.pn=function(){var l=navigator.serviceWorker.controller;return l&&Zr(l.scriptURL,this.sn.toString())?l:void 0},s.bn=function(){try{var l=this;return function(g,a){try{var u=g()}catch(p){return a(p)}return u&&u.then?u.then(void 0,a):u}(function(){return Q(navigator.serviceWorker.register(l.sn,l.nn),function(g){return l.un=performance.now(),g})},function(g){throw g})}catch(g){return Promise.reject(g)}},i=n,(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Zn(i.prototype,f),c&&Zn(i,c),n}(function(){function r(){this.Pn=new Map}var e=r.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,i=Mu(this.Sn(t.type));!(n=i()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},r}());"serviceWorker"in navigator&&new eo("/sw.js").register();var U=location.pathname.split("/");window.aniStart=Date.now();var to=(U[1]==="api"&&U[2]==="room"?U[3]:(U.pop()||U.pop()).slice(-12))||"code-main",Uu=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||Xn()).slice(0,8),no=async r=>{globalThis.monacoEditorModule=import("./chunks/editor-P6DJRBXF.mjs"),globalThis.renderPreviewModule=import("./chunks/renderPreviewWindow-EQ6WFIUL.mjs");let e=document.querySelector("#root");if(Au(e,Bu(r)),console.log("HYDRATED"),location.href.endsWith("hydrated"))return;globalThis.App=r;let{join:t}=await import("./chunks/ws-GGIEA7CT.mjs");t(to,Uu)},fc=async r=>{let e=(await import(oo(Hn(r)))).default;no(e)},pc=async()=>{if(globalThis.App)return;let e=await(await fetch(`https://spike.land/api/room/${to}/session`)).json(),t=document.getElementById("root");t.innerHTML=`<style>${e.css}</style><div id="zbody">${e.html}</div>`;let n=(await import(oo(e.transpiled))).default;no(n)};function oo(r){let e=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(e)}export{oo as createJsBlob,fc as hydrateBinary,pc as run};
