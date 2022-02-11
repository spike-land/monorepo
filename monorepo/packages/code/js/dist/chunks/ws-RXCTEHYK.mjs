import{a as R,b as N}from"./chunk-AH6KKUH7.mjs";import{jsx as Y}from"https://spike.land/dist/emotion.mjs";var H,B,P;var J,G=async(e,n)=>(J=J||(await import("./session-ZAQQIWOL.mjs")).default,J(e,n));async function Z(e){let n=document.querySelector("#monacoEditor"),{startMonaco:t}=await import("./editor-7VCTGUZN.mjs"),a=(await import("./throttle-Z6JZ56VC.mjs")).default,c=l=>I(i.getModel().getValue(),l.changes,e,++e.i),{editor:i,monaco:s}=await t({language:"typescript",container:n,code:e.code});i.onDidChangeModelContent(a(c,100)),window.monaco=s,e.editor=i,window.sess=e}async function ee({monaco:e,editor:n}){if(!e)return[{messageText:"Error with the error checking. Try to reload!"}];let t=n.getModel(),c=await(await e.languages.typescript.getTypeScriptWorker())(t),i=t.uri.toString(),s=c.getSemanticDiagnostics(i),l=c.getCompilerOptionsDiagnostics(i),w=c.getSyntacticDiagnostics(i),g=await Promise.race([s,l,w]);return console.log(g),[]}async function I(e,n=null,t,a){t.changes.push(n),H=H||(await import("./prettierEsm-KIK5ML5W.mjs")).formatter,P=P||(await import("./babelEsm-DUT6YDVL.mjs")).babelTransform,B=P,t.errorText="";try{let c=await H(e),i=await B(c),s=!1;if(i.length>0){if(a<t.i)return;try{let{getHtmlAndCss:w}=await import("./renderToString-RBXW2EKZ.mjs");if(a<t.i)return;let g=await ne(i),{html:S,css:E}=w(g);t.transpiled=i,t.html=S;let r=await te(i);t.setChild(b=>[...b,r]),t.children=r,s=!S,t.code=c,t.codeNonFormatted=e;let h=c;if(t.css=E,t.i!==a)return;t.saveCode&&await t.saveCode({transpiled:i,code:h,i:a,css:E,html:S});return}catch(w){console.error("EXCEPTION"),console.log({e:w}),s=!0,console.error({restartError:s})}}if(t.i>a)return;let l=await ee(t);if(t.i>a)return;s&&l.push({messageText:"Error while starting the app. Check the console!"}),l.length>0&&console.log({err:l})}catch(c){t.errorText=c.message,console.error(c.message)}}async function z(e,n,t,a){e.saveCode=a,e.children=null;let{renderPreviewWindow:c}=await import("./renderPreviewWindow-J3E24GC4.mjs");await c(e,n,t),t||await Z(e),e.update=i=>I(i,null,e),I(e.code,null,e,-1)}async function te(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=V(t),c=await import(a);return URL.revokeObjectURL(a),Y(c.default)}function V(e){let n=new Blob([e],{type:"application/javascript"});return URL.createObjectURL(n)}async function ne(e,n="window"){let t=n==="window"?e.replace("body{","#zbody{"):e,a=V(t),c=(await import(a)).default;return URL.revokeObjectURL(a),c}var x=null,U=!1,j=[],oe="spike.land",u={},A="",L="",C="",m="",M=0,T=0,p,k,K,v=!1,y;var f=null,W=()=>f.session.get("state"),_=null;setInterval(()=>{Date.now()-T>4e4?D():console.log("no_need_to_rejoin")},3e4);k=globalThis.chCode=async(e,n)=>{if(!!e&&!(n<window.sess.i)&&e!==window.sess.code)try{window.sess&&window.sess.editor?window.sess.editor.getModel().setValue(e):window.sess.update(e)}catch(t){console.error({e:t})}};async function D(){if(!v){v=!0,x=null;let e=Date.now()-K;e<1e4&&await new Promise(n=>setTimeout(n,1e4-e)),ae()}}async function $({code:e,transpiled:n,html:t,css:a,i:c}){if(y){let i=Date.now();if(u.i=c,u.lastRtcUpdate){let w=i-u.lastUpdate;if(w<1e3&&(await X(200-w),c!==u.i))return}u.lastRtcUpdate=Date.now();let s=W().toJSON();s.html=t,s.css=a,s.transpiled=n,s.code=e,s.i=c;let l=L?f.createPatchFromHashCode(L,s):f.createPatch(s);l&&l.patch!==""&&y.send(l)}if(x){let i=Date.now();if(u.i=c,u.lastUpdate){let g=i-u.lastUpdate;if(g<1e3&&(await X(1e3-g),c!==u.i))return}u.lastUpdate=Date.now();let s=W().toJSON();s.html=t,s.css=a,s.transpiled=n,s.code=e,s.i=c;let l=A?f.createPatchFromHashCode(A,s):f.createPatch(s);if(!l)return;let w=JSON.stringify(N(R({},l),{name:m}));l.patch!==""&&x.send(w)}}var ae=async(e,n,t)=>{if(C=C||e||"code-main",window.room=e,n&&(m=n),v)return;v=!0;let c=await(await fetch(`https://spike.land/api/room/${C}/session`)).json();if(f=f||await G(C,{name:m,room:C,state:c,events:[]}),window.mySession=f,!t&&!window.sess){let i=N(R({},W().toJSON()),{setChild:()=>{},changes:[],children:[globalThis.App],errorText:""}),s=(await import("./throttle-Z6JZ56VC.mjs")).default,l=location.pathname.endsWith("public");z(i,C,l,s($,100)),window.sess=i}U||(U=!0,setTimeout(()=>{U=!1},1e4),p=new WebSocket("wss://"+oe+"/api/room/"+C+"/websocket"),v=!1,K=Date.now(),p.addEventListener("open",()=>{_?clearInterval(_):_=setInterval(()=>{let i=Date.now(),s=i-T;if(i-T>3e4)try{p.send(JSON.stringify({name:m,time:M+s}))}catch(l){D()}},3e4),x=p,globalThis.broad=$,globalThis.chCode=k,p.send(JSON.stringify({name:m}))}),p.addEventListener("message",i=>F(i,"ws")),p.addEventListener("close",i=>{console.log("WebSocket closed, reconnecting:",i.code,i.reason),D()}),p.addEventListener("error",i=>{console.log("WebSocket error, reconnecting:",i),D()}))},q=window.location.hostname;q||(q="localhost");d("Hostname: "+q);var o={};globalThis.connections=o;function d(e){let n=new Date;console.log("["+n.toLocaleTimeString()+"] "+e)}function ie(e){let n=new Date;console.trace("["+n.toLocaleTimeString()+"] "+e)}async function Q(e){d("Setting up a connection...");let n={iceServers:["stun3.l.google.com:19302"].map(r=>({urls:`stun:${r}`}))};n.iceServers=[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}],o[e]=o[e]||new RTCPeerConnection(n),o[e].onicecandidate=w,o[e].oniceconnectionstatechange=g,o[e].onicegatheringstatechange=E,o[e].onsignalingstatechange=S,o[e].onnegotiationneeded=s,o[e].ontrack=l,o[e].addEventListener("datachannel",c);let t={ordered:!0,reliable:!0,maxPacketLifeTime:3e3},a=o[e].createDataChannel(e,t);return a.binaryType="arraybuffer",a.addEventListener("message",r=>{console.log("***********RTC***",{msg:r});let h=JSON.parse(r.data);return h&&h.hashCode&&(L=h.hashCode),h&&h.newHash&&(L=h.newHash),F(r,"rtc")}),a.addEventListener("error",r=>{console.log("xxxxxx-  Data Channel Error:",r)}),a.addEventListener("open",()=>{console.log("@@@@@@@@RTC IS OPEN&&&&&&&&"),a.target=e,j.push(a),o[e].sendChannel=a,window.sendChannel=y={send:r=>{let h=r.target;r.name=r.name||m;let b=JSON.stringify(r);j.map(O=>O.readyState==="open"&&(!h||h&&O.target===h)&&O.send(b))}}}),a.addEventListener("close",()=>{console.log("xxxxxxxx- The Data Channel is Closed")}),o[e];function c(r){console.log("Receive Channel Callback");let h=r.channel;h.binaryType="arraybuffer",h.addEventListener("close",i),h.addEventListener("message",b=>F(b,"rtc")),j.push(h)}function i(){console.log("Receive channel is closed"),o[e].close(),o[e]=null,console.log("Closed remote peer connection")}async function s(){d("*** Negotiation needed");try{d("---> Creating offer");let r=await o[e].createOffer();if(o[e].signalingState!="stable"){d("     -- The connection isn't stable yet; postponing...");return}d("---> Setting local description to the offer"),await o[e].setLocalDescription(r),d("---> Sending the offer to the remote peer"),p.send(JSON.stringify({target:e,name:m,type:"video-offer",sdp:o[e].localDescription}))}catch(r){d("*** The following error occurred while handling the negotiationneeded event:")}}function l(r){d("*** Track event"),document.querySelector("#received_video").srcObject=r.streams[0],document.querySelector("#hangup-button").disabled=!1}function w(r){r.candidate&&(d("*** Outgoing ICE candidate: "+r.candidate),p.send(JSON.stringify({type:"new-ice-candidate",target:e,name:m,candidate:r.candidate})))}function g(){switch(d("*** ICE connection state changed to "+o[e].iceConnectionState),o[e].iceConnectionState){case"closed":case"failed":case"disconnected":break}}function S(){switch(d("*** connections[target].signalingState  changed to: "+o[e].signalingState),o[e].signalingState){case"closed":break}}function E(){d("*** connections[target].iceGatheringState changed to: "+o[e].iceGatheringState)}}async function se(e,n){d("*** Adding received ICE candidate: "+JSON.stringify(e.candidate));let t=new RTCIceCandidate(e.candidate);console.log(o[n]),await o[n].addIceCandidate(t)}async function ce(e,n){d("*** Call recipient has accepted our call");let t=new RTCSessionDescription(e.sdp);await o[n].setRemoteDescription(t).catch(console.error)}async function re(e,n){o[n]||await Q(n);let t=new RTCSessionDescription(e.sdp);if(o[n].signalingState!="stable"){d("  - But the signaling state isn't stable, so triggering rollback"),await Promise.all([o[n].setLocalDescription({type:"rollback"}),o[n].setRemoteDescription(t)]);return}d("  - Setting remote description"),await o[n].setRemoteDescription(t),d("---> Creating and sending answer to caller"),await o[n].setLocalDescription(await o[n].createAnswer()),p.send(JSON.stringify({target:n,name:m,type:"video-answer",sdp:o[n].localDescription}))}async function F(e,n){T=Date.now();let t=JSON.parse(e.data);if(t.name&&t.name!==m&&!o[t.name])try{await Q(t.name)}catch(a){console.log({e:a}),ie("Error with p2p")}if(console.log(n,t.name),t.type==="new-ice-candidate"){await se(t,t.name);return}if(t.type==="video-offer"){await re(t,t.name);return}if(t.type==="video-answer"){await ce(t,t.name);return}if(n===p&&t.hashCode&&(A=t.hashCode),t.patch&&n==="ws"||t.name!==m){if(t.newHash===f.hashCode())return;if(t.oldHash===f.hashCode()){f.applyPatch(t),k(f.session.get("state").code,f.session.get("state").i),y&&y.send({hashCode:t.newHash});return}if(t.newHash===f.hashCode())return;if(t.code&&t.transpiled){let a=f.createPatch(t);f.applyPatch(a),k(t.code),y&&y.send({hashCode:a.newHash});return}return}t.timestamp&&(T=Date.now(),M=t.timestamp),t.name!==m&&(M=t.timestamp)}function X(e){return new Promise(n=>{setTimeout(()=>{n()},e)})}export{ae as join};
