var F=Object.create;var R=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var z=r=>R(r,"__esModule",{value:!0});var H=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var Q=(r,n,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of L(n))!U.call(r,a)&&a!=="default"&&R(r,a,{get:()=>n[a],enumerable:!(e=N(n,a))||e.enumerable});return r},$=r=>Q(z(R(r!=null?F(O(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var C=H((V,T)=>{var f=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},p=-1,M=1,c=0;f.Diff=function(r,n){return[r,n]};f.prototype.diff_main=function(r,n,e,a){typeof a=="undefined"&&(this.Diff_Timeout<=0?a=Number.MAX_VALUE:a=new Date().getTime()+this.Diff_Timeout*1e3);var h=a;if(r==null||n==null)throw new Error("Null input. (diff_main)");if(r==n)return r?[new f.Diff(c,r)]:[];typeof e=="undefined"&&(e=!0);var i=e,t=this.diff_commonPrefix(r,n),s=r.substring(0,t);r=r.substring(t),n=n.substring(t),t=this.diff_commonSuffix(r,n);var l=r.substring(r.length-t);r=r.substring(0,r.length-t),n=n.substring(0,n.length-t);var g=this.diff_compute_(r,n,i,h);return s&&g.unshift(new f.Diff(c,s)),l&&g.push(new f.Diff(c,l)),this.diff_cleanupMerge(g),g};f.prototype.diff_compute_=function(r,n,e,a){var h;if(!r)return[new f.Diff(M,n)];if(!n)return[new f.Diff(p,r)];var i=r.length>n.length?r:n,t=r.length>n.length?n:r,s=i.indexOf(t);if(s!=-1)return h=[new f.Diff(M,i.substring(0,s)),new f.Diff(c,t),new f.Diff(M,i.substring(s+t.length))],r.length>n.length&&(h[0][0]=h[2][0]=p),h;if(t.length==1)return[new f.Diff(p,r),new f.Diff(M,n)];var l=this.diff_halfMatch_(r,n);if(l){var g=l[0],v=l[1],u=l[2],o=l[3],_=l[4],b=this.diff_main(g,u,e,a),w=this.diff_main(v,o,e,a);return b.concat([new f.Diff(c,_)],w)}return e&&r.length>100&&n.length>100?this.diff_lineMode_(r,n,a):this.diff_bisect_(r,n,a)};f.prototype.diff_lineMode_=function(r,n,e){var a=this.diff_linesToChars_(r,n);r=a.chars1,n=a.chars2;var h=a.lineArray,i=this.diff_main(r,n,!1,e);this.diff_charsToLines_(i,h),this.diff_cleanupSemantic(i),i.push(new f.Diff(c,""));for(var t=0,s=0,l=0,g="",v="";t<i.length;){switch(i[t][0]){case M:l++,v+=i[t][1];break;case p:s++,g+=i[t][1];break;case c:if(s>=1&&l>=1){i.splice(t-s-l,s+l),t=t-s-l;for(var u=this.diff_main(g,v,!1,e),o=u.length-1;o>=0;o--)i.splice(t,0,u[o]);t=t+u.length}l=0,s=0,g="",v="";break}t++}return i.pop(),i};f.prototype.diff_bisect_=function(r,n,e){for(var a=r.length,h=n.length,i=Math.ceil((a+h)/2),t=i,s=2*i,l=new Array(s),g=new Array(s),v=0;v<s;v++)l[v]=-1,g[v]=-1;l[t+1]=0,g[t+1]=0;for(var u=a-h,o=u%2!=0,_=0,b=0,w=0,I=0,m=0;m<i&&!(new Date().getTime()>e);m++){for(var D=-m+_;D<=m-b;D+=2){var A=t+D,k;D==-m||D!=m&&l[A-1]<l[A+1]?k=l[A+1]:k=l[A-1]+1;for(var d=k-D;k<a&&d<h&&r.charAt(k)==n.charAt(d);)k++,d++;if(l[A]=k,k>a)b+=2;else if(d>h)_+=2;else if(o){var P=t+u-D;if(P>=0&&P<s&&g[P]!=-1){var E=a-g[P];if(k>=E)return this.diff_bisectSplit_(r,n,k,d,e)}}}for(var S=-m+w;S<=m-I;S+=2){var P=t+S,E;S==-m||S!=m&&g[P-1]<g[P+1]?E=g[P+1]:E=g[P-1]+1;for(var y=E-S;E<a&&y<h&&r.charAt(a-E-1)==n.charAt(h-y-1);)E++,y++;if(g[P]=E,E>a)I+=2;else if(y>h)w+=2;else if(!o){var A=t+u-S;if(A>=0&&A<s&&l[A]!=-1){var k=l[A],d=t+k-A;if(E=a-E,k>=E)return this.diff_bisectSplit_(r,n,k,d,e)}}}}return[new f.Diff(p,r),new f.Diff(M,n)]};f.prototype.diff_bisectSplit_=function(r,n,e,a,h){var i=r.substring(0,e),t=n.substring(0,a),s=r.substring(e),l=n.substring(a),g=this.diff_main(i,t,!1,h),v=this.diff_main(s,l,!1,h);return g.concat(v)};f.prototype.diff_linesToChars_=function(r,n){var e=[],a={};e[0]="";function h(l){for(var g="",v=0,u=-1,o=e.length;u<l.length-1;){u=l.indexOf(`
`,v),u==-1&&(u=l.length-1);var _=l.substring(v,u+1);(a.hasOwnProperty?a.hasOwnProperty(_):a[_]!==void 0)?g+=String.fromCharCode(a[_]):(o==i&&(_=l.substring(v),u=l.length),g+=String.fromCharCode(o),a[_]=o,e[o++]=_),v=u+1}return g}var i=4e4,t=h(r);i=65535;var s=h(n);return{chars1:t,chars2:s,lineArray:e}};f.prototype.diff_charsToLines_=function(r,n){for(var e=0;e<r.length;e++){for(var a=r[e][1],h=[],i=0;i<a.length;i++)h[i]=n[a.charCodeAt(i)];r[e][1]=h.join("")}};f.prototype.diff_commonPrefix=function(r,n){if(!r||!n||r.charAt(0)!=n.charAt(0))return 0;for(var e=0,a=Math.min(r.length,n.length),h=a,i=0;e<h;)r.substring(i,h)==n.substring(i,h)?(e=h,i=e):a=h,h=Math.floor((a-e)/2+e);return h};f.prototype.diff_commonSuffix=function(r,n){if(!r||!n||r.charAt(r.length-1)!=n.charAt(n.length-1))return 0;for(var e=0,a=Math.min(r.length,n.length),h=a,i=0;e<h;)r.substring(r.length-h,r.length-i)==n.substring(n.length-h,n.length-i)?(e=h,i=e):a=h,h=Math.floor((a-e)/2+e);return h};f.prototype.diff_commonOverlap_=function(r,n){var e=r.length,a=n.length;if(e==0||a==0)return 0;e>a?r=r.substring(e-a):e<a&&(n=n.substring(0,e));var h=Math.min(e,a);if(r==n)return h;for(var i=0,t=1;;){var s=r.substring(h-t),l=n.indexOf(s);if(l==-1)return i;t+=l,(l==0||r.substring(h-t)==n.substring(0,t))&&(i=t,t++)}};f.prototype.diff_halfMatch_=function(r,n){if(this.Diff_Timeout<=0)return null;var e=r.length>n.length?r:n,a=r.length>n.length?n:r;if(e.length<4||a.length*2<e.length)return null;var h=this;function i(b,w,I){for(var m=b.substring(I,I+Math.floor(b.length/4)),D=-1,A="",k,d,P,E;(D=w.indexOf(m,D+1))!=-1;){var S=h.diff_commonPrefix(b.substring(I),w.substring(D)),y=h.diff_commonSuffix(b.substring(0,I),w.substring(0,D));A.length<y+S&&(A=w.substring(D-y,D)+w.substring(D,D+S),k=b.substring(0,I-y),d=b.substring(I+S),P=w.substring(0,D-y),E=w.substring(D+S))}return A.length*2>=b.length?[k,d,P,E,A]:null}var t=i(e,a,Math.ceil(e.length/4)),s=i(e,a,Math.ceil(e.length/2)),l;if(!t&&!s)return null;s?t?l=t[4].length>s[4].length?t:s:l=s:l=t;var g,v,u,o;r.length>n.length?(g=l[0],v=l[1],u=l[2],o=l[3]):(u=l[0],o=l[1],g=l[2],v=l[3]);var _=l[4];return[g,v,u,o,_]};f.prototype.diff_cleanupSemantic=function(r){for(var n=!1,e=[],a=0,h=null,i=0,t=0,s=0,l=0,g=0;i<r.length;)r[i][0]==c?(e[a++]=i,t=l,s=g,l=0,g=0,h=r[i][1]):(r[i][0]==M?l+=r[i][1].length:g+=r[i][1].length,h&&h.length<=Math.max(t,s)&&h.length<=Math.max(l,g)&&(r.splice(e[a-1],0,new f.Diff(p,h)),r[e[a-1]+1][0]=M,a--,a--,i=a>0?e[a-1]:-1,t=0,s=0,l=0,g=0,h=null,n=!0)),i++;for(n&&this.diff_cleanupMerge(r),this.diff_cleanupSemanticLossless(r),i=1;i<r.length;){if(r[i-1][0]==p&&r[i][0]==M){var v=r[i-1][1],u=r[i][1],o=this.diff_commonOverlap_(v,u),_=this.diff_commonOverlap_(u,v);o>=_?(o>=v.length/2||o>=u.length/2)&&(r.splice(i,0,new f.Diff(c,u.substring(0,o))),r[i-1][1]=v.substring(0,v.length-o),r[i+1][1]=u.substring(o),i++):(_>=v.length/2||_>=u.length/2)&&(r.splice(i,0,new f.Diff(c,v.substring(0,_))),r[i-1][0]=M,r[i-1][1]=u.substring(0,u.length-_),r[i+1][0]=p,r[i+1][1]=v.substring(_),i++),i++}i++}};f.prototype.diff_cleanupSemanticLossless=function(r){function n(_,b){if(!_||!b)return 6;var w=_.charAt(_.length-1),I=b.charAt(0),m=w.match(f.nonAlphaNumericRegex_),D=I.match(f.nonAlphaNumericRegex_),A=m&&w.match(f.whitespaceRegex_),k=D&&I.match(f.whitespaceRegex_),d=A&&w.match(f.linebreakRegex_),P=k&&I.match(f.linebreakRegex_),E=d&&_.match(f.blanklineEndRegex_),S=P&&b.match(f.blanklineStartRegex_);return E||S?5:d||P?4:m&&!A&&k?3:A||k?2:m||D?1:0}for(var e=1;e<r.length-1;){if(r[e-1][0]==c&&r[e+1][0]==c){var a=r[e-1][1],h=r[e][1],i=r[e+1][1],t=this.diff_commonSuffix(a,h);if(t){var s=h.substring(h.length-t);a=a.substring(0,a.length-t),h=s+h.substring(0,h.length-t),i=s+i}for(var l=a,g=h,v=i,u=n(a,h)+n(h,i);h.charAt(0)===i.charAt(0);){a+=h.charAt(0),h=h.substring(1)+i.charAt(0),i=i.substring(1);var o=n(a,h)+n(h,i);o>=u&&(u=o,l=a,g=h,v=i)}r[e-1][1]!=l&&(l?r[e-1][1]=l:(r.splice(e-1,1),e--),r[e][1]=g,v?r[e+1][1]=v:(r.splice(e+1,1),e--))}e++}};f.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;f.whitespaceRegex_=/\s/;f.linebreakRegex_=/[\r\n]/;f.blanklineEndRegex_=/\n\r?\n$/;f.blanklineStartRegex_=/^\r?\n\r?\n/;f.prototype.diff_cleanupEfficiency=function(r){for(var n=!1,e=[],a=0,h=null,i=0,t=!1,s=!1,l=!1,g=!1;i<r.length;)r[i][0]==c?(r[i][1].length<this.Diff_EditCost&&(l||g)?(e[a++]=i,t=l,s=g,h=r[i][1]):(a=0,h=null),l=g=!1):(r[i][0]==p?g=!0:l=!0,h&&(t&&s&&l&&g||h.length<this.Diff_EditCost/2&&t+s+l+g==3)&&(r.splice(e[a-1],0,new f.Diff(p,h)),r[e[a-1]+1][0]=M,a--,h=null,t&&s?(l=g=!0,a=0):(a--,i=a>0?e[a-1]:-1,l=g=!1),n=!0)),i++;n&&this.diff_cleanupMerge(r)};f.prototype.diff_cleanupMerge=function(r){r.push(new f.Diff(c,""));for(var n=0,e=0,a=0,h="",i="",t;n<r.length;)switch(r[n][0]){case M:a++,i+=r[n][1],n++;break;case p:e++,h+=r[n][1],n++;break;case c:e+a>1?(e!==0&&a!==0&&(t=this.diff_commonPrefix(i,h),t!==0&&(n-e-a>0&&r[n-e-a-1][0]==c?r[n-e-a-1][1]+=i.substring(0,t):(r.splice(0,0,new f.Diff(c,i.substring(0,t))),n++),i=i.substring(t),h=h.substring(t)),t=this.diff_commonSuffix(i,h),t!==0&&(r[n][1]=i.substring(i.length-t)+r[n][1],i=i.substring(0,i.length-t),h=h.substring(0,h.length-t))),n-=e+a,r.splice(n,e+a),h.length&&(r.splice(n,0,new f.Diff(p,h)),n++),i.length&&(r.splice(n,0,new f.Diff(M,i)),n++),n++):n!==0&&r[n-1][0]==c?(r[n-1][1]+=r[n][1],r.splice(n,1)):n++,a=0,e=0,h="",i="";break}r[r.length-1][1]===""&&r.pop();var s=!1;for(n=1;n<r.length-1;)r[n-1][0]==c&&r[n+1][0]==c&&(r[n][1].substring(r[n][1].length-r[n-1][1].length)==r[n-1][1]?(r[n][1]=r[n-1][1]+r[n][1].substring(0,r[n][1].length-r[n-1][1].length),r[n+1][1]=r[n-1][1]+r[n+1][1],r.splice(n-1,1),s=!0):r[n][1].substring(0,r[n+1][1].length)==r[n+1][1]&&(r[n-1][1]+=r[n+1][1],r[n][1]=r[n][1].substring(r[n+1][1].length)+r[n+1][1],r.splice(n+1,1),s=!0)),n++;s&&this.diff_cleanupMerge(r)};f.prototype.diff_xIndex=function(r,n){var e=0,a=0,h=0,i=0,t;for(t=0;t<r.length&&(r[t][0]!==M&&(e+=r[t][1].length),r[t][0]!==p&&(a+=r[t][1].length),!(e>n));t++)h=e,i=a;return r.length!=t&&r[t][0]===p?i:i+(n-h)};f.prototype.diff_prettyHtml=function(r){for(var n=[],e=/&/g,a=/</g,h=/>/g,i=/\n/g,t=0;t<r.length;t++){var s=r[t][0],l=r[t][1],g=l.replace(e,"&amp;").replace(a,"&lt;").replace(h,"&gt;").replace(i,"&para;<br>");switch(s){case M:n[t]='<ins style="background:#e6ffe6;">'+g+"</ins>";break;case p:n[t]='<del style="background:#ffe6e6;">'+g+"</del>";break;case c:n[t]="<span>"+g+"</span>";break}}return n.join("")};f.prototype.diff_text1=function(r){for(var n=[],e=0;e<r.length;e++)r[e][0]!==M&&(n[e]=r[e][1]);return n.join("")};f.prototype.diff_text2=function(r){for(var n=[],e=0;e<r.length;e++)r[e][0]!==p&&(n[e]=r[e][1]);return n.join("")};f.prototype.diff_levenshtein=function(r){for(var n=0,e=0,a=0,h=0;h<r.length;h++){var i=r[h][0],t=r[h][1];switch(i){case M:e+=t.length;break;case p:a+=t.length;break;case c:n+=Math.max(e,a),e=0,a=0;break}}return n+=Math.max(e,a),n};f.prototype.diff_toDelta=function(r){for(var n=[],e=0;e<r.length;e++)switch(r[e][0]){case M:n[e]="+"+encodeURI(r[e][1]);break;case p:n[e]="-"+r[e][1].length;break;case c:n[e]="="+r[e][1].length;break}return n.join("	").replace(/%20/g," ")};f.prototype.diff_fromDelta=function(r,n){for(var e=[],a=0,h=0,i=n.split(/\t/g),t=0;t<i.length;t++){var s=i[t].substring(1);switch(i[t].charAt(0)){case"+":try{e[a++]=new f.Diff(M,decodeURI(s))}catch{throw new Error("Illegal escape in diff_fromDelta: "+s)}break;case"-":case"=":var l=parseInt(s,10);if(isNaN(l)||l<0)throw new Error("Invalid number in diff_fromDelta: "+s);var g=r.substring(h,h+=l);i[t].charAt(0)=="="?e[a++]=new f.Diff(c,g):e[a++]=new f.Diff(p,g);break;default:if(i[t])throw new Error("Invalid diff operation in diff_fromDelta: "+i[t])}}if(h!=r.length)throw new Error("Delta length ("+h+") does not equal source text length ("+r.length+").");return e};f.prototype.match_main=function(r,n,e){if(r==null||n==null||e==null)throw new Error("Null input. (match_main)");return e=Math.max(0,Math.min(e,r.length)),r==n?0:r.length?r.substring(e,e+n.length)==n?e:this.match_bitap_(r,n,e):-1};f.prototype.match_bitap_=function(r,n,e){if(n.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var a=this.match_alphabet_(n),h=this;function i(k,d){var P=k/n.length,E=Math.abs(e-d);return h.Match_Distance?P+E/h.Match_Distance:E?1:P}var t=this.Match_Threshold,s=r.indexOf(n,e);s!=-1&&(t=Math.min(i(0,s),t),s=r.lastIndexOf(n,e+n.length),s!=-1&&(t=Math.min(i(0,s),t)));var l=1<<n.length-1;s=-1;for(var g,v,u=n.length+r.length,o,_=0;_<n.length;_++){for(g=0,v=u;g<v;)i(_,e+v)<=t?g=v:u=v,v=Math.floor((u-g)/2+g);u=v;var b=Math.max(1,e-v+1),w=Math.min(e+v,r.length)+n.length,I=Array(w+2);I[w+1]=(1<<_)-1;for(var m=w;m>=b;m--){var D=a[r.charAt(m-1)];if(_===0?I[m]=(I[m+1]<<1|1)&D:I[m]=(I[m+1]<<1|1)&D|((o[m+1]|o[m])<<1|1)|o[m+1],I[m]&l){var A=i(_,m-1);if(A<=t)if(t=A,s=m-1,s>e)b=Math.max(1,2*e-s);else break}}if(i(_+1,e)>t)break;o=I}return s};f.prototype.match_alphabet_=function(r){for(var n={},e=0;e<r.length;e++)n[r.charAt(e)]=0;for(var e=0;e<r.length;e++)n[r.charAt(e)]|=1<<r.length-e-1;return n};f.prototype.patch_addContext_=function(r,n){if(n.length!=0){if(r.start2===null)throw Error("patch not initialized");for(var e=n.substring(r.start2,r.start2+r.length1),a=0;n.indexOf(e)!=n.lastIndexOf(e)&&e.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)a+=this.Patch_Margin,e=n.substring(r.start2-a,r.start2+r.length1+a);a+=this.Patch_Margin;var h=n.substring(r.start2-a,r.start2);h&&r.diffs.unshift(new f.Diff(c,h));var i=n.substring(r.start2+r.length1,r.start2+r.length1+a);i&&r.diffs.push(new f.Diff(c,i)),r.start1-=h.length,r.start2-=h.length,r.length1+=h.length+i.length,r.length2+=h.length+i.length}};f.prototype.patch_make=function(r,n,e){var a,h;if(typeof r=="string"&&typeof n=="string"&&typeof e=="undefined")a=r,h=this.diff_main(a,n,!0),h.length>2&&(this.diff_cleanupSemantic(h),this.diff_cleanupEfficiency(h));else if(r&&typeof r=="object"&&typeof n=="undefined"&&typeof e=="undefined")h=r,a=this.diff_text1(h);else if(typeof r=="string"&&n&&typeof n=="object"&&typeof e=="undefined")a=r,h=n;else if(typeof r=="string"&&typeof n=="string"&&e&&typeof e=="object")a=r,h=e;else throw new Error("Unknown call format to patch_make.");if(h.length===0)return[];for(var i=[],t=new f.patch_obj,s=0,l=0,g=0,v=a,u=a,o=0;o<h.length;o++){var _=h[o][0],b=h[o][1];switch(!s&&_!==c&&(t.start1=l,t.start2=g),_){case M:t.diffs[s++]=h[o],t.length2+=b.length,u=u.substring(0,g)+b+u.substring(g);break;case p:t.length1+=b.length,t.diffs[s++]=h[o],u=u.substring(0,g)+u.substring(g+b.length);break;case c:b.length<=2*this.Patch_Margin&&s&&h.length!=o+1?(t.diffs[s++]=h[o],t.length1+=b.length,t.length2+=b.length):b.length>=2*this.Patch_Margin&&s&&(this.patch_addContext_(t,v),i.push(t),t=new f.patch_obj,s=0,v=u,l=g);break}_!==M&&(l+=b.length),_!==p&&(g+=b.length)}return s&&(this.patch_addContext_(t,v),i.push(t)),i};f.prototype.patch_deepCopy=function(r){for(var n=[],e=0;e<r.length;e++){var a=r[e],h=new f.patch_obj;h.diffs=[];for(var i=0;i<a.diffs.length;i++)h.diffs[i]=new f.Diff(a.diffs[i][0],a.diffs[i][1]);h.start1=a.start1,h.start2=a.start2,h.length1=a.length1,h.length2=a.length2,n[e]=h}return n};f.prototype.patch_apply=function(r,n){if(r.length==0)return[n,[]];r=this.patch_deepCopy(r);var e=this.patch_addPadding(r);n=e+n+e,this.patch_splitMax(r);for(var a=0,h=[],i=0;i<r.length;i++){var t=r[i].start2+a,s=this.diff_text1(r[i].diffs),l,g=-1;if(s.length>this.Match_MaxBits?(l=this.match_main(n,s.substring(0,this.Match_MaxBits),t),l!=-1&&(g=this.match_main(n,s.substring(s.length-this.Match_MaxBits),t+s.length-this.Match_MaxBits),(g==-1||l>=g)&&(l=-1))):l=this.match_main(n,s,t),l==-1)h[i]=!1,a-=r[i].length2-r[i].length1;else{h[i]=!0,a=l-t;var v;if(g==-1?v=n.substring(l,l+s.length):v=n.substring(l,g+this.Match_MaxBits),s==v)n=n.substring(0,l)+this.diff_text2(r[i].diffs)+n.substring(l+s.length);else{var u=this.diff_main(s,v,!1);if(s.length>this.Match_MaxBits&&this.diff_levenshtein(u)/s.length>this.Patch_DeleteThreshold)h[i]=!1;else{this.diff_cleanupSemanticLossless(u);for(var o=0,_,b=0;b<r[i].diffs.length;b++){var w=r[i].diffs[b];w[0]!==c&&(_=this.diff_xIndex(u,o)),w[0]===M?n=n.substring(0,l+_)+w[1]+n.substring(l+_):w[0]===p&&(n=n.substring(0,l+_)+n.substring(l+this.diff_xIndex(u,o+w[1].length))),w[0]!==p&&(o+=w[1].length)}}}}}return n=n.substring(e.length,n.length-e.length),[n,h]};f.prototype.patch_addPadding=function(r){for(var n=this.Patch_Margin,e="",a=1;a<=n;a++)e+=String.fromCharCode(a);for(var a=0;a<r.length;a++)r[a].start1+=n,r[a].start2+=n;var h=r[0],i=h.diffs;if(i.length==0||i[0][0]!=c)i.unshift(new f.Diff(c,e)),h.start1-=n,h.start2-=n,h.length1+=n,h.length2+=n;else if(n>i[0][1].length){var t=n-i[0][1].length;i[0][1]=e.substring(i[0][1].length)+i[0][1],h.start1-=t,h.start2-=t,h.length1+=t,h.length2+=t}if(h=r[r.length-1],i=h.diffs,i.length==0||i[i.length-1][0]!=c)i.push(new f.Diff(c,e)),h.length1+=n,h.length2+=n;else if(n>i[i.length-1][1].length){var t=n-i[i.length-1][1].length;i[i.length-1][1]+=e.substring(0,t),h.length1+=t,h.length2+=t}return e};f.prototype.patch_splitMax=function(r){for(var n=this.Match_MaxBits,e=0;e<r.length;e++)if(!(r[e].length1<=n)){var a=r[e];r.splice(e--,1);for(var h=a.start1,i=a.start2,t="";a.diffs.length!==0;){var s=new f.patch_obj,l=!0;for(s.start1=h-t.length,s.start2=i-t.length,t!==""&&(s.length1=s.length2=t.length,s.diffs.push(new f.Diff(c,t)));a.diffs.length!==0&&s.length1<n-this.Patch_Margin;){var g=a.diffs[0][0],v=a.diffs[0][1];g===M?(s.length2+=v.length,i+=v.length,s.diffs.push(a.diffs.shift()),l=!1):g===p&&s.diffs.length==1&&s.diffs[0][0]==c&&v.length>2*n?(s.length1+=v.length,h+=v.length,l=!1,s.diffs.push(new f.Diff(g,v)),a.diffs.shift()):(v=v.substring(0,n-s.length1-this.Patch_Margin),s.length1+=v.length,h+=v.length,g===c?(s.length2+=v.length,i+=v.length):l=!1,s.diffs.push(new f.Diff(g,v)),v==a.diffs[0][1]?a.diffs.shift():a.diffs[0][1]=a.diffs[0][1].substring(v.length))}t=this.diff_text2(s.diffs),t=t.substring(t.length-this.Patch_Margin);var u=this.diff_text1(a.diffs).substring(0,this.Patch_Margin);u!==""&&(s.length1+=u.length,s.length2+=u.length,s.diffs.length!==0&&s.diffs[s.diffs.length-1][0]===c?s.diffs[s.diffs.length-1][1]+=u:s.diffs.push(new f.Diff(c,u))),l||r.splice(++e,0,s)}}};f.prototype.patch_toText=function(r){for(var n=[],e=0;e<r.length;e++)n[e]=r[e];return n.join("")};f.prototype.patch_fromText=function(r){var n=[];if(!r)return n;for(var e=r.split(`
`),a=0,h=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;a<e.length;){var i=e[a].match(h);if(!i)throw new Error("Invalid patch string: "+e[a]);var t=new f.patch_obj;for(n.push(t),t.start1=parseInt(i[1],10),i[2]===""?(t.start1--,t.length1=1):i[2]=="0"?t.length1=0:(t.start1--,t.length1=parseInt(i[2],10)),t.start2=parseInt(i[3],10),i[4]===""?(t.start2--,t.length2=1):i[4]=="0"?t.length2=0:(t.start2--,t.length2=parseInt(i[4],10)),a++;a<e.length;){var s=e[a].charAt(0);try{var l=decodeURI(e[a].substring(1))}catch{throw new Error("Illegal escape in patch_fromText: "+l)}if(s=="-")t.diffs.push(new f.Diff(p,l));else if(s=="+")t.diffs.push(new f.Diff(M,l));else if(s==" ")t.diffs.push(new f.Diff(c,l));else{if(s=="@")break;if(s!=="")throw new Error('Invalid patch mode "'+s+'" in: '+l)}a++}}return n};f.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0};f.patch_obj.prototype.toString=function(){var r,n;this.length1===0?r=this.start1+",0":this.length1==1?r=this.start1+1:r=this.start1+1+","+this.length1,this.length2===0?n=this.start2+",0":this.length2==1?n=this.start2+1:n=this.start2+1+","+this.length2;for(var e=["@@ -"+r+" +"+n+` @@
`],a,h=0;h<this.diffs.length;h++){switch(this.diffs[h][0]){case M:a="+";break;case p:a="-";break;case c:a=" ";break}e[h+1]=a+encodeURI(this.diffs[h][1])+`
`}return e.join("").replace(/%20/g," ")};T.exports=f;T.exports.diff_match_patch=f;T.exports.DIFF_DELETE=p;T.exports.DIFF_INSERT=M;T.exports.DIFF_EQUAL=c});var B=$(C()),X=B.default;export{X as default};
