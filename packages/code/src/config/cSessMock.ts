import type { ICode, ICodeSession, ImageData, Message } from "@/lib/interfaces";

class SessMock implements ICode {
  codeSpace = "mock-code-space";

  private subs: Array<(sess: ICodeSession) => void> = [];

  session: ICodeSession = {
    code: "",
    codeSpace: "",
    html: "",
    messages: [],
    transpiled: "",
    css: "",
  };

  init: () => Promise<ICodeSession> = async () => {
    return this.session;
  };

  sub(fn: (sess: ICodeSession) => void) {
    this.subs.push(fn);
    return () => {
      this.subs = this.subs.filter((f) => f !== fn);
    };
  }

  addMessageChunk(chunk: string) {
    const message: Message = {
      id: "mock-id",
      role: "user",
      content: chunk,
    };
    this.session.messages.push(message);
    this.broadCastSessChanged();
  }

  setMessages(messages: Message[]) {
    this.session.messages = messages;
    return true;
  }

  broadCastSessChanged() {
    this.subs.forEach((cb) => cb(this.session));
  }

  async setCode(rawCode: string): Promise<string> {
    this.session.code = rawCode;
    this.broadCastSessChanged();
    return rawCode;
  }

  async screenShot(): Promise<ImageData> {
    return {
      imageName: "mock-screenshot.png",
      url: "https://example.com/mock-screenshot.png",
      src: "data:image/png;base64,mockedBase64Data",
      mediaType: "image/png",
      data: "mockedBase64Data",
      type: "image/png",
    };
  }

  async currentCodeWithExtraModels(): Promise<string> {
    // Mock implementation
    return this.session.code;
  }

  async setModelsByCurrentCode(code: string): Promise<string> {
    // Mock implementation
    this.session.code = code;
    this.broadCastSessChanged();
    return code;
  }
  async getCode(): Promise<string> {
    return this.session.code;
  }
}

export const cSessMock = new SessMock();
