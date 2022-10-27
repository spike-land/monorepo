import { md5 } from "./md5";

const bc = new BroadcastChannel(location.origin);
const mocks = {};

bc.onmessage = (event) => {
  console.log(event);
  if (event.data.type === "set-mock") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mocks[event.data.filePath] = event.data.content;
  }
};

// async function wait(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

let lastChecked = 0;
let cache: Cache | null;
let cacheName = "default";
const getCacheName = () =>
  fetch(location.origin + "/files.json").then(files => files.ok ? files.text() : null).then(content => md5(content))
    .then(
      cn => (cn === cacheName || (cache = null) || (cacheName = cn)),
    ).finally(() => cacheName);

addEventListener("fetch", async (_event) => {
  const event = _event as unknown as FetchEvent;
  const url = new URL(event.request.url);

  return event.respondWith((async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (mocks[event.request.url]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return new Response(mocks[event.request.url]);
    }

    if (!cache) cache = await caches.open(cacheName || await getCacheName() && cacheName);

    if (url.href === "/mocks") {
      return new Response(JSON.stringify(mocks), {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
        },
      });
    }

    if (Date.now() - lastChecked > 10_000) {
      lastChecked = Date.now();
      getCacheName();
    }

    const cacheKey = new Request(event.request.url);
    const cachedResp = await cache.match(cacheKey);

    if (cachedResp) return cachedResp;

    const resp = await fetch(event.request);

    if (resp.ok) await cache.put(cacheKey, resp.clone());
    return resp;
  })());
});
