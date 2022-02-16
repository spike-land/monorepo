import "core-js/modules/web.immediate";

import { hydrate } from "react";
import { fromBinary } from "./binary.ts";
import { jsx } from "@emotion/react";
import uidV4 from "./uidV4.mjs";
import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("/sw.js");

  wb.register();
}

const path = location.pathname.split("/");
window.aniStart = Date.now();

const room =
  ((path[1] === "api" && path[2] === "room")
    ? path[3]
    : (path.pop() || path.pop()).slice(-12)) ||
  "code-main";
const user = ((self && self.crypto && self.crypto.randomUUID &&
  self.crypto.randomUUID()) || (uidV4())).slice(
    0,
    8,
  );

const start = async (App) => {
  globalThis.monacoEditorModule = import("./editor.ts");
  const container = document.querySelector("#root");

  hydrate(container, jsx(App));

  console.log("HYDRATED");
  if (location.href.endsWith("hydrated")) return;
  globalThis.App = App;
  const { join } = await import("./ws.mjs");
  await wait(2000);
  join(room, user);
};

export const hydrateBinary = async (binary) => {
  const App = (await import(createJsBlob(fromBinary(binary)))).default;
  start(App);
};

export const run = async () => {
  if (globalThis.App) return;

  const respS = await fetch(
    `https://spike.land/api/room/${room}/session`,
  );

  const session = await respS.json();
  const container = document.getElementById("root");
  container.innerHTML =
    `<style>${session.css}</style><div id="zbody">${session.html}</div>`;

  const App = (await import(createJsBlob(session.transpiled))).default;

  start(App);
};

export function createJsBlob(code) {
  const blob = new Blob([code], { type: "application/javascript" });

  return URL.createObjectURL(blob);
}

async function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
