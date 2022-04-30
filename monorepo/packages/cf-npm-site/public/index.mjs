// src/index.ts
function src_default(packageName, version, serveDir = "") {
  return async function(request, env) {
    return await tryToResp(request, env, 4);
    async function tryToResp(request2, env2, retry) {
      try {
        const url = new URL(request2.url);
        const pathname = String(url.pathname);
        const isChunk = pathname.indexOf("/chunks") !== -1;
        const cacheKey = isChunk ? new Request(url.origin + pathname.substring(pathname.indexOf("/chunks" + 7)), { method: "GET" }) : new Request(url.toString(), { method: "GET" });
        const cache = caches.default;
        const cachedResp = await cache.match(cacheKey);
        if (cachedResp) {
          return cachedResp;
        }
        const uri = pathname.startsWith("/@") ? pathname.substring(1) : `@${version}${serveDir ? `/${serveDir}` : ``}${pathname}`;
        let targetPath = uri;
        if (uri.endsWith("/")) {
          targetPath = `${uri}index.html`;
        } else if (pathname.indexOf(".") === -1) {
          targetPath = `${uri}/index.html`;
        }
        const reqCloned = request2.clone();
        const newReq = new Request(`https://unpkg.com/${packageName}${targetPath}`, {
          headers: {
            ...reqCloned.headers
          }
        });
        const origResp = await Promise.any([
          fetch(newReq).then((req) => {
            if (!req.ok)
              throw req.status;
            return req;
          }),
          fetch(`https://raw.githubusercontent.com/spike-land/monorepo/v${version}/monorepo/packages/code/${targetPath}`).then((req) => {
            if (!req.ok)
              throw req.status;
            return req;
          })
        ]);
        if (!origResp.ok)
          throw new Error("not ok");
        const cloned = origResp.clone();
        const resp = new Response(cloned.body, {
          headers: {
            ...cloned.headers,
            "Cache-Control": isChunk ? "public, max-age=604800, immutable" : "no-cache"
          }
        });
        if (pathname.endsWith(".mjs") || pathname.endsWith(".js") || pathname.endsWith(".ts") || pathname.endsWith(".tsx")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "text/javascript;charset=UTF-8");
          resp.headers.set("Access-Control-Allow-Origin", "*");
        } else if (pathname.endsWith(".css")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "text/css;charset=UTF-8");
        } else if (pathname.endsWith(".json")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "application/json;charset=UTF-8");
        } else if (pathname.endsWith(".ico")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "image/x-icon;charset=UTF-8");
        } else if (pathname.endsWith(".ttf")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "font/ttf");
        } else if (pathname.endsWith(".jpg")) {
          resp.headers.delete("content-type");
          resp.headers.set("content-type", "image/jpeg");
        } else if (pathname.indexOf(".") === -1 || pathname.endsWith(".html")) {
          resp.headers.delete("content-type"), resp.headers.set("content-type", "text/html;charset=UTF-8");
        }
        if (origResp.status === 200)
          await cache.put(cacheKey, resp.clone());
        return resp;
      } catch (Error2) {
        if (retry > 4) {
          await wait(5e3 - retry * 1e3);
          return tryToResp(request2, env2, retry - 1);
        }
        throw Error2;
      }
    }
  };
}
async function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
export {
  src_default as default
};
