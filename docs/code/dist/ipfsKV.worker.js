"use strict";
import { __asyncValues } from "tslib";
importScripts("https://unpkg.com/ipfs@0.52.3/dist/index.min.js");
importScripts("https://unpkg.com/comlink@4.3.0/dist/umd/comlink.js");
// @ts-ignore
addEventListener("install", () => skipWaiting());
// @ts-ignore
addEventListener("activate", () => clients.claim());
// deno-lint-ignore ban-ts-comment
// @ts-ignore
const IPFS = (() => globalThis.Ipfs)();
/** @type {{ add: (arg0: string, arg1: { onlyHash: boolean; }) => PromiseLike<{ cid: any; }> | { cid: any; }; addAll: (arg0: any) => any; cat: (arg0: string, arg1: { offset?: number | undefined; length?: number | undefined; timeout?: number | undefined; signal?: AbortSignal | undefined; }) => any; pubsub: { subscribe: (arg0: string, arg1: (msg: any) => void) => void; }; get: (arg0: string, arg1: { offset?: number | undefined; length?: number | undefined; timeout?: number | undefined; signal?: AbortSignal | undefined; }) => any; }} */
let ipfsNode;
const ipfsKV = {
    /**
   * @param {string} data
   * @param {{ onlyHash: boolean; }} options
   */
    add: async (data, options) => {
        try {
            ipfsNode = ipfsNode || await IPFS.create({ silent: true });
            // console.log(await ipfsNode.config.getAll())
            const { cid } = await ipfsNode.add(data, options);
            if (options && options.onlyHash) {
                return (new IPFS.CID(0, 112, cid.multihash)).toString();
            }
            return cid.string;
        }
        catch (e) {
            console.info({ e });
        }
    },
    /**
     *
     * @param {*} files
     */
    addAll: async (files) => {
        var e_1, _a;
        try {
            ipfsNode = ipfsNode || await IPFS.create({ silent: true });
            const res = [];
            try {
                for (var _b = __asyncValues(ipfsNode.addAll(files)), _c; _c = await _b.next(), !_c.done;) {
                    const result = _c.value;
                    const { path, cid } = result;
                    const CID = cid.string;
                    res.push({ path, CID });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return res;
        }
        catch (e) {
            return ({ e });
        }
    },
    /**
     *
     * @param {string} cid
     * @param {{
      *          offset?: number;
      *          length?: number;
      *          timeout?: 	number;
      *         signal?: 	AbortSignal;
       *        }}  options
      */
    cat: async (cid, options) => {
        var e_2, _a;
        try {
            ipfsNode = ipfsNode || await IPFS.create({ silent: true });
            const res = [];
            try {
                for (var _b = __asyncValues(ipfsNode.cat(cid, options)), _c; _c = await _b.next(), !_c.done;) {
                    const result = _c.value;
                    console.log("RES", result);
                    res.push(new TextDecoder("utf-8").decode(result));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return res.join("");
        }
        catch (e) {
            return (JSON.stringify({ e }));
        }
    },
    pubsubSubscribe: 
    /**
   *
   * @param {string} topic
   */
    async (topic) => {
        var e_3, _a;
        try {
            ipfsNode = ipfsNode || await IPFS.create({ silent: true });
            const res = [];
            const receiveMsg = 
            /**
         *
         * @param {*} msg
         */
            (msg) => console.log(msg.data.toString());
            ipfsNode.pubsub.subscribe(topic, receiveMsg);
            try {
                // @ts-ignore
                for (var _b = __asyncValues(ipfsNode.cat(cid, options)), _c; _c = await _b.next(), !_c.done;) {
                    const result = _c.value;
                    console.log("RES", result);
                    res.push(new TextDecoder("utf-8").decode(result));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return res.join("");
        }
        catch (e) {
            return (JSON.stringify({ e }));
        }
    },
    /**
     *
     * @param {string} cid
     * @param {{
      *          offset?: number;
      *          length?: number;
      *          timeout?: 	number;
      *         signal?: 	AbortSignal;
       *        }}  options
      */
    // @ts-ignore
    getData: async (cid, options) => {
        var e_4, _a;
        try {
            ipfsNode = ipfsNode || await IPFS.create({ silent: true });
            const res = [];
            try {
                for (var _b = __asyncValues(ipfsNode.get(cid, options)), _c; _c = await _b.next(), !_c.done;) {
                    const result = _c.value;
                    console.log("RES", result);
                    res.push(new TextDecoder("utf-8").decode(result));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return res.join("");
        }
        catch (e) {
            return (JSON.stringify({ e }));
        }
    },
};
// deno-lint-ignore no-undef
// @ts-ignore
self.addEventListener("connect", 
// @ts-ignore
(e) => Comlink.expose(ipfsKV, e.ports[0]));
// deno-lint-ignore no-undef
// @ts-ignore
addEventListener("message", (event) => {
    if (event.data.comlinkInit) {
        //@ts
        // @ts-ignore
        Comlink.expose(ipfsKV, event.data.port);
        return;
    }
});
