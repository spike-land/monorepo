import{a as R}from"./chunk-chunk-WXKKTCPU.mjs";import{a as v,b as M,c as u,i as x,j as P,k as h,v as C,w as z,x as F,y as t}from"./chunk-chunk-TJGUIWR7.mjs";import{a as i}from"./chunk-chunk-23QAVL3A.mjs";import"./chunk-chunk-3MUKUM7Q.mjs";import{a as T,f as I}from"./chunk-chunk-6DVZZJG6.mjs";import{O as j,l as m}from"./chunk-chunk-CE3G72A7.mjs";import{d as $,j as a}from"./chunk-chunk-FWOMBYHR.mjs";a();a();j();var Q=$(M());a();function w(o){return P("MuiFab",o)}var U=h("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),l=U;I();var W=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],B=o=>{let{color:r,variant:s,classes:e,size:p}=o,n={root:["root",s,`size${t(p)}`,r==="inherit"?"colorInherit":r]},d=x(n,w,e);return i({},e,d)},D=z(R,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>C(o)||o==="classes",overridesResolver:(o,r)=>{let{ownerState:s}=o;return[r.root,r[s.variant],r[`size${t(s.size)}`],s.color==="inherit"&&r.colorInherit,r[t(s.size)],r[s.color]]}})(({theme:o,ownerState:r})=>{var s,e;return i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(s=(e=o.palette).getContrastText)==null?void 0:s.call(e,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${l.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${l.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}},r.size==="small"&&{width:40,height:40},r.size==="medium"&&{width:48,height:48},r.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},r.variant==="extended"&&r.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},r.variant==="extended"&&r.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},r.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:r})=>i({},r.color!=="inherit"&&r.color!=="default"&&(o.vars||o).palette[r.color]!=null&&{color:(o.vars||o).palette[r.color].contrastText,backgroundColor:(o.vars||o).palette[r.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[r.color].main}}})),E=m(function(r,s){let e=F({props:r,name:"MuiFab"}),{children:p,className:n,color:d="default",component:b="button",disabled:f=!1,disableFocusRipple:y=!1,focusVisibleClassName:N,size:O="large",variant:V="circular"}=e,_=v(e,W),g=i({},e,{color:d,component:b,disabled:f,disableFocusRipple:y,size:O,variant:V}),c=B(g);return T(D,i({className:u(c.root,n),component:b,disabled:f,focusRipple:!y,focusVisibleClassName:u(c.focusVisible,N),ownerState:g,ref:s},_,{classes:c,children:p}))}),H=E;export{H as default,l as fabClasses,w as getFabUtilityClass};
