(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{174:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=(n(5),n(3)),c=n(27),u=n(0),i=n.n(u),o=n(18),l=n(17);function p(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(a.a.mark((function e(t){var n,r,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,s=Array.from(new Uint8Array(r)),c=s.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(83);t.default=function(){var e="";"undefined"!=typeof window&&(e=new URL(location.href).pathname.substr(1));var t,n=8===e.length&&(t=e,0===Object(c.a)(t.slice(0,8)).filter((function(e){return e<"0"||e>"f"})).length),r=i.a.useState(!1),u=r[0],f=r[1];return i.a.useEffect((function(){"undefined"!=typeof window&&(n?function(){var t=Object(s.a)(a.a.mark((function t(){var n,r,s,c,u,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e,t.next=4,Object(h.a)();case 4:return r=t.sent,t.next=7,p(r);case 7:return s=t.sent.substring(0,8),t.next=10,p(n+r).substring(0,8);case 10:return c=t.sent,t.next=13,p(n+s).substring(0,8);case 13:return u=t.sent,t.next=16,fetch("https://code.zed.vision/connect?key="+n+s+u+c);case 16:return i=t.sent,t.next=19,i.json();case 19:t.sent.success?location.href="https://zed.vision/code/":f(!0),t.next=27;break;case 23:t.prev=23,t.t0=t.catch(0),console.error(t.t0),f(!0);case 27:case"end":return t.stop()}}),t,null,[[0,23]])})));return function(){return t.apply(this,arguments)}}()():f(!0))}),[]),i.a.createElement(i.a.Fragment,null,!0===u&&i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"This page is not a page: ",e),i.a.createElement("p",null,"Let's say, its a 404 page.")),!1===u&&i.a.createElement("div",null))}}}]);