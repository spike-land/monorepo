import{I as k,O as B1}from"./chunk-chunk-TQDW2XX6.mjs";import{b as r1}from"./chunk-chunk-SA25GWRH.mjs";import"./chunk-chunk-FPKCZIUZ.mjs";import"./chunk-chunk-BHDJJB4T.mjs";import"./chunk-chunk-I42A2QHU.mjs";import{B as w1,C,M as P,O as I,f as h1,i as L1,n as v1,u as G}from"./chunk-chunk-UZ757PHE.mjs";import{c as J1,e as t2,k as M}from"./chunk-chunk-DVGZF2JU.mjs";var N1=J1((z1,d1)=>{M();(function(n,i){typeof z1=="object"&&typeof d1<"u"?d1.exports=i():typeof define=="function"&&define.amd?define(i):n.QRious=i()})(z1,function(){"use strict";var n=function(){},i=Object.prototype.hasOwnProperty,z=Array.prototype.slice;function d(a,t){var h;return typeof Object.create=="function"?h=Object.create(a):(n.prototype=a,h=new n,n.prototype=null),t&&y(!0,h,t),h}function s(a,t,h,v){var r=this;return typeof a!="string"&&(v=h,h=t,t=a,a=null),typeof t!="function"&&(v=h,h=t,t=function(){return r.apply(this,arguments)}),y(!1,t,r,v),t.prototype=d(r.prototype,h),t.prototype.constructor=t,t.class_=a||r.class_,t.super_=r,t}function y(a,t,h){h=z.call(arguments,2);for(var v,r,c=0,l=h.length;c<l;c++){r=h[c];for(v in r)(!a||i.call(r,v))&&(t[v]=r[v])}}var E=s;function L(){}L.class_="Nevis",L.super_=Object,L.extend=E;var V=L,H=V,U=H.extend(function(a,t,h){this.qrious=a,this.element=t,this.element.qrious=a,this.enabled=Boolean(h)},{draw:function(a){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(a){var t=this.qrious,h=t.padding||0,v=Math.floor((t.size-h*2)/a.width);return Math.max(1,v)},getOffset:function(a){var t=this.qrious,h=t.padding;if(h!=null)return h;var v=this.getModuleSize(a),r=Math.floor((t.size-v*a.width)/2);return Math.max(0,r)},render:function(a){this.enabled&&(this.resize(),this.reset(),this.draw(a))},reset:function(){},resize:function(){}}),b=U,H1=b.extend({draw:function(a){var t,h,v=this.qrious,r=this.getModuleSize(a),c=this.getOffset(a),l=this.element.getContext("2d");for(l.fillStyle=v.foreground,l.globalAlpha=v.foregroundAlpha,t=0;t<a.width;t++)for(h=0;h<a.width;h++)a.buffer[h*a.width+t]&&l.fillRect(r*t+c,r*h+c,r,r)},reset:function(){var a=this.qrious,t=this.element.getContext("2d"),h=a.size;t.lineWidth=1,t.clearRect(0,0,h,h),t.fillStyle=a.background,t.globalAlpha=a.backgroundAlpha,t.fillRect(0,0,h,h)},resize:function(){var a=this.element;a.width=a.height=this.qrious.size}}),Z=H1,n1=H.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),j=n1,J=H.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),D=J,Q=H.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),w=Q,q=H.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),u1=q,x=H.extend(function(a){var t,h,v,r,c,l=a.value.length;for(this._badness=[],this._level=D.LEVELS[a.level],this._polynomial=[],this._value=a.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,v=(this._level-1)*4+(this._version-1)*16,r=D.BLOCKS[v++],c=D.BLOCKS[v++],t=D.BLOCKS[v++],h=D.BLOCKS[v],v=t*(r+c)+c-3+(this._version<=9),!(l<=v)););this._dataBlock=t,this._eccBlock=h,this._neccBlock1=r,this._neccBlock2=c;var e=this.width=17+4*this._version;this.buffer=x._createArray(e*e),this._ecc=x._createArray(t+(t+h)*(r+c)+c),this._mask=x._createArray((e*(e+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+e*(e-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(l),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(a,t){var h,v=this.buffer,r=this.width;for(v[a+r*t]=1,h=-2;h<2;h++)v[a+h+r*(t-2)]=1,v[a-2+r*(t+h+1)]=1,v[a+2+r*(t+h)]=1,v[a+h+1+r*(t+2)]=1;for(h=0;h<2;h++)this._setMask(a-1,t+h),this._setMask(a+1,t-h),this._setMask(a-h,t-1),this._setMask(a+h,t+1)},_appendData:function(a,t,h,v){var r,c,l,e=this._polynomial,o=this._stringBuffer;for(c=0;c<v;c++)o[h+c]=0;for(c=0;c<t;c++){if(r=w.LOG[o[a+c]^o[h]],r!==255)for(l=1;l<v;l++)o[h+l-1]=o[h+l]^w.EXPONENT[x._modN(r+e[v-l])];else for(l=h;l<h+v;l++)o[l]=o[l+1];o[h+v-1]=r===255?0:w.EXPONENT[x._modN(r+e[0])]}},_appendEccToData:function(){var a,t=0,h=this._dataBlock,v=this._calculateMaxLength(),r=this._eccBlock;for(a=0;a<this._neccBlock1;a++)this._appendData(t,h,v,r),t+=h,v+=r;for(a=0;a<this._neccBlock2;a++)this._appendData(t,h+1,v,r),t+=h+1,v+=r},_applyMask:function(a){var t,h,v,r,c=this.buffer,l=this.width;switch(a){case 0:for(r=0;r<l;r++)for(v=0;v<l;v++)!(v+r&1)&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 1:for(r=0;r<l;r++)for(v=0;v<l;v++)!(r&1)&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 2:for(r=0;r<l;r++)for(t=0,v=0;v<l;v++,t++)t===3&&(t=0),!t&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 3:for(h=0,r=0;r<l;r++,h++)for(h===3&&(h=0),t=h,v=0;v<l;v++,t++)t===3&&(t=0),!t&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 4:for(r=0;r<l;r++)for(t=0,h=r>>1&1,v=0;v<l;v++,t++)t===3&&(t=0,h=!h),!h&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 5:for(h=0,r=0;r<l;r++,h++)for(h===3&&(h=0),t=0,v=0;v<l;v++,t++)t===3&&(t=0),!((v&r&1)+!(!t|!h))&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 6:for(h=0,r=0;r<l;r++,h++)for(h===3&&(h=0),t=0,v=0;v<l;v++,t++)t===3&&(t=0),!((v&r&1)+(t&&t===h)&1)&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break;case 7:for(h=0,r=0;r<l;r++,h++)for(h===3&&(h=0),t=0,v=0;v<l;v++,t++)t===3&&(t=0),!((t&&t===h)+(v+r&1)&1)&&!this._isMasked(v,r)&&(c[v+r*l]^=1);break}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var a,t,h=this._eccBlock,v=this._polynomial;for(v[0]=1,a=0;a<h;a++){for(v[a+1]=1,t=a;t>0;t--)v[t]=v[t]?v[t-1]^w.EXPONENT[x._modN(w.LOG[v[t]]+a)]:v[t-1];v[0]=w.EXPONENT[x._modN(w.LOG[v[0]]+a)]}for(a=0;a<=h;a++)v[a]=w.LOG[v[a]]},_checkBadness:function(){var a,t,h,v,r,c=0,l=this._badness,e=this.buffer,o=this.width;for(r=0;r<o-1;r++)for(v=0;v<o-1;v++)(e[v+o*r]&&e[v+1+o*r]&&e[v+o*(r+1)]&&e[v+1+o*(r+1)]||!(e[v+o*r]||e[v+1+o*r]||e[v+o*(r+1)]||e[v+1+o*(r+1)]))&&(c+=x.N2);var A=0;for(r=0;r<o;r++){for(h=0,l[0]=0,a=0,v=0;v<o;v++)t=e[v+o*r],a===t?l[h]++:l[++h]=1,a=t,A+=a?1:-1;c+=this._getBadness(h)}A<0&&(A=-A);var m1=0,X=A;for(X+=X<<2,X<<=1;X>o*o;)X-=o*o,m1++;for(c+=m1*x.N4,v=0;v<o;v++){for(h=0,l[0]=0,a=0,r=0;r<o;r++)t=e[v+o*r],a===t?l[h]++:l[++h]=1,a=t;c+=this._getBadness(h)}return c},_convertBitStream:function(a){var t,h,v=this._ecc,r=this._version;for(h=0;h<a;h++)v[h]=this._value.charCodeAt(h);var c=this._stringBuffer=v.slice(),l=this._calculateMaxLength();a>=l-2&&(a=l-2,r>9&&a--);var e=a;if(r>9){for(c[e+2]=0,c[e+3]=0;e--;)t=c[e],c[e+3]|=255&t<<4,c[e+2]=t>>4;c[2]|=255&a<<4,c[1]=a>>4,c[0]=64|a>>12}else{for(c[e+1]=0,c[e+2]=0;e--;)t=c[e],c[e+2]|=255&t<<4,c[e+1]=t>>4;c[1]|=255&a<<4,c[0]=64|a>>4}for(e=a+3-(r<10);e<l;)c[e++]=236,c[e++]=17},_getBadness:function(a){var t,h=0,v=this._badness;for(t=0;t<=a;t++)v[t]>=5&&(h+=x.N1+v[t]-5);for(t=3;t<a-1;t+=2)v[t-2]===v[t+2]&&v[t+2]===v[t-1]&&v[t-1]===v[t+1]&&v[t-1]*3===v[t]&&(v[t-3]===0||t+3>a||v[t-3]*3>=v[t]*4||v[t+3]*3>=v[t]*4)&&(h+=x.N3);return h},_finish:function(){this._stringBuffer=this.buffer.slice();var a,t,h=0,v=3e4;for(t=0;t<8&&(this._applyMask(t),a=this._checkBadness(),a<v&&(v=a,h=t),h!==7);t++)this.buffer=this._stringBuffer.slice();h!==t&&this._applyMask(h),v=D.FINAL_FORMAT[h+(this._level-1<<3)];var r=this.buffer,c=this.width;for(t=0;t<8;t++,v>>=1)v&1&&(r[c-1-t+c*8]=1,t<6?r[8+c*t]=1:r[8+c*(t+1)]=1);for(t=0;t<7;t++,v>>=1)v&1&&(r[8+c*(c-7+t)]=1,t?r[6-t+c*8]=1:r[7+c*8]=1)},_interleaveBlocks:function(){var a,t,h=this._dataBlock,v=this._ecc,r=this._eccBlock,c=0,l=this._calculateMaxLength(),e=this._neccBlock1,o=this._neccBlock2,A=this._stringBuffer;for(a=0;a<h;a++){for(t=0;t<e;t++)v[c++]=A[a+t*h];for(t=0;t<o;t++)v[c++]=A[e*h+a+t*(h+1)]}for(t=0;t<o;t++)v[c++]=A[e*h+a+t*(h+1)];for(a=0;a<r;a++)for(t=0;t<e+o;t++)v[c++]=A[l+a+t*r];this._stringBuffer=v},_insertAlignments:function(){var a,t,h,v=this._version,r=this.width;if(v>1)for(a=j.BLOCK[v],h=r-7;;){for(t=r-7;t>a-3&&(this._addAlignment(t,h),!(t<a));)t-=a;if(h<=a+9)break;h-=a,this._addAlignment(6,h),this._addAlignment(h,6)}},_insertFinders:function(){var a,t,h,v,r=this.buffer,c=this.width;for(a=0;a<3;a++){for(t=0,v=0,a===1&&(t=c-7),a===2&&(v=c-7),r[v+3+c*(t+3)]=1,h=0;h<6;h++)r[v+h+c*t]=1,r[v+c*(t+h+1)]=1,r[v+6+c*(t+h)]=1,r[v+h+1+c*(t+6)]=1;for(h=1;h<5;h++)this._setMask(v+h,t+1),this._setMask(v+1,t+h+1),this._setMask(v+5,t+h),this._setMask(v+h+1,t+5);for(h=2;h<4;h++)r[v+h+c*(t+2)]=1,r[v+2+c*(t+h+1)]=1,r[v+4+c*(t+h)]=1,r[v+h+1+c*(t+4)]=1}},_insertTimingGap:function(){var a,t,h=this.width;for(t=0;t<7;t++)this._setMask(7,t),this._setMask(h-8,t),this._setMask(7,t+h-7);for(a=0;a<8;a++)this._setMask(a,7),this._setMask(a+h-8,7),this._setMask(a,h-8)},_insertTimingRowAndColumn:function(){var a,t=this.buffer,h=this.width;for(a=0;a<h-14;a++)a&1?(this._setMask(8+a,6),this._setMask(6,8+a)):(t[8+a+h*6]=1,t[6+h*(8+a)]=1)},_insertVersion:function(){var a,t,h,v,r=this.buffer,c=this._version,l=this.width;if(c>6)for(a=u1.BLOCK[c-7],t=17,h=0;h<6;h++)for(v=0;v<3;v++,t--)1&(t>11?c>>t-12:a>>t)?(r[5-h+l*(2-v+l-11)]=1,r[2-v+l-11+l*(5-h)]=1):(this._setMask(5-h,2-v+l-11),this._setMask(2-v+l-11,5-h))},_isMasked:function(a,t){var h=x._getMaskBit(a,t);return this._mask[h]===1},_pack:function(){var a,t,h,v=1,r=1,c=this.width,l=c-1,e=c-1,o=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(t=0;t<o;t++)for(a=this._stringBuffer[t],h=0;h<8;h++,a<<=1){128&a&&(this.buffer[l+c*e]=1);do r?l--:(l++,v?e!==0?e--:(l-=2,v=!v,l===6&&(l--,e=9)):e!==c-1?e++:(l-=2,v=!v,l===6&&(l--,e-=8))),r=!r;while(this._isMasked(l,e))}},_reverseMask:function(){var a,t,h=this.width;for(a=0;a<9;a++)this._setMask(a,8);for(a=0;a<8;a++)this._setMask(a+h-8,8),this._setMask(8,a);for(t=0;t<7;t++)this._setMask(8,t+h-7)},_setMask:function(a,t){var h=x._getMaskBit(a,t);this._mask[h]=1},_syncMask:function(){var a,t,h=this.width;for(t=0;t<h;t++)for(a=0;a<=t;a++)this.buffer[a+h*t]&&this._setMask(a,t)}},{_createArray:function(a){var t,h=[];for(t=0;t<a;t++)h[t]=0;return h},_getMaskBit:function(a,t){var h;return a>t&&(h=a,a=t,t=h),h=t,h+=t*t,h>>=1,h+=a,h},_modN:function(a){for(;a>=255;)a-=255,a=(a>>8)+(a&255);return a},N1:3,N2:3,N3:40,N4:10}),s1=x,t1=b.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var a=this.element;a.width=a.height=this.qrious.size}}),R=t1,T=H.extend(function(a,t,h,v){this.name=a,this.modifiable=Boolean(t),this.defaultValue=h,this._valueTransformer=v},{transform:function(a){var t=this._valueTransformer;return typeof t=="function"?t(a,this):a}}),f=T,u=H.extend(null,{abs:function(a){return a!=null?Math.abs(a):null},hasOwn:function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},noop:function(){},toUpperCase:function(a){return a!=null?a.toUpperCase():null}}),g=u,B=H.extend(function(a){this.options={},a.forEach(function(t){this.options[t.name]=t},this)},{exists:function(a){return this.options[a]!=null},get:function(a,t){return B._get(this.options[a],t)},getAll:function(a){var t,h=this.options,v={};for(t in h)g.hasOwn(h,t)&&(v[t]=B._get(h[t],a));return v},init:function(a,t,h){typeof h!="function"&&(h=g.noop);var v,r;for(v in this.options)g.hasOwn(this.options,v)&&(r=this.options[v],B._set(r,r.defaultValue,t),B._createAccessor(r,t,h));this._setAll(a,t,!0)},set:function(a,t,h){return this._set(a,t,h)},setAll:function(a,t){return this._setAll(a,t)},_set:function(a,t,h,v){var r=this.options[a];if(!r)throw new Error("Invalid option: "+a);if(!r.modifiable&&!v)throw new Error("Option cannot be modified: "+a);return B._set(r,t,h)},_setAll:function(a,t,h){if(!a)return!1;var v,r=!1;for(v in a)g.hasOwn(a,v)&&this._set(v,a[v],t,h)&&(r=!0);return r}},{_createAccessor:function(a,t,h){var v={get:function(){return B._get(a,t)}};a.modifiable&&(v.set=function(r){B._set(a,r,t)&&h(r,a)}),Object.defineProperty(t,a.name,v)},_get:function(a,t){return t["_"+a.name]},_set:function(a,t,h){var v="_"+a.name,r=h[v],c=a.transform(t??a.defaultValue);return h[v]=c,c!==r}}),e1=B,U1=H.extend(function(){this._services={}},{getService:function(a){var t=this._services[a];if(!t)throw new Error("Service is not being managed with name: "+a);return t},setService:function(a,t){if(this._services[a])throw new Error("Service is already managed with name: "+a);t&&(this._services[a]=t)}}),G1=U1,a1=new e1([new f("background",!0,"white"),new f("backgroundAlpha",!0,1,g.abs),new f("element"),new f("foreground",!0,"black"),new f("foregroundAlpha",!0,1,g.abs),new f("level",!0,"L",g.toUpperCase),new f("mime",!0,"image/png"),new f("padding",!0,null,g.abs),new f("size",!0,100,g.abs),new f("value",!0,"")]),V1=new G1,f1=H.extend(function(a){a1.init(a,this,this.update.bind(this));var t=a1.get("element",this),h=V1.getService("element"),v=t&&h.isCanvas(t)?t:h.createCanvas(),r=t&&h.isImage(t)?t:h.createImage();this._canvasRenderer=new Z(this,v,!0),this._imageRenderer=new R(this,r,r===t),this.update()},{get:function(){return a1.getAll(this)},set:function(a){a1.setAll(a,this)&&this.update()},toDataURL:function(a){return this.canvas.toDataURL(a||this.mime)},update:function(){var a=new s1({level:this.level,value:this.value});this._canvasRenderer.render(a),this._imageRenderer.render(a)}},{use:function(a){V1.setService(a.getName(),a)}});Object.defineProperties(f1.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var K1=f1,x1=K1,j1=H.extend({getName:function(){}}),Q1=j1,q1=Q1.extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(a){},isImage:function(a){}}),X1=q1,$1=X1.extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(a){return a instanceof HTMLCanvasElement},isImage:function(a){return a instanceof HTMLImageElement}}),Y1=$1;x1.use(new Y1);var Z1=x1;return Z1})});M();I();import{css as m}from"@emotion/react";M();M();M();M();I();M();I();var i1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o1=P.createContext&&P.createContext(i1);var N=function(){return N=Object.assign||function(n){for(var i,z=1,d=arguments.length;z<d;z++){i=arguments[z];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},N.apply(this,arguments)},a2=function(n,i){var z={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&i.indexOf(d)<0&&(z[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,d=Object.getOwnPropertySymbols(n);s<d.length;s++)i.indexOf(d[s])<0&&Object.prototype.propertyIsEnumerable.call(n,d[s])&&(z[d[s]]=n[d[s]]);return z};function C1(n){return n&&n.map(function(i,z){return P.createElement(i.tag,N({key:z},i.attr),C1(i.child))})}function W(n){return function(i){return P.createElement(h2,N({attr:N({},n.attr)},i),C1(n.child))}}function h2(n){var i=function(z){var d=n.attr,s=n.size,y=n.title,E=a2(n,["attr","size","title"]),L=s||z.size||"1em",V;return z.className&&(V=z.className),n.className&&(V=(V?V+" ":"")+n.className),P.createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},z.attr,d,E,{className:V,style:N(N({color:n.color||z.color},z.style),n.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),y&&P.createElement("title",null,y),n.children)};return o1!==void 0?P.createElement(o1.Consumer,null,function(z){return i(z)}):i(i1)}function O1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"}}]})(n)}function S1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"}}]})(n)}function A1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"}}]})(n)}function y1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"}}]})(n)}function b1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}}]})(n)}function P1(n){return W({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}}]})(n)}M();import{css as n2}from"@emotion/react";I();M();import{css as v2}from"@emotion/react";import{jsx as S}from"@emotion/react/jsx-runtime";var $=({children:n})=>S("span",{css:v2`
font-size:20pt;
`,children:n}),k1=()=>S($,{children:S(O1,{})}),F1=()=>S($,{children:S(S1,{})}),D1=()=>S($,{children:S(P1,{})}),R1=()=>S($,{children:S(A1,{})}),T1=()=>S($,{children:S(y1,{})});M();M();I();M();var E1=t2(N1(),1);I();var I1=n=>{let[i]=C(()=>new E1.default(n)),[z,d]=C(()=>i.toDataURL(n.mime));return G(()=>{i.set(n),d(i.toDataURL(n.mime))},[n,i]),[z,i]};var W1=({background:n,backgroundAlpha:i,foreground:z,foregroundAlpha:d,level:s,mime:y,padding:E,value:L,size:V,...H})=>{let[U]=I1({background:n,backgroundAlpha:i,foreground:z,foregroundAlpha:d,level:s,mime:y,padding:E,size:V,value:L});return L1("img",{...H,src:U})};M();I();import{css as g1}from"@emotion/react";import{jsx as F}from"@emotion/react/jsx-runtime";var r2=v1(async()=>import("./chunk-Fab-XDV4O33V.mjs")),Y=n=>F(h1,{fallback:F("div",{css:g1`width: 28px; height:28px`}),children:F(r2,{...n})}),c2=v1(async()=>import("./chunk-ToggleButton-2KJHGU53.mjs")),M1=n=>F(h1,{fallback:F("div",{css:g1`width: 28px; height:28px`}),children:F(c2,{...n})}),l2=v1(async()=>import("./chunk-ToggleButtonGroup-FACTK5D6.mjs")),p1=n=>F(h1,{fallback:F("div",{css:g1`width: 28px; height:28px`}),children:F(l2,{...n})});import{jsx as c1}from"@emotion/react/jsx-runtime";var _1=({url:n})=>{let[i,z]=C(!1);return c1(k.div,{animate:{width:i?200:56,height:i?220:48},onClick:()=>{z(!i)},css:n2`
          margin-top: 12px;
          margin-bottom: 12px;
              `,children:i?c1(W1,{value:n||"/live/coder/public"},n||origin+n):c1(Y,{children:c1(k1,{})})})};import{jsx as p,jsxs as l1}from"@emotion/react/jsx-runtime";var _=[680,768,1920],K=[1137,1024,1080],e2=[10,25,50,75,100],i2=({children:n,room:i})=>{let[z,d]=C(100),s={bottom:0,right:0},[{bottom:y,right:E},L]=C(s),[V,H]=C(window.innerWidth*devicePixelRatio),[U,b]=C(window.innerHeight*devicePixelRatio),H1=w1(null),Z=z/100;G(()=>{(async()=>{L({bottom:window.innerHeight*.2,right:window.innerWidth*.2}),window.innerWidth/devicePixelRatio<600&&(d(50),H(_[0]),b(K[0])),window.innerWidth/devicePixelRatio<1200?(d(100),H(_[0]),b(K[0])):window.innerWidth/devicePixelRatio<1800?(H(_[1]),b(K[1]),d(50)):window.innerWidth/devicePixelRatio<2500?(H(_[1]),b(K[1]),d(75)):window.innerWidth/devicePixelRatio>2500&&(H(_[1]),b(K[1]),d(100)),L({bottom:20,right:20})})()},[]);let n1=window.getComputedStyle(document.body,null).getPropertyValue("background-color").slice(4,-1).split(",").slice(0,4).map(u=>Number(u)||0),j=(u,g,B,e1)=>`rgba(${u},${g},${B},${e1})`,[J,D]=C(n1),[Q,w,q,u1,...x]=J;G(()=>{let u=setInterval(()=>{let g=window.getComputedStyle(document.body,null).getPropertyValue("background-color").slice(4,-1).split(",").slice(0,4).map(B=>Number(B)||0);JSON.stringify(J)!==JSON.stringify(g)&&D(g)},500);return()=>clearInterval(u)},[]);let[s1,t1]=C(Object.keys(r1.rtcConns));G(()=>{t1([...Object.keys(r1.rtcConns)])},[r1.webRtcArray.length,t1]);let R=sessionStorage&&Number(sessionStorage.getItem("delay"))||0,T=sessionStorage&&Number(sessionStorage.getItem("duration"))||.8,f=sessionStorage&&sessionStorage.getItem("type")||"spring";return p(B1,{children:p(k.div,{transition:{delay:R,type:f,duration:T},initial:{top:0,padding:0,right:0,borderRadius:0},animate:{top:y,padding:8,right:E,borderRadius:16},css:m`
            touch-action: pinch-zoom;
            background-color: ${j(Q,w,q,.3)};
            backdrop-filter: blur(15px);
            z-index: 10;

            white-space: normal;
            position: fixed;
          `,drag:!0,dragMomentum:!1,dragConstraints:{left:0,right:V-20-V/6,bottom:innerHeight},dragElastic:.5,children:l1("div",{css:m` 
              display: flex;
              
                `,children:[l1("div",{css:m`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[p(k.div,{transition:{delay:R,type:f,duration:T},css:m`
              overflow: hidden;
              display:flex;
              justify-content: space-evenly;`,initial:{height:"0px",width:"0",opacity:0},animate:{height:"42px",width:"100%",opacity:1},children:p(p1,{value:z,size:"small",exclusive:!0,onChange:(u,g)=>{g&&d(g)},children:e2.map((u,g)=>p(M1,{value:u,children:l1("span",{css:m`
                       color: ${u===z?"rgba(255,255,255,.8)":"rgba(0,0,0,.3)"};
                       `,children:[u,"%"]})},g))})}),p(k.div,{transition:{delay:R,type:f,duration:T},initial:{width:window.innerWidth,height:window.innerHeight,borderRadius:0},animate:{width:V*Z/devicePixelRatio,height:U*Z/devicePixelRatio,borderRadius:8},css:m`
                display: block;
                overflow: hidden;
                overflow-y: hidden;
            `,children:p(k.div,{transition:{delay:R,type:f,duration:T},initial:{width:window.innerWidth,height:window.innerHeight,backgroundColor:j(Q,w,q,1),scale:1},animate:{backgroundColor:j(Q,w,q,.7),transformOrigin:"0px 0px",width:V/devicePixelRatio,height:U/devicePixelRatio,scale:z/100},"data-test-id":"z-body",css:m`
                  overflow: overlay;
                  overflow-y: hidden;
              `,children:n})}),p(k.div,{transition:{delay:R,type:f,duration:T},css:m`
              overflow: hidden;
              display:flex;
              justify-content: space-evenly;`,initial:{height:"0",width:"0",opacity:0},animate:{height:"42px",width:"100%",opacity:1},children:p(p1,{value:V,size:"small",exclusive:!0,onChange:(u,g)=>{g&&(b(K[_.indexOf(g)]),H(g))},children:_.map((u,g)=>p(M1,{value:u,children:u===680?p("span",{css:m`
                        color: ${V===680?"rgba(255,255,255,.8)":"rgba(0,0,0,.3)"};
                        `,children:p(F1,{})}):u===768?p("span",{css:m`
                        color: ${V===768?"rgba(255,255,255,.8)":"rgba(0,0,0,.3)"};
                        `,children:p(R1,{})}):p("span",{css:m`
                        color: ${V===1920?"rgba(255,255,255,.8)":"rgba(0,0,0,.3)"};
                      `,children:p(T1,{})})},g))})})]}),p(k.div,{transition:{delay:R,type:f,duration:T},initial:{height:0,width:0,opacity:0},animate:{height:"100%",width:"88px",opacity:1},children:l1("div",{css:m`
              padding: 16px;
              display: flex;
              overflow: "hidden";
              align-items: center;          
              flex-direction: column;
              `,children:[p(Y,{onClick:()=>{document.querySelector("#root")?.requestFullscreen()},children:p("span",{css:m`
                font-size: 20pt;
              `,children:p(b1,{},"fs")})},"fullscreen"),p(_1,{url:location.origin+`/live/${i}/public`}),!1,p(Y,{onClick:()=>open(`/live/${i}/public`),children:p(D1,{})},"Share")]})})]})})})},M0=i2;export{i2 as DraggableWindow,M0 as default};
