"use strict";var e=require("./state-184c5a3e.js"),o=require("./core-67a6ca69.js");const t=o.qHook((({todos:t})=>{function r({filter:e}){const r=e.toLowerCase();return o.h("li",null,o.h("a",{class:{selected:t.filter==r},"on:click":o.qHook((()=>Promise.resolve().then((function(){return require("./h_components_footer_onrender_filter_on_click-45b09e43.js")}))),"Footer_onRender_Filter_on_click").with({filter:e})},e[0].toUpperCase()+e.substr(1)))}console.log("on:qRender => <Footer/>");const n=e.getFilteredCount(t);return o.h(o.Host,{class:"footer"},t.items.length>0?o.h(o.Fragment,null,o.h("span",{class:"todo-count"},o.h("strong",null,n),1==n?" item":" items"," left"),o.h("ul",{class:"filters"},e.FilterStates.map((e=>o.h(r,{filter:e})))),n>0?o.h("button",{class:"clear-completed","on:click":o.qHook((()=>Promise.resolve().then((function(){return require("./h_components_footer_onrender_on_click-4dc945ce.js")}))),"Footer_onRender_on_click")},"Clear completed"):null):null)}));exports.Footer_onRender=t;
