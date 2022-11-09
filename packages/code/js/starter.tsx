import type { FC } from "react";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import type { EmotionCache } from "@emotion/cache";

import { CacheProvider, css } from "@emotion/react";

import createCache from "./emotionCache";
import { md5 } from "./md5.js";
import { esmTransform } from "./runner";
import { hashCode, mST } from "./session";
import { wait } from "./wait";

Object.assign(globalThis, { md5 });
const myApps: { [key: string]: FC } = {};
const myAppCounters: { [key: string]: number } = {};

export const importIt = async (url: string) => {
  let waitingTime = 100;
  let App;
  const urlARR = url.split("/");
  const naked = +(urlARR.pop() || 0);

  const nUrl = urlARR.join("/");
  myAppCounters[nUrl] = myAppCounters[nUrl] || naked;

  while (true) {
    const betterNaked = naked < myAppCounters[nUrl] ? myAppCounters[nUrl] : naked;
    const url = [...urlARR, betterNaked].join("/");

    try {
      try {
        App = (await importShim(url)).default;

        return { App, url };
      } catch {
        try {
          let resp = await fetch(url);
          if (resp.status === 307 && resp.headers.get("location")) {
            if (typeof resp.headers.get("location") === "string") {
              const urlLoc = resp.headers.get("location");
              if (urlLoc === null) th

              const bestCounter = +(urlLoc.split("/").pop() || 0);
              myAppCounters[nUrl] = bestCounter;
              if (url !== null) return importIt(url);
            }
          }
          if (resp.ok) {
            const trp = await resp.text();

            try {
              App = (await (fetch(url.replace(".js", ".tsx")).then(async (resp) =>
                resp && !resp.ok ? false : await resp.text().then(
                  code =>
                    esmTransform(code).then(
                      transpiled =>
                        importShim(createJsBlob(transpiled)),
                    ),
                )
              )) || new Function(trp + ` return ${trp.slice(2, 10)}`)()).default;
            } catch {
              console.error("something went nuts");
              return;
            }
            myApps[nUrl] = App;

            return { App, url };
          }
        } catch (err) {
          console.error({ err });
          console.error((err && (err as unknown as any)?.message as unknown as any) || "error has been thrown");
        }
      }
    } catch {
      console.error("bad something happened;");
    } finally {
      await wait(waitingTime *= 2);
    }
  }
};

if (!Object.hasOwn(globalThis, "apps")) {
  Object.assign(globalThis, { apps: {}, eCaches: {} });
}

export const { apps, eCaches } = (globalThis as unknown as {
  apps: Record<string, FC<{ appId: string }>>;
  eCaches: Record<string, EmotionCache>;
});

let starterI = 1
  * (document.getElementById("root")!.getAttribute(
    "data-i",
  ) as unknown as number);

export function AutoUpdateApp(
  { codeSpace }: { codeSpace: string },
) {
  const [{ App, i }, setApps] = useState({
    i: starterI - 1,
    App: null as null | FC<{}>,
  });

  useEffect(() => {
    (async () => {
      const { url, App: newApp } = await importIt(`${location.origin}/live/${codeSpace}/index.js/${i}`);

      const urlCounter = url.split("/").pop() * 1;
      if (i < urlCounter && newApp !== App) {
        setApps(x => ({ ...x, i: urlCounter, App: newApp }));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      (async () => {
        const { url, App: newApp } = await importIt(`${location.origin}/live/${codeSpace}/index.js/${i + 1}`);

        const urlCounter = url.split("/").pop() * 1;
        if (i < urlCounter && newApp !== App) {
          setApps(x => ({ ...x, i: urlCounter, App: newApp }));
        }
      })();
    })();
  }, [i, setApps, App]);

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div role="alert">
          <div>Oh no</div>
          <pre>{error.message}</pre>
        </div>
      )}
    >
      {App == null
        ? (
          <div
            style={{ height: "100%" }}
            dangerouslySetInnerHTML={{
              __html: `<style>${mST().css.split("body").join(`${codeSpace}-${hashCode()}`)}</style>${mST().html}`,
            }}
          />
        )
        : <App />}
    </ErrorBoundary>
  );
}

export async function appFactory(
  transpiled = "",
): Promise<FC<{ appId: string }>> {
  // }
  const { transpiled: mstTranspiled, i: mstI } = mST();
  const trp = transpiled.length > 0 ? transpiled : mstTranspiled;

  const hash = md5(trp);

  if (!apps[hash] || !eCaches[hash]) {
    try {
      eCaches[hash] = eCaches[hash] || createCache({
        key: hash,
        speedy: false,
      });

      eCaches[hash].compat = undefined;

      // if (terminal && terminal.clear) {
      //   terminal.clear();
      // }
      console.log(`i: ${mstI}: `);

      let mod;

      try {
        mod = await importShim(createJsBlob(trp));
      } catch {
        mod = new Function(trp + ` return ${trp.slice(2, 10)}`)();
      }
      const App = mod.default;

      apps[hash] = ({ appId }: { appId: string }) => (
        <div key={hash} style={{ height: 100 + "%" }} id={appId}>
          <CacheProvider key={hash} value={eCaches[hash]}>
            <App />
          </CacheProvider>
        </div>
      );
    } catch (error) {
      if (error instanceof SyntaxError) {
        const name = error.name;
        const message = error.message;
        apps[hash] = () => (
          <div css={css`background-color: orange;`}>
            <h1>Syntax Error</h1>

            <h2>{hash}</h2>
            <h2>{name}: {message}</h2>
            <p>{JSON.stringify({ err: error })}</p>
          </div>
        );
      } else if (error instanceof Error) {
        const name = error.name;
        const message = error.message;

        apps[hash] = () => (
          <div css={css`background-color: orange;`}>
            <h1>Syntax Error</h1>
            <h2>{name}: {message}</h2>
            <p>{JSON.stringify({ err: error })}</p>
          </div>
        );
      } else {
        apps[hash] = () => (
          <div css={css`background-color: orange;`}>
            <h1>Unknown Error: ${hash}</h1>
          </div>
        );
      }
    }

    if (transpiled !== "") return apps[hash];
  }

  return apps[hash];
}

export function createJsBlob(code: string, fileName = "index.mjs") {
  const file = new File([code], fileName, {
    type: "application/javascript",
    lastModified: Date.now(),
  });
  const blobUrl = URL.createObjectURL(file);
  return blobUrl;
}
