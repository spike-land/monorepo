import type { DurableObject } from "@cloudflare/workers-types";
import { md5 } from "./../../code/src/session";
import { CodeEnv } from "./env";
import { Delta } from "../../code/src/textDiff";
export { md5 };
export interface WebsocketSession {
    name: string;
    webSocket: WebSocket;
    quit?: boolean;
}
export declare class Code implements DurableObject {
    private state;
    private env;
    wsSessions: WebsocketSession[];
    user2user(to: string, msg: unknown | string): void;
    broadcast(msg: unknown): void;
    private session;
    mST(p?: Delta[]): {
        code: string;
        i: number;
        html: string;
        css: string;
    };
    private backupSession;
    constructor(state: DurableObjectState, env: CodeEnv);
    api(request: Request): Promise<Response | {
        status: number;
        headers: {
            "x-typescript-types": string;
            "Access-Control-Allow-Origin": string;
            "Cross-Origin-Embedder-Policy": string;
            "Cache-Control": string;
            content_hash: string;
            "Content-Type": string;
        };
    }>;
    fetch(request: Request): Promise<Response>;
    handleSession(webSocket: WebSocket): Promise<void>;
    processWsMessage(msg: {
        data: string | ArrayBuffer;
    }, session: WebsocketSession): Promise<void>;
}
