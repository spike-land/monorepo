import"./chunks/chunk-AH6KKUH7.mjs";import{hydrate as z}from"https://spike.land/dist/react.mjs";function j(t){let n=new Uint8Array(t.length);for(let s=0;s<n.length;s++)n[s]=t.charCodeAt(s);let e=new Uint16Array(n.buffer),o="";for(let s=0;s<e.length;s++)o+=String.fromCharCode(e[s]);return o}import{jsx as G}from"https://spike.land/dist/emotion.mjs";var w,B=new Uint8Array(16);function V(){if(!w&&(w=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(B)}var D=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function O(t){return typeof t=="string"&&D.test(t)}var l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function M(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(l[t[n+0]]+l[t[n+1]]+l[t[n+2]]+l[t[n+3]]+"-"+l[t[n+4]]+l[t[n+5]]+"-"+l[t[n+6]]+l[t[n+7]]+"-"+l[t[n+8]]+l[t[n+9]]+"-"+l[t[n+10]]+l[t[n+11]]+l[t[n+12]]+l[t[n+13]]+l[t[n+14]]+l[t[n+15]]).toLowerCase();if(!O(e))throw new TypeError("Stringified UUID is invalid");return e}function L(t,n,e){t=t||{};let o=t.random||(t.rng||V)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){e=e||0;for(let s=0;s<16;++s)n[e+s]=o[s];return n}return M(o)}try{self["workbox:window:6.4.1"]&&_()}catch(t){}function W(t,n){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(s){e(s.data)},t.postMessage(n,[o.port2])})}function A(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function $(t,n){var e;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(e=function(s,m){if(s){if(typeof s=="string")return k(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);return p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set"?Array.from(s):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?k(s,m):void 0}}(t))||n&&t&&typeof t.length=="number"){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=t[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.4.1"]&&_()}catch(t){}var U=function(){var t=this;this.promise=new Promise(function(n,e){t.resolve=n,t.reject=e})};function P(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var g=function(t,n){this.type=t,Object.assign(this,n)};function b(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function H(){}var q={type:"SKIP_WAITING"};function x(t,n){if(!n)return t&&t.then?t.then(H):Promise.resolve()}var C=function(t){var n,e;function o(d,u){var r,i;return u===void 0&&(u={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new U,r.en=new U,r.on=new U,r.un=0,r.an=new Set,r.cn=function(){var c=r.fn,a=c.installing;r.tn>0||!P(a.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=a,c.removeEventListener("updatefound",r.cn)):(r.hn=a,r.an.add(a),r.rn.resolve(a)),++r.tn,a.addEventListener("statechange",r.ln)},r.ln=function(c){var a=r.fn,f=c.target,v=f.state,S=f===r.vn,E={sw:f,isExternal:S,originalEvent:c};!S&&r.mn&&(E.isUpdate=!0),r.dispatchEvent(new g(v,E)),v==="installed"?r.wn=self.setTimeout(function(){v==="installed"&&a.waiting===f&&r.dispatchEvent(new g("waiting",E))},200):v==="activating"&&(clearTimeout(r.wn),S||r.en.resolve(f))},r.dn=function(c){var a=r.hn,f=a!==navigator.serviceWorker.controller;r.dispatchEvent(new g("controlling",{isExternal:f,originalEvent:c,sw:a,isUpdate:r.mn})),f||r.on.resolve(a)},r.gn=(i=function(c){var a=c.data,f=c.ports,v=c.source;return b(r.getSW(),function(){r.an.has(v)&&r.dispatchEvent(new g("message",{data:a,originalEvent:c,ports:f,sw:v}))})},function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];try{return Promise.resolve(i.apply(this,c))}catch(f){return Promise.reject(f)}}),r.sn=d,r.nn=u,navigator.serviceWorker.addEventListener("message",r.gn),r}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var s,m,p,h=o.prototype;return h.register=function(d){var u=(d===void 0?{}:d).immediate,r=u!==void 0&&u;try{var i=this;return function(c,a){var f=c();return f&&f.then?f.then(a):a(f)}(function(){if(!r&&document.readyState!=="complete")return x(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),b(i.bn(),function(c){i.fn=c,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var a=i.fn.waiting;return a&&P(a.scriptURL,i.sn.toString())&&(i.hn=a,Promise.resolve().then(function(){i.dispatchEvent(new g("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn})})}catch(c){return Promise.reject(c)}},h.update=function(){try{return this.fn?x(this.fn.update()):void 0}catch(d){return Promise.reject(d)}},h.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(d){try{return b(this.getSW(),function(u){return W(u,d)})}catch(u){return Promise.reject(u)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&W(this.fn.waiting,q)},h.pn=function(){var d=navigator.serviceWorker.controller;return d&&P(d.scriptURL,this.sn.toString())?d:void 0},h.bn=function(){try{var d=this;return function(u,r){try{var i=u()}catch(c){return r(c)}return i&&i.then?i.then(void 0,r):i}(function(){return b(navigator.serviceWorker.register(d.sn,d.nn),function(u){return d.un=performance.now(),u})},function(u){throw u})}catch(u){return Promise.reject(u)}},s=o,(m=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&A(s.prototype,m),p&&A(s,p),o}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(e,o){this.Sn(e).add(o)},n.removeEventListener=function(e,o){this.Sn(e).delete(o)},n.dispatchEvent=function(e){e.target=this;for(var o,s=$(this.Sn(e.type));!(o=s()).done;)(0,o.value)(e)},n.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},t}());"serviceWorker"in navigator&&new C("/sw.js").register();var y=location.pathname.split("/");window.aniStart=Date.now();var R=(y[1]==="api"&&y[2]==="room"?y[3]:(y.pop()||y.pop()).slice(-12))||"code-main",J=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||L()).slice(0,8),T=async t=>{let n=document.querySelector("#root");if(z(n,G(t)),console.log("HYDRATED"),location.href.endsWith("hydrated"))return;globalThis.App=t;let{join:e}=await import("./chunks/ws-OPWVZ2YJ.mjs");await K(2e3),e(R,J)},et=async t=>{let n=(await import(I(j(t)))).default;T(n)},rt=async()=>{if(globalThis.App)return;let n=await(await fetch(`https://spike.land/api/room/${R}/session`)).json(),e=document.getElementById("root");e.innerHTML=`<style>${n.css}</style><div id="zbody">${n.html}</div>`;let o=(await import(I(n.transpiled))).default;T(o)};function I(t){let n=new Blob([t],{type:"application/javascript"});return URL.createObjectURL(n)}async function K(t){return new Promise(n=>{setTimeout(()=>{n()},t)})}export{et as hydrateBinary,rt as run};
