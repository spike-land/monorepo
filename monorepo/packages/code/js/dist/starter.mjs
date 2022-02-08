import{b as T}from"./chunks/chunk-EWK5PE2Q.mjs";import"./chunks/chunk-PKNNKAVZ.mjs";import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as ee}from"https://spike.land/dist/emotion.mjs";var U,W,j;var N,F=async(e,n)=>(N=N||(await import("./chunks/session-KKRBFQ23.mjs")).default,N(e,n));async function te(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./chunks/editor-WJR5UIST.mjs"),a=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,o=l=>H(i.getModel().getValue(),l.changes,e,++e.i),{editor:i,monaco:s}=await t({language:"typescript",container:n,code:e.code});i.onDidChangeModelContent(a(o,100)),window.monaco=s,e.editor=i,window.sess=e}async function ne({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),o=await(await e.languages.typescript.getTypeScriptWorker())(t),i=t.uri.toString(),s=o.getSemanticDiagnostics(i),l=o.getCompilerOptionsDiagnostics(i),d=o.getSyntacticDiagnostics(i),g=await Promise.race([s,l,d]);return console.log(g),[]}async function H(e,n=null,t,a){t.changes.push(n),U=U||(await import("./chunks/prettierEsm-KTD3QDBM.mjs")).formatter,j=j||(await import("./chunks/babelEsm-KXY4A2AB.mjs")).babelTransform,W=j,t.errorText="";try{let o=await U(e),i=await W(o),s=!1;if(i.length>0){if(a<t.i)return;try{let{getHtmlAndCss:d}=await import("./chunks/renderToString-VXYYQIOI.mjs");if(a<t.i)return;let g=await ae(i),{html:y,css:E}=d(g);t.transpiled=i,t.html=y;let c=await oe(i);t.setChild(b=>[...b,c]),t.children=c,s=!y,t.code=o,t.codeNonFormatted=e;let f=o;if(t.css=E,t.i!==a)return;t.saveCode&&await t.saveCode({transpiled:i,code:f,i:a,css:E,html:y});return}catch(d){console.error("EXCEPTION"),console.log({e:d}),s=!0,console.error({restartError:s})}}if(t.i>a)return;let l=await ne(t);if(t.i>a)return;s&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(o){t.errorText=o.message,console.error(o.message)}}async function G(e,n,t,a){e.saveCode=a,e.children=null;let{renderPreviewWindow:o}=await import("./chunks/renderPreviewWindow-VECIWQ4B.mjs");await o(e,n,t),t||await te(e),e.update=i=>H(i,null,e),H(e.code,null,e,-1)}async function oe(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=V(t),o=await import(a);return URL.revokeObjectURL(a),ee(o.default)}function V(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function ae(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=V(t),o=(await import(a)).default;return URL.revokeObjectURL(a),o}var x=null,I=!1,A=[],ie="spike.land",u={},J="",L="",C="",w="",B=0,v=0,m,k,Q,_=!1,S;var h=null,M=()=>h.session.get("state"),P=null;setInterval(()=>{Date.now()-v>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!_){_=!0,x=null;let e=Date.now()-Q;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),R()}}async function X({code:e,transpiled:n,html:t,css:a,i:o}){if(S){let i=Date.now();if(u.i=o,u.lastRtcUpdate){let d=i-u.lastUpdate;if(d<1e3&&(await K(200-d),o!==u.i))return}u.lastRtcUpdate=Date.now();let s=M().toJSON();s.html=t,s.css=a,s.transpiled=n,s.code=e,s.i=o;let l=L?h.createPatchFromHashCode(L,s):h.createPatch(s);l&&l.patch!==""&&S.send(l)}if(x){let i=Date.now();if(u.i=o,u.lastUpdate){let g=i-u.lastUpdate;if(g<1e3&&(await K(1e3-g),o!==u.i))return}u.lastUpdate=Date.now();let s=M().toJSON();s.html=t,s.css=a,s.transpiled=n,s.code=e,s.i=o;let l=J?h.createPatchFromHashCode(J,s):h.createPatch(s);if(!l)return;let d=JSON.stringify({...l,name:w});l.patch!==""&&x.send(d)}}var R=async(e,n,t)=>{C=C||e||"code-main",window.room=e,n&&(w=n);let o=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(h=h||await F(C,{name:w,room:C,state:o,events:[]}),window.mySession=h,!t&&!window.sess){let i={...M().toJSON(),setChild:()=>{},changes:[],children:[null],errorText:""},s=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,l=location.pathname.endsWith("public");G(i,C,l,s(X,100)),window.sess=i}I||(I=!0,setTimeout(()=>{I=!1},1e4),m=new WebSocket("wss://"+ie+"/api/room/"+C+"/websocket"),_=!1,Q=Date.now(),m.addEventListener("open",()=>{P?clearInterval(P):P=setInterval(()=>{let i=Date.now(),s=i-v;if(i-v>3e4)try{m.send(JSON.stringify({name:w,time:B+s}))}catch(l){D()}},3e4),x=m,globalThis.broad=X,globalThis.chCode=k,m.send(JSON.stringify({name:w}))}),m.addEventListener("message",i=>z(i,"ws")),m.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),m.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},$=window.location.hostname;$||($="localhost");p("Hostname: "+$);var r={};globalThis.connections=r;function p(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function re(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Y(e){p("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(c=>({urls:`stun:${c}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],r[e]=r[e]||new RTCPeerConnection(n),r[e].onicecandidate=d,r[e].oniceconnectionstatechange=g,r[e].onicegatheringstatechange=E,r[e].onsignalingstatechange=y,r[e].onnegotiationneeded=s,r[e].ontrack=l,r[e].addEventListener("datachannel",o);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=r[e].createDataChannel(e,t);return a.binaryType="arraybuffer",a.addEventListener("message",c=>{console.log("***********RTC***",{msg:c});let f=JSON.parse(c.data);return f&&f.hashCode&&(L=f.hashCode),f&&f.newHash&&(L=f.newHash),z(c,"rtc")}),a.addEventListener("error",c=>{console.log("xxxxxx-  Data Channel Error:",c)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=e,A.push(a),r[e].sendChannel=a,window.sendChannel=S={send:c=>{let f=c.target;c.name=c.name||w;let b=JSON.stringify(c);A.map(O=>O.readyState==="open"&&(!f||f&&O.target===f)&&O.send(b))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),r[e];function o(c){console.log("Receive Channel Callback");let f=c.channel;f.binaryType="arraybuffer",f.addEventListener("close",i),f.addEventListener("message",b=>z(b,"rtc")),A.push(f)}function i(){console.log("Receive channel is closed"),r[e].close(),r[e]=null,console.log("Closed remote peer connection")}async function s(){p("*** Negotiation needed");try{p("---> Creating offer");let c=await r[e].createOffer();if(r[e].signalingState!="stable"){p("     -- The connection isn't stable yet; postponing...");return}p("---> Setting local description to the offer"),await r[e].setLocalDescription(c),p("---> Sending the offer to the remote peer"),m.send(JSON.stringify({target:e,name:w,type:"video-offer",sdp:r[e].localDescription}))}catch(c){p("*** The following error occurred while handling the negotiationneeded event:")}}function l(c){p("*** Track event"),document.querySelector("#received_video").srcObject=c.streams[0],document.querySelector("#hangup-button").disabled=!1}function d(c){c.candidate&&(p("*** Outgoing ICE candidate: "+c.candidate),m.send(JSON.stringify({type:"new-ice-candidate",target:e,name:w,candidate:c.candidate})))}function g(){switch(p("*** ICE connection state changed to "+r[e].iceConnectionState),r[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function y(){switch(p("*** connections[target].signalingState  changed to: "+r[e].signalingState),r[e].signalingState){case"closed":break}}function E(){p("*** connections[target].iceGatheringState changed to: "+r[e].iceGatheringState)}}async function se(e,n){p("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(r[n]),await r[n].addIceCandidate(t)}async function ce(e,n){p("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await r[n].setRemoteDescription(t).catch(console.error)}async function le(e,n){r[n]||await Y(n);let t=new RTCSessionDescription(e.sdp);if(r[n].signalingState!="stable"){p("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([r[n].setLocalDescription({type:"rollback"}),r[n].setRemoteDescription(t)]);return}p("  - Setting remote description"),await r[n].setRemoteDescription(t),p("---> Creating and sending answer to caller"),await r[n].setLocalDescription(await r[n].createAnswer()),m.send(JSON.stringify({target:n,name:w,type:"video-answer",sdp:r[n].localDescription}))}async function z(e,n){v=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==w&&!r[t.name])try{await Y(t.name)}catch(a){console.log({e:a}),re("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await se(t,t.name);return}if(t.type==="video-offer"){await le(t,t.name);return}if(t.type==="video-answer"){await ce(t,t.name);return}if(n===m&&t.hashCode&&(J=t.hashCode),t.patch&&n==="ws"||t.name!==w){if(t.newHash===h.hashCode())return;if(t.oldHash===h.hashCode()){h.applyPatch(t),k(h.session.get("state").code,h.session.get("state").i),S&&S.send({hashCode:t.newHash});return}if(t.newHash===h.hashCode())return;if(t.code&&t.transpiled){let a=h.createPatch(t);h.applyPatch(a),k(t.code),S&&S.send({hashCode:a.newHash});return}return}t.timestamp&&(v=Date.now(),B=t.timestamp),t.name!==w&&(B=t.timestamp)}function K(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}import de from"https://spike.land/react.mjs";function Z(e){let n=new Uint8Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charCodeAt(o);let t=new Uint16Array(n.buffer),a="";for(let o=0;o<t.length;o++)a+=String.fromCharCode(t[o]);return a}import{jsx as q}from"https://spike.land/dist/emotion.mjs";window.React=de;var be=async e=>{let n=(await import(a(Z(e)))).default,t=document.querySelector("#zbody");T(t,q(n));function a(o){let i=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(i)}},ve=async e=>{let n=location.pathname.split("/");window.aniStart=Date.now();let t=e||(n[1]==="api"&&n[2]==="room"?n[3]:(n.pop()||n.pop()).slice(-12))||"code-main",a=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./chunks/uidV4-5C2NDIGC.mjs")).default()).slice(0,8);if(location.pathname.includes("hydrate")){let o=(await import(`https://spike.land/api/room/${t}/js`)).default,i=(await import("./chunks/textdiff-create-ZT4L63UO.mjs")).default,s=document.querySelector("#zbody");window.aniStart=Date.now(),T(s,q(o)),R(t,a);return}else(async()=>{let o=(await import(`https://spike.land/api/room/${t}/js`)).default,i=document.getElementById("zbody");if(render(q(o),i),i){let s=(await import(`https://spike.land/api/room/${t}/js`)).default,{jsx:l}=await import("https://spike.land/dist/emotion.mjs"),d=document.querySelector("#zbody");if(!d){if(d=document.getElementById("root"),!d)throw new Error;let y=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();d.innerHTML=`<style>${y.css}</style><div id="zbody">${y.html}</div>`,d=document.querySelector("#zbody")}if(!d)throw new Error;T(d,l(s))}else{let l=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();i=document.getElementById("root"),i.innerHTML=`<style>${l.css}</style><div id="zbody">${l.html}</div>`,i=document.getElementById("zbody")}})();R(t,a)};export{be as hydrateBinary,ve as run};
