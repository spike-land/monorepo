import{c as o}from"./chunks/chunk-6XRSRXUF.mjs";var p=o((_u,Qr)=>{var W=function(r){return r&&r.Math==Math&&r};Qr.exports=W(typeof globalThis=="object"&&globalThis)||W(typeof window=="object"&&window)||W(typeof self=="object"&&self)||W(typeof global=="object"&&global)||function(){return this}()||Function("return this")()});var w=o((Nu,re)=>{re.exports=function(r){try{return!!r()}catch{return!0}}});var x=o((Au,ee)=>{var no=w();ee.exports=!no(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})});var L=o((Bu,te)=>{var oo=w();te.exports=!oo(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")})});var k=o((Wu,ne)=>{var io=L(),U=Function.prototype.call;ne.exports=io?U.bind(U):function(){return U.apply(U,arguments)}});var ue=o(ae=>{"use strict";var oe={}.propertyIsEnumerable,ie=Object.getOwnPropertyDescriptor,ao=ie&&!oe.call({1:2},1);ae.f=ao?function(e){var t=ie(this,e);return!!t&&t.enumerable}:oe});var rr=o((ku,se)=>{se.exports=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}}});var b=o((Gu,ve)=>{var ce=L(),le=Function.prototype,uo=le.bind,er=le.call,so=ce&&uo.bind(er,er);ve.exports=ce?function(r){return r&&so(r)}:function(r){return r&&function(){return er.apply(r,arguments)}}});var tr=o((Ku,pe)=>{var fe=b(),co=fe({}.toString),lo=fe("".slice);pe.exports=function(r){return lo(co(r),8,-1)}});var de=o((Vu,ye)=>{var vo=p(),fo=b(),po=w(),yo=tr(),nr=vo.Object,go=fo("".split);ye.exports=po(function(){return!nr("z").propertyIsEnumerable(0)})?function(r){return yo(r)=="String"?go(r,""):nr(r)}:nr});var or=o(($u,ge)=>{var ho=p(),bo=ho.TypeError;ge.exports=function(r){if(r==null)throw bo("Can't call method on "+r);return r}});var G=o((Yu,he)=>{var mo=de(),qo=or();he.exports=function(r){return mo(qo(r))}});var m=o((zu,be)=>{be.exports=function(r){return typeof r=="function"}});var j=o((Hu,me)=>{var wo=m();me.exports=function(r){return typeof r=="object"?r!==null:wo(r)}});var R=o((Xu,qe)=>{var ir=p(),So=m(),Eo=function(r){return So(r)?r:void 0};qe.exports=function(r,e){return arguments.length<2?Eo(ir[r]):ir[r]&&ir[r][e]}});var Se=o((Ju,we)=>{var Oo=b();we.exports=Oo({}.isPrototypeOf)});var ar=o((Zu,Ee)=>{var xo=R();Ee.exports=xo("navigator","userAgent")||""});var Ce=o((Qu,je)=>{var Te=p(),ur=ar(),Oe=Te.process,xe=Te.Deno,Ie=Oe&&Oe.versions||xe&&xe.version,Pe=Ie&&Ie.v8,q,K;Pe&&(q=Pe.split("."),K=q[0]>0&&q[0]<4?1:+(q[0]+q[1]));!K&&ur&&(q=ur.match(/Edge\/(\d+)/),(!q||q[1]>=74)&&(q=ur.match(/Chrome\/(\d+)/),q&&(K=+q[1])));je.exports=K});var sr=o((rs,Re)=>{var Le=Ce(),Io=w();Re.exports=!!Object.getOwnPropertySymbols&&!Io(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&Le&&Le<41})});var cr=o((es,Me)=>{var Po=sr();Me.exports=Po&&!Symbol.sham&&typeof Symbol.iterator=="symbol"});var lr=o((ts,Fe)=>{var To=p(),jo=R(),Co=m(),Lo=Se(),Ro=cr(),Mo=To.Object;Fe.exports=Ro?function(r){return typeof r=="symbol"}:function(r){var e=jo("Symbol");return Co(e)&&Lo(e.prototype,Mo(r))}});var _e=o((ns,De)=>{var Fo=p(),Do=Fo.String;De.exports=function(r){try{return Do(r)}catch{return"Object"}}});var vr=o((os,Ne)=>{var _o=p(),No=m(),Ao=_e(),Bo=_o.TypeError;Ne.exports=function(r){if(No(r))return r;throw Bo(Ao(r)+" is not a function")}});var Be=o((is,Ae)=>{var Wo=vr();Ae.exports=function(r,e){var t=r[e];return t==null?void 0:Wo(t)}});var Ue=o((as,We)=>{var Uo=p(),fr=k(),pr=m(),yr=j(),ko=Uo.TypeError;We.exports=function(r,e){var t,n;if(e==="string"&&pr(t=r.toString)&&!yr(n=fr(t,r))||pr(t=r.valueOf)&&!yr(n=fr(t,r))||e!=="string"&&pr(t=r.toString)&&!yr(n=fr(t,r)))return n;throw ko("Can't convert object to primitive value")}});var Ge=o((us,ke)=>{ke.exports=!1});var V=o((ss,Ve)=>{var Ke=p(),Go=Object.defineProperty;Ve.exports=function(r,e){try{Go(Ke,r,{value:e,configurable:!0,writable:!0})}catch{Ke[r]=e}return e}});var $=o((cs,Ye)=>{var Ko=p(),Vo=V(),$e="__core-js_shared__",$o=Ko[$e]||Vo($e,{});Ye.exports=$o});var dr=o((ls,He)=>{var Yo=Ge(),ze=$();(He.exports=function(r,e){return ze[r]||(ze[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.22.0",mode:Yo?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.0/LICENSE",source:"https://github.com/zloirock/core-js"})});var Je=o((vs,Xe)=>{var zo=p(),Ho=or(),Xo=zo.Object;Xe.exports=function(r){return Xo(Ho(r))}});var S=o((fs,Ze)=>{var Jo=b(),Zo=Je(),Qo=Jo({}.hasOwnProperty);Ze.exports=Object.hasOwn||function(e,t){return Qo(Zo(e),t)}});var gr=o((ps,Qe)=>{var ri=b(),ei=0,ti=Math.random(),ni=ri(1 .toString);Qe.exports=function(r){return"Symbol("+(r===void 0?"":r)+")_"+ni(++ei+ti,36)}});var it=o((ys,ot)=>{var oi=p(),ii=dr(),rt=S(),ai=gr(),et=sr(),nt=cr(),C=ii("wks"),I=oi.Symbol,tt=I&&I.for,ui=nt?I:I&&I.withoutSetter||ai;ot.exports=function(r){if(!rt(C,r)||!(et||typeof C[r]=="string")){var e="Symbol."+r;et&&rt(I,r)?C[r]=I[r]:nt&&tt?C[r]=tt(e):C[r]=ui(e)}return C[r]}});var ct=o((ds,st)=>{var si=p(),ci=k(),at=j(),ut=lr(),li=Be(),vi=Ue(),fi=it(),pi=si.TypeError,yi=fi("toPrimitive");st.exports=function(r,e){if(!at(r)||ut(r))return r;var t=li(r,yi),n;if(t){if(e===void 0&&(e="default"),n=ci(t,r,e),!at(n)||ut(n))return n;throw pi("Can't convert object to primitive value")}return e===void 0&&(e="number"),vi(r,e)}});var hr=o((gs,lt)=>{var di=ct(),gi=lr();lt.exports=function(r){var e=di(r,"string");return gi(e)?e:e+""}});var mr=o((hs,ft)=>{var hi=p(),vt=j(),br=hi.document,bi=vt(br)&&vt(br.createElement);ft.exports=function(r){return bi?br.createElement(r):{}}});var qr=o((bs,pt)=>{var mi=x(),qi=w(),wi=mr();pt.exports=!mi&&!qi(function(){return Object.defineProperty(wi("div"),"a",{get:function(){return 7}}).a!=7})});var wr=o(dt=>{var Si=x(),Ei=k(),Oi=ue(),xi=rr(),Ii=G(),Pi=hr(),Ti=S(),ji=qr(),yt=Object.getOwnPropertyDescriptor;dt.f=Si?yt:function(e,t){if(e=Ii(e),t=Pi(t),ji)try{return yt(e,t)}catch{}if(Ti(e,t))return xi(!Ei(Oi.f,e,t),e[t])}});var ht=o((qs,gt)=>{var Ci=x(),Li=w();gt.exports=Ci&&Li(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})});var Sr=o((ws,mt)=>{var bt=p(),Ri=j(),Mi=bt.String,Fi=bt.TypeError;mt.exports=function(r){if(Ri(r))return r;throw Fi(Mi(r)+" is not an object")}});var Pr=o(wt=>{var Di=p(),_i=x(),Ni=qr(),Ai=ht(),Y=Sr(),qt=hr(),Bi=Di.TypeError,Er=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Or="enumerable",xr="configurable",Ir="writable";wt.f=_i?Ai?function(e,t,n){if(Y(e),t=qt(t),Y(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Ir in n&&!n[Ir]){var a=Wi(e,t);a&&a[Ir]&&(e[t]=n.value,n={configurable:xr in n?n[xr]:a[xr],enumerable:Or in n?n[Or]:a[Or],writable:!1})}return Er(e,t,n)}:Er:function(e,t,n){if(Y(e),t=qt(t),Y(n),Ni)try{return Er(e,t,n)}catch{}if("get"in n||"set"in n)throw Bi("Accessors not supported");return"value"in n&&(e[t]=n.value),e}});var z=o((Es,St)=>{var Ui=x(),ki=Pr(),Gi=rr();St.exports=Ui?function(r,e,t){return ki.f(r,e,Gi(1,t))}:function(r,e,t){return r[e]=t,r}});var jr=o((Os,Et)=>{var Ki=b(),Vi=m(),Tr=$(),$i=Ki(Function.toString);Vi(Tr.inspectSource)||(Tr.inspectSource=function(r){return $i(r)});Et.exports=Tr.inspectSource});var It=o((xs,xt)=>{var Yi=p(),zi=m(),Hi=jr(),Ot=Yi.WeakMap;xt.exports=zi(Ot)&&/native code/.test(Hi(Ot))});var jt=o((Is,Tt)=>{var Xi=dr(),Ji=gr(),Pt=Xi("keys");Tt.exports=function(r){return Pt[r]||(Pt[r]=Ji(r))}});var Cr=o((Ps,Ct)=>{Ct.exports={}});var _t=o((Ts,Dt)=>{var Zi=It(),Ft=p(),Lr=b(),Qi=j(),ra=z(),Rr=S(),Mr=$(),ea=jt(),ta=Cr(),Lt="Object already initialized",Dr=Ft.TypeError,na=Ft.WeakMap,H,M,X,oa=function(r){return X(r)?M(r):H(r,{})},ia=function(r){return function(e){var t;if(!Qi(e)||(t=M(e)).type!==r)throw Dr("Incompatible receiver, "+r+" required");return t}};Zi||Mr.state?(E=Mr.state||(Mr.state=new na),Rt=Lr(E.get),Fr=Lr(E.has),Mt=Lr(E.set),H=function(r,e){if(Fr(E,r))throw new Dr(Lt);return e.facade=r,Mt(E,r,e),e},M=function(r){return Rt(E,r)||{}},X=function(r){return Fr(E,r)}):(P=ea("state"),ta[P]=!0,H=function(r,e){if(Rr(r,P))throw new Dr(Lt);return e.facade=r,ra(r,P,e),e},M=function(r){return Rr(r,P)?r[P]:{}},X=function(r){return Rr(r,P)});var E,Rt,Fr,Mt,P;Dt.exports={set:H,get:M,has:X,enforce:oa,getterFor:ia}});var Bt=o((js,At)=>{var _r=x(),aa=S(),Nt=Function.prototype,ua=_r&&Object.getOwnPropertyDescriptor,Nr=aa(Nt,"name"),sa=Nr&&function(){}.name==="something",ca=Nr&&(!_r||_r&&ua(Nt,"name").configurable);At.exports={EXISTS:Nr,PROPER:sa,CONFIGURABLE:ca}});var Kt=o((Cs,Gt)=>{var la=p(),Wt=m(),va=S(),Ut=z(),fa=V(),pa=jr(),kt=_t(),ya=Bt().CONFIGURABLE,da=kt.get,ga=kt.enforce,ha=String(String).split("String");(Gt.exports=function(r,e,t,n){var a=n?!!n.unsafe:!1,f=n?!!n.enumerable:!1,c=n?!!n.noTargetGet:!1,s=n&&n.name!==void 0?n.name:e,l;if(Wt(t)&&(String(s).slice(0,7)==="Symbol("&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!va(t,"name")||ya&&t.name!==s)&&Ut(t,"name",s),l=ga(t),l.source||(l.source=ha.join(typeof s=="string"?s:""))),r===la){f?r[e]=t:fa(e,t);return}else a?!c&&r[e]&&(f=!0):delete r[e];f?r[e]=t:Ut(r,e,t)})(Function.prototype,"toString",function(){return Wt(this)&&da(this).source||pa(this)})});var Ar=o((Ls,Vt)=>{var ba=Math.ceil,ma=Math.floor;Vt.exports=function(r){var e=+r;return e!==e||e===0?0:(e>0?ma:ba)(e)}});var Yt=o((Rs,$t)=>{var qa=Ar(),wa=Math.max,Sa=Math.min;$t.exports=function(r,e){var t=qa(r);return t<0?wa(t+e,0):Sa(t,e)}});var Ht=o((Ms,zt)=>{var Ea=Ar(),Oa=Math.min;zt.exports=function(r){return r>0?Oa(Ea(r),9007199254740991):0}});var Jt=o((Fs,Xt)=>{var xa=Ht();Xt.exports=function(r){return xa(r.length)}});var rn=o((Ds,Qt)=>{var Ia=G(),Pa=Yt(),Ta=Jt(),Zt=function(r){return function(e,t,n){var a=Ia(e),f=Ta(a),c=Pa(n,f),s;if(r&&t!=t){for(;f>c;)if(s=a[c++],s!=s)return!0}else for(;f>c;c++)if((r||c in a)&&a[c]===t)return r||c||0;return!r&&-1}};Qt.exports={includes:Zt(!0),indexOf:Zt(!1)}});var nn=o((_s,tn)=>{var ja=b(),Br=S(),Ca=G(),La=rn().indexOf,Ra=Cr(),en=ja([].push);tn.exports=function(r,e){var t=Ca(r),n=0,a=[],f;for(f in t)!Br(Ra,f)&&Br(t,f)&&en(a,f);for(;e.length>n;)Br(t,f=e[n++])&&(~La(a,f)||en(a,f));return a}});var an=o((Ns,on)=>{on.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]});var sn=o(un=>{var Ma=nn(),Fa=an(),Da=Fa.concat("length","prototype");un.f=Object.getOwnPropertyNames||function(e){return Ma(e,Da)}});var ln=o(cn=>{cn.f=Object.getOwnPropertySymbols});var fn=o((Ws,vn)=>{var _a=R(),Na=b(),Aa=sn(),Ba=ln(),Wa=Sr(),Ua=Na([].concat);vn.exports=_a("Reflect","ownKeys")||function(e){var t=Aa.f(Wa(e)),n=Ba.f;return n?Ua(t,n(e)):t}});var dn=o((Us,yn)=>{var pn=S(),ka=fn(),Ga=wr(),Ka=Pr();yn.exports=function(r,e,t){for(var n=ka(e),a=Ka.f,f=Ga.f,c=0;c<n.length;c++){var s=n[c];!pn(r,s)&&!(t&&pn(t,s))&&a(r,s,f(e,s))}}});var hn=o((ks,gn)=>{var Va=w(),$a=m(),Ya=/#|\.prototype\./,F=function(r,e){var t=Ha[za(r)];return t==Ja?!0:t==Xa?!1:$a(e)?Va(e):!!e},za=F.normalize=function(r){return String(r).replace(Ya,".").toLowerCase()},Ha=F.data={},Xa=F.NATIVE="N",Ja=F.POLYFILL="P";gn.exports=F});var Ur=o((Gs,bn)=>{var Wr=p(),Za=wr().f,Qa=z(),ru=Kt(),eu=V(),tu=dn(),nu=hn();bn.exports=function(r,e){var t=r.target,n=r.global,a=r.stat,f,c,s,l,d,i;if(n?c=Wr:a?c=Wr[t]||eu(t,{}):c=(Wr[t]||{}).prototype,c)for(s in e){if(d=e[s],r.noTargetGet?(i=Za(c,s),l=i&&i.value):l=c[s],f=nu(n?s:t+(a?".":"#")+s,r.forced),!f&&l!==void 0){if(typeof d==typeof l)continue;tu(d,l)}(r.sham||l&&l.sham)&&Qa(d,"sham",!0),ru(c,s,d,r)}}});var En=o((Ks,Sn)=>{var ou=L(),wn=Function.prototype,mn=wn.apply,qn=wn.call;Sn.exports=typeof Reflect=="object"&&Reflect.apply||(ou?qn.bind(mn):function(){return qn.apply(mn,arguments)})});var In=o((Vs,xn)=>{var On=b(),iu=vr(),au=L(),uu=On(On.bind);xn.exports=function(r,e){return iu(r),e===void 0?r:au?uu(r,e):function(){return r.apply(e,arguments)}}});var Tn=o(($s,Pn)=>{var su=R();Pn.exports=su("document","documentElement")});var Cn=o((Ys,jn)=>{var cu=b();jn.exports=cu([].slice)});var Rn=o((zs,Ln)=>{var lu=p(),vu=lu.TypeError;Ln.exports=function(r,e){if(r<e)throw vu("Not enough arguments");return r}});var Fn=o((Hs,Mn)=>{var fu=ar();Mn.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(fu)});var _n=o((Xs,Dn)=>{var pu=tr(),yu=p();Dn.exports=pu(yu.process)=="process"});var Xr=o((Js,Kn)=>{var h=p(),du=En(),gu=In(),Nn=m(),hu=S(),bu=w(),An=Tn(),mu=Cn(),Bn=mr(),qu=Rn(),wu=Fn(),Su=_n(),Yr=h.setImmediate,zr=h.clearImmediate,Eu=h.process,kr=h.Dispatch,Ou=h.Function,Wn=h.MessageChannel,xu=h.String,Gr=0,D={},Un="onreadystatechange",N,T,Kr,Vr;try{N=h.location}catch{}var Hr=function(r){if(hu(D,r)){var e=D[r];delete D[r],e()}},$r=function(r){return function(){Hr(r)}},kn=function(r){Hr(r.data)},Gn=function(r){h.postMessage(xu(r),N.protocol+"//"+N.host)};(!Yr||!zr)&&(Yr=function(e){qu(arguments.length,1);var t=Nn(e)?e:Ou(e),n=mu(arguments,1);return D[++Gr]=function(){du(t,void 0,n)},T(Gr),Gr},zr=function(e){delete D[e]},Su?T=function(r){Eu.nextTick($r(r))}:kr&&kr.now?T=function(r){kr.now($r(r))}:Wn&&!wu?(Kr=new Wn,Vr=Kr.port2,Kr.port1.onmessage=kn,T=gu(Vr.postMessage,Vr)):h.addEventListener&&Nn(h.postMessage)&&!h.importScripts&&N&&N.protocol!=="file:"&&!bu(Gn)?(T=Gn,h.addEventListener("message",kn,!1)):Un in Bn("script")?T=function(r){An.appendChild(Bn("script"))[Un]=function(){An.removeChild(this),Hr(r)}}:T=function(r){setTimeout($r(r),0)});Kn.exports={set:Yr,clear:zr}});var $n=o(()=>{var Iu=Ur(),Pu=p(),Vn=Xr().clear;Iu({global:!0,bind:!0,enumerable:!0,forced:Pu.clearImmediate!==Vn},{clearImmediate:Vn})});var zn=o(()=>{var Tu=Ur(),ju=p(),Yn=Xr().set;Tu({global:!0,bind:!0,enumerable:!0,forced:ju.setImmediate!==Yn},{setImmediate:Yn})});$n();zn();import{hydrate as Mu}from"https://spike.land/dist/react.mjs";function Hn(r){let e=new Uint8Array(r.length);for(let a=0;a<e.length;a++)e[a]=r.charCodeAt(a);let t=new Uint16Array(e.buffer),n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n}import{jsx as Fu}from"https://spike.land/dist/emotion.mjs";try{self["workbox:window:6.5.2"]&&_()}catch{}function Xn(r,e){return new Promise(function(t){var n=new MessageChannel;n.port1.onmessage=function(a){t(a.data)},r.postMessage(e,[n.port2])})}function Jn(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Zn(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Cu(r,e){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=function(a,f){if(a){if(typeof a=="string")return Zn(a,f);var c=Object.prototype.toString.call(a).slice(8,-1);return c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set"?Array.from(a):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Zn(a,f):void 0}}(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var n=0;return function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(t=r[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Jr=function(){var r=this;this.promise=new Promise(function(e,t){r.resolve=e,r.reject=t})};function Zr(r,e){var t=location.href;return new URL(r,t).href===new URL(e,t).href}var A=function(r,e){this.type=r,Object.assign(this,e)};function J(r,e,t){return t?e?e(r):r:(r&&r.then||(r=Promise.resolve(r)),e?r.then(e):r)}function Lu(){}var Ru={type:"SKIP_WAITING"};function Qn(r,e){if(!e)return r&&r.then?r.then(Lu):Promise.resolve()}var ro=function(r){var e,t;function n(l,d){var i,u;return d===void 0&&(d={}),(i=r.call(this)||this).nn={},i.tn=0,i.rn=new Jr,i.en=new Jr,i.on=new Jr,i.un=0,i.an=new Set,i.cn=function(){var y=i.fn,v=y.installing;i.tn>0||!Zr(v.scriptURL,i.sn.toString())||performance.now()>i.un+6e4?(i.vn=v,y.removeEventListener("updatefound",i.cn)):(i.hn=v,i.an.add(v),i.rn.resolve(v)),++i.tn,v.addEventListener("statechange",i.ln)},i.ln=function(y){var v=i.fn,g=y.target,O=g.state,Z=g===i.vn,Q={sw:g,isExternal:Z,originalEvent:y};!Z&&i.mn&&(Q.isUpdate=!0),i.dispatchEvent(new A(O,Q)),O==="installed"?i.wn=self.setTimeout(function(){O==="installed"&&v.waiting===g&&i.dispatchEvent(new A("waiting",Q))},200):O==="activating"&&(clearTimeout(i.wn),Z||i.en.resolve(g))},i.dn=function(y){var v=i.hn,g=v!==navigator.serviceWorker.controller;i.dispatchEvent(new A("controlling",{isExternal:g,originalEvent:y,sw:v,isUpdate:i.mn})),g||i.on.resolve(v)},i.gn=(u=function(y){var v=y.data,g=y.ports,O=y.source;return J(i.getSW(),function(){i.an.has(O)&&i.dispatchEvent(new A("message",{data:v,originalEvent:y,ports:g,sw:O}))})},function(){for(var y=[],v=0;v<arguments.length;v++)y[v]=arguments[v];try{return Promise.resolve(u.apply(this,y))}catch(g){return Promise.reject(g)}}),i.sn=l,i.nn=d,navigator.serviceWorker.addEventListener("message",i.gn),i}t=r,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var a,f,c,s=n.prototype;return s.register=function(l){var d=(l===void 0?{}:l).immediate,i=d!==void 0&&d;try{var u=this;return function(y,v){var g=y();return g&&g.then?g.then(v):v(g)}(function(){if(!i&&document.readyState!=="complete")return Qn(new Promise(function(y){return window.addEventListener("load",y)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),J(u.bn(),function(y){u.fn=y,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var v=u.fn.waiting;return v&&Zr(v.scriptURL,u.sn.toString())&&(u.hn=v,Promise.resolve().then(function(){u.dispatchEvent(new A("waiting",{sw:v,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(y){return Promise.reject(y)}},s.update=function(){try{return this.fn?Qn(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(l){try{return J(this.getSW(),function(d){return Xn(d,l)})}catch(d){return Promise.reject(d)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Xn(this.fn.waiting,Ru)},s.pn=function(){var l=navigator.serviceWorker.controller;return l&&Zr(l.scriptURL,this.sn.toString())?l:void 0},s.bn=function(){try{var l=this;return function(d,i){try{var u=d()}catch(y){return i(y)}return u&&u.then?u.then(void 0,i):u}(function(){return J(navigator.serviceWorker.register(l.sn,l.nn),function(d){return l.un=performance.now(),d})},function(d){throw d})}catch(d){return Promise.reject(d)}},a=n,(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Jn(a.prototype,f),c&&Jn(a,c),n}(function(){function r(){this.Pn=new Map}var e=r.prototype;return e.addEventListener=function(t,n){this.Sn(t).add(n)},e.removeEventListener=function(t,n){this.Sn(t).delete(n)},e.dispatchEvent=function(t){t.target=this;for(var n,a=Cu(this.Sn(t.type));!(n=a()).done;)(0,n.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},r}());"serviceWorker"in navigator&&new ro("/sw.js").register();var B=location.pathname.split("/"),Du=(B[1]==="api"&&B[2]==="room"?B[3]:(B.pop()||B.pop()).slice(-12))||"code-main",eo=async r=>{globalThis.monacoEditorModule=import("./chunks/editor-EVRFJQH4.mjs"),globalThis.renderPreviewModule=import("./chunks/renderPreviewWindow-YRN64Y3Z.mjs");let e=document.querySelector("#root");if(Mu(e,Fu(r)),console.log("HYDRATED"),location.href.endsWith("hydrated"))return;globalThis.App=r;let{join:t}=await import("./chunks/ws-EESJFX2C.mjs");t(r)},cc=async r=>{let e=(await import(to(Hn(r)))).default;eo(e)},lc=async()=>{if(globalThis.App)return;let e=await(await fetch(`https://spike.land/api/room/${Du}/session`)).json(),t=document.getElementById("root")||document.createElement("div");t.innerHTML=`<style>${e.css}</style><div id="zbody">${e.html}</div>`;let n=(await import(to(e.transpiled))).default;eo(n)};function to(r){let e=new Blob([r],{type:"application/javascript"});return URL.createObjectURL(e)}export{to as createJsBlob,cc as hydrateBinary,lc as run};
