import { getDbObj } from "https://unpkg.com/@zedvision/shadb@10.14.1/src/getDbObj.js";
import { handleAdmin } from "./admin.ts";
import { js, json, text } from "./utils/handleOptions.ts";
import { v4 } from "./dec.ts";
import { sha256 } from "https://unpkg.com/@zedvision/sha256@10.12.14/sha256.js";

var SHAKV: KVNamespace;
var USERS: KVNamespace;
var LOGS: KVNamespace;
var USERKEYS: KVNamespace;

var API_KEY: string;

let now = 0;

export function log(message: string, data: unknown = {}) {
  now = now || Date.now();

  const [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);

  return LOGS.put(
    String(2000000000000 - now++),
    JSON.stringify({ message, time: `${hour}:${minute}`, data }),
    { expirationTtl: 86400 * 7 },
  );
}

export async function handleCloudRequest(request: Request): Promise<Response> {
  const { country, colo } = request.cf || { country: "", colo: "" };

  const url = new URL(request.url);
  const { searchParams, pathname } = url;
  const psk = String(request.headers.get("API_KEY") || "");
  log("request", { searchParams, pathname, country, colo });
  if (request.method === "GET" && psk && psk == API_KEY) {
    return handleAdmin(request, searchParams, pathname, SHAKV);
  } else if (request.method === "GET") {
    if (pathname === "/robots.txt") {
      return text("User-agent: * Disallow: /");
    }
    if (pathname === "/connect") {
      if (searchParams.get("key")) {
        const key = searchParams.get("key")!;

        const tokenKey = key.slice(0, 8);
        const userIdKey = key.slice(8, 16);
        const pass = key.slice(16, 24);
        const tokenPassUserId = key.slice(24, 32);

        const checkTokenPassUserId = await sha256(tokenKey + userIdKey);

        if (
          !tokenKey || !userIdKey || !pass ||
          (checkTokenPassUserId !== tokenPassUserId)
        ) {
          return json({ error: "auth error" });
        }

        const uuid = await USERKEYS.get(userIdKey);
        if (uuid === null) {
          return json({ error: 401 });
        }

        const tokenUuid = await USERKEYS.get(tokenKey);

        if (tokenUuid === null) {
          return json({
            error: 404,
            message: "token not found",
          });
        }
        const checkPass = await sha256(tokenKey + uuid);
        const checkPassToken = await sha256(tokenUuid + uuid);

        if (checkPass === pass) {
          await USERS.put(
            tokenUuid,
            JSON.stringify(
              {
                uuid,
                connected: userIdKey,
              },
            ),
            { expirationTtl: 60 },
          );

          return json({ success: true });
        } else if (checkPassToken === pass) {
          return json({ success: true });
        }
        return json({ error: 401 });
      }
    }

    if (pathname === "/check") {
      const key = searchParams.get("key");

      if (key === null) return new Response("500");

      const waitForChange = async () => {
        const uuid = await USERKEYS.get(
          key,
        );

        if (!uuid) return null;

        const data = await USERS.get<{ connected: boolean }>(
          uuid,
          "json",
        );
        if (!data || data.connected) {
          return data;
        }
        return new Promise((resolve) => {
          const clear = setInterval(async () => {
            const data = await USERS.get<{ connected: boolean }>(
              uuid,
              "json",
            );
            if (!data || data.connected) {
              clearInterval(clear);
              resolve(data);
            }
          }, 1000);
        });
      };

      const data = await waitForChange();

      return json({ expired: data === null });
    }

    if (pathname === "/register") {
      const uuid = v4();

      const uuidHash = await sha256(uuid);
      await USERS.put(
        uuid,
        JSON.stringify(
          { uuid, uuidHash, registered: Date.now(), country, colo },
        ),
      );
      await log("register", { uuidHash });
      await USERKEYS.put(uuidHash, uuid);
      return json({ uuid });
    }
    if (pathname === "/token") {
      const uuid = v4();
      const uuidHash = await sha256(uuid);
      await USERS.put(
        uuid,
        JSON.stringify({ uuid, registered: Date.now(), country, colo }),
        { expirationTtl: 60 },
      );
      await USERKEYS.put(uuidHash, uuid, { expirationTtl: 60 });

      return json({ uuid, key: uuidHash });
    }

    // if (pathname === "/uuids"){
    //   const list = await LOGS.list();

    //   const work = list.keys.map( x=>x.name).map(async(uuid)=>{
    //     // if (uuid.length === 8) {
    //     //     await USERS.delete(uuid)
    //     // }

    //     // const hash=await sha256(uuid);
    //     // const hashHash = await sha256(hash)
    //     await LOGS.delete(uuid);
    //   });

    // await Promise.all(work);

    // return json({uuids: list.keys});

    // }

    if (pathname === "/create-project") {
      const uuidHash = request.headers.get("TOKEN");
      const uuid = v4();
      await USERS.put(
        uuid,
        JSON.stringify({ uuid, registered: Date.now(), country, colo }),
      );
      return json({ uuid });
    }

    const maybeRoute = pathname.substr(1);
    if (maybeRoute) {
      const shaDB = getDbObj(SHAKV);
      const result = (await shaDB.get(maybeRoute)) as string | null;
      if (result !== null) {
        if (result.indexOf("export") === 0) return js(result);
        return text(result);
      }
    }

    if (pathname.slice(0,6)==="/ipfs/"){

      const cache = caches.default
      let response = await cache.match(request)
    
      if (!response) {
        response = await fetch(`https://ipfs.io/${pathname}`)
        const headers = { "Cache-Control": "public, max-age=604800, immutable" }
        response = new Response(response.body, { ...response, headers })
        await cache.put(request, response.clone())
      }
      if (response.status > 399) {
        response = new Response(response.statusText, { status: response.status })
      }
      return response

    }
 
    //    const resp= await fetch("https://unpkg.com/@zedvision/code@11.0.2/ipfs.html");

    // return text("ello")

    if (pathname==="")
        return Response.redirect("https://blog.zed.vision", 301);


    return text("nop");
  } else if (request.method === "POST") {
    // if (pathname==="/add"){

    //     const ipfNode = await ipfs.create({})
    //     // const {cid} =  await ipfs.add("Jtraraaallleeds")
    //     return text("helllo")

    // }

    const zkey = String(request.headers.get("ZKEY") || "");

    const sha = zkey.slice(0, 8);
    const uKey = zkey.slice(8, 16);
    const gKey = zkey.slice(16, 24);
    const proofKey = zkey.slice(24, 32);

    if (!sha || !uKey || !gKey || !proofKey) {
      return json({ error: 401, "message": "not matching keys" });
    }
    const checkGkey = await sha256(sha + uKey);

    if (checkGkey !== gKey) {
      return json(
        { error: 401, "message": "content and userkeys are not a pain" },
      );
    }

    const myBuffer = await request.arrayBuffer();
    const hash = await sha256(myBuffer);
    const smallerKey = hash.substring(0, 8);

    if (smallerKey !== sha) {
      return json(
        {
          error: 401,
          message:
            `body hash not matching with the sent hash: ${smallerKey} -- ${zkey}`,
        },
      );
    }

    const uuid = await USERKEYS.get(uKey);

    if (!uuid) return json({ error: 500, message: "user not found" });

    const checkProofKey = await sha256(sha + uuid);

    if (checkProofKey !== proofKey) {
      return json({ error: 401, message: "user not verified" });
    }

    await log("new html", { sha, uKey });

    // this need restriction:
    // such as:
    //    what are we saving - which projectID
    //    what will be the key
    //    and the data for the construction
    //         -- which is the parent sha id
    //         -- and what are we doing with it
    //             - for example, adding a new line
    //                - or babel it
    //                - or render it to html
    //                - then the result :)
    const maybeRoute = pathname.substr(1);

    await SHAKV.put(smallerKey, myBuffer);

    if (maybeRoute) {
      const shaDB = getDbObj(SHAKV);
      const result = await shaDB.put(maybeRoute, smallerKey);
    }

    return json({
      hash: smallerKey,
    });
  }

  return new Response("404");
}

