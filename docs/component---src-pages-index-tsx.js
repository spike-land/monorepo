(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{153:function(e,t,n){e.exports=n.p+"static/forkMe-1a2bcb7dd2c870c3afe5d50466500c18.png"},169:function(e,t,n){"use strict";n.r(t);var r=n(7),i=n(4),a=n.n(i),o=(n(2),n(5)),s=n(8),c=n(0),l=n.n(c),u=n(14),d=n(46),p=n(18),f=n(17),m=n(45),h=n(26),g=function(e,t){if(void 0===t&&(t=[]),"undefined"==typeof window)return{};var n=e.slice(0,8);return"https://"===n?window.document.head.querySelector('script[src="'+e+'"]')||new Promise((function(n,r){var i=window.document.createElement("script");i.src=e,i.async="async",i.type="application/javascript",i.onload=function(){0===t.length&&n(window);var e={};t.forEach((function(t){return Object.assign(e,window[t])})),n(e)},i.onerror=r,window.document.head.appendChild(i)})):void 0};function b(){var e=Object(r.a)(["\n              font-family: Roboto;\n              font-size: 20px;\n              text-transform: uppercase; \n              color: white;\n            "]);return b=function(){return e},e}function y(){var e=Object(r.a)(["\n              display: block;\n              box-shadow: 0 0 ","px 5px ",";\n          "]);return y=function(){return e},e}function v(){var e=Object(r.a)(["\n        background: blue;\n        display: inline-block;\n        padding: 10px 10px 0px 10px;\n        border-radius: 12px;\n        text-align: center;\n    "]);return v=function(){return e},e}var k=function(){var e=l.a.useRef(null),t=l.a.useState(3),n=t[0],r=t[1],i=l.a.useState(0),c=i[0],u=i[1];return l.a.useEffect((function(){var t,i=function(){var i=Object(o.a)(a.a.mark((function i(){var o,s,c,l,d,p;return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g("https://unpkg.com/@zedvision/qrious@8.5.7/dist/qrious.min.js");case 2:return i.next=4,fetch("https://code.zed.vision/token");case 4:return o=i.sent,i.next=7,o.json();case 7:return s=i.sent,u(60),c=s.key,l="https://zed.vision/"+c,d={element:e.current,size:200,foregroundAlpha:.9,foreground:"red",padding:12,backgroundAlpha:.8,background:"black",value:l},t?t.set(d):t=new window.QRious(d),i.next=15,fetch("https://code.zed.vision/check?key="+c);case 15:return p=i.sent,i.next=18,p.json();case 18:!1===i.sent.expired&&(location.href="https://zed.vision/code/"),r(n-1);case 21:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}();"undefined"!=typeof window&&n>0&&i()}),[n]),l.a.useEffect((function(){"undefined"!=typeof window&&c&&setTimeout((function(){return u((function(e){return e-1}))}),1e3)}),[c]),Object(s.c)("a",{href:"/code/"},n>0&&Object(s.c)("div",{css:Object(s.b)(v())},Object(s.c)("img",{css:Object(s.b)(y(),10+c,3===n?"darkorange":2===n?"green":"darkred"),ref:e}),Object(s.c)("p",{css:Object(s.b)(b())},"Connect device")))},w=n(153),x=n.n(w);function O(){var e=Object(r.a)(['    \n                    box-shadow: "none";\n                  ']);return O=function(){return e},e}function j(){var e=Object(r.a)(["  \n                      margin-bottom: ",";\n                      "]);return j=function(){return e},e}t.default=function(e){var t=e.data.allMdx.edges;return c.useEffect((function(){"undefined"!=typeof window&&function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,Object(m.a)();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(s.c)(p.a,null,Object(s.c)(f.a,{title:"This is Zed vision"}),!1===("undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent))?Object(s.c)("h1",null,"Link your mobile with this code: ",Object(s.c)(k,null)):Object(s.c)("h1",null,"This is my blog."),Object(s.c)("a",{href:"https://github.com/zed-vision/monorepo"},Object(s.c)("img",{loading:"lazy",width:"149",height:"149",src:x.a,style:{position:"absolute",top:0,right:0},alt:"Fork me on GitHub"})),t.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return Object(s.c)("article",{key:t.fields.slug},Object(s.c)("header",null,Object(s.c)("h3",{css:Object(s.b)(j(),Object(h.b)(1/4))},Object(s.c)(u.Link,{css:Object(s.b)(O()),to:t.fields.slug},n)),Object(s.c)("small",null,t.frontmatter.date)),Object(s.c)("section",null,Object(s.c)("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),Object(s.c)(d.a,null))}},27:function(e,t,n){"use strict";n(23);var r=n(0),i=n(33),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(i.a)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),s=n(44),c=n(9),l=n(16),u=n(19),d=o,p=function(e){return"theme"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:p},m=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},h=function e(t,n){var i,a,o=t.__emotion_real===t,d=o&&t.__emotion_base||t;void 0!==n&&(i=n.label,a=n.target);var p=m(t,n,o),h=p||f(d),g=!h("as");return function(){var b=arguments,y=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&y.push("label:"+i+";"),null==b[0]||void 0===b[0].raw)y.push.apply(y,b);else{0,y.push(b[0][0]);for(var v=b.length,k=1;k<v;k++)y.push(b[k],b[0][k])}var w=Object(c.e)((function(e,t,n){var i=g&&e.as||d,o="",s=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=Object(r.useContext)(c.b)}"string"==typeof e.className?o=Object(l.a)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var v=Object(u.a)(y.concat(s),t.registered,m);Object(l.b)(t,v,"string"==typeof i);o+=t.key+"-"+v.name,void 0!==a&&(o+=" "+a);var k=g&&void 0===p?f(i):h,w={};for(var x in e)g&&"as"===x||k(x)&&(w[x]=e[x]);return w.className=o,w.ref=n,Object(r.createElement)(i,w)}));return w.displayName=void 0!==i?i:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=d,w.__emotion_styles=y,w.__emotion_forwardProp=p,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(t,r){return e(t,Object(s.a)({},n,{},r,{shouldForwardProp:m(w,r,!0)})).apply(void 0,y)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){h[e]=h(e)}));t.a=h},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),i=n.n(r),a=(n(2),n(5));function o(){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(i.a.mark((function e(){var t,n,r,a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,new Function('\n  return import("https://unpkg.com/@zedvision/shadb@8.7.0/dist/shaDB.js");\n')();case 4:return t=e.sent,n=t.getDB,e.next=8,n();case 8:return r=e.sent,e.next=11,r.get("uuid");case 11:if(a=e.sent){e.next=21;break}return e.next=15,fetch("https://code.zed.vision/register");case 15:return o=e.sent,e.next=18,o.json();case 18:return s=e.sent,r.put("uuid",s.uuid),e.abrupt("return",s.uuid);case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(7),i=n(0),a=n(27),o=n(26),s=n(47),c=n.n(s);function l(){var e=Object(r.a)(["\n  margin-right: ",";\n  margin-bottom: 0;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n  margin-top: ",";\n  display: flex;\n  margin-bottom: ",";\n"]);return u=function(){return e},e}var d=a.a.div(u(),Object(o.b)(2.5),Object(o.b)(2.5)),p=a.a.div(l(),Object(o.b)(.5)),f=["a bit less\n  frustrating.","more fun","great again"],m=function(){var e=Math.random();return"undefined"==typeof window&&(e=.4),i.createElement(d,null,i.createElement(p,null,i.createElement("img",{alt:"Zoltan Erdos",src:c.a})),i.createElement("p",null,"Written by ",i.createElement("strong",null,"Zoltan Erdos"),", who is interested to make software development"," "+(f[Math.floor(e*f.length)]||"crazy."),i.createElement("br",null),i.createElement("a",{href:"https://twitter.com/ZoltanErdos"},"Follow me on Twitter")))}},47:function(e,t,n){e.exports=n.p+"static/zed-profile-pic-cd941e033fafca9e98b23dae7e5a0ccc.jpg"}}]);