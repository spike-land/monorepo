var k=Object.create;var f=Object.defineProperty,l=Object.defineProperties,m=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,p=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var g=(a,b,c)=>b in a?f(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,t=(a,b)=>{for(var c in b||(b={}))i.call(b,c)&&g(a,c,b[c]);if(h)for(var c of h(b))q.call(b,c)&&g(a,c,b[c]);return a},u=(a,b)=>l(a,n(b)),r=a=>f(a,"__esModule",{value:!0});var v=(a=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(a,{get:(b,c)=>(typeof require!="undefined"?require:b)[c]}):a)(function(a){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+a+'" is not supported')});var w=(a,b)=>()=>(a&&(b=a(a=0)),b);var x=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),y=(a,b)=>{for(var c in b)f(a,c,{get:b[c],enumerable:!0})},s=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of o(b))!i.call(a,e)&&(c||e!=="default")&&f(a,e,{get:()=>b[e],enumerable:!(d=m(b,e))||d.enumerable});return a},z=(a,b)=>s(r(f(a!=null?k(p(a)):{},"default",!b&&a&&a.__esModule?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a);var A=(a,b,c)=>(g(a,typeof b!="symbol"?b+"":b,c),c),j=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};var B=(a,b,c)=>(j(a,b,"read from private field"),c?c.call(a):b.get(a)),C=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},D=(a,b,c,d)=>(j(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);export{t as a,u as b,v as c,w as d,x as e,y as f,z as g,A as h,B as i,C as j,D as k};
