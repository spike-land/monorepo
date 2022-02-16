import{a as R,b as N}from"./chunk-AH6KKUH7.mjs";import{jsx as Z}from"https://spike.land/dist/emotion.mjs";var P,G,H,J;var I,z=async(e,n)=>(I=I||(await import("./session-ZFHLRVN4.mjs")).default,I(e,n));async function ee(e){console.log("start monaco with session");let n=document.querySelector("#monacoEditor");H=H||(globalThis.monacoEditorModule&&await globalThis.monacoEditorModule||await import("./editor-SINJKKAR.mjs")).startMonaco;let t=s=>M(o.getModel().getValue(),s.changes,e,++e.i),{editor:o,monaco:c}=await H({language:"typescript",container:n,code:e.code}),i=(await import("./throttle-Z6JZ56VC.mjs")).default;o.onDidChangeModelContent(i(t,100)),window.monaco=c,e.editor=o,window.sess=e}async function te({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),c=await(await e.languages.typescript.getTypeScriptWorker())(t),i=t.uri.toString(),s=c.getSemanticDiagnostics(i),l=c.getCompilerOptionsDiagnostics(i),f=c.getSyntacticDiagnostics(i),g=await Promise.race([s,l,f]);return console.log(g),[]}async function M(e,n=null,t,o){t.changes.push(n),P=P||(await import("./prettierEsm-KIK5ML5W.mjs")).formatter,J=J||(await import("./babelEsm-YV7BGC7U.mjs")).babelTransform,G=J,t.errorText="";try{let c=await P(e),i=await G(c),s=!1;if(i.length>0){if(o<t.i)return;try{let{getHtmlAndCss:f}=await import("./renderToString-NN3J2EDG.mjs");if(o<t.i)return;let g=await oe(i),{html:S,css:E}=f(g);t.transpiled=i,t.html=S;let r=await ne(i);t.setChild(b=>[...b,r]),globalThis.App=r,t.children=r,s=!S,t.code=c,t.codeNonFormatted=e;let h=c;if(t.css=E,t.i!==o)return;t.saveCode&&await t.saveCode({transpiled:i,code:h,i:o,css:E,html:S});return}catch(f){console.error("EXCEPTION"),console.log({e:f}),s=!0,console.error({restartError:s})}}if(t.i>o)return;let l=await te(t);if(t.i>o)return;s&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(c){t.errorText=c.message,console.error(c.message)}}async function V(e,n,t,o){e.saveCode=o,e.children=null;let{renderPreviewWindow:c}=globalThis.renderPreviewModule&&await globalThis.renderPreviewModule||await import("./renderPreviewWindow-WF6BPZO4.mjs");await c(e,n,t),t||await ee(e),e.update=i=>M(i,null,e),M(e.code,null,e,-1)}async function ne(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,o=$(t),c=await import(o);return URL.revokeObjectURL(o),Z(c.default)}function $(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function oe(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,o=$(t),c=(await import(o)).default;return URL.revokeObjectURL(o),c}var x=null,U=!1,j=[],ae="spike.land",u={},A="",L="",C="",m="",W=0,v=0,p,k,Q,T=!1,y;var w=null,q=()=>w.session.get("state"),_=null;setInterval(()=>{Date.now()-v>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!T){T=!0,x=null;let e=Date.now()-Q;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),ie()}}async function X({code:e,transpiled:n,html:t,css:o,i:c}){if(y){let i=Date.now();if(u.i=c,u.lastRtcUpdate){let f=i-u.lastUpdate;if(f<1e3&&(await K(200-f),c!==u.i))return}u.lastRtcUpdate=Date.now();let s=q().toJSON();s.html=t,s.css=o,s.transpiled=n,s.code=e,s.i=c;let l=L?w.createPatchFromHashCode(L,s):w.createPatch(s);l&&l.patch!==""&&y.send(l)}if(x){let i=Date.now();if(u.i=c,u.lastUpdate){let g=i-u.lastUpdate;if(g<1e3&&(await K(1e3-g),c!==u.i))return}u.lastUpdate=Date.now();let s=q().toJSON();s.html=t,s.css=o,s.transpiled=n,s.code=e,s.i=c;let l=A?w.createPatchFromHashCode(A,s):w.createPatch(s);if(!l)return;let f=JSON.stringify(N(R({},l),{name:m}));l.patch!==""&&x.send(f)}}var ie=async(e,n,t)=>{if(C=C||e||"code-main",window.room=e,n&&(m=n),T)return;T=!0;let c=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(w=w||await z(C,{name:m,room:C,state:c,events:[]}),window.mySession=w,!t&&!window.sess){let i=N(R({},q().toJSON()),{setChild:()=>{},changes:[],children:[globalThis.App],errorText:""}),s=(await import("./throttle-Z6JZ56VC.mjs")).default,l=location.pathname.endsWith("public");V(i,C,l,s(X,100)),window.sess=i}U||(U=!0,setTimeout(()=>{U=!1},1e4),p=new WebSocket("wss://"+ae+"/api/room/"+C+"/websocket"),T=!1,Q=Date.now(),p.addEventListener("open",()=>{_?clearInterval(_):_=setInterval(()=>{let i=Date.now(),s=i-v;if(i-v>3e4)try{p.send(JSON.stringify({name:m,time:W+s}))}catch(l){D()}},3e4),x=p,globalThis.broad=X,globalThis.chCode=k,p.send(JSON.stringify({name:m}))}),p.addEventListener("message",i=>B(i,"ws")),p.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),p.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},F=window.location.hostname;F||(F="localhost");d("Hostname: "+F);var a={};globalThis.connections=a;function d(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function se(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Y(e){d("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(r=>({urls:`stun:${r}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],a[e]=a[e]||new RTCPeerConnection(n),a[e].onicecandidate=f,a[e].oniceconnectionstatechange=g,a[e].onicegatheringstatechange=E,a[e].onsignalingstatechange=S,a[e].onnegotiationneeded=s,a[e].ontrack=l,a[e].addEventListener("datachannel",c);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},o=a[e].createDataChannel(e,t);return o.binaryType="arraybuffer",o.addEventListener("message",r=>{console.log("***********RTC***",{msg:r});let h=JSON.parse(r.data);return h&&h.hashCode&&(L=h.hashCode),h&&h.newHash&&(L=h.newHash),B(r,"rtc")}),o.addEventListener("error",r=>{console.log("xxxxxx-  Data Channel Error:",r)}),o.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),o.target=e,j.push(o),a[e].sendChannel=o,window.sendChannel=y={send:r=>{let h=r.target;r.name=r.name||m;let b=JSON.stringify(r);j.map(O=>O.readyState==="open"&&(!h||h&&O.target===h)&&O.send(b))}}}),o.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),a[e];function c(r){console.log("Receive Channel Callback");let h=r.channel;h.binaryType="arraybuffer",h.addEventListener("close",i),h.addEventListener("message",b=>B(b,"rtc")),j.push(h)}function i(){console.log("Receive channel is closed"),a[e].close(),a[e]=null,console.log("Closed remote peer connection")}async function s(){d("*** Negotiation needed");try{d("---> Creating offer");let r=await a[e].createOffer();if(a[e].signalingState!="stable"){d("     -- The connection isn't stable yet; postponing...");return}d("---> Setting local description to the offer"),await a[e].setLocalDescription(r),d("---> Sending the offer to the remote peer"),p.send(JSON.stringify({target:e,name:m,type:"video-offer",sdp:a[e].localDescription}))}catch(r){d("*** The following error occurred while handling the negotiationneeded event:")}}function l(r){d("*** Track event"),document.querySelector("#received_video").srcObject=r.streams[0],document.querySelector("#hangup-button").disabled=!1}function f(r){r.candidate&&(d("*** Outgoing ICE candidate: "+r.candidate),p.send(JSON.stringify({type:"new-ice-candidate",target:e,name:m,candidate:r.candidate})))}function g(){switch(d("*** ICE connection state changed to "+a[e].iceConnectionState),a[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function S(){switch(d("*** connections[target].signalingState  changed to: "+a[e].signalingState),a[e].signalingState){case"closed":break}}function E(){d("*** connections[target].iceGatheringState changed to: "+a[e].iceGatheringState)}}async function ce(e,n){d("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(a[n]),await a[n].addIceCandidate(t)}async function re(e,n){d("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await a[n].setRemoteDescription(t).catch(console.error)}async function le(e,n){a[n]||await Y(n);let t=new RTCSessionDescription(e.sdp);if(a[n].signalingState!="stable"){d("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([a[n].setLocalDescription({type:"rollback"}),a[n].setRemoteDescription(t)]);return}d("  - Setting remote description"),await a[n].setRemoteDescription(t),d("---> Creating and sending answer to caller"),await a[n].setLocalDescription(await a[n].createAnswer()),p.send(JSON.stringify({target:n,name:m,type:"video-answer",sdp:a[n].localDescription}))}async function B(e,n){console.log(n,{event:e}),v=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==m&&!a[t.name])try{await Y(t.name)}catch(o){console.log({e:o}),se("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await ce(t,t.name);return}if(t.type==="video-offer"){await le(t,t.name);return}if(t.type==="video-answer"){await re(t,t.name);return}if(n===p&&t.hashCode&&(A=t.hashCode),t.patch&&n==="ws"||t.name!==m){if(t.newHash===w.hashCode())return;if(t.oldHash===w.hashCode()){w.applyPatch(t),k(w.session.get("state").code,w.session.get("state").i),y&&y.send({hashCode:t.newHash});return}if(t.newHash===w.hashCode())return;if(t.code&&t.transpiled){let o=w.createPatch(t);w.applyPatch(o),k(t.code),y&&y.send({hashCode:o.newHash});return}return}t.timestamp&&(v=Date.now(),W=t.timestamp),t.name!==m&&(W=t.timestamp)}function K(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}export{ie as join};
