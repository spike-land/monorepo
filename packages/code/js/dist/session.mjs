import{Record as a}from"https://ga.jspm.io/npm:immutable@4.0.0/dist/immutable.es.js";import g from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-create.mjs";import u from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-patch.mjs";function m(i,e){return a({...e,room:i,state:a(e.state)()})}var l=class{session;hashCodeSession;room="";created=new Date().toISOString();constructor(e,s){let t=null;if(this.room=e,s.state.code===""&&e){let r=`state-${e}`;if(c("localStorage")){let o=localStorage.getItem(r);o?t=JSON.parse(o):fetch(`https://code.spike.land/api/room/${e}/mySession`).then(n=>n.json()).then(n=>{localStorage.setItem(r,JSON.stringify(n.state)),this.session.set("state",a(n.state)())})}}this.session=m(e,{...s,state:t||s.state,capabilities:{...s.capabilities,sessionStorage:c("sessionStorage")}})(),this.hashCodeSession=this.session.get("state").hashCode()}addEvent(e){this.session.get("events").push({...e}),setTimeout(()=>this.processEvents)}hashCode(){return this.session.get("state").hashCode()}processEvents(){let e=this.session.get("events"),s=e.shift();if(s)switch(s.type){case"code-init":let{code:t,transpiled:r,i:o,css:n,errorDiff:h,html:p}=s,d={code:t,transpiled:r,i:o,css:n,errorDiff:h,html:p};this.session.set("events",e),this.session.set("state",a(d)());let S=`state-${this.room}`;c("localStorage")&&localStorage.setItem(S,JSON.stringify(d)),this.session.set("events",e)}}updateState(e){let s=JSON.stringify(this.session.get("state").toJS()),t=this.session.get("state").hashCode();this.session=this.session.set("state",a(e)());let r=JSON.stringify(this.session.get("state").toJS()),o=this.session.get("state").hashCode(),n=f(s,r);return{oldHash:t,newHash:o,patch:n}}applyPatch({oldHash:e,newHash:s,patch:t}){if(this.session.get("state").hashCode()!==e){console.error("Cant update");return}let o=JSON.stringify(this.session.get("state").toJS()),n=JSON.parse(u(o,JSON.parse(t)));if(this.session=this.session.set("state",a(n)()),this.session.get("state").hashCode()!==s){console.error("WRONG update");return}}json(){let e=this.session.toJSON(),s=e.state.toJSON();return{...e,state:s}}setRoom(e){let s=this.session.set("room",e);this.session=s}},I=null,J=(i,e)=>I||new l(i,e);function c(i){try{if(window.hasOwnProperty(i)===!1)return;var e=window[i],s="__storage_test__";return e.setItem(s,s),e.removeItem(s),!0}catch{return!1}}function f(i,e){return JSON.stringify(g(i,e))}export{l as CodeSession,J as default};
//# sourceMappingURL=session.mjs.map
