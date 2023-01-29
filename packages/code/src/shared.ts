import SharedWorker from "@okikio/sharedworker";
import { getTransferables, hasTransferables } from "transferables";
import { RpcProvider } from "worker-rpc";
import assetHash from "./shasum.mjs";

let rpc: RpcProvider | null = null;
const init = () => {
  if (rpc !== null) return rpc;
  const worker = new SharedWorker("/ataWorker.js?" + assetHash);
  rpc = new RpcProvider(
    message =>
      worker.port.postMessage(
        message,
        (hasTransferables(message as unknown)
          ? getTransferables(message as unknown)
          : undefined) as unknown as Transferable[],
      ),
    0,
  ) as unknown as RpcProvider;
  worker.port.onmessage = ({ data }) => rpc!.dispatch(data);
  return rpc;
};

export const prettier = (code: string) => init().rpc("prettierJs", code) as unknown as string;
export const ata = (
  { code, originToUse }: { code: string; originToUse: string },
) =>
  init().rpc("ata", { code, originToUse }) as Promise<{
    content: string;
    filePath?: string;
  }[]>;

export const transpile = ({ code, originToUse }: { code: string; originToUse: string }) =>
  init().rpc("transpile", { code, originToUse }) as Promise<string>;

export const connect = (codeSpace: string) => init().signal("connect", codeSpace);
