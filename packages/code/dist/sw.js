"use strict";(()=>{var r=new BroadcastChannel(location.origin),o={};r.onmessage=s=>{console.log(s),s.data.type==="set-mock"&&(o[s.data.filePath]=s.data.content)};(void 0).onfetch=s=>new URL(s.request.url).href==="/mocks"?s.respondWith(new Response(JSON.stringify(o),{headers:{"Content-Type":"application/json;charset=UTF-8","Cache-Control":"no-cache"}})):o[s.request.url]?s.respondWith(new Response(o[s.request.url])):s.respondWith(fetch(s.request));})();
