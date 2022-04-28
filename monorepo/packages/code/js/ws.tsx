import type { ICodeSession } from "./session";
import debounce from "lodash/debounce";
import uidV4 from "./uidV4.mjs";
import * as monaco from "monaco-editor";
import { jsx } from "@emotion/react";
import { Fragment } from "react";

const webRtcArray: (RTCDataChannel & { target: string })[] = [];
const hostname = window.location.hostname || "spike.land";

const path = location.pathname.split("/");
const room =
  ((path[1] === "api" && path[2] === "room")
    ? path[3]
    : (path.pop() || path.pop())!.slice(-12)) ||
  "code-main";
const user = ((self && self.crypto && self.crypto.randomUUID &&
  self.crypto.randomUUID()) || (uidV4())).slice(
    0,
    8,
  );

let wsLastHashCode = 0;
let webRTCLastSeenHashCode = 0;
let roomName = "";
let username = "";
let lastSeenTimestamp = 0;
let lastSeenNow = 0;
let ws: WebSocket | null = null;
let rejoined = false;
const sendChannel = {
  send: ((data: any) => {
    const target = data.target;
    const messageString = JSON.stringify({
      ...data,
      name: data.name || username,
    });
    webRtcArray.map((ch) => {
      try {
        if (ch.readyState !== "open") return;

        if (ch.target === target) {
          ch.send(messageString);
        }
      } catch (e) {
        console.error("Error in broadcasting event", { e });
      }
    });
  }),
};
// Let createDelta;
// let applyPatch;

const resp = await fetch(
  `https://spike.land/api/room/${room}/session`,
);
const state = await resp.json();

const { startSession } = await import("./session");

const mySession = startSession(room, {
  name: username,
  state,
});

const mST = () => mySession.json().state;

let intervalHandler: number | null = null;

setInterval(() => {
  if (Date.now() - lastSeenNow > 40_000) {
    rejoined = false;
    rejoin();
  } else {
    console.log("no_need_to_rejoin");
  }
}, 30_000);

const w = window as unknown as {
  sess: {
    editor: typeof monaco.editor;
    update: (code: string) => void;
  };
};

const chCode = async (code: string, i: number) => {
  if (!code) {
    return;
  }

  const sess = mST();

  if (i < sess.i) {
    return;
  }

  if (code === sess.code) {
    return;
  }

  try {
    const modelUri = monaco.Uri.parse("file:///app/index.tsx");
    if (
      w.sess && w.sess.editor && w.sess.editor.getModel &&
      w.sess.editor.getModel(modelUri)
    ) {
      const model = w.sess.editor.getModel(modelUri);
      if (model) {
        model.setValue(code);
      }
    } else {
      w.sess && w.sess.update && w.sess.update(code);
    }
  } catch (error) {
    console.error({ e: error });
  }
};

async function rejoin() {
  if (!rejoined || ws === null) {
    ws = null;

    if (ws) return ws;

    ws = await join(jsx(Fragment));

    return ws;
  }
  return ws;
}

export const saveCode = debounce(broadcastCodeChange, 500);

async function broadcastCodeChange(sess: ICodeSession) {
  (async () => {
    try {
      if (sendChannel) {
        const message = webRTCLastSeenHashCode
          ? mySession.createPatchFromHashCode(
            webRTCLastSeenHashCode,
            sess,
          )
          : mySession.createPatch(sess);
        if (message && message.patch !== "") {
          sendChannel.send(message);
        }
      }
    } catch (e) {
      console.error("Error sending RTC...", { e });
    }
  })();

  if (ws) {
    const message = wsLastHashCode
      ? mySession.createPatchFromHashCode(wsLastHashCode, sess)
      : mySession.createPatch(sess);

    if (!message) {
      return;
    }

    const messageString = JSON.stringify({ ...message, name: username });
    if (message.patch !== "") {
      ws.send(messageString);
    }
  } else {
    rejoined = false;
    await rejoin();
  }
}

export async function join(App: JSX.Element) {
  roomName = roomName || room || "code-main";

  if (user) {
    username = user;
  }
  if (ws !== null) return ws;

  rejoined = true;

  const wsConnection = new WebSocket(
    "wss://" + hostname + "/api/room/" + roomName + "/websocket",
  );
  rejoined = false;

  wsConnection.addEventListener("open", () => {
    ws = wsConnection;
    // if (delta) {
    //   if (delta !== deltaSent) {
    //     deltaSent = delta;
    //     ws.send(JSON.stringify({
    //       type: "delta",
    //       delta,
    //     }));
    //   }
    //   return;
    // }
    if (intervalHandler) {
      clearInterval(intervalHandler);
    }

    intervalHandler = setInterval(() => {
      const now = Date.now();
      const diff = now - lastSeenNow;

      if (now - lastSeenNow > 30_000) {
        try {
          wsConnection.send(
            JSON.stringify({
              name: username,
              time: lastSeenTimestamp + diff,
            }),
          );
        } catch {
          rejoined = false;
          rejoin();
        }
      }
    }, 30_000);

    // Send user info message.
    wsConnection.send(JSON.stringify({ name: username }));
    return wsConnection;
  });

  if (!w.sess) {
    const session = {
      ...mST(),
      setChild: () => {},
      changes: [],

      children: [App],
      errorText: "",
    };

    const stayFullscreen = location.pathname.endsWith("public");
    const { quickStart } = await import("./quickStart");
    quickStart(
      session,
      roomName,
      stayFullscreen,
    );
  }

  wsConnection.addEventListener(
    "message",
    (message) => processWsMessage(message, "ws"),
  );

  wsConnection.addEventListener("close", (event) => {
    console.log("WebSocket closed, reconnecting:", event.code, event.reason);
    rejoined = false;
    rejoin();
  });

  wsConnection.addEventListener("error", (event) => {
    console.log("WebSocket error, reconnecting:", event);
    rejoined = false;
    rejoin();
  });
  return wsConnection;
}

// Create the RTCPeerConnection which knows how to talk to our
// selected STUN/TURN server and then uses getUserMedia() to find
// our camera and microphone and add that stream to the connection for
// use in our video call. Then we configure event handlers to get
// needed notifications on the call.

let myHostname = window.location.hostname;
if (!myHostname) {
  myHostname = "localhost";
}

log("Hostname: " + myHostname);

// WebSocket chat/signaling channel variables.

// The media constraints object describes what sort of stream we want
// to request from the local A/V hardware (typically a webcam and
// microphone). Here, we specify only that we want both audio and
// video; however, you can be more specific. It's possible to state
// that you would prefer (or require) specific resolutions of video,
// whether to prefer the user-facing or rear-facing camera (if available),
// and so on.
//
// See also:
// https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
//

const connections: {
  [target: string]: RTCPeerConnection;
} = {}; // To st/ RTCPeerConnection
// var transceiver = null;         // RTCRtpTransceiver
// var webcamStream = null;        // MediaStream from webcam

// Output logging information to console.
function log(text: string) {
  const time = new Date();

  console.log("[" + time.toLocaleTimeString() + "] " + text);
}

// Output an error message to console.

function log_error(text: string) {
  const time = new Date();

  console.trace("[" + time.toLocaleTimeString() + "] " + text);
}

const rcpOptions = {
  iceServers: ["stun3.l.google.com:19302"].map((url) => ({
    urls: `stun:${url}`,
  })),
};

rcpOptions.iceServers = [{ urls: "stun:stun.stunprotocol.org:3478" }, {
  urls: "stun:stun.l.google.com:19302",
}];

async function createPeerConnection(target: string) {
  log(`Setting up a connection with ${target}`);
  if (connections[target]) {
    log(`Aborting, since we have connection with this ${target}`);
    return;
  }

  // Create an RTCPeerConnection which knows to use our chosen
  // STUN server.

  connections[target] = new RTCPeerConnection(
    rcpOptions,
  );

  // Set up event handlers for the ICE negotiation process.

  connections[target].onicecandidate = (event) => {
    if (event.candidate) {
      log("*** Outgoing ICE candidate: " + event.candidate);

      ws!.send(JSON.stringify({
        type: "new-ice-candidate",
        target,
        name: username,
        candidate: event.candidate,
      }));
    }
  };
  connections[target].oniceconnectionstatechange =
    handleICEConnectionStateChangeEvent;
  connections[target].onicegatheringstatechange =
    handleICEGatheringStateChangeEvent;
  connections[target].onsignalingstatechange = () => {
    log(
      "*** connections[target].signalingState  changed to: " +
        connections[target].signalingState,
    );
    switch (connections[target].signalingState) {
      case "closed":
        break;
    }
  };
  connections[target].onnegotiationneeded = handleNegotiationNeededEvent;
  connections[target].ontrack = (ev) => console.log(ev);

  connections[target].ondatachannel = (event) => {
    console.log("Receive Channel Callback");
    const rtc = event.channel;
    rtc.binaryType = "arraybuffer";
    rtc.addEventListener("close", onReceiveChannelClosed);

    rtc.addEventListener(
      "message",
      (message) => processWsMessage(message, "rtc"),
    );
    const rtcWithTarget = Object.assign(rtc, { target });
    webRtcArray.push(rtcWithTarget);
  };

  const dataChannelOptions = {
    ordered: true, // Do not guarantee order
    reliable: true,
    maxPacketLifeTime: 3000, // In milliseconds
  };

  const rtc = Object.assign(
    connections[target].createDataChannel(
      target,
      dataChannelOptions,
    ),
    { target },
  );

  rtc.binaryType = "arraybuffer";

  rtc.addEventListener("message", (message) => {
    console.log("***********RTC***", { msg: message });

    const data = JSON.parse(message.data);
    if (data && data.hashCode) {
      webRTCLastSeenHashCode = data.hashCode;
    }

    if (data && data.newHash) {
      webRTCLastSeenHashCode = data.newHash;
    }

    return processWsMessage(message, "rtc");
  });

  rtc.addEventListener("error", (error) => {
    console.log("xxxxxx-  Data Channel Error:", error);
  });

  // Rtc.onmessage = (msg) => processWsMessage(msg, "rtc");

  rtc.addEventListener("open", () => {
    console.log("@@@@@@@@RTC IS OPEN&&&&&&&&");
    webRtcArray.push(rtc);
    // connections[target].sendChannel = rtc;
  });

  rtc.addEventListener("close", () => {
    console.log("xxxxxxxx- The Data Channel is Closed");
  });

  return connections[target];

  function onReceiveChannelClosed() {
    console.log("Receive channel is closed");
    connections[target].close();
    delete connections[target];
    console.log("Closed remote peer connection");
  }

  async function handleNegotiationNeededEvent() {
    log("*** Negotiation needed");

    try {
      log("---> Creating offer");
      const offer = await connections[target].createOffer();

      if (connections[target].signalingState != "stable") {
        log("     -- The connection isn't stable yet; postponing...");
        return;
      }

      // Establish the offer as the local peer's current
      // description.

      log("---> Setting local description to the offer");
      await connections[target].setLocalDescription(offer);

      // Send the offer to the remote peer.

      log("---> Sending the offer to the remote peer");
      ws && ws.send(JSON.stringify({
        target,
        name: username,
        type: "offer",
        sdp: connections[target].localDescription,
      }));
    } catch {
      log(
        "*** The following error occurred while handling the negotiationneeded event:",
      );
    }
  }

  function handleICEConnectionStateChangeEvent() {
    log(
      "*** ICE connection state changed to " +
        connections[target].iceConnectionState,
    );

    switch (connections[target].iceConnectionState) {
      case "closed":
      case "failed":
      case "disconnected":
        break;
    }
  }

  function handleICEGatheringStateChangeEvent() {
    log(
      "*** connections[target].iceGatheringState changed to: " +
        connections[target].iceGatheringState,
    );
  }
}

async function handleNewICECandidateMessage(
  message: {
    candidate: RTCIceCandidateInit;
  },
  target: string,
) {
  log(
    "*** Adding received ICE candidate: " + JSON.stringify(message.candidate),
  );
  const candidate = new RTCIceCandidate(message.candidate);
  // const candidate = new RTCIceCandidate(message);

  console.log(connections[target]);
  await connections[target].addIceCandidate(candidate);
}

async function handleChatAnswerMessage(
  message: { sdp: RTCSessionDescriptionInit },
  target: string,
) {
  log("*** Call recipient has accepted our call");

  // Configure the remote description, which is the SDP payload
  // in our "answer" message.

  const desc = new RTCSessionDescription(message.sdp);
  // const desc = new RTCSessionDescription(message);

  await connections[target].setRemoteDescription(desc).catch(console.error);
}

async function handleChatOffer(
  message: { sdp: RTCSessionDescriptionInit },
  target: string,
) {
  if (!connections[target]) await createPeerConnection(target);

  if (!message.sdp) return;
  const desc = new RTCSessionDescription(message.sdp);
  // const desc = new RTCSessionDescription(message);

  if (connections[target].signalingState != "stable") {
    log("  - But the signaling state isn't stable, so triggering rollback");

    await Promise.all([
      connections[target].setLocalDescription({ type: "rollback" }),
      connections[target].setRemoteDescription(desc),
    ]);
    return;
  }

  log("  - Setting remote description");
  await connections[target].setRemoteDescription(desc);

  log("---> Creating and sending answer to caller");

  await connections[target].setLocalDescription(
    await connections[target].createAnswer(),
  );

  const webSocket = ws || await rejoin();
  if (webSocket === null) return;

  webSocket.send(JSON.stringify({
    target,
    name: username,
    type: "answer",
    sdp: connections[target].localDescription,
  }));
}

async function processWsMessage(event: { data: string }, source: "ws" | "rtc") {
  console.log(source, { event });

  lastSeenNow = Date.now();

  const data = JSON.parse(event.data);

  console.log({ data });
  // MySession.addEvent(data);

  if (
    data.name && data.name !== username &&
    !connections[data.name as keyof typeof connections]
  ) {
    try {
      createPeerConnection(data.name);
    } catch (error) {
      console.log({ e: error });
      log_error("Error with p2p");
    }
  }

  console.log(source, data.name);

  if (data.type === "new-ice-candidate") {
    await handleNewICECandidateMessage(data, data.name);
    return;
  }

  if (data.type === "offer") {
    await handleChatOffer(data, data.name);
    return;
  }

  if (data.type === "answer") {
    await handleChatAnswerMessage(data, data.name);

    return;
  }

  if (source === "ws" && data.hashCode) {
    wsLastHashCode = data.hashCode;
  }

  if (data.patch && source === "ws" || data.name !== username) {
    if (data.newHash === mySession.hashCode()) {
      return;
    }

    mySession.applyPatch(data.oldHash, data.newHash, data.patch);
    if (data.newHash === mySession.hashCode()) {
      chCode(
        mST().code,
        mST().i,
      );

      if (sendChannel) {
        sendChannel.send({ hashCode: data.newHash });
      }

      return;
    }

    if (data.newHash === mySession.hashCode()) {
      console.log("there is an error. fetch tje state....");
      return;
    }

    if (data.code && data.transpiled) {
      const messageData = mySession.createPatch(data);
      console.log("APPLYING PATCH AGAIN");
      mySession.applyPatch(messageData);
      chCode(data.code, data.i);
      if (sendChannel) {
        sendChannel.send({ hashCode: messageData.newHash });
      }

      return;
    }

    return;
  }

  if (data.timestamp) {
    lastSeenNow = Date.now();
    lastSeenTimestamp = data.timestamp;
  }

  if (data.name === username) {
    return;
  }

  lastSeenTimestamp = data.timestamp;
}
