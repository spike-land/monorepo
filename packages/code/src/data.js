import { sha256 } from "./shadb/src/sha256.js";

import v4 from "../node_legacy/v4.js";

import { starter } from "./starter.js";
import { shaDB } from "./shadb/src/shaDB.js";

/** @type {string} */
let uuid;
export const getProjects = async () => {
  uuid = await getUserId();
  const userData = await shaDB.get(uuid, "json");

  let appHash = null;
  if (userData && userData.signal) {
    //  setTimeout(()

    return userData.signal;
  }

  if (typeof userData === "string" || userData === null || !userData.list) {
    const projectId = v4();

    await shaDB.put(
      uuid,
      JSON.stringify({
        ...userData,
        list: [projectId],
        [projectId]: {
          lastOpen: Date.now(),
        },
      }),
    );

    if (appHash !== null) await shaDB.put(projectId, appHash);
    return [projectId];
  }

  if (appHash !== null) await shaDB.put(userData.list[0], appHash);
  return userData.list;
};

export async function getUserId() {
  if (uuid) return uuid;

  uuid = await shaDB.get("uuid", "string");
  if (!uuid) {
    const resp = await fetch("https://zed.vision/register");
    const data = await resp.json();
    await shaDB.put("uuid", data.uuid);
    return data.uuid;
  }
  return uuid;
}

/** @type {string} */
let activeProject;
async function getActiveProject() {
  if (activeProject) return activeProject;
  const projects = await getProjects();
  if (projects.rootUrl) return projects;
  activeProject = projects[0];
  return activeProject;
}

/**
 * @param {string|undefined} _rootUrl
 */
export async function getIPFSCodeToLoad(_rootUrl) {
  const rootUrl = _rootUrl ||
    (window.location.href.endsWith("/edit/")
      ? window.location.href.slice(0, -5)
      : window.location.href.slice(0, -4));

  const codeReq = await fetch(rootUrl + "app.tsx");
  const code = await codeReq.text();

  const ret = {
    code: code,
    url: rootUrl,
    transpiled: "",
    html: "",
  };
  console.log({ ret });
  return ret;
}

export async function getCodeToLoad() {
  const projectName = await getActiveProject();
  if (projectName.rootUrl) {
    return getIPFSCodeToLoad(projectName.rootUrl);
  }
  const keyToLoad = await shaDB.get(projectName, "string");

  let projectDesc;

  try {
    projectDesc = await shaDB.get(keyToLoad, "json");
  } catch {
    const data = {
      code: projectDesc,
      transpiled: null,
      html: null,
      versions: null,
    };
    return data;
  }
  if (projectDesc !== null && projectDesc !== undefined) {
    const data = {
      code: await shaDB.get(projectDesc.code, "string"),
      transpiled: await shaDB.get(projectDesc.transpiled, "string") || "",
      html: await shaDB.get(projectDesc.html, "string") || "",
      versions: await shaDB.get(projectDesc.versions, "string") || "",
    };

    return data;
  }

  const data = {
    code: await shaDB.get(projectDesc, "string") ||
      (await import("./starter.js")).starter,
    transpiled: null,
    html: null,
    versions: null,
  };
  return data;
}

const saved = {
  code: "",
  html: null,
  transpiled: null,
  url: null,
};

const toSave = {
  code: "",
  html: null,
  transpiled: null,
};

export const saveCode =

  /**
 * @param {{ code: any; url?: any; html?: any; transpiled?: any; versions?: any; i?: any; }} opts
 * @param {number} counter
 */
  async (opts, counter) => {
    const { code, html, transpiled, versions, i } = opts;
    toSave.code = code || starter;

    // deno-lint-ignore ban-ts-comment
    //@ts-ignore

    if (opts.i > counter) return;

    if (opts.code !== toSave.code) {
      return null;
    }
    if (toSave.code === saved.code && saved.url !== null) {
      return saved.url;
    }

    toSave.code = opts.code;

    const { shareItAsHtml } = await import("./share.js");
    const sharePromise = shareItAsHtml(
      { code, html, transpiled, versions },
    );

    if (opts.i > counter) return;
    const url = await sharePromise;
    const projectName = await getActiveProject();
    if (opts.i > counter) return;
    opts.url = url;
    // const prevHash = await shaDB.get(projectName, "string");
    const desc = {
      url: await sha256(url),
      code: await sha256(code),
      html: await sha256(html),
      transpiled: await sha256(transpiled),
      versions: await sha256(JSON.stringify(versions)),
    };

    const hash = await sha256(JSON.stringify(desc));
    await shaDB.put(hash, JSON.stringify(desc));

    // const prevData = await shaDB.get(prevHash, s);
    if (code) {
      await shaDB.put(desc.code, code);
    }
    if (html) {
      await shaDB.put(desc.html, html);
    }
    if (transpiled) {
      await shaDB.put(desc.transpiled, transpiled);
    }
    if (versions) {
      await shaDB.put(desc.versions, JSON.stringify(versions));
    }

    await shaDB.put(projectName, hash);
    Object.assign(saved, { html, code, transpiled, url });
  };
