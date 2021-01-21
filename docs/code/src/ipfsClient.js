import {
  all,
  fromHexString,
  IpfsClient,
  raceToSuccess,
  uint8ArrayConcat,
  uint8ArrayToString,
} from "./workers/ipfs/dist/ipfs.client.js";

let workerSrc = `./src/workers/ipfsWorker.js`;

/** @type {MessagePort} */
let port;

if (typeof window !== "undefined") {
  if (window.location.host === "blog.zed.vision") {
    workerSrc = "https://blog.zed.vision/code/src/workers/ipfsWorker.js";
  }
  if (false && typeof SharedWorker !== "undefined") {
    const ipfsWorker = new SharedWorker(
      workerSrc,
    );
    port = ipfsWorker.port;
  } else {
    const worker = new Worker(workerSrc);

    const { port1, port2 } = new MessageChannel();
    const msg = {
      clientInit: true,
      port: port1,
    };

    worker.postMessage(msg, [port1]);

    port = port2;
  }
}

export const ipfsClient = IpfsClient.from(port);

export const ipfsCat = async (cid) => {
  const res = ipfsClient.cat(cid);

  const result = uint8ArrayConcat(
    await all(res),
  );
  const resultStr = uint8ArrayToString(result);
  return resultStr;
};

export { all };
export { uint8ArrayConcat };
export { uint8ArrayToString };
export { raceToSuccess };
export { fromHexString };
