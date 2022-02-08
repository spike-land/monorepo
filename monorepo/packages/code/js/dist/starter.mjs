import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as se}from"https://spike.land/dist/emotion.mjs";var A,F,H;var j,G=async(e,n)=>(j=j||(await import("./chunks/session-CCASTQL4.mjs")).default,j(e,n));async function re(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./chunks/editor-FTGNJWFW.mjs"),o=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,a=l=>I(s.getModel().getValue(),l.changes,e,++e.i),{editor:s,monaco:r}=await t({language:"typescript",container:n,code:e.code});s.onDidChangeModelContent(o(a,100)),window.monaco=r,e.editor=s,window.sess=e}async function ce({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),a=await(await e.languages.typescript.getTypeScriptWorker())(t),s=t.uri.toString(),r=a.getSemanticDiagnostics(s),l=a.getCompilerOptionsDiagnostics(s),m=a.getSyntacticDiagnostics(s),y=await Promise.race([r,l,m]);return console.log(y),[]}async function I(e,n=null,t,o){t.changes.push(n),A=A||(await import("./chunks/prettierEsm-KTD3QDBM.mjs")).formatter,H=H||(await import("./chunks/babelEsm-KXY4A2AB.mjs")).babelTransform,F=H,t.errorText="";try{let a=await A(e),s=await F(a),r=!1;if(s.length>0){if(o<t.i)return;try{let{getHtmlAndCss:m}=await import("./chunks/renderToString-I7EBXMSS.mjs");if(o<t.i)return;let y=await de(s),{html:b,css:x}=m(y);t.transpiled=s,t.html=b;let c=await le(s);t.setChild(v=>[...v,c]),t.children=c,r=!b,t.code=a,t.codeNonFormatted=e;let f=a;if(t.css=x,t.i!==o)return;t.saveCode&&await t.saveCode({transpiled:s,code:f,i:o,css:x,html:b});return}catch(m){console.error("EXCEPTION"),console.log({e:m}),r=!0,console.error({restartError:r})}}if(t.i>o)return;let l=await ce(t);if(t.i>o)return;r&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(a){t.errorText=a.message,console.error(a.message)}}async function X(e,n,t,o){e.saveCode=o,e.children=null;let{renderPreviewWindow:a}=await import("./chunks/renderPreviewWindow-POALHC7K.mjs");await a(e,n,t),t||await re(e),e.update=s=>I(s,null,e),I(e.code,null,e,-1)}async function le(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,o=K(t),a=await import(o);return URL.revokeObjectURL(o),se(a.default)}function K(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function de(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,o=K(t),a=(await import(o)).default;return URL.revokeObjectURL(o),a}var R=null,P=!1,J=[],fe="spike.land",g={},B="",L="",C="",w="",M=0,T=0,u,U,Z,V=!1,S;var h=null,W=()=>h.session.get("state"),_=null;setInterval(()=>{Date.now()-T>4e4?D():console.log("no_need_to_rejoin")},3e4);U=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!V){V=!0,R=null;let e=Date.now()-Z;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),k()}}async function Q({code:e,transpiled:n,html:t,css:o,i:a}){if(S){let s=Date.now();if(g.i=a,g.lastRtcUpdate){let m=s-g.lastUpdate;if(m<1e3&&(await Y(200-m),a!==g.i))return}g.lastRtcUpdate=Date.now();let r=W().toJSON();r.html=t,r.css=o,r.transpiled=n,r.code=e,r.i=a;let l=L?h.createPatchFromHashCode(L,r):h.createPatch(r);l&&l.patch!==""&&S.send(l)}if(R){let s=Date.now();if(g.i=a,g.lastUpdate){let y=s-g.lastUpdate;if(y<1e3&&(await Y(1e3-y),a!==g.i))return}g.lastUpdate=Date.now();let r=W().toJSON();r.html=t,r.css=o,r.transpiled=n,r.code=e,r.i=a;let l=B?h.createPatchFromHashCode(B,r):h.createPatch(r);if(!l)return;let m=JSON.stringify({...l,name:w});l.patch!==""&&R.send(m)}}var k=async(e,n,t)=>{C=C||e||"code-main",window.room=e,n&&(w=n);let a=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(h=h||await G(C,{name:w,room:C,state:a,events:[]}),window.mySession=h,!t&&!window.sess){let s={...W().toJSON(),setChild:()=>{},changes:[],children:[globalThis.App],errorText:""},r=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,l=location.pathname.endsWith("public");X(s,C,l,r(Q,100)),window.sess=s}P||(P=!0,setTimeout(()=>{P=!1},1e4),u=new WebSocket("wss://"+fe+"/api/room/"+C+"/websocket"),V=!1,Z=Date.now(),u.addEventListener("open",()=>{_?clearInterval(_):_=setInterval(()=>{let s=Date.now(),r=s-T;if(s-T>3e4)try{u.send(JSON.stringify({name:w,time:M+r}))}catch(l){D()}},3e4),R=u,globalThis.broad=Q,globalThis.chCode=U,u.send(JSON.stringify({name:w}))}),u.addEventListener("message",s=>$(s,"ws")),u.addEventListener("close",s=>{console.log("WebSocket closed, reconnecting:",s.code,s.reason),D()}),u.addEventListener("error",s=>{console.log("WebSocket error, reconnecting:",s),D()}))},q=window.location.hostname;q||(q="localhost");d("Hostname: "+q);var i={};globalThis.connections=i;function d(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function pe(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function ee(e){d("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(c=>({urls:`stun:${c}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],i[e]=i[e]||new RTCPeerConnection(n),i[e].onicecandidate=m,i[e].oniceconnectionstatechange=y,i[e].onicegatheringstatechange=x,i[e].onsignalingstatechange=b,i[e].onnegotiationneeded=r,i[e].ontrack=l,i[e].addEventListener("datachannel",a);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},o=i[e].createDataChannel(e,t);return o.binaryType="arraybuffer",o.addEventListener("message",c=>{console.log("***********RTC***",{msg:c});let f=JSON.parse(c.data);return f&&f.hashCode&&(L=f.hashCode),f&&f.newHash&&(L=f.newHash),$(c,"rtc")}),o.addEventListener("error",c=>{console.log("xxxxxx-  Data Channel Error:",c)}),o.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),o.target=e,J.push(o),i[e].sendChannel=o,window.sendChannel=S={send:c=>{let f=c.target;c.name=c.name||w;let v=JSON.stringify(c);J.map(N=>N.readyState==="open"&&(!f||f&&N.target===f)&&N.send(v))}}}),o.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),i[e];function a(c){console.log("Receive Channel Callback");let f=c.channel;f.binaryType="arraybuffer",f.addEventListener("close",s),f.addEventListener("message",v=>$(v,"rtc")),J.push(f)}function s(){console.log("Receive channel is closed"),i[e].close(),i[e]=null,console.log("Closed remote peer connection")}async function r(){d("*** Negotiation needed");try{d("---> Creating offer");let c=await i[e].createOffer();if(i[e].signalingState!="stable"){d("     -- The connection isn't stable yet; postponing...");return}d("---> Setting local description to the offer"),await i[e].setLocalDescription(c),d("---> Sending the offer to the remote peer"),u.send(JSON.stringify({target:e,name:w,type:"video-offer",sdp:i[e].localDescription}))}catch(c){d("*** The following error occurred while handling the negotiationneeded event:")}}function l(c){d("*** Track event"),document.querySelector("#received_video").srcObject=c.streams[0],document.querySelector("#hangup-button").disabled=!1}function m(c){c.candidate&&(d("*** Outgoing ICE candidate: "+c.candidate),u.send(JSON.stringify({type:"new-ice-candidate",target:e,name:w,candidate:c.candidate})))}function y(){switch(d("*** ICE connection state changed to "+i[e].iceConnectionState),i[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function b(){switch(d("*** connections[target].signalingState  changed to: "+i[e].signalingState),i[e].signalingState){case"closed":break}}function x(){d("*** connections[target].iceGatheringState changed to: "+i[e].iceGatheringState)}}async function he(e,n){d("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(i[n]),await i[n].addIceCandidate(t)}async function me(e,n){d("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await i[n].setRemoteDescription(t).catch(console.error)}async function ue(e,n){i[n]||await ee(n);let t=new RTCSessionDescription(e.sdp);if(i[n].signalingState!="stable"){d("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([i[n].setLocalDescription({type:"rollback"}),i[n].setRemoteDescription(t)]);return}d("  - Setting remote description"),await i[n].setRemoteDescription(t),d("---> Creating and sending answer to caller"),await i[n].setLocalDescription(await i[n].createAnswer()),u.send(JSON.stringify({target:n,name:w,type:"video-answer",sdp:i[n].localDescription}))}async function $(e,n){T=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==w&&!i[t.name])try{await ee(t.name)}catch(o){console.log({e:o}),pe("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await he(t,t.name);return}if(t.type==="video-offer"){await ue(t,t.name);return}if(t.type==="video-answer"){await me(t,t.name);return}if(n===u&&t.hashCode&&(B=t.hashCode),t.patch&&n==="ws"||t.name!==w){if(t.newHash===h.hashCode())return;if(t.oldHash===h.hashCode()){h.applyPatch(t),U(h.session.get("state").code,h.session.get("state").i),S&&S.send({hashCode:t.newHash});return}if(t.newHash===h.hashCode())return;if(t.code&&t.transpiled){let o=h.createPatch(t);h.applyPatch(o),U(t.code),S&&S.send({hashCode:o.newHash});return}return}t.timestamp&&(T=Date.now(),M=t.timestamp),t.name!==w&&(M=t.timestamp)}function Y(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}import{hydrate as be}from"https://spike.land/dist/react.mjs";function te(e){let n=new Uint8Array(e.length);for(let a=0;a<n.length;a++)n[a]=e.charCodeAt(a);let t=new Uint16Array(n.buffer),o="";for(let a=0;a<t.length;a++)o+=String.fromCharCode(t[a]);return o}import{jsx as ve}from"https://spike.land/dist/emotion.mjs";var O,we=new Uint8Array(16);function ge(){if(!O&&(O=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(we)}var ye=/^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;function Ce(e){return typeof e=="string"&&ye.test(e)}var p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function Se(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(p[e[n+0]]+p[e[n+1]]+p[e[n+2]]+p[e[n+3]]+"-"+p[e[n+4]]+p[e[n+5]]+"-"+p[e[n+6]]+p[e[n+7]]+"-"+p[e[n+8]]+p[e[n+9]]+"-"+p[e[n+10]]+p[e[n+11]]+p[e[n+12]]+p[e[n+13]]+p[e[n+14]]+p[e[n+15]]).toLowerCase();if(!Ce(t))throw new TypeError("Stringified UUID is invalid");return t}function ne(e,n,t){e=e||{};let o=e.random||(e.rng||ge)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){t=t||0;for(let a=0;a<16;++a)n[t+a]=o[a];return n}return Se(o)}var E=location.pathname.split("/");window.aniStart=Date.now();var z=(E[1]==="api"&&E[2]==="room"?E[3]:(E.pop()||E.pop()).slice(-12))||"code-main",oe=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||ne()).slice(0,8),ae=e=>{let n=document.querySelector("#zbody");be(n,ve(e)),globalThis.App=e,k(z,oe)};window.React=React;var He=async e=>{let n=(await import(ie(te(e)))).default;ae(n)},je=async()=>{globalThis.App&&k(z,oe);let n=await(await fetch(`https://spike.land/api/room/${z}/session`)).json(),t=document.getElementById("root");t.innerHTML=`<style>${n.css}</style><div id="zbody">${n.html}</div>`;let o=(await import(ie(n.transpiled))).default;ae(o)};function ie(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}export{He as hydrateBinary,je as run};
