import{a as u,b as f,c as S,d as m,e as p,f as d,g as v,h as k,i as Y,j as N,k as Z}from"./chunks/chunk-TOHHK2CV.mjs";import{d as Ae}from"./chunks/chunk-UT4UBVWW.mjs";var z={};Ae(z,{Children:()=>he,Component:()=>p,Fragment:()=>m,PureComponent:()=>A,StrictMode:()=>qe,Suspense:()=>R,SuspenseList:()=>C,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Re,cloneElement:()=>Se,createContext:()=>N,createElement:()=>f,createFactory:()=>ge,createPortal:()=>ye,createRef:()=>S,default:()=>Ye,findDOMNode:()=>Ne,flushSync:()=>Oe,forwardRef:()=>de,hydrate:()=>Ce,isValidElement:()=>B,lazy:()=>ve,memo:()=>pe,render:()=>be,unmountComponentAtNode:()=>ke,unstable_batchedUpdates:()=>He,useCallback:()=>V,useContext:()=>I,useDebugValue:()=>M,useEffect:()=>F,useErrorBoundary:()=>De,useImperativeHandle:()=>T,useLayoutEffect:()=>w,useMemo:()=>E,useReducer:()=>P,useRef:()=>L,useState:()=>O,version:()=>je});var y,i,J,x=0,ne=[],X=u.__b,G=u.__r,K=u.diffed,Q=u.__c,ee=u.unmount;function b(e,t){u.__h&&u.__h(i,e,x||t),x=0;var n=i.__H||(i.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function O(e){return x=1,P(re,e)}function P(e,t,n){var r=b(y++,2);return r.t=e,r.__c||(r.__=[n?n(t):re(void 0,t),function(_){var o=r.t(r.__[0],_);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=i),r.__}function F(e,t){var n=b(y++,3);!u.__s&&W(n.__H,t)&&(n.__=e,n.__H=t,i.__H.__h.push(n))}function w(e,t){var n=b(y++,4);!u.__s&&W(n.__H,t)&&(n.__=e,n.__H=t,i.__h.push(n))}function L(e){return x=5,E(function(){return{current:e}},[])}function T(e,t,n){x=6,w(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function E(e,t){var n=b(y++,7);return W(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function V(e,t){return x=8,E(function(){return e},t)}function I(e){var t=i.context[e.__c],n=b(y++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(i)),t.props.value):e.__}function M(e,t){u.useDebugValue&&u.useDebugValue(t?t(e):e)}function De(e){var t=b(y++,10),n=O();return t.__=e,i.componentDidCatch||(i.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Ue(){for(var e;e=ne.shift();)if(e.__P)try{e.__H.__h.forEach(H),e.__H.__h.forEach(U),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){i=null,X&&X(e)},u.__r=function(e){G&&G(e),y=0;var t=(i=e.__c).__H;t&&(t.__h.forEach(H),t.__h.forEach(U),t.__h=[])},u.diffed=function(e){K&&K(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ne.push(t)!==1&&J===u.requestAnimationFrame||((J=u.requestAnimationFrame)||function(n){var r,_=function(){clearTimeout(o),te&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(_,100);te&&(r=requestAnimationFrame(_))})(Ue)),i=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(H),n.__h=n.__h.filter(function(r){return!r.__||U(r)})}catch(r){t.some(function(_){_.__h&&(_.__h=[])}),t=[],u.__e(r,n.__v)}}),Q&&Q(e,t)},u.unmount=function(e){ee&&ee(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{H(r)}catch(_){t=_}}),t&&u.__e(t,n.__v))};var te=typeof requestAnimationFrame=="function";function H(e){var t=i,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),i=t}function U(e){var t=i;e.__c=e.__(),i=t}function W(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function re(e,t){return typeof t=="function"?t(e):t}function fe(e,t){for(var n in t)e[n]=t[n];return e}function $(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function A(e){this.props=e}function pe(e,t){function n(_){var o=this.props.ref,a=o==_.ref;return!a&&o&&(o.call?o(null):o.current=null),t?!t(this.props,_)||!a:$(this.props,_)}function r(_){return this.shouldComponentUpdate=n,f(e,_)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(A.prototype=new p).isPureReactComponent=!0,A.prototype.shouldComponentUpdate=function(e,t){return $(this.props,e)||$(this.state,t)};var oe=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),oe&&oe(e)};var Fe=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function de(e){function t(n,r){var _=fe({},n);return delete _.ref,e(_,(r=n.ref||r)&&(typeof r!="object"||"current"in r)?r:null)}return t.$$typeof=Fe,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var _e=function(e,t){return e==null?null:d(d(e).map(t))},he={map:_e,forEach:_e,count:function(e){return e?d(e).length:0},only:function(e){var t=d(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:d},Le=u.__e;u.__e=function(e,t,n){if(e.then){for(var r,_=t;_=_.__;)if((r=_.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Le(e,t,n)};var ue=u.unmount;function R(){this.__u=0,this.t=null,this.__b=null}function me(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ve(e){var t,n,r;function _(o){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return f(n,o)}return _.displayName="Lazy",_.__f=!0,_}function C(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ue&&ue(e)},(R.prototype=new p).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var _=me(r.__v),o=!1,a=function(){o||(o=!0,n.__R=null,_?_(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__e){var h=r.state.__e;r.__v.__k[0]=function Pe(s,q,D){return s&&(s.__v=null,s.__k=s.__k&&s.__k.map(function(we){return Pe(we,q,D)}),s.__c&&s.__c.__P===q&&(s.__e&&D.insertBefore(s.__e,s.__d),s.__c.__e=!0,s.__c.__P=D)),s}(h,h.__c.__P,h.__c.__O)}var j;for(r.setState({__e:r.__b=null});j=r.t.pop();)j.forceUpdate()}},g=t.__h===!0;r.__u++||g||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(a,a)},R.prototype.componentWillUnmount=function(){this.t=[]},R.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(a,l,g){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),a.__c.__H=null),(a=fe({},a)).__c!=null&&(a.__c.__P===g&&(a.__c.__P=l),a.__c=null),a.__k=a.__k&&a.__k.map(function(h){return o(h,l,g)})),a}(this.__b,n,r.__O=r.__P)}this.__b=null}var _=t.__e&&f(m,null,e.fallback);return _&&(_.__h=null),[f(m,null,t.__e?null:e.children),_]};var ae=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Te(e){return this.getChildContext=function(){return e.context},e.children}function Ve(e){var t=this,n=e.i;t.componentWillUnmount=function(){v(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,_){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),v(f(Te,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ye(e,t){return f(Ve,{__v:e,i:t})}(C.prototype=new p).__e=function(e){var t=this,n=me(t.__v),r=t.o.get(e);return r[0]++,function(_){var o=function(){t.props.revealOrder?(r.push(_),ae(t,e,r)):_()};n?n(o):o()}},C.prototype.render=function(e){this.u=null,this.o=new Map;var t=d(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},C.prototype.componentDidUpdate=C.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){ae(e,n,t)})};var xe=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Ie=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Me=typeof document!="undefined",We=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function be(e,t,n){return t.__k==null&&(t.textContent=""),v(e,t),typeof n=="function"&&n(),e?e.__c:null}function Ce(e,t,n){return k(e,t),typeof n=="function"&&n(),e?e.__c:null}p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(p.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ce=u.event;function $e(){}function Be(){return this.cancelBubble}function ze(){return this.defaultPrevented}u.event=function(e){return ce&&(e=ce(e)),e.persist=$e,e.isPropagationStopped=Be,e.isDefaultPrevented=ze,e.nativeEvent=e};var Ee,ie={configurable:!0,get:function(){return this.class}},se=u.vnode;u.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var _=t.indexOf("-")===-1;for(var o in r={},n){var a=n[o];Me&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&a==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&a===!0?a="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!We(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():_&&Ie.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),r[o]=a)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=d(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=d(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(ie.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ie))}e.$$typeof=xe,se&&se(e)};var le=u.__r;u.__r=function(e){le&&le(e),Ee=e.__c};var Re={ReactCurrentDispatcher:{current:{readContext:function(e){return Ee.__n[e.__c].props.value}}}},je="17.0.2";function ge(e){return f.bind(null,e)}function B(e){return!!e&&e.$$typeof===xe}function Se(e){return B(e)?Y.apply(null,arguments):e}function ke(e){return!!e.__k&&(v(null,e),!0)}function Ne(e){return e&&(e.base||e.nodeType===1&&e)||null}var He=function(e,t){return e(t)},Oe=function(e,t){return e(t)},qe=m,Ye={useState:O,useReducer:P,useEffect:F,useLayoutEffect:w,useRef:L,useImperativeHandle:T,useMemo:E,useCallback:V,useContext:I,useDebugValue:M,version:"17.0.2",Children:he,render:be,hydrate:Ce,unmountComponentAtNode:ke,createPortal:ye,createElement:f,createContext:N,createFactory:ge,cloneElement:Se,createRef:S,Fragment:m,isValidElement:B,findDOMNode:Ne,Component:p,PureComponent:A,memo:pe,forwardRef:de,flushSync:Oe,unstable_batchedUpdates:He,StrictMode:m,Suspense:R,SuspenseList:C,lazy:ve,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Re};var nt=e=>({render:t=>v(t,e)}),rt=(e,t)=>k(t,e),c={...Z,...z},Ze=c,{createContext:ot}=c,{useDebugValue:_t}=c,{useState:ut}=c,{useId:at}=c,{useRef:ct}=c,{useContext:it}=c,{useLayoutEffect:st}=c,{useEffect:lt}=c,{useReducer:ft}=c,{useCallback:pt}=c,{forwardRef:dt}=c,{JSXInternal:ht}=c,{createElement:mt}=c,{createFactory:vt}=c,{createRef:yt}=c,{Fragment:xt}=c,{Component:bt}=c,{Suspense:Ct}=c,{isValidElement:Et}=c,{memo:Rt}=c,{useImperativeHandle:gt}=c,{Children:St}=c,{lazy:kt}=c,{useMemo:Nt}=c,{cloneElement:Ht}=c,Ot=Ze;export{St as Children,bt as Component,xt as Fragment,ht as JSXInternal,Ze as React,Ct as Suspense,Ht as cloneElement,ot as createContext,mt as createElement,vt as createFactory,yt as createRef,nt as createRoot,Ot as default,dt as forwardRef,rt as hydrateRoot,Et as isValidElement,kt as lazy,Rt as memo,v as render,pt as useCallback,it as useContext,_t as useDebugValue,lt as useEffect,at as useId,gt as useImperativeHandle,st as useLayoutEffect,Nt as useMemo,ft as useReducer,ct as useRef,ut as useState};
