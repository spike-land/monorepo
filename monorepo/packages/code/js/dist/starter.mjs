import"./chunks/chunk-UT4UBVWW.mjs";import{jsx as Z}from"https://unpkg.com/@spike.land/esm@0.6.150/dist/emotion-react.mjs";var R,q,I;var H,B=async(e,n)=>(H=H||(await import("./chunks/session-KE2MAR4I.mjs")).default,H(e,n));async function ee(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./chunks/editor-KSZZLXJZ.mjs"),a=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,c=l=>N(i.getModel().getValue(),l.changes,e,++e.i),{editor:i,monaco:o}=await t({language:"typescript",container:n,code:e.code});i.onDidChangeModelContent(a(c,100)),window.monaco=o,e.editor=i,window.sess=e}async function te({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),c=await(await e.languages.typescript.getTypeScriptWorker())(t),i=t.uri.toString(),o=c.getSemanticDiagnostics(i),l=c.getCompilerOptionsDiagnostics(i),d=c.getSyntacticDiagnostics(i),h=await Promise.race([o,l,d]);return console.log(h),[]}async function N(e,n=null,t,a){t.changes.push(n),R=R||(await import("./chunks/prettierEsm-LS5JKGVF.mjs")).formatter,I=I||(await import("./chunks/babelEsm-2AFAYNW3.mjs")).babelTransform,q=I,t.errorText="";try{let c=await R(e),i=await q(c),o=!1;if(i.length>0){if(a<t.i)return;try{let{getHtmlAndCss:d}=await import("./chunks/renderToString-OCIP4WFO.mjs");if(a<t.i)return;let h=await oe(i),{html:m,css:u}=d(h);t.transpiled=i,t.html=m;let r=await ne(i);t.setChild(C=>[...C,r]),t.children=r,o=!m,t.code=c,t.codeNonFormatted=e;let p=c;if(t.css=u,t.i!==a)return;t.saveCode&&await t.saveCode({transpiled:i,code:p,i:a,css:u,html:m});return}catch(d){console.error("EXCEPTION"),console.log({e:d}),o=!0,console.error({restartError:o})}}if(t.i>a)return;let l=await te(t);if(t.i>a)return;o&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(c){t.errorText=c.message,console.error(c.message)}}async function F(e,n,t,a){e.saveCode=a,e.children=null;let{renderPreviewWindow:c}=await import("./chunks/renderPreviewWindow-4SO2PGRL.mjs");await c(e,n,t),t||await ee(e),e.update=i=>N(i,null,e),N(e.code,null,e,-1)}async function ne(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=G(t),c=await import(a);return URL.revokeObjectURL(a),Z(c.default)}function G(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function oe(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=G(t),c=(await import(a)).default;return URL.revokeObjectURL(a),c}var L=null,j=!1,U=[],ae="spike.land",S={},P="",x="",b="",y="",J=0,E=0,g,k,Q,_=!1,v,V="",f=null,A=()=>f.session.get("state"),M=null;setInterval(()=>{Date.now()-E>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!_){_=!0,L=null;let e=Date.now()-Q;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),O()}}async function X({code:e,transpiled:n,html:t,css:a,i:c}){if(v){let i=Date.now();if(S.i=c,S.lastRtcUpdate){let d=i-S.lastUpdate;if(d<1e3&&(await K(200-d),c!==S.i))return}S.lastRtcUpdate=Date.now();let o=A().toJSON();o.html=t,o.css=a,o.transpiled=n,o.code=e,o.i=c;let l=x?f.createPatchFromHashCode(x,o):f.createPatch(o);l&&l.patch!==""&&v.send(l)}if(L){let i=Date.now();if(S.i=c,S.lastUpdate){let h=i-S.lastUpdate;if(h<1e3&&(await K(1e3-h),c!==S.i))return}S.lastUpdate=Date.now();let o=A().toJSON();o.html=t,o.css=a,o.transpiled=n,o.code=e,o.i=c;let l=P?f.createPatchFromHashCode(P,o):f.createPatch(o);if(!l)return;let d=JSON.stringify({...l,name:y});l.patch!==""&&L.send(d)}}var O=async(e,n,t)=>{b=b||e||"code-main",window.room=e,n&&(y=n);let c=await(await fetch(`https://spike.land/api/room/${b}/session`)).json();if(f=f||await B(b,{name:y,room:b,state:c,events:[]}),window.mySession=f,!t&&!window.sess){let i={...A().toJSON(),setChild:()=>{},changes:[],children:[null],errorText:""},o=(await import("./chunks/throttle-3WFK5HZS.mjs")).default,l=location.pathname.endsWith("public");F(i,b,l,o(X,100)),window.sess=i}j||(j=!0,setTimeout(()=>{j=!1},1e4),g=new WebSocket("wss://"+ae+"/api/room/"+b+"/websocket"),_=!1,Q=Date.now(),g.addEventListener("open",()=>{if(t){t!==V&&(V=t,g.send(JSON.stringify({type:"delta",delta:t})));return}M?clearInterval(M):M=setInterval(()=>{let i=Date.now(),o=i-E;if(i-E>3e4)try{g.send(JSON.stringify({name:y,time:J+o}))}catch(l){D()}},3e4),L=g,globalThis.broad=X,globalThis.chCode=k,g.send(JSON.stringify({name:y}))}),g.addEventListener("message",i=>$(i,"ws")),g.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),g.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},z=window.location.hostname;z||(z="localhost");w("Hostname: "+z);var s={};globalThis.connections=s;function w(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function ie(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Y(e){w("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(r=>({urls:`stun:${r}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],s[e]=s[e]||new RTCPeerConnection(n),s[e].onicecandidate=d,s[e].oniceconnectionstatechange=h,s[e].onicegatheringstatechange=u,s[e].onsignalingstatechange=m,s[e].onnegotiationneeded=o,s[e].ontrack=l,s[e].addEventListener("datachannel",c);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=s[e].createDataChannel(e,t);return a.binaryType="arraybuffer",a.addEventListener("message",r=>{console.log("***********RTC***",{msg:r});let p=JSON.parse(r.data);return p&&p.hashCode&&(x=p.hashCode),p&&p.newHash&&(x=p.newHash),$(r,"rtc")}),a.addEventListener("error",r=>{console.log("xxxxxx-  Data Channel Error:",r)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=e,U.push(a),s[e].sendChannel=a,window.sendChannel=v={send:r=>{let p=r.target;r.name=r.name||y;let C=JSON.stringify(r);U.map(T=>T.readyState==="open"&&(!p||p&&T.target===p)&&T.send(C))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),s[e];function c(r){console.log("Receive Channel Callback");let p=r.channel;p.binaryType="arraybuffer",p.addEventListener("close",i),p.addEventListener("message",C=>$(C,"rtc")),U.push(p)}function i(){console.log("Receive channel is closed"),s[e].close(),s[e]=null,console.log("Closed remote peer connection")}async function o(){w("*** Negotiation needed");try{w("---> Creating offer");let r=await s[e].createOffer();if(s[e].signalingState!="stable"){w("     -- The connection isn't stable yet; postponing...");return}w("---> Setting local description to the offer"),await s[e].setLocalDescription(r),w("---> Sending the offer to the remote peer"),g.send(JSON.stringify({target:e,name:y,type:"video-offer",sdp:s[e].localDescription}))}catch(r){w("*** The following error occurred while handling the negotiationneeded event:")}}function l(r){w("*** Track event"),document.querySelector("#received_video").srcObject=r.streams[0],document.querySelector("#hangup-button").disabled=!1}function d(r){r.candidate&&(w("*** Outgoing ICE candidate: "+r.candidate),g.send(JSON.stringify({type:"new-ice-candidate",target:e,name:y,candidate:r.candidate})))}function h(){switch(w("*** ICE connection state changed to "+s[e].iceConnectionState),s[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function m(){switch(w("*** connections[target].signalingState  changed to: "+s[e].signalingState),s[e].signalingState){case"closed":break}}function u(){w("*** connections[target].iceGatheringState changed to: "+s[e].iceGatheringState)}}async function se(e,n){w("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(s[n]),await s[n].addIceCandidate(t)}async function ce(e,n){w("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await s[n].setRemoteDescription(t).catch(console.error)}async function re(e,n){s[n]||await Y(n);let t=new RTCSessionDescription(e.sdp);if(s[n].signalingState!="stable"){w("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([s[n].setLocalDescription({type:"rollback"}),s[n].setRemoteDescription(t)]);return}w("  - Setting remote description"),await s[n].setRemoteDescription(t),w("---> Creating and sending answer to caller"),await s[n].setLocalDescription(await s[n].createAnswer()),g.send(JSON.stringify({target:n,name:y,type:"video-answer",sdp:s[n].localDescription}))}async function $(e,n){E=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==y&&!s[t.name])try{await Y(t.name)}catch(a){console.log({e:a}),ie("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await se(t,t.name);return}if(t.type==="video-offer"){await re(t,t.name);return}if(t.type==="video-answer"){await ce(t,t.name);return}if(n===g&&t.hashCode&&(P=t.hashCode),t.patch&&n==="ws"||t.name!==y){if(t.newHash===f.hashCode())return;if(t.oldHash===f.hashCode()){f.applyPatch(t),k(f.session.get("state").code,f.session.get("state").i),v&&v.send({hashCode:t.newHash});return}if(t.newHash===f.hashCode())return;if(t.code&&t.transpiled){let a=f.createPatch(t);f.applyPatch(a),k(t.code),v&&v.send({hashCode:a.newHash});return}return}t.timestamp&&(E=Date.now(),J=t.timestamp),t.name!==y&&(J=t.timestamp)}function K(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}var me=async e=>{let n=location.pathname.split("/");window.aniStart=Date.now();let t=e||(n[1]==="api"&&n[2]==="room"?n[3]:(n.pop()||n.pop()).slice(-12))||"code-main",a=(self&&self.crypto&&self.crypto.randomUUID&&self.crypto.randomUUID()||(await import("./chunks/uidV4-5C2NDIGC.mjs")).default()).slice(0,8);if(location.pathname.includes("hydrate")){let c=(await import(`https://spike.land/api/room/${t}/js`)).default,i=(await import("./chunks/textdiff-create-ZT4L63UO.mjs")).default,{jsx:o}=await import("https://unpkg.com/@spike.land/esm@0.6.150/dist/emotion-react.mjs"),{ReactDOM:l}=window,d=document.querySelector("#zbody");window.aniStart=Date.now();let h=l.hydrateRoot(d,o(c)),m=[],u=document.getElementById("zbody").innerHTML,r=u,p=setInterval(()=>{let C=d.innerHTML;m.push(i(u,C)),u=C},1e3/60);window.deltas=m,O(t,a,m);return}else(async()=>{let c=(await import("https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-patch.mjs")).default,o=await(await fetch(`https://spike.land/api/room/${t}/delta`)).json(),l=document.getElementById("zbody");if(!l){let h=await(await fetch(`https://spike.land/api/room/${t}/session`)).json();l=document.getElementById("root"),l.innerHTML=`<style>${h.css}</style><div id="zbody">${h.html}</div>`,l=document.getElementById("zbody")}if(o&&o.length){let d=l.innerHTML,h=0,m=d,u=o.length,r=(2e3-(Date.now()-window.aniStart))/o.length;console.log({animationLength:r});let p=setInterval(()=>{if(h>=o.length){clearInterval(p);return}let C=h%u;C===0&&(m=d),h++;let T=o[C];if(!T)return;let W=c(m,T);m=W,l.innerHTML=W},r)}else{let d=(await import(`https://spike.land/api/room/${t}/js`)).default,{jsx:h}=await import("https://unpkg.com/@spike.land/esm@0.6.150/dist/emotion-react.mjs"),m=document.querySelector("#zbody");if(!m){u=document.getElementById("root"),u.innerHTML=`<style>${session.css}</style><div id="zbody">${session.html}</div>`;let u=document.querySelector("#zbody")}ReactDOM.hydrateRoot(m,h(d))}})();O(t,a)};export{me as run};
