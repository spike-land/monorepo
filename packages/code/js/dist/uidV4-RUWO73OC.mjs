import"./chunk-UPO26O35.mjs";var r,a=new Uint8Array(16);function f(){if(!r&&(r=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function g(t){return typeof t=="string"&&i.test(t)}var n=[];for(s=0;s<256;++s)n.push((s+256).toString(16).substr(1));var s;function p(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase();if(!g(o))throw TypeError("Stringified UUID is invalid");return o}function y(t,e,o){t=t||{};var u=t.random||(t.rng||f)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,e){o=o||0;for(var d=0;d<16;++d)e[o+d]=u[d];return e}return p(u)}export{y as default};
//# sourceMappingURL=uidV4-RUWO73OC.mjs.map
