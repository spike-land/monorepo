import type { ICodeSession } from "@/lib/interfaces";
import { makeSession } from "@/lib/make-sess";

export class CodeSessionBC {
  private broadcastChannel: BroadcastChannel;
  session: ICodeSession = {
    code: "",
    codeSpace: "",
    i: 0,
    html: "",
    css: "",
    transpiled: "",
  };
  subscribers: Array<(session: ICodeSession) => void> = [];

  constructor(private codeSpace: string) {
    this.broadcastChannel = new BroadcastChannel(`${location.origin}/live/${this.codeSpace}/`);
    this.broadcastChannel.onmessage = ({ data }: MessageEvent<ICodeSession>) => {
      {
        if (data.i) {
          if (!this.session) {
            this.session = makeSession(data);

            this.subscribers.forEach(cb => cb(this.session!));
          }

          if (this.session && data.i > this.session.i) {
            // console.log("broadcastChannel.onmessage", data);

            this.session = makeSession(data);

            this.subscribers.forEach(cb => cb(this.session!));
          }
        }
      }
    };
    this.init();
  }

  async setCodeAndTranspiled({
    formatted,
    transpiled,
  }: {
    formatted: string;
    transpiled: string;
  }): Promise<boolean> {
    this.session = { ...this.session, code: formatted, transpiled, i: this.session.i + 1 };
    this.postMessage(this.session);
    return true;
  }

  async getCode() {
    return this.session.code;
  }

  async init(): Promise<ICodeSession> {
    return this.session = this.session
      || (await fetch(`/live/${this.codeSpace}/session.json`).then(response => response.json())) as ICodeSession;
  }

  sub(callback: (session: ICodeSession) => void): void {
    this.subscribers.push(callback);
  }
  postMessage(session: ICodeSession): void {
    this.subscribers.forEach(cb => setTimeout(() => cb(session)));
    this.broadcastChannel.postMessage(session);
  }
  close(): void {
    this.broadcastChannel.close();
  }
}
