import{Record as d}from"https://ga.jspm.io/npm:immutable@4.0.0/dist/immutable.es.js";import u from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-create.mjs";import m from"https://unpkg.com/@spike.land/esm@0.4.33/dist/textdiff-patch.mjs";function S(t,e){return d({...e,room:t,state:d(e.state)()})}var g=class{session;hashCodeSession;room="";created=new Date().toISOString();constructor(e,s){let n=null;this.room=e,this.session=S(e,{...s,state:n||s.state,capabilities:{...s.capabilities,sessionStorage:I("sessionStorage")}})(),this.hashCodeSession=this.session.get("state").hashCode()}addEvent(e){this.session.get("events").push({...e}),setTimeout(()=>this.processEvents)}hashCode(){return this.session.get("state").hashCode()}processEvents(){let e=this.session.get("events"),s=e.shift();if(s)switch(s.type){case"code-init":let{code:n,transpiled:l,i:o,css:r,errorDiff:a,html:i}=s,c={code:n,transpiled:l,i:o,css:r,errorDiff:a,html:i};this.session.set("events",e),this.session.set("state",d(c)())}}createPatch(e){if(e.code===this.session.get("state").get("code"))return{oldHash:this.session.get("state").hashCode(),newHash:this.session.get("state").hashCode(),patch:""};let s=JSON.stringify(this.session.get("state").toJSON()),n=this.session.get("state").hashCode(),o=this.session.get("state").merge(e),r=o.hashCode(),a=JSON.stringify(o.toJSON()),i=f(s,a);return{oldHash:n,newHash:r,patch:i}}applyPatch({oldHash:e,newHash:s,patch:n}){if(this.session.get("state").hashCode()!==e){console.error("Cant update");return}let o=this.session.get("state").toJSON(),r=JSON.stringify(o),a=o.code,i=JSON.parse(m(r,JSON.parse(n))),c=d(i)();console.log({newState:i}),console.log(c.hashCode());let h=this.session.get("state").merge(c),p=h.get("code");if(a===p)return;if(console.log(h.hashCode()),h.hashCode()===s){this.session=this.session.set("state",h);return}else console.log("WRONG"),console.log({newState:i})}json(){let e=this.session.toJSON(),s=e.state.toJSON();return{...e,state:s}}setRoom(e){let s=this.session.set("room",e);this.session=s}},C=null,y=(t,e)=>C||new g(t,e);function I(t){try{if(window.hasOwnProperty(t)===!1)return;var e=window[t],s="__storage_test__";return e.setItem(s,s),e.removeItem(s),!0}catch{return!1}}function f(t,e){return JSON.stringify(u(t,e))}export{g as CodeSession,y as default};
//# sourceMappingURL=session.mjs.map
