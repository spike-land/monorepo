importScripts("/swVersion.js");

import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";

const sw = self as unknown as
  & ServiceWorkerGlobalScope
  & { swVersion: string }
  & { files: { [key: string]: string }; fileCacheName: string };

const files = Object.keys(sw.files);

registerRoute(
  ({ url }) =>
    sw.files.hasOwnProperty(url.pathname) && 
    ['/swVersion.mjs', '/sw.js'].indexOf(url.pathname) === -1,   
  new CacheFirst({
    cacheName: "file-cache-" + sw.swVersion,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) =>
    !url.pathname.startsWith("/live/") &&
    files.indexOf(url.pathname.split("?")[0].slice(1)) === -1,
  new CacheFirst({
    cacheName: "esm-cache-124",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

sw.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(sw.fileCacheName).then((cache) => {
      return cache.addAll(Object.keys(sw.files));
    }),
  );
});

sw.onmessage = async (event) => {
  if (event.data === "skipWaiting") {
    await sw.skipWaiting();
  }
}