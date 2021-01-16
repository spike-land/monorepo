// deno-lint-ignore-file

import { CID, fromHexString, ipfsClient, raceToSuccess } from "./ipfsClient.js";

/**
 * @type {
  * [string]  
  * }
  */

const cidCache = {};

/**
 * @type {
 * [string]  
 * }
 */

const signalCache = {};

/**
 * @type {
 * [string]  
 * }
 */

const cidLock = {
  semaphore: 0,
};

/**
 * @param {string} cid
 * @param {{signal: AbortSignal; timeout: number}}  options
 */
const getHash = async (cid, { signal, timeout }) => {
  if (cidCache[cid]) return cidCache[cid];
  signal.onabort = function () {
    aborted = 1;
  };
  let aborted = 0;
  try {
    if (aborted) return "";

    if (
      typeof cidCache[cid] !== "undefined" && cidCache[cid] !== ""
    ) {
      return cidCache[cid];
    }

    while (cidLock.semaphore > 128) {
      await wait(Math.random() * 100);
    }

    cidLock.semaphore++;

    const data = await ipfsClient.cat(cid, { timeout: timeout || 300 });

    if (cidCache[cid]) return cidCache[cid];

    /** @type {number[]} */
    const resultUintArr = [];

    for await (const res of data) {
      resultUintArr.concat(...res);
    }

    const result = new TextDecoder().decode(new Uint8Array(resultUintArr));
    cidCache[cid] = result;

    cidLock.semaphore--;

    return result;
  } catch (e) {
    cidLock.semaphore--;
    cidLock[cid] = null;
  }

  /**
 * @param {number} delay
 */

  function wait(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    });
  }
};

/**
 * @param {string} signal 
 * @param {string} data
 */
export const sendSignal = async (signal, data) => {
  if (typeof window === "undefined") return "no webpack please";

  await ipfsClient.add(signal);

  if (data) {
    let toSave = data;

    if (typeof data !== "string") toSave = JSON.stringify(data);

    const dataCid = (await ipfsClient.add(toSave)).cid.toString();

    const hexHash = Array.from((new CID(dataCid)).multihash).map((b) =>
      ("00" + b.toString(16)).slice(-2)
    ).join("");

    const allHash = new Array(hexHash.length).fill(signal).map((x, i) =>
      x + new Array(i).fill("x").join("") + hexHash.slice(i, i + 1)
    );

    await Promise.all(
      allHash.slice(0, 5).map((x) => ipfsClient.add(x)),
    );

    await Promise.all(
      allHash.slice(5).map((x) => ipfsClient.add(x)),
    );
  }
  return { success: true };
};

export const fetchSignal =
  /**
 * @param {string} signal
 * @param {number} _retry
 * @returns {Promise<()=>any>}
 */
  async (
    signal,
    _retry,
  ) => {
    const retry = (typeof _retry === "number") ? _retry : 999;
    const abort = new AbortController();

    try {
      if (retry === 0) throw new Error("No more retry");

      const res = await ipfsClient.add(signal, { onlyHash: true });
      const resCID = res.cid.toString();
      await getHash(resCID, { timeout: 500, signal: abort.signal });

      /**
     * 
     * @param {number} retry 
     * @returns {Promise<any>}
     */
      function getData(retry = 20) {
        if (retry === 0) throw new Error("Cant fetch data");

        /**
     * @param {number} delay
     */

        async function run(delay) {
          console.log(`delay: ${delay}`);

          try {
            const hashArr = new Array(68).fill(0).map((_x, i) => i);
            const restRes = hashArr.map((i) => getCharAt(signal, i));
            const hashHex = (await Promise.all(restRes)).join("");

            const cid = new CID(0, 112, fromHexString(hashHex));

            const data = await getHash(
              cid.toString(),
              { signal: abort.signal, timeout: 1500 },
            );

            /**
         * @param {string | any[] | { success: boolean; } | undefined} d
         */
            const parse = (d) => {
              try {
                if (typeof d !== "string") return d;

                const ret = JSON.parse(d);
                return ret;
              } catch (e) {
                return d;
              }
            };

            const ret = parse(data);

            if (!ret) throw new Error("No data");

            return ret;
          } catch (e) {
            return getData(retry - 1);
          }
        }

        return run(0);
      }

      return getData;

      /**
       * @param {string} signal
       * @param {number} i
       */
      async function getCharAt(signal, i) {
        if (!signalCache[signal]) {
          signalCache[signal] = {};
        }

        if (signalCache[signal][i]) return signalCache[signal][i];

        const chars = [..."0123456789abcdef"];

        const controller = new AbortController();
        const prefix = new Array(i).fill("x").join("");

        if (signalCache[signal][i]) return signalCache[signal][i];
        const raceArray = chars.map((x) =>
          ipfsClient.cat(signal + prefix + x, { timeout: 1500 })
        );

        if (signalCache[signal][i]) return signalCache[signal][i];
        const nextChar = await raceToSuccess(
          raceArray,
        );

        if (signalCache[signal][i]) return signalCache[signal][i];

        signalCache[signal][i] = nextChar;
        controller.abort();

        return nextChar;
      }
    } catch (e) {
      throw new Error("no signal");
    }
  };
