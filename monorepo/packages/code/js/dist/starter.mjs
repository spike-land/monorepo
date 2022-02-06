import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as Y}from"https://unpkg.com/@spike.land/esm@0.6.218/dist/emotion-react.mjs";var I,q,O;var H,B=async(e,n)=>(H=H||(await import("./chunks/session-KKRBFQ23.mjs")).default,H(e,n));async function Z(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./chunks/editor-BND3GWS6.mjs"),a=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,r=c=>N(o.getModel().getValue(),c.changes,e,++e.i),{editor:o,monaco:i}=await t({language:"typescript",container:n,code:e.code});o.onDidChangeModelContent(a(r,100)),window.monaco=i,e.editor=o,window.sess=e}async function ee({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),r=await(await e.languages.typescript.getTypeScriptWorker())(t),o=t.uri.toString(),i=r.getSemanticDiagnostics(o),c=r.getCompilerOptionsDiagnostics(o),d=r.getSyntacticDiagnostics(o),m=await Promise.race([i,c,d]);return console.log(m),[]}async function N(e,n=null,t,a){t.changes.push(n),I=I||(await import("./chunks/prettierEsm-KTD3QDBM.mjs")).formatter,O=O||(await import("./chunks/babelEsm-KXY4A2AB.mjs")).babelTransform,q=O,t.errorText="";try{let r=await I(e),o=await q(r),i=!1;if(o.length>0){if(a<t.i)return;try{let{getHtmlAndCss:d}=await import("./chunks/renderToString-LFTNYEEJ.mjs");if(a<t.i)return;let m=await ne(o),{html:f,css:u}=d(m);t.transpiled=o,t.html=f;let l=await te(o);t.setChild(C=>[...C,l]),t.children=l,i=!f,t.code=r,t.codeNonFormatted=e;let p=r;if(t.css=u,t.i!==a)return;t.saveCode&&await t.saveCode({transpiled:o,code:p,i:a,css:u,html:f});return}catch(d){console.error("EXCEPTION"),console.log({e:d}),i=!0,console.error({restartError:i})}}if(t.i>a)return;let c=await ee(t);if(t.i>a)return;i&&c.push({messageText:"Error while starting the app. Check the console!"}),c.length>0&&console.log({err:c})}catch(r){t.errorText=r.message,console.error(r.message)}}async function F(e,n,t,a){e.saveCode=a,e.children=null;let{renderPreviewWindow:r}=await import("./chunks/renderPreviewWindow-RVLSXWDS.mjs");await r(e,n,t),t||await Z(e),e.update=o=>N(o,null,e),N(e.code,null,e,-1)}async function te(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=G(t),r=await import(a);return URL.revokeObjectURL(a),Y(r.default)}function G(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function ne(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=G(t),r=(await import(a)).default;return URL.revokeObjectURL(a),r}var D=null,j=!1,U=[],oe="spike.land",S={},J="",x="",b="",y="",M=0,T=0,g,L,K,A=!1,v;var w=null,_=()=>w.session.get("state"),P=null;setInterval(()=>{Date.now()-T>4e4?E():console.log("no_need_to_rejoin")},3e4);L=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function E(){if(!A){A=!0,D=null;let e=Date.now()-K;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),k()}}async function V({code:e,transpiled:n,html:t,css:a,i:r}){if(v){let o=Date.now();if(S.i=r,S.lastRtcUpdate){let d=o-S.lastUpdate;if(d<1e3&&(await X(200-d),r!==S.i))return}S.lastRtcUpdate=Date.now();let i=_().toJSON();i.html=t,i.css=a,i.transpiled=n,i.code=e,i.i=r;let c=x?w.createPatchFromHashCode(x,i):w.createPatch(i);c&&c.patch!==""&&v.send(c)}if(D){let o=Date.now();if(S.i=r,S.lastUpdate){let m=o-S.lastUpdate;if(m<1e3&&(await X(1e3-m),r!==S.i))return}S.lastUpdate=Date.now();let i=_().toJSON();i.html=t,i.css=a,i.transpiled=n,i.code=e,i.i=r;let c=J?w.createPatchFromHashCode(J,i):w.createPatch(i);if(!c)return;let d=JSON.stringify({...c,name:y});c.patch!==""&&D.send(d)}}var k=async(e,n,t)=>{b=b||e||"code-main",window.room=e,n&&(y=n);let r=await(await fetch(`https://spike.land/api/room/${b}/session`)).json();if(w=w||await B(b,{name:y,room:b,state:r,events:[]}),window.mySession=w,!t&&!window.sess){let o={..._().toJSON(),setChild:()=>{},changes:[],children:[null],errorText:""},i=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,c=location.pathname.endsWith("public");F(o,b,c,i(V,100)),window.sess=o}j||(j=!0,setTimeout(()=>{j=!1},1e4),g=new WebSocket("wss://"+oe+"/api/room/"+b+"/websocket"),A=!1,K=Date.now(),g.addEventListener("open",()=>{P?clearInterval(P):P=setInterval(()=>{let o=Date.now(),i=o-T;if(o-T>3e4)try{g.send(JSON.stringify({name:y,time:M+i}))}catch(c){E()}},3e4),D=g,globalThis.broad=V,globalThis.chCode=L,g.send(JSON.stringify({name:y}))}),g.addEventListener("message",o=>$(o,"ws")),g.addEventListener("close",o=>{console.log("WebSocket closed, reconnecting:",o.code,o.reason),E()}),g.addEventListener("error",o=>{console.log("WebSocket error, reconnecting:",o),E()}))},z=window.location.hostname;z||(z="localhost");h("Hostname: "+z);var s={};globalThis.connections=s;function h(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function ae(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Q(e){h("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(l=>({urls:`stun:${l}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],s[e]=s[e]||new RTCPeerConnection(n),s[e].onicecandidate=d,s[e].oniceconnectionstatechange=m,s[e].onicegatheringstatechange=u,s[e].onsignalingstatechange=f,s[e].onnegotiationneeded=i,s[e].ontrack=c,s[e].addEventListener("datachannel",r);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=s[e].createDataChannel(e,t);return a.binaryType="arraybuffer",a.addEventListener("message",l=>{console.log("***********RTC***",{msg:l});let p=JSON.parse(l.data);return p&&p.hashCode&&(x=p.hashCode),p&&p.newHash&&(x=p.newHash),$(l,"rtc")}),a.addEventListener("error",l=>{console.log("xxxxxx-  Data Channel Error:",l)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=e,U.push(a),s[e].sendChannel=a,window.sendChannel=v={send:l=>{let p=l.target;l.name=l.name||y;let C=JSON.stringify(l);U.map(R=>R.readyState==="open"&&(!p||p&&R.target===p)&&R.send(C))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),s[e];function r(l){console.log("Receive Channel Callback");let p=l.channel;p.binaryType="arraybuffer",p.addEventListener("close",o),p.addEventListener("message",C=>$(C,"rtc")),U.push(p)}function o(){console.log("Receive channel is closed"),s[e].close(),s[e]=null,console.log("Closed remote peer connection")}async function i(){h("*** Negotiation needed");try{h("---> Creating offer");let l=await s[e].createOffer();if(s[e].signalingState!="stable"){h("     -- The connection isn't stable yet; postponing...");return}h("---> Setting local description to the offer"),await s[e].setLocalDescription(l),h("---> Sending the offer to the remote peer"),g.send(JSON.stringify({target:e,name:y,type:"video-offer",sdp:s[e].localDescription}))}catch(l){h("*** The following error occurred while handling the negotiationneeded event:")}}function c(l){h("*** Track event"),document.querySelector("#received_video").srcObject=l.streams[0],document.querySelector("#hangup-button").disabled=!1}function d(l){l.candidate&&(h("*** Outgoing ICE candidate: "+l.candidate),g.send(JSON.stringify({type:"new-ice-candidate",target:e,name:y,candidate:l.candidate})))}function m(){switch(h("*** ICE connection state changed to "+s[e].iceConnectionState),s[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function f(){switch(h("*** connections[target].signalingState  changed to: "+s[e].signalingState),s[e].signalingState){case"closed":break}}function u(){h("*** connections[target].iceGatheringState changed to: "+s[e].iceGatheringState)}}async function ie(e,n){h("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(s[n]),await s[n].addIceCandidate(t)}async function se(e,n){h("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await s[n].setRemoteDescription(t).catch(console.error)}async function re(e,n){s[n]||await Q(n);let t=new RTCSessionDescription(e.sdp);if(s[n].signalingState!="stable"){h("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([s[n].setLocalDescription({type:"rollback"}),s[n].setRemoteDescription(t)]);return}h("  - Setting remote description"),await s[n].setRemoteDescription(t),h("---> Creating and sending answer to caller"),await s[n].setLocalDescription(await s[n].createAnswer()),g.send(JSON.stringify({target:n,name:y,type:"video-answer",sdp:s[n].localDescription}))}async function $(e,n){T=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==y&&!s[t.name])try{await Q(t.name)}catch(a){console.log({e:a}),ae("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await ie(t,t.name);return}if(t.type==="video-offer"){await re(t,t.name);return}if(t.type==="video-answer"){await se(t,t.name);return}if(n===g&&t.hashCode&&(J=t.hashCode),t.patch&&n==="ws"||t.name!==y){if(t.newHash===w.hashCode())return;if(t.oldHash===w.hashCode()){w.applyPatch(t),L(w.session.get("state").code,w.session.get("state").i),v&&v.send({hashCode:t.newHash});return}if(t.newHash===w.hashCode())return;if(t.code&&t.transpiled){let a=w.createPatch(t);w.applyPatch(a),L(t.code),v&&v.send({hashCode:a.newHash});return}return}t.timestamp&&(T=Date.now(),M=t.timestamp),t.name!==y&&(M=t.timestamp)}function X(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}import W,{render as ce}from"https://spike.land/react.mjs";import{jsx as le}from"https://unpkg.com/@spike.land/esm@0.6.218/dist/emotion-react.mjs";window.React=W;var ge=async e=>{let n=location.pathname.split("/");window.aniStart=Date.now();let t=e||(n[1]==="api"&&n[2]==="room"?n[3]:(n.pop()||n.pop()).slice(-12))||"code-main",a=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./chunks/uidV4-5C2NDIGC.mjs")).default()).slice(0,8);if(location.pathname.includes("hydrate")){let r=(await import(`https://spike.land/api/room/${t}/js`)).default,o=(await import("./chunks/textdiff-create-ZT4L63UO.mjs")).default,{jsx:i}=await import("https://unpkg.com/@spike.land/esm@0.6.218/dist/emotion-react.mjs"),{hydrateRoot:c}=W,d=document.querySelector("#zbody");window.aniStart=Date.now();let m=c(d,i(r)),f=[],u=document.getElementById("zbody").innerHTML,l=u,p=setInterval(()=>{let C=d.innerHTML;f.push(o(u,C)),u=C},1e3/60);window.deltas=f,k(t,a,f);return}else(async()=>{let r=(await import("https://spike.land/api/room/zoli/js")).default,o=document.getElementById("zbody");if(ce(le(r),o),!o){let c=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();o=document.getElementById("root"),o.innerHTML=`<style>${c.css}</style><div id="zbody">${c.html}</div>`,o=document.getElementById("zbody")}if(deltas&&deltas.length){let i=o.innerHTML,c=0,d=i,m=deltas.length,f=(2e3-(Date.now()-window.aniStart))/deltas.length;console.log({animationLength:f});let u=setInterval(()=>{if(c>=deltas.length){clearInterval(u);return}let l=c%m;l===0&&(d=i),c++;let p=deltas[l];if(!p)return;let C=applyDelta(d,p);d=C,o.innerHTML=C},f)}else{let i=(await import(`https://spike.land/api/room/${t}/js`)).default,{jsx:c}=await import("https://unpkg.com/@spike.land/esm@0.6.218/dist/emotion-react.mjs"),d=document.querySelector("#zbody");if(!d){if(d=document.getElementById("root"),!d)throw new Error;let u=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();d.innerHTML=`<style>${u.css}</style><div id="zbody">${u.html}</div>`,d=document.querySelector("#zbody")}if(!d)throw new Error;let{hydrateRoot:m}=W;m(d,i)}})();k(t,a)};export{ge as run};
