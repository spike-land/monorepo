import { fromJS, isKeyed, Record } from "immutable";
// @ts-expect-error
import createDelta from "textdiff-create";
// @ts-expect-error
import applyPatch from "textdiff-patch";
// import * as Immutable from "immutable"

type IUsername = string;

export interface ICodeSession {
  code: string;
  i: number;
  errorDiff: string;
  transpiled: string;
  html: string;
  css: string;
}

export interface INewWSConnection {
  uuid: string;
  timestamp: number;
  hashCode: number;
  type: "new-ws-connection";
}

interface ICodeInitEvent extends ICodeSession {
  name: IUsername;
  uuid: string;
  type: "code-init";
  hashOfCode: string;
}

interface OtherEvent {
  name: IUsername;
  uuid: string;
  target: IUsername | "broadcast";
  type: "start" | "open" | "quit" | "get-cid" | "provide-cid" | "new-ws";
  timestamp: number;
}

export type IEvent =
  | INewWSConnection
  | OtherEvent
  | ICodeInitEvent;

interface ICapabilities {
  prettier: boolean;
  babel: boolean;
  sessionStorage?: boolean;
  webRRT: boolean;
  prerender: boolean;
  IPFS: boolean;
}

export interface IUserJSON {
  name: IUsername;
  capabilities: ICapabilities;
  state: ICodeSession;
  users: {};
  events: IEvent[];
}

interface IQTaskEvent {
  uuid: string;
  name: string;
  operation: string;
  data: string;
}

export interface IUser extends
  Record<{
    name: IUsername;
    room: string;
    state: Record<ICodeSession>;
    capabilities: ICapabilities;
    users: {};
    events: IEvent[];
  }> {
}

function initSession(room: string, u: IUserJSON) {
  return Record({ ...u, room, state: Record(u.state)() });
}

export interface ICodeSess {
  room: string;
  hashCodeSession: number;
  hashCode: () => number;
  addEvent: (e: IEvent) => void;
  setRoom: (room: string) => void;
  json: () => IUserJSON;
  processEvents: () => void;
}

export class CodeSession implements ICodeSess {
  session: IUser;
  hashCodeSession: number;
  public room: string = "";
  created: string = new Date().toISOString();
  constructor(room: string, user: IUserJSON) {
    let savedState: ICodeSession | null = null;
    this.room = room;
    // if (user.state.code === "" && room) {
    // const cacheKey = `state-${room}`;

    // if (storageAvailable("localStorage")) {
    //   const savedStateStr = localStorage.getItem(cacheKey);
    //   if (savedStateStr) {
    //     savedState = JSON.parse(savedStateStr);
    //   } else {
    //     fetch(`https://code.spike.land/api/room/${room}/mySession`).then(
    //       (resp) => resp.json(),
    //     ).then((session: IUserJSON) => {
    //       localStorage.setItem(cacheKey, JSON.stringify(session.state));
    //       this.session.set("state", Record(session.state)());
    //     });
    //   }
    // }
    // }

    this.session = initSession(room, {
      ...user,
      state: savedState ? savedState : user.state,

      capabilities: {
        ...user.capabilities,
        sessionStorage: storageAvailable("sessionStorage"),
      },
    })();

    this.hashCodeSession = this.session.get("state").hashCode();
  }

  public addEvent(e: IEvent) {
    this.session.get("events").push({
      ...e,
    });
    setTimeout(() => this.processEvents);
  }

  public hashCode() {
    return this.session.get("state").hashCode();
  }

  processEvents() {
    const events = this.session.get("events");
    const event = events.shift();

    if (event) {
      switch (event.type) {
        case "code-init":
          const { code, transpiled, i, css, errorDiff, html } = event;
          const sess: ICodeSession = {
            code,
            transpiled,
            i,
            css,
            errorDiff,
            html,
          };

          this.session.set("events", events);
          this.session.set("state", Record(sess)());

          // const cacheKey = `state-${this.room}`;

          // if (storageAvailable("localStorage")) {
          //   localStorage.setItem(cacheKey, JSON.stringify(sess));
          // }
          // this.session.set("events", events);
      }
    }
  }
  public createPatch(state: ICodeSession) {
    if (state.code === this.session.get("state").get("code")) {
      return {
        oldHash: this.session.get("state").hashCode(),
        newHash: this.session.get("state").hashCode(),
        patch: "",
      };
    }
    const oldState = JSON.stringify(this.session.get("state").toJSON());

    const oldHash = this.session.get("state").hashCode();

    const oldRec = this.session.get("state");
    const newRec = oldRec.merge(state);
    const newHash = newRec.hashCode();

    const newState = JSON.stringify(newRec.toJSON());
    const patch = createPatch(oldState, newState);
    return {
      oldHash,
      newHash,
      patch,
    };
  }

  public applyPatch({
    oldHash,
    newHash,
    patch,
  }: { oldHash: number; newHash: number; patch: string }) {
    const oldHashCheck = this.session.get("state").hashCode();

    if (oldHashCheck !== oldHash) {
      console.error("Cant update");
      return;
    }

    const oldST = this.session.get("state").toJSON();
    const oldState = JSON.stringify(oldST);
    const oldCode = oldST.code;
    const newState = JSON.parse(applyPatch(oldState, JSON.parse(patch)));
    const newRec: Record<ICodeSession> = Record<ICodeSession>(newState)();

    console.log({ newState });
    console.log(newRec.hashCode());

    const newRecord = this.session.get("state").merge(newRec);
    const newCode = newRecord.get("code");
    if (oldCode === newCode) return;
    console.log(newRecord.hashCode());
    const newHashCheck = newRecord.hashCode();

    if (newHashCheck === newHash) {
      this.session = this.session.set("state", newRecord);
      //  console.error("WRONG update");
      return;
    } else {
      console.log("WRONG");
      console.log({
        newState,
      });
    }
  }

  public json() {
    const user = this.session.toJSON();
    const state = user.state.toJSON();
    return { ...user, state };
  }
  public setRoom(room: string) {
    const user = this.session.set("room", room);
    this.session = user;
  }
}

let session: CodeSession | null = null;

export default (room: string, u: IUserJSON): ICodeSess =>
  session || new CodeSession(room, u);

function storageAvailable(type: string) {
  try {
    if (window.hasOwnProperty(type) === false) return;
    var storage = window[type as keyof Window];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

function createPatch(oldCode: string, newCode: string) {
  return JSON.stringify(createDelta(oldCode, newCode));
}
