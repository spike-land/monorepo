import "core-js/full";

Object.assign(self, require("buffer"));
Object.assign(self, require("path-browserify"));

const OrbitDB = require("orbit-db");
const bc = new BroadcastChannel("spike.land");

import { create } from "ipfs";
import { IPFSService, Server } from "ipfs-message-port-server";

import config from "ipfs-core-config/config";

//import OrbitDB from "orbit-db"
//import { create } from "../../node_modules/ipfs-core/index.min.js"//;
//import { create,  } from "ipfs-core"//;

import type {} from "orbit-db";
// } from "../../node_modules/ipfs-message-port-server/index.min.js";
// importScripts('https://unpkg.com/ipfs@0.62.3/index.min.js');
// importScripts('https://unpkg.com/ipfs-message-port-server@0.11.3/index.min.js');

const orbitDbs = {};

self.orbitDbs = orbitDbs;

export const ipfsWorker = async () => {
  if (globalThis.ipfs) return;
  try {
    console.log("Ipfs worker start");
    // start listening to all incoming connections - they will be from browsing
    // contexts that run `new SharedWorker(...)`
    // Note: It is important to start listening before we do any async work to
    //  ensure that connections aren't missed while awaiting

    // const webRtcStar = new WebRTCStar();

    // queue connections that occur while node was starting.

    const defaultConfig = config();
    const ipfs = await create(
      {
        start: true,
        preload: {
          enabled: false,
        },
        config: {
          ...defaultConfig,

          Pubsub: { Enabled: true },
          Addresses: {
            Swarm: [
              // Use IPFS dev signal server
              // '/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star',
              // '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
              // Use IPFS dev webrtc signal server]
              "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
              "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
              "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
              // Use local signal server
              // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
            ],
          },
        },
      },
    );

    const service = new IPFSService(ipfs);
    const server = new Server(service);

    self.ipfsMessagePortServer = server;
    self.ipfs = ipfs;
    globalThis.ipfs = ipfs;
    globalThis.ipfsMessagePortServer = server;

    const orbitdb = await OrbitDB.createInstance(ipfs, {
      id: ipfs.id().toString(),
    });

    bc.onmessage = async (event) => {
      console.log({ event });

      if (event.data.codeSpace) {
        const { codeSpace, address, messageData } = event.data;

        if (!Object.prototype.hasOwnProperty(codeSpace)) {
          startOrbit(orbitdb, codeSpace, address, messageData);
        }
      }

      // if (
      //   event.data.codeSpace && event.data.messageData
      // ) {
      //   const hash = await db.add({
      //     ...event.data.messageData,
      //     codeSpace: event.data.codeSpace,
      //   });
      //   console.log(hash);
      // }
    };
    //   console.log(db.iterator({ limit: -1 }).collect())
    // })

    // Create / Open a database
    // const db = await orbit.log("hello")
    // await db.load()

    // connect every queued and future connection to the server
    // self.onconnect = ({ ports }) => server.connect(ports[0]);

    // addEventListener(
    //   "connect",
    //   ({ ports }: MessageEventInit) => ports && server.connect(ports[0]),
    // );

    // connections.map((ports) => server.connect(ports[0]));

    // function libp2pConfig() {
    //   /** @type {import('libp2p').Libp2pOptions} */
    //   const options = {

    //     connectionManager: {
    //       maxParallelDials: 150, // 150 total parallel multiaddr dials
    //       maxDialsPerPeer: 4, // Allow 4 multiaddr to be dialed per peer in parallel
    //       dialTimeout: 10e3, // 10 second dial timeout per peer dial
    //       autoDial: true,
    //     },
    //     nat: {
    //       enabled: false,
    //     },
    //     metrics: {
    //       enabled: true,
    //     },
    //   };

    //   return options;
    // }

    // const result = db.iterator({ limit: -1 }).collect()
    // console.log(JSON.stringify(result, null, 2))
  } catch (err) {
    console.error(err);
  }
};

async function startOrbit(
  orbitdb: OrbitDB,
  codeSpace: string,
  address: string,
  messageData: Object,
) {
  console.log("startorbit", codeSpace, address, { orbitDbs });

  const init = orbitDbs[codeSpace];
  orbitDbs[codeSpace] = orbitDbs[codeSpace] ||
    await orbitdb.open(
      "/orbitdb/zdpuAp2ZthtbiECNgbTyuUazbQ3xTejnxTRT6D9JXrt7LzfQY/test", //address || codeSpace,
      {
        // If database doesn't exist, create it
        create: true,
        overwrite: true,
        // Load only the local version of the database,
        // don't load the latest from the network yet
        localOnly: false,
        type: "eventlog",

        // If "Public" flag is set, allow anyone to write to the database,
        // otherwise only the creator of the database can write
        accessController: {
          write: ["*"],
        },
      },
    );

  const db = orbitDbs[codeSpace];

  // Create / Open a database

  // Listen for updates from peers
  if (!init) {
    db.events.on("replicated", (_address: string) => {
      if (address !== _address) {
        orbitDbs[codeSpace] = _address;
        bc.postMessage({ codeSpace, address: _address });
      }
      console.log(db.iterator({ limit: -1 }).collect());
    });

    const query = (db: OrbitDB) => {
      if (db.type === "eventlog") {
        return db.iterator({ limit: 5 }).collect();
      } else if (db.type === "feed") {
        return db.iterator({ limit: 5 }).collect();
      } else if (db.type === "docstore") {
        return db.get("peer1");
      } else if (db.type === "keyvalue") {
        return db.get("mykey");
      } else if (db.type === "counter") {
        return db.value;
      } else {
        throw new Error("Unknown database type: ", db.type);
      }
    };

    let dbAddress = address;

    const queryAndRender = async (db: typeof OrbitDB) => {
      await ipfs.swarm.peers();
      //const databasePeers = await
      ipfs.pubsub.peers(db.address.toString());

      const result = query(db);
      let dbType = result && result.type;

      console.log({ result });
      if (dbType !== db.type || dbAddress !== db.address) {
        dbType = db.type;
        dbAddress = db.address;
      }
    };

    db.events.on("write", () => queryAndRender(db));

    // Add a

    const all = db.iterator({ limit: -1 })
      .collect().map((e) => e.payload.value);

    console.log({ all });
  }

  if (messageData) {
    console.log("adding", { messageData });
    await db.add(messageData);
  }
}

// URL to the script containing ipfs-message-port-server.
const load = async (path) => {
  const paths = path && path.split("/") || [];
  const protocol = path.length || "";
  switch (protocol) {
    case "ipfs":
    case "ipns": {
      document.body.innerHTML =
        `<iframe id="viewer" style="width:100%;height:100%;position:fixed;top:0;left:0;border:none;" src="/view${path}"></iframe>`;
    }
  }
};

const ipfsSw = async () => {
  try {
    navigator.serviceWorker.onmessage = onServiceWorkerMessage;

    // @ts-ignore - register expects string but webPack requires this URL hack.
    navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
    await navigator.serviceWorker.ready;

    // This is just for testing, lets us know when SW is ready.

    // URLs like `localhost:3000/ipfs/Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD`
    // are loaded from service worker. However it could be that such a URL is loaded
    // before the service worker was registered in which case our server just loads a blank
    if (document.documentElement.dataset.viewer) {
      return load(location.pathname);
    }
  } catch {
    console.log("ipfs load error");
  }
};

ipfsSw();
// const getIpfsPort = () =>
//   new SharedWorker(new URL("./worker.js", location.origin), {
//     name: "IPFS",
//   }).port;

async function onServiceWorkerMessage(event) {
  /** @type {null|ServiceWorker} */
  const serviceWorker = (event.source);
  if (serviceWorker == null) return;
  switch (event.data.method) {
    case "ipfs-message-port":
      await ipfsWorker();

      const port = new MessageChannel();
      ipfsMessagePortServer.connect(port[0]);
      // const port = getIpfsPort();
      return serviceWorker.postMessage({
        method: "ipfs-message-port",
        id: event.data.id,
        port,
      }, [port]);
      // Receives request from service worker, creates a new shared worker and
      // responds back with the message port.
      // Note: MessagePort can be transferred only once which is why we need to
      // create a SharedWorker each time. However a ServiceWorker is only created
      // once (in main function) all other creations just create port to it.
  }
}

const loadApp = async () => {
  console.log("es-module-shims import and start the app!");
  if (window.startedWithNativeEsmModules) return;

  await import("es-module-shims");
};

setTimeout(loadApp, 200);

async function syncCachesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.çƒ.register("sync-cache");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
