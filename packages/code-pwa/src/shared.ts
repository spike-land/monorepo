import SharedWorker from "@okikio/sharedworker";
/// @ts-ignore
import { getTransferables, hasTransferables } from "transferables";
import { RpcProvider } from "worker-rpc";

const swVersion = self.swVersion || Math.random().toString();

let rpc: RpcProvider | null = null;
let workerPort: MessagePort;
export const getPort = () => workerPort;
export const init = (swVersion: string, port: MessagePort | null = null) => {
  if (rpc !== null) return rpc;

  workerPort = port
    || (new SharedWorker(`/workerScripts/ataWorker.js?v=${swVersion}`)).port;
  rpc = new RpcProvider(
    (message) =>
      workerPort.postMessage(
        message,
        (hasTransferables(message as unknown)
          ? getTransferables(message as unknown)
          : undefined) as unknown as Transferable[],
      ),
    0,
  ) as unknown as RpcProvider;
  workerPort.onmessage = ({ data }) => rpc!.dispatch(data);
  return rpc;
};

export const prettier = (code: string) => init(swVersion).rpc("prettierJs", code) as Promise<string>;
export const ata = (
  { code, originToUse }: { code: string; originToUse: string },
) =>
  init(swVersion).rpc("ata", { code, originToUse }) as Promise<{
    content: string;
    filePath: string;
  }[]>;

export const tsx = (
  code: string,
) =>
  init(swVersion).rpc("tsc", code) as Promise<{
    content: string;
    filePath: string;
  }[]>;

export const transpile = (
  { code, originToUse }: { code: string; originToUse: string },
) => init(swVersion).rpc("transpile", { code, originToUse }) as Promise<string>;

export const build = (
  { codeSpace, origin }: { codeSpace: string; origin: string },
) =>
  init(swVersion).rpc("build", {
    codeSpace,
    origin,
  }) as Promise<string>;

export const connect = (codeSpace: string) => init(swVersion).signal("connect", codeSpace);
