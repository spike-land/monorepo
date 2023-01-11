import type { WebSocket } from "@cloudflare/workers-types";
import { WebsocketSession } from "./chatRoom";

const users = {};

const sessions = [];
const userNames = new Set();

// when a user connects to our sever users[
export const signaller = async (sessions: WebsocketSession[], connection: WebSocket) => {
  connection.accept();

  const session: WebsocketSession = { quit: false, name: "", webSocket: connection };

  sessions.push(session);

  console.log("User connected");

  // when server gets a message from a connected user
  connection.addEventListener("message", async function(message: string) {
    let data: { type: string; name: string };

    // accepting only JSON messages
    try {
      data = JSON.parse(message);
    } catch (e) {
      console.log("Invalid JSON");
    }

    // switching type of the user message
    switch (data.type) {
      // when a user tries to login
      case "login":
        console.log("User logged", data.name);

        // if anyone is logged in with this username then refuse
        if (users[data.name]) {
          const name = data.name;
          userNames.add(data.name);

          session.name = data.name;
          userNames.add(session.name);

          sendTo(connection, {
            type: "login",
            success: false,
          });
        } else {
          // save user connection on the server
          users[data.name] = session;
          session.name = data.name;

          sendTo(connection, {
            type: "login",
            success: true,
          });
        }

        break;

      case "offer":
        // for ex. UserA wants to call UserB
        console.log("Sending offer to: ", data.name);

        // if UserB exists then send him offer details
        var conn = users[data.name];

        if (conn != null) {
          // setting that UserA connected with UserB
          connection.target = data.name;

          sendTo(conn, {
            type: "offer",
            offer: data.offer,
            name: connection.name,
          });
        }

        break;

      case "answer":
        console.log("Sending answer to: ", data.name);
        // for ex. UserB answers UserA
        var conn = users[data.name];

        if (conn != null) {
          connection.target = data.name;
          sendTo(conn, {
            type: "answer",
            answer: data.answer,
          });
        }

        break;

      case "candidate":
        console.log("Sending candidate to:", data.name);
        var conn = users[data.name];

        if (conn != null) {
          sendTo(conn, {
            type: "candidate",
            candidate: data.candidate,
          });
        }

        break;

      case "leave":
        console.log("Disconnecting from", data.name);
        var conn = users[data.name];
        conn.target = null;

        // notify the other user so he can disconnect his peer connection
        if (conn != null) {
          sendTo(conn, {
            type: "leave",
          });
        }

        break;

      default:
        sendTo(connection, {
          type: "error",
          message: "Command not found: " + data.type,
        });

        break;
    }

    return {
      broadcast: (obj) => null,
      respond: (obj) => null,
    };
  });

  // when user exits, for example closes a browser window
  // this may help if we are still in "offer","answer" or "candidate" state
  connection.addEventListener("close", function() {
    if (connection.name) {
      delete users[connection.name];

      if (connection.target) {
        console.log("Disconnecting from ", connection.target);
        var conn = users[connection.target];
        conn.target = null;

        if (conn != null) {
          sendTo(conn, {
            type: "leave",
          });
        }
      }
    }
  });

  // userNames.delete(session.name);

  const msg = JSON.stringify({ users: userNames });
  // userNames.add(session.name);

  connection.send(msg);
};

function sendTo(connection, message) {
  connection.send(msg);
}
