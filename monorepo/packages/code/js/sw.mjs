self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  self.registration.unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (clients) {
      clients.forEach((client) => client.navigate(client.url));
    });
});
export {};

//import { precacheAndRoute } from "workbox-precaching";
//import { registerRoute } from "workbox-routing";
//import { StaleWhileRevalidate } from "workbox-strategies";
//import { CacheableResponsePlugin } from "workbox-cacheable-response";
// import path from "path-browserify";
// import git from "isomorphic-git";
// import http from "isomorphic-git/http/web";
// import LightningFS from "@isomorphic-git/lightning-fs";

// const fs = new LightningFS("fs");

// const dir = "/test-clone";
// git.clone({
//   fs,
//   http,
//   dir,
//   url: "https://github.com/spike-land/monorepo",
//   corsProxy: "https://cors.isomorphic-git.org",
// }).then(console.log);

//declare const self: ServiceWorkerGlobalScope;

//precacheAndRoute(self.__WB_MANIFEST);
// const { registerRoute } = workbox.routing;
// const { CacheFirst } = workbox.strategies;
// const { CacheableResponsePlugin } = workbox.cacheableResponse;

// // Const {CacheFirst} =  self.workbox.strategies;

//registerRoute(
//  ({ request }) =>
//    (request.url.includes("unpkg.com") && request.url.includes("@")) ||
//   (request.url.includes("jspm.io") && request.url.includes("@")) ||
//  (request.url.includes("/chunks")) ||
//  (request.url.includes("esm.sh") && request.url.includes("@")),
// new StaleWhileRevalidate({
// matchOptions: {
// ignoreVary: true,
//ignoreSearch: true,
// },
// plugins: [
// new CacheableResponsePlugin({ statuses: [0, 200] }),
// ],
//  }),/
//);

// let SW_VERSION = null;

// addEventListener("message", async (event) => {
//   if (event.data.type === "GET_VERSION") {
//     const resp = await fetch("./package.json");

//     const json = await resp.json();
//     SW_VERSION = json.version;

//     event.ports[0].postMessage(SW_VERSION);
//   }

//   // If (event.data.type === 'GET_PACKAGE_JSON') {

//   //   const resp = await fetch("https://spike.land/package.json");

//   //   const json = await resp.json();

//   //   event.ports[0].postMessage(JSON.stringify(json));
//   // }
// });

// // self.importScripts(
// //   "https://unpkg.com/ipfs@0.55.3/public/index.min.js",
// // );

// // // self.importScripts(
// // //   ""
// // //   // "https://unpkg.com/ipfs-message-port-client@0.6.3/public/index.min.js"
// // // )

// // // let port;

// // // const workerSrc = "./js/workers/ipfsWorker.js";

// // // if (typeof SharedWorker !== "undefined" ) {
// // //   const ipfsWorker = new SharedWorker(
// // //     workerSrc,
// // //   );
// // //   port = ipfsWorker.port;
// // // } else {
// // //   const worker = new Worker(workerSrc);

// // //   const { port1, port2 } = new MessageChannel();
// // //   const msg = {
// // //     clientInit: true,
// // //     port: port1,
// // //   };

// // //   worker.postMessage(msg, [port1]);

// // //   // eslint-disable-next-line no-unused-vars
// // //   port = port2;
// // // }

// // // const ipfsClient = self.IpfsMessagePortClient.from(port);

// // function concat (arrays, length) {
// //   if (!length) {
// //     length = arrays.reduce((acc, curr) => acc + curr.length, 0)
// //   }

// //   const output = new Uint8Array(length)
// //   let offset = 0

// //   for (const arr of arrays) {
// //     output.set(arr, offset)
// //     offset += arr.length
// //   }

// //   return output
// // }

// // const all = async (source) => {
// //   const arr = []

// //   for await (const entry of source) {
// //     arr.push(entry)
// //   }

// //   return arr
// // }

// // const ipfsCat = async (cid, opts) => {
// //   const options = opts || {};
// //   const res = self.Ipfs.cat(cid, options);

// //   const result = concat(
// //     await all(res),
// //   );
// //   const resultStr = toString(result);
// //   return resultStr;
// // };

// globalThis.register = () => {
//   const { cid, files, shaSums } = globalThis;

//   let currentCid = cid;

//   const { pathname } = self.location;

//   if (pathname.indexOf("/ipfs/") !== -1) {
//     currentCid = pathname.slice(6, 52);
//   }

//   // self.workbox.setConfig({
//   //   debug: true,
//   // });

//   self.workbox.loadModule("workbox-routing");
//   self.workbox.loadModule("workbox-precaching");
//   self.workbox.loadModule("workbox-strategies");
//   self.workbox.loadModule("workbox-cacheable-response");

//   const routes = Object.keys(files).filter((x) =>
//     x.length && x.indexOf(".") !== -1 && shaSums[x]
//   ).map((x) => ({
//     url: `/${x}`,
//     revision: files[x],
//     integrity: `sha256-${hexToBase64(shaSums[x])}`,
//   }));

//   self.workbox.precaching.precacheAndRoute(
//     routes,
//     {
//       urlManipulation: ({ url }) => {
//         const { pathname } = url;
//         if (pathname === "/") url.pathname = "/index.html";
//         const fileName = pathname.slice(1);
//         const fileCid = files[fileName];

//         const urlList = [
//           new URL(
//             `https://spike.land/ipfs/${currentCid}/${fileName}`,
//           ),
//         ];
//         if (fileCid) {
//           urlList.push(
//             new URL(`https://spike.land/ipfs/${fileCid}`),
//             new URL(`https://cf-ipfs.com/ipfs/${fileCid}`),
//           );
//         }

//         return urlList;
//       },
//     },
//   );

//   self.workbox.routing.registerRoute(
//     ({ url }) => url.origin.indexOf("spike.land") === -1,
//     new self.workbox.strategies.CacheFirst({
//       cacheName: "cdn-cache",
//       plugins: [
//         new self.workbox.cacheableResponse.CacheableResponsePlugin({
//           statuses: [200],
//         }),
//       ],
//     }),
//   );

//   self.addEventListener("fetch", (event) => {
//     if (event.request.url.endsWith("/ipfs/haha")) {
//       event.respondWith((async () => {
//         // Configure the strategy in advance.

//         // const strategy = new self.workbox.strategies.CacheFirst({
//         //   cacheName: "ipfs-cache",
//         // });

//         // // Make two requests using the strategy.
//         // // Because we're passing in event, event.waitUntil() will be called automatically.
//         // const firstPromise = strategy.handle({
//         //   event,
//         //   request: "https://example.com/api1",
//         // });
//         // const secondPromise = strategy.handle({
//         //   event,
//         //   request: "https://example.com/api2",
//         // });

//         // const [firstResponse, secondResponse] = await Promise.all(
//         //   firstPromise,
//         //   secondPromise,
//         // );
//         // const [firstBody, secondBody] = await Promise.all(
//         //   firstResponse.text(),
//         //   secondResponse.text(),
//         // );

//         // Assume that we just want to concatenate the first API response with the second to create the
//         // final response HTML.
//         // const compositeResponse = new Response(await globalThis.ipfsCat("QmS7udzEsQxu8netTzmuRHCniiSUqGuMtCUeJLRepouoG3"), {
//         //   headers: { "content-type": "text/html" },
//         // });
//         const compositeResponse = new Response("yeah. Haha.", {
//           headers: { "content-type": "text/html" },
//         });
//         return compositeResponse;
//       })());
//     }
//   });
// };

// function hexToBase64(hexString) {
//   return btoa(
//     hexString.match(/\w{2}/g).map(function (a) {
//       return String.fromCharCode(parseInt(a, 16));
//     }).join(""),
//   );
// }
