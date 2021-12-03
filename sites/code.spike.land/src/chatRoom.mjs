import { handleErrors } from "./handleErrors.mjs";
import { RateLimiterClient } from "./rateLimiterClient.mjs";
import DiffMatchPatch from "diff-match-patch";
import Hash from "ipfs-only-hash";
import HTML from "./target.html"
import importMap from "@spike.land/code/js/importmap.json";
import { version } from "@spike.land/code/package.json";

export class Code {
  constructor(controller, env) {
    this.storage = controller.storage;

    this.env = env;
    this.sessions = [];
    this.lastTimestamp = 0;
  }


  async fetch(request) {
    return await handleErrors(request, async () => {
      let url = new URL(request.url);
      const codeSpace = url.searchParams.get("room");
      

      let path = url.pathname.slice(1).split("/");

      switch (path[0]) {
        case "code": {
          const code = await this.storage.get("code");

          return new Response(code, {
             status: 200, 
             headers: {
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache",
                "Content-Type": "text/html; charset=UTF-8"
              }
           });
          }
          case "js": {
            const transpiled = await this.storage.get("transpiled");
  
            return new Response(transpiled, {
               status: 200, 
               headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/javascript; charset=UTF-8"
                }
             });
            }
            case "html": {
              const htmlContent = await this.storage.get("html");
              const css = await this.storage.get("css");
    
              const html =  HTML.replace(`<div id="zbody"></div>`,`<style>${css}</style><div id="zbody">${htmlContent}</div>`).replace("$$ROOMNAME", "roomie").replace("$$IMPORTMAP", JSON.stringify({imports: {...importMap.imports, app: `https://code.spike.land/api/room/${codeSpace}/js`, ws: `https://code.spike.land/@${version}/dist/ws.mjs` }}));
  
              return new Response(html, {
                 status: 200, 
                 headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Cache-Control": "no-cache",
                    "Content-Type": "text/html; charset=UTF-8"
                  }
               });
              }        
              case "env": {

 
                
                return new Response(codeSpace, {
                   status: 200, 
                   headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Cache-Control": "no-cache",
                      "Content-Type": "text/html; charset=UTF-8"
                    }
                 });
                }   
      case "public": {

         const html =  HTML.replace("$$IMPORTMAP", JSON.stringify({imports: {...importMap.imports, app: `https://code.spike.land/@${version}/dist/ws.mjs` }}));
  
            return new Response(html, {
               status: 200, 
               headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Cache-Control": "no-cache",
                  "Content-Type": "text/html; charset=UTF-8"
                }
             });
            }

        case "websocket": {
          if (request.headers.get("Upgrade") != "websocket") {
            return new Response("expected websocket", { status: 400 });
          }

          let ip = request.headers.get("CF-Connecting-IP");
          // eslint-disable-next-line no-undef
          let pair = new WebSocketPair();

          await this.handleSession(pair[1], ip);

          return new Response(null, { status: 101, webSocket: pair[0] });
        }

        default:
          return new Response("Not found", { status: 404 });
      }
    });
  }

  async handleSession(webSocket, ip) {
    webSocket.accept();

    let limiterId = this.env.LIMITERS.idFromName(ip);
    let limiter = new RateLimiterClient(
      () => this.env.LIMITERS.get(limiterId),
      (err) => webSocket.close(1011, err.stack),
    );

    let session = { webSocket, blockedMessages: [] };
    this.sessions.push(session);

    this.sessions.forEach((otherSession) => {
      if (otherSession.name) {
        session.blockedMessages.push(
          JSON.stringify({ joined: otherSession.name }),
        );
      }
    });

    // let storage = await this.storage.list({ reverse: true, limit: 100 });
    // let backlog = [...storage.values()];

    // backlog.reverse();
    // backlog.forEach((value) => {
    //   session.blockedMessages.push(value);
    // });

    let hashOfCode;
    let code = await this.storage.get("code") || await this.storage.get("lastSeenCode");
    
    if (code){
      
      hashOfCode = await Hash.of(code);
      session.blockedMessages.push(
        JSON.stringify({ hashOfCode })
      );
    }

    let receivedUserInfo = false;
    webSocket.addEventListener("message", async (msg) => {
      try {
        if (session.quit) {
          webSocket.close(1011, "WebSocket broken.");
          return;
        }

        if (!limiter.checkLimit()) {
          webSocket.send(JSON.stringify({
            error: "Your IP is being rate-limited, please try again later.",
          }));
          return;
        }

        let data = JSON.parse(msg.data);

        if (!receivedUserInfo) {
          session.name = "" + (data.name || "anonymous");

          if (session.name.length > 32) {
            webSocket.send(JSON.stringify({ error: "Name too long." }));
            webSocket.close(1009, "Name too long.");
            return;
          }

          // Deliver all the messages we queued up since the user connected.
          session.blockedMessages.forEach((queued) => {
            webSocket.send(queued);
          });
          delete session.blockedMessages;

          // Broadcast to all other connections that this user has joined.
          this.broadcast({ joined: session.name });

          webSocket.send(JSON.stringify({ ready: true }));

          // Note that we've now received the user info message.
          receivedUserInfo = true;

          return;
        }

        // Construct sanitizedlastSeenCode message for storage and broadcast.
       
       
        const codeDiff = data.codeDiff;
        let code = data.code;
        let html = data.html;
        let css = data.css;
        let transpiled = data.transpiled;
        const transpiledDiff = data.transpiledDiff;
        const htmlDiff = data.htmlDiff;
        const cssDiff = data.cssDiff;
        const hashOfCode = data.hashOfCode;
        const hashOfPreviousCode = data.hashOfStarterCode;
     
        const previousCode = hashOfPreviousCode && ( await this.storage.get(hashOfPreviousCode) || await this.storage.get("code") || await this.storage.get("lastSeenCode"));
       
        data = { name: session.name };

        // if (code) {
        //   data.code = code;
        // }

        function unDiff(old, diff ) {
          const dmp = new DiffMatchPatch();
          const patches = dmp.patch_fromText((diff));
          const patchedCode = (dmp.patch_apply(patches, (old))[0]);
          return patchedCode;
        }

      

        if (codeDiff) {

          const patchedCode = unDiff(previousCode, codeDiff);

          const hashOfAPatched = await Hash.of(patchedCode);
          if (hashOfCode === hashOfAPatched) {
            data.hashOfCode = hashOfAPatched;
            data.hashOfPreviousCode = hashOfPreviousCode;
            data.codeDiff = codeDiff;
            code = patchedCode;
            try{
              if (cssDiff) css = unDiff(await this.storage.get("css"), cssDiff);
              if (transpiledDiff) transpiled = unDiff(await this.storage.get("transpiled"), transpiledDiff);
              if (htmlDiff) html = unDiff(await this.storage.get("html"), htmlDiff);
            } catch{
              data.errorUnDiff = true;
            }
          } else {
            data.hashToNeed = hashOfAPatched;
          }
        }
        


        if (data.code && data.hashOfCode) {
          const hashOfCode = await Hash.of(data.code);
          if (data.hashOfCode === hashOfCode) {
            code = data.code;
          }
        }
        // if (data..length > 4096) {
        //   webSocket.send(JSON.stringify({ error: "Message too long." }));
        //   return;
        // }

        data.timestamp = Math.max(Date.now(), this.lastTimestamp + 1);
        this.lastTimestamp = data.timestamp;

        // Broadcast the message to all other WebSockets.
        let dataStr = JSON.stringify(data);
        this.broadcast(dataStr);

        // Save message.
        let key = new Date(data.timestamp).toISOString();

        if (code && previousCode !== code) {
          const hashOfCode = await Hash.of(code);
          await this.storage.put(hashOfCode, code);
          await this.storage.put("code", code);
         
          
        }

        if (html) {
          await this.storage.put("html", html);
        }
        if (transpiled) {
          await this.storage.put("transpiled", transpiled);
        }
        if (css) {
          await this.storage.put("css", css);
        }
      
        await this.storage.put("code", code);
        await this.storage.put(key, dataStr)
      } catch (err) {
        webSocket.send(JSON.stringify({ error: err.stack }));
      }
    });

    let closeOrErrorHandler = (evt) => {
      session.quit = true;
      this.sessions = this.sessions.filter((member) => member !== session);
      if (session.name) {
        this.broadcast({ quit: session.name });
      }
    };
    webSocket.addEventListener("close", closeOrErrorHandler);
    webSocket.addEventListener("error", closeOrErrorHandler);
  }

  broadcast(message) {
    if (typeof message !== "string") {
      message = JSON.stringify(message);
    }

    let quitters = [];
    this.sessions = this.sessions.filter((session) => {
      if (session.name) {
        try {
          session.webSocket.send(message);
          return true;
        } catch (err) {
          session.quit = true;
          quitters.push(session);
          return false;
        }
      } else {
        session.blockedMessages.push(message);
        return true;
      }
    });

    quitters.forEach((quitter) => {
      if (quitter.name) {
        this.broadcast({ quit: quitter.name });
      }
    });
  }
}
