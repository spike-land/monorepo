var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod4) => function __require2() {
  return mod4 || (0, cb[__getOwnPropNames(cb)[0]])((mod4 = { exports: {} }).exports, mod4), mod4.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod4, isNodeMode, target) => (target = mod4 != null ? __create(__getProtoOf(mod4)) : {}, __copyProps(
  isNodeMode || !mod4 || !mod4.__esModule ? __defProp(target, "default", { value: mod4, enumerable: true }) : target,
  mod4
));

// ../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/Mime.js"(exports, module) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < arguments.length; i++) {
        this.define(arguments[i]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t) {
          return t.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error(
              'Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".'
            );
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last4 = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last4.replace(/^.*\./, "").toLowerCase();
      let hasPath = last4.length < path.length;
      let hasDot = ext.length < last4.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module.exports = Mime;
  }
});

// ../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/types/standard.js"(exports, module) {
    module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// ../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/types/other.js
var require_other = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/types/other.js"(exports, module) {
    module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// ../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/index.js
var require_mime = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/mime-npm-3.0.0-8d911e4c06-9.zip/node_modules/mime/index.js"(exports, module) {
    "use strict";
    var Mime = require_Mime();
    module.exports = new Mime(require_standard(), require_other());
  }
});

// ../../../../../Users/z/.yarn/berry/cache/@cloudflare-kv-asset-handler-npm-0.3.0-982933551f-9.zip/node_modules/@cloudflare/kv-asset-handler/dist/types.js
var require_types = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/@cloudflare-kv-asset-handler-npm-0.3.0-982933551f-9.zip/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
    var KVError = class extends Error {
      constructor(message, status = 500) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = KVError.name;
        this.status = status;
      }
    };
    exports.KVError = KVError;
    var MethodNotAllowedError = class extends KVError {
      constructor(message = `Not a valid request method`, status = 405) {
        super(message, status);
      }
    };
    exports.MethodNotAllowedError = MethodNotAllowedError;
    var NotFoundError = class extends KVError {
      constructor(message = `Not Found`, status = 404) {
        super(message, status);
      }
    };
    exports.NotFoundError = NotFoundError;
    var InternalError = class extends KVError {
      constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
        super(message, status);
      }
    };
    exports.InternalError = InternalError;
  }
});

// ../../../../../Users/z/.yarn/berry/cache/@cloudflare-kv-asset-handler-npm-0.3.0-982933551f-9.zip/node_modules/@cloudflare/kv-asset-handler/dist/index.js
var require_dist = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/@cloudflare-kv-asset-handler-npm-0.3.0-982933551f-9.zip/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
    var mime = require_mime();
    var types_1 = require_types();
    Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
      return types_1.MethodNotAllowedError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return types_1.NotFoundError;
    } });
    Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
      return types_1.InternalError;
    } });
    var defaultCacheControl = {
      browserTTL: null,
      edgeTTL: 2 * 60 * 60 * 24,
      bypassCache: false
    };
    var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
    var getAssetFromKVDefaultOptions = {
      ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
      ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : {},
      cacheControl: defaultCacheControl,
      defaultMimeType: "text/plain",
      defaultDocument: "index.html",
      pathIsEncoded: false,
      defaultETag: "strong"
    };
    function assignOptions(options) {
      return Object.assign({}, getAssetFromKVDefaultOptions, options);
    }
    var mapRequestToAsset = (request, options) => {
      options = assignOptions(options);
      const parsedUrl = new URL(request.url);
      let pathname = parsedUrl.pathname;
      if (pathname.endsWith("/")) {
        pathname = pathname.concat(options.defaultDocument);
      } else if (!mime.getType(pathname)) {
        pathname = pathname.concat("/" + options.defaultDocument);
      }
      parsedUrl.pathname = pathname;
      return new Request(parsedUrl.toString(), request);
    };
    exports.mapRequestToAsset = mapRequestToAsset;
    function serveSinglePageApp(request, options) {
      options = assignOptions(options);
      request = mapRequestToAsset(request, options);
      const parsedUrl = new URL(request.url);
      if (parsedUrl.pathname.endsWith(".html")) {
        return new Request(`${parsedUrl.origin}/${options.defaultDocument}`, request);
      } else {
        return request;
      }
    }
    exports.serveSinglePageApp = serveSinglePageApp;
    var getAssetFromKV2 = async (event, options) => {
      options = assignOptions(options);
      const request = event.request;
      const ASSET_NAMESPACE = options.ASSET_NAMESPACE;
      const ASSET_MANIFEST2 = parseStringAsObject(options.ASSET_MANIFEST);
      if (typeof ASSET_NAMESPACE === "undefined") {
        throw new types_1.InternalError(`there is no KV namespace bound to the script`);
      }
      const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
      let pathIsEncoded = options.pathIsEncoded;
      let requestKey;
      if (options.mapRequestToAsset) {
        requestKey = options.mapRequestToAsset(request);
      } else if (ASSET_MANIFEST2[rawPathKey]) {
        requestKey = request;
      } else if (ASSET_MANIFEST2[decodeURIComponent(rawPathKey)]) {
        pathIsEncoded = true;
        requestKey = request;
      } else {
        const mappedRequest = mapRequestToAsset(request);
        const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
        if (ASSET_MANIFEST2[decodeURIComponent(mappedRawPathKey)]) {
          pathIsEncoded = true;
          requestKey = mappedRequest;
        } else {
          requestKey = mapRequestToAsset(request, options);
        }
      }
      const SUPPORTED_METHODS = ["GET", "HEAD"];
      if (!SUPPORTED_METHODS.includes(requestKey.method)) {
        throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
      }
      const parsedUrl = new URL(requestKey.url);
      const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
      let pathKey = pathname.replace(/^\/+/, "");
      const cache = caches.default;
      let mimeType = mime.getType(pathKey) || options.defaultMimeType;
      if (mimeType.startsWith("text") || mimeType === "application/javascript") {
        mimeType += "; charset=utf-8";
      }
      let shouldEdgeCache = false;
      if (typeof ASSET_MANIFEST2 !== "undefined") {
        if (ASSET_MANIFEST2[pathKey]) {
          pathKey = ASSET_MANIFEST2[pathKey];
          shouldEdgeCache = true;
        }
      }
      let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
      const evalCacheOpts = (() => {
        switch (typeof options.cacheControl) {
          case "function":
            return options.cacheControl(request);
          case "object":
            return options.cacheControl;
          default:
            return defaultCacheControl;
        }
      })();
      const formatETag = (entityId = pathKey, validatorType = options.defaultETag) => {
        if (!entityId) {
          return "";
        }
        switch (validatorType) {
          case "weak":
            if (!entityId.startsWith("W/")) {
              if (entityId.startsWith(`"`) && entityId.endsWith(`"`)) {
                return `W/${entityId}`;
              }
              return `W/"${entityId}"`;
            }
            return entityId;
          case "strong":
            if (entityId.startsWith(`W/"`)) {
              entityId = entityId.replace("W/", "");
            }
            if (!entityId.endsWith(`"`)) {
              entityId = `"${entityId}"`;
            }
            return entityId;
          default:
            return "";
        }
      };
      options.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
      if (options.cacheControl.bypassCache || options.cacheControl.edgeTTL === null || request.method == "HEAD") {
        shouldEdgeCache = false;
      }
      const shouldSetBrowserCache = typeof options.cacheControl.browserTTL === "number";
      let response = null;
      if (shouldEdgeCache) {
        response = await cache.match(cacheKey);
      }
      if (response) {
        if (response.status > 300 && response.status < 400) {
          if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
            response.body.cancel();
          } else {
          }
          response = new Response(null, response);
        } else {
          let opts = {
            headers: new Headers(response.headers),
            status: 0,
            statusText: ""
          };
          opts.headers.set("cf-cache-status", "HIT");
          if (response.status) {
            opts.status = response.status;
            opts.statusText = response.statusText;
          } else if (opts.headers.has("Content-Range")) {
            opts.status = 206;
            opts.statusText = "Partial Content";
          } else {
            opts.status = 200;
            opts.statusText = "OK";
          }
          response = new Response(response.body, opts);
        }
      } else {
        const body = await ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
        if (body === null) {
          throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
        }
        response = new Response(body);
        if (shouldEdgeCache) {
          response.headers.set("Accept-Ranges", "bytes");
          response.headers.set("Content-Length", String(body.byteLength));
          if (!response.headers.has("etag")) {
            response.headers.set("etag", formatETag(pathKey));
          }
          response.headers.set("Cache-Control", `max-age=${options.cacheControl.edgeTTL}`);
          event.waitUntil(cache.put(cacheKey, response.clone()));
          response.headers.set("CF-Cache-Status", "MISS");
        }
      }
      response.headers.set("Content-Type", mimeType);
      if (response.status === 304) {
        let etag = formatETag(response.headers.get("etag"));
        let ifNoneMatch = cacheKey.headers.get("if-none-match");
        let proxyCacheStatus = response.headers.get("CF-Cache-Status");
        if (etag) {
          if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
            response.headers.set("CF-Cache-Status", "EXPIRED");
          } else {
            response.headers.set("CF-Cache-Status", "REVALIDATED");
          }
          response.headers.set("etag", formatETag(etag, "weak"));
        }
      }
      if (shouldSetBrowserCache) {
        response.headers.set("Cache-Control", `max-age=${options.cacheControl.browserTTL}`);
      } else {
        response.headers.delete("Cache-Control");
      }
      return response;
    };
    exports.getAssetFromKV = getAssetFromKV2;
  }
});

// ../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-JLPTXNJM.mjs
var __create2, __defProp2, __getOwnPropDesc2, __getOwnPropNames2, __getProtoOf2, __hasOwnProp2, __name, __esm2, __commonJS2, __copyProps2, __toESM2, define_process_default, init_define_process;
var init_chunk_chunk_JLPTXNJM = __esm({
  "../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-JLPTXNJM.mjs"() {
    "use strict";
    __create2 = Object.create;
    __defProp2 = Object.defineProperty;
    __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    __getOwnPropNames2 = Object.getOwnPropertyNames;
    __getProtoOf2 = Object.getPrototypeOf;
    __hasOwnProp2 = Object.prototype.hasOwnProperty;
    __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
    __esm2 = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    };
    __commonJS2 = (cb, mod4) => function __require2() {
      return mod4 || (0, cb[__getOwnPropNames2(cb)[0]])((mod4 = { exports: {} }).exports, mod4), mod4.exports;
    };
    __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    __toESM2 = (mod4, isNodeMode, target) => (target = mod4 != null ? __create2(__getProtoOf2(mod4)) : {}, __copyProps2(
      isNodeMode || !mod4 || !mod4.__esModule ? __defProp2(target, "default", { value: mod4, enumerable: true }) : target,
      mod4
    ));
    init_define_process = __esm2({
      "<define:process>"() {
        define_process_default = { version: "v19.3.0", versions: { node: "v19.3.0" }, env: { NODE_ENV: "development", version: "v19.3.0", browser: true, isWebworker: true, NODE_DEBUG: false, DEBUG: false, isBrowser: true, versions: { node: "v19.3.0" } }, browser: true };
      }
    });
  }
});

// ../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-QRJQSMAR.mjs
function importMapReplace(codeInp, origin2, relativeUrl, importmapRep = true, tsx = false) {
  let returnStr = replaceAll(codeInp, `from"`, `from "`);
  const items = Object.keys(
    importMapImports
  );
  items.map((lib) => {
    const uri = new URL(importMapImports[lib], origin2).toString();
    if (importmapRep) {
      returnStr = replaceAll(returnStr, ` from "${lib}"`, ` from "${uri}"`);
    }
    returnStr = replaceAll(returnStr, ` from "/`, ` from "${origin2}/`);
  });
  returnStr.split("/::").join(origin2);
  if (!returnStr)
    return returnStr;
  const url = relativeUrl || origin2;
  const baSe = new URL(".", url).toString();
  const parent = new URL("..", url).toString();
  const gParent = new URL("../..", url).toString();
  const ggParent = new URL("../../..", url).toString();
  returnStr = replaceAll(
    returnStr,
    `reference path="./`,
    `reference path="${baSe}`
  );
  returnStr = replaceAll(returnStr, `import"`, `import "`);
  returnStr = replaceAll(returnStr, ` from "../../../`, ` from "${ggParent}`);
  returnStr = replaceAll(
    returnStr,
    `import("../../../`,
    ` import("${ggParent}`
  );
  returnStr = replaceAll(returnStr, `import("../../`, ` import("${gParent}`);
  returnStr = replaceAll(returnStr, `import("../`, ` import("${parent}`);
  returnStr = replaceAll(returnStr, `import("./`, ` import("${baSe}`);
  returnStr = replaceAll(
    returnStr,
    `import "../../../`,
    ` import "${ggParent}`
  );
  returnStr = replaceAll(returnStr, `import "../../`, ` import "${gParent}`);
  returnStr = replaceAll(returnStr, `import "../`, ` import "${parent}`);
  returnStr = replaceAll(returnStr, `import "./`, ` import "${baSe}`);
  returnStr = replaceAll(returnStr, ` from "../../`, ` from "${gParent}`);
  returnStr = replaceAll(returnStr, ` from "../`, ` from "${parent}`);
  returnStr = replaceAll(returnStr, ` from "./`, ` from "${baSe}`);
  let oldUrl;
  returnStr = returnStr.split(";").map((x) => x.indexOf("import") !== -1 ? x.trim() : x).map(
    (Y) => Y.split("\n").map((x) => {
      if (x.length === 0 || x.indexOf("import") === -1)
        return x;
      if (x.startsWith("import") && x.indexOf(`"`) !== -1 && x.indexOf(`https://`) === -1 && x.indexOf(origin2) === -1) {
        const slices = x.split(`"`);
        slices[1] = origin2 + "/" + slices[1] + "?dev&format=es2022";
        return slices.join(`"`);
      }
      if (x.indexOf("/node_process.js") !== -1 || x.indexOf("/node_buffer.js") !== -1 || x.indexOf("@babel/runtime") !== -1) {
        const slices = x.split(`"`);
        try {
          oldUrl = new URL(slices[1]);
          slices[1] = origin2 + "/npm:" + oldUrl.pathname;
        } catch {
          console.error("URL ERR", slices[1]);
        }
        return slices.join(`"`);
      }
      if (x.indexOf("/npm:/") === -1 && x.startsWith("import")) {
        const slices = x.split(`"`);
        try {
          oldUrl = new URL(slices[1], origin2);
          if (oldUrl && oldUrl.pathname.indexOf(".") === -1 && oldUrl.pathname.indexOf("/live/") !== -1) {
            slices[1] = oldUrl.toString() + (tsx ? "/index.tsx" : "/index.js");
          }
        } catch {
          console.error("URL ERR", slices[1]);
        }
        return slices.join(`"`);
      }
      return x;
    }).join("\n")
  ).join(";");
  returnStr = returnStr.split("/npm:/npm:").join("/npm:");
  return returnStr;
}
function replaceAll(inp, search, replace) {
  if (!inp)
    return inp;
  return inp.split(search).join(replace);
}
var importmap_default, importMapImports;
var init_chunk_chunk_QRJQSMAR = __esm({
  "../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-QRJQSMAR.mjs"() {
    "use strict";
    init_chunk_chunk_JLPTXNJM();
    importmap_default = {
      imports: {
        "@emotion/react/jsx-runtime": "/src/emotionJsxRuntime.mjs",
        "react-dom/client": "/src/reactDomClient.mjs",
        "framer-motion": "/src/motion.mjs",
        "@emotion/react": "/src/emotion.mjs",
        "@emotion/cache": "/src/emotionCache.mjs",
        "@emotion/styled": "/src/emotionStyled.mjs",
        react: "/src/reactMod.mjs",
        "react-dom": "/src/reactDom.mjs",
        "react-error-boundary": "/src/reactMod.mjs",
        "hydrate.mjs": "/src/hydrate.mjs"
      }
    };
    init_define_process();
    importMapImports = importmap_default.imports;
    __name(importMapReplace, "importMapReplace");
    __name(replaceAll, "replaceAll");
  }
});

// ../code/dist/src/chunk-chunk-JLPTXNJM.mjs
var __create3, __defProp3, __getOwnPropDesc3, __getOwnPropNames3, __getProtoOf3, __hasOwnProp3, __name2, __esm3, __commonJS3, __copyProps3, __toESM3, define_process_default2, init_define_process2;
var init_chunk_chunk_JLPTXNJM2 = __esm({
  "../code/dist/src/chunk-chunk-JLPTXNJM.mjs"() {
    "use strict";
    __create3 = Object.create;
    __defProp3 = Object.defineProperty;
    __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
    __getOwnPropNames3 = Object.getOwnPropertyNames;
    __getProtoOf3 = Object.getPrototypeOf;
    __hasOwnProp3 = Object.prototype.hasOwnProperty;
    __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
    __esm3 = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames3(fn)[0]])(fn = 0)), res;
    };
    __commonJS3 = (cb, mod4) => function __require2() {
      return mod4 || (0, cb[__getOwnPropNames3(cb)[0]])((mod4 = { exports: {} }).exports, mod4), mod4.exports;
    };
    __copyProps3 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames3(from))
          if (!__hasOwnProp3.call(to, key) && key !== except)
            __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
      }
      return to;
    };
    __toESM3 = (mod4, isNodeMode, target) => (target = mod4 != null ? __create3(__getProtoOf3(mod4)) : {}, __copyProps3(
      isNodeMode || !mod4 || !mod4.__esModule ? __defProp3(target, "default", { value: mod4, enumerable: true }) : target,
      mod4
    ));
    init_define_process2 = __esm3({
      "<define:process>"() {
        define_process_default2 = { version: "v19.3.0", versions: { node: "v19.3.0" }, env: { NODE_ENV: "development", version: "v19.3.0", browser: true, isWebworker: true, NODE_DEBUG: false, DEBUG: false, isBrowser: true, versions: { node: "v19.3.0" } }, browser: true };
      }
    });
  }
});

// ../code/dist/src/chunk-chunk-QRJQSMAR.mjs
function importMapReplace2(codeInp, origin2, relativeUrl, importmapRep = true, tsx = false) {
  let returnStr = replaceAll2(codeInp, `from"`, `from "`);
  const items = Object.keys(
    importMapImports2
  );
  items.map((lib) => {
    const uri = new URL(importMapImports2[lib], origin2).toString();
    if (importmapRep) {
      returnStr = replaceAll2(returnStr, ` from "${lib}"`, ` from "${uri}"`);
    }
    returnStr = replaceAll2(returnStr, ` from "/`, ` from "${origin2}/`);
  });
  returnStr.split("/::").join(origin2);
  if (!returnStr)
    return returnStr;
  const url = relativeUrl || origin2;
  const baSe = new URL(".", url).toString();
  const parent = new URL("..", url).toString();
  const gParent = new URL("../..", url).toString();
  const ggParent = new URL("../../..", url).toString();
  returnStr = replaceAll2(
    returnStr,
    `reference path="./`,
    `reference path="${baSe}`
  );
  returnStr = replaceAll2(returnStr, `import"`, `import "`);
  returnStr = replaceAll2(returnStr, ` from "../../../`, ` from "${ggParent}`);
  returnStr = replaceAll2(
    returnStr,
    `import("../../../`,
    ` import("${ggParent}`
  );
  returnStr = replaceAll2(returnStr, `import("../../`, ` import("${gParent}`);
  returnStr = replaceAll2(returnStr, `import("../`, ` import("${parent}`);
  returnStr = replaceAll2(returnStr, `import("./`, ` import("${baSe}`);
  returnStr = replaceAll2(
    returnStr,
    `import "../../../`,
    ` import "${ggParent}`
  );
  returnStr = replaceAll2(returnStr, `import "../../`, ` import "${gParent}`);
  returnStr = replaceAll2(returnStr, `import "../`, ` import "${parent}`);
  returnStr = replaceAll2(returnStr, `import "./`, ` import "${baSe}`);
  returnStr = replaceAll2(returnStr, ` from "../../`, ` from "${gParent}`);
  returnStr = replaceAll2(returnStr, ` from "../`, ` from "${parent}`);
  returnStr = replaceAll2(returnStr, ` from "./`, ` from "${baSe}`);
  let oldUrl;
  returnStr = returnStr.split(";").map((x) => x.indexOf("import") !== -1 ? x.trim() : x).map(
    (Y) => Y.split("\n").map((x) => {
      if (x.length === 0 || x.indexOf("import") === -1)
        return x;
      if (x.startsWith("import") && x.indexOf(`"`) !== -1 && x.indexOf(`https://`) === -1 && x.indexOf(origin2) === -1) {
        const slices = x.split(`"`);
        slices[1] = origin2 + "/" + slices[1] + "?dev&format=es2022";
        return slices.join(`"`);
      }
      if (x.indexOf("/node_process.js") !== -1 || x.indexOf("/node_buffer.js") !== -1 || x.indexOf("@babel/runtime") !== -1) {
        const slices = x.split(`"`);
        try {
          oldUrl = new URL(slices[1]);
          slices[1] = origin2 + "/npm:" + oldUrl.pathname;
        } catch {
          console.error("URL ERR", slices[1]);
        }
        return slices.join(`"`);
      }
      if (x.indexOf("/npm:/") === -1 && x.startsWith("import")) {
        const slices = x.split(`"`);
        try {
          oldUrl = new URL(slices[1], origin2);
          if (oldUrl && oldUrl.pathname.indexOf(".") === -1 && oldUrl.pathname.indexOf("/live/") !== -1) {
            slices[1] = oldUrl.toString() + (tsx ? "/index.tsx" : "/index.js");
          }
        } catch {
          console.error("URL ERR", slices[1]);
        }
        return slices.join(`"`);
      }
      return x;
    }).join("\n")
  ).join(";");
  returnStr = returnStr.split("/npm:/npm:").join("/npm:");
  return returnStr;
}
function replaceAll2(inp, search, replace) {
  if (!inp)
    return inp;
  return inp.split(search).join(replace);
}
var importmap_default2, importMapImports2;
var init_chunk_chunk_QRJQSMAR2 = __esm({
  "../code/dist/src/chunk-chunk-QRJQSMAR.mjs"() {
    "use strict";
    init_chunk_chunk_JLPTXNJM2();
    importmap_default2 = {
      imports: {
        "@emotion/react/jsx-runtime": "/src/emotionJsxRuntime.mjs",
        "react-dom/client": "/src/reactDomClient.mjs",
        "framer-motion": "/src/motion.mjs",
        "@emotion/react": "/src/emotion.mjs",
        "@emotion/cache": "/src/emotionCache.mjs",
        "@emotion/styled": "/src/emotionStyled.mjs",
        react: "/src/reactMod.mjs",
        "react-dom": "/src/reactDom.mjs",
        "react-error-boundary": "/src/reactMod.mjs",
        "hydrate.mjs": "/src/hydrate.mjs"
      }
    };
    init_define_process2();
    importMapImports2 = importmap_default2.imports;
    __name2(importMapReplace2, "importMapReplace");
    __name2(replaceAll2, "replaceAll");
  }
});

// ../../../../../Users/z/.yarn/berry/cache/esbuild-wasm-npm-0.16.13-8714cdd154-9.zip/node_modules/esbuild-wasm/lib/browser.js
var require_browser3 = __commonJS({
  "../../../../../Users/z/.yarn/berry/cache/esbuild-wasm-npm-0.16.13-8714cdd154-9.zip/node_modules/esbuild-wasm/lib/browser.js"(exports, module) {
    ((module2) => {
      "use strict";
      var __defProp4 = Object.defineProperty;
      var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames4 = Object.getOwnPropertyNames;
      var __hasOwnProp4 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp4(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps4 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames4(from))
            if (!__hasOwnProp4.call(to, key) && key !== except)
              __defProp4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc4(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod4) => __copyProps4(__defProp4({}, "__esModule", { value: true }), mod4);
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      var browser_exports = {};
      __export(browser_exports, {
        analyzeMetafile: () => analyzeMetafile,
        analyzeMetafileSync: () => analyzeMetafileSync,
        build: () => build,
        buildSync: () => buildSync,
        default: () => browser_default,
        formatMessages: () => formatMessages,
        formatMessagesSync: () => formatMessagesSync,
        initialize: () => initialize2,
        serve: () => serve,
        transform: () => transform2,
        transformSync: () => transformSync,
        version: () => version
      });
      module2.exports = __toCommonJS(browser_exports);
      function encodePacket(packet) {
        let visit = (value) => {
          if (value === null) {
            bb.write8(0);
          } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
          } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
          } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
          } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
          } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value) {
              visit(item);
            }
          } else {
            let keys3 = Object.keys(value);
            bb.write8(6);
            bb.write32(keys3.length);
            for (let key of keys3) {
              bb.write(encodeUTF8(key));
              visit(value[key]);
            }
          }
        };
        let bb = new ByteBuffer();
        bb.write32(0);
        bb.write32(packet.id << 1 | +!packet.isRequest);
        visit(packet.value);
        writeUInt32LE(bb.buf, bb.len - 4, 0);
        return bb.buf.subarray(0, bb.len);
      }
      function decodePacket(bytes) {
        let visit = () => {
          switch (bb.read8()) {
            case 0:
              return null;
            case 1:
              return !!bb.read8();
            case 2:
              return bb.read32();
            case 3:
              return decodeUTF8(bb.read());
            case 4:
              return bb.read();
            case 5: {
              let count3 = bb.read32();
              let value2 = [];
              for (let i = 0; i < count3; i++) {
                value2.push(visit());
              }
              return value2;
            }
            case 6: {
              let count3 = bb.read32();
              let value2 = {};
              for (let i = 0; i < count3; i++) {
                value2[decodeUTF8(bb.read())] = visit();
              }
              return value2;
            }
            default:
              throw new Error("Invalid packet");
          }
        };
        let bb = new ByteBuffer(bytes);
        let id = bb.read32();
        let isRequest = (id & 1) === 0;
        id >>>= 1;
        let value = visit();
        if (bb.ptr !== bytes.length) {
          throw new Error("Invalid packet");
        }
        return { id, isRequest, value };
      }
      var ByteBuffer = class {
        constructor(buf = new Uint8Array(1024)) {
          this.buf = buf;
          this.len = 0;
          this.ptr = 0;
        }
        _write(delta) {
          if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
          }
          this.len += delta;
          return this.len - delta;
        }
        write8(value) {
          let offset = this._write(1);
          this.buf[offset] = value;
        }
        write32(value) {
          let offset = this._write(4);
          writeUInt32LE(this.buf, value, offset);
        }
        write(bytes) {
          let offset = this._write(4 + bytes.length);
          writeUInt32LE(this.buf, bytes.length, offset);
          this.buf.set(bytes, offset + 4);
        }
        _read(delta) {
          if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
          }
          this.ptr += delta;
          return this.ptr - delta;
        }
        read8() {
          return this.buf[this._read(1)];
        }
        read32() {
          return readUInt32LE(this.buf, this._read(4));
        }
        read() {
          let length = this.read32();
          let bytes = new Uint8Array(length);
          let ptr = this._read(bytes.length);
          bytes.set(this.buf.subarray(ptr, ptr + length));
          return bytes;
        }
      };
      var encodeUTF8;
      var decodeUTF8;
      var encodeInvariant;
      if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
        let encoder = new TextEncoder();
        let decoder = new TextDecoder();
        encodeUTF8 = (text) => encoder.encode(text);
        decodeUTF8 = (bytes) => decoder.decode(bytes);
        encodeInvariant = 'new TextEncoder().encode("")';
      } else if (typeof Buffer !== "undefined") {
        encodeUTF8 = (text) => Buffer.from(text);
        decodeUTF8 = (bytes) => {
          let { buffer, byteOffset, byteLength } = bytes;
          return Buffer.from(buffer, byteOffset, byteLength).toString();
        };
        encodeInvariant = 'Buffer.from("")';
      } else {
        throw new Error("No UTF-8 codec found");
      }
      if (!(encodeUTF8("") instanceof Uint8Array))
        throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
      function readUInt32LE(buffer, offset) {
        return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
      }
      function writeUInt32LE(buffer, value, offset) {
        buffer[offset++] = value;
        buffer[offset++] = value >> 8;
        buffer[offset++] = value >> 16;
        buffer[offset++] = value >> 24;
      }
      var quote = JSON.stringify;
      var buildLogLevelDefault = "warning";
      var transformLogLevelDefault = "silent";
      function validateTarget(target) {
        validateStringValue(target, "target");
        if (target.indexOf(",") >= 0)
          throw new Error(`Invalid target: ${target}`);
        return target;
      }
      var canBeAnything = () => null;
      var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
      var mustBeBooleanOrObject = (value) => typeof value === "boolean" || typeof value === "object" && !Array.isArray(value) ? null : "a boolean or an object";
      var mustBeString = (value) => typeof value === "string" ? null : "a string";
      var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
      var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
      var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
      var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
      var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
      var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
      var mustBeArrayOrRecord = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
      var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
      var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
      var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
      var mustBeStringOrArray = (value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array";
      var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
      var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
      function getFlag(object, keys3, key, mustBeFn) {
        let value = object[key];
        keys3[key + ""] = true;
        if (value === void 0)
          return void 0;
        let mustBe = mustBeFn(value);
        if (mustBe !== null)
          throw new Error(`${quote(key)} must be ${mustBe}`);
        return value;
      }
      function checkForInvalidFlags(object, keys3, where) {
        for (let key in object) {
          if (!(key in keys3)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
          }
        }
      }
      function validateInitializeOptions(options) {
        let keys3 = /* @__PURE__ */ Object.create(null);
        let wasmURL = getFlag(options, keys3, "wasmURL", mustBeStringOrURL);
        let wasmModule = getFlag(options, keys3, "wasmModule", mustBeWebAssemblyModule);
        let worker = getFlag(options, keys3, "worker", mustBeBoolean);
        checkForInvalidFlags(options, keys3, "in initialize() call");
        return {
          wasmURL,
          wasmModule,
          worker
        };
      }
      function validateMangleCache(mangleCache) {
        let validated;
        if (mangleCache !== void 0) {
          validated = /* @__PURE__ */ Object.create(null);
          for (let key in mangleCache) {
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
              validated[key] = value;
            } else {
              throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
          }
        }
        return validated;
      }
      function pushLogFlags(flags, options, keys3, isTTY, logLevelDefault) {
        let color = getFlag(options, keys3, "color", mustBeBoolean);
        let logLevel = getFlag(options, keys3, "logLevel", mustBeString);
        let logLimit = getFlag(options, keys3, "logLimit", mustBeInteger);
        if (color !== void 0)
          flags.push(`--color=${color}`);
        else if (isTTY)
          flags.push(`--color=true`);
        flags.push(`--log-level=${logLevel || logLevelDefault}`);
        flags.push(`--log-limit=${logLimit || 0}`);
      }
      function validateStringValue(value, what, key) {
        if (typeof value !== "string") {
          throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
        }
        return value;
      }
      function pushCommonFlags(flags, options, keys3) {
        let legalComments = getFlag(options, keys3, "legalComments", mustBeString);
        let sourceRoot = getFlag(options, keys3, "sourceRoot", mustBeString);
        let sourcesContent = getFlag(options, keys3, "sourcesContent", mustBeBoolean);
        let target = getFlag(options, keys3, "target", mustBeStringOrArray);
        let format = getFlag(options, keys3, "format", mustBeString);
        let globalName = getFlag(options, keys3, "globalName", mustBeString);
        let mangleProps = getFlag(options, keys3, "mangleProps", mustBeRegExp);
        let reserveProps = getFlag(options, keys3, "reserveProps", mustBeRegExp);
        let mangleQuoted = getFlag(options, keys3, "mangleQuoted", mustBeBoolean);
        let minify = getFlag(options, keys3, "minify", mustBeBoolean);
        let minifySyntax = getFlag(options, keys3, "minifySyntax", mustBeBoolean);
        let minifyWhitespace = getFlag(options, keys3, "minifyWhitespace", mustBeBoolean);
        let minifyIdentifiers = getFlag(options, keys3, "minifyIdentifiers", mustBeBoolean);
        let drop = getFlag(options, keys3, "drop", mustBeArray);
        let charset = getFlag(options, keys3, "charset", mustBeString);
        let treeShaking = getFlag(options, keys3, "treeShaking", mustBeBoolean);
        let ignoreAnnotations = getFlag(options, keys3, "ignoreAnnotations", mustBeBoolean);
        let jsx = getFlag(options, keys3, "jsx", mustBeString);
        let jsxFactory = getFlag(options, keys3, "jsxFactory", mustBeString);
        let jsxFragment = getFlag(options, keys3, "jsxFragment", mustBeString);
        let jsxImportSource = getFlag(options, keys3, "jsxImportSource", mustBeString);
        let jsxDev = getFlag(options, keys3, "jsxDev", mustBeBoolean);
        let jsxSideEffects = getFlag(options, keys3, "jsxSideEffects", mustBeBoolean);
        let define3 = getFlag(options, keys3, "define", mustBeObject);
        let logOverride = getFlag(options, keys3, "logOverride", mustBeObject);
        let supported = getFlag(options, keys3, "supported", mustBeObject);
        let pure = getFlag(options, keys3, "pure", mustBeArray);
        let keepNames = getFlag(options, keys3, "keepNames", mustBeBoolean);
        let platform = getFlag(options, keys3, "platform", mustBeString);
        if (legalComments)
          flags.push(`--legal-comments=${legalComments}`);
        if (sourceRoot !== void 0)
          flags.push(`--source-root=${sourceRoot}`);
        if (sourcesContent !== void 0)
          flags.push(`--sources-content=${sourcesContent}`);
        if (target) {
          if (Array.isArray(target))
            flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
          else
            flags.push(`--target=${validateTarget(target)}`);
        }
        if (format)
          flags.push(`--format=${format}`);
        if (globalName)
          flags.push(`--global-name=${globalName}`);
        if (platform)
          flags.push(`--platform=${platform}`);
        if (minify)
          flags.push("--minify");
        if (minifySyntax)
          flags.push("--minify-syntax");
        if (minifyWhitespace)
          flags.push("--minify-whitespace");
        if (minifyIdentifiers)
          flags.push("--minify-identifiers");
        if (charset)
          flags.push(`--charset=${charset}`);
        if (treeShaking !== void 0)
          flags.push(`--tree-shaking=${treeShaking}`);
        if (ignoreAnnotations)
          flags.push(`--ignore-annotations`);
        if (drop)
          for (let what of drop)
            flags.push(`--drop:${validateStringValue(what, "drop")}`);
        if (mangleProps)
          flags.push(`--mangle-props=${mangleProps.source}`);
        if (reserveProps)
          flags.push(`--reserve-props=${reserveProps.source}`);
        if (mangleQuoted !== void 0)
          flags.push(`--mangle-quoted=${mangleQuoted}`);
        if (jsx)
          flags.push(`--jsx=${jsx}`);
        if (jsxFactory)
          flags.push(`--jsx-factory=${jsxFactory}`);
        if (jsxFragment)
          flags.push(`--jsx-fragment=${jsxFragment}`);
        if (jsxImportSource)
          flags.push(`--jsx-import-source=${jsxImportSource}`);
        if (jsxDev)
          flags.push(`--jsx-dev`);
        if (jsxSideEffects)
          flags.push(`--jsx-side-effects`);
        if (define3) {
          for (let key in define3) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define3[key], "define", key)}`);
          }
        }
        if (logOverride) {
          for (let key in logOverride) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
          }
        }
        if (supported) {
          for (let key in supported) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean")
              throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
          }
        }
        if (pure)
          for (let fn of pure)
            flags.push(`--pure:${validateStringValue(fn, "pure")}`);
        if (keepNames)
          flags.push(`--keep-names`);
      }
      function flagsForBuildOptions(callName, options, isTTY, logLevelDefault, writeDefault) {
        var _a;
        let flags = [];
        let entries4 = [];
        let keys3 = /* @__PURE__ */ Object.create(null);
        let stdinContents = null;
        let stdinResolveDir = null;
        let watchMode = null;
        pushLogFlags(flags, options, keys3, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys3);
        let sourcemap = getFlag(options, keys3, "sourcemap", mustBeStringOrBoolean);
        let bundle = getFlag(options, keys3, "bundle", mustBeBoolean);
        let watch = getFlag(options, keys3, "watch", mustBeBooleanOrObject);
        let splitting = getFlag(options, keys3, "splitting", mustBeBoolean);
        let preserveSymlinks = getFlag(options, keys3, "preserveSymlinks", mustBeBoolean);
        let metafile = getFlag(options, keys3, "metafile", mustBeBoolean);
        let outfile = getFlag(options, keys3, "outfile", mustBeString);
        let outdir = getFlag(options, keys3, "outdir", mustBeString);
        let outbase = getFlag(options, keys3, "outbase", mustBeString);
        let tsconfig = getFlag(options, keys3, "tsconfig", mustBeString);
        let resolveExtensions = getFlag(options, keys3, "resolveExtensions", mustBeArray);
        let nodePathsInput = getFlag(options, keys3, "nodePaths", mustBeArray);
        let mainFields = getFlag(options, keys3, "mainFields", mustBeArray);
        let conditions = getFlag(options, keys3, "conditions", mustBeArray);
        let external = getFlag(options, keys3, "external", mustBeArray);
        let packages = getFlag(options, keys3, "packages", mustBeString);
        let alias = getFlag(options, keys3, "alias", mustBeObject);
        let loader = getFlag(options, keys3, "loader", mustBeObject);
        let outExtension = getFlag(options, keys3, "outExtension", mustBeObject);
        let publicPath = getFlag(options, keys3, "publicPath", mustBeString);
        let entryNames = getFlag(options, keys3, "entryNames", mustBeString);
        let chunkNames = getFlag(options, keys3, "chunkNames", mustBeString);
        let assetNames = getFlag(options, keys3, "assetNames", mustBeString);
        let inject = getFlag(options, keys3, "inject", mustBeArray);
        let banner = getFlag(options, keys3, "banner", mustBeObject);
        let footer = getFlag(options, keys3, "footer", mustBeObject);
        let entryPoints = getFlag(options, keys3, "entryPoints", mustBeArrayOrRecord);
        let absWorkingDir = getFlag(options, keys3, "absWorkingDir", mustBeString);
        let stdin = getFlag(options, keys3, "stdin", mustBeObject);
        let write = (_a = getFlag(options, keys3, "write", mustBeBoolean)) != null ? _a : writeDefault;
        let allowOverwrite = getFlag(options, keys3, "allowOverwrite", mustBeBoolean);
        let incremental = getFlag(options, keys3, "incremental", mustBeBoolean) === true;
        let mangleCache = getFlag(options, keys3, "mangleCache", mustBeObject);
        keys3.plugins = true;
        checkForInvalidFlags(options, keys3, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
        if (bundle)
          flags.push("--bundle");
        if (allowOverwrite)
          flags.push("--allow-overwrite");
        if (watch) {
          flags.push("--watch");
          if (typeof watch === "boolean") {
            watchMode = {};
          } else {
            let watchKeys = /* @__PURE__ */ Object.create(null);
            let onRebuild = getFlag(watch, watchKeys, "onRebuild", mustBeFunction);
            checkForInvalidFlags(watch, watchKeys, `on "watch" in ${callName}() call`);
            watchMode = { onRebuild };
          }
        }
        if (splitting)
          flags.push("--splitting");
        if (preserveSymlinks)
          flags.push("--preserve-symlinks");
        if (metafile)
          flags.push(`--metafile`);
        if (outfile)
          flags.push(`--outfile=${outfile}`);
        if (outdir)
          flags.push(`--outdir=${outdir}`);
        if (outbase)
          flags.push(`--outbase=${outbase}`);
        if (tsconfig)
          flags.push(`--tsconfig=${tsconfig}`);
        if (packages)
          flags.push(`--packages=${packages}`);
        if (resolveExtensions) {
          let values3 = [];
          for (let value of resolveExtensions) {
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid resolve extension: ${value}`);
            values3.push(value);
          }
          flags.push(`--resolve-extensions=${values3.join(",")}`);
        }
        if (publicPath)
          flags.push(`--public-path=${publicPath}`);
        if (entryNames)
          flags.push(`--entry-names=${entryNames}`);
        if (chunkNames)
          flags.push(`--chunk-names=${chunkNames}`);
        if (assetNames)
          flags.push(`--asset-names=${assetNames}`);
        if (mainFields) {
          let values3 = [];
          for (let value of mainFields) {
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid main field: ${value}`);
            values3.push(value);
          }
          flags.push(`--main-fields=${values3.join(",")}`);
        }
        if (conditions) {
          let values3 = [];
          for (let value of conditions) {
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid condition: ${value}`);
            values3.push(value);
          }
          flags.push(`--conditions=${values3.join(",")}`);
        }
        if (external)
          for (let name of external)
            flags.push(`--external:${validateStringValue(name, "external")}`);
        if (alias) {
          for (let old in alias) {
            if (old.indexOf("=") >= 0)
              throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
          }
        }
        if (banner) {
          for (let type in banner) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
          }
        }
        if (footer) {
          for (let type in footer) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
          }
        }
        if (inject)
          for (let path of inject)
            flags.push(`--inject:${validateStringValue(path, "inject")}`);
        if (loader) {
          for (let ext in loader) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
          }
        }
        if (outExtension) {
          for (let ext in outExtension) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
          }
        }
        if (entryPoints) {
          if (Array.isArray(entryPoints)) {
            for (let entryPoint of entryPoints) {
              entries4.push(["", validateStringValue(entryPoint, "entry point")]);
            }
          } else {
            for (let key in entryPoints) {
              entries4.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
            }
          }
        }
        if (stdin) {
          let stdinKeys = /* @__PURE__ */ Object.create(null);
          let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
          let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
          let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
          checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
          if (sourcefile)
            flags.push(`--sourcefile=${sourcefile}`);
          if (loader2)
            flags.push(`--loader=${loader2}`);
          if (resolveDir)
            stdinResolveDir = resolveDir;
          if (typeof contents === "string")
            stdinContents = encodeUTF8(contents);
          else if (contents instanceof Uint8Array)
            stdinContents = contents;
        }
        let nodePaths = [];
        if (nodePathsInput) {
          for (let value of nodePathsInput) {
            value += "";
            nodePaths.push(value);
          }
        }
        return {
          entries: entries4,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          incremental,
          nodePaths,
          watch: watchMode,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      function flagsForTransformOptions(callName, options, isTTY, logLevelDefault) {
        let flags = [];
        let keys3 = /* @__PURE__ */ Object.create(null);
        pushLogFlags(flags, options, keys3, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys3);
        let sourcemap = getFlag(options, keys3, "sourcemap", mustBeStringOrBoolean);
        let tsconfigRaw = getFlag(options, keys3, "tsconfigRaw", mustBeStringOrObject);
        let sourcefile = getFlag(options, keys3, "sourcefile", mustBeString);
        let loader = getFlag(options, keys3, "loader", mustBeString);
        let banner = getFlag(options, keys3, "banner", mustBeString);
        let footer = getFlag(options, keys3, "footer", mustBeString);
        let mangleCache = getFlag(options, keys3, "mangleCache", mustBeObject);
        checkForInvalidFlags(options, keys3, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
        if (tsconfigRaw)
          flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
        if (sourcefile)
          flags.push(`--sourcefile=${sourcefile}`);
        if (loader)
          flags.push(`--loader=${loader}`);
        if (banner)
          flags.push(`--banner=${banner}`);
        if (footer)
          flags.push(`--footer=${footer}`);
        return {
          flags,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      function createChannel(streamIn) {
        const requestCallbacksByKey = {};
        const closeData = { didClose: false, reason: "" };
        let responseCallbacks = {};
        let nextRequestID = 0;
        let nextBuildKey = 0;
        let stdout = new Uint8Array(16 * 1024);
        let stdoutUsed = 0;
        let readFromStdout = (chunk) => {
          let limit = stdoutUsed + chunk.length;
          if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
          }
          stdout.set(chunk, stdoutUsed);
          stdoutUsed += chunk.length;
          let offset = 0;
          while (offset + 4 <= stdoutUsed) {
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
              break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
          }
          if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
          }
        };
        let afterClose = (error) => {
          closeData.didClose = true;
          if (error)
            closeData.reason = ": " + (error.message || error);
          const text = "The service was stopped" + closeData.reason;
          for (let id in responseCallbacks) {
            responseCallbacks[id](text, null);
          }
          responseCallbacks = {};
        };
        let sendRequest = (refs, value, callback) => {
          if (closeData.didClose)
            return callback("The service is no longer running" + closeData.reason, null);
          let id = nextRequestID++;
          responseCallbacks[id] = (error, response) => {
            try {
              callback(error, response);
            } finally {
              if (refs)
                refs.unref();
            }
          };
          if (refs)
            refs.ref();
          streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
        };
        let sendResponse = (id, value) => {
          if (closeData.didClose)
            throw new Error("The service is no longer running" + closeData.reason);
          streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
        };
        let handleRequest = (id, request) => __async(this, null, function* () {
          try {
            if (request.command === "ping") {
              sendResponse(id, {});
              return;
            }
            if (typeof request.key === "number") {
              const requestCallbacks = requestCallbacksByKey[request.key];
              if (requestCallbacks) {
                const callback = requestCallbacks[request.command];
                if (callback) {
                  yield callback(id, request);
                  return;
                }
              }
            }
            throw new Error(`Invalid command: ` + request.command);
          } catch (e) {
            sendResponse(id, { errors: [extractErrorMessageV8(e, streamIn, null, void 0, "")] });
          }
        });
        let isFirstPacket = true;
        let handleIncomingPacket = (bytes) => {
          if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.16.13") {
              throw new Error(`Cannot start service: Host version "${"0.16.13"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
          }
          let packet = decodePacket(bytes);
          if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
          } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error)
              callback(packet.value.error, {});
            else
              callback(null, packet.value);
          }
        };
        let buildOrServe = ({ callName, refs, serveOptions, options, isTTY, defaultWD, callback }) => {
          let refCount = 0;
          const buildKey = nextBuildKey++;
          const requestCallbacks = {};
          const buildRefs = {
            ref() {
              if (++refCount === 1) {
                if (refs)
                  refs.ref();
              }
            },
            unref() {
              if (--refCount === 0) {
                delete requestCallbacksByKey[buildKey];
                if (refs)
                  refs.unref();
              }
            }
          };
          requestCallbacksByKey[buildKey] = requestCallbacks;
          buildRefs.ref();
          buildOrServeImpl(
            callName,
            buildKey,
            sendRequest,
            sendResponse,
            buildRefs,
            streamIn,
            requestCallbacks,
            options,
            serveOptions,
            isTTY,
            defaultWD,
            closeData,
            (err, res) => {
              try {
                callback(err, res);
              } finally {
                buildRefs.unref();
              }
            }
          );
        };
        let transform22 = ({ callName, refs, input, options, isTTY, fs, callback }) => {
          const details = createObjectStash();
          let start = (inputPath) => {
            try {
              if (typeof input !== "string" && !(input instanceof Uint8Array))
                throw new Error('The input to "transform" must be a string or a Uint8Array');
              let {
                flags,
                mangleCache
              } = flagsForTransformOptions(callName, options, isTTY, transformLogLevelDefault);
              let request = {
                command: "transform",
                flags,
                inputFS: inputPath !== null,
                input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
              };
              if (mangleCache)
                request.mangleCache = mangleCache;
              sendRequest(refs, request, (error, response) => {
                if (error)
                  return callback(new Error(error), null);
                let errors = replaceDetailsInMessages(response.errors, details);
                let warnings = replaceDetailsInMessages(response.warnings, details);
                let outstanding = 1;
                let next = () => {
                  if (--outstanding === 0) {
                    let result = { warnings, code: response.code, map: response.map };
                    if ("legalComments" in response)
                      result.legalComments = response == null ? void 0 : response.legalComments;
                    if (response.mangleCache)
                      result.mangleCache = response == null ? void 0 : response.mangleCache;
                    callback(null, result);
                  }
                };
                if (errors.length > 0)
                  return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                if (response.codeFS) {
                  outstanding++;
                  fs.readFile(response.code, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.code = contents;
                      next();
                    }
                  });
                }
                if (response.mapFS) {
                  outstanding++;
                  fs.readFile(response.map, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.map = contents;
                      next();
                    }
                  });
                }
                next();
              });
            } catch (e) {
              let flags = [];
              try {
                pushLogFlags(flags, options, {}, isTTY, transformLogLevelDefault);
              } catch (e2) {
              }
              const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
              sendRequest(refs, { command: "error", flags, error }, () => {
                error.detail = details.load(error.detail);
                callback(failureErrorWithLog("Transform failed", [error], []), null);
              });
            }
          };
          if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = () => fs.writeFile(input, next);
          }
          start(null);
        };
        let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
          let result = sanitizeMessages(messages, "messages", null, "");
          if (!options)
            throw new Error(`Missing second argument in ${callName}() call`);
          let keys3 = {};
          let kind = getFlag(options, keys3, "kind", mustBeString);
          let color = getFlag(options, keys3, "color", mustBeBoolean);
          let terminalWidth = getFlag(options, keys3, "terminalWidth", mustBeInteger);
          checkForInvalidFlags(options, keys3, `in ${callName}() call`);
          if (kind === void 0)
            throw new Error(`Missing "kind" in ${callName}() call`);
          if (kind !== "error" && kind !== "warning")
            throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
          let request = {
            command: "format-msgs",
            messages: result,
            isWarning: kind === "warning"
          };
          if (color !== void 0)
            request.color = color;
          if (terminalWidth !== void 0)
            request.terminalWidth = terminalWidth;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.messages);
          });
        };
        let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
          if (options === void 0)
            options = {};
          let keys3 = {};
          let color = getFlag(options, keys3, "color", mustBeBoolean);
          let verbose = getFlag(options, keys3, "verbose", mustBeBoolean);
          checkForInvalidFlags(options, keys3, `in ${callName}() call`);
          let request = {
            command: "analyze-metafile",
            metafile
          };
          if (color !== void 0)
            request.color = color;
          if (verbose !== void 0)
            request.verbose = verbose;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.result);
          });
        };
        return {
          readFromStdout,
          afterClose,
          service: {
            buildOrServe,
            transform: transform22,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
          }
        };
      }
      function buildOrServeImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, serveOptions, isTTY, defaultWD, closeData, callback) {
        const details = createObjectStash();
        const logPluginError = (e, pluginName, note, done) => {
          const flags = [];
          try {
            pushLogFlags(flags, options, {}, isTTY, buildLogLevelDefault);
          } catch (e2) {
          }
          const message = extractErrorMessageV8(e, streamIn, details, note, pluginName);
          sendRequest(refs, { command: "error", flags, error: message }, () => {
            message.detail = details.load(message.detail);
            done(message);
          });
        };
        const handleError = (e, pluginName) => {
          logPluginError(e, pluginName, void 0, (error) => {
            callback(failureErrorWithLog("Build failed", [error], []), null);
          });
        };
        let plugins;
        if (typeof options === "object") {
          const value = options.plugins;
          if (value !== void 0) {
            if (!Array.isArray(value))
              throw new Error(`"plugins" must be an array`);
            plugins = value;
          }
        }
        if (plugins && plugins.length > 0) {
          if (streamIn.isSync) {
            handleError(new Error("Cannot use plugins in synchronous API calls"), "");
            return;
          }
          handlePlugins(
            buildKey,
            sendRequest,
            sendResponse,
            refs,
            streamIn,
            requestCallbacks,
            options,
            plugins,
            details
          ).then(
            (result) => {
              if (!result.ok) {
                handleError(result.error, result.pluginName);
                return;
              }
              try {
                buildOrServeContinue(result.requestPlugins, result.runOnEndCallbacks);
              } catch (e) {
                handleError(e, "");
              }
            },
            (e) => handleError(e, "")
          );
          return;
        }
        try {
          buildOrServeContinue(null, (result, logPluginError2, done) => done());
        } catch (e) {
          handleError(e, "");
        }
        function buildOrServeContinue(requestPlugins, runOnEndCallbacks) {
          let writeDefault = !streamIn.isWriteUnavailable;
          let {
            entries: entries4,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir,
            incremental,
            nodePaths,
            watch,
            mangleCache
          } = flagsForBuildOptions(callName, options, isTTY, buildLogLevelDefault, writeDefault);
          let request = {
            command: "build",
            key: buildKey,
            entries: entries4,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD,
            incremental,
            nodePaths
          };
          if (requestPlugins)
            request.plugins = requestPlugins;
          if (mangleCache)
            request.mangleCache = mangleCache;
          let serve2 = serveOptions && buildServeData(buildKey, sendRequest, sendResponse, refs, requestCallbacks, serveOptions, request);
          let rebuild;
          let stop;
          let copyResponseToResult = (response, result) => {
            if (response.outputFiles)
              result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile)
              result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache)
              result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0)
              console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
          };
          let buildResponseToResult = (response, callback2) => {
            let result = {
              errors: replaceDetailsInMessages(response.errors, details),
              warnings: replaceDetailsInMessages(response.warnings, details)
            };
            copyResponseToResult(response, result);
            runOnEndCallbacks(result, logPluginError, () => {
              if (result.errors.length > 0) {
                return callback2(failureErrorWithLog("Build failed", result.errors, result.warnings), null);
              }
              if (response.rebuild) {
                if (!rebuild) {
                  let isDisposed = false;
                  rebuild = () => new Promise((resolve, reject) => {
                    if (isDisposed || closeData.didClose)
                      throw new Error("Cannot rebuild");
                    sendRequest(
                      refs,
                      { command: "rebuild", key: buildKey },
                      (error2, response2) => {
                        if (error2) {
                          const message = { id: "", pluginName: "", text: error2, location: null, notes: [], detail: void 0 };
                          return callback2(failureErrorWithLog("Build failed", [message], []), null);
                        }
                        buildResponseToResult(response2, (error3, result3) => {
                          if (error3)
                            reject(error3);
                          else
                            resolve(result3);
                        });
                      }
                    );
                  });
                  refs.ref();
                  rebuild.dispose = () => {
                    if (isDisposed)
                      return;
                    isDisposed = true;
                    sendRequest(refs, { command: "rebuild-dispose", key: buildKey }, () => {
                    });
                    refs.unref();
                  };
                }
                result.rebuild = rebuild;
              }
              if (response.watch) {
                if (!stop) {
                  let isStopped = false;
                  refs.ref();
                  stop = () => {
                    if (isStopped)
                      return;
                    isStopped = true;
                    delete requestCallbacks["watch-rebuild"];
                    sendRequest(refs, { command: "watch-stop", key: buildKey }, () => {
                    });
                    refs.unref();
                  };
                  if (watch) {
                    requestCallbacks["watch-rebuild"] = (id, request2) => {
                      try {
                        let watchResponse = request2.args;
                        let result2 = {
                          errors: replaceDetailsInMessages(watchResponse.errors, details),
                          warnings: replaceDetailsInMessages(watchResponse.warnings, details)
                        };
                        copyResponseToResult(watchResponse, result2);
                        runOnEndCallbacks(result2, logPluginError, () => {
                          if (result2.errors.length > 0) {
                            if (watch.onRebuild)
                              watch.onRebuild(failureErrorWithLog("Build failed", result2.errors, result2.warnings), null);
                            return;
                          }
                          result2.stop = stop;
                          if (watch.onRebuild)
                            watch.onRebuild(null, result2);
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      sendResponse(id, {});
                    };
                  }
                }
                result.stop = stop;
              }
              callback2(null, result);
            });
          };
          if (write && streamIn.isWriteUnavailable)
            throw new Error(`The "write" option is unavailable in this environment`);
          if (incremental && streamIn.isSync)
            throw new Error(`Cannot use "incremental" with a synchronous build`);
          if (watch && streamIn.isSync)
            throw new Error(`Cannot use "watch" with a synchronous build`);
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            if (serve2) {
              let serveResponse = response;
              let isStopped = false;
              refs.ref();
              let result = {
                port: serveResponse.port,
                host: serveResponse.host,
                wait: serve2.wait,
                stop() {
                  if (isStopped)
                    return;
                  isStopped = true;
                  serve2.stop();
                  refs.unref();
                }
              };
              refs.ref();
              serve2.wait.then(refs.unref, refs.unref);
              return callback(null, result);
            }
            return buildResponseToResult(response, callback);
          });
        }
      }
      var buildServeData = (buildKey, sendRequest, sendResponse, refs, requestCallbacks, options, request) => {
        let keys3 = {};
        let port = getFlag(options, keys3, "port", mustBeInteger);
        let host = getFlag(options, keys3, "host", mustBeString);
        let servedir = getFlag(options, keys3, "servedir", mustBeString);
        let onRequest = getFlag(options, keys3, "onRequest", mustBeFunction);
        let wait = new Promise((resolve, reject) => {
          requestCallbacks["serve-wait"] = (id, request2) => {
            if (request2.error !== null)
              reject(new Error(request2.error));
            else
              resolve();
            sendResponse(id, {});
          };
        });
        request.serve = {};
        checkForInvalidFlags(options, keys3, `in serve() call`);
        if (port !== void 0)
          request.serve.port = port;
        if (host !== void 0)
          request.serve.host = host;
        if (servedir !== void 0)
          request.serve.servedir = servedir;
        requestCallbacks["serve-request"] = (id, request2) => {
          if (onRequest)
            onRequest(request2.args);
          sendResponse(id, {});
        };
        return {
          wait,
          stop() {
            sendRequest(refs, { command: "serve-stop", key: buildKey }, () => {
            });
          }
        };
      };
      var handlePlugins = (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => __async(void 0, null, function* () {
        let onStartCallbacks = [];
        let onEndCallbacks = [];
        let onResolveCallbacks = {};
        let onLoadCallbacks = {};
        let nextCallbackID = 0;
        let i = 0;
        let requestPlugins = [];
        let isSetupDone = false;
        plugins = [...plugins];
        for (let item of plugins) {
          let keys3 = {};
          if (typeof item !== "object")
            throw new Error(`Plugin at index ${i} must be an object`);
          const name = getFlag(item, keys3, "name", mustBeString);
          if (typeof name !== "string" || name === "")
            throw new Error(`Plugin at index ${i} is missing a name`);
          try {
            let setup = getFlag(item, keys3, "setup", mustBeFunction);
            if (typeof setup !== "function")
              throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys3, `on plugin ${quote(name)}`);
            let plugin = {
              name,
              onResolve: [],
              onLoad: []
            };
            i++;
            let resolve = (path, options = {}) => {
              if (!isSetupDone)
                throw new Error('Cannot call "resolve" before plugin setup has completed');
              if (typeof path !== "string")
                throw new Error(`The path to resolve must be a string`);
              let keys22 = /* @__PURE__ */ Object.create(null);
              let pluginName = getFlag(options, keys22, "pluginName", mustBeString);
              let importer = getFlag(options, keys22, "importer", mustBeString);
              let namespace = getFlag(options, keys22, "namespace", mustBeString);
              let resolveDir = getFlag(options, keys22, "resolveDir", mustBeString);
              let kind = getFlag(options, keys22, "kind", mustBeString);
              let pluginData = getFlag(options, keys22, "pluginData", canBeAnything);
              checkForInvalidFlags(options, keys22, "in resolve() call");
              return new Promise((resolve2, reject) => {
                const request = {
                  command: "resolve",
                  path,
                  key: buildKey,
                  pluginName: name
                };
                if (pluginName != null)
                  request.pluginName = pluginName;
                if (importer != null)
                  request.importer = importer;
                if (namespace != null)
                  request.namespace = namespace;
                if (resolveDir != null)
                  request.resolveDir = resolveDir;
                if (kind != null)
                  request.kind = kind;
                else
                  throw new Error(`Must specify "kind" when calling "resolve"`);
                if (pluginData != null)
                  request.pluginData = details.store(pluginData);
                sendRequest(refs, request, (error, response) => {
                  if (error !== null)
                    reject(new Error(error));
                  else
                    resolve2({
                      errors: replaceDetailsInMessages(response.errors, details),
                      warnings: replaceDetailsInMessages(response.warnings, details),
                      path: response.path,
                      external: response.external,
                      sideEffects: response.sideEffects,
                      namespace: response.namespace,
                      suffix: response.suffix,
                      pluginData: details.load(response.pluginData)
                    });
                });
              });
            };
            let promise = setup({
              initialOptions,
              resolve,
              onStart(callback) {
                let registeredText = `This error came from the "onStart" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                onStartCallbacks.push({ name, callback, note: registeredNote });
              },
              onEnd(callback) {
                let registeredText = `This error came from the "onEnd" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                onEndCallbacks.push({ name, callback, note: registeredNote });
              },
              onResolve(options, callback) {
                let registeredText = `This error came from the "onResolve" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                let keys22 = {};
                let filter4 = getFlag(options, keys22, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys22, "namespace", mustBeString);
                checkForInvalidFlags(options, keys22, `in onResolve() call for plugin ${quote(name)}`);
                if (filter4 == null)
                  throw new Error(`onResolve() call is missing a filter`);
                let id = nextCallbackID++;
                onResolveCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onResolve.push({ id, filter: filter4.source, namespace: namespace || "" });
              },
              onLoad(options, callback) {
                let registeredText = `This error came from the "onLoad" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                let keys22 = {};
                let filter4 = getFlag(options, keys22, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys22, "namespace", mustBeString);
                checkForInvalidFlags(options, keys22, `in onLoad() call for plugin ${quote(name)}`);
                if (filter4 == null)
                  throw new Error(`onLoad() call is missing a filter`);
                let id = nextCallbackID++;
                onLoadCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onLoad.push({ id, filter: filter4.source, namespace: namespace || "" });
              },
              esbuild: streamIn.esbuild
            });
            if (promise)
              yield promise;
            requestPlugins.push(plugin);
          } catch (e) {
            return { ok: false, error: e, pluginName: name };
          }
        }
        requestCallbacks["on-start"] = (id, request) => __async(void 0, null, function* () {
          let response = { errors: [], warnings: [] };
          yield Promise.all(onStartCallbacks.map((_0) => __async(void 0, [_0], function* ({ name, callback, note }) {
            try {
              let result = yield callback();
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                let keys3 = {};
                let errors = getFlag(result, keys3, "errors", mustBeArray);
                let warnings = getFlag(result, keys3, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys3, `from onStart() callback in plugin ${quote(name)}`);
                if (errors != null)
                  response.errors.push(...sanitizeMessages(errors, "errors", details, name));
                if (warnings != null)
                  response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name));
              }
            } catch (e) {
              response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
          })));
          sendResponse(id, response);
        });
        requestCallbacks["on-resolve"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onResolveCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                importer: request.importer,
                namespace: request.namespace,
                resolveDir: request.resolveDir,
                kind: request.kind,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                let keys3 = {};
                let pluginName = getFlag(result, keys3, "pluginName", mustBeString);
                let path = getFlag(result, keys3, "path", mustBeString);
                let namespace = getFlag(result, keys3, "namespace", mustBeString);
                let suffix = getFlag(result, keys3, "suffix", mustBeString);
                let external = getFlag(result, keys3, "external", mustBeBoolean);
                let sideEffects = getFlag(result, keys3, "sideEffects", mustBeBoolean);
                let pluginData = getFlag(result, keys3, "pluginData", canBeAnything);
                let errors = getFlag(result, keys3, "errors", mustBeArray);
                let warnings = getFlag(result, keys3, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys3, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys3, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys3, `from onResolve() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (path != null)
                  response.path = path;
                if (namespace != null)
                  response.namespace = namespace;
                if (suffix != null)
                  response.suffix = suffix;
                if (external != null)
                  response.external = external;
                if (sideEffects != null)
                  response.sideEffects = sideEffects;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        requestCallbacks["on-load"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onLoadCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                namespace: request.namespace,
                suffix: request.suffix,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                let keys3 = {};
                let pluginName = getFlag(result, keys3, "pluginName", mustBeString);
                let contents = getFlag(result, keys3, "contents", mustBeStringOrUint8Array);
                let resolveDir = getFlag(result, keys3, "resolveDir", mustBeString);
                let pluginData = getFlag(result, keys3, "pluginData", canBeAnything);
                let loader = getFlag(result, keys3, "loader", mustBeString);
                let errors = getFlag(result, keys3, "errors", mustBeArray);
                let warnings = getFlag(result, keys3, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys3, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys3, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys3, `from onLoad() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (contents instanceof Uint8Array)
                  response.contents = contents;
                else if (contents != null)
                  response.contents = encodeUTF8(contents);
                if (resolveDir != null)
                  response.resolveDir = resolveDir;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (loader != null)
                  response.loader = loader;
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        let runOnEndCallbacks = (result, logPluginError, done) => done();
        if (onEndCallbacks.length > 0) {
          runOnEndCallbacks = (result, logPluginError, done) => {
            (() => __async(void 0, null, function* () {
              for (const { name, callback, note } of onEndCallbacks) {
                try {
                  yield callback(result);
                } catch (e) {
                  result.errors.push(yield new Promise((resolve) => logPluginError(e, name, note && note(), resolve)));
                }
              }
            }))().then(done);
          };
        }
        isSetupDone = true;
        return {
          ok: true,
          requestPlugins,
          runOnEndCallbacks
        };
      });
      function createObjectStash() {
        const map3 = /* @__PURE__ */ new Map();
        let nextID = 0;
        return {
          load(id) {
            return map3.get(id);
          },
          store(value) {
            if (value === void 0)
              return -1;
            const id = nextID++;
            map3.set(id, value);
            return id;
          }
        };
      }
      function extractCallerV8(e, streamIn, ident) {
        let note;
        let tried = false;
        return () => {
          if (tried)
            return note;
          tried = true;
          try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location2 = parseStackLinesV8(streamIn, lines, ident);
            if (location2) {
              note = { text: e.message, location: location2 };
              return note;
            }
          } catch (e2) {
          }
        };
      }
      function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
        let text = "Internal error";
        let location2 = null;
        try {
          text = (e && e.message || e) + "";
        } catch (e2) {
        }
        try {
          location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
        } catch (e2) {
        }
        return { id: "", pluginName, text, location: location2, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
      }
      function parseStackLinesV8(streamIn, lines, ident) {
        let at = "    at ";
        if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            if (!line.startsWith(at))
              continue;
            line = line.slice(at.length);
            while (true) {
              let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^(\S+):(\d+):(\d+)$/.exec(line);
              if (match) {
                let contents;
                try {
                  contents = streamIn.readFileSync(match[1], "utf8");
                } catch (e) {
                  break;
                }
                let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                let column = +match[3] - 1;
                let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                return {
                  file: match[1],
                  namespace: "file",
                  line: +match[2],
                  column: encodeUTF8(lineText.slice(0, column)).length,
                  length: encodeUTF8(lineText.slice(column, column + length)).length,
                  lineText: lineText + "\n" + lines.slice(1).join("\n"),
                  suggestion: ""
                };
              }
              break;
            }
          }
        }
        return null;
      }
      function failureErrorWithLog(text, errors, warnings) {
        let limit = 5;
        let summary = errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
          if (i === limit)
            return "\n...";
          if (!e.location)
            return `
error: ${e.text}`;
          let { file, line, column } = e.location;
          let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
          return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
        }).join("");
        let error = new Error(`${text}${summary}`);
        error.errors = errors;
        error.warnings = warnings;
        return error;
      }
      function replaceDetailsInMessages(messages, stash) {
        for (const message of messages) {
          message.detail = stash.load(message.detail);
        }
        return messages;
      }
      function sanitizeLocation(location2, where) {
        if (location2 == null)
          return null;
        let keys3 = {};
        let file = getFlag(location2, keys3, "file", mustBeString);
        let namespace = getFlag(location2, keys3, "namespace", mustBeString);
        let line = getFlag(location2, keys3, "line", mustBeInteger);
        let column = getFlag(location2, keys3, "column", mustBeInteger);
        let length = getFlag(location2, keys3, "length", mustBeInteger);
        let lineText = getFlag(location2, keys3, "lineText", mustBeString);
        let suggestion = getFlag(location2, keys3, "suggestion", mustBeString);
        checkForInvalidFlags(location2, keys3, where);
        return {
          file: file || "",
          namespace: namespace || "",
          line: line || 0,
          column: column || 0,
          length: length || 0,
          lineText: lineText || "",
          suggestion: suggestion || ""
        };
      }
      function sanitizeMessages(messages, property, stash, fallbackPluginName) {
        let messagesClone = [];
        let index = 0;
        for (const message of messages) {
          let keys3 = {};
          let id = getFlag(message, keys3, "id", mustBeString);
          let pluginName = getFlag(message, keys3, "pluginName", mustBeString);
          let text = getFlag(message, keys3, "text", mustBeString);
          let location2 = getFlag(message, keys3, "location", mustBeObjectOrNull);
          let notes = getFlag(message, keys3, "notes", mustBeArray);
          let detail = getFlag(message, keys3, "detail", canBeAnything);
          let where = `in element ${index} of "${property}"`;
          checkForInvalidFlags(message, keys3, where);
          let notesClone = [];
          if (notes) {
            for (const note of notes) {
              let noteKeys = {};
              let noteText = getFlag(note, noteKeys, "text", mustBeString);
              let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
              checkForInvalidFlags(note, noteKeys, where);
              notesClone.push({
                text: noteText || "",
                location: sanitizeLocation(noteLocation, where)
              });
            }
          }
          messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location2, where),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
          });
          index++;
        }
        return messagesClone;
      }
      function sanitizeStringArray(values3, property) {
        const result = [];
        for (const value of values3) {
          if (typeof value !== "string")
            throw new Error(`${quote(property)} must be an array of strings`);
          result.push(value);
        }
        return result;
      }
      function convertOutputFiles({ path, contents }) {
        let text = null;
        return {
          path,
          contents,
          get text() {
            const binary = this.contents;
            if (text === null || binary !== contents) {
              contents = binary;
              text = decodeUTF8(binary);
            }
            return text;
          }
        };
      }
      var version = "0.16.13";
      var build = (options) => ensureServiceIsRunning().build(options);
      var serve = () => {
        throw new Error(`The "serve" API only works in node`);
      };
      var transform2 = (input, options) => ensureServiceIsRunning().transform(input, options);
      var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
      var analyzeMetafile = (metafile, options) => ensureServiceIsRunning().analyzeMetafile(metafile, options);
      var buildSync = () => {
        throw new Error(`The "buildSync" API only works in node`);
      };
      var transformSync = () => {
        throw new Error(`The "transformSync" API only works in node`);
      };
      var formatMessagesSync = () => {
        throw new Error(`The "formatMessagesSync" API only works in node`);
      };
      var analyzeMetafileSync = () => {
        throw new Error(`The "analyzeMetafileSync" API only works in node`);
      };
      var initializePromise;
      var longLivedService;
      var ensureServiceIsRunning = () => {
        if (longLivedService)
          return longLivedService;
        if (initializePromise)
          throw new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');
        throw new Error('You need to call "initialize" before calling this');
      };
      var initialize2 = (options) => {
        options = validateInitializeOptions(options || {});
        let wasmURL = options.wasmURL;
        let wasmModule = options.wasmModule;
        let useWorker = options.worker !== false;
        if (!wasmURL && !wasmModule)
          throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
        if (initializePromise)
          throw new Error('Cannot call "initialize" more than once');
        initializePromise = startRunningService(wasmURL || "", wasmModule, useWorker);
        initializePromise.catch(() => {
          initializePromise = void 0;
        });
        return initializePromise;
      };
      var startRunningService = (wasmURL, wasmModule, useWorker) => __async(void 0, null, function* () {
        let worker;
        if (useWorker) {
          let blob = new Blob([`onmessage=${'((postMessage) => {\n      // Copyright 2018 The Go Authors. All rights reserved.\n      // Use of this source code is governed by a BSD-style\n      // license that can be found in the LICENSE file.\n      var __async = (__this, __arguments, generator) => {\n        return new Promise((resolve, reject) => {\n          var fulfilled = (value) => {\n            try {\n              step(generator.next(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var rejected = (value) => {\n            try {\n              step(generator.throw(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n          step((generator = generator.apply(__this, __arguments)).next());\n        });\n      };\n      let onmessage;\n      let globalThis = {};\n      for (let o = self; o; o = Object.getPrototypeOf(o))\n        for (let k of Object.getOwnPropertyNames(o))\n          if (!(k in globalThis))\n            Object.defineProperty(globalThis, k, { get: () => self[k] });\n      "use strict";\n      (() => {\n        const enosys = () => {\n          const err = new Error("not implemented");\n          err.code = "ENOSYS";\n          return err;\n        };\n        if (!globalThis.fs) {\n          let outputBuf = "";\n          globalThis.fs = {\n            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },\n            writeSync(fd, buf) {\n              outputBuf += decoder.decode(buf);\n              const nl = outputBuf.lastIndexOf("\\n");\n              if (nl != -1) {\n                console.log(outputBuf.substr(0, nl));\n                outputBuf = outputBuf.substr(nl + 1);\n              }\n              return buf.length;\n            },\n            write(fd, buf, offset, length, position, callback) {\n              if (offset !== 0 || length !== buf.length || position !== null) {\n                callback(enosys());\n                return;\n              }\n              const n = this.writeSync(fd, buf);\n              callback(null, n);\n            },\n            chmod(path, mode, callback) {\n              callback(enosys());\n            },\n            chown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            close(fd, callback) {\n              callback(enosys());\n            },\n            fchmod(fd, mode, callback) {\n              callback(enosys());\n            },\n            fchown(fd, uid, gid, callback) {\n              callback(enosys());\n            },\n            fstat(fd, callback) {\n              callback(enosys());\n            },\n            fsync(fd, callback) {\n              callback(null);\n            },\n            ftruncate(fd, length, callback) {\n              callback(enosys());\n            },\n            lchown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            link(path, link, callback) {\n              callback(enosys());\n            },\n            lstat(path, callback) {\n              callback(enosys());\n            },\n            mkdir(path, perm, callback) {\n              callback(enosys());\n            },\n            open(path, flags, mode, callback) {\n              callback(enosys());\n            },\n            read(fd, buffer, offset, length, position, callback) {\n              callback(enosys());\n            },\n            readdir(path, callback) {\n              callback(enosys());\n            },\n            readlink(path, callback) {\n              callback(enosys());\n            },\n            rename(from, to, callback) {\n              callback(enosys());\n            },\n            rmdir(path, callback) {\n              callback(enosys());\n            },\n            stat(path, callback) {\n              callback(enosys());\n            },\n            symlink(path, link, callback) {\n              callback(enosys());\n            },\n            truncate(path, length, callback) {\n              callback(enosys());\n            },\n            unlink(path, callback) {\n              callback(enosys());\n            },\n            utimes(path, atime, mtime, callback) {\n              callback(enosys());\n            }\n          };\n        }\n        if (!globalThis.process) {\n          globalThis.process = {\n            getuid() {\n              return -1;\n            },\n            getgid() {\n              return -1;\n            },\n            geteuid() {\n              return -1;\n            },\n            getegid() {\n              return -1;\n            },\n            getgroups() {\n              throw enosys();\n            },\n            pid: -1,\n            ppid: -1,\n            umask() {\n              throw enosys();\n            },\n            cwd() {\n              throw enosys();\n            },\n            chdir() {\n              throw enosys();\n            }\n          };\n        }\n        if (!globalThis.crypto) {\n          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");\n        }\n        if (!globalThis.performance) {\n          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");\n        }\n        if (!globalThis.TextEncoder) {\n          throw new Error("globalThis.TextEncoder is not available, polyfill required");\n        }\n        if (!globalThis.TextDecoder) {\n          throw new Error("globalThis.TextDecoder is not available, polyfill required");\n        }\n        const encoder = new TextEncoder("utf-8");\n        const decoder = new TextDecoder("utf-8");\n        globalThis.Go = class {\n          constructor() {\n            this.argv = ["js"];\n            this.env = {};\n            this.exit = (code) => {\n              if (code !== 0) {\n                console.warn("exit code:", code);\n              }\n            };\n            this._exitPromise = new Promise((resolve) => {\n              this._resolveExitPromise = resolve;\n            });\n            this._pendingEvent = null;\n            this._scheduledTimeouts = /* @__PURE__ */ new Map();\n            this._nextCallbackTimeoutID = 1;\n            const setInt64 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);\n            };\n            const getInt64 = (addr) => {\n              const low = this.mem.getUint32(addr + 0, true);\n              const high = this.mem.getInt32(addr + 4, true);\n              return low + high * 4294967296;\n            };\n            const loadValue = (addr) => {\n              const f = this.mem.getFloat64(addr, true);\n              if (f === 0) {\n                return void 0;\n              }\n              if (!isNaN(f)) {\n                return f;\n              }\n              const id = this.mem.getUint32(addr, true);\n              return this._values[id];\n            };\n            const storeValue = (addr, v) => {\n              const nanHead = 2146959360;\n              if (typeof v === "number" && v !== 0) {\n                if (isNaN(v)) {\n                  this.mem.setUint32(addr + 4, nanHead, true);\n                  this.mem.setUint32(addr, 0, true);\n                  return;\n                }\n                this.mem.setFloat64(addr, v, true);\n                return;\n              }\n              if (v === void 0) {\n                this.mem.setFloat64(addr, 0, true);\n                return;\n              }\n              let id = this._ids.get(v);\n              if (id === void 0) {\n                id = this._idPool.pop();\n                if (id === void 0) {\n                  id = this._values.length;\n                }\n                this._values[id] = v;\n                this._goRefCounts[id] = 0;\n                this._ids.set(v, id);\n              }\n              this._goRefCounts[id]++;\n              let typeFlag = 0;\n              switch (typeof v) {\n                case "object":\n                  if (v !== null) {\n                    typeFlag = 1;\n                  }\n                  break;\n                case "string":\n                  typeFlag = 2;\n                  break;\n                case "symbol":\n                  typeFlag = 3;\n                  break;\n                case "function":\n                  typeFlag = 4;\n                  break;\n              }\n              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);\n              this.mem.setUint32(addr, id, true);\n            };\n            const loadSlice = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return new Uint8Array(this._inst.exports.mem.buffer, array, len);\n            };\n            const loadSliceOfValues = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              const a = new Array(len);\n              for (let i = 0; i < len; i++) {\n                a[i] = loadValue(array + i * 8);\n              }\n              return a;\n            };\n            const loadString = (addr) => {\n              const saddr = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));\n            };\n            const timeOrigin = Date.now() - performance.now();\n            this.importObject = {\n              go: {\n                "runtime.wasmExit": (sp) => {\n                  sp >>>= 0;\n                  const code = this.mem.getInt32(sp + 8, true);\n                  this.exited = true;\n                  delete this._inst;\n                  delete this._values;\n                  delete this._goRefCounts;\n                  delete this._ids;\n                  delete this._idPool;\n                  this.exit(code);\n                },\n                "runtime.wasmWrite": (sp) => {\n                  sp >>>= 0;\n                  const fd = getInt64(sp + 8);\n                  const p = getInt64(sp + 16);\n                  const n = this.mem.getInt32(sp + 24, true);\n                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));\n                },\n                "runtime.resetMemoryDataView": (sp) => {\n                  sp >>>= 0;\n                  this.mem = new DataView(this._inst.exports.mem.buffer);\n                },\n                "runtime.nanotime1": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);\n                },\n                "runtime.walltime": (sp) => {\n                  sp >>>= 0;\n                  const msec = new Date().getTime();\n                  setInt64(sp + 8, msec / 1e3);\n                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);\n                },\n                "runtime.scheduleTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this._nextCallbackTimeoutID;\n                  this._nextCallbackTimeoutID++;\n                  this._scheduledTimeouts.set(id, setTimeout(\n                    () => {\n                      this._resume();\n                      while (this._scheduledTimeouts.has(id)) {\n                        console.warn("scheduleTimeoutEvent: missed timeout event");\n                        this._resume();\n                      }\n                    },\n                    getInt64(sp + 8) + 1\n                  ));\n                  this.mem.setInt32(sp + 16, id, true);\n                },\n                "runtime.clearTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getInt32(sp + 8, true);\n                  clearTimeout(this._scheduledTimeouts.get(id));\n                  this._scheduledTimeouts.delete(id);\n                },\n                "runtime.getRandomData": (sp) => {\n                  sp >>>= 0;\n                  crypto.getRandomValues(loadSlice(sp + 8));\n                },\n                "syscall/js.finalizeRef": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getUint32(sp + 8, true);\n                  this._goRefCounts[id]--;\n                  if (this._goRefCounts[id] === 0) {\n                    const v = this._values[id];\n                    this._values[id] = null;\n                    this._ids.delete(v);\n                    this._idPool.push(id);\n                  }\n                },\n                "syscall/js.stringVal": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, loadString(sp + 8));\n                },\n                "syscall/js.valueGet": (sp) => {\n                  sp >>>= 0;\n                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));\n                  sp = this._inst.exports.getsp() >>> 0;\n                  storeValue(sp + 32, result);\n                },\n                "syscall/js.valueSet": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));\n                },\n                "syscall/js.valueDelete": (sp) => {\n                  sp >>>= 0;\n                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));\n                },\n                "syscall/js.valueIndex": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));\n                },\n                "syscall/js.valueSetIndex": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));\n                },\n                "syscall/js.valueCall": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const m = Reflect.get(v, loadString(sp + 16));\n                    const args = loadSliceOfValues(sp + 32);\n                    const result = Reflect.apply(m, v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, result);\n                    this.mem.setUint8(sp + 64, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, err);\n                    this.mem.setUint8(sp + 64, 0);\n                  }\n                },\n                "syscall/js.valueInvoke": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.apply(v, void 0, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueNew": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.construct(v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueLength": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));\n                },\n                "syscall/js.valuePrepareString": (sp) => {\n                  sp >>>= 0;\n                  const str = encoder.encode(String(loadValue(sp + 8)));\n                  storeValue(sp + 16, str);\n                  setInt64(sp + 24, str.length);\n                },\n                "syscall/js.valueLoadString": (sp) => {\n                  sp >>>= 0;\n                  const str = loadValue(sp + 8);\n                  loadSlice(sp + 16).set(str);\n                },\n                "syscall/js.valueInstanceOf": (sp) => {\n                  sp >>>= 0;\n                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);\n                },\n                "syscall/js.copyBytesToGo": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadSlice(sp + 8);\n                  const src = loadValue(sp + 32);\n                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "syscall/js.copyBytesToJS": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadValue(sp + 8);\n                  const src = loadSlice(sp + 16);\n                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "debug": (value) => {\n                  console.log(value);\n                }\n              }\n            };\n          }\n          run(instance) {\n            return __async(this, null, function* () {\n              if (!(instance instanceof WebAssembly.Instance)) {\n                throw new Error("Go.run: WebAssembly.Instance expected");\n              }\n              this._inst = instance;\n              this.mem = new DataView(this._inst.exports.mem.buffer);\n              this._values = [\n                NaN,\n                0,\n                null,\n                true,\n                false,\n                globalThis,\n                this\n              ];\n              this._goRefCounts = new Array(this._values.length).fill(Infinity);\n              this._ids = /* @__PURE__ */ new Map([\n                [0, 1],\n                [null, 2],\n                [true, 3],\n                [false, 4],\n                [globalThis, 5],\n                [this, 6]\n              ]);\n              this._idPool = [];\n              this.exited = false;\n              let offset = 4096;\n              const strPtr = (str) => {\n                const ptr = offset;\n                const bytes = encoder.encode(str + "\\0");\n                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);\n                offset += bytes.length;\n                if (offset % 8 !== 0) {\n                  offset += 8 - offset % 8;\n                }\n                return ptr;\n              };\n              const argc = this.argv.length;\n              const argvPtrs = [];\n              this.argv.forEach((arg) => {\n                argvPtrs.push(strPtr(arg));\n              });\n              argvPtrs.push(0);\n              const keys = Object.keys(this.env).sort();\n              keys.forEach((key) => {\n                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));\n              });\n              argvPtrs.push(0);\n              const argv = offset;\n              argvPtrs.forEach((ptr) => {\n                this.mem.setUint32(offset, ptr, true);\n                this.mem.setUint32(offset + 4, 0, true);\n                offset += 8;\n              });\n              const wasmMinDataAddr = 4096 + 8192;\n              if (offset >= wasmMinDataAddr) {\n                throw new Error("total length of command line and environment variables exceeds limit");\n              }\n              this._inst.exports.run(argc, argv);\n              if (this.exited) {\n                this._resolveExitPromise();\n              }\n              yield this._exitPromise;\n            });\n          }\n          _resume() {\n            if (this.exited) {\n              throw new Error("Go program has already exited");\n            }\n            this._inst.exports.resume();\n            if (this.exited) {\n              this._resolveExitPromise();\n            }\n          }\n          _makeFuncWrapper(id) {\n            const go = this;\n            return function() {\n              const event = { id, this: this, args: arguments };\n              go._pendingEvent = event;\n              go._resume();\n              return event.result;\n            };\n          }\n        };\n      })();\n      onmessage = ({ data: wasm }) => {\n        let decoder = new TextDecoder();\n        let fs = globalThis.fs;\n        let stderr = "";\n        fs.writeSync = (fd, buffer) => {\n          if (fd === 1) {\n            postMessage(buffer);\n          } else if (fd === 2) {\n            stderr += decoder.decode(buffer);\n            let parts = stderr.split("\\n");\n            if (parts.length > 1)\n              console.log(parts.slice(0, -1).join("\\n"));\n            stderr = parts[parts.length - 1];\n          } else {\n            throw new Error("Bad write");\n          }\n          return buffer.length;\n        };\n        let stdin = [];\n        let resumeStdin;\n        let stdinPos = 0;\n        onmessage = ({ data }) => {\n          if (data.length > 0) {\n            stdin.push(data);\n            if (resumeStdin)\n              resumeStdin();\n          }\n        };\n        fs.read = (fd, buffer, offset, length, position, callback) => {\n          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {\n            throw new Error("Bad read");\n          }\n          if (stdin.length === 0) {\n            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);\n            return;\n          }\n          let first = stdin[0];\n          let count = Math.max(0, Math.min(length, first.length - stdinPos));\n          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);\n          stdinPos += count;\n          if (stdinPos === first.length) {\n            stdin.shift();\n            stdinPos = 0;\n          }\n          callback(null, count);\n        };\n        let go = new globalThis.Go();\n        go.argv = ["", `--service=${"0.16.13"}`];\n        tryToInstantiateModule(wasm, go).then(\n          (instance) => {\n            postMessage(null);\n            go.run(instance);\n          },\n          (error) => {\n            postMessage(error);\n          }\n        );\n      };\n      function tryToInstantiateModule(wasm, go) {\n        return __async(this, null, function* () {\n          if (wasm instanceof WebAssembly.Module) {\n            return WebAssembly.instantiate(wasm, go.importObject);\n          }\n          const res = yield fetch(wasm);\n          if (!res.ok)\n            throw new Error(`Failed to download ${JSON.stringify(wasm)}`);\n          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {\n            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);\n            return result2.instance;\n          }\n          const bytes = yield res.arrayBuffer();\n          const result = yield WebAssembly.instantiate(bytes, go.importObject);\n          return result.instance;\n        });\n      }\n      return (m) => onmessage(m);\n    })'}(postMessage)`], { type: "text/javascript" });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          let onmessage = ((postMessage) => {
            var __async2 = (__this, __arguments, generator) => {
              return new Promise((resolve, reject) => {
                var fulfilled = (value) => {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                };
                var rejected = (value) => {
                  try {
                    step(generator.throw(value));
                  } catch (e) {
                    reject(e);
                  }
                };
                var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
                step((generator = generator.apply(__this, __arguments)).next());
              });
            };
            let onmessage2;
            let globalThis2 = {};
            for (let o = self; o; o = Object.getPrototypeOf(o))
              for (let k of Object.getOwnPropertyNames(o))
                if (!(k in globalThis2))
                  Object.defineProperty(globalThis2, k, { get: () => self[k] });
            "use strict";
            (() => {
              const enosys = () => {
                const err = new Error("not implemented");
                err.code = "ENOSYS";
                return err;
              };
              if (!globalThis2.fs) {
                let outputBuf = "";
                globalThis2.fs = {
                  constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                  writeSync(fd, buf) {
                    outputBuf += decoder.decode(buf);
                    const nl = outputBuf.lastIndexOf("\n");
                    if (nl != -1) {
                      console.log(outputBuf.substr(0, nl));
                      outputBuf = outputBuf.substr(nl + 1);
                    }
                    return buf.length;
                  },
                  write(fd, buf, offset, length, position, callback) {
                    if (offset !== 0 || length !== buf.length || position !== null) {
                      callback(enosys());
                      return;
                    }
                    const n = this.writeSync(fd, buf);
                    callback(null, n);
                  },
                  chmod(path, mode, callback) {
                    callback(enosys());
                  },
                  chown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  close(fd, callback) {
                    callback(enosys());
                  },
                  fchmod(fd, mode, callback) {
                    callback(enosys());
                  },
                  fchown(fd, uid, gid, callback) {
                    callback(enosys());
                  },
                  fstat(fd, callback) {
                    callback(enosys());
                  },
                  fsync(fd, callback) {
                    callback(null);
                  },
                  ftruncate(fd, length, callback) {
                    callback(enosys());
                  },
                  lchown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  link(path, link, callback) {
                    callback(enosys());
                  },
                  lstat(path, callback) {
                    callback(enosys());
                  },
                  mkdir(path, perm, callback) {
                    callback(enosys());
                  },
                  open(path, flags, mode, callback) {
                    callback(enosys());
                  },
                  read(fd, buffer, offset, length, position, callback) {
                    callback(enosys());
                  },
                  readdir(path, callback) {
                    callback(enosys());
                  },
                  readlink(path, callback) {
                    callback(enosys());
                  },
                  rename(from, to, callback) {
                    callback(enosys());
                  },
                  rmdir(path, callback) {
                    callback(enosys());
                  },
                  stat(path, callback) {
                    callback(enosys());
                  },
                  symlink(path, link, callback) {
                    callback(enosys());
                  },
                  truncate(path, length, callback) {
                    callback(enosys());
                  },
                  unlink(path, callback) {
                    callback(enosys());
                  },
                  utimes(path, atime, mtime, callback) {
                    callback(enosys());
                  }
                };
              }
              if (!globalThis2.process) {
                globalThis2.process = {
                  getuid() {
                    return -1;
                  },
                  getgid() {
                    return -1;
                  },
                  geteuid() {
                    return -1;
                  },
                  getegid() {
                    return -1;
                  },
                  getgroups() {
                    throw enosys();
                  },
                  pid: -1,
                  ppid: -1,
                  umask() {
                    throw enosys();
                  },
                  cwd() {
                    throw enosys();
                  },
                  chdir() {
                    throw enosys();
                  }
                };
              }
              if (!globalThis2.crypto) {
                throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
              }
              if (!globalThis2.performance) {
                throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
              }
              if (!globalThis2.TextEncoder) {
                throw new Error("globalThis.TextEncoder is not available, polyfill required");
              }
              if (!globalThis2.TextDecoder) {
                throw new Error("globalThis.TextDecoder is not available, polyfill required");
              }
              const encoder = new TextEncoder("utf-8");
              const decoder = new TextDecoder("utf-8");
              globalThis2.Go = class {
                constructor() {
                  this.argv = ["js"];
                  this.env = {};
                  this.exit = (code) => {
                    if (code !== 0) {
                      console.warn("exit code:", code);
                    }
                  };
                  this._exitPromise = new Promise((resolve) => {
                    this._resolveExitPromise = resolve;
                  });
                  this._pendingEvent = null;
                  this._scheduledTimeouts = /* @__PURE__ */ new Map();
                  this._nextCallbackTimeoutID = 1;
                  const setInt64 = (addr, v) => {
                    this.mem.setUint32(addr + 0, v, true);
                    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
                  };
                  const getInt64 = (addr) => {
                    const low = this.mem.getUint32(addr + 0, true);
                    const high = this.mem.getInt32(addr + 4, true);
                    return low + high * 4294967296;
                  };
                  const loadValue = (addr) => {
                    const f = this.mem.getFloat64(addr, true);
                    if (f === 0) {
                      return void 0;
                    }
                    if (!isNaN(f)) {
                      return f;
                    }
                    const id = this.mem.getUint32(addr, true);
                    return this._values[id];
                  };
                  const storeValue = (addr, v) => {
                    const nanHead = 2146959360;
                    if (typeof v === "number" && v !== 0) {
                      if (isNaN(v)) {
                        this.mem.setUint32(addr + 4, nanHead, true);
                        this.mem.setUint32(addr, 0, true);
                        return;
                      }
                      this.mem.setFloat64(addr, v, true);
                      return;
                    }
                    if (v === void 0) {
                      this.mem.setFloat64(addr, 0, true);
                      return;
                    }
                    let id = this._ids.get(v);
                    if (id === void 0) {
                      id = this._idPool.pop();
                      if (id === void 0) {
                        id = this._values.length;
                      }
                      this._values[id] = v;
                      this._goRefCounts[id] = 0;
                      this._ids.set(v, id);
                    }
                    this._goRefCounts[id]++;
                    let typeFlag = 0;
                    switch (typeof v) {
                      case "object":
                        if (v !== null) {
                          typeFlag = 1;
                        }
                        break;
                      case "string":
                        typeFlag = 2;
                        break;
                      case "symbol":
                        typeFlag = 3;
                        break;
                      case "function":
                        typeFlag = 4;
                        break;
                    }
                    this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
                    this.mem.setUint32(addr, id, true);
                  };
                  const loadSlice = (addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return new Uint8Array(this._inst.exports.mem.buffer, array, len);
                  };
                  const loadSliceOfValues = (addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    const a = new Array(len);
                    for (let i = 0; i < len; i++) {
                      a[i] = loadValue(array + i * 8);
                    }
                    return a;
                  };
                  const loadString = (addr) => {
                    const saddr = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
                  };
                  const timeOrigin = Date.now() - performance.now();
                  this.importObject = {
                    go: {
                      "runtime.wasmExit": (sp) => {
                        sp >>>= 0;
                        const code = this.mem.getInt32(sp + 8, true);
                        this.exited = true;
                        delete this._inst;
                        delete this._values;
                        delete this._goRefCounts;
                        delete this._ids;
                        delete this._idPool;
                        this.exit(code);
                      },
                      "runtime.wasmWrite": (sp) => {
                        sp >>>= 0;
                        const fd = getInt64(sp + 8);
                        const p = getInt64(sp + 16);
                        const n = this.mem.getInt32(sp + 24, true);
                        globalThis2.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                      },
                      "runtime.resetMemoryDataView": (sp) => {
                        sp >>>= 0;
                        this.mem = new DataView(this._inst.exports.mem.buffer);
                      },
                      "runtime.nanotime1": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                      },
                      "runtime.walltime": (sp) => {
                        sp >>>= 0;
                        const msec = new Date().getTime();
                        setInt64(sp + 8, msec / 1e3);
                        this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                      },
                      "runtime.scheduleTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this._nextCallbackTimeoutID;
                        this._nextCallbackTimeoutID++;
                        this._scheduledTimeouts.set(id, setTimeout(
                          () => {
                            this._resume();
                            while (this._scheduledTimeouts.has(id)) {
                              console.warn("scheduleTimeoutEvent: missed timeout event");
                              this._resume();
                            }
                          },
                          getInt64(sp + 8) + 1
                        ));
                        this.mem.setInt32(sp + 16, id, true);
                      },
                      "runtime.clearTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getInt32(sp + 8, true);
                        clearTimeout(this._scheduledTimeouts.get(id));
                        this._scheduledTimeouts.delete(id);
                      },
                      "runtime.getRandomData": (sp) => {
                        sp >>>= 0;
                        crypto.getRandomValues(loadSlice(sp + 8));
                      },
                      "syscall/js.finalizeRef": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getUint32(sp + 8, true);
                        this._goRefCounts[id]--;
                        if (this._goRefCounts[id] === 0) {
                          const v = this._values[id];
                          this._values[id] = null;
                          this._ids.delete(v);
                          this._idPool.push(id);
                        }
                      },
                      "syscall/js.stringVal": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, loadString(sp + 8));
                      },
                      "syscall/js.valueGet": (sp) => {
                        sp >>>= 0;
                        const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                        sp = this._inst.exports.getsp() >>> 0;
                        storeValue(sp + 32, result);
                      },
                      "syscall/js.valueSet": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                      },
                      "syscall/js.valueDelete": (sp) => {
                        sp >>>= 0;
                        Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                      },
                      "syscall/js.valueIndex": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                      },
                      "syscall/js.valueSetIndex": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                      },
                      "syscall/js.valueCall": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const m = Reflect.get(v, loadString(sp + 16));
                          const args = loadSliceOfValues(sp + 32);
                          const result = Reflect.apply(m, v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, result);
                          this.mem.setUint8(sp + 64, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, err);
                          this.mem.setUint8(sp + 64, 0);
                        }
                      },
                      "syscall/js.valueInvoke": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.apply(v, void 0, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueNew": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.construct(v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueLength": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                      },
                      "syscall/js.valuePrepareString": (sp) => {
                        sp >>>= 0;
                        const str = encoder.encode(String(loadValue(sp + 8)));
                        storeValue(sp + 16, str);
                        setInt64(sp + 24, str.length);
                      },
                      "syscall/js.valueLoadString": (sp) => {
                        sp >>>= 0;
                        const str = loadValue(sp + 8);
                        loadSlice(sp + 16).set(str);
                      },
                      "syscall/js.valueInstanceOf": (sp) => {
                        sp >>>= 0;
                        this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                      },
                      "syscall/js.copyBytesToGo": (sp) => {
                        sp >>>= 0;
                        const dst = loadSlice(sp + 8);
                        const src = loadValue(sp + 32);
                        if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "syscall/js.copyBytesToJS": (sp) => {
                        sp >>>= 0;
                        const dst = loadValue(sp + 8);
                        const src = loadSlice(sp + 16);
                        if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "debug": (value) => {
                        console.log(value);
                      }
                    }
                  };
                }
                run(instance) {
                  return __async2(this, null, function* () {
                    if (!(instance instanceof WebAssembly.Instance)) {
                      throw new Error("Go.run: WebAssembly.Instance expected");
                    }
                    this._inst = instance;
                    this.mem = new DataView(this._inst.exports.mem.buffer);
                    this._values = [
                      NaN,
                      0,
                      null,
                      true,
                      false,
                      globalThis2,
                      this
                    ];
                    this._goRefCounts = new Array(this._values.length).fill(Infinity);
                    this._ids = /* @__PURE__ */ new Map([
                      [0, 1],
                      [null, 2],
                      [true, 3],
                      [false, 4],
                      [globalThis2, 5],
                      [this, 6]
                    ]);
                    this._idPool = [];
                    this.exited = false;
                    let offset = 4096;
                    const strPtr = (str) => {
                      const ptr = offset;
                      const bytes = encoder.encode(str + "\0");
                      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                      offset += bytes.length;
                      if (offset % 8 !== 0) {
                        offset += 8 - offset % 8;
                      }
                      return ptr;
                    };
                    const argc = this.argv.length;
                    const argvPtrs = [];
                    this.argv.forEach((arg) => {
                      argvPtrs.push(strPtr(arg));
                    });
                    argvPtrs.push(0);
                    const keys3 = Object.keys(this.env).sort();
                    keys3.forEach((key) => {
                      argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
                    });
                    argvPtrs.push(0);
                    const argv = offset;
                    argvPtrs.forEach((ptr) => {
                      this.mem.setUint32(offset, ptr, true);
                      this.mem.setUint32(offset + 4, 0, true);
                      offset += 8;
                    });
                    const wasmMinDataAddr = 4096 + 8192;
                    if (offset >= wasmMinDataAddr) {
                      throw new Error("total length of command line and environment variables exceeds limit");
                    }
                    this._inst.exports.run(argc, argv);
                    if (this.exited) {
                      this._resolveExitPromise();
                    }
                    yield this._exitPromise;
                  });
                }
                _resume() {
                  if (this.exited) {
                    throw new Error("Go program has already exited");
                  }
                  this._inst.exports.resume();
                  if (this.exited) {
                    this._resolveExitPromise();
                  }
                }
                _makeFuncWrapper(id) {
                  const go = this;
                  return function() {
                    const event = { id, this: this, args: arguments };
                    go._pendingEvent = event;
                    go._resume();
                    return event.result;
                  };
                }
              };
            })();
            onmessage2 = ({ data: wasm }) => {
              let decoder = new TextDecoder();
              let fs = globalThis2.fs;
              let stderr = "";
              fs.writeSync = (fd, buffer) => {
                if (fd === 1) {
                  postMessage(buffer);
                } else if (fd === 2) {
                  stderr += decoder.decode(buffer);
                  let parts = stderr.split("\n");
                  if (parts.length > 1)
                    console.log(parts.slice(0, -1).join("\n"));
                  stderr = parts[parts.length - 1];
                } else {
                  throw new Error("Bad write");
                }
                return buffer.length;
              };
              let stdin = [];
              let resumeStdin;
              let stdinPos = 0;
              onmessage2 = ({ data }) => {
                if (data.length > 0) {
                  stdin.push(data);
                  if (resumeStdin)
                    resumeStdin();
                }
              };
              fs.read = (fd, buffer, offset, length, position, callback) => {
                if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
                  throw new Error("Bad read");
                }
                if (stdin.length === 0) {
                  resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
                  return;
                }
                let first4 = stdin[0];
                let count3 = Math.max(0, Math.min(length, first4.length - stdinPos));
                buffer.set(first4.subarray(stdinPos, stdinPos + count3), offset);
                stdinPos += count3;
                if (stdinPos === first4.length) {
                  stdin.shift();
                  stdinPos = 0;
                }
                callback(null, count3);
              };
              let go = new globalThis2.Go();
              go.argv = ["", `--service=${"0.16.13"}`];
              tryToInstantiateModule(wasm, go).then(
                (instance) => {
                  postMessage(null);
                  go.run(instance);
                },
                (error) => {
                  postMessage(error);
                }
              );
            };
            function tryToInstantiateModule(wasm, go) {
              return __async2(this, null, function* () {
                if (wasm instanceof WebAssembly.Module) {
                  return WebAssembly.instantiate(wasm, go.importObject);
                }
                const res = yield fetch(wasm);
                if (!res.ok)
                  throw new Error(`Failed to download ${JSON.stringify(wasm)}`);
                if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
                  const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
                  return result2.instance;
                }
                const bytes = yield res.arrayBuffer();
                const result = yield WebAssembly.instantiate(bytes, go.importObject);
                return result.instance;
              });
            }
            return (m) => onmessage2(m);
          })((data) => worker.onmessage({ data }));
          worker = {
            onmessage: null,
            postMessage: (data) => setTimeout(() => onmessage({ data })),
            terminate() {
            }
          };
        }
        let firstMessageResolve;
        let firstMessageReject;
        const firstMessagePromise = new Promise((resolve, reject) => {
          firstMessageResolve = resolve;
          firstMessageReject = reject;
        });
        worker.onmessage = ({ data: error }) => {
          worker.onmessage = ({ data }) => readFromStdout(data);
          if (error)
            firstMessageReject(error);
          else
            firstMessageResolve();
        };
        worker.postMessage(wasmModule || new URL(wasmURL, location.href).toString());
        let { readFromStdout, service } = createChannel({
          writeToStdin(bytes) {
            worker.postMessage(bytes);
          },
          isSync: false,
          isWriteUnavailable: true,
          esbuild: browser_exports
        });
        yield firstMessagePromise;
        longLivedService = {
          build: (options) => new Promise((resolve, reject) => service.buildOrServe({
            callName: "build",
            refs: null,
            serveOptions: null,
            options,
            isTTY: false,
            defaultWD: "/",
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          transform: (input, options) => new Promise((resolve, reject) => service.transform({
            callName: "transform",
            refs: null,
            input,
            options: options || {},
            isTTY: false,
            fs: {
              readFile(_, callback) {
                callback(new Error("Internal error"), null);
              },
              writeFile(_, callback) {
                callback(null);
              }
            },
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
            callName: "formatMessages",
            refs: null,
            messages,
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
            callName: "analyzeMetafile",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          }))
        };
      });
      var browser_default = browser_exports;
    })(typeof module === "object" ? module : { set exports(x) {
      (typeof self !== "undefined" ? self : this).esbuild = x;
    } });
  }
});

// src/chat.ts
var import_kv_asset_handler = __toESM(require_dist(), 1);

// ../code/package.json
var package_default = {
  name: "@spike.land/code",
  version: "0.9.2",
  description: "spike.land",
  type: "module",
  entry: "./index.js",
  source: "index.js",
  main: "public/static/bundle.mjs",
  files: [
    "dist"
  ],
  exports: {
    "./package.json": "./package.json",
    "./session": "./dist/src/session.mjs",
    ".": "./dist"
  },
  scripts: {
    test: "esbuild --bundle tests/* --platform=node --external:uvu --external:uvu/  --external:esbuild-wasm  --external:esbuild-wasm/  --external:memfs  --format=esm   --loader:.html=text --outdir=testsJs && yarn uvu testsJs && rm -rf testsJs",
    types: "tsc || echo ok",
    clean: "rm -rf .tsBuildInfo src/vendor dist src/monaco-workers && yarn favicons",
    "build:sw": "esbuild --outfile=../packages/.spike.land/public/sw.js --platform=browser --bundle --minify ./src/sw.js && yarn sw",
    start: "cd ../../.. && yarn start",
    push: "cd ../../.. && yarn push",
    "build:preact": "esbuild --bundle src/preact.ts  --target=esnext --minify --format=esm --platform=browser  --outfile=./dist//react.mjs",
    "build:orbit-db": "esbuild --bundle src/preact.ts  --target=esnext --minify --format=esm --platform=browser  --outfile=./dist//react.mjs",
    "build:framer-motion": 'yarn esbuild --bundle src/motion.tsx  --target=esnext --minify --format=esm  --platform=browser  --define:process.env.NODE_ENV=\\"production\\" --external:react --external:@emotion/is-prop-valid  --external:react --outfile=./dist/framer-motion.mjs',
    prebuild: "yarn test || echo FAILED",
    build: "rm -rf dist src/monaco-workers && yarn favicons && yarn es:build",
    "es:build": "node esbuild-dev.mjs",
    favicons: "mkdir -p ./dist/src/assets && cp -af src/assets/. ./dist/src/assets/",
    sw: "echo ok"
  },
  keywords: [
    "monaco",
    "editor",
    "react",
    "typescript",
    "html",
    "vscode"
  ],
  authors: [
    "Zoltan Erdos <zolika84@gmail.com>"
  ],
  bugs: {
    url: "https://github.com/zerdos/spike.land"
  },
  homepage: "http://spike.land",
  repository: {
    type: "git",
    url: "git+https://github.com/zerdos/spike.land.git"
  },
  author: "Zoltan Erdos <zolika84@gmail.com>",
  license: "BSD-3-Clause",
  publishConfig: {
    access: "public"
  },
  dependencies: {
    "@ampproject/worker-dom": "^0.34.0",
    "@emotion/cache": "11.10.5",
    "@emotion/react": "11.10.5",
    "@emotion/styled": "11.10.5",
    "@isomorphic-git/lightning-fs": "^4.6.0",
    "@mui/material": "5.11.3",
    "@yarnpkg/fslib": "^3.0.0-rc.34",
    "ace-builds": "1.14.0",
    assert: "^2.0.0",
    "assert-browserify": "^2.0.0",
    "async-mutex": "^0.4.0",
    ava: "^5.1.0",
    avl: "1.5.3",
    "buffer-browserify": "^0.2.5",
    csstype: "3.1.1",
    "detective-typescript": "^9.0.0",
    "esbuild-plugin-external-global": "1.0.1",
    "esbuild-wasm": "0.16.13",
    "events-browserify": "^0.0.1",
    "fast-diff": "1.2.0",
    "framer-motion": "8.1.3",
    immutable: "^4.2.1",
    "is-callable": "1.2.7",
    localforage: "^1.10.0",
    logrocket: "^3.0.1",
    memfs: "^3.4.12",
    module: "^1.2.5",
    "monaco-editor": "0.35.0-dev.20230102",
    "os-browserify": "^0.3.0",
    "p-map": "5.5.0",
    "path-browserify": "^1.0.1",
    prettier: "2.8.1",
    prismjs: "^1.29.0",
    qrious: "4.0.2",
    "re-resizable": "^6.9.9",
    react: "18.2.0",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^3.1.4",
    "react-icons": "4.7.1",
    "react-qrious": "2.5.6",
    "react-reverse-portal": "2.1.1",
    "react-rnd": "^10.4.1",
    stream: "^0.0.2",
    "stream-browserify": "^3.0.0",
    util: "^0.12.5",
    utils: "^0.3.1",
    uuid: "^9.0.0",
    "webrtc-adapter": "^8.2.0",
    "workbox-window": "^6.5.4",
    "worker-rpc": "^0.2.0"
  },
  devDependencies: {
    "@libp2p/interfaces": "3.1.0",
    "@motionone/dom": "10.15.3",
    "@types/eslint": "^8.4.10",
    "@types/hoist-non-react-statics": "^3.3.1",
    "@types/is-callable": "1.1.0",
    "@types/node": "^18.11.18",
    "@types/prettier": "2.7.2",
    "@types/prismjs": "^1.26.0",
    "@types/react": "^18.0.26",
    "@types/react-dom": "18.0.10",
    "@types/uuid": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^5.48.0",
    "@typescript-eslint/parser": "^5.48.0",
    "@yarnpkg/cli": "^4.0.0-rc.34",
    "@yarnpkg/core": "^4.0.0-rc.34",
    "@yarnpkg/plugin-essentials": "^4.0.0-rc.34",
    "@yarnpkg/plugin-git": "^3.0.0-rc.34",
    "@yarnpkg/plugin-typescript": "^4.0.0-rc.34",
    "@yarnpkg/sdks": "3.0.0-rc.34",
    esbuild: "0.16.13",
    "esbuild-plugin-alias": "0.2.1",
    eslint: "^8.31.0",
    "eslint-plugin-react": "^7.31.11",
    "fast-glob": "3.2.12",
    popmotion: "11.0.5",
    tslib: "^2.4.1",
    typescript: "^4.9.4",
    uvu: "0.5.6"
  },
  peerDependencies: {
    "@motionone/dom": "*",
    "fast-glob": "*",
    popmotion: "*"
  },
  directories: {
    test: "tests"
  }
};

// ../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-6IC5WRDH.mjs
var esbuild_default = "./chunk-esbuild-GS5BVJUF.wasm";

// ../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/chunk-chunk-JOOAHNWO.mjs
init_chunk_chunk_QRJQSMAR();
init_chunk_chunk_JLPTXNJM();
var require_diff = __commonJS2({
  "../../../../../Users/z/.yarn/berry/cache/fast-diff-npm-1.2.0-5ba4171bb6-9.zip/node_modules/fast-diff/diff.js"(exports, module) {
    init_define_process();
    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    function diff_main(text1, text2, cursor_pos, _fix_unicode) {
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) {
          return editdiff;
        }
      }
      var commonlength = diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      var diffs = diff_compute_(text1, text2);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      diff_cleanupMerge(diffs, _fix_unicode);
      return diffs;
    }
    __name(diff_main, "diff_main");
    function diff_compute_(text1, text2) {
      var diffs;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      var i = longtext.indexOf(shorttext);
      if (i !== -1) {
        diffs = [
          [DIFF_INSERT, longtext.substring(0, i)],
          [DIFF_EQUAL, shorttext],
          [DIFF_INSERT, longtext.substring(i + shorttext.length)]
        ];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      }
      var hm = diff_halfMatch_(text1, text2);
      if (hm) {
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
      }
      return diff_bisect_(text1, text2);
    }
    __name(diff_compute_, "diff_compute_");
    function diff_bisect_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      var max_d = Math.ceil((text1_length + text2_length) / 2);
      var v_offset = max_d;
      var v_length = 2 * max_d;
      var v1 = new Array(v_length);
      var v2 = new Array(v_length);
      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length;
      var front = delta % 2 !== 0;
      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;
      for (var d = 0; d < max_d; d++) {
        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          var k1_offset = v_offset + k1;
          var x1;
          if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
            x1 = v1[k1_offset + 1];
          } else {
            x1 = v1[k1_offset - 1] + 1;
          }
          var y1 = x1 - k1;
          while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1_offset] = x1;
          if (x1 > text1_length) {
            k1end += 2;
          } else if (y1 > text2_length) {
            k1start += 2;
          } else if (front) {
            var k2_offset = v_offset + delta - k1;
            if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
              var x2 = text1_length - v2[k2_offset];
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          var k2_offset = v_offset + k2;
          var x2;
          if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
            x2 = v2[k2_offset + 1];
          } else {
            x2 = v2[k2_offset - 1] + 1;
          }
          var y2 = x2 - k2;
          while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2_offset] = x2;
          if (x2 > text1_length) {
            k2end += 2;
          } else if (y2 > text2_length) {
            k2start += 2;
          } else if (!front) {
            var k1_offset = v_offset + delta - k2;
            if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
              var x1 = v1[k1_offset];
              var y1 = v_offset + x1 - k1_offset;
              x2 = text1_length - x2;
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
      }
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }
    __name(diff_bisect_, "diff_bisect_");
    function diff_bisectSplit_(text1, text2, x, y) {
      var text1a = text1.substring(0, x);
      var text2a = text2.substring(0, y);
      var text1b = text1.substring(x);
      var text2b = text2.substring(y);
      var diffs = diff_main(text1a, text2a);
      var diffsb = diff_main(text1b, text2b);
      return diffs.concat(diffsb);
    }
    __name(diff_bisectSplit_, "diff_bisectSplit_");
    function diff_commonPrefix(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
        pointermid--;
      }
      return pointermid;
    }
    __name(diff_commonPrefix, "diff_commonPrefix");
    function diff_commonSuffix(text1, text2) {
      if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
        pointermid--;
      }
      return pointermid;
    }
    __name(diff_commonSuffix, "diff_commonSuffix");
    function diff_halfMatch_(text1, text2) {
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      function diff_halfMatchI_(longtext2, shorttext2, i) {
        var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
          var prefixLength = diff_commonPrefix(
            longtext2.substring(i),
            shorttext2.substring(j)
          );
          var suffixLength = diff_commonSuffix(
            longtext2.substring(0, i),
            shorttext2.substring(0, j)
          );
          if (best_common.length < suffixLength + prefixLength) {
            best_common = shorttext2.substring(
              j - suffixLength,
              j
            ) + shorttext2.substring(j, j + prefixLength);
            best_longtext_a = longtext2.substring(0, i - suffixLength);
            best_longtext_b = longtext2.substring(i + prefixLength);
            best_shorttext_a = shorttext2.substring(0, j - suffixLength);
            best_shorttext_b = shorttext2.substring(j + prefixLength);
          }
        }
        if (best_common.length * 2 >= longtext2.length) {
          return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
          ];
        } else {
          return null;
        }
      }
      __name(diff_halfMatchI_, "diff_halfMatchI_");
      var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
      var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
      var hm;
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      var text1_a, text1_b, text2_a, text2_b;
      if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
      } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
      }
      var mid_common = hm[4];
      return [text1_a, text1_b, text2_a, text2_b, mid_common];
    }
    __name(diff_halfMatch_, "diff_halfMatch_");
    function diff_cleanupMerge(diffs, fix_unicode) {
      diffs.push([DIFF_EQUAL, ""]);
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          diffs.splice(pointer, 1);
          continue;
        }
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            var previous_equality = pointer - count_insert - count_delete - 1;
            if (fix_unicode) {
              if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                var stray = diffs[previous_equality][1].slice(-1);
                diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
                text_delete = stray + text_delete;
                text_insert = stray + text_insert;
                if (!diffs[previous_equality][1]) {
                  diffs.splice(previous_equality, 1);
                  pointer--;
                  var k = previous_equality - 1;
                  if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                    count_insert++;
                    text_insert = diffs[k][1] + text_insert;
                    k--;
                  }
                  if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                    count_delete++;
                    text_delete = diffs[k][1] + text_delete;
                    k--;
                  }
                  previous_equality = k;
                }
              }
              if (starts_with_pair_end(diffs[pointer][1])) {
                var stray = diffs[pointer][1].charAt(0);
                diffs[pointer][1] = diffs[pointer][1].slice(1);
                text_delete += stray;
                text_insert += stray;
              }
            }
            if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
              diffs.splice(pointer, 1);
              break;
            }
            if (text_delete.length > 0 || text_insert.length > 0) {
              if (text_delete.length > 0 && text_insert.length > 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (previous_equality >= 0) {
                    diffs[previous_equality][1] += text_insert.substring(0, commonlength);
                  } else {
                    diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(0, text_insert.length - commonlength);
                  text_delete = text_delete.substring(0, text_delete.length - commonlength);
                }
              }
              var n = count_insert + count_delete;
              if (text_delete.length === 0 && text_insert.length === 0) {
                diffs.splice(pointer - n, n);
                pointer = pointer - n;
              } else if (text_delete.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 1;
              } else if (text_insert.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
                pointer = pointer - n + 1;
              } else {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 2;
              }
            }
            if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs, fix_unicode);
      }
    }
    __name(diff_cleanupMerge, "diff_cleanupMerge");
    function is_surrogate_pair_start(charCode) {
      return charCode >= 55296 && charCode <= 56319;
    }
    __name(is_surrogate_pair_start, "is_surrogate_pair_start");
    function is_surrogate_pair_end(charCode) {
      return charCode >= 56320 && charCode <= 57343;
    }
    __name(is_surrogate_pair_end, "is_surrogate_pair_end");
    function starts_with_pair_end(str) {
      return is_surrogate_pair_end(str.charCodeAt(0));
    }
    __name(starts_with_pair_end, "starts_with_pair_end");
    function ends_with_pair_start(str) {
      return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
    }
    __name(ends_with_pair_start, "ends_with_pair_start");
    function remove_empty_tuples(tuples) {
      var ret = [];
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][1].length > 0) {
          ret.push(tuples[i]);
        }
      }
      return ret;
    }
    __name(remove_empty_tuples, "remove_empty_tuples");
    function make_edit_splice(before, oldMiddle, newMiddle, after) {
      if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
        return null;
      }
      return remove_empty_tuples([
        [DIFF_EQUAL, before],
        [DIFF_DELETE, oldMiddle],
        [DIFF_INSERT, newMiddle],
        [DIFF_EQUAL, after]
      ]);
    }
    __name(make_edit_splice, "make_edit_splice");
    function find_cursor_edit_diff(oldText, newText, cursor_pos) {
      var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
      var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
      var oldLength = oldText.length;
      var newLength = newText.length;
      if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
          var newCursor = oldCursor + newLength - oldLength;
          if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
            break editBefore;
          }
          if (newCursor < 0 || newCursor > newLength) {
            break editBefore;
          }
          var newBefore = newText.slice(0, newCursor);
          var newAfter = newText.slice(newCursor);
          if (newAfter !== oldAfter) {
            break editBefore;
          }
          var prefixLength = Math.min(oldCursor, newCursor);
          var oldPrefix = oldBefore.slice(0, prefixLength);
          var newPrefix = newBefore.slice(0, prefixLength);
          if (oldPrefix !== newPrefix) {
            break editBefore;
          }
          var oldMiddle = oldBefore.slice(prefixLength);
          var newMiddle = newBefore.slice(prefixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
          if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
            break editAfter;
          }
          var cursor = oldCursor;
          var newBefore = newText.slice(0, cursor);
          var newAfter = newText.slice(cursor);
          if (newBefore !== oldBefore) {
            break editAfter;
          }
          var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
          var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
          var newSuffix = newAfter.slice(newAfter.length - suffixLength);
          if (oldSuffix !== newSuffix) {
            break editAfter;
          }
          var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
          var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
          return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
      }
      if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
          var oldPrefix = oldText.slice(0, oldRange.index);
          var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
          var prefixLength = oldPrefix.length;
          var suffixLength = oldSuffix.length;
          if (newLength < prefixLength + suffixLength) {
            break replaceRange;
          }
          var newPrefix = newText.slice(0, prefixLength);
          var newSuffix = newText.slice(newLength - suffixLength);
          if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
            break replaceRange;
          }
          var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
          var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
      }
      return null;
    }
    __name(find_cursor_edit_diff, "find_cursor_edit_diff");
    function diff2(text1, text2, cursor_pos) {
      return diff_main(text1, text2, cursor_pos, true);
    }
    __name(diff2, "diff");
    diff2.INSERT = DIFF_INSERT;
    diff2.DELETE = DIFF_DELETE;
    diff2.EQUAL = DIFF_EQUAL;
    module.exports = diff2;
  }
});
var require_browser = __commonJS2({
  "../../../../../Users/z/.yarn/berry/cache/esbuild-wasm-npm-0.16.13-8714cdd154-9.zip/node_modules/esbuild-wasm/lib/browser.js"(exports, module) {
    init_define_process();
    ((module2) => {
      "use strict";
      var __defProp4 = Object.defineProperty;
      var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames4 = Object.getOwnPropertyNames;
      var __hasOwnProp4 = Object.prototype.hasOwnProperty;
      var __export = /* @__PURE__ */ __name((target, all) => {
        for (var name in all)
          __defProp4(target, name, { get: all[name], enumerable: true });
      }, "__export");
      var __copyProps4 = /* @__PURE__ */ __name((to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames4(from))
            if (!__hasOwnProp4.call(to, key) && key !== except)
              __defProp4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc4(from, key)) || desc.enumerable });
        }
        return to;
      }, "__copyProps");
      var __toCommonJS = /* @__PURE__ */ __name((mod22) => __copyProps4(__defProp4({}, "__esModule", { value: true }), mod22), "__toCommonJS");
      var __async = /* @__PURE__ */ __name((__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = /* @__PURE__ */ __name((value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }, "fulfilled");
          var rejected = /* @__PURE__ */ __name((value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          }, "rejected");
          var step = /* @__PURE__ */ __name((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
          step((generator = generator.apply(__this, __arguments)).next());
        });
      }, "__async");
      var browser_exports = {};
      __export(browser_exports, {
        analyzeMetafile: () => analyzeMetafile,
        analyzeMetafileSync: () => analyzeMetafileSync,
        build: () => build,
        buildSync: () => buildSync,
        default: () => browser_default,
        formatMessages: () => formatMessages,
        formatMessagesSync: () => formatMessagesSync,
        initialize: () => initialize2,
        serve: () => serve,
        transform: () => transform2,
        transformSync: () => transformSync,
        version: () => version
      });
      module2.exports = __toCommonJS(browser_exports);
      function encodePacket(packet) {
        let visit = /* @__PURE__ */ __name((value) => {
          if (value === null) {
            bb.write8(0);
          } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
          } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
          } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
          } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
          } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value) {
              visit(item);
            }
          } else {
            let keys22 = Object.keys(value);
            bb.write8(6);
            bb.write32(keys22.length);
            for (let key of keys22) {
              bb.write(encodeUTF8(key));
              visit(value[key]);
            }
          }
        }, "visit");
        let bb = new ByteBuffer();
        bb.write32(0);
        bb.write32(packet.id << 1 | +!packet.isRequest);
        visit(packet.value);
        writeUInt32LE(bb.buf, bb.len - 4, 0);
        return bb.buf.subarray(0, bb.len);
      }
      __name(encodePacket, "encodePacket");
      function decodePacket(bytes) {
        let visit = /* @__PURE__ */ __name(() => {
          switch (bb.read8()) {
            case 0:
              return null;
            case 1:
              return !!bb.read8();
            case 2:
              return bb.read32();
            case 3:
              return decodeUTF8(bb.read());
            case 4:
              return bb.read();
            case 5: {
              let count22 = bb.read32();
              let value2 = [];
              for (let i = 0; i < count22; i++) {
                value2.push(visit());
              }
              return value2;
            }
            case 6: {
              let count22 = bb.read32();
              let value2 = {};
              for (let i = 0; i < count22; i++) {
                value2[decodeUTF8(bb.read())] = visit();
              }
              return value2;
            }
            default:
              throw new Error("Invalid packet");
          }
        }, "visit");
        let bb = new ByteBuffer(bytes);
        let id = bb.read32();
        let isRequest = (id & 1) === 0;
        id >>>= 1;
        let value = visit();
        if (bb.ptr !== bytes.length) {
          throw new Error("Invalid packet");
        }
        return { id, isRequest, value };
      }
      __name(decodePacket, "decodePacket");
      var ByteBuffer = /* @__PURE__ */ __name(class {
        constructor(buf = new Uint8Array(1024)) {
          this.buf = buf;
          this.len = 0;
          this.ptr = 0;
        }
        _write(delta) {
          if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
          }
          this.len += delta;
          return this.len - delta;
        }
        write8(value) {
          let offset = this._write(1);
          this.buf[offset] = value;
        }
        write32(value) {
          let offset = this._write(4);
          writeUInt32LE(this.buf, value, offset);
        }
        write(bytes) {
          let offset = this._write(4 + bytes.length);
          writeUInt32LE(this.buf, bytes.length, offset);
          this.buf.set(bytes, offset + 4);
        }
        _read(delta) {
          if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
          }
          this.ptr += delta;
          return this.ptr - delta;
        }
        read8() {
          return this.buf[this._read(1)];
        }
        read32() {
          return readUInt32LE(this.buf, this._read(4));
        }
        read() {
          let length = this.read32();
          let bytes = new Uint8Array(length);
          let ptr = this._read(bytes.length);
          bytes.set(this.buf.subarray(ptr, ptr + length));
          return bytes;
        }
      }, "ByteBuffer");
      var encodeUTF8;
      var decodeUTF8;
      var encodeInvariant;
      if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
        let encoder = new TextEncoder();
        let decoder = new TextDecoder();
        encodeUTF8 = /* @__PURE__ */ __name((text) => encoder.encode(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name((bytes) => decoder.decode(bytes), "decodeUTF8");
        encodeInvariant = 'new TextEncoder().encode("")';
      } else if (typeof Buffer !== "undefined") {
        encodeUTF8 = /* @__PURE__ */ __name((text) => Buffer.from(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name((bytes) => {
          let { buffer, byteOffset, byteLength } = bytes;
          return Buffer.from(buffer, byteOffset, byteLength).toString();
        }, "decodeUTF8");
        encodeInvariant = 'Buffer.from("")';
      } else {
        throw new Error("No UTF-8 codec found");
      }
      if (!(encodeUTF8("") instanceof Uint8Array))
        throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
      function readUInt32LE(buffer, offset) {
        return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
      }
      __name(readUInt32LE, "readUInt32LE");
      function writeUInt32LE(buffer, value, offset) {
        buffer[offset++] = value;
        buffer[offset++] = value >> 8;
        buffer[offset++] = value >> 16;
        buffer[offset++] = value >> 24;
      }
      __name(writeUInt32LE, "writeUInt32LE");
      var quote = JSON.stringify;
      var buildLogLevelDefault = "warning";
      var transformLogLevelDefault = "silent";
      function validateTarget(target) {
        validateStringValue(target, "target");
        if (target.indexOf(",") >= 0)
          throw new Error(`Invalid target: ${target}`);
        return target;
      }
      __name(validateTarget, "validateTarget");
      var canBeAnything = /* @__PURE__ */ __name(() => null, "canBeAnything");
      var mustBeBoolean = /* @__PURE__ */ __name((value) => typeof value === "boolean" ? null : "a boolean", "mustBeBoolean");
      var mustBeBooleanOrObject = /* @__PURE__ */ __name((value) => typeof value === "boolean" || typeof value === "object" && !Array.isArray(value) ? null : "a boolean or an object", "mustBeBooleanOrObject");
      var mustBeString = /* @__PURE__ */ __name((value) => typeof value === "string" ? null : "a string", "mustBeString");
      var mustBeRegExp = /* @__PURE__ */ __name((value) => value instanceof RegExp ? null : "a RegExp object", "mustBeRegExp");
      var mustBeInteger = /* @__PURE__ */ __name((value) => typeof value === "number" && value === (value | 0) ? null : "an integer", "mustBeInteger");
      var mustBeFunction = /* @__PURE__ */ __name((value) => typeof value === "function" ? null : "a function", "mustBeFunction");
      var mustBeArray = /* @__PURE__ */ __name((value) => Array.isArray(value) ? null : "an array", "mustBeArray");
      var mustBeObject = /* @__PURE__ */ __name((value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object", "mustBeObject");
      var mustBeWebAssemblyModule = /* @__PURE__ */ __name((value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module", "mustBeWebAssemblyModule");
      var mustBeArrayOrRecord = /* @__PURE__ */ __name((value) => typeof value === "object" && value !== null ? null : "an array or an object", "mustBeArrayOrRecord");
      var mustBeObjectOrNull = /* @__PURE__ */ __name((value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null", "mustBeObjectOrNull");
      var mustBeStringOrBoolean = /* @__PURE__ */ __name((value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean", "mustBeStringOrBoolean");
      var mustBeStringOrObject = /* @__PURE__ */ __name((value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object", "mustBeStringOrObject");
      var mustBeStringOrArray = /* @__PURE__ */ __name((value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array", "mustBeStringOrArray");
      var mustBeStringOrUint8Array = /* @__PURE__ */ __name((value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array", "mustBeStringOrUint8Array");
      var mustBeStringOrURL = /* @__PURE__ */ __name((value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL", "mustBeStringOrURL");
      function getFlag(object, keys22, key, mustBeFn) {
        let value = object[key];
        keys22[key + ""] = true;
        if (value === void 0)
          return void 0;
        let mustBe = mustBeFn(value);
        if (mustBe !== null)
          throw new Error(`${quote(key)} must be ${mustBe}`);
        return value;
      }
      __name(getFlag, "getFlag");
      function checkForInvalidFlags(object, keys22, where) {
        for (let key in object) {
          if (!(key in keys22)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
          }
        }
      }
      __name(checkForInvalidFlags, "checkForInvalidFlags");
      function validateInitializeOptions(options) {
        let keys22 = /* @__PURE__ */ Object.create(null);
        let wasmURL = getFlag(options, keys22, "wasmURL", mustBeStringOrURL);
        let wasmModule = getFlag(options, keys22, "wasmModule", mustBeWebAssemblyModule);
        let worker = getFlag(options, keys22, "worker", mustBeBoolean);
        checkForInvalidFlags(options, keys22, "in initialize() call");
        return {
          wasmURL,
          wasmModule,
          worker
        };
      }
      __name(validateInitializeOptions, "validateInitializeOptions");
      function validateMangleCache(mangleCache) {
        let validated;
        if (mangleCache !== void 0) {
          validated = /* @__PURE__ */ Object.create(null);
          for (let key in mangleCache) {
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
              validated[key] = value;
            } else {
              throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
          }
        }
        return validated;
      }
      __name(validateMangleCache, "validateMangleCache");
      function pushLogFlags(flags, options, keys22, isTTY, logLevelDefault) {
        let color = getFlag(options, keys22, "color", mustBeBoolean);
        let logLevel = getFlag(options, keys22, "logLevel", mustBeString);
        let logLimit = getFlag(options, keys22, "logLimit", mustBeInteger);
        if (color !== void 0)
          flags.push(`--color=${color}`);
        else if (isTTY)
          flags.push(`--color=true`);
        flags.push(`--log-level=${logLevel || logLevelDefault}`);
        flags.push(`--log-limit=${logLimit || 0}`);
      }
      __name(pushLogFlags, "pushLogFlags");
      function validateStringValue(value, what, key) {
        if (typeof value !== "string") {
          throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
        }
        return value;
      }
      __name(validateStringValue, "validateStringValue");
      function pushCommonFlags(flags, options, keys22) {
        let legalComments = getFlag(options, keys22, "legalComments", mustBeString);
        let sourceRoot = getFlag(options, keys22, "sourceRoot", mustBeString);
        let sourcesContent = getFlag(options, keys22, "sourcesContent", mustBeBoolean);
        let target = getFlag(options, keys22, "target", mustBeStringOrArray);
        let format = getFlag(options, keys22, "format", mustBeString);
        let globalName = getFlag(options, keys22, "globalName", mustBeString);
        let mangleProps = getFlag(options, keys22, "mangleProps", mustBeRegExp);
        let reserveProps = getFlag(options, keys22, "reserveProps", mustBeRegExp);
        let mangleQuoted = getFlag(options, keys22, "mangleQuoted", mustBeBoolean);
        let minify = getFlag(options, keys22, "minify", mustBeBoolean);
        let minifySyntax = getFlag(options, keys22, "minifySyntax", mustBeBoolean);
        let minifyWhitespace = getFlag(options, keys22, "minifyWhitespace", mustBeBoolean);
        let minifyIdentifiers = getFlag(options, keys22, "minifyIdentifiers", mustBeBoolean);
        let drop = getFlag(options, keys22, "drop", mustBeArray);
        let charset = getFlag(options, keys22, "charset", mustBeString);
        let treeShaking = getFlag(options, keys22, "treeShaking", mustBeBoolean);
        let ignoreAnnotations = getFlag(options, keys22, "ignoreAnnotations", mustBeBoolean);
        let jsx = getFlag(options, keys22, "jsx", mustBeString);
        let jsxFactory = getFlag(options, keys22, "jsxFactory", mustBeString);
        let jsxFragment = getFlag(options, keys22, "jsxFragment", mustBeString);
        let jsxImportSource = getFlag(options, keys22, "jsxImportSource", mustBeString);
        let jsxDev = getFlag(options, keys22, "jsxDev", mustBeBoolean);
        let jsxSideEffects = getFlag(options, keys22, "jsxSideEffects", mustBeBoolean);
        let define22 = getFlag(options, keys22, "define", mustBeObject);
        let logOverride = getFlag(options, keys22, "logOverride", mustBeObject);
        let supported = getFlag(options, keys22, "supported", mustBeObject);
        let pure = getFlag(options, keys22, "pure", mustBeArray);
        let keepNames = getFlag(options, keys22, "keepNames", mustBeBoolean);
        let platform = getFlag(options, keys22, "platform", mustBeString);
        if (legalComments)
          flags.push(`--legal-comments=${legalComments}`);
        if (sourceRoot !== void 0)
          flags.push(`--source-root=${sourceRoot}`);
        if (sourcesContent !== void 0)
          flags.push(`--sources-content=${sourcesContent}`);
        if (target) {
          if (Array.isArray(target))
            flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
          else
            flags.push(`--target=${validateTarget(target)}`);
        }
        if (format)
          flags.push(`--format=${format}`);
        if (globalName)
          flags.push(`--global-name=${globalName}`);
        if (platform)
          flags.push(`--platform=${platform}`);
        if (minify)
          flags.push("--minify");
        if (minifySyntax)
          flags.push("--minify-syntax");
        if (minifyWhitespace)
          flags.push("--minify-whitespace");
        if (minifyIdentifiers)
          flags.push("--minify-identifiers");
        if (charset)
          flags.push(`--charset=${charset}`);
        if (treeShaking !== void 0)
          flags.push(`--tree-shaking=${treeShaking}`);
        if (ignoreAnnotations)
          flags.push(`--ignore-annotations`);
        if (drop)
          for (let what of drop)
            flags.push(`--drop:${validateStringValue(what, "drop")}`);
        if (mangleProps)
          flags.push(`--mangle-props=${mangleProps.source}`);
        if (reserveProps)
          flags.push(`--reserve-props=${reserveProps.source}`);
        if (mangleQuoted !== void 0)
          flags.push(`--mangle-quoted=${mangleQuoted}`);
        if (jsx)
          flags.push(`--jsx=${jsx}`);
        if (jsxFactory)
          flags.push(`--jsx-factory=${jsxFactory}`);
        if (jsxFragment)
          flags.push(`--jsx-fragment=${jsxFragment}`);
        if (jsxImportSource)
          flags.push(`--jsx-import-source=${jsxImportSource}`);
        if (jsxDev)
          flags.push(`--jsx-dev`);
        if (jsxSideEffects)
          flags.push(`--jsx-side-effects`);
        if (define22) {
          for (let key in define22) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define22[key], "define", key)}`);
          }
        }
        if (logOverride) {
          for (let key in logOverride) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
          }
        }
        if (supported) {
          for (let key in supported) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean")
              throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
          }
        }
        if (pure)
          for (let fn of pure)
            flags.push(`--pure:${validateStringValue(fn, "pure")}`);
        if (keepNames)
          flags.push(`--keep-names`);
      }
      __name(pushCommonFlags, "pushCommonFlags");
      function flagsForBuildOptions(callName, options, isTTY, logLevelDefault, writeDefault) {
        var _a;
        let flags = [];
        let entries32 = [];
        let keys22 = /* @__PURE__ */ Object.create(null);
        let stdinContents = null;
        let stdinResolveDir = null;
        let watchMode = null;
        pushLogFlags(flags, options, keys22, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys22);
        let sourcemap = getFlag(options, keys22, "sourcemap", mustBeStringOrBoolean);
        let bundle = getFlag(options, keys22, "bundle", mustBeBoolean);
        let watch = getFlag(options, keys22, "watch", mustBeBooleanOrObject);
        let splitting = getFlag(options, keys22, "splitting", mustBeBoolean);
        let preserveSymlinks = getFlag(options, keys22, "preserveSymlinks", mustBeBoolean);
        let metafile = getFlag(options, keys22, "metafile", mustBeBoolean);
        let outfile = getFlag(options, keys22, "outfile", mustBeString);
        let outdir = getFlag(options, keys22, "outdir", mustBeString);
        let outbase = getFlag(options, keys22, "outbase", mustBeString);
        let tsconfig = getFlag(options, keys22, "tsconfig", mustBeString);
        let resolveExtensions = getFlag(options, keys22, "resolveExtensions", mustBeArray);
        let nodePathsInput = getFlag(options, keys22, "nodePaths", mustBeArray);
        let mainFields = getFlag(options, keys22, "mainFields", mustBeArray);
        let conditions = getFlag(options, keys22, "conditions", mustBeArray);
        let external = getFlag(options, keys22, "external", mustBeArray);
        let packages = getFlag(options, keys22, "packages", mustBeString);
        let alias = getFlag(options, keys22, "alias", mustBeObject);
        let loader = getFlag(options, keys22, "loader", mustBeObject);
        let outExtension = getFlag(options, keys22, "outExtension", mustBeObject);
        let publicPath = getFlag(options, keys22, "publicPath", mustBeString);
        let entryNames = getFlag(options, keys22, "entryNames", mustBeString);
        let chunkNames = getFlag(options, keys22, "chunkNames", mustBeString);
        let assetNames = getFlag(options, keys22, "assetNames", mustBeString);
        let inject = getFlag(options, keys22, "inject", mustBeArray);
        let banner = getFlag(options, keys22, "banner", mustBeObject);
        let footer = getFlag(options, keys22, "footer", mustBeObject);
        let entryPoints = getFlag(options, keys22, "entryPoints", mustBeArrayOrRecord);
        let absWorkingDir = getFlag(options, keys22, "absWorkingDir", mustBeString);
        let stdin = getFlag(options, keys22, "stdin", mustBeObject);
        let write = (_a = getFlag(options, keys22, "write", mustBeBoolean)) != null ? _a : writeDefault;
        let allowOverwrite = getFlag(options, keys22, "allowOverwrite", mustBeBoolean);
        let incremental = getFlag(options, keys22, "incremental", mustBeBoolean) === true;
        let mangleCache = getFlag(options, keys22, "mangleCache", mustBeObject);
        keys22.plugins = true;
        checkForInvalidFlags(options, keys22, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
        if (bundle)
          flags.push("--bundle");
        if (allowOverwrite)
          flags.push("--allow-overwrite");
        if (watch) {
          flags.push("--watch");
          if (typeof watch === "boolean") {
            watchMode = {};
          } else {
            let watchKeys = /* @__PURE__ */ Object.create(null);
            let onRebuild = getFlag(watch, watchKeys, "onRebuild", mustBeFunction);
            checkForInvalidFlags(watch, watchKeys, `on "watch" in ${callName}() call`);
            watchMode = { onRebuild };
          }
        }
        if (splitting)
          flags.push("--splitting");
        if (preserveSymlinks)
          flags.push("--preserve-symlinks");
        if (metafile)
          flags.push(`--metafile`);
        if (outfile)
          flags.push(`--outfile=${outfile}`);
        if (outdir)
          flags.push(`--outdir=${outdir}`);
        if (outbase)
          flags.push(`--outbase=${outbase}`);
        if (tsconfig)
          flags.push(`--tsconfig=${tsconfig}`);
        if (packages)
          flags.push(`--packages=${packages}`);
        if (resolveExtensions) {
          let values22 = [];
          for (let value of resolveExtensions) {
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid resolve extension: ${value}`);
            values22.push(value);
          }
          flags.push(`--resolve-extensions=${values22.join(",")}`);
        }
        if (publicPath)
          flags.push(`--public-path=${publicPath}`);
        if (entryNames)
          flags.push(`--entry-names=${entryNames}`);
        if (chunkNames)
          flags.push(`--chunk-names=${chunkNames}`);
        if (assetNames)
          flags.push(`--asset-names=${assetNames}`);
        if (mainFields) {
          let values22 = [];
          for (let value of mainFields) {
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid main field: ${value}`);
            values22.push(value);
          }
          flags.push(`--main-fields=${values22.join(",")}`);
        }
        if (conditions) {
          let values22 = [];
          for (let value of conditions) {
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid condition: ${value}`);
            values22.push(value);
          }
          flags.push(`--conditions=${values22.join(",")}`);
        }
        if (external)
          for (let name of external)
            flags.push(`--external:${validateStringValue(name, "external")}`);
        if (alias) {
          for (let old in alias) {
            if (old.indexOf("=") >= 0)
              throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
          }
        }
        if (banner) {
          for (let type in banner) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
          }
        }
        if (footer) {
          for (let type in footer) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
          }
        }
        if (inject)
          for (let path of inject)
            flags.push(`--inject:${validateStringValue(path, "inject")}`);
        if (loader) {
          for (let ext in loader) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
          }
        }
        if (outExtension) {
          for (let ext in outExtension) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
          }
        }
        if (entryPoints) {
          if (Array.isArray(entryPoints)) {
            for (let entryPoint of entryPoints) {
              entries32.push(["", validateStringValue(entryPoint, "entry point")]);
            }
          } else {
            for (let key in entryPoints) {
              entries32.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
            }
          }
        }
        if (stdin) {
          let stdinKeys = /* @__PURE__ */ Object.create(null);
          let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
          let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
          let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
          checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
          if (sourcefile)
            flags.push(`--sourcefile=${sourcefile}`);
          if (loader2)
            flags.push(`--loader=${loader2}`);
          if (resolveDir)
            stdinResolveDir = resolveDir;
          if (typeof contents === "string")
            stdinContents = encodeUTF8(contents);
          else if (contents instanceof Uint8Array)
            stdinContents = contents;
        }
        let nodePaths = [];
        if (nodePathsInput) {
          for (let value of nodePathsInput) {
            value += "";
            nodePaths.push(value);
          }
        }
        return {
          entries: entries32,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          incremental,
          nodePaths,
          watch: watchMode,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name(flagsForBuildOptions, "flagsForBuildOptions");
      function flagsForTransformOptions(callName, options, isTTY, logLevelDefault) {
        let flags = [];
        let keys22 = /* @__PURE__ */ Object.create(null);
        pushLogFlags(flags, options, keys22, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys22);
        let sourcemap = getFlag(options, keys22, "sourcemap", mustBeStringOrBoolean);
        let tsconfigRaw = getFlag(options, keys22, "tsconfigRaw", mustBeStringOrObject);
        let sourcefile = getFlag(options, keys22, "sourcefile", mustBeString);
        let loader = getFlag(options, keys22, "loader", mustBeString);
        let banner = getFlag(options, keys22, "banner", mustBeString);
        let footer = getFlag(options, keys22, "footer", mustBeString);
        let mangleCache = getFlag(options, keys22, "mangleCache", mustBeObject);
        checkForInvalidFlags(options, keys22, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
        if (tsconfigRaw)
          flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
        if (sourcefile)
          flags.push(`--sourcefile=${sourcefile}`);
        if (loader)
          flags.push(`--loader=${loader}`);
        if (banner)
          flags.push(`--banner=${banner}`);
        if (footer)
          flags.push(`--footer=${footer}`);
        return {
          flags,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name(flagsForTransformOptions, "flagsForTransformOptions");
      function createChannel(streamIn) {
        const requestCallbacksByKey = {};
        const closeData = { didClose: false, reason: "" };
        let responseCallbacks = {};
        let nextRequestID = 0;
        let nextBuildKey = 0;
        let stdout = new Uint8Array(16 * 1024);
        let stdoutUsed = 0;
        let readFromStdout = /* @__PURE__ */ __name((chunk) => {
          let limit = stdoutUsed + chunk.length;
          if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
          }
          stdout.set(chunk, stdoutUsed);
          stdoutUsed += chunk.length;
          let offset = 0;
          while (offset + 4 <= stdoutUsed) {
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
              break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
          }
          if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
          }
        }, "readFromStdout");
        let afterClose = /* @__PURE__ */ __name((error) => {
          closeData.didClose = true;
          if (error)
            closeData.reason = ": " + (error.message || error);
          const text = "The service was stopped" + closeData.reason;
          for (let id in responseCallbacks) {
            responseCallbacks[id](text, null);
          }
          responseCallbacks = {};
        }, "afterClose");
        let sendRequest = /* @__PURE__ */ __name((refs, value, callback) => {
          if (closeData.didClose)
            return callback("The service is no longer running" + closeData.reason, null);
          let id = nextRequestID++;
          responseCallbacks[id] = (error, response) => {
            try {
              callback(error, response);
            } finally {
              if (refs)
                refs.unref();
            }
          };
          if (refs)
            refs.ref();
          streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
        }, "sendRequest");
        let sendResponse = /* @__PURE__ */ __name((id, value) => {
          if (closeData.didClose)
            throw new Error("The service is no longer running" + closeData.reason);
          streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
        }, "sendResponse");
        let handleRequest = /* @__PURE__ */ __name((id, request) => __async(this, null, function* () {
          try {
            if (request.command === "ping") {
              sendResponse(id, {});
              return;
            }
            if (typeof request.key === "number") {
              const requestCallbacks = requestCallbacksByKey[request.key];
              if (requestCallbacks) {
                const callback = requestCallbacks[request.command];
                if (callback) {
                  yield callback(id, request);
                  return;
                }
              }
            }
            throw new Error(`Invalid command: ` + request.command);
          } catch (e) {
            sendResponse(id, { errors: [extractErrorMessageV8(e, streamIn, null, void 0, "")] });
          }
        }), "handleRequest");
        let isFirstPacket = true;
        let handleIncomingPacket = /* @__PURE__ */ __name((bytes) => {
          if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.16.13") {
              throw new Error(`Cannot start service: Host version "${"0.16.13"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
          }
          let packet = decodePacket(bytes);
          if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
          } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error)
              callback(packet.value.error, {});
            else
              callback(null, packet.value);
          }
        }, "handleIncomingPacket");
        let buildOrServe = /* @__PURE__ */ __name(({ callName, refs, serveOptions, options, isTTY, defaultWD, callback }) => {
          let refCount = 0;
          const buildKey = nextBuildKey++;
          const requestCallbacks = {};
          const buildRefs = {
            ref() {
              if (++refCount === 1) {
                if (refs)
                  refs.ref();
              }
            },
            unref() {
              if (--refCount === 0) {
                delete requestCallbacksByKey[buildKey];
                if (refs)
                  refs.unref();
              }
            }
          };
          requestCallbacksByKey[buildKey] = requestCallbacks;
          buildRefs.ref();
          buildOrServeImpl(
            callName,
            buildKey,
            sendRequest,
            sendResponse,
            buildRefs,
            streamIn,
            requestCallbacks,
            options,
            serveOptions,
            isTTY,
            defaultWD,
            closeData,
            (err, res) => {
              try {
                callback(err, res);
              } finally {
                buildRefs.unref();
              }
            }
          );
        }, "buildOrServe");
        let transform22 = /* @__PURE__ */ __name(({ callName, refs, input, options, isTTY, fs, callback }) => {
          const details = createObjectStash();
          let start = /* @__PURE__ */ __name((inputPath) => {
            try {
              if (typeof input !== "string" && !(input instanceof Uint8Array))
                throw new Error('The input to "transform" must be a string or a Uint8Array');
              let {
                flags,
                mangleCache
              } = flagsForTransformOptions(callName, options, isTTY, transformLogLevelDefault);
              let request = {
                command: "transform",
                flags,
                inputFS: inputPath !== null,
                input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
              };
              if (mangleCache)
                request.mangleCache = mangleCache;
              sendRequest(refs, request, (error, response) => {
                if (error)
                  return callback(new Error(error), null);
                let errors = replaceDetailsInMessages(response.errors, details);
                let warnings = replaceDetailsInMessages(response.warnings, details);
                let outstanding = 1;
                let next = /* @__PURE__ */ __name(() => {
                  if (--outstanding === 0) {
                    let result = { warnings, code: response.code, map: response.map };
                    if ("legalComments" in response)
                      result.legalComments = response == null ? void 0 : response.legalComments;
                    if (response.mangleCache)
                      result.mangleCache = response == null ? void 0 : response.mangleCache;
                    callback(null, result);
                  }
                }, "next");
                if (errors.length > 0)
                  return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                if (response.codeFS) {
                  outstanding++;
                  fs.readFile(response.code, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.code = contents;
                      next();
                    }
                  });
                }
                if (response.mapFS) {
                  outstanding++;
                  fs.readFile(response.map, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.map = contents;
                      next();
                    }
                  });
                }
                next();
              });
            } catch (e) {
              let flags = [];
              try {
                pushLogFlags(flags, options, {}, isTTY, transformLogLevelDefault);
              } catch (e2) {
              }
              const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
              sendRequest(refs, { command: "error", flags, error }, () => {
                error.detail = details.load(error.detail);
                callback(failureErrorWithLog("Transform failed", [error], []), null);
              });
            }
          }, "start");
          if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = /* @__PURE__ */ __name(() => fs.writeFile(input, next), "start");
          }
          start(null);
        }, "transform2");
        let formatMessages2 = /* @__PURE__ */ __name(({ callName, refs, messages, options, callback }) => {
          let result = sanitizeMessages(messages, "messages", null, "");
          if (!options)
            throw new Error(`Missing second argument in ${callName}() call`);
          let keys22 = {};
          let kind = getFlag(options, keys22, "kind", mustBeString);
          let color = getFlag(options, keys22, "color", mustBeBoolean);
          let terminalWidth = getFlag(options, keys22, "terminalWidth", mustBeInteger);
          checkForInvalidFlags(options, keys22, `in ${callName}() call`);
          if (kind === void 0)
            throw new Error(`Missing "kind" in ${callName}() call`);
          if (kind !== "error" && kind !== "warning")
            throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
          let request = {
            command: "format-msgs",
            messages: result,
            isWarning: kind === "warning"
          };
          if (color !== void 0)
            request.color = color;
          if (terminalWidth !== void 0)
            request.terminalWidth = terminalWidth;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.messages);
          });
        }, "formatMessages2");
        let analyzeMetafile2 = /* @__PURE__ */ __name(({ callName, refs, metafile, options, callback }) => {
          if (options === void 0)
            options = {};
          let keys22 = {};
          let color = getFlag(options, keys22, "color", mustBeBoolean);
          let verbose = getFlag(options, keys22, "verbose", mustBeBoolean);
          checkForInvalidFlags(options, keys22, `in ${callName}() call`);
          let request = {
            command: "analyze-metafile",
            metafile
          };
          if (color !== void 0)
            request.color = color;
          if (verbose !== void 0)
            request.verbose = verbose;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.result);
          });
        }, "analyzeMetafile2");
        return {
          readFromStdout,
          afterClose,
          service: {
            buildOrServe,
            transform: transform22,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
          }
        };
      }
      __name(createChannel, "createChannel");
      function buildOrServeImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, serveOptions, isTTY, defaultWD, closeData, callback) {
        const details = createObjectStash();
        const logPluginError = /* @__PURE__ */ __name((e, pluginName, note, done) => {
          const flags = [];
          try {
            pushLogFlags(flags, options, {}, isTTY, buildLogLevelDefault);
          } catch (e2) {
          }
          const message = extractErrorMessageV8(e, streamIn, details, note, pluginName);
          sendRequest(refs, { command: "error", flags, error: message }, () => {
            message.detail = details.load(message.detail);
            done(message);
          });
        }, "logPluginError");
        const handleError = /* @__PURE__ */ __name((e, pluginName) => {
          logPluginError(e, pluginName, void 0, (error) => {
            callback(failureErrorWithLog("Build failed", [error], []), null);
          });
        }, "handleError");
        let plugins;
        if (typeof options === "object") {
          const value = options.plugins;
          if (value !== void 0) {
            if (!Array.isArray(value))
              throw new Error(`"plugins" must be an array`);
            plugins = value;
          }
        }
        if (plugins && plugins.length > 0) {
          if (streamIn.isSync) {
            handleError(new Error("Cannot use plugins in synchronous API calls"), "");
            return;
          }
          handlePlugins(
            buildKey,
            sendRequest,
            sendResponse,
            refs,
            streamIn,
            requestCallbacks,
            options,
            plugins,
            details
          ).then(
            (result) => {
              if (!result.ok) {
                handleError(result.error, result.pluginName);
                return;
              }
              try {
                buildOrServeContinue(result.requestPlugins, result.runOnEndCallbacks);
              } catch (e) {
                handleError(e, "");
              }
            },
            (e) => handleError(e, "")
          );
          return;
        }
        try {
          buildOrServeContinue(null, (result, logPluginError2, done) => done());
        } catch (e) {
          handleError(e, "");
        }
        function buildOrServeContinue(requestPlugins, runOnEndCallbacks) {
          let writeDefault = !streamIn.isWriteUnavailable;
          let {
            entries: entries32,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir,
            incremental,
            nodePaths,
            watch,
            mangleCache
          } = flagsForBuildOptions(callName, options, isTTY, buildLogLevelDefault, writeDefault);
          let request = {
            command: "build",
            key: buildKey,
            entries: entries32,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD,
            incremental,
            nodePaths
          };
          if (requestPlugins)
            request.plugins = requestPlugins;
          if (mangleCache)
            request.mangleCache = mangleCache;
          let serve2 = serveOptions && buildServeData(buildKey, sendRequest, sendResponse, refs, requestCallbacks, serveOptions, request);
          let rebuild;
          let stop;
          let copyResponseToResult = /* @__PURE__ */ __name((response, result) => {
            if (response.outputFiles)
              result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile)
              result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache)
              result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0)
              console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
          }, "copyResponseToResult");
          let buildResponseToResult = /* @__PURE__ */ __name((response, callback2) => {
            let result = {
              errors: replaceDetailsInMessages(response.errors, details),
              warnings: replaceDetailsInMessages(response.warnings, details)
            };
            copyResponseToResult(response, result);
            runOnEndCallbacks(result, logPluginError, () => {
              if (result.errors.length > 0) {
                return callback2(failureErrorWithLog("Build failed", result.errors, result.warnings), null);
              }
              if (response.rebuild) {
                if (!rebuild) {
                  let isDisposed = false;
                  rebuild = /* @__PURE__ */ __name(() => new Promise((resolve, reject) => {
                    if (isDisposed || closeData.didClose)
                      throw new Error("Cannot rebuild");
                    sendRequest(
                      refs,
                      { command: "rebuild", key: buildKey },
                      (error2, response2) => {
                        if (error2) {
                          const message = { id: "", pluginName: "", text: error2, location: null, notes: [], detail: void 0 };
                          return callback2(failureErrorWithLog("Build failed", [message], []), null);
                        }
                        buildResponseToResult(response2, (error3, result3) => {
                          if (error3)
                            reject(error3);
                          else
                            resolve(result3);
                        });
                      }
                    );
                  }), "rebuild");
                  refs.ref();
                  rebuild.dispose = () => {
                    if (isDisposed)
                      return;
                    isDisposed = true;
                    sendRequest(refs, { command: "rebuild-dispose", key: buildKey }, () => {
                    });
                    refs.unref();
                  };
                }
                result.rebuild = rebuild;
              }
              if (response.watch) {
                if (!stop) {
                  let isStopped = false;
                  refs.ref();
                  stop = /* @__PURE__ */ __name(() => {
                    if (isStopped)
                      return;
                    isStopped = true;
                    delete requestCallbacks["watch-rebuild"];
                    sendRequest(refs, { command: "watch-stop", key: buildKey }, () => {
                    });
                    refs.unref();
                  }, "stop");
                  if (watch) {
                    requestCallbacks["watch-rebuild"] = (id, request2) => {
                      try {
                        let watchResponse = request2.args;
                        let result2 = {
                          errors: replaceDetailsInMessages(watchResponse.errors, details),
                          warnings: replaceDetailsInMessages(watchResponse.warnings, details)
                        };
                        copyResponseToResult(watchResponse, result2);
                        runOnEndCallbacks(result2, logPluginError, () => {
                          if (result2.errors.length > 0) {
                            if (watch.onRebuild)
                              watch.onRebuild(failureErrorWithLog("Build failed", result2.errors, result2.warnings), null);
                            return;
                          }
                          result2.stop = stop;
                          if (watch.onRebuild)
                            watch.onRebuild(null, result2);
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      sendResponse(id, {});
                    };
                  }
                }
                result.stop = stop;
              }
              callback2(null, result);
            });
          }, "buildResponseToResult");
          if (write && streamIn.isWriteUnavailable)
            throw new Error(`The "write" option is unavailable in this environment`);
          if (incremental && streamIn.isSync)
            throw new Error(`Cannot use "incremental" with a synchronous build`);
          if (watch && streamIn.isSync)
            throw new Error(`Cannot use "watch" with a synchronous build`);
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            if (serve2) {
              let serveResponse = response;
              let isStopped = false;
              refs.ref();
              let result = {
                port: serveResponse.port,
                host: serveResponse.host,
                wait: serve2.wait,
                stop() {
                  if (isStopped)
                    return;
                  isStopped = true;
                  serve2.stop();
                  refs.unref();
                }
              };
              refs.ref();
              serve2.wait.then(refs.unref, refs.unref);
              return callback(null, result);
            }
            return buildResponseToResult(response, callback);
          });
        }
        __name(buildOrServeContinue, "buildOrServeContinue");
      }
      __name(buildOrServeImpl, "buildOrServeImpl");
      var buildServeData = /* @__PURE__ */ __name((buildKey, sendRequest, sendResponse, refs, requestCallbacks, options, request) => {
        let keys22 = {};
        let port = getFlag(options, keys22, "port", mustBeInteger);
        let host = getFlag(options, keys22, "host", mustBeString);
        let servedir = getFlag(options, keys22, "servedir", mustBeString);
        let onRequest = getFlag(options, keys22, "onRequest", mustBeFunction);
        let wait = new Promise((resolve, reject) => {
          requestCallbacks["serve-wait"] = (id, request2) => {
            if (request2.error !== null)
              reject(new Error(request2.error));
            else
              resolve();
            sendResponse(id, {});
          };
        });
        request.serve = {};
        checkForInvalidFlags(options, keys22, `in serve() call`);
        if (port !== void 0)
          request.serve.port = port;
        if (host !== void 0)
          request.serve.host = host;
        if (servedir !== void 0)
          request.serve.servedir = servedir;
        requestCallbacks["serve-request"] = (id, request2) => {
          if (onRequest)
            onRequest(request2.args);
          sendResponse(id, {});
        };
        return {
          wait,
          stop() {
            sendRequest(refs, { command: "serve-stop", key: buildKey }, () => {
            });
          }
        };
      }, "buildServeData");
      var handlePlugins = /* @__PURE__ */ __name((buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => __async(void 0, null, function* () {
        let onStartCallbacks = [];
        let onEndCallbacks = [];
        let onResolveCallbacks = {};
        let onLoadCallbacks = {};
        let nextCallbackID = 0;
        let i = 0;
        let requestPlugins = [];
        let isSetupDone = false;
        plugins = [...plugins];
        for (let item of plugins) {
          let keys22 = {};
          if (typeof item !== "object")
            throw new Error(`Plugin at index ${i} must be an object`);
          const name = getFlag(item, keys22, "name", mustBeString);
          if (typeof name !== "string" || name === "")
            throw new Error(`Plugin at index ${i} is missing a name`);
          try {
            let setup = getFlag(item, keys22, "setup", mustBeFunction);
            if (typeof setup !== "function")
              throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys22, `on plugin ${quote(name)}`);
            let plugin = {
              name,
              onResolve: [],
              onLoad: []
            };
            i++;
            let resolve = /* @__PURE__ */ __name((path, options = {}) => {
              if (!isSetupDone)
                throw new Error('Cannot call "resolve" before plugin setup has completed');
              if (typeof path !== "string")
                throw new Error(`The path to resolve must be a string`);
              let keys222 = /* @__PURE__ */ Object.create(null);
              let pluginName = getFlag(options, keys222, "pluginName", mustBeString);
              let importer = getFlag(options, keys222, "importer", mustBeString);
              let namespace = getFlag(options, keys222, "namespace", mustBeString);
              let resolveDir = getFlag(options, keys222, "resolveDir", mustBeString);
              let kind = getFlag(options, keys222, "kind", mustBeString);
              let pluginData = getFlag(options, keys222, "pluginData", canBeAnything);
              checkForInvalidFlags(options, keys222, "in resolve() call");
              return new Promise((resolve2, reject) => {
                const request = {
                  command: "resolve",
                  path,
                  key: buildKey,
                  pluginName: name
                };
                if (pluginName != null)
                  request.pluginName = pluginName;
                if (importer != null)
                  request.importer = importer;
                if (namespace != null)
                  request.namespace = namespace;
                if (resolveDir != null)
                  request.resolveDir = resolveDir;
                if (kind != null)
                  request.kind = kind;
                else
                  throw new Error(`Must specify "kind" when calling "resolve"`);
                if (pluginData != null)
                  request.pluginData = details.store(pluginData);
                sendRequest(refs, request, (error, response) => {
                  if (error !== null)
                    reject(new Error(error));
                  else
                    resolve2({
                      errors: replaceDetailsInMessages(response.errors, details),
                      warnings: replaceDetailsInMessages(response.warnings, details),
                      path: response.path,
                      external: response.external,
                      sideEffects: response.sideEffects,
                      namespace: response.namespace,
                      suffix: response.suffix,
                      pluginData: details.load(response.pluginData)
                    });
                });
              });
            }, "resolve");
            let promise = setup({
              initialOptions,
              resolve,
              onStart(callback) {
                let registeredText = `This error came from the "onStart" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                onStartCallbacks.push({ name, callback, note: registeredNote });
              },
              onEnd(callback) {
                let registeredText = `This error came from the "onEnd" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                onEndCallbacks.push({ name, callback, note: registeredNote });
              },
              onResolve(options, callback) {
                let registeredText = `This error came from the "onResolve" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                let keys222 = {};
                let filter32 = getFlag(options, keys222, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys222, "namespace", mustBeString);
                checkForInvalidFlags(options, keys222, `in onResolve() call for plugin ${quote(name)}`);
                if (filter32 == null)
                  throw new Error(`onResolve() call is missing a filter`);
                let id = nextCallbackID++;
                onResolveCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onResolve.push({ id, filter: filter32.source, namespace: namespace || "" });
              },
              onLoad(options, callback) {
                let registeredText = `This error came from the "onLoad" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                let keys222 = {};
                let filter32 = getFlag(options, keys222, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys222, "namespace", mustBeString);
                checkForInvalidFlags(options, keys222, `in onLoad() call for plugin ${quote(name)}`);
                if (filter32 == null)
                  throw new Error(`onLoad() call is missing a filter`);
                let id = nextCallbackID++;
                onLoadCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onLoad.push({ id, filter: filter32.source, namespace: namespace || "" });
              },
              esbuild: streamIn.esbuild
            });
            if (promise)
              yield promise;
            requestPlugins.push(plugin);
          } catch (e) {
            return { ok: false, error: e, pluginName: name };
          }
        }
        requestCallbacks["on-start"] = (id, request) => __async(void 0, null, function* () {
          let response = { errors: [], warnings: [] };
          yield Promise.all(onStartCallbacks.map((_0) => __async(void 0, [_0], function* ({ name, callback, note }) {
            try {
              let result = yield callback();
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onStart() callback in plugin ${quote(name)}`);
                if (errors != null)
                  response.errors.push(...sanitizeMessages(errors, "errors", details, name));
                if (warnings != null)
                  response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name));
              }
            } catch (e) {
              response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
          })));
          sendResponse(id, response);
        });
        requestCallbacks["on-resolve"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onResolveCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                importer: request.importer,
                namespace: request.namespace,
                resolveDir: request.resolveDir,
                kind: request.kind,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let pluginName = getFlag(result, keys22, "pluginName", mustBeString);
                let path = getFlag(result, keys22, "path", mustBeString);
                let namespace = getFlag(result, keys22, "namespace", mustBeString);
                let suffix = getFlag(result, keys22, "suffix", mustBeString);
                let external = getFlag(result, keys22, "external", mustBeBoolean);
                let sideEffects = getFlag(result, keys22, "sideEffects", mustBeBoolean);
                let pluginData = getFlag(result, keys22, "pluginData", canBeAnything);
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys22, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys22, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onResolve() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (path != null)
                  response.path = path;
                if (namespace != null)
                  response.namespace = namespace;
                if (suffix != null)
                  response.suffix = suffix;
                if (external != null)
                  response.external = external;
                if (sideEffects != null)
                  response.sideEffects = sideEffects;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        requestCallbacks["on-load"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onLoadCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                namespace: request.namespace,
                suffix: request.suffix,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let pluginName = getFlag(result, keys22, "pluginName", mustBeString);
                let contents = getFlag(result, keys22, "contents", mustBeStringOrUint8Array);
                let resolveDir = getFlag(result, keys22, "resolveDir", mustBeString);
                let pluginData = getFlag(result, keys22, "pluginData", canBeAnything);
                let loader = getFlag(result, keys22, "loader", mustBeString);
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys22, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys22, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onLoad() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (contents instanceof Uint8Array)
                  response.contents = contents;
                else if (contents != null)
                  response.contents = encodeUTF8(contents);
                if (resolveDir != null)
                  response.resolveDir = resolveDir;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (loader != null)
                  response.loader = loader;
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        let runOnEndCallbacks = /* @__PURE__ */ __name((result, logPluginError, done) => done(), "runOnEndCallbacks");
        if (onEndCallbacks.length > 0) {
          runOnEndCallbacks = /* @__PURE__ */ __name((result, logPluginError, done) => {
            (() => __async(void 0, null, function* () {
              for (const { name, callback, note } of onEndCallbacks) {
                try {
                  yield callback(result);
                } catch (e) {
                  result.errors.push(yield new Promise((resolve) => logPluginError(e, name, note && note(), resolve)));
                }
              }
            }))().then(done);
          }, "runOnEndCallbacks");
        }
        isSetupDone = true;
        return {
          ok: true,
          requestPlugins,
          runOnEndCallbacks
        };
      }), "handlePlugins");
      function createObjectStash() {
        const map22 = /* @__PURE__ */ new Map();
        let nextID = 0;
        return {
          load(id) {
            return map22.get(id);
          },
          store(value) {
            if (value === void 0)
              return -1;
            const id = nextID++;
            map22.set(id, value);
            return id;
          }
        };
      }
      __name(createObjectStash, "createObjectStash");
      function extractCallerV8(e, streamIn, ident) {
        let note;
        let tried = false;
        return () => {
          if (tried)
            return note;
          tried = true;
          try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location2 = parseStackLinesV8(streamIn, lines, ident);
            if (location2) {
              note = { text: e.message, location: location2 };
              return note;
            }
          } catch (e2) {
          }
        };
      }
      __name(extractCallerV8, "extractCallerV8");
      function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
        let text = "Internal error";
        let location2 = null;
        try {
          text = (e && e.message || e) + "";
        } catch (e2) {
        }
        try {
          location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
        } catch (e2) {
        }
        return { id: "", pluginName, text, location: location2, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
      }
      __name(extractErrorMessageV8, "extractErrorMessageV8");
      function parseStackLinesV8(streamIn, lines, ident) {
        let at = "    at ";
        if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            if (!line.startsWith(at))
              continue;
            line = line.slice(at.length);
            while (true) {
              let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^(\S+):(\d+):(\d+)$/.exec(line);
              if (match) {
                let contents;
                try {
                  contents = streamIn.readFileSync(match[1], "utf8");
                } catch (e) {
                  break;
                }
                let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                let column = +match[3] - 1;
                let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                return {
                  file: match[1],
                  namespace: "file",
                  line: +match[2],
                  column: encodeUTF8(lineText.slice(0, column)).length,
                  length: encodeUTF8(lineText.slice(column, column + length)).length,
                  lineText: lineText + "\n" + lines.slice(1).join("\n"),
                  suggestion: ""
                };
              }
              break;
            }
          }
        }
        return null;
      }
      __name(parseStackLinesV8, "parseStackLinesV8");
      function failureErrorWithLog(text, errors, warnings) {
        let limit = 5;
        let summary = errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
          if (i === limit)
            return "\n...";
          if (!e.location)
            return `
error: ${e.text}`;
          let { file, line, column } = e.location;
          let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
          return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
        }).join("");
        let error = new Error(`${text}${summary}`);
        error.errors = errors;
        error.warnings = warnings;
        return error;
      }
      __name(failureErrorWithLog, "failureErrorWithLog");
      function replaceDetailsInMessages(messages, stash) {
        for (const message of messages) {
          message.detail = stash.load(message.detail);
        }
        return messages;
      }
      __name(replaceDetailsInMessages, "replaceDetailsInMessages");
      function sanitizeLocation(location2, where) {
        if (location2 == null)
          return null;
        let keys22 = {};
        let file = getFlag(location2, keys22, "file", mustBeString);
        let namespace = getFlag(location2, keys22, "namespace", mustBeString);
        let line = getFlag(location2, keys22, "line", mustBeInteger);
        let column = getFlag(location2, keys22, "column", mustBeInteger);
        let length = getFlag(location2, keys22, "length", mustBeInteger);
        let lineText = getFlag(location2, keys22, "lineText", mustBeString);
        let suggestion = getFlag(location2, keys22, "suggestion", mustBeString);
        checkForInvalidFlags(location2, keys22, where);
        return {
          file: file || "",
          namespace: namespace || "",
          line: line || 0,
          column: column || 0,
          length: length || 0,
          lineText: lineText || "",
          suggestion: suggestion || ""
        };
      }
      __name(sanitizeLocation, "sanitizeLocation");
      function sanitizeMessages(messages, property, stash, fallbackPluginName) {
        let messagesClone = [];
        let index = 0;
        for (const message of messages) {
          let keys22 = {};
          let id = getFlag(message, keys22, "id", mustBeString);
          let pluginName = getFlag(message, keys22, "pluginName", mustBeString);
          let text = getFlag(message, keys22, "text", mustBeString);
          let location2 = getFlag(message, keys22, "location", mustBeObjectOrNull);
          let notes = getFlag(message, keys22, "notes", mustBeArray);
          let detail = getFlag(message, keys22, "detail", canBeAnything);
          let where = `in element ${index} of "${property}"`;
          checkForInvalidFlags(message, keys22, where);
          let notesClone = [];
          if (notes) {
            for (const note of notes) {
              let noteKeys = {};
              let noteText = getFlag(note, noteKeys, "text", mustBeString);
              let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
              checkForInvalidFlags(note, noteKeys, where);
              notesClone.push({
                text: noteText || "",
                location: sanitizeLocation(noteLocation, where)
              });
            }
          }
          messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location2, where),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
          });
          index++;
        }
        return messagesClone;
      }
      __name(sanitizeMessages, "sanitizeMessages");
      function sanitizeStringArray(values22, property) {
        const result = [];
        for (const value of values22) {
          if (typeof value !== "string")
            throw new Error(`${quote(property)} must be an array of strings`);
          result.push(value);
        }
        return result;
      }
      __name(sanitizeStringArray, "sanitizeStringArray");
      function convertOutputFiles({ path, contents }) {
        let text = null;
        return {
          path,
          contents,
          get text() {
            const binary = this.contents;
            if (text === null || binary !== contents) {
              contents = binary;
              text = decodeUTF8(binary);
            }
            return text;
          }
        };
      }
      __name(convertOutputFiles, "convertOutputFiles");
      var version = "0.16.13";
      var build = /* @__PURE__ */ __name((options) => ensureServiceIsRunning().build(options), "build");
      var serve = /* @__PURE__ */ __name(() => {
        throw new Error(`The "serve" API only works in node`);
      }, "serve");
      var transform2 = /* @__PURE__ */ __name((input, options) => ensureServiceIsRunning().transform(input, options), "transform");
      var formatMessages = /* @__PURE__ */ __name((messages, options) => ensureServiceIsRunning().formatMessages(messages, options), "formatMessages");
      var analyzeMetafile = /* @__PURE__ */ __name((metafile, options) => ensureServiceIsRunning().analyzeMetafile(metafile, options), "analyzeMetafile");
      var buildSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "buildSync" API only works in node`);
      }, "buildSync");
      var transformSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "transformSync" API only works in node`);
      }, "transformSync");
      var formatMessagesSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "formatMessagesSync" API only works in node`);
      }, "formatMessagesSync");
      var analyzeMetafileSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "analyzeMetafileSync" API only works in node`);
      }, "analyzeMetafileSync");
      var initializePromise;
      var longLivedService;
      var ensureServiceIsRunning = /* @__PURE__ */ __name(() => {
        if (longLivedService)
          return longLivedService;
        if (initializePromise)
          throw new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');
        throw new Error('You need to call "initialize" before calling this');
      }, "ensureServiceIsRunning");
      var initialize2 = /* @__PURE__ */ __name((options) => {
        options = validateInitializeOptions(options || {});
        let wasmURL = options.wasmURL;
        let wasmModule = options.wasmModule;
        let useWorker = options.worker !== false;
        if (!wasmURL && !wasmModule)
          throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
        if (initializePromise)
          throw new Error('Cannot call "initialize" more than once');
        initializePromise = startRunningService(wasmURL || "", wasmModule, useWorker);
        initializePromise.catch(() => {
          initializePromise = void 0;
        });
        return initializePromise;
      }, "initialize");
      var startRunningService = /* @__PURE__ */ __name((wasmURL, wasmModule, useWorker) => __async(void 0, null, function* () {
        let worker;
        if (useWorker) {
          let blob = new Blob([`onmessage=${'((postMessage) => {\n      // Copyright 2018 The Go Authors. All rights reserved.\n      // Use of this source code is governed by a BSD-style\n      // license that can be found in the LICENSE file.\n      var __async = (__this, __arguments, generator) => {\n        return new Promise((resolve, reject) => {\n          var fulfilled = (value) => {\n            try {\n              step(generator.next(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var rejected = (value) => {\n            try {\n              step(generator.throw(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n          step((generator = generator.apply(__this, __arguments)).next());\n        });\n      };\n      let onmessage;\n      let globalThis = {};\n      for (let o = self; o; o = Object.getPrototypeOf(o))\n        for (let k of Object.getOwnPropertyNames(o))\n          if (!(k in globalThis))\n            Object.defineProperty(globalThis, k, { get: () => self[k] });\n      "use strict";\n      (() => {\n        const enosys = () => {\n          const err = new Error("not implemented");\n          err.code = "ENOSYS";\n          return err;\n        };\n        if (!globalThis.fs) {\n          let outputBuf = "";\n          globalThis.fs = {\n            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },\n            writeSync(fd, buf) {\n              outputBuf += decoder.decode(buf);\n              const nl = outputBuf.lastIndexOf("\\n");\n              if (nl != -1) {\n                console.log(outputBuf.substr(0, nl));\n                outputBuf = outputBuf.substr(nl + 1);\n              }\n              return buf.length;\n            },\n            write(fd, buf, offset, length, position, callback) {\n              if (offset !== 0 || length !== buf.length || position !== null) {\n                callback(enosys());\n                return;\n              }\n              const n = this.writeSync(fd, buf);\n              callback(null, n);\n            },\n            chmod(path, mode, callback) {\n              callback(enosys());\n            },\n            chown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            close(fd, callback) {\n              callback(enosys());\n            },\n            fchmod(fd, mode, callback) {\n              callback(enosys());\n            },\n            fchown(fd, uid, gid, callback) {\n              callback(enosys());\n            },\n            fstat(fd, callback) {\n              callback(enosys());\n            },\n            fsync(fd, callback) {\n              callback(null);\n            },\n            ftruncate(fd, length, callback) {\n              callback(enosys());\n            },\n            lchown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            link(path, link, callback) {\n              callback(enosys());\n            },\n            lstat(path, callback) {\n              callback(enosys());\n            },\n            mkdir(path, perm, callback) {\n              callback(enosys());\n            },\n            open(path, flags, mode, callback) {\n              callback(enosys());\n            },\n            read(fd, buffer, offset, length, position, callback) {\n              callback(enosys());\n            },\n            readdir(path, callback) {\n              callback(enosys());\n            },\n            readlink(path, callback) {\n              callback(enosys());\n            },\n            rename(from, to, callback) {\n              callback(enosys());\n            },\n            rmdir(path, callback) {\n              callback(enosys());\n            },\n            stat(path, callback) {\n              callback(enosys());\n            },\n            symlink(path, link, callback) {\n              callback(enosys());\n            },\n            truncate(path, length, callback) {\n              callback(enosys());\n            },\n            unlink(path, callback) {\n              callback(enosys());\n            },\n            utimes(path, atime, mtime, callback) {\n              callback(enosys());\n            }\n          };\n        }\n        if (!globalThis.process) {\n          globalThis.process = {\n            getuid() {\n              return -1;\n            },\n            getgid() {\n              return -1;\n            },\n            geteuid() {\n              return -1;\n            },\n            getegid() {\n              return -1;\n            },\n            getgroups() {\n              throw enosys();\n            },\n            pid: -1,\n            ppid: -1,\n            umask() {\n              throw enosys();\n            },\n            cwd() {\n              throw enosys();\n            },\n            chdir() {\n              throw enosys();\n            }\n          };\n        }\n        if (!globalThis.crypto) {\n          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");\n        }\n        if (!globalThis.performance) {\n          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");\n        }\n        if (!globalThis.TextEncoder) {\n          throw new Error("globalThis.TextEncoder is not available, polyfill required");\n        }\n        if (!globalThis.TextDecoder) {\n          throw new Error("globalThis.TextDecoder is not available, polyfill required");\n        }\n        const encoder = new TextEncoder("utf-8");\n        const decoder = new TextDecoder("utf-8");\n        globalThis.Go = class {\n          constructor() {\n            this.argv = ["js"];\n            this.env = {};\n            this.exit = (code) => {\n              if (code !== 0) {\n                console.warn("exit code:", code);\n              }\n            };\n            this._exitPromise = new Promise((resolve) => {\n              this._resolveExitPromise = resolve;\n            });\n            this._pendingEvent = null;\n            this._scheduledTimeouts = /* @__PURE__ */ new Map();\n            this._nextCallbackTimeoutID = 1;\n            const setInt64 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);\n            };\n            const getInt64 = (addr) => {\n              const low = this.mem.getUint32(addr + 0, true);\n              const high = this.mem.getInt32(addr + 4, true);\n              return low + high * 4294967296;\n            };\n            const loadValue = (addr) => {\n              const f = this.mem.getFloat64(addr, true);\n              if (f === 0) {\n                return void 0;\n              }\n              if (!isNaN(f)) {\n                return f;\n              }\n              const id = this.mem.getUint32(addr, true);\n              return this._values[id];\n            };\n            const storeValue = (addr, v) => {\n              const nanHead = 2146959360;\n              if (typeof v === "number" && v !== 0) {\n                if (isNaN(v)) {\n                  this.mem.setUint32(addr + 4, nanHead, true);\n                  this.mem.setUint32(addr, 0, true);\n                  return;\n                }\n                this.mem.setFloat64(addr, v, true);\n                return;\n              }\n              if (v === void 0) {\n                this.mem.setFloat64(addr, 0, true);\n                return;\n              }\n              let id = this._ids.get(v);\n              if (id === void 0) {\n                id = this._idPool.pop();\n                if (id === void 0) {\n                  id = this._values.length;\n                }\n                this._values[id] = v;\n                this._goRefCounts[id] = 0;\n                this._ids.set(v, id);\n              }\n              this._goRefCounts[id]++;\n              let typeFlag = 0;\n              switch (typeof v) {\n                case "object":\n                  if (v !== null) {\n                    typeFlag = 1;\n                  }\n                  break;\n                case "string":\n                  typeFlag = 2;\n                  break;\n                case "symbol":\n                  typeFlag = 3;\n                  break;\n                case "function":\n                  typeFlag = 4;\n                  break;\n              }\n              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);\n              this.mem.setUint32(addr, id, true);\n            };\n            const loadSlice = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return new Uint8Array(this._inst.exports.mem.buffer, array, len);\n            };\n            const loadSliceOfValues = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              const a = new Array(len);\n              for (let i = 0; i < len; i++) {\n                a[i] = loadValue(array + i * 8);\n              }\n              return a;\n            };\n            const loadString = (addr) => {\n              const saddr = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));\n            };\n            const timeOrigin = Date.now() - performance.now();\n            this.importObject = {\n              go: {\n                "runtime.wasmExit": (sp) => {\n                  sp >>>= 0;\n                  const code = this.mem.getInt32(sp + 8, true);\n                  this.exited = true;\n                  delete this._inst;\n                  delete this._values;\n                  delete this._goRefCounts;\n                  delete this._ids;\n                  delete this._idPool;\n                  this.exit(code);\n                },\n                "runtime.wasmWrite": (sp) => {\n                  sp >>>= 0;\n                  const fd = getInt64(sp + 8);\n                  const p = getInt64(sp + 16);\n                  const n = this.mem.getInt32(sp + 24, true);\n                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));\n                },\n                "runtime.resetMemoryDataView": (sp) => {\n                  sp >>>= 0;\n                  this.mem = new DataView(this._inst.exports.mem.buffer);\n                },\n                "runtime.nanotime1": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);\n                },\n                "runtime.walltime": (sp) => {\n                  sp >>>= 0;\n                  const msec = new Date().getTime();\n                  setInt64(sp + 8, msec / 1e3);\n                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);\n                },\n                "runtime.scheduleTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this._nextCallbackTimeoutID;\n                  this._nextCallbackTimeoutID++;\n                  this._scheduledTimeouts.set(id, setTimeout(\n                    () => {\n                      this._resume();\n                      while (this._scheduledTimeouts.has(id)) {\n                        console.warn("scheduleTimeoutEvent: missed timeout event");\n                        this._resume();\n                      }\n                    },\n                    getInt64(sp + 8) + 1\n                  ));\n                  this.mem.setInt32(sp + 16, id, true);\n                },\n                "runtime.clearTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getInt32(sp + 8, true);\n                  clearTimeout(this._scheduledTimeouts.get(id));\n                  this._scheduledTimeouts.delete(id);\n                },\n                "runtime.getRandomData": (sp) => {\n                  sp >>>= 0;\n                  crypto.getRandomValues(loadSlice(sp + 8));\n                },\n                "syscall/js.finalizeRef": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getUint32(sp + 8, true);\n                  this._goRefCounts[id]--;\n                  if (this._goRefCounts[id] === 0) {\n                    const v = this._values[id];\n                    this._values[id] = null;\n                    this._ids.delete(v);\n                    this._idPool.push(id);\n                  }\n                },\n                "syscall/js.stringVal": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, loadString(sp + 8));\n                },\n                "syscall/js.valueGet": (sp) => {\n                  sp >>>= 0;\n                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));\n                  sp = this._inst.exports.getsp() >>> 0;\n                  storeValue(sp + 32, result);\n                },\n                "syscall/js.valueSet": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));\n                },\n                "syscall/js.valueDelete": (sp) => {\n                  sp >>>= 0;\n                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));\n                },\n                "syscall/js.valueIndex": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));\n                },\n                "syscall/js.valueSetIndex": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));\n                },\n                "syscall/js.valueCall": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const m = Reflect.get(v, loadString(sp + 16));\n                    const args = loadSliceOfValues(sp + 32);\n                    const result = Reflect.apply(m, v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, result);\n                    this.mem.setUint8(sp + 64, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, err);\n                    this.mem.setUint8(sp + 64, 0);\n                  }\n                },\n                "syscall/js.valueInvoke": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.apply(v, void 0, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueNew": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.construct(v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueLength": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));\n                },\n                "syscall/js.valuePrepareString": (sp) => {\n                  sp >>>= 0;\n                  const str = encoder.encode(String(loadValue(sp + 8)));\n                  storeValue(sp + 16, str);\n                  setInt64(sp + 24, str.length);\n                },\n                "syscall/js.valueLoadString": (sp) => {\n                  sp >>>= 0;\n                  const str = loadValue(sp + 8);\n                  loadSlice(sp + 16).set(str);\n                },\n                "syscall/js.valueInstanceOf": (sp) => {\n                  sp >>>= 0;\n                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);\n                },\n                "syscall/js.copyBytesToGo": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadSlice(sp + 8);\n                  const src = loadValue(sp + 32);\n                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "syscall/js.copyBytesToJS": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadValue(sp + 8);\n                  const src = loadSlice(sp + 16);\n                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "debug": (value) => {\n                  console.log(value);\n                }\n              }\n            };\n          }\n          run(instance) {\n            return __async(this, null, function* () {\n              if (!(instance instanceof WebAssembly.Instance)) {\n                throw new Error("Go.run: WebAssembly.Instance expected");\n              }\n              this._inst = instance;\n              this.mem = new DataView(this._inst.exports.mem.buffer);\n              this._values = [\n                NaN,\n                0,\n                null,\n                true,\n                false,\n                globalThis,\n                this\n              ];\n              this._goRefCounts = new Array(this._values.length).fill(Infinity);\n              this._ids = /* @__PURE__ */ new Map([\n                [0, 1],\n                [null, 2],\n                [true, 3],\n                [false, 4],\n                [globalThis, 5],\n                [this, 6]\n              ]);\n              this._idPool = [];\n              this.exited = false;\n              let offset = 4096;\n              const strPtr = (str) => {\n                const ptr = offset;\n                const bytes = encoder.encode(str + "\\0");\n                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);\n                offset += bytes.length;\n                if (offset % 8 !== 0) {\n                  offset += 8 - offset % 8;\n                }\n                return ptr;\n              };\n              const argc = this.argv.length;\n              const argvPtrs = [];\n              this.argv.forEach((arg) => {\n                argvPtrs.push(strPtr(arg));\n              });\n              argvPtrs.push(0);\n              const keys = Object.keys(this.env).sort();\n              keys.forEach((key) => {\n                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));\n              });\n              argvPtrs.push(0);\n              const argv = offset;\n              argvPtrs.forEach((ptr) => {\n                this.mem.setUint32(offset, ptr, true);\n                this.mem.setUint32(offset + 4, 0, true);\n                offset += 8;\n              });\n              const wasmMinDataAddr = 4096 + 8192;\n              if (offset >= wasmMinDataAddr) {\n                throw new Error("total length of command line and environment variables exceeds limit");\n              }\n              this._inst.exports.run(argc, argv);\n              if (this.exited) {\n                this._resolveExitPromise();\n              }\n              yield this._exitPromise;\n            });\n          }\n          _resume() {\n            if (this.exited) {\n              throw new Error("Go program has already exited");\n            }\n            this._inst.exports.resume();\n            if (this.exited) {\n              this._resolveExitPromise();\n            }\n          }\n          _makeFuncWrapper(id) {\n            const go = this;\n            return function() {\n              const event = { id, this: this, args: arguments };\n              go._pendingEvent = event;\n              go._resume();\n              return event.result;\n            };\n          }\n        };\n      })();\n      onmessage = ({ data: wasm }) => {\n        let decoder = new TextDecoder();\n        let fs = globalThis.fs;\n        let stderr = "";\n        fs.writeSync = (fd, buffer) => {\n          if (fd === 1) {\n            postMessage(buffer);\n          } else if (fd === 2) {\n            stderr += decoder.decode(buffer);\n            let parts = stderr.split("\\n");\n            if (parts.length > 1)\n              console.log(parts.slice(0, -1).join("\\n"));\n            stderr = parts[parts.length - 1];\n          } else {\n            throw new Error("Bad write");\n          }\n          return buffer.length;\n        };\n        let stdin = [];\n        let resumeStdin;\n        let stdinPos = 0;\n        onmessage = ({ data }) => {\n          if (data.length > 0) {\n            stdin.push(data);\n            if (resumeStdin)\n              resumeStdin();\n          }\n        };\n        fs.read = (fd, buffer, offset, length, position, callback) => {\n          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {\n            throw new Error("Bad read");\n          }\n          if (stdin.length === 0) {\n            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);\n            return;\n          }\n          let first = stdin[0];\n          let count = Math.max(0, Math.min(length, first.length - stdinPos));\n          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);\n          stdinPos += count;\n          if (stdinPos === first.length) {\n            stdin.shift();\n            stdinPos = 0;\n          }\n          callback(null, count);\n        };\n        let go = new globalThis.Go();\n        go.argv = ["", `--service=${"0.16.13"}`];\n        tryToInstantiateModule(wasm, go).then(\n          (instance) => {\n            postMessage(null);\n            go.run(instance);\n          },\n          (error) => {\n            postMessage(error);\n          }\n        );\n      };\n      function tryToInstantiateModule(wasm, go) {\n        return __async(this, null, function* () {\n          if (wasm instanceof WebAssembly.Module) {\n            return WebAssembly.instantiate(wasm, go.importObject);\n          }\n          const res = yield fetch(wasm);\n          if (!res.ok)\n            throw new Error(`Failed to download ${JSON.stringify(wasm)}`);\n          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {\n            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);\n            return result2.instance;\n          }\n          const bytes = yield res.arrayBuffer();\n          const result = yield WebAssembly.instantiate(bytes, go.importObject);\n          return result.instance;\n        });\n      }\n      return (m) => onmessage(m);\n    })'}(postMessage)`], { type: "text/javascript" });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          let onmessage = ((postMessage) => {
            var __async2 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
              return new Promise((resolve, reject) => {
                var fulfilled = /* @__PURE__ */ __name((value) => {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "fulfilled");
                var rejected = /* @__PURE__ */ __name((value) => {
                  try {
                    step(generator.throw(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "rejected");
                var step = /* @__PURE__ */ __name((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
                step((generator = generator.apply(__this, __arguments)).next());
              });
            }, "__async");
            let onmessage2;
            let globalThis2 = {};
            for (let o = self; o; o = Object.getPrototypeOf(o))
              for (let k of Object.getOwnPropertyNames(o))
                if (!(k in globalThis2))
                  Object.defineProperty(globalThis2, k, { get: () => self[k] });
            "use strict";
            (() => {
              const enosys = /* @__PURE__ */ __name(() => {
                const err = new Error("not implemented");
                err.code = "ENOSYS";
                return err;
              }, "enosys");
              if (!globalThis2.fs) {
                let outputBuf = "";
                globalThis2.fs = {
                  constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                  writeSync(fd, buf) {
                    outputBuf += decoder.decode(buf);
                    const nl = outputBuf.lastIndexOf("\n");
                    if (nl != -1) {
                      console.log(outputBuf.substr(0, nl));
                      outputBuf = outputBuf.substr(nl + 1);
                    }
                    return buf.length;
                  },
                  write(fd, buf, offset, length, position, callback) {
                    if (offset !== 0 || length !== buf.length || position !== null) {
                      callback(enosys());
                      return;
                    }
                    const n = this.writeSync(fd, buf);
                    callback(null, n);
                  },
                  chmod(path, mode, callback) {
                    callback(enosys());
                  },
                  chown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  close(fd, callback) {
                    callback(enosys());
                  },
                  fchmod(fd, mode, callback) {
                    callback(enosys());
                  },
                  fchown(fd, uid, gid, callback) {
                    callback(enosys());
                  },
                  fstat(fd, callback) {
                    callback(enosys());
                  },
                  fsync(fd, callback) {
                    callback(null);
                  },
                  ftruncate(fd, length, callback) {
                    callback(enosys());
                  },
                  lchown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  link(path, link, callback) {
                    callback(enosys());
                  },
                  lstat(path, callback) {
                    callback(enosys());
                  },
                  mkdir(path, perm, callback) {
                    callback(enosys());
                  },
                  open(path, flags, mode, callback) {
                    callback(enosys());
                  },
                  read(fd, buffer, offset, length, position, callback) {
                    callback(enosys());
                  },
                  readdir(path, callback) {
                    callback(enosys());
                  },
                  readlink(path, callback) {
                    callback(enosys());
                  },
                  rename(from, to, callback) {
                    callback(enosys());
                  },
                  rmdir(path, callback) {
                    callback(enosys());
                  },
                  stat(path, callback) {
                    callback(enosys());
                  },
                  symlink(path, link, callback) {
                    callback(enosys());
                  },
                  truncate(path, length, callback) {
                    callback(enosys());
                  },
                  unlink(path, callback) {
                    callback(enosys());
                  },
                  utimes(path, atime, mtime, callback) {
                    callback(enosys());
                  }
                };
              }
              if (!globalThis2.process) {
                globalThis2.process = {
                  getuid() {
                    return -1;
                  },
                  getgid() {
                    return -1;
                  },
                  geteuid() {
                    return -1;
                  },
                  getegid() {
                    return -1;
                  },
                  getgroups() {
                    throw enosys();
                  },
                  pid: -1,
                  ppid: -1,
                  umask() {
                    throw enosys();
                  },
                  cwd() {
                    throw enosys();
                  },
                  chdir() {
                    throw enosys();
                  }
                };
              }
              if (!globalThis2.crypto) {
                throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
              }
              if (!globalThis2.performance) {
                throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
              }
              if (!globalThis2.TextEncoder) {
                throw new Error("globalThis.TextEncoder is not available, polyfill required");
              }
              if (!globalThis2.TextDecoder) {
                throw new Error("globalThis.TextDecoder is not available, polyfill required");
              }
              const encoder = new TextEncoder("utf-8");
              const decoder = new TextDecoder("utf-8");
              globalThis2.Go = class {
                constructor() {
                  this.argv = ["js"];
                  this.env = {};
                  this.exit = (code) => {
                    if (code !== 0) {
                      console.warn("exit code:", code);
                    }
                  };
                  this._exitPromise = new Promise((resolve) => {
                    this._resolveExitPromise = resolve;
                  });
                  this._pendingEvent = null;
                  this._scheduledTimeouts = /* @__PURE__ */ new Map();
                  this._nextCallbackTimeoutID = 1;
                  const setInt64 = /* @__PURE__ */ __name((addr, v) => {
                    this.mem.setUint32(addr + 0, v, true);
                    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
                  }, "setInt64");
                  const getInt64 = /* @__PURE__ */ __name((addr) => {
                    const low = this.mem.getUint32(addr + 0, true);
                    const high = this.mem.getInt32(addr + 4, true);
                    return low + high * 4294967296;
                  }, "getInt64");
                  const loadValue = /* @__PURE__ */ __name((addr) => {
                    const f = this.mem.getFloat64(addr, true);
                    if (f === 0) {
                      return void 0;
                    }
                    if (!isNaN(f)) {
                      return f;
                    }
                    const id = this.mem.getUint32(addr, true);
                    return this._values[id];
                  }, "loadValue");
                  const storeValue = /* @__PURE__ */ __name((addr, v) => {
                    const nanHead = 2146959360;
                    if (typeof v === "number" && v !== 0) {
                      if (isNaN(v)) {
                        this.mem.setUint32(addr + 4, nanHead, true);
                        this.mem.setUint32(addr, 0, true);
                        return;
                      }
                      this.mem.setFloat64(addr, v, true);
                      return;
                    }
                    if (v === void 0) {
                      this.mem.setFloat64(addr, 0, true);
                      return;
                    }
                    let id = this._ids.get(v);
                    if (id === void 0) {
                      id = this._idPool.pop();
                      if (id === void 0) {
                        id = this._values.length;
                      }
                      this._values[id] = v;
                      this._goRefCounts[id] = 0;
                      this._ids.set(v, id);
                    }
                    this._goRefCounts[id]++;
                    let typeFlag = 0;
                    switch (typeof v) {
                      case "object":
                        if (v !== null) {
                          typeFlag = 1;
                        }
                        break;
                      case "string":
                        typeFlag = 2;
                        break;
                      case "symbol":
                        typeFlag = 3;
                        break;
                      case "function":
                        typeFlag = 4;
                        break;
                    }
                    this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
                    this.mem.setUint32(addr, id, true);
                  }, "storeValue");
                  const loadSlice = /* @__PURE__ */ __name((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return new Uint8Array(this._inst.exports.mem.buffer, array, len);
                  }, "loadSlice");
                  const loadSliceOfValues = /* @__PURE__ */ __name((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    const a = new Array(len);
                    for (let i = 0; i < len; i++) {
                      a[i] = loadValue(array + i * 8);
                    }
                    return a;
                  }, "loadSliceOfValues");
                  const loadString = /* @__PURE__ */ __name((addr) => {
                    const saddr = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
                  }, "loadString");
                  const timeOrigin = Date.now() - performance.now();
                  this.importObject = {
                    go: {
                      "runtime.wasmExit": (sp) => {
                        sp >>>= 0;
                        const code = this.mem.getInt32(sp + 8, true);
                        this.exited = true;
                        delete this._inst;
                        delete this._values;
                        delete this._goRefCounts;
                        delete this._ids;
                        delete this._idPool;
                        this.exit(code);
                      },
                      "runtime.wasmWrite": (sp) => {
                        sp >>>= 0;
                        const fd = getInt64(sp + 8);
                        const p = getInt64(sp + 16);
                        const n = this.mem.getInt32(sp + 24, true);
                        globalThis2.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                      },
                      "runtime.resetMemoryDataView": (sp) => {
                        sp >>>= 0;
                        this.mem = new DataView(this._inst.exports.mem.buffer);
                      },
                      "runtime.nanotime1": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                      },
                      "runtime.walltime": (sp) => {
                        sp >>>= 0;
                        const msec = new Date().getTime();
                        setInt64(sp + 8, msec / 1e3);
                        this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                      },
                      "runtime.scheduleTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this._nextCallbackTimeoutID;
                        this._nextCallbackTimeoutID++;
                        this._scheduledTimeouts.set(id, setTimeout(
                          () => {
                            this._resume();
                            while (this._scheduledTimeouts.has(id)) {
                              console.warn("scheduleTimeoutEvent: missed timeout event");
                              this._resume();
                            }
                          },
                          getInt64(sp + 8) + 1
                        ));
                        this.mem.setInt32(sp + 16, id, true);
                      },
                      "runtime.clearTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getInt32(sp + 8, true);
                        clearTimeout(this._scheduledTimeouts.get(id));
                        this._scheduledTimeouts.delete(id);
                      },
                      "runtime.getRandomData": (sp) => {
                        sp >>>= 0;
                        crypto.getRandomValues(loadSlice(sp + 8));
                      },
                      "syscall/js.finalizeRef": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getUint32(sp + 8, true);
                        this._goRefCounts[id]--;
                        if (this._goRefCounts[id] === 0) {
                          const v = this._values[id];
                          this._values[id] = null;
                          this._ids.delete(v);
                          this._idPool.push(id);
                        }
                      },
                      "syscall/js.stringVal": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, loadString(sp + 8));
                      },
                      "syscall/js.valueGet": (sp) => {
                        sp >>>= 0;
                        const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                        sp = this._inst.exports.getsp() >>> 0;
                        storeValue(sp + 32, result);
                      },
                      "syscall/js.valueSet": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                      },
                      "syscall/js.valueDelete": (sp) => {
                        sp >>>= 0;
                        Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                      },
                      "syscall/js.valueIndex": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                      },
                      "syscall/js.valueSetIndex": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                      },
                      "syscall/js.valueCall": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const m = Reflect.get(v, loadString(sp + 16));
                          const args = loadSliceOfValues(sp + 32);
                          const result = Reflect.apply(m, v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, result);
                          this.mem.setUint8(sp + 64, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, err);
                          this.mem.setUint8(sp + 64, 0);
                        }
                      },
                      "syscall/js.valueInvoke": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.apply(v, void 0, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueNew": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.construct(v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueLength": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                      },
                      "syscall/js.valuePrepareString": (sp) => {
                        sp >>>= 0;
                        const str = encoder.encode(String(loadValue(sp + 8)));
                        storeValue(sp + 16, str);
                        setInt64(sp + 24, str.length);
                      },
                      "syscall/js.valueLoadString": (sp) => {
                        sp >>>= 0;
                        const str = loadValue(sp + 8);
                        loadSlice(sp + 16).set(str);
                      },
                      "syscall/js.valueInstanceOf": (sp) => {
                        sp >>>= 0;
                        this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                      },
                      "syscall/js.copyBytesToGo": (sp) => {
                        sp >>>= 0;
                        const dst = loadSlice(sp + 8);
                        const src = loadValue(sp + 32);
                        if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "syscall/js.copyBytesToJS": (sp) => {
                        sp >>>= 0;
                        const dst = loadValue(sp + 8);
                        const src = loadSlice(sp + 16);
                        if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "debug": (value) => {
                        console.log(value);
                      }
                    }
                  };
                }
                run(instance) {
                  return __async2(this, null, function* () {
                    if (!(instance instanceof WebAssembly.Instance)) {
                      throw new Error("Go.run: WebAssembly.Instance expected");
                    }
                    this._inst = instance;
                    this.mem = new DataView(this._inst.exports.mem.buffer);
                    this._values = [
                      NaN,
                      0,
                      null,
                      true,
                      false,
                      globalThis2,
                      this
                    ];
                    this._goRefCounts = new Array(this._values.length).fill(Infinity);
                    this._ids = /* @__PURE__ */ new Map([
                      [0, 1],
                      [null, 2],
                      [true, 3],
                      [false, 4],
                      [globalThis2, 5],
                      [this, 6]
                    ]);
                    this._idPool = [];
                    this.exited = false;
                    let offset = 4096;
                    const strPtr = /* @__PURE__ */ __name((str) => {
                      const ptr = offset;
                      const bytes = encoder.encode(str + "\0");
                      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                      offset += bytes.length;
                      if (offset % 8 !== 0) {
                        offset += 8 - offset % 8;
                      }
                      return ptr;
                    }, "strPtr");
                    const argc = this.argv.length;
                    const argvPtrs = [];
                    this.argv.forEach((arg) => {
                      argvPtrs.push(strPtr(arg));
                    });
                    argvPtrs.push(0);
                    const keys22 = Object.keys(this.env).sort();
                    keys22.forEach((key) => {
                      argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
                    });
                    argvPtrs.push(0);
                    const argv = offset;
                    argvPtrs.forEach((ptr) => {
                      this.mem.setUint32(offset, ptr, true);
                      this.mem.setUint32(offset + 4, 0, true);
                      offset += 8;
                    });
                    const wasmMinDataAddr = 4096 + 8192;
                    if (offset >= wasmMinDataAddr) {
                      throw new Error("total length of command line and environment variables exceeds limit");
                    }
                    this._inst.exports.run(argc, argv);
                    if (this.exited) {
                      this._resolveExitPromise();
                    }
                    yield this._exitPromise;
                  });
                }
                _resume() {
                  if (this.exited) {
                    throw new Error("Go program has already exited");
                  }
                  this._inst.exports.resume();
                  if (this.exited) {
                    this._resolveExitPromise();
                  }
                }
                _makeFuncWrapper(id) {
                  const go = this;
                  return function() {
                    const event = { id, this: this, args: arguments };
                    go._pendingEvent = event;
                    go._resume();
                    return event.result;
                  };
                }
              };
            })();
            onmessage2 = /* @__PURE__ */ __name(({ data: wasm }) => {
              let decoder = new TextDecoder();
              let fs = globalThis2.fs;
              let stderr = "";
              fs.writeSync = (fd, buffer) => {
                if (fd === 1) {
                  postMessage(buffer);
                } else if (fd === 2) {
                  stderr += decoder.decode(buffer);
                  let parts = stderr.split("\n");
                  if (parts.length > 1)
                    console.log(parts.slice(0, -1).join("\n"));
                  stderr = parts[parts.length - 1];
                } else {
                  throw new Error("Bad write");
                }
                return buffer.length;
              };
              let stdin = [];
              let resumeStdin;
              let stdinPos = 0;
              onmessage2 = /* @__PURE__ */ __name(({ data }) => {
                if (data.length > 0) {
                  stdin.push(data);
                  if (resumeStdin)
                    resumeStdin();
                }
              }, "onmessage");
              fs.read = (fd, buffer, offset, length, position, callback) => {
                if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
                  throw new Error("Bad read");
                }
                if (stdin.length === 0) {
                  resumeStdin = /* @__PURE__ */ __name(() => fs.read(fd, buffer, offset, length, position, callback), "resumeStdin");
                  return;
                }
                let first32 = stdin[0];
                let count22 = Math.max(0, Math.min(length, first32.length - stdinPos));
                buffer.set(first32.subarray(stdinPos, stdinPos + count22), offset);
                stdinPos += count22;
                if (stdinPos === first32.length) {
                  stdin.shift();
                  stdinPos = 0;
                }
                callback(null, count22);
              };
              let go = new globalThis2.Go();
              go.argv = ["", `--service=${"0.16.13"}`];
              tryToInstantiateModule(wasm, go).then(
                (instance) => {
                  postMessage(null);
                  go.run(instance);
                },
                (error) => {
                  postMessage(error);
                }
              );
            }, "onmessage");
            function tryToInstantiateModule(wasm, go) {
              return __async2(this, null, function* () {
                if (wasm instanceof WebAssembly.Module) {
                  return WebAssembly.instantiate(wasm, go.importObject);
                }
                const res = yield fetch(wasm);
                if (!res.ok)
                  throw new Error(`Failed to download ${JSON.stringify(wasm)}`);
                if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
                  const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
                  return result2.instance;
                }
                const bytes = yield res.arrayBuffer();
                const result = yield WebAssembly.instantiate(bytes, go.importObject);
                return result.instance;
              });
            }
            __name(tryToInstantiateModule, "tryToInstantiateModule");
            return (m) => onmessage2(m);
          })((data) => worker.onmessage({ data }));
          worker = {
            onmessage: null,
            postMessage: (data) => setTimeout(() => onmessage({ data })),
            terminate() {
            }
          };
        }
        let firstMessageResolve;
        let firstMessageReject;
        const firstMessagePromise = new Promise((resolve, reject) => {
          firstMessageResolve = resolve;
          firstMessageReject = reject;
        });
        worker.onmessage = ({ data: error }) => {
          worker.onmessage = ({ data }) => readFromStdout(data);
          if (error)
            firstMessageReject(error);
          else
            firstMessageResolve();
        };
        worker.postMessage(wasmModule || new URL(wasmURL, location.href).toString());
        let { readFromStdout, service } = createChannel({
          writeToStdin(bytes) {
            worker.postMessage(bytes);
          },
          isSync: false,
          isWriteUnavailable: true,
          esbuild: browser_exports
        });
        yield firstMessagePromise;
        longLivedService = {
          build: (options) => new Promise((resolve, reject) => service.buildOrServe({
            callName: "build",
            refs: null,
            serveOptions: null,
            options,
            isTTY: false,
            defaultWD: "/",
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          transform: (input, options) => new Promise((resolve, reject) => service.transform({
            callName: "transform",
            refs: null,
            input,
            options: options || {},
            isTTY: false,
            fs: {
              readFile(_, callback) {
                callback(new Error("Internal error"), null);
              },
              writeFile(_, callback) {
                callback(null);
              }
            },
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
            callName: "formatMessages",
            refs: null,
            messages,
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
            callName: "analyzeMetafile",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          }))
        };
      }), "startRunningService");
      var browser_default = browser_exports;
    })(typeof module === "object" ? module : { set exports(x) {
      (typeof self !== "undefined" ? self : this).esbuild = x;
    } });
  }
});
init_define_process();
init_define_process();
var DELETE = "delete";
var SHIFT = 5;
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;
var NOT_SET = {};
function MakeRef() {
  return { value: false };
}
__name(MakeRef, "MakeRef");
function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}
__name(SetRef, "SetRef");
function OwnerID() {
}
__name(OwnerID, "OwnerID");
function ensureSize(iter) {
  if (iter.size === void 0) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}
__name(ensureSize, "ensureSize");
function wrapIndex(iter, index) {
  if (typeof index !== "number") {
    var uint32Index = index >>> 0;
    if ("" + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}
__name(wrapIndex, "wrapIndex");
function returnTrue() {
  return true;
}
__name(returnTrue, "returnTrue");
function wholeSlice(begin, end, size) {
  return (begin === 0 && !isNeg(begin) || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
}
__name(wholeSlice, "wholeSlice");
function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}
__name(resolveBegin, "resolveBegin");
function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}
__name(resolveEnd, "resolveEnd");
function resolveIndex(index, size, defaultIndex) {
  return index === void 0 ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
}
__name(resolveIndex, "resolveIndex");
function isNeg(value) {
  return value < 0 || value === 0 && 1 / value === -Infinity;
}
__name(isNeg, "isNeg");
var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}
__name(isCollection, "isCollection");
var IS_KEYED_SYMBOL = "@@__IMMUTABLE_KEYED__@@";
function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}
__name(isKeyed, "isKeyed");
var IS_INDEXED_SYMBOL = "@@__IMMUTABLE_INDEXED__@@";
function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}
__name(isIndexed, "isIndexed");
function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}
__name(isAssociative, "isAssociative");
var Collection = /* @__PURE__ */ __name(function Collection2(value) {
  return isCollection(value) ? value : Seq(value);
}, "Collection");
var KeyedCollection = /* @__PURE__ */ function(Collection32) {
  function KeyedCollection22(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }
  __name(KeyedCollection22, "KeyedCollection");
  if (Collection32)
    KeyedCollection22.__proto__ = Collection32;
  KeyedCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  KeyedCollection22.prototype.constructor = KeyedCollection22;
  return KeyedCollection22;
}(Collection);
var IndexedCollection = /* @__PURE__ */ function(Collection32) {
  function IndexedCollection22(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }
  __name(IndexedCollection22, "IndexedCollection");
  if (Collection32)
    IndexedCollection22.__proto__ = Collection32;
  IndexedCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  IndexedCollection22.prototype.constructor = IndexedCollection22;
  return IndexedCollection22;
}(Collection);
var SetCollection = /* @__PURE__ */ function(Collection32) {
  function SetCollection22(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }
  __name(SetCollection22, "SetCollection");
  if (Collection32)
    SetCollection22.__proto__ = Collection32;
  SetCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  SetCollection22.prototype.constructor = SetCollection22;
  return SetCollection22;
}(Collection);
Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;
var IS_SEQ_SYMBOL = "@@__IMMUTABLE_SEQ__@@";
function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}
__name(isSeq, "isSeq");
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}
__name(isRecord, "isRecord");
function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}
__name(isImmutable, "isImmutable");
var IS_ORDERED_SYMBOL = "@@__IMMUTABLE_ORDERED__@@";
function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}
__name(isOrdered, "isOrdered");
var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;
var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = "@@iterator";
var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
var Iterator = /* @__PURE__ */ __name(function Iterator2(next) {
  this.next = next;
}, "Iterator");
Iterator.prototype.toString = /* @__PURE__ */ __name(function toString() {
  return "[Iterator]";
}, "toString");
Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;
Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};
function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult ? iteratorResult.value = value : iteratorResult = {
    value,
    done: false
  };
  return iteratorResult;
}
__name(iteratorValue, "iteratorValue");
function iteratorDone() {
  return { value: void 0, done: true };
}
__name(iteratorDone, "iteratorDone");
function hasIterator(maybeIterable) {
  if (Array.isArray(maybeIterable)) {
    return true;
  }
  return !!getIteratorFn(maybeIterable);
}
__name(hasIterator, "hasIterator");
function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === "function";
}
__name(isIterator, "isIterator");
function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}
__name(getIterator, "getIterator");
function getIteratorFn(iterable) {
  var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === "function") {
    return iteratorFn;
  }
}
__name(getIteratorFn, "getIteratorFn");
function isEntriesIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.entries;
}
__name(isEntriesIterable, "isEntriesIterable");
function isKeysIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.keys;
}
__name(isKeysIterable, "isKeysIterable");
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === "string") {
    return true;
  }
  return value && typeof value === "object" && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? Object.keys(value).length === 1 : value.hasOwnProperty(value.length - 1));
}
__name(isArrayLike, "isArrayLike");
var Seq = /* @__PURE__ */ function(Collection32) {
  function Seq22(value) {
    return value === void 0 || value === null ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
  }
  __name(Seq22, "Seq");
  if (Collection32)
    Seq22.__proto__ = Collection32;
  Seq22.prototype = Object.create(Collection32 && Collection32.prototype);
  Seq22.prototype.constructor = Seq22;
  Seq22.prototype.toSeq = /* @__PURE__ */ __name(function toSeq32() {
    return this;
  }, "toSeq");
  Seq22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("Seq {", "}");
  }, "toString");
  Seq22.prototype.cacheResult = /* @__PURE__ */ __name(function cacheResult() {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  }, "cacheResult");
  Seq22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse32 ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse32);
  }, "__iterate");
  Seq22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function() {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse32 ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse32);
  }, "__iterator");
  return Seq22;
}(Collection);
var KeyedSeq = /* @__PURE__ */ function(Seq22) {
  function KeyedSeq22(value) {
    return value === void 0 || value === null ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
  }
  __name(KeyedSeq22, "KeyedSeq");
  if (Seq22)
    KeyedSeq22.__proto__ = Seq22;
  KeyedSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  KeyedSeq22.prototype.constructor = KeyedSeq22;
  KeyedSeq22.prototype.toKeyedSeq = /* @__PURE__ */ __name(function toKeyedSeq32() {
    return this;
  }, "toKeyedSeq");
  return KeyedSeq22;
}(Seq);
var IndexedSeq = /* @__PURE__ */ function(Seq22) {
  function IndexedSeq22(value) {
    return value === void 0 || value === null ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
  }
  __name(IndexedSeq22, "IndexedSeq");
  if (Seq22)
    IndexedSeq22.__proto__ = Seq22;
  IndexedSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  IndexedSeq22.prototype.constructor = IndexedSeq22;
  IndexedSeq22.of = /* @__PURE__ */ __name(function of() {
    return IndexedSeq22(arguments);
  }, "of");
  IndexedSeq22.prototype.toIndexedSeq = /* @__PURE__ */ __name(function toIndexedSeq22() {
    return this;
  }, "toIndexedSeq");
  IndexedSeq22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("Seq [", "]");
  }, "toString");
  return IndexedSeq22;
}(Seq);
var SetSeq = /* @__PURE__ */ function(Seq22) {
  function SetSeq22(value) {
    return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
  }
  __name(SetSeq22, "SetSeq");
  if (Seq22)
    SetSeq22.__proto__ = Seq22;
  SetSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  SetSeq22.prototype.constructor = SetSeq22;
  SetSeq22.of = /* @__PURE__ */ __name(function of() {
    return SetSeq22(arguments);
  }, "of");
  SetSeq22.prototype.toSetSeq = /* @__PURE__ */ __name(function toSetSeq22() {
    return this;
  }, "toSetSeq");
  return SetSeq22;
}(Seq);
Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;
Seq.prototype[IS_SEQ_SYMBOL] = true;
var ArraySeq = /* @__PURE__ */ function(IndexedSeq22) {
  function ArraySeq22(array) {
    this._array = array;
    this.size = array.length;
  }
  __name(ArraySeq22, "ArraySeq");
  if (IndexedSeq22)
    ArraySeq22.__proto__ = IndexedSeq22;
  ArraySeq22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  ArraySeq22.prototype.constructor = ArraySeq22;
  ArraySeq22.prototype.get = /* @__PURE__ */ __name(function get112(index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  }, "get");
  ArraySeq22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse32 ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  }, "__iterate");
  ArraySeq22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function() {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse32 ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  }, "__iterator");
  return ArraySeq22;
}(IndexedSeq);
var ObjectSeq = /* @__PURE__ */ function(KeyedSeq22) {
  function ObjectSeq22(object) {
    var keys22 = Object.keys(object).concat(
      Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : []
    );
    this._object = object;
    this._keys = keys22;
    this.size = keys22.length;
  }
  __name(ObjectSeq22, "ObjectSeq");
  if (KeyedSeq22)
    ObjectSeq22.__proto__ = KeyedSeq22;
  ObjectSeq22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  ObjectSeq22.prototype.constructor = ObjectSeq22;
  ObjectSeq22.prototype.get = /* @__PURE__ */ __name(function get112(key, notSetValue) {
    if (notSetValue !== void 0 && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  }, "get");
  ObjectSeq22.prototype.has = /* @__PURE__ */ __name(function has52(key) {
    return hasOwnProperty.call(this._object, key);
  }, "has");
  ObjectSeq22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var object = this._object;
    var keys22 = this._keys;
    var size = keys22.length;
    var i = 0;
    while (i !== size) {
      var key = keys22[reverse32 ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  }, "__iterate");
  ObjectSeq22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var object = this._object;
    var keys22 = this._keys;
    var size = keys22.length;
    var i = 0;
    return new Iterator(function() {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys22[reverse32 ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  }, "__iterator");
  return ObjectSeq22;
}(KeyedSeq);
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
var CollectionSeq = /* @__PURE__ */ function(IndexedSeq22) {
  function CollectionSeq22(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }
  __name(CollectionSeq22, "CollectionSeq");
  if (IndexedSeq22)
    CollectionSeq22.__proto__ = IndexedSeq22;
  CollectionSeq22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  CollectionSeq22.prototype.constructor = CollectionSeq22;
  CollectionSeq22.prototype.__iterateUncached = /* @__PURE__ */ __name(function __iterateUncached(fn, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  }, "__iterateUncached");
  CollectionSeq22.prototype.__iteratorUncached = /* @__PURE__ */ __name(function __iteratorUncached(type, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  }, "__iteratorUncached");
  return CollectionSeq22;
}(IndexedSeq);
var EMPTY_SEQ;
function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}
__name(emptySequence, "emptySequence");
function keyedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === "object") {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    "Expected Array or collection object of [k, v] entries, or keyed object: " + value
  );
}
__name(keyedSeqFromValue, "keyedSeqFromValue");
function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    "Expected Array or collection object of values: " + value
  );
}
__name(indexedSeqFromValue, "indexedSeqFromValue");
function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return isEntriesIterable(value) ? seq.fromEntrySeq() : isKeysIterable(value) ? seq.toSetSeq() : seq;
  }
  if (typeof value === "object") {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    "Expected Array or collection object of values, or keyed object: " + value
  );
}
__name(seqFromValue, "seqFromValue");
function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : void 0;
}
__name(maybeIndexedSeqFromValue, "maybeIndexedSeqFromValue");
var IS_MAP_SYMBOL = "@@__IMMUTABLE_MAP__@@";
function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}
__name(isMap, "isMap");
function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}
__name(isOrderedMap, "isOrderedMap");
function isValueObject(maybeValue) {
  return Boolean(
    maybeValue && typeof maybeValue.equals === "function" && typeof maybeValue.hashCode === "function"
  );
}
__name(isValueObject, "isValueObject");
function is(valueA, valueB) {
  if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
}
__name(is, "is");
var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : /* @__PURE__ */ __name(function imul2(a, b) {
  a |= 0;
  b |= 0;
  var c = a & 65535;
  var d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
}, "imul");
function smi(i32) {
  return i32 >>> 1 & 1073741824 | i32 & 3221225471;
}
__name(smi, "smi");
var defaultValueOf = Object.prototype.valueOf;
function hash(o) {
  if (o == null) {
    return hashNullish(o);
  }
  if (typeof o.hashCode === "function") {
    return smi(o.hashCode(o));
  }
  var v = valueOf(o);
  if (v == null) {
    return hashNullish(v);
  }
  switch (typeof v) {
    case "boolean":
      return v ? 1108378657 : 1108378656;
    case "number":
      return hashNumber(v);
    case "string":
      return v.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(v) : hashString(v);
    case "object":
    case "function":
      return hashJSObj(v);
    case "symbol":
      return hashSymbol(v);
    default:
      if (typeof v.toString === "function") {
        return hashString(v.toString());
      }
      throw new Error("Value type " + typeof v + " cannot be hashed.");
  }
}
__name(hash, "hash");
function hashNullish(nullish) {
  return nullish === null ? 1108378658 : 1108378659;
}
__name(hashNullish, "hashNullish");
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash22 = n | 0;
  if (hash22 !== n) {
    hash22 ^= n * 4294967295;
  }
  while (n > 4294967295) {
    n /= 4294967295;
    hash22 ^= n;
  }
  return smi(hash22);
}
__name(hashNumber, "hashNumber");
function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === void 0) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}
__name(cachedHashString, "cachedHashString");
function hashString(string) {
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = 31 * hashed + string.charCodeAt(ii) | 0;
  }
  return smi(hashed);
}
__name(hashString, "hashString");
function hashSymbol(sym) {
  var hashed = symbolMap[sym];
  if (hashed !== void 0) {
    return hashed;
  }
  hashed = nextHash();
  symbolMap[sym] = hashed;
  return hashed;
}
__name(hashSymbol, "hashSymbol");
function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = obj[UID_HASH_KEY];
  if (hashed !== void 0) {
    return hashed;
  }
  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== void 0) {
      return hashed;
    }
    hashed = getIENodeHash(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = nextHash();
  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
    throw new Error("Non-extensible objects are not allowed as keys.");
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed
    });
  } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== void 0) {
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error("Unable to set a non-enumerable property on object.");
  }
  return hashed;
}
__name(hashJSObj, "hashJSObj");
var isExtensible = Object.isExtensible;
var canDefineProperty = function() {
  try {
    Object.defineProperty({}, "@", {});
    return true;
  } catch (e) {
    return false;
  }
}();
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1:
        return node.uniqueID;
      case 9:
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}
__name(getIENodeHash, "getIENodeHash");
function valueOf(obj) {
  return obj.valueOf !== defaultValueOf && typeof obj.valueOf === "function" ? obj.valueOf(obj) : obj;
}
__name(valueOf, "valueOf");
function nextHash() {
  var nextHash22 = ++_objHashUID;
  if (_objHashUID & 1073741824) {
    _objHashUID = 0;
  }
  return nextHash22;
}
__name(nextHash, "nextHash");
var usingWeakMap = typeof WeakMap === "function";
var weakMap;
if (usingWeakMap) {
  weakMap = /* @__PURE__ */ new WeakMap();
}
var symbolMap = /* @__PURE__ */ Object.create(null);
var _objHashUID = 0;
var UID_HASH_KEY = "__immutablehash__";
if (typeof Symbol === "function") {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}
var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};
var ToKeyedSequence = /* @__PURE__ */ function(KeyedSeq22) {
  function ToKeyedSequence22(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }
  __name(ToKeyedSequence22, "ToKeyedSequence");
  if (KeyedSeq22)
    ToKeyedSequence22.__proto__ = KeyedSeq22;
  ToKeyedSequence22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  ToKeyedSequence22.prototype.constructor = ToKeyedSequence22;
  ToKeyedSequence22.prototype.get = /* @__PURE__ */ __name(function get112(key, notSetValue) {
    return this._iter.get(key, notSetValue);
  }, "get");
  ToKeyedSequence22.prototype.has = /* @__PURE__ */ __name(function has52(key) {
    return this._iter.has(key);
  }, "has");
  ToKeyedSequence22.prototype.valueSeq = /* @__PURE__ */ __name(function valueSeq22() {
    return this._iter.valueSeq();
  }, "valueSeq");
  ToKeyedSequence22.prototype.reverse = /* @__PURE__ */ __name(function reverse32() {
    var this$1$1 = this;
    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().reverse();
      };
    }
    return reversedSequence;
  }, "reverse");
  ToKeyedSequence22.prototype.map = /* @__PURE__ */ __name(function map22(mapper, context) {
    var this$1$1 = this;
    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().map(mapper, context);
      };
    }
    return mappedSequence;
  }, "map");
  ToKeyedSequence22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v, k) {
      return fn(v, k, this$1$1);
    }, reverse32);
  }, "__iterate");
  ToKeyedSequence22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    return this._iter.__iterator(type, reverse32);
  }, "__iterator");
  return ToKeyedSequence22;
}(KeyedSeq);
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
var ToIndexedSequence = /* @__PURE__ */ function(IndexedSeq22) {
  function ToIndexedSequence22(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  __name(ToIndexedSequence22, "ToIndexedSequence");
  if (IndexedSeq22)
    ToIndexedSequence22.__proto__ = IndexedSeq22;
  ToIndexedSequence22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  ToIndexedSequence22.prototype.constructor = ToIndexedSequence22;
  ToIndexedSequence22.prototype.includes = /* @__PURE__ */ __name(function includes32(value) {
    return this._iter.includes(value);
  }, "includes");
  ToIndexedSequence22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    var i = 0;
    reverse32 && ensureSize(this);
    return this._iter.__iterate(
      function(v) {
        return fn(v, reverse32 ? this$1$1.size - ++i : i++, this$1$1);
      },
      reverse32
    );
  }, "__iterate");
  ToIndexedSequence22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var this$1$1 = this;
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse32);
    var i = 0;
    reverse32 && ensureSize(this);
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(
        type,
        reverse32 ? this$1$1.size - ++i : i++,
        step.value,
        step
      );
    });
  }, "__iterator");
  return ToIndexedSequence22;
}(IndexedSeq);
var ToSetSequence = /* @__PURE__ */ function(SetSeq22) {
  function ToSetSequence22(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  __name(ToSetSequence22, "ToSetSequence");
  if (SetSeq22)
    ToSetSequence22.__proto__ = SetSeq22;
  ToSetSequence22.prototype = Object.create(SetSeq22 && SetSeq22.prototype);
  ToSetSequence22.prototype.constructor = ToSetSequence22;
  ToSetSequence22.prototype.has = /* @__PURE__ */ __name(function has52(key) {
    return this._iter.includes(key);
  }, "has");
  ToSetSequence22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v) {
      return fn(v, v, this$1$1);
    }, reverse32);
  }, "__iterate");
  ToSetSequence22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse32);
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, step.value, step.value, step);
    });
  }, "__iterator");
  return ToSetSequence22;
}(SetSeq);
var FromEntriesSequence = /* @__PURE__ */ function(KeyedSeq22) {
  function FromEntriesSequence22(entries32) {
    this._iter = entries32;
    this.size = entries32.size;
  }
  __name(FromEntriesSequence22, "FromEntriesSequence");
  if (KeyedSeq22)
    FromEntriesSequence22.__proto__ = KeyedSeq22;
  FromEntriesSequence22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  FromEntriesSequence22.prototype.constructor = FromEntriesSequence22;
  FromEntriesSequence22.prototype.entrySeq = /* @__PURE__ */ __name(function entrySeq22() {
    return this._iter.toSeq();
  }, "entrySeq");
  FromEntriesSequence22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(entry) {
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1$1
        );
      }
    }, reverse32);
  }, "__iterate");
  FromEntriesSequence22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse32);
    return new Iterator(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  }, "__iterator");
  return FromEntriesSequence22;
}(KeyedSeq);
ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function() {
    return collection;
  };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this);
    reversedSequence.flip = function() {
      return collection.reverse();
    };
    return reversedSequence;
  };
  flipSequence.has = function(key) {
    return collection.includes(key);
  };
  flipSequence.includes = function(key) {
    return collection.has(key);
  };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    return collection.__iterate(function(v, k) {
      return fn(k, v, this$1$1) !== false;
    }, reverse32);
  };
  flipSequence.__iteratorUncached = function(type, reverse32) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse32);
      return new Iterator(function() {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse32
    );
  };
  return flipSequence;
}
__name(flipFactory, "flipFactory");
function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function(key) {
    return collection.has(key);
  };
  mappedSequence.get = function(key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET ? notSetValue : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    return collection.__iterate(
      function(v, k, c) {
        return fn(mapper.call(context, v, k, c), k, this$1$1) !== false;
      },
      reverse32
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse32);
    return new Iterator(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}
__name(mapFactory, "mapFactory");
function reverseFactory(collection, useKeys) {
  var this$1$1 = this;
  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function() {
    return collection;
  };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function() {
        return collection.flip();
      };
      return flipSequence;
    };
  }
  reversedSequence.get = function(key, notSetValue) {
    return collection.get(useKeys ? key : -1 - key, notSetValue);
  };
  reversedSequence.has = function(key) {
    return collection.has(useKeys ? key : -1 - key);
  };
  reversedSequence.includes = function(value) {
    return collection.includes(value);
  };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse32) {
    var this$1$12 = this;
    var i = 0;
    reverse32 && ensureSize(collection);
    return collection.__iterate(
      function(v, k) {
        return fn(v, useKeys ? k : reverse32 ? this$1$12.size - ++i : i++, this$1$12);
      },
      !reverse32
    );
  };
  reversedSequence.__iterator = function(type, reverse32) {
    var i = 0;
    reverse32 && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse32);
    return new Iterator(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse32 ? this$1$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}
__name(reverseFactory, "reverseFactory");
function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function(key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function(key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection) ? v : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    }, reverse32);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse32);
    var iterations = 0;
    return new Iterator(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}
__name(filterFactory, "filterFactory");
function countByFactory(collection, grouper, context) {
  var groups = Map2().asMutable();
  collection.__iterate(function(v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function(a) {
      return a + 1;
    });
  });
  return groups.asImmutable();
}
__name(countByFactory, "countByFactory");
function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map2()).asMutable();
  collection.__iterate(function(v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function(a) {
        return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
      }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function(arr) {
    return reify(collection, coerce(arr));
  }).asImmutable();
}
__name(groupByFactory, "groupByFactory");
function partitionFactory(collection, predicate, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = [[], []];
  collection.__iterate(function(v, k) {
    groups[predicate.call(context, v, k, collection) ? 1 : 0].push(
      isKeyedIter ? [k, v] : v
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function(arr) {
    return reify(collection, coerce(arr));
  });
}
__name(partitionFactory, "partitionFactory");
function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;
  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }
  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }
  var sliceSeq = makeSequence(collection);
  sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
    };
  }
  sliceSeq.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (sliceSize === 0) {
      return 0;
    }
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
      }
    });
    return iterations;
  };
  sliceSeq.__iteratorUncached = function(type, reverse32) {
    if (sliceSize !== 0 && reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse32);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function() {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, void 0, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };
  return sliceSeq;
}
__name(sliceFactory, "sliceFactory");
function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var iterations = 0;
    collection.__iterate(
      function(v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1$1);
      }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse32);
    var iterating = true;
    return new Iterator(function() {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}
__name(takeWhileFactory, "takeWhileFactory");
function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse32);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function() {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, void 0, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}
__name(skipWhileFactory, "skipWhileFactory");
function concatFactory(collection, values22) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection].concat(values22).map(function(v) {
    if (!isCollection(v)) {
      v = isKeyedCollection ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
    } else if (isKeyedCollection) {
      v = KeyedCollection(v);
    }
    return v;
  }).filter(function(v) {
    return v.size !== 0;
  });
  if (iters.length === 0) {
    return collection;
  }
  if (iters.length === 1) {
    var singleton = iters[0];
    if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) {
      return singleton;
    }
  }
  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function(sum, seq) {
    if (sum !== void 0) {
      var size = seq.size;
      if (size !== void 0) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}
__name(concatFactory, "concatFactory");
function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function(v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse32);
    }
    __name(flatDeep, "flatDeep");
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(type, reverse32);
    var stack = [];
    var iterations = 0;
    return new Iterator(function() {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse32);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}
__name(flattenFactory, "flattenFactory");
function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection.toSeq().map(function(v, k) {
    return coerce(mapper.call(context, v, k, collection));
  }).flatten(true);
}
__name(flatMapFactory, "flatMapFactory");
function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(
      function(v) {
        return (!iterations || fn(separator, iterations++, this$1$1) !== false) && fn(v, iterations++, this$1$1) !== false;
      },
      reverse32
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse32);
    var iterations = 0;
    var step;
    return new Iterator(function() {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}
__name(interposeFactory, "interposeFactory");
function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries32 = collection.toSeq().map(function(v, k) {
    return [k, v, index++, mapper ? mapper(v, k, collection) : v];
  }).valueSeq().toArray();
  entries32.sort(function(a, b) {
    return comparator(a[3], b[3]) || a[2] - b[2];
  }).forEach(
    isKeyedCollection ? function(v, i) {
      entries32[i].length = 2;
    } : function(v, i) {
      entries32[i] = v[1];
    }
  );
  return isKeyedCollection ? KeyedSeq(entries32) : isIndexed(collection) ? IndexedSeq(entries32) : SetSeq(entries32);
}
__name(sortFactory, "sortFactory");
function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection.toSeq().map(function(v, k) {
      return [v, mapper(v, k, collection)];
    }).reduce(function(a, b) {
      return maxCompare(comparator, a[1], b[1]) ? b : a;
    });
    return entry && entry[0];
  }
  return collection.reduce(function(a, b) {
    return maxCompare(comparator, a, b) ? b : a;
  });
}
__name(maxFactory, "maxFactory");
function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
}
__name(maxCompare, "maxCompare");
function zipWithFactory(keyIter, zipper, iters, zipAll22) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function(i) {
    return i.size;
  });
  zipSequence.size = zipAll22 ? sizes.max() : sizes.min();
  zipSequence.__iterate = function(fn, reverse32) {
    var iterator = this.__iterator(ITERATE_VALUES, reverse32);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse32) {
    var iterators = iters.map(
      function(i) {
        return i = Collection(i), getIterator(reverse32 ? i.reverse() : i);
      }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function() {
      var steps;
      if (!isDone) {
        steps = iterators.map(function(i) {
          return i.next();
        });
        isDone = zipAll22 ? steps.every(function(s) {
          return s.done;
        }) : steps.some(function(s) {
          return s.done;
        });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(
          null,
          steps.map(function(s) {
            return s.value;
          })
        )
      );
    });
  };
  return zipSequence;
}
__name(zipWithFactory, "zipWithFactory");
function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}
__name(reify, "reify");
function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError("Expected [K, V] tuple: " + entry);
  }
}
__name(validateEntry, "validateEntry");
function collectionClass(collection) {
  return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
}
__name(collectionClass, "collectionClass");
function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype
  );
}
__name(makeSequence, "makeSequence");
function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}
__name(cacheResultThrough, "cacheResultThrough");
function defaultComparator(a, b) {
  if (a === void 0 && b === void 0) {
    return 0;
  }
  if (a === void 0) {
    return 1;
  }
  if (b === void 0) {
    return -1;
  }
  return a > b ? 1 : a < b ? -1 : 0;
}
__name(defaultComparator, "defaultComparator");
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}
__name(arrCopy, "arrCopy");
function invariant(condition, error) {
  if (!condition) {
    throw new Error(error);
  }
}
__name(invariant, "invariant");
function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    "Cannot perform this action with an infinite size."
  );
}
__name(assertNotInfinite, "assertNotInfinite");
function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== "string") {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    "Invalid keyPath: expected Ordered Collection or Array: " + keyPath
  );
}
__name(coerceKeyPath, "coerceKeyPath");
var toString2 = Object.prototype.toString;
function isPlainObject(value) {
  if (!value || typeof value !== "object" || toString2.call(value) !== "[object Object]") {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  var parentProto = proto;
  var nextProto = Object.getPrototypeOf(proto);
  while (nextProto !== null) {
    parentProto = nextProto;
    nextProto = Object.getPrototypeOf(parentProto);
  }
  return parentProto === proto;
}
__name(isPlainObject, "isPlainObject");
function isDataStructure(value) {
  return typeof value === "object" && (isImmutable(value) || Array.isArray(value) || isPlainObject(value));
}
__name(isDataStructure, "isDataStructure");
function quoteString(value) {
  try {
    return typeof value === "string" ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}
__name(quoteString, "quoteString");
function has(collection, key) {
  return isImmutable(collection) ? collection.has(key) : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}
__name(has, "has");
function get(collection, key, notSetValue) {
  return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : typeof collection.get === "function" ? collection.get(key) : collection[key];
}
__name(get, "get");
function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}
__name(shallowCopy, "shallowCopy");
function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        "Cannot update immutable value without .remove() method: " + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}
__name(remove, "remove");
function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        "Cannot update immutable value without .set() method: " + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}
__name(set, "set");
function updateIn$1(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = void 0;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}
__name(updateIn$1, "updateIn$1");
function updateInDeeply(inImmutable, existing, keyPath, i, notSetValue, updater) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      "Cannot update within non-data-structure value in path [" + keyPath.slice(0, i).map(quoteString) + "]: " + existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(
    wasNotSet ? inImmutable ? emptyMap() : {} : existing,
    key,
    nextUpdated
  );
}
__name(updateInDeeply, "updateInDeeply");
function setIn$1(collection, keyPath, value) {
  return updateIn$1(collection, keyPath, NOT_SET, function() {
    return value;
  });
}
__name(setIn$1, "setIn$1");
function setIn(keyPath, v) {
  return setIn$1(this, keyPath, v);
}
__name(setIn, "setIn");
function removeIn(collection, keyPath) {
  return updateIn$1(collection, keyPath, function() {
    return NOT_SET;
  });
}
__name(removeIn, "removeIn");
function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}
__name(deleteIn, "deleteIn");
function update$1(collection, key, notSetValue, updater) {
  return updateIn$1(collection, [key], notSetValue, updater);
}
__name(update$1, "update$1");
function update(key, notSetValue, updater) {
  return arguments.length === 1 ? key(this) : update$1(this, key, notSetValue, updater);
}
__name(update, "update");
function updateIn(keyPath, notSetValue, updater) {
  return updateIn$1(this, keyPath, notSetValue, updater);
}
__name(updateIn, "updateIn");
function merge$1() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeIntoKeyedWith(this, iters);
}
__name(merge$1, "merge$1");
function mergeWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  if (typeof merger !== "function") {
    throw new TypeError("Invalid merger function: " + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}
__name(mergeWith$1, "mergeWith$1");
function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function(collection2) {
    var mergeIntoCollection = merger ? function(value, key) {
      update$1(
        collection2,
        key,
        NOT_SET,
        function(oldVal) {
          return oldVal === NOT_SET ? value : merger(oldVal, value, key);
        }
      );
    } : function(value, key) {
      collection2.set(key, value);
    };
    for (var ii2 = 0; ii2 < iters.length; ii2++) {
      iters[ii2].forEach(mergeIntoCollection);
    }
  });
}
__name(mergeIntoKeyedWith, "mergeIntoKeyedWith");
function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}
__name(mergeDeepWithSources, "mergeDeepWithSources");
function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot merge into non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection32 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray ? function(value) {
    if (merged === collection) {
      merged = shallowCopy(merged);
    }
    merged.push(value);
  } : function(value, key) {
    var hasVal = hasOwnProperty.call(merged, key);
    var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
    if (!hasVal || nextVal !== merged[key]) {
      if (merged === collection) {
        merged = shallowCopy(merged);
      }
      merged[key] = nextVal;
    }
  };
  for (var i = 0; i < sources.length; i++) {
    Collection32(sources[i]).forEach(mergeItem);
  }
  return merged;
}
__name(mergeWithSources, "mergeWithSources");
function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue) && areMergeable(oldValue, newValue) ? mergeWithSources(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
  }
  __name(deepMerger, "deepMerger");
  return deepMerger;
}
__name(deepMergerWith, "deepMergerWith");
function areMergeable(oldDataStructure, newDataStructure) {
  var oldSeq = Seq(oldDataStructure);
  var newSeq = Seq(newDataStructure);
  return isIndexed(oldSeq) === isIndexed(newSeq) && isKeyed(oldSeq) === isKeyed(newSeq);
}
__name(areMergeable, "areMergeable");
function mergeDeep() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeDeepWithSources(this, iters);
}
__name(mergeDeep, "mergeDeep");
function mergeDeepWith(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return mergeDeepWithSources(this, iters, merger);
}
__name(mergeDeepWith, "mergeDeepWith");
function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$1(this, keyPath, emptyMap(), function(m) {
    return mergeWithSources(m, iters);
  });
}
__name(mergeIn, "mergeIn");
function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$1(
    this,
    keyPath,
    emptyMap(),
    function(m) {
      return mergeDeepWithSources(m, iters);
    }
  );
}
__name(mergeDeepIn, "mergeDeepIn");
function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
__name(withMutations, "withMutations");
function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}
__name(asMutable, "asMutable");
function asImmutable() {
  return this.__ensureOwner();
}
__name(asImmutable, "asImmutable");
function wasAltered() {
  return this.__altered;
}
__name(wasAltered, "wasAltered");
var Map2 = /* @__PURE__ */ function(KeyedCollection22) {
  function Map3(value) {
    return value === void 0 || value === null ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map22) {
      var iter = KeyedCollection22(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v, k) {
        return map22.set(k, v);
      });
    });
  }
  __name(Map3, "Map");
  if (KeyedCollection22)
    Map3.__proto__ = KeyedCollection22;
  Map3.prototype = Object.create(KeyedCollection22 && KeyedCollection22.prototype);
  Map3.prototype.constructor = Map3;
  Map3.of = /* @__PURE__ */ __name(function of() {
    var keyValues = [], len = arguments.length;
    while (len--)
      keyValues[len] = arguments[len];
    return emptyMap().withMutations(function(map22) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error("Missing value for key: " + keyValues[i]);
        }
        map22.set(keyValues[i], keyValues[i + 1]);
      }
    });
  }, "of");
  Map3.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("Map {", "}");
  }, "toString");
  Map3.prototype.get = /* @__PURE__ */ __name(function get112(k, notSetValue) {
    return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
  }, "get");
  Map3.prototype.set = /* @__PURE__ */ __name(function set32(k, v) {
    return updateMap(this, k, v);
  }, "set");
  Map3.prototype.remove = /* @__PURE__ */ __name(function remove32(k) {
    return updateMap(this, k, NOT_SET);
  }, "remove");
  Map3.prototype.deleteAll = /* @__PURE__ */ __name(function deleteAll(keys22) {
    var collection = Collection(keys22);
    if (collection.size === 0) {
      return this;
    }
    return this.withMutations(function(map22) {
      collection.forEach(function(key) {
        return map22.remove(key);
      });
    });
  }, "deleteAll");
  Map3.prototype.clear = /* @__PURE__ */ __name(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  }, "clear");
  Map3.prototype.sort = /* @__PURE__ */ __name(function sort22(comparator) {
    return OrderedMap(sortFactory(this, comparator));
  }, "sort");
  Map3.prototype.sortBy = /* @__PURE__ */ __name(function sortBy22(mapper, comparator) {
    return OrderedMap(sortFactory(this, comparator, mapper));
  }, "sortBy");
  Map3.prototype.map = /* @__PURE__ */ __name(function map22(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(map3) {
      map3.forEach(function(value, key) {
        map3.set(key, mapper.call(context, value, key, this$1$1));
      });
    });
  }, "map");
  Map3.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    return new MapIterator(this, type, reverse32);
  }, "__iterator");
  Map3.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    this._root && this._root.iterate(function(entry) {
      iterations++;
      return fn(entry[1], entry[0], this$1$1);
    }, reverse32);
    return iterations;
  }, "__iterate");
  Map3.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  }, "__ensureOwner");
  return Map3;
}(KeyedCollection);
Map2.isMap = isMap;
var MapPrototype = Map2.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update;
MapPrototype.updateIn = updateIn;
MapPrototype.merge = MapPrototype.concat = merge$1;
MapPrototype.mergeWith = mergeWith$1;
MapPrototype.mergeDeep = mergeDeep;
MapPrototype.mergeDeepWith = mergeDeepWith;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype["@@transducer/init"] = MapPrototype.asMutable = asMutable;
MapPrototype["@@transducer/step"] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var ArrayMapNode = /* @__PURE__ */ __name(function ArrayMapNode2(ownerID, entries32) {
  this.ownerID = ownerID;
  this.entries = entries32;
}, "ArrayMapNode");
ArrayMapNode.prototype.get = /* @__PURE__ */ __name(function get2(shift, keyHash, key, notSetValue) {
  var entries32 = this.entries;
  for (var ii = 0, len = entries32.length; ii < len; ii++) {
    if (is(key, entries32[ii][0])) {
      return entries32[ii][1];
    }
  }
  return notSetValue;
}, "get");
ArrayMapNode.prototype.update = /* @__PURE__ */ __name(function update2(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var entries32 = this.entries;
  var idx = 0;
  var len = entries32.length;
  for (; idx < len; idx++) {
    if (is(key, entries32[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries32[idx][1] === value : removed) {
    return this;
  }
  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);
  if (removed && entries32.length === 1) {
    return;
  }
  if (!exists && !removed && entries32.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries32, key, value);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries32 : arrCopy(entries32);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new ArrayMapNode(ownerID, newEntries);
}, "update");
var BitmapIndexedNode = /* @__PURE__ */ __name(function BitmapIndexedNode2(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
}, "BitmapIndexedNode");
BitmapIndexedNode.prototype.get = /* @__PURE__ */ __name(function get3(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(
    shift + SHIFT,
    keyHash,
    key,
    notSetValue
  );
}, "get");
BitmapIndexedNode.prototype.update = /* @__PURE__ */ __name(function update3(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;
  if (!exists && value === NOT_SET) {
    return this;
  }
  var idx = popCount(bitmap & bit - 1);
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : void 0;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }
  if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
    return nodes[idx ^ 1];
  }
  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
  var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }
  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
}, "update");
var HashArrayMapNode = /* @__PURE__ */ __name(function HashArrayMapNode2(ownerID, count22, nodes) {
  this.ownerID = ownerID;
  this.count = count22;
  this.nodes = nodes;
}, "HashArrayMapNode");
HashArrayMapNode.prototype.get = /* @__PURE__ */ __name(function get4(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
}, "get");
HashArrayMapNode.prototype.update = /* @__PURE__ */ __name(function update4(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];
  if (removed && !node) {
    return this;
  }
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }
  return new HashArrayMapNode(ownerID, newCount, newNodes);
}, "update");
var HashCollisionNode = /* @__PURE__ */ __name(function HashCollisionNode2(ownerID, keyHash, entries32) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries32;
}, "HashCollisionNode");
HashCollisionNode.prototype.get = /* @__PURE__ */ __name(function get5(shift, keyHash, key, notSetValue) {
  var entries32 = this.entries;
  for (var ii = 0, len = entries32.length; ii < len; ii++) {
    if (is(key, entries32[ii][0])) {
      return entries32[ii][1];
    }
  }
  return notSetValue;
}, "get");
HashCollisionNode.prototype.update = /* @__PURE__ */ __name(function update5(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var removed = value === NOT_SET;
  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }
  var entries32 = this.entries;
  var idx = 0;
  var len = entries32.length;
  for (; idx < len; idx++) {
    if (is(key, entries32[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries32[idx][1] === value : removed) {
    return this;
  }
  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);
  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries32[idx ^ 1]);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries32 : arrCopy(entries32);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
}, "update");
var ValueNode = /* @__PURE__ */ __name(function ValueNode2(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
}, "ValueNode");
ValueNode.prototype.get = /* @__PURE__ */ __name(function get6(shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
}, "get");
ValueNode.prototype.update = /* @__PURE__ */ __name(function update6(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }
  SetRef(didAlter);
  if (removed) {
    SetRef(didChangeSize);
    return;
  }
  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }
  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
}, "update");
ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse32) {
  var entries32 = this.entries;
  for (var ii = 0, maxIndex = entries32.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries32[reverse32 ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};
BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse32) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse32 ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse32) === false) {
      return false;
    }
  }
};
ValueNode.prototype.iterate = function(fn, reverse32) {
  return fn(this.entry);
};
var MapIterator = /* @__PURE__ */ function(Iterator32) {
  function MapIterator22(map22, type, reverse32) {
    this._type = type;
    this._reverse = reverse32;
    this._stack = map22._root && mapIteratorFrame(map22._root);
  }
  __name(MapIterator22, "MapIterator");
  if (Iterator32)
    MapIterator22.__proto__ = Iterator32;
  MapIterator22.prototype = Object.create(Iterator32 && Iterator32.prototype);
  MapIterator22.prototype.constructor = MapIterator22;
  MapIterator22.prototype.next = /* @__PURE__ */ __name(function next() {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = void 0;
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  }, "next");
  return MapIterator22;
}(Iterator);
function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}
__name(mapIteratorValue, "mapIteratorValue");
function mapIteratorFrame(node, prev) {
  return {
    node,
    index: 0,
    __prev: prev
  };
}
__name(mapIteratorFrame, "mapIteratorFrame");
function makeMap(size, root, ownerID, hash22) {
  var map22 = Object.create(MapPrototype);
  map22.size = size;
  map22._root = root;
  map22.__ownerID = ownerID;
  map22.__hash = hash22;
  map22.__altered = false;
  return map22;
}
__name(makeMap, "makeMap");
var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}
__name(emptyMap, "emptyMap");
function updateMap(map22, k, v) {
  var newRoot;
  var newSize;
  if (!map22._root) {
    if (v === NOT_SET) {
      return map22;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map22.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map22._root,
      map22.__ownerID,
      0,
      void 0,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map22;
    }
    newSize = map22.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
  }
  if (map22.__ownerID) {
    map22.size = newSize;
    map22._root = newRoot;
    map22.__hash = void 0;
    map22.__altered = true;
    return map22;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}
__name(updateMap, "updateMap");
function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}
__name(updateNode, "updateNode");
function isLeafNode(node) {
  return node.constructor === ValueNode || node.constructor === HashCollisionNode;
}
__name(isLeafNode, "isLeafNode");
function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }
  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var newNode;
  var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
  return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
}
__name(mergeIntoNode, "mergeIntoNode");
function createNodes(ownerID, entries32, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries32.length; ii++) {
    var entry = entries32[ii];
    node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
  }
  return node;
}
__name(createNodes, "createNodes");
function packNodes(ownerID, nodes, count22, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count22);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== void 0 && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}
__name(packNodes, "packNodes");
function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count22 = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count22++] : void 0;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count22 + 1, expandedNodes);
}
__name(expandNodes, "expandNodes");
function popCount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
__name(popCount, "popCount");
function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}
__name(setAt, "setAt");
function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}
__name(spliceIn, "spliceIn");
function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}
__name(spliceOut, "spliceOut");
var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
var IS_LIST_SYMBOL = "@@__IMMUTABLE_LIST__@@";
function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}
__name(isList, "isList");
var List = /* @__PURE__ */ function(IndexedCollection22) {
  function List22(value) {
    var empty = emptyList();
    if (value === void 0 || value === null) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection22(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function(list) {
      list.setSize(size);
      iter.forEach(function(v, i) {
        return list.set(i, v);
      });
    });
  }
  __name(List22, "List");
  if (IndexedCollection22)
    List22.__proto__ = IndexedCollection22;
  List22.prototype = Object.create(IndexedCollection22 && IndexedCollection22.prototype);
  List22.prototype.constructor = List22;
  List22.of = /* @__PURE__ */ __name(function of() {
    return this(arguments);
  }, "of");
  List22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("List [", "]");
  }, "toString");
  List22.prototype.get = /* @__PURE__ */ __name(function get112(index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  }, "get");
  List22.prototype.set = /* @__PURE__ */ __name(function set32(index, value) {
    return updateList(this, index, value);
  }, "set");
  List22.prototype.remove = /* @__PURE__ */ __name(function remove32(index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  }, "remove");
  List22.prototype.insert = /* @__PURE__ */ __name(function insert(index, value) {
    return this.splice(index, 0, value);
  }, "insert");
  List22.prototype.clear = /* @__PURE__ */ __name(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyList();
  }, "clear");
  List22.prototype.push = /* @__PURE__ */ __name(function push() {
    var values22 = arguments;
    var oldSize = this.size;
    return this.withMutations(function(list) {
      setListBounds(list, 0, oldSize + values22.length);
      for (var ii = 0; ii < values22.length; ii++) {
        list.set(oldSize + ii, values22[ii]);
      }
    });
  }, "push");
  List22.prototype.pop = /* @__PURE__ */ __name(function pop() {
    return setListBounds(this, 0, -1);
  }, "pop");
  List22.prototype.unshift = /* @__PURE__ */ __name(function unshift() {
    var values22 = arguments;
    return this.withMutations(function(list) {
      setListBounds(list, -values22.length);
      for (var ii = 0; ii < values22.length; ii++) {
        list.set(ii, values22[ii]);
      }
    });
  }, "unshift");
  List22.prototype.shift = /* @__PURE__ */ __name(function shift() {
    return setListBounds(this, 1);
  }, "shift");
  List22.prototype.concat = /* @__PURE__ */ __name(function concat22() {
    var arguments$1 = arguments;
    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection22(
        typeof argument !== "string" && hasIterator(argument) ? argument : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function(list) {
      seqs.forEach(function(seq2) {
        return seq2.forEach(function(value) {
          return list.push(value);
        });
      });
    });
  }, "concat");
  List22.prototype.setSize = /* @__PURE__ */ __name(function setSize(size) {
    return setListBounds(this, 0, size);
  }, "setSize");
  List22.prototype.map = /* @__PURE__ */ __name(function map22(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(list) {
      for (var i = 0; i < this$1$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, this$1$1));
      }
    });
  }, "map");
  List22.prototype.slice = /* @__PURE__ */ __name(function slice32(begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  }, "slice");
  List22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var index = reverse32 ? this.size : 0;
    var values22 = iterateList(this, reverse32);
    return new Iterator(function() {
      var value = values22();
      return value === DONE ? iteratorDone() : iteratorValue(type, reverse32 ? --index : index++, value);
    });
  }, "__iterator");
  List22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var index = reverse32 ? this.size : 0;
    var values22 = iterateList(this, reverse32);
    var value;
    while ((value = values22()) !== DONE) {
      if (fn(value, reverse32 ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  }, "__iterate");
  List22.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  }, "__ensureOwner");
  return List22;
}(IndexedCollection);
List.isList = isList;
var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update;
ListPrototype.updateIn = updateIn;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype["@@transducer/init"] = ListPrototype.asMutable = asMutable;
ListPrototype["@@transducer/step"] = function(result, arr) {
  return result.push(arr);
};
ListPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var VNode = /* @__PURE__ */ __name(function VNode2(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
}, "VNode");
VNode.prototype.removeBefore = /* @__PURE__ */ __name(function removeBefore(ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = index >>> level & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = void 0;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
}, "removeBefore");
VNode.prototype.removeAfter = /* @__PURE__ */ __name(function removeAfter(ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = index - 1 >>> level & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }
  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }
  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
}, "removeAfter");
var DONE = {};
function iterateList(list, reverse32) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;
  return iterateNodeOrLeaf(list._root, list._level, 0);
  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
  }
  __name(iterateNodeOrLeaf, "iterateNodeOrLeaf");
  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function() {
      if (from === to) {
        return DONE;
      }
      var idx = reverse32 ? --to : from++;
      return array && array[idx];
    };
  }
  __name(iterateLeaf, "iterateLeaf");
  function iterateNode(node, level, offset) {
    var values22;
    var array = node && node.array;
    var from = offset > left ? 0 : left - offset >> level;
    var to = (right - offset >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function() {
      while (true) {
        if (values22) {
          var value = values22();
          if (value !== DONE) {
            return value;
          }
          values22 = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse32 ? --to : from++;
        values22 = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
  __name(iterateNode, "iterateNode");
}
__name(iterateList, "iterateList");
function makeList(origin2, capacity, level, root, tail, ownerID, hash22) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin2;
  list._origin = origin2;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash22;
  list.__altered = false;
  return list;
}
__name(makeList, "makeList");
var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}
__name(emptyList, "emptyList");
function updateList(list, index, value) {
  index = wrapIndex(list, index);
  if (index !== index) {
    return list;
  }
  if (index >= list.size || index < 0) {
    return list.withMutations(function(list2) {
      index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
    });
  }
  index += list._origin;
  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }
  if (!didAlter.value) {
    return list;
  }
  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}
__name(updateList, "updateList");
function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = index >>> level & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === void 0) {
    return node;
  }
  var newNode;
  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }
  if (nodeHas && node.array[idx] === value) {
    return node;
  }
  if (didAlter) {
    SetRef(didAlter);
  }
  newNode = editableVNode(node, ownerID);
  if (value === void 0 && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}
__name(updateVNode, "updateVNode");
function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}
__name(editableVNode, "editableVNode");
function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << list._level + SHIFT) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[rawIndex >>> level & MASK];
      level -= SHIFT;
    }
    return node;
  }
}
__name(listNodeFor, "listNodeFor");
function setListBounds(list, begin, end) {
  if (begin !== void 0) {
    begin |= 0;
  }
  if (end !== void 0) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }
  if (newOrigin >= newCapacity) {
    return list.clear();
  }
  var newLevel = list._level;
  var newRoot = list._root;
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [void 0, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }
  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);
  while (newTailOffset >= 1 << newLevel + SHIFT) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }
  var oldTail = list._tail;
  var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
  if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = oldTailOffset >>> level & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
  }
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;
    while (newRoot) {
      var beginIndex = newOrigin >>> newLevel & MASK;
      if (beginIndex !== newTailOffset >>> newLevel & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }
  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}
__name(setListBounds, "setListBounds");
function getTailOffset(size) {
  return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
}
__name(getTailOffset, "getTailOffset");
var OrderedMap = /* @__PURE__ */ function(Map3) {
  function OrderedMap22(value) {
    return value === void 0 || value === null ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map22) {
      var iter = KeyedCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v, k) {
        return map22.set(k, v);
      });
    });
  }
  __name(OrderedMap22, "OrderedMap");
  if (Map3)
    OrderedMap22.__proto__ = Map3;
  OrderedMap22.prototype = Object.create(Map3 && Map3.prototype);
  OrderedMap22.prototype.constructor = OrderedMap22;
  OrderedMap22.of = /* @__PURE__ */ __name(function of() {
    return this(arguments);
  }, "of");
  OrderedMap22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("OrderedMap {", "}");
  }, "toString");
  OrderedMap22.prototype.get = /* @__PURE__ */ __name(function get112(k, notSetValue) {
    var index = this._map.get(k);
    return index !== void 0 ? this._list.get(index)[1] : notSetValue;
  }, "get");
  OrderedMap22.prototype.clear = /* @__PURE__ */ __name(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      this.__altered = true;
      return this;
    }
    return emptyOrderedMap();
  }, "clear");
  OrderedMap22.prototype.set = /* @__PURE__ */ __name(function set32(k, v) {
    return updateOrderedMap(this, k, v);
  }, "set");
  OrderedMap22.prototype.remove = /* @__PURE__ */ __name(function remove32(k) {
    return updateOrderedMap(this, k, NOT_SET);
  }, "remove");
  OrderedMap22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._list.__iterate(
      function(entry) {
        return entry && fn(entry[1], entry[0], this$1$1);
      },
      reverse32
    );
  }, "__iterate");
  OrderedMap22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    return this._list.fromEntrySeq().__iterator(type, reverse32);
  }, "__iterator");
  OrderedMap22.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  }, "__ensureOwner");
  return OrderedMap22;
}(Map2);
OrderedMap.isOrderedMap = isOrderedMap;
OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
function makeOrderedMap(map22, list, ownerID, hash22) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map22 ? map22.size : 0;
  omap._map = map22;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash22;
  omap.__altered = false;
  return omap;
}
__name(makeOrderedMap, "makeOrderedMap");
var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
}
__name(emptyOrderedMap, "emptyOrderedMap");
function updateOrderedMap(omap, k, v) {
  var map22 = omap._map;
  var list = omap._list;
  var i = map22.get(k);
  var has52 = i !== void 0;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    if (!has52) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map22.size * 2) {
      newList = list.filter(function(entry, idx) {
        return entry !== void 0 && i !== idx;
      });
      newMap = newList.toKeyedSeq().map(function(entry) {
        return entry[0];
      }).flip().toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map22.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
    }
  } else if (has52) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map22;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map22.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = void 0;
    omap.__altered = true;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}
__name(updateOrderedMap, "updateOrderedMap");
var IS_STACK_SYMBOL = "@@__IMMUTABLE_STACK__@@";
function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}
__name(isStack, "isStack");
var Stack = /* @__PURE__ */ function(IndexedCollection22) {
  function Stack22(value) {
    return value === void 0 || value === null ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
  }
  __name(Stack22, "Stack");
  if (IndexedCollection22)
    Stack22.__proto__ = IndexedCollection22;
  Stack22.prototype = Object.create(IndexedCollection22 && IndexedCollection22.prototype);
  Stack22.prototype.constructor = Stack22;
  Stack22.of = /* @__PURE__ */ __name(function of() {
    return this(arguments);
  }, "of");
  Stack22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("Stack [", "]");
  }, "toString");
  Stack22.prototype.get = /* @__PURE__ */ __name(function get112(index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  }, "get");
  Stack22.prototype.peek = /* @__PURE__ */ __name(function peek() {
    return this._head && this._head.value;
  }, "peek");
  Stack22.prototype.push = /* @__PURE__ */ __name(function push() {
    var arguments$1 = arguments;
    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  }, "push");
  Stack22.prototype.pushAll = /* @__PURE__ */ __name(function pushAll(iter) {
    iter = IndexedCollection22(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function(value) {
      newSize++;
      head = {
        value,
        next: head
      };
    }, true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  }, "pushAll");
  Stack22.prototype.pop = /* @__PURE__ */ __name(function pop() {
    return this.slice(1);
  }, "pop");
  Stack22.prototype.clear = /* @__PURE__ */ __name(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = void 0;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  }, "clear");
  Stack22.prototype.slice = /* @__PURE__ */ __name(function slice32(begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      return IndexedCollection22.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  }, "slice");
  Stack22.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  }, "__ensureOwner");
  Stack22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return new ArraySeq(this.toArray()).__iterate(
        function(v, k) {
          return fn(v, k, this$1$1);
        },
        reverse32
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  }, "__iterate");
  Stack22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    if (reverse32) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse32);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function() {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  }, "__iterator");
  return Stack22;
}(IndexedCollection);
Stack.isStack = isStack;
var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype["@@transducer/init"] = StackPrototype.asMutable = asMutable;
StackPrototype["@@transducer/step"] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
function makeStack(size, head, ownerID, hash22) {
  var map22 = Object.create(StackPrototype);
  map22.size = size;
  map22._head = head;
  map22.__ownerID = ownerID;
  map22.__hash = hash22;
  map22.__altered = false;
  return map22;
}
__name(makeStack, "makeStack");
var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}
__name(emptyStack, "emptyStack");
var IS_SET_SYMBOL = "@@__IMMUTABLE_SET__@@";
function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}
__name(isSet, "isSet");
function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}
__name(isOrderedSet, "isOrderedSet");
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (!isCollection(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
    return false;
  }
  if (a.size === 0 && b.size === 0) {
    return true;
  }
  var notAssociative = !isAssociative(a);
  if (isOrdered(a)) {
    var entries32 = a.entries();
    return b.every(function(v, k) {
      var entry = entries32.next().value;
      return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
    }) && entries32.next().done;
  }
  var flipped = false;
  if (a.size === void 0) {
    if (b.size === void 0) {
      if (typeof a.cacheResult === "function") {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }
  var allEqual = true;
  var bSize = b.__iterate(function(v, k) {
    if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
      allEqual = false;
      return false;
    }
  });
  return allEqual && a.size === bSize;
}
__name(deepEqual, "deepEqual");
function mixin(ctor, methods) {
  var keyCopier = /* @__PURE__ */ __name(function(key) {
    ctor.prototype[key] = methods[key];
  }, "keyCopier");
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}
__name(mixin, "mixin");
function toJS(value) {
  if (!value || typeof value !== "object") {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function(v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function(v) {
    result.push(toJS(v));
  });
  return result;
}
__name(toJS, "toJS");
var Set = /* @__PURE__ */ function(SetCollection22) {
  function Set22(value) {
    return value === void 0 || value === null ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set32) {
      var iter = SetCollection22(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v) {
        return set32.add(v);
      });
    });
  }
  __name(Set22, "Set");
  if (SetCollection22)
    Set22.__proto__ = SetCollection22;
  Set22.prototype = Object.create(SetCollection22 && SetCollection22.prototype);
  Set22.prototype.constructor = Set22;
  Set22.of = /* @__PURE__ */ __name(function of() {
    return this(arguments);
  }, "of");
  Set22.fromKeys = /* @__PURE__ */ __name(function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  }, "fromKeys");
  Set22.intersect = /* @__PURE__ */ __name(function intersect(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.intersect.apply(Set22(sets.pop()), sets) : emptySet();
  }, "intersect");
  Set22.union = /* @__PURE__ */ __name(function union(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.union.apply(Set22(sets.pop()), sets) : emptySet();
  }, "union");
  Set22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("Set {", "}");
  }, "toString");
  Set22.prototype.has = /* @__PURE__ */ __name(function has52(value) {
    return this._map.has(value);
  }, "has");
  Set22.prototype.add = /* @__PURE__ */ __name(function add(value) {
    return updateSet(this, this._map.set(value, value));
  }, "add");
  Set22.prototype.remove = /* @__PURE__ */ __name(function remove32(value) {
    return updateSet(this, this._map.remove(value));
  }, "remove");
  Set22.prototype.clear = /* @__PURE__ */ __name(function clear22() {
    return updateSet(this, this._map.clear());
  }, "clear");
  Set22.prototype.map = /* @__PURE__ */ __name(function map22(mapper, context) {
    var this$1$1 = this;
    var didChanges = false;
    var newMap = updateSet(
      this,
      this._map.mapEntries(function(ref) {
        var v = ref[1];
        var mapped = mapper.call(context, v, v, this$1$1);
        if (mapped !== v) {
          didChanges = true;
        }
        return [mapped, mapped];
      }, context)
    );
    return didChanges ? newMap : this;
  }, "map");
  Set22.prototype.union = /* @__PURE__ */ __name(function union() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    iters = iters.filter(function(x) {
      return x.size !== 0;
    });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function(set32) {
      for (var ii = 0; ii < iters.length; ii++) {
        if (typeof iters[ii] === "string") {
          set32.add(iters[ii]);
        } else {
          SetCollection22(iters[ii]).forEach(function(value) {
            return set32.add(value);
          });
        }
      }
    });
  }, "union");
  Set22.prototype.intersect = /* @__PURE__ */ __name(function intersect() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection22(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (!iters.every(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set32) {
      toRemove.forEach(function(value) {
        set32.remove(value);
      });
    });
  }, "intersect");
  Set22.prototype.subtract = /* @__PURE__ */ __name(function subtract() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection22(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (iters.some(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set32) {
      toRemove.forEach(function(value) {
        set32.remove(value);
      });
    });
  }, "subtract");
  Set22.prototype.sort = /* @__PURE__ */ __name(function sort22(comparator) {
    return OrderedSet(sortFactory(this, comparator));
  }, "sort");
  Set22.prototype.sortBy = /* @__PURE__ */ __name(function sortBy22(mapper, comparator) {
    return OrderedSet(sortFactory(this, comparator, mapper));
  }, "sortBy");
  Set22.prototype.wasAltered = /* @__PURE__ */ __name(function wasAltered32() {
    return this._map.wasAltered();
  }, "wasAltered");
  Set22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._map.__iterate(function(k) {
      return fn(k, k, this$1$1);
    }, reverse32);
  }, "__iterate");
  Set22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    return this._map.__iterator(type, reverse32);
  }, "__iterator");
  Set22.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  }, "__ensureOwner");
  return Set22;
}(SetCollection);
Set.isSet = isSet;
var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype["@@transducer/init"] = SetPrototype.asMutable = asMutable;
SetPrototype["@@transducer/step"] = function(result, arr) {
  return result.add(arr);
};
SetPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;
function updateSet(set32, newMap) {
  if (set32.__ownerID) {
    set32.size = newMap.size;
    set32._map = newMap;
    return set32;
  }
  return newMap === set32._map ? set32 : newMap.size === 0 ? set32.__empty() : set32.__make(newMap);
}
__name(updateSet, "updateSet");
function makeSet(map22, ownerID) {
  var set32 = Object.create(SetPrototype);
  set32.size = map22 ? map22.size : 0;
  set32._map = map22;
  set32.__ownerID = ownerID;
  return set32;
}
__name(makeSet, "makeSet");
var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}
__name(emptySet, "emptySet");
var Range = /* @__PURE__ */ function(IndexedSeq22) {
  function Range22(start, end, step) {
    if (!(this instanceof Range22)) {
      return new Range22(start, end, step);
    }
    invariant(step !== 0, "Cannot step a Range by 0");
    start = start || 0;
    if (end === void 0) {
      end = Infinity;
    }
    step = step === void 0 ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }
  __name(Range22, "Range");
  if (IndexedSeq22)
    Range22.__proto__ = IndexedSeq22;
  Range22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  Range22.prototype.constructor = Range22;
  Range22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    if (this.size === 0) {
      return "Range []";
    }
    return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
  }, "toString");
  Range22.prototype.get = /* @__PURE__ */ __name(function get112(index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
  }, "get");
  Range22.prototype.includes = /* @__PURE__ */ __name(function includes32(searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  }, "includes");
  Range22.prototype.slice = /* @__PURE__ */ __name(function slice32(begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range22(0, 0);
    }
    return new Range22(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  }, "slice");
  Range22.prototype.indexOf = /* @__PURE__ */ __name(function indexOf22(searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  }, "indexOf");
  Range22.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf22(searchValue) {
    return this.indexOf(searchValue);
  }, "lastIndexOf");
  Range22.prototype.__iterate = /* @__PURE__ */ __name(function __iterate22(fn, reverse32) {
    var size = this.size;
    var step = this._step;
    var value = reverse32 ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse32 ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse32 ? -step : step;
    }
    return i;
  }, "__iterate");
  Range22.prototype.__iterator = /* @__PURE__ */ __name(function __iterator22(type, reverse32) {
    var size = this.size;
    var step = this._step;
    var value = reverse32 ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function() {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse32 ? -step : step;
      return iteratorValue(type, reverse32 ? size - ++i : i++, v);
    });
  }, "__iterator");
  Range22.prototype.equals = /* @__PURE__ */ __name(function equals32(other) {
    return other instanceof Range22 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
  }, "equals");
  return Range22;
}(IndexedSeq);
var EMPTY_RANGE;
function getIn$1(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}
__name(getIn$1, "getIn$1");
function getIn(searchKeyPath, notSetValue) {
  return getIn$1(this, searchKeyPath, notSetValue);
}
__name(getIn, "getIn");
function hasIn$1(collection, keyPath) {
  return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
}
__name(hasIn$1, "hasIn$1");
function hasIn(searchKeyPath) {
  return hasIn$1(this, searchKeyPath);
}
__name(hasIn, "hasIn");
function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function(v, k) {
    object[k] = v;
  });
  return object;
}
__name(toObject, "toObject");
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;
Collection.Iterator = Iterator;
mixin(Collection, {
  toArray: /* @__PURE__ */ __name(function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function(v, k) {
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  }, "toArray"),
  toIndexedSeq: /* @__PURE__ */ __name(function toIndexedSeq() {
    return new ToIndexedSequence(this);
  }, "toIndexedSeq"),
  toJS: /* @__PURE__ */ __name(function toJS$1() {
    return toJS(this);
  }, "toJS$1"),
  toKeyedSeq: /* @__PURE__ */ __name(function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  }, "toKeyedSeq"),
  toMap: /* @__PURE__ */ __name(function toMap() {
    return Map2(this.toKeyedSeq());
  }, "toMap"),
  toObject,
  toOrderedMap: /* @__PURE__ */ __name(function toOrderedMap() {
    return OrderedMap(this.toKeyedSeq());
  }, "toOrderedMap"),
  toOrderedSet: /* @__PURE__ */ __name(function toOrderedSet() {
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  }, "toOrderedSet"),
  toSet: /* @__PURE__ */ __name(function toSet() {
    return Set(isKeyed(this) ? this.valueSeq() : this);
  }, "toSet"),
  toSetSeq: /* @__PURE__ */ __name(function toSetSeq() {
    return new ToSetSequence(this);
  }, "toSetSeq"),
  toSeq: /* @__PURE__ */ __name(function toSeq() {
    return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
  }, "toSeq"),
  toStack: /* @__PURE__ */ __name(function toStack() {
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  }, "toStack"),
  toList: /* @__PURE__ */ __name(function toList() {
    return List(isKeyed(this) ? this.valueSeq() : this);
  }, "toList"),
  toString: /* @__PURE__ */ __name(function toString3() {
    return "[Collection]";
  }, "toString"),
  __toString: /* @__PURE__ */ __name(function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
  }, "__toString"),
  concat: /* @__PURE__ */ __name(function concat() {
    var values22 = [], len = arguments.length;
    while (len--)
      values22[len] = arguments[len];
    return reify(this, concatFactory(this, values22));
  }, "concat"),
  includes: /* @__PURE__ */ __name(function includes(searchValue) {
    return this.some(function(value) {
      return is(value, searchValue);
    });
  }, "includes"),
  entries: /* @__PURE__ */ __name(function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  }, "entries"),
  every: /* @__PURE__ */ __name(function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function(v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  }, "every"),
  filter: /* @__PURE__ */ __name(function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  }, "filter"),
  partition: /* @__PURE__ */ __name(function partition(predicate, context) {
    return partitionFactory(this, predicate, context);
  }, "partition"),
  find: /* @__PURE__ */ __name(function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  }, "find"),
  forEach: /* @__PURE__ */ __name(function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  }, "forEach"),
  join: /* @__PURE__ */ __name(function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== void 0 ? "" + separator : ",";
    var joined = "";
    var isFirst = true;
    this.__iterate(function(v) {
      isFirst ? isFirst = false : joined += separator;
      joined += v !== null && v !== void 0 ? v.toString() : "";
    });
    return joined;
  }, "join"),
  keys: /* @__PURE__ */ __name(function keys() {
    return this.__iterator(ITERATE_KEYS);
  }, "keys"),
  map: /* @__PURE__ */ __name(function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  }, "map"),
  reduce: /* @__PURE__ */ __name(function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  }, "reduce$1"),
  reduceRight: /* @__PURE__ */ __name(function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  }, "reduceRight"),
  reverse: /* @__PURE__ */ __name(function reverse() {
    return reify(this, reverseFactory(this, true));
  }, "reverse"),
  slice: /* @__PURE__ */ __name(function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  }, "slice"),
  some: /* @__PURE__ */ __name(function some(predicate, context) {
    return !this.every(not(predicate), context);
  }, "some"),
  sort: /* @__PURE__ */ __name(function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  }, "sort"),
  values: /* @__PURE__ */ __name(function values() {
    return this.__iterator(ITERATE_VALUES);
  }, "values"),
  butLast: /* @__PURE__ */ __name(function butLast() {
    return this.slice(0, -1);
  }, "butLast"),
  isEmpty: /* @__PURE__ */ __name(function isEmpty() {
    return this.size !== void 0 ? this.size === 0 : !this.some(function() {
      return true;
    });
  }, "isEmpty"),
  count: /* @__PURE__ */ __name(function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  }, "count"),
  countBy: /* @__PURE__ */ __name(function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  }, "countBy"),
  equals: /* @__PURE__ */ __name(function equals(other) {
    return deepEqual(this, other);
  }, "equals"),
  entrySeq: /* @__PURE__ */ __name(function entrySeq() {
    var collection = this;
    if (collection._cache) {
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
    entriesSequence.fromEntrySeq = function() {
      return collection.toSeq();
    };
    return entriesSequence;
  }, "entrySeq"),
  filterNot: /* @__PURE__ */ __name(function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  }, "filterNot"),
  findEntry: /* @__PURE__ */ __name(function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  }, "findEntry"),
  findKey: /* @__PURE__ */ __name(function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  }, "findKey"),
  findLast: /* @__PURE__ */ __name(function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
  }, "findLast"),
  findLastEntry: /* @__PURE__ */ __name(function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
  }, "findLastEntry"),
  findLastKey: /* @__PURE__ */ __name(function findLastKey(predicate, context) {
    return this.toKeyedSeq().reverse().findKey(predicate, context);
  }, "findLastKey"),
  first: /* @__PURE__ */ __name(function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  }, "first"),
  flatMap: /* @__PURE__ */ __name(function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  }, "flatMap"),
  flatten: /* @__PURE__ */ __name(function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  }, "flatten"),
  fromEntrySeq: /* @__PURE__ */ __name(function fromEntrySeq() {
    return new FromEntriesSequence(this);
  }, "fromEntrySeq"),
  get: /* @__PURE__ */ __name(function get7(searchKey, notSetValue) {
    return this.find(function(_, key) {
      return is(key, searchKey);
    }, void 0, notSetValue);
  }, "get"),
  getIn,
  groupBy: /* @__PURE__ */ __name(function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  }, "groupBy"),
  has: /* @__PURE__ */ __name(function has2(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  }, "has"),
  hasIn,
  isSubset: /* @__PURE__ */ __name(function isSubset(iter) {
    iter = typeof iter.includes === "function" ? iter : Collection(iter);
    return this.every(function(value) {
      return iter.includes(value);
    });
  }, "isSubset"),
  isSuperset: /* @__PURE__ */ __name(function isSuperset(iter) {
    iter = typeof iter.isSubset === "function" ? iter : Collection(iter);
    return iter.isSubset(this);
  }, "isSuperset"),
  keyOf: /* @__PURE__ */ __name(function keyOf(searchValue) {
    return this.findKey(function(value) {
      return is(value, searchValue);
    });
  }, "keyOf"),
  keySeq: /* @__PURE__ */ __name(function keySeq() {
    return this.toSeq().map(keyMapper).toIndexedSeq();
  }, "keySeq"),
  last: /* @__PURE__ */ __name(function last(notSetValue) {
    return this.toSeq().reverse().first(notSetValue);
  }, "last"),
  lastKeyOf: /* @__PURE__ */ __name(function lastKeyOf(searchValue) {
    return this.toKeyedSeq().reverse().keyOf(searchValue);
  }, "lastKeyOf"),
  max: /* @__PURE__ */ __name(function max(comparator) {
    return maxFactory(this, comparator);
  }, "max"),
  maxBy: /* @__PURE__ */ __name(function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  }, "maxBy"),
  min: /* @__PURE__ */ __name(function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  }, "min"),
  minBy: /* @__PURE__ */ __name(function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  }, "minBy"),
  rest: /* @__PURE__ */ __name(function rest() {
    return this.slice(1);
  }, "rest"),
  skip: /* @__PURE__ */ __name(function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  }, "skip"),
  skipLast: /* @__PURE__ */ __name(function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  }, "skipLast"),
  skipWhile: /* @__PURE__ */ __name(function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  }, "skipWhile"),
  skipUntil: /* @__PURE__ */ __name(function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  }, "skipUntil"),
  sortBy: /* @__PURE__ */ __name(function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  }, "sortBy"),
  take: /* @__PURE__ */ __name(function take(amount) {
    return this.slice(0, Math.max(0, amount));
  }, "take"),
  takeLast: /* @__PURE__ */ __name(function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  }, "takeLast"),
  takeWhile: /* @__PURE__ */ __name(function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  }, "takeWhile"),
  takeUntil: /* @__PURE__ */ __name(function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  }, "takeUntil"),
  update: /* @__PURE__ */ __name(function update7(fn) {
    return fn(this);
  }, "update"),
  valueSeq: /* @__PURE__ */ __name(function valueSeq() {
    return this.toIndexedSeq();
  }, "valueSeq"),
  hashCode: /* @__PURE__ */ __name(function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  }, "hashCode")
});
var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;
mixin(KeyedCollection, {
  flip: /* @__PURE__ */ __name(function flip() {
    return reify(this, flipFactory(this));
  }, "flip"),
  mapEntries: /* @__PURE__ */ __name(function mapEntries(mapper, context) {
    var this$1$1 = this;
    var iterations = 0;
    return reify(
      this,
      this.toSeq().map(function(v, k) {
        return mapper.call(context, [k, v], iterations++, this$1$1);
      }).fromEntrySeq()
    );
  }, "mapEntries"),
  mapKeys: /* @__PURE__ */ __name(function mapKeys(mapper, context) {
    var this$1$1 = this;
    return reify(
      this,
      this.toSeq().flip().map(function(k, v) {
        return mapper.call(context, k, v, this$1$1);
      }).flip()
    );
  }, "mapKeys")
});
var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function(v, k) {
  return quoteString(k) + ": " + quoteString(v);
};
mixin(IndexedCollection, {
  toKeyedSeq: /* @__PURE__ */ __name(function toKeyedSeq2() {
    return new ToKeyedSequence(this, false);
  }, "toKeyedSeq"),
  filter: /* @__PURE__ */ __name(function filter2(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  }, "filter"),
  findIndex: /* @__PURE__ */ __name(function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  }, "findIndex"),
  indexOf: /* @__PURE__ */ __name(function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === void 0 ? -1 : key;
  }, "indexOf"),
  lastIndexOf: /* @__PURE__ */ __name(function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === void 0 ? -1 : key;
  }, "lastIndexOf"),
  reverse: /* @__PURE__ */ __name(function reverse2() {
    return reify(this, reverseFactory(this, false));
  }, "reverse"),
  slice: /* @__PURE__ */ __name(function slice2(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  }, "slice"),
  splice: /* @__PURE__ */ __name(function splice(index, removeNum) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || numArgs === 2 && !removeNum) {
      return this;
    }
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  }, "splice"),
  findLastIndex: /* @__PURE__ */ __name(function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  }, "findLastIndex"),
  first: /* @__PURE__ */ __name(function first2(notSetValue) {
    return this.get(0, notSetValue);
  }, "first"),
  flatten: /* @__PURE__ */ __name(function flatten2(depth) {
    return reify(this, flattenFactory(this, depth, false));
  }, "flatten"),
  get: /* @__PURE__ */ __name(function get8(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 || this.size === Infinity || this.size !== void 0 && index > this.size ? notSetValue : this.find(function(_, key) {
      return key === index;
    }, void 0, notSetValue);
  }, "get"),
  has: /* @__PURE__ */ __name(function has3(index) {
    index = wrapIndex(this, index);
    return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
  }, "has"),
  interpose: /* @__PURE__ */ __name(function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  }, "interpose"),
  interleave: /* @__PURE__ */ __name(function interleave() {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  }, "interleave"),
  keySeq: /* @__PURE__ */ __name(function keySeq2() {
    return Range(0, this.size);
  }, "keySeq"),
  last: /* @__PURE__ */ __name(function last2(notSetValue) {
    return this.get(-1, notSetValue);
  }, "last"),
  skipWhile: /* @__PURE__ */ __name(function skipWhile2(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  }, "skipWhile"),
  zip: /* @__PURE__ */ __name(function zip() {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  }, "zip"),
  zipAll: /* @__PURE__ */ __name(function zipAll() {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  }, "zipAll"),
  zipWith: /* @__PURE__ */ __name(function zipWith(zipper) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  }, "zipWith")
});
var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
mixin(SetCollection, {
  get: /* @__PURE__ */ __name(function get9(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  }, "get"),
  includes: /* @__PURE__ */ __name(function includes2(value) {
    return this.has(value);
  }, "includes"),
  keySeq: /* @__PURE__ */ __name(function keySeq3() {
    return this.valueSeq();
  }, "keySeq")
});
var SetCollectionPrototype = SetCollection.prototype;
SetCollectionPrototype.has = CollectionPrototype.includes;
SetCollectionPrototype.contains = SetCollectionPrototype.includes;
SetCollectionPrototype.keys = SetCollectionPrototype.values;
mixin(KeyedSeq, KeyedCollectionPrototype);
mixin(IndexedSeq, IndexedCollectionPrototype);
mixin(SetSeq, SetCollectionPrototype);
function reduce(collection, reducer, reduction, context, useFirst, reverse32) {
  assertNotInfinite(collection.size);
  collection.__iterate(function(v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse32);
  return reduction;
}
__name(reduce, "reduce");
function keyMapper(v, k) {
  return k;
}
__name(keyMapper, "keyMapper");
function entryMapper(v, k) {
  return [k, v];
}
__name(entryMapper, "entryMapper");
function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
__name(not, "not");
function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}
__name(neg, "neg");
function defaultZipper() {
  return arrCopy(arguments);
}
__name(defaultZipper, "defaultZipper");
function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}
__name(defaultNegComparator, "defaultNegComparator");
function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed ? ordered ? function(v, k) {
      h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
    } : function(v, k) {
      h = h + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function(v) {
      h = 31 * h + hash(v) | 0;
    } : function(v) {
      h = h + hash(v) | 0;
    }
  );
  return murmurHashOfSize(size, h);
}
__name(hashCollection, "hashCollection");
function murmurHashOfSize(size, h) {
  h = imul(h, 3432918353);
  h = imul(h << 15 | h >>> -15, 461845907);
  h = imul(h << 13 | h >>> -13, 5);
  h = (h + 3864292196 | 0) ^ size;
  h = imul(h ^ h >>> 16, 2246822507);
  h = imul(h ^ h >>> 13, 3266489909);
  h = smi(h ^ h >>> 16);
  return h;
}
__name(murmurHashOfSize, "murmurHashOfSize");
function hashMerge(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
}
__name(hashMerge, "hashMerge");
var OrderedSet = /* @__PURE__ */ function(Set22) {
  function OrderedSet22(value) {
    return value === void 0 || value === null ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set32) {
      var iter = SetCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v) {
        return set32.add(v);
      });
    });
  }
  __name(OrderedSet22, "OrderedSet");
  if (Set22)
    OrderedSet22.__proto__ = Set22;
  OrderedSet22.prototype = Object.create(Set22 && Set22.prototype);
  OrderedSet22.prototype.constructor = OrderedSet22;
  OrderedSet22.of = /* @__PURE__ */ __name(function of() {
    return this(arguments);
  }, "of");
  OrderedSet22.fromKeys = /* @__PURE__ */ __name(function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  }, "fromKeys");
  OrderedSet22.prototype.toString = /* @__PURE__ */ __name(function toString52() {
    return this.__toString("OrderedSet {", "}");
  }, "toString");
  return OrderedSet22;
}(Set);
OrderedSet.isOrderedSet = isOrderedSet;
var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;
function makeOrderedSet(map22, ownerID) {
  var set32 = Object.create(OrderedSetPrototype);
  set32.size = map22 ? map22.size : 0;
  set32._map = map22;
  set32.__ownerID = ownerID;
  return set32;
}
__name(makeOrderedSet, "makeOrderedSet");
var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
}
__name(emptyOrderedSet, "emptyOrderedSet");
function throwOnInvalidDefaultValues(defaultValues) {
  if (isRecord(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead."
    );
  }
  if (isImmutable(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead."
    );
  }
  if (defaultValues === null || typeof defaultValues !== "object") {
    throw new Error(
      "Can not call `Record` with a non-object as default values. Use a plain javascript object instead."
    );
  }
}
__name(throwOnInvalidDefaultValues, "throwOnInvalidDefaultValues");
var Record = /* @__PURE__ */ __name(function Record2(defaultValues, name) {
  var hasInitialized;
  throwOnInvalidDefaultValues(defaultValues);
  var RecordType = /* @__PURE__ */ __name(function Record32(values22) {
    var this$1$1 = this;
    if (values22 instanceof RecordType) {
      return values22;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values22);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys22 = Object.keys(defaultValues);
      var indices = RecordTypePrototype._indices = {};
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys22;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys22.length; i++) {
        var propName = keys22[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          typeof console === "object" && console.warn && console.warn(
            "Cannot define " + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.'
          );
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = void 0;
    this._values = List().withMutations(function(l) {
      l.setSize(this$1$1._keys.length);
      KeyedCollection(values22).forEach(function(v, k) {
        l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? void 0 : v);
      });
    });
    return this;
  }, "Record");
  var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
  RecordTypePrototype.constructor = RecordType;
  if (name) {
    RecordType.displayName = name;
  }
  return RecordType;
}, "Record");
Record.prototype.toString = /* @__PURE__ */ __name(function toString4() {
  var str = recordName(this) + " { ";
  var keys22 = this._keys;
  var k;
  for (var i = 0, l = keys22.length; i !== l; i++) {
    k = keys22[i];
    str += (i ? ", " : "") + k + ": " + quoteString(this.get(k));
  }
  return str + " }";
}, "toString");
Record.prototype.equals = /* @__PURE__ */ __name(function equals2(other) {
  return this === other || isRecord(other) && recordSeq(this).equals(recordSeq(other));
}, "equals");
Record.prototype.hashCode = /* @__PURE__ */ __name(function hashCode2() {
  return recordSeq(this).hashCode();
}, "hashCode");
Record.prototype.has = /* @__PURE__ */ __name(function has4(k) {
  return this._indices.hasOwnProperty(k);
}, "has");
Record.prototype.get = /* @__PURE__ */ __name(function get10(k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === void 0 ? this._defaultValues[k] : value;
}, "get");
Record.prototype.set = /* @__PURE__ */ __name(function set2(k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? void 0 : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
}, "set");
Record.prototype.remove = /* @__PURE__ */ __name(function remove2(k) {
  return this.set(k);
}, "remove");
Record.prototype.clear = /* @__PURE__ */ __name(function clear() {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
}, "clear");
Record.prototype.wasAltered = /* @__PURE__ */ __name(function wasAltered2() {
  return this._values.wasAltered();
}, "wasAltered");
Record.prototype.toSeq = /* @__PURE__ */ __name(function toSeq2() {
  return recordSeq(this);
}, "toSeq");
Record.prototype.toJS = /* @__PURE__ */ __name(function toJS$12() {
  return toJS(this);
}, "toJS$1");
Record.prototype.entries = /* @__PURE__ */ __name(function entries2() {
  return this.__iterator(ITERATE_ENTRIES);
}, "entries");
Record.prototype.__iterator = /* @__PURE__ */ __name(function __iterator(type, reverse32) {
  return recordSeq(this).__iterator(type, reverse32);
}, "__iterator");
Record.prototype.__iterate = /* @__PURE__ */ __name(function __iterate(fn, reverse32) {
  return recordSeq(this).__iterate(fn, reverse32);
}, "__iterate");
Record.prototype.__ensureOwner = /* @__PURE__ */ __name(function __ensureOwner(ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
}, "__ensureOwner");
Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge$1;
RecordPrototype.mergeWith = mergeWith$1;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep;
RecordPrototype.mergeDeepWith = mergeDeepWith;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn;
RecordPrototype.update = update;
RecordPrototype.updateIn = updateIn;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};
function makeRecord(likeRecord, values22, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values22;
  record.__ownerID = ownerID;
  return record;
}
__name(makeRecord, "makeRecord");
function recordName(record) {
  return record.constructor.displayName || record.constructor.name || "Record";
}
__name(recordName, "recordName");
function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function(k) {
    return [k, record.get(k)];
  }));
}
__name(recordSeq, "recordSeq");
function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, "Cannot set on an immutable record.");
        this.set(name, value);
      }
    });
  } catch (error) {
  }
}
__name(setProp, "setProp");
init_define_process();
var md5 = /* @__PURE__ */ __name((code) => md5FULL(code).split("0").join("k").split("1").join("g").split("2").join("j").split("3").join("k").split("4").join("b").split("5").join("n").split("6").join("o").split("7").join("x").split("8").join("q").split("9").join("z").slice(0, 8), "md5");
function md5FULL(inputString) {
  const hc = "0123456789abcdef";
  function rh(n) {
    let j;
    let s = "";
    for (j = 0; j <= 3; j++) {
      s += hc.charAt(n >> j * 8 + 4 & 15) + hc.charAt(n >> j * 8 & 15);
    }
    return s;
  }
  __name(rh, "rh");
  function ad(x2, y) {
    const l = (x2 & 65535) + (y & 65535);
    const m = (x2 >> 16) + (y >> 16) + (l >> 16);
    return m << 16 | l & 65535;
  }
  __name(ad, "ad");
  function rl(n, c2) {
    return n << c2 | n >>> 32 - c2;
  }
  __name(rl, "rl");
  function cm(q, a2, b2, x2, s, t) {
    return ad(rl(ad(ad(a2, q), ad(x2, t)), s), b2);
  }
  __name(cm, "cm");
  function ff(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & c2 | ~b2 & d2, a2, b2, x2, s, t);
  }
  __name(ff, "ff");
  function gg(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & d2 | c2 & ~d2, a2, b2, x2, s, t);
  }
  __name(gg, "gg");
  function hh(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 ^ c2 ^ d2, a2, b2, x2, s, t);
  }
  __name(hh, "hh");
  function ii(a2, b2, c2, d2, x2, s, t) {
    return cm(c2 ^ (b2 | ~d2), a2, b2, x2, s, t);
  }
  __name(ii, "ii");
  function sb(x2) {
    let i2;
    const nblk = (x2.length + 8 >> 6) + 1;
    const blks = Array.from({ length: nblk * 16 });
    for (i2 = 0; i2 < nblk * 16; i2++) {
      blks[i2] = 0;
    }
    for (i2 = 0; i2 < x2.length; i2++) {
      blks[i2 >> 2] |= x2.charCodeAt(i2) << i2 % 4 * 8;
    }
    blks[i2 >> 2] |= 128 << i2 % 4 * 8;
    blks[nblk * 16 - 2] = x2.length * 8;
    return blks;
  }
  __name(sb, "sb");
  let i;
  const x = sb(inputString);
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  let olda;
  let oldb;
  let oldc;
  let oldd;
  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = ad(a, olda);
    b = ad(b, oldb);
    c = ad(c, oldc);
    d = ad(d, oldd);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}
__name(md5FULL, "md5FULL");
init_define_process();
init_define_process();
var import_fast_diff = __toESM2(require_diff(), 1);
function createDelta(original, revision) {
  const result = (0, import_fast_diff.default)(original, revision);
  const delta = result.map((r) => r[0] === 1 ? r : [r[0], r[1].length]);
  return delta;
}
__name(createDelta, "createDelta");
function applyPatch(original, delta) {
  let result = "";
  let index = 0;
  for (const item of delta) {
    const operation = item[0];
    const value = item[1];
    if (item[0] === -1 && typeof value === "number") {
      index += value;
    } else if (operation == 0 && typeof value === "number") {
      result += original.slice(index, index += value);
    } else {
      result += value;
    }
  }
  return result;
}
__name(applyPatch, "applyPatch");
init_define_process();
init_define_process();
var import_esbuild_wasm = __toESM2(require_browser(), 1);
init_define_process();
async function getRequest(req) {
  console.log({ getReq: req });
  let response = await fetch(req);
  if (!response || !response.ok)
    return response;
  response = new Response(response.body, response);
  return response;
}
__name(getRequest, "getRequest");
init_define_process();
var mod = {
  init: false,
  initialize: (orig) => {
    if (mod.init === false) {
      return mod.init = (0, import_esbuild_wasm.initialize)({
        wasmURL: new URL(esbuild_default, orig + "/src/").toString()
      });
    }
    return mod.init;
  }
};
var initAndTransform = /* @__PURE__ */ __name(async (code, opts, origin2) => {
  const initFinished = mod.initialize(origin2);
  if (initFinished !== true)
    await initFinished;
  const ttCode = await (0, import_esbuild_wasm.transform)(code, {
    ...opts,
    define: { ...define, ...opts?.define ? opts.define : {} }
  });
  const res = { code: `/*${md5(code)}*/` + ttCode.code };
  return res;
}, "initAndTransform");
var define = {
  "process.env.NODE_ENV": `"development"`,
  "process.env.NODE_DEBUG": JSON.stringify(false),
  "process.browser": JSON.stringify(true),
  "process.env.DEBUG": JSON.stringify(true),
  "isBrowser": JSON.stringify(true),
  "isJest": JSON.stringify(false),
  "process.env.version": '"1.1.1"',
  global: "globalThis",
  "WORKER_DOM_DEBUG": JSON.stringify(false),
  "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
  process: JSON.stringify({
    env: {
      NODE_ENV: `development`,
      browser: true,
      NODE_DEBUG: false,
      DEBUG: true,
      isBrowser: true
    },
    browser: true
  })
};
async function esmTransform(code, origin2) {
  const transpiled = await initAndTransform(code, {
    loader: "tsx",
    format: "esm",
    treeShaking: true,
    platform: "browser",
    minify: false,
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        useDefineForClassFields: false,
        jsxFragmentFactory: "Fragment",
        jsxImportSource: "@emotion/react"
      }
    },
    target: "es2022"
  }, origin2);
  return transpiled.code;
}
__name(esmTransform, "esmTransform");
function initSession(room, u) {
  return Record({ ...u, room, state: Record(u.state)() });
}
__name(initSession, "initSession");
var sessions = {};
var hashStore = {};
var CodeSession = class {
  constructor(codeSpace, user) {
    this.cb = {};
    this.hashCodeSession = 0;
    this.created = new Date().toISOString();
    this.hashOfState = () => {
      const state = this.session.get("state");
      const hashCode42 = state.hashCode();
      hashStore[hashCode42] = state;
      return hashCode42;
    };
    this.createPatchFromHashCode = (oldHash, state) => {
      const s = JSON.parse(string_(state));
      hashStore[hashKEY(this.room)] = this.session.get(
        "state"
      );
      let oldRec = hashStore[oldHash];
      let usedOldHash = oldHash;
      const oldString = string_(oldRec.toJSON());
      const newRec = oldRec.merge(s);
      const newString = string_(newRec.toJSON()).split(
        md5(newRec.get("transpiled"))
      ).join("css");
      const newNewRecord = this.session.get("state").merge(JSON.parse(newString));
      const newHash = newNewRecord.hashCode();
      hashStore[newHash] = newNewRecord;
      const patch = createPatch(oldString, newString);
      const reversePatch = createPatch(newString, oldString);
      return {
        oldHash: usedOldHash,
        newHash,
        reversePatch,
        patch
      };
    };
    this.patchSync = (sess, force = false) => {
      if (!force) {
        if (sess.code !== this.session.get("state").code && sess.i <= this.session.get("state").i)
          throw new Error("Code update without I update error");
        sess.i;
        if (sess.i < this.session.get("state").i) {
          console.log("never going back!");
          sess.i = this.session.get("state").i + 1;
        }
        if (sess.code !== this.session.get("state").code && sess.i <= this.session.get("state").i)
          throw new Error("Code update without I update error");
        if (sess.transpiled.slice(0, 12) !== `/*${md5(sess.code)}*/`) {
          console.error(
            `missing: /*${md5(sess.code)}*/, transpiled: ${sess.transpiled.slice(0, 12)}`
          );
          throw new Error("transpiled	hack issue");
        }
        if (sess.code.length < 5) {
          throw new Error("code deleted?");
        }
        if (sess.html.indexOf(md5(sess.transpiled)) === -1) {
          console.error(`missing md5trans from html: ${md5(sess.transpiled)}
      ${sess.html.slice(0, 64)}
      
      `);
          throw new Error(`render hack issue missing: ${md5(sess.transpiled)}.`);
        }
        if (sess.css.length && sess.css.indexOf(md5(sess.transpiled)) === -1) {
          console.error(`missing from css: ${md5(sess.transpiled)}`);
          throw new Error(`render hack issue missing: ${md5(sess.transpiled)}.`);
        }
      }
      const oldHash = this.session.get("state").hashCode();
      this.session = this.session.set(
        "state",
        this.session.get("state").merge(sess)
      );
      const newHash = this.session.get("state").hashCode();
      if (newHash !== oldHash && force !== true) {
        this.update();
      }
      return this.session;
    };
    this.applyPatch = ({
      oldHash,
      newHash,
      patch
    }) => {
      if (!(oldHash && newHash && patch.length))
        return;
      hashStore[hashCode3(this.room)] = this.session.get("state");
      let maybeOldRec = hashStore[oldHash];
      if (!maybeOldRec)
        throw new Error(`cant find old record: ${oldHash}`);
      const oldString = string_(maybeOldRec.toJSON());
      const applied = applyPatch(oldString, patch);
      const newState = JSON.parse(applied);
      const newRec = this.session.get("state").merge(
        newState
      );
      const newRecord = this.session.get("state").merge(newRec);
      const newHashCheck = newRecord.hashCode();
      if (newHashCheck === newHash) {
        this.session = this.session.set("state", newRecord);
        hashStore[newHash] = this.session.get("state");
      } else {
        throw new Error("Wrong patch");
      }
      return newHash;
    };
    sessions[codeSpace] = this;
    this.room = codeSpace;
    const savedState = null;
    this.session = initSession(codeSpace, {
      ...user,
      state: savedState ? savedState : JSON.parse(string_({ ...user.state, codeSpace }))
    })();
    hashStore[hashKEY(codeSpace)] = this.session.get("state");
  }
  update() {
    Object.keys(this.cb).map((k) => this.cb[k]).map((x) => {
      try {
        x();
      } catch (error) {
        console.error("error calling callback", { err: error });
      }
    });
  }
  onUpdate(fn, regId) {
    this.cb[regId] = fn;
  }
  json() {
    const user = this.session.toJSON();
    const state = user.state.toJSON();
    return { ...user, state };
  }
  setRoom(codeSpace) {
    const user = this.session.set("room", codeSpace);
    this.session = user;
  }
};
__name(CodeSession, "CodeSession");
var hashKEY = /* @__PURE__ */ __name((codeSpace) => sessions[codeSpace].session.get("state").hashCode(), "hashKEY");
var hashCode3 = /* @__PURE__ */ __name((codeSpace) => md5(mST(codeSpace).transpiled), "hashCode");
function mST(codeSpace, p) {
  const sessAsJs = sessions[codeSpace].session.get("state").toJSON();
  const { i, transpiled, code, html, css } = p ? JSON.parse(
    applyPatch(
      string_(
        sessAsJs
      ),
      p
    )
  ) : sessAsJs;
  return { i, transpiled, code, html, css, codeSpace };
}
__name(mST, "mST");
function string_(s) {
  const { i, transpiled, code, html, css } = s;
  return JSON.stringify({ i, transpiled, code, html, css });
}
__name(string_, "string_");
function createPatch(oldCode, newCode) {
  return createDelta(oldCode, newCode);
}
__name(createPatch, "createPatch");

// ../../.yarn/__virtual__/@spike.land-code-virtual-d9171aea5c/1/packages/code/dist/src/session.mjs
init_chunk_chunk_QRJQSMAR();
init_chunk_chunk_JLPTXNJM();

// src/staticContent.mjs
import ASSET_MANIFEST from "__STATIC_CONTENT_MANIFEST";
var files = JSON.parse(ASSET_MANIFEST);
var ASSET_HASH = md5(ASSET_MANIFEST);

// ../code/dist/src/chunk-chunk-6IC5WRDH.mjs
var esbuild_default2 = "./chunk-esbuild-GS5BVJUF.wasm";

// ../code/dist/src/chunk-chunk-JOOAHNWO.mjs
init_chunk_chunk_QRJQSMAR2();
init_chunk_chunk_JLPTXNJM2();
var require_diff2 = __commonJS3({
  "../../../../../Users/z/.yarn/berry/cache/fast-diff-npm-1.2.0-5ba4171bb6-9.zip/node_modules/fast-diff/diff.js"(exports, module) {
    init_define_process2();
    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    function diff_main(text1, text2, cursor_pos, _fix_unicode) {
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) {
          return editdiff;
        }
      }
      var commonlength = diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      var diffs = diff_compute_(text1, text2);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      diff_cleanupMerge(diffs, _fix_unicode);
      return diffs;
    }
    __name2(diff_main, "diff_main");
    function diff_compute_(text1, text2) {
      var diffs;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      var i = longtext.indexOf(shorttext);
      if (i !== -1) {
        diffs = [
          [DIFF_INSERT, longtext.substring(0, i)],
          [DIFF_EQUAL, shorttext],
          [DIFF_INSERT, longtext.substring(i + shorttext.length)]
        ];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      }
      var hm = diff_halfMatch_(text1, text2);
      if (hm) {
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
      }
      return diff_bisect_(text1, text2);
    }
    __name2(diff_compute_, "diff_compute_");
    function diff_bisect_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      var max_d = Math.ceil((text1_length + text2_length) / 2);
      var v_offset = max_d;
      var v_length = 2 * max_d;
      var v1 = new Array(v_length);
      var v2 = new Array(v_length);
      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length;
      var front = delta % 2 !== 0;
      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;
      for (var d = 0; d < max_d; d++) {
        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          var k1_offset = v_offset + k1;
          var x1;
          if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
            x1 = v1[k1_offset + 1];
          } else {
            x1 = v1[k1_offset - 1] + 1;
          }
          var y1 = x1 - k1;
          while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1_offset] = x1;
          if (x1 > text1_length) {
            k1end += 2;
          } else if (y1 > text2_length) {
            k1start += 2;
          } else if (front) {
            var k2_offset = v_offset + delta - k1;
            if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
              var x2 = text1_length - v2[k2_offset];
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          var k2_offset = v_offset + k2;
          var x2;
          if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
            x2 = v2[k2_offset + 1];
          } else {
            x2 = v2[k2_offset - 1] + 1;
          }
          var y2 = x2 - k2;
          while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2_offset] = x2;
          if (x2 > text1_length) {
            k2end += 2;
          } else if (y2 > text2_length) {
            k2start += 2;
          } else if (!front) {
            var k1_offset = v_offset + delta - k2;
            if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
              var x1 = v1[k1_offset];
              var y1 = v_offset + x1 - k1_offset;
              x2 = text1_length - x2;
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
      }
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }
    __name2(diff_bisect_, "diff_bisect_");
    function diff_bisectSplit_(text1, text2, x, y) {
      var text1a = text1.substring(0, x);
      var text2a = text2.substring(0, y);
      var text1b = text1.substring(x);
      var text2b = text2.substring(y);
      var diffs = diff_main(text1a, text2a);
      var diffsb = diff_main(text1b, text2b);
      return diffs.concat(diffsb);
    }
    __name2(diff_bisectSplit_, "diff_bisectSplit_");
    function diff_commonPrefix(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
        pointermid--;
      }
      return pointermid;
    }
    __name2(diff_commonPrefix, "diff_commonPrefix");
    function diff_commonSuffix(text1, text2) {
      if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
        pointermid--;
      }
      return pointermid;
    }
    __name2(diff_commonSuffix, "diff_commonSuffix");
    function diff_halfMatch_(text1, text2) {
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      function diff_halfMatchI_(longtext2, shorttext2, i) {
        var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
          var prefixLength = diff_commonPrefix(
            longtext2.substring(i),
            shorttext2.substring(j)
          );
          var suffixLength = diff_commonSuffix(
            longtext2.substring(0, i),
            shorttext2.substring(0, j)
          );
          if (best_common.length < suffixLength + prefixLength) {
            best_common = shorttext2.substring(
              j - suffixLength,
              j
            ) + shorttext2.substring(j, j + prefixLength);
            best_longtext_a = longtext2.substring(0, i - suffixLength);
            best_longtext_b = longtext2.substring(i + prefixLength);
            best_shorttext_a = shorttext2.substring(0, j - suffixLength);
            best_shorttext_b = shorttext2.substring(j + prefixLength);
          }
        }
        if (best_common.length * 2 >= longtext2.length) {
          return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
          ];
        } else {
          return null;
        }
      }
      __name2(diff_halfMatchI_, "diff_halfMatchI_");
      var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
      var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
      var hm;
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      var text1_a, text1_b, text2_a, text2_b;
      if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
      } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
      }
      var mid_common = hm[4];
      return [text1_a, text1_b, text2_a, text2_b, mid_common];
    }
    __name2(diff_halfMatch_, "diff_halfMatch_");
    function diff_cleanupMerge(diffs, fix_unicode) {
      diffs.push([DIFF_EQUAL, ""]);
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          diffs.splice(pointer, 1);
          continue;
        }
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            var previous_equality = pointer - count_insert - count_delete - 1;
            if (fix_unicode) {
              if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                var stray = diffs[previous_equality][1].slice(-1);
                diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
                text_delete = stray + text_delete;
                text_insert = stray + text_insert;
                if (!diffs[previous_equality][1]) {
                  diffs.splice(previous_equality, 1);
                  pointer--;
                  var k = previous_equality - 1;
                  if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                    count_insert++;
                    text_insert = diffs[k][1] + text_insert;
                    k--;
                  }
                  if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                    count_delete++;
                    text_delete = diffs[k][1] + text_delete;
                    k--;
                  }
                  previous_equality = k;
                }
              }
              if (starts_with_pair_end(diffs[pointer][1])) {
                var stray = diffs[pointer][1].charAt(0);
                diffs[pointer][1] = diffs[pointer][1].slice(1);
                text_delete += stray;
                text_insert += stray;
              }
            }
            if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
              diffs.splice(pointer, 1);
              break;
            }
            if (text_delete.length > 0 || text_insert.length > 0) {
              if (text_delete.length > 0 && text_insert.length > 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (previous_equality >= 0) {
                    diffs[previous_equality][1] += text_insert.substring(0, commonlength);
                  } else {
                    diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(0, text_insert.length - commonlength);
                  text_delete = text_delete.substring(0, text_delete.length - commonlength);
                }
              }
              var n = count_insert + count_delete;
              if (text_delete.length === 0 && text_insert.length === 0) {
                diffs.splice(pointer - n, n);
                pointer = pointer - n;
              } else if (text_delete.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 1;
              } else if (text_insert.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
                pointer = pointer - n + 1;
              } else {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 2;
              }
            }
            if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs, fix_unicode);
      }
    }
    __name2(diff_cleanupMerge, "diff_cleanupMerge");
    function is_surrogate_pair_start(charCode) {
      return charCode >= 55296 && charCode <= 56319;
    }
    __name2(is_surrogate_pair_start, "is_surrogate_pair_start");
    function is_surrogate_pair_end(charCode) {
      return charCode >= 56320 && charCode <= 57343;
    }
    __name2(is_surrogate_pair_end, "is_surrogate_pair_end");
    function starts_with_pair_end(str) {
      return is_surrogate_pair_end(str.charCodeAt(0));
    }
    __name2(starts_with_pair_end, "starts_with_pair_end");
    function ends_with_pair_start(str) {
      return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
    }
    __name2(ends_with_pair_start, "ends_with_pair_start");
    function remove_empty_tuples(tuples) {
      var ret = [];
      for (var i = 0; i < tuples.length; i++) {
        if (tuples[i][1].length > 0) {
          ret.push(tuples[i]);
        }
      }
      return ret;
    }
    __name2(remove_empty_tuples, "remove_empty_tuples");
    function make_edit_splice(before, oldMiddle, newMiddle, after) {
      if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
        return null;
      }
      return remove_empty_tuples([
        [DIFF_EQUAL, before],
        [DIFF_DELETE, oldMiddle],
        [DIFF_INSERT, newMiddle],
        [DIFF_EQUAL, after]
      ]);
    }
    __name2(make_edit_splice, "make_edit_splice");
    function find_cursor_edit_diff(oldText, newText, cursor_pos) {
      var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
      var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
      var oldLength = oldText.length;
      var newLength = newText.length;
      if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
          var newCursor = oldCursor + newLength - oldLength;
          if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
            break editBefore;
          }
          if (newCursor < 0 || newCursor > newLength) {
            break editBefore;
          }
          var newBefore = newText.slice(0, newCursor);
          var newAfter = newText.slice(newCursor);
          if (newAfter !== oldAfter) {
            break editBefore;
          }
          var prefixLength = Math.min(oldCursor, newCursor);
          var oldPrefix = oldBefore.slice(0, prefixLength);
          var newPrefix = newBefore.slice(0, prefixLength);
          if (oldPrefix !== newPrefix) {
            break editBefore;
          }
          var oldMiddle = oldBefore.slice(prefixLength);
          var newMiddle = newBefore.slice(prefixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
          if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
            break editAfter;
          }
          var cursor = oldCursor;
          var newBefore = newText.slice(0, cursor);
          var newAfter = newText.slice(cursor);
          if (newBefore !== oldBefore) {
            break editAfter;
          }
          var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
          var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
          var newSuffix = newAfter.slice(newAfter.length - suffixLength);
          if (oldSuffix !== newSuffix) {
            break editAfter;
          }
          var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
          var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
          return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
      }
      if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
          var oldPrefix = oldText.slice(0, oldRange.index);
          var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
          var prefixLength = oldPrefix.length;
          var suffixLength = oldSuffix.length;
          if (newLength < prefixLength + suffixLength) {
            break replaceRange;
          }
          var newPrefix = newText.slice(0, prefixLength);
          var newSuffix = newText.slice(newLength - suffixLength);
          if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
            break replaceRange;
          }
          var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
          var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
      }
      return null;
    }
    __name2(find_cursor_edit_diff, "find_cursor_edit_diff");
    function diff2(text1, text2, cursor_pos) {
      return diff_main(text1, text2, cursor_pos, true);
    }
    __name2(diff2, "diff");
    diff2.INSERT = DIFF_INSERT;
    diff2.DELETE = DIFF_DELETE;
    diff2.EQUAL = DIFF_EQUAL;
    module.exports = diff2;
  }
});
var require_browser2 = __commonJS3({
  "../../../../../Users/z/.yarn/berry/cache/esbuild-wasm-npm-0.16.13-8714cdd154-9.zip/node_modules/esbuild-wasm/lib/browser.js"(exports, module) {
    init_define_process2();
    ((module2) => {
      "use strict";
      var __defProp4 = Object.defineProperty;
      var __getOwnPropDesc4 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames4 = Object.getOwnPropertyNames;
      var __hasOwnProp4 = Object.prototype.hasOwnProperty;
      var __export = /* @__PURE__ */ __name2((target, all) => {
        for (var name in all)
          __defProp4(target, name, { get: all[name], enumerable: true });
      }, "__export");
      var __copyProps4 = /* @__PURE__ */ __name2((to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames4(from))
            if (!__hasOwnProp4.call(to, key) && key !== except)
              __defProp4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc4(from, key)) || desc.enumerable });
        }
        return to;
      }, "__copyProps");
      var __toCommonJS = /* @__PURE__ */ __name2((mod22) => __copyProps4(__defProp4({}, "__esModule", { value: true }), mod22), "__toCommonJS");
      var __async = /* @__PURE__ */ __name2((__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = /* @__PURE__ */ __name2((value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }, "fulfilled");
          var rejected = /* @__PURE__ */ __name2((value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          }, "rejected");
          var step = /* @__PURE__ */ __name2((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
          step((generator = generator.apply(__this, __arguments)).next());
        });
      }, "__async");
      var browser_exports = {};
      __export(browser_exports, {
        analyzeMetafile: () => analyzeMetafile,
        analyzeMetafileSync: () => analyzeMetafileSync,
        build: () => build,
        buildSync: () => buildSync,
        default: () => browser_default,
        formatMessages: () => formatMessages,
        formatMessagesSync: () => formatMessagesSync,
        initialize: () => initialize2,
        serve: () => serve,
        transform: () => transform2,
        transformSync: () => transformSync,
        version: () => version
      });
      module2.exports = __toCommonJS(browser_exports);
      function encodePacket(packet) {
        let visit = /* @__PURE__ */ __name2((value) => {
          if (value === null) {
            bb.write8(0);
          } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
          } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
          } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
          } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
          } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value) {
              visit(item);
            }
          } else {
            let keys22 = Object.keys(value);
            bb.write8(6);
            bb.write32(keys22.length);
            for (let key of keys22) {
              bb.write(encodeUTF8(key));
              visit(value[key]);
            }
          }
        }, "visit");
        let bb = new ByteBuffer();
        bb.write32(0);
        bb.write32(packet.id << 1 | +!packet.isRequest);
        visit(packet.value);
        writeUInt32LE(bb.buf, bb.len - 4, 0);
        return bb.buf.subarray(0, bb.len);
      }
      __name2(encodePacket, "encodePacket");
      function decodePacket(bytes) {
        let visit = /* @__PURE__ */ __name2(() => {
          switch (bb.read8()) {
            case 0:
              return null;
            case 1:
              return !!bb.read8();
            case 2:
              return bb.read32();
            case 3:
              return decodeUTF8(bb.read());
            case 4:
              return bb.read();
            case 5: {
              let count22 = bb.read32();
              let value2 = [];
              for (let i = 0; i < count22; i++) {
                value2.push(visit());
              }
              return value2;
            }
            case 6: {
              let count22 = bb.read32();
              let value2 = {};
              for (let i = 0; i < count22; i++) {
                value2[decodeUTF8(bb.read())] = visit();
              }
              return value2;
            }
            default:
              throw new Error("Invalid packet");
          }
        }, "visit");
        let bb = new ByteBuffer(bytes);
        let id = bb.read32();
        let isRequest = (id & 1) === 0;
        id >>>= 1;
        let value = visit();
        if (bb.ptr !== bytes.length) {
          throw new Error("Invalid packet");
        }
        return { id, isRequest, value };
      }
      __name2(decodePacket, "decodePacket");
      var ByteBuffer = /* @__PURE__ */ __name2(class {
        constructor(buf = new Uint8Array(1024)) {
          this.buf = buf;
          this.len = 0;
          this.ptr = 0;
        }
        _write(delta) {
          if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
          }
          this.len += delta;
          return this.len - delta;
        }
        write8(value) {
          let offset = this._write(1);
          this.buf[offset] = value;
        }
        write32(value) {
          let offset = this._write(4);
          writeUInt32LE(this.buf, value, offset);
        }
        write(bytes) {
          let offset = this._write(4 + bytes.length);
          writeUInt32LE(this.buf, bytes.length, offset);
          this.buf.set(bytes, offset + 4);
        }
        _read(delta) {
          if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
          }
          this.ptr += delta;
          return this.ptr - delta;
        }
        read8() {
          return this.buf[this._read(1)];
        }
        read32() {
          return readUInt32LE(this.buf, this._read(4));
        }
        read() {
          let length = this.read32();
          let bytes = new Uint8Array(length);
          let ptr = this._read(bytes.length);
          bytes.set(this.buf.subarray(ptr, ptr + length));
          return bytes;
        }
      }, "ByteBuffer");
      var encodeUTF8;
      var decodeUTF8;
      var encodeInvariant;
      if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
        let encoder = new TextEncoder();
        let decoder = new TextDecoder();
        encodeUTF8 = /* @__PURE__ */ __name2((text) => encoder.encode(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name2((bytes) => decoder.decode(bytes), "decodeUTF8");
        encodeInvariant = 'new TextEncoder().encode("")';
      } else if (typeof Buffer !== "undefined") {
        encodeUTF8 = /* @__PURE__ */ __name2((text) => Buffer.from(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name2((bytes) => {
          let { buffer, byteOffset, byteLength } = bytes;
          return Buffer.from(buffer, byteOffset, byteLength).toString();
        }, "decodeUTF8");
        encodeInvariant = 'Buffer.from("")';
      } else {
        throw new Error("No UTF-8 codec found");
      }
      if (!(encodeUTF8("") instanceof Uint8Array))
        throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
      function readUInt32LE(buffer, offset) {
        return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
      }
      __name2(readUInt32LE, "readUInt32LE");
      function writeUInt32LE(buffer, value, offset) {
        buffer[offset++] = value;
        buffer[offset++] = value >> 8;
        buffer[offset++] = value >> 16;
        buffer[offset++] = value >> 24;
      }
      __name2(writeUInt32LE, "writeUInt32LE");
      var quote = JSON.stringify;
      var buildLogLevelDefault = "warning";
      var transformLogLevelDefault = "silent";
      function validateTarget(target) {
        validateStringValue(target, "target");
        if (target.indexOf(",") >= 0)
          throw new Error(`Invalid target: ${target}`);
        return target;
      }
      __name2(validateTarget, "validateTarget");
      var canBeAnything = /* @__PURE__ */ __name2(() => null, "canBeAnything");
      var mustBeBoolean = /* @__PURE__ */ __name2((value) => typeof value === "boolean" ? null : "a boolean", "mustBeBoolean");
      var mustBeBooleanOrObject = /* @__PURE__ */ __name2((value) => typeof value === "boolean" || typeof value === "object" && !Array.isArray(value) ? null : "a boolean or an object", "mustBeBooleanOrObject");
      var mustBeString = /* @__PURE__ */ __name2((value) => typeof value === "string" ? null : "a string", "mustBeString");
      var mustBeRegExp = /* @__PURE__ */ __name2((value) => value instanceof RegExp ? null : "a RegExp object", "mustBeRegExp");
      var mustBeInteger = /* @__PURE__ */ __name2((value) => typeof value === "number" && value === (value | 0) ? null : "an integer", "mustBeInteger");
      var mustBeFunction = /* @__PURE__ */ __name2((value) => typeof value === "function" ? null : "a function", "mustBeFunction");
      var mustBeArray = /* @__PURE__ */ __name2((value) => Array.isArray(value) ? null : "an array", "mustBeArray");
      var mustBeObject = /* @__PURE__ */ __name2((value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object", "mustBeObject");
      var mustBeWebAssemblyModule = /* @__PURE__ */ __name2((value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module", "mustBeWebAssemblyModule");
      var mustBeArrayOrRecord = /* @__PURE__ */ __name2((value) => typeof value === "object" && value !== null ? null : "an array or an object", "mustBeArrayOrRecord");
      var mustBeObjectOrNull = /* @__PURE__ */ __name2((value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null", "mustBeObjectOrNull");
      var mustBeStringOrBoolean = /* @__PURE__ */ __name2((value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean", "mustBeStringOrBoolean");
      var mustBeStringOrObject = /* @__PURE__ */ __name2((value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object", "mustBeStringOrObject");
      var mustBeStringOrArray = /* @__PURE__ */ __name2((value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array", "mustBeStringOrArray");
      var mustBeStringOrUint8Array = /* @__PURE__ */ __name2((value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array", "mustBeStringOrUint8Array");
      var mustBeStringOrURL = /* @__PURE__ */ __name2((value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL", "mustBeStringOrURL");
      function getFlag(object, keys22, key, mustBeFn) {
        let value = object[key];
        keys22[key + ""] = true;
        if (value === void 0)
          return void 0;
        let mustBe = mustBeFn(value);
        if (mustBe !== null)
          throw new Error(`${quote(key)} must be ${mustBe}`);
        return value;
      }
      __name2(getFlag, "getFlag");
      function checkForInvalidFlags(object, keys22, where) {
        for (let key in object) {
          if (!(key in keys22)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
          }
        }
      }
      __name2(checkForInvalidFlags, "checkForInvalidFlags");
      function validateInitializeOptions(options) {
        let keys22 = /* @__PURE__ */ Object.create(null);
        let wasmURL = getFlag(options, keys22, "wasmURL", mustBeStringOrURL);
        let wasmModule = getFlag(options, keys22, "wasmModule", mustBeWebAssemblyModule);
        let worker = getFlag(options, keys22, "worker", mustBeBoolean);
        checkForInvalidFlags(options, keys22, "in initialize() call");
        return {
          wasmURL,
          wasmModule,
          worker
        };
      }
      __name2(validateInitializeOptions, "validateInitializeOptions");
      function validateMangleCache(mangleCache) {
        let validated;
        if (mangleCache !== void 0) {
          validated = /* @__PURE__ */ Object.create(null);
          for (let key in mangleCache) {
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
              validated[key] = value;
            } else {
              throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
          }
        }
        return validated;
      }
      __name2(validateMangleCache, "validateMangleCache");
      function pushLogFlags(flags, options, keys22, isTTY, logLevelDefault) {
        let color = getFlag(options, keys22, "color", mustBeBoolean);
        let logLevel = getFlag(options, keys22, "logLevel", mustBeString);
        let logLimit = getFlag(options, keys22, "logLimit", mustBeInteger);
        if (color !== void 0)
          flags.push(`--color=${color}`);
        else if (isTTY)
          flags.push(`--color=true`);
        flags.push(`--log-level=${logLevel || logLevelDefault}`);
        flags.push(`--log-limit=${logLimit || 0}`);
      }
      __name2(pushLogFlags, "pushLogFlags");
      function validateStringValue(value, what, key) {
        if (typeof value !== "string") {
          throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
        }
        return value;
      }
      __name2(validateStringValue, "validateStringValue");
      function pushCommonFlags(flags, options, keys22) {
        let legalComments = getFlag(options, keys22, "legalComments", mustBeString);
        let sourceRoot = getFlag(options, keys22, "sourceRoot", mustBeString);
        let sourcesContent = getFlag(options, keys22, "sourcesContent", mustBeBoolean);
        let target = getFlag(options, keys22, "target", mustBeStringOrArray);
        let format = getFlag(options, keys22, "format", mustBeString);
        let globalName = getFlag(options, keys22, "globalName", mustBeString);
        let mangleProps = getFlag(options, keys22, "mangleProps", mustBeRegExp);
        let reserveProps = getFlag(options, keys22, "reserveProps", mustBeRegExp);
        let mangleQuoted = getFlag(options, keys22, "mangleQuoted", mustBeBoolean);
        let minify = getFlag(options, keys22, "minify", mustBeBoolean);
        let minifySyntax = getFlag(options, keys22, "minifySyntax", mustBeBoolean);
        let minifyWhitespace = getFlag(options, keys22, "minifyWhitespace", mustBeBoolean);
        let minifyIdentifiers = getFlag(options, keys22, "minifyIdentifiers", mustBeBoolean);
        let drop = getFlag(options, keys22, "drop", mustBeArray);
        let charset = getFlag(options, keys22, "charset", mustBeString);
        let treeShaking = getFlag(options, keys22, "treeShaking", mustBeBoolean);
        let ignoreAnnotations = getFlag(options, keys22, "ignoreAnnotations", mustBeBoolean);
        let jsx = getFlag(options, keys22, "jsx", mustBeString);
        let jsxFactory = getFlag(options, keys22, "jsxFactory", mustBeString);
        let jsxFragment = getFlag(options, keys22, "jsxFragment", mustBeString);
        let jsxImportSource = getFlag(options, keys22, "jsxImportSource", mustBeString);
        let jsxDev = getFlag(options, keys22, "jsxDev", mustBeBoolean);
        let jsxSideEffects = getFlag(options, keys22, "jsxSideEffects", mustBeBoolean);
        let define22 = getFlag(options, keys22, "define", mustBeObject);
        let logOverride = getFlag(options, keys22, "logOverride", mustBeObject);
        let supported = getFlag(options, keys22, "supported", mustBeObject);
        let pure = getFlag(options, keys22, "pure", mustBeArray);
        let keepNames = getFlag(options, keys22, "keepNames", mustBeBoolean);
        let platform = getFlag(options, keys22, "platform", mustBeString);
        if (legalComments)
          flags.push(`--legal-comments=${legalComments}`);
        if (sourceRoot !== void 0)
          flags.push(`--source-root=${sourceRoot}`);
        if (sourcesContent !== void 0)
          flags.push(`--sources-content=${sourcesContent}`);
        if (target) {
          if (Array.isArray(target))
            flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
          else
            flags.push(`--target=${validateTarget(target)}`);
        }
        if (format)
          flags.push(`--format=${format}`);
        if (globalName)
          flags.push(`--global-name=${globalName}`);
        if (platform)
          flags.push(`--platform=${platform}`);
        if (minify)
          flags.push("--minify");
        if (minifySyntax)
          flags.push("--minify-syntax");
        if (minifyWhitespace)
          flags.push("--minify-whitespace");
        if (minifyIdentifiers)
          flags.push("--minify-identifiers");
        if (charset)
          flags.push(`--charset=${charset}`);
        if (treeShaking !== void 0)
          flags.push(`--tree-shaking=${treeShaking}`);
        if (ignoreAnnotations)
          flags.push(`--ignore-annotations`);
        if (drop)
          for (let what of drop)
            flags.push(`--drop:${validateStringValue(what, "drop")}`);
        if (mangleProps)
          flags.push(`--mangle-props=${mangleProps.source}`);
        if (reserveProps)
          flags.push(`--reserve-props=${reserveProps.source}`);
        if (mangleQuoted !== void 0)
          flags.push(`--mangle-quoted=${mangleQuoted}`);
        if (jsx)
          flags.push(`--jsx=${jsx}`);
        if (jsxFactory)
          flags.push(`--jsx-factory=${jsxFactory}`);
        if (jsxFragment)
          flags.push(`--jsx-fragment=${jsxFragment}`);
        if (jsxImportSource)
          flags.push(`--jsx-import-source=${jsxImportSource}`);
        if (jsxDev)
          flags.push(`--jsx-dev`);
        if (jsxSideEffects)
          flags.push(`--jsx-side-effects`);
        if (define22) {
          for (let key in define22) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define22[key], "define", key)}`);
          }
        }
        if (logOverride) {
          for (let key in logOverride) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
          }
        }
        if (supported) {
          for (let key in supported) {
            if (key.indexOf("=") >= 0)
              throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean")
              throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
          }
        }
        if (pure)
          for (let fn of pure)
            flags.push(`--pure:${validateStringValue(fn, "pure")}`);
        if (keepNames)
          flags.push(`--keep-names`);
      }
      __name2(pushCommonFlags, "pushCommonFlags");
      function flagsForBuildOptions(callName, options, isTTY, logLevelDefault, writeDefault) {
        var _a;
        let flags = [];
        let entries32 = [];
        let keys22 = /* @__PURE__ */ Object.create(null);
        let stdinContents = null;
        let stdinResolveDir = null;
        let watchMode = null;
        pushLogFlags(flags, options, keys22, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys22);
        let sourcemap = getFlag(options, keys22, "sourcemap", mustBeStringOrBoolean);
        let bundle = getFlag(options, keys22, "bundle", mustBeBoolean);
        let watch = getFlag(options, keys22, "watch", mustBeBooleanOrObject);
        let splitting = getFlag(options, keys22, "splitting", mustBeBoolean);
        let preserveSymlinks = getFlag(options, keys22, "preserveSymlinks", mustBeBoolean);
        let metafile = getFlag(options, keys22, "metafile", mustBeBoolean);
        let outfile = getFlag(options, keys22, "outfile", mustBeString);
        let outdir = getFlag(options, keys22, "outdir", mustBeString);
        let outbase = getFlag(options, keys22, "outbase", mustBeString);
        let tsconfig = getFlag(options, keys22, "tsconfig", mustBeString);
        let resolveExtensions = getFlag(options, keys22, "resolveExtensions", mustBeArray);
        let nodePathsInput = getFlag(options, keys22, "nodePaths", mustBeArray);
        let mainFields = getFlag(options, keys22, "mainFields", mustBeArray);
        let conditions = getFlag(options, keys22, "conditions", mustBeArray);
        let external = getFlag(options, keys22, "external", mustBeArray);
        let packages = getFlag(options, keys22, "packages", mustBeString);
        let alias = getFlag(options, keys22, "alias", mustBeObject);
        let loader = getFlag(options, keys22, "loader", mustBeObject);
        let outExtension = getFlag(options, keys22, "outExtension", mustBeObject);
        let publicPath = getFlag(options, keys22, "publicPath", mustBeString);
        let entryNames = getFlag(options, keys22, "entryNames", mustBeString);
        let chunkNames = getFlag(options, keys22, "chunkNames", mustBeString);
        let assetNames = getFlag(options, keys22, "assetNames", mustBeString);
        let inject = getFlag(options, keys22, "inject", mustBeArray);
        let banner = getFlag(options, keys22, "banner", mustBeObject);
        let footer = getFlag(options, keys22, "footer", mustBeObject);
        let entryPoints = getFlag(options, keys22, "entryPoints", mustBeArrayOrRecord);
        let absWorkingDir = getFlag(options, keys22, "absWorkingDir", mustBeString);
        let stdin = getFlag(options, keys22, "stdin", mustBeObject);
        let write = (_a = getFlag(options, keys22, "write", mustBeBoolean)) != null ? _a : writeDefault;
        let allowOverwrite = getFlag(options, keys22, "allowOverwrite", mustBeBoolean);
        let incremental = getFlag(options, keys22, "incremental", mustBeBoolean) === true;
        let mangleCache = getFlag(options, keys22, "mangleCache", mustBeObject);
        keys22.plugins = true;
        checkForInvalidFlags(options, keys22, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
        if (bundle)
          flags.push("--bundle");
        if (allowOverwrite)
          flags.push("--allow-overwrite");
        if (watch) {
          flags.push("--watch");
          if (typeof watch === "boolean") {
            watchMode = {};
          } else {
            let watchKeys = /* @__PURE__ */ Object.create(null);
            let onRebuild = getFlag(watch, watchKeys, "onRebuild", mustBeFunction);
            checkForInvalidFlags(watch, watchKeys, `on "watch" in ${callName}() call`);
            watchMode = { onRebuild };
          }
        }
        if (splitting)
          flags.push("--splitting");
        if (preserveSymlinks)
          flags.push("--preserve-symlinks");
        if (metafile)
          flags.push(`--metafile`);
        if (outfile)
          flags.push(`--outfile=${outfile}`);
        if (outdir)
          flags.push(`--outdir=${outdir}`);
        if (outbase)
          flags.push(`--outbase=${outbase}`);
        if (tsconfig)
          flags.push(`--tsconfig=${tsconfig}`);
        if (packages)
          flags.push(`--packages=${packages}`);
        if (resolveExtensions) {
          let values22 = [];
          for (let value of resolveExtensions) {
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid resolve extension: ${value}`);
            values22.push(value);
          }
          flags.push(`--resolve-extensions=${values22.join(",")}`);
        }
        if (publicPath)
          flags.push(`--public-path=${publicPath}`);
        if (entryNames)
          flags.push(`--entry-names=${entryNames}`);
        if (chunkNames)
          flags.push(`--chunk-names=${chunkNames}`);
        if (assetNames)
          flags.push(`--asset-names=${assetNames}`);
        if (mainFields) {
          let values22 = [];
          for (let value of mainFields) {
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid main field: ${value}`);
            values22.push(value);
          }
          flags.push(`--main-fields=${values22.join(",")}`);
        }
        if (conditions) {
          let values22 = [];
          for (let value of conditions) {
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0)
              throw new Error(`Invalid condition: ${value}`);
            values22.push(value);
          }
          flags.push(`--conditions=${values22.join(",")}`);
        }
        if (external)
          for (let name of external)
            flags.push(`--external:${validateStringValue(name, "external")}`);
        if (alias) {
          for (let old in alias) {
            if (old.indexOf("=") >= 0)
              throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
          }
        }
        if (banner) {
          for (let type in banner) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
          }
        }
        if (footer) {
          for (let type in footer) {
            if (type.indexOf("=") >= 0)
              throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
          }
        }
        if (inject)
          for (let path of inject)
            flags.push(`--inject:${validateStringValue(path, "inject")}`);
        if (loader) {
          for (let ext in loader) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
          }
        }
        if (outExtension) {
          for (let ext in outExtension) {
            if (ext.indexOf("=") >= 0)
              throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
          }
        }
        if (entryPoints) {
          if (Array.isArray(entryPoints)) {
            for (let entryPoint of entryPoints) {
              entries32.push(["", validateStringValue(entryPoint, "entry point")]);
            }
          } else {
            for (let key in entryPoints) {
              entries32.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
            }
          }
        }
        if (stdin) {
          let stdinKeys = /* @__PURE__ */ Object.create(null);
          let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
          let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
          let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
          checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
          if (sourcefile)
            flags.push(`--sourcefile=${sourcefile}`);
          if (loader2)
            flags.push(`--loader=${loader2}`);
          if (resolveDir)
            stdinResolveDir = resolveDir;
          if (typeof contents === "string")
            stdinContents = encodeUTF8(contents);
          else if (contents instanceof Uint8Array)
            stdinContents = contents;
        }
        let nodePaths = [];
        if (nodePathsInput) {
          for (let value of nodePathsInput) {
            value += "";
            nodePaths.push(value);
          }
        }
        return {
          entries: entries32,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          incremental,
          nodePaths,
          watch: watchMode,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name2(flagsForBuildOptions, "flagsForBuildOptions");
      function flagsForTransformOptions(callName, options, isTTY, logLevelDefault) {
        let flags = [];
        let keys22 = /* @__PURE__ */ Object.create(null);
        pushLogFlags(flags, options, keys22, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys22);
        let sourcemap = getFlag(options, keys22, "sourcemap", mustBeStringOrBoolean);
        let tsconfigRaw = getFlag(options, keys22, "tsconfigRaw", mustBeStringOrObject);
        let sourcefile = getFlag(options, keys22, "sourcefile", mustBeString);
        let loader = getFlag(options, keys22, "loader", mustBeString);
        let banner = getFlag(options, keys22, "banner", mustBeString);
        let footer = getFlag(options, keys22, "footer", mustBeString);
        let mangleCache = getFlag(options, keys22, "mangleCache", mustBeObject);
        checkForInvalidFlags(options, keys22, `in ${callName}() call`);
        if (sourcemap)
          flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
        if (tsconfigRaw)
          flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
        if (sourcefile)
          flags.push(`--sourcefile=${sourcefile}`);
        if (loader)
          flags.push(`--loader=${loader}`);
        if (banner)
          flags.push(`--banner=${banner}`);
        if (footer)
          flags.push(`--footer=${footer}`);
        return {
          flags,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name2(flagsForTransformOptions, "flagsForTransformOptions");
      function createChannel(streamIn) {
        const requestCallbacksByKey = {};
        const closeData = { didClose: false, reason: "" };
        let responseCallbacks = {};
        let nextRequestID = 0;
        let nextBuildKey = 0;
        let stdout = new Uint8Array(16 * 1024);
        let stdoutUsed = 0;
        let readFromStdout = /* @__PURE__ */ __name2((chunk) => {
          let limit = stdoutUsed + chunk.length;
          if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
          }
          stdout.set(chunk, stdoutUsed);
          stdoutUsed += chunk.length;
          let offset = 0;
          while (offset + 4 <= stdoutUsed) {
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
              break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
          }
          if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
          }
        }, "readFromStdout");
        let afterClose = /* @__PURE__ */ __name2((error) => {
          closeData.didClose = true;
          if (error)
            closeData.reason = ": " + (error.message || error);
          const text = "The service was stopped" + closeData.reason;
          for (let id in responseCallbacks) {
            responseCallbacks[id](text, null);
          }
          responseCallbacks = {};
        }, "afterClose");
        let sendRequest = /* @__PURE__ */ __name2((refs, value, callback) => {
          if (closeData.didClose)
            return callback("The service is no longer running" + closeData.reason, null);
          let id = nextRequestID++;
          responseCallbacks[id] = (error, response) => {
            try {
              callback(error, response);
            } finally {
              if (refs)
                refs.unref();
            }
          };
          if (refs)
            refs.ref();
          streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
        }, "sendRequest");
        let sendResponse = /* @__PURE__ */ __name2((id, value) => {
          if (closeData.didClose)
            throw new Error("The service is no longer running" + closeData.reason);
          streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
        }, "sendResponse");
        let handleRequest = /* @__PURE__ */ __name2((id, request) => __async(this, null, function* () {
          try {
            if (request.command === "ping") {
              sendResponse(id, {});
              return;
            }
            if (typeof request.key === "number") {
              const requestCallbacks = requestCallbacksByKey[request.key];
              if (requestCallbacks) {
                const callback = requestCallbacks[request.command];
                if (callback) {
                  yield callback(id, request);
                  return;
                }
              }
            }
            throw new Error(`Invalid command: ` + request.command);
          } catch (e) {
            sendResponse(id, { errors: [extractErrorMessageV8(e, streamIn, null, void 0, "")] });
          }
        }), "handleRequest");
        let isFirstPacket = true;
        let handleIncomingPacket = /* @__PURE__ */ __name2((bytes) => {
          if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.16.13") {
              throw new Error(`Cannot start service: Host version "${"0.16.13"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
          }
          let packet = decodePacket(bytes);
          if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
          } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error)
              callback(packet.value.error, {});
            else
              callback(null, packet.value);
          }
        }, "handleIncomingPacket");
        let buildOrServe = /* @__PURE__ */ __name2(({ callName, refs, serveOptions, options, isTTY, defaultWD, callback }) => {
          let refCount = 0;
          const buildKey = nextBuildKey++;
          const requestCallbacks = {};
          const buildRefs = {
            ref() {
              if (++refCount === 1) {
                if (refs)
                  refs.ref();
              }
            },
            unref() {
              if (--refCount === 0) {
                delete requestCallbacksByKey[buildKey];
                if (refs)
                  refs.unref();
              }
            }
          };
          requestCallbacksByKey[buildKey] = requestCallbacks;
          buildRefs.ref();
          buildOrServeImpl(
            callName,
            buildKey,
            sendRequest,
            sendResponse,
            buildRefs,
            streamIn,
            requestCallbacks,
            options,
            serveOptions,
            isTTY,
            defaultWD,
            closeData,
            (err, res) => {
              try {
                callback(err, res);
              } finally {
                buildRefs.unref();
              }
            }
          );
        }, "buildOrServe");
        let transform22 = /* @__PURE__ */ __name2(({ callName, refs, input, options, isTTY, fs, callback }) => {
          const details = createObjectStash();
          let start = /* @__PURE__ */ __name2((inputPath) => {
            try {
              if (typeof input !== "string" && !(input instanceof Uint8Array))
                throw new Error('The input to "transform" must be a string or a Uint8Array');
              let {
                flags,
                mangleCache
              } = flagsForTransformOptions(callName, options, isTTY, transformLogLevelDefault);
              let request = {
                command: "transform",
                flags,
                inputFS: inputPath !== null,
                input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
              };
              if (mangleCache)
                request.mangleCache = mangleCache;
              sendRequest(refs, request, (error, response) => {
                if (error)
                  return callback(new Error(error), null);
                let errors = replaceDetailsInMessages(response.errors, details);
                let warnings = replaceDetailsInMessages(response.warnings, details);
                let outstanding = 1;
                let next = /* @__PURE__ */ __name2(() => {
                  if (--outstanding === 0) {
                    let result = { warnings, code: response.code, map: response.map };
                    if ("legalComments" in response)
                      result.legalComments = response == null ? void 0 : response.legalComments;
                    if (response.mangleCache)
                      result.mangleCache = response == null ? void 0 : response.mangleCache;
                    callback(null, result);
                  }
                }, "next");
                if (errors.length > 0)
                  return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                if (response.codeFS) {
                  outstanding++;
                  fs.readFile(response.code, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.code = contents;
                      next();
                    }
                  });
                }
                if (response.mapFS) {
                  outstanding++;
                  fs.readFile(response.map, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.map = contents;
                      next();
                    }
                  });
                }
                next();
              });
            } catch (e) {
              let flags = [];
              try {
                pushLogFlags(flags, options, {}, isTTY, transformLogLevelDefault);
              } catch (e2) {
              }
              const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
              sendRequest(refs, { command: "error", flags, error }, () => {
                error.detail = details.load(error.detail);
                callback(failureErrorWithLog("Transform failed", [error], []), null);
              });
            }
          }, "start");
          if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = /* @__PURE__ */ __name2(() => fs.writeFile(input, next), "start");
          }
          start(null);
        }, "transform2");
        let formatMessages2 = /* @__PURE__ */ __name2(({ callName, refs, messages, options, callback }) => {
          let result = sanitizeMessages(messages, "messages", null, "");
          if (!options)
            throw new Error(`Missing second argument in ${callName}() call`);
          let keys22 = {};
          let kind = getFlag(options, keys22, "kind", mustBeString);
          let color = getFlag(options, keys22, "color", mustBeBoolean);
          let terminalWidth = getFlag(options, keys22, "terminalWidth", mustBeInteger);
          checkForInvalidFlags(options, keys22, `in ${callName}() call`);
          if (kind === void 0)
            throw new Error(`Missing "kind" in ${callName}() call`);
          if (kind !== "error" && kind !== "warning")
            throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
          let request = {
            command: "format-msgs",
            messages: result,
            isWarning: kind === "warning"
          };
          if (color !== void 0)
            request.color = color;
          if (terminalWidth !== void 0)
            request.terminalWidth = terminalWidth;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.messages);
          });
        }, "formatMessages2");
        let analyzeMetafile2 = /* @__PURE__ */ __name2(({ callName, refs, metafile, options, callback }) => {
          if (options === void 0)
            options = {};
          let keys22 = {};
          let color = getFlag(options, keys22, "color", mustBeBoolean);
          let verbose = getFlag(options, keys22, "verbose", mustBeBoolean);
          checkForInvalidFlags(options, keys22, `in ${callName}() call`);
          let request = {
            command: "analyze-metafile",
            metafile
          };
          if (color !== void 0)
            request.color = color;
          if (verbose !== void 0)
            request.verbose = verbose;
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            callback(null, response.result);
          });
        }, "analyzeMetafile2");
        return {
          readFromStdout,
          afterClose,
          service: {
            buildOrServe,
            transform: transform22,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
          }
        };
      }
      __name2(createChannel, "createChannel");
      function buildOrServeImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, serveOptions, isTTY, defaultWD, closeData, callback) {
        const details = createObjectStash();
        const logPluginError = /* @__PURE__ */ __name2((e, pluginName, note, done) => {
          const flags = [];
          try {
            pushLogFlags(flags, options, {}, isTTY, buildLogLevelDefault);
          } catch (e2) {
          }
          const message = extractErrorMessageV8(e, streamIn, details, note, pluginName);
          sendRequest(refs, { command: "error", flags, error: message }, () => {
            message.detail = details.load(message.detail);
            done(message);
          });
        }, "logPluginError");
        const handleError = /* @__PURE__ */ __name2((e, pluginName) => {
          logPluginError(e, pluginName, void 0, (error) => {
            callback(failureErrorWithLog("Build failed", [error], []), null);
          });
        }, "handleError");
        let plugins;
        if (typeof options === "object") {
          const value = options.plugins;
          if (value !== void 0) {
            if (!Array.isArray(value))
              throw new Error(`"plugins" must be an array`);
            plugins = value;
          }
        }
        if (plugins && plugins.length > 0) {
          if (streamIn.isSync) {
            handleError(new Error("Cannot use plugins in synchronous API calls"), "");
            return;
          }
          handlePlugins(
            buildKey,
            sendRequest,
            sendResponse,
            refs,
            streamIn,
            requestCallbacks,
            options,
            plugins,
            details
          ).then(
            (result) => {
              if (!result.ok) {
                handleError(result.error, result.pluginName);
                return;
              }
              try {
                buildOrServeContinue(result.requestPlugins, result.runOnEndCallbacks);
              } catch (e) {
                handleError(e, "");
              }
            },
            (e) => handleError(e, "")
          );
          return;
        }
        try {
          buildOrServeContinue(null, (result, logPluginError2, done) => done());
        } catch (e) {
          handleError(e, "");
        }
        function buildOrServeContinue(requestPlugins, runOnEndCallbacks) {
          let writeDefault = !streamIn.isWriteUnavailable;
          let {
            entries: entries32,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir,
            incremental,
            nodePaths,
            watch,
            mangleCache
          } = flagsForBuildOptions(callName, options, isTTY, buildLogLevelDefault, writeDefault);
          let request = {
            command: "build",
            key: buildKey,
            entries: entries32,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD,
            incremental,
            nodePaths
          };
          if (requestPlugins)
            request.plugins = requestPlugins;
          if (mangleCache)
            request.mangleCache = mangleCache;
          let serve2 = serveOptions && buildServeData(buildKey, sendRequest, sendResponse, refs, requestCallbacks, serveOptions, request);
          let rebuild;
          let stop;
          let copyResponseToResult = /* @__PURE__ */ __name2((response, result) => {
            if (response.outputFiles)
              result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile)
              result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache)
              result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0)
              console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
          }, "copyResponseToResult");
          let buildResponseToResult = /* @__PURE__ */ __name2((response, callback2) => {
            let result = {
              errors: replaceDetailsInMessages(response.errors, details),
              warnings: replaceDetailsInMessages(response.warnings, details)
            };
            copyResponseToResult(response, result);
            runOnEndCallbacks(result, logPluginError, () => {
              if (result.errors.length > 0) {
                return callback2(failureErrorWithLog("Build failed", result.errors, result.warnings), null);
              }
              if (response.rebuild) {
                if (!rebuild) {
                  let isDisposed = false;
                  rebuild = /* @__PURE__ */ __name2(() => new Promise((resolve, reject) => {
                    if (isDisposed || closeData.didClose)
                      throw new Error("Cannot rebuild");
                    sendRequest(
                      refs,
                      { command: "rebuild", key: buildKey },
                      (error2, response2) => {
                        if (error2) {
                          const message = { id: "", pluginName: "", text: error2, location: null, notes: [], detail: void 0 };
                          return callback2(failureErrorWithLog("Build failed", [message], []), null);
                        }
                        buildResponseToResult(response2, (error3, result3) => {
                          if (error3)
                            reject(error3);
                          else
                            resolve(result3);
                        });
                      }
                    );
                  }), "rebuild");
                  refs.ref();
                  rebuild.dispose = () => {
                    if (isDisposed)
                      return;
                    isDisposed = true;
                    sendRequest(refs, { command: "rebuild-dispose", key: buildKey }, () => {
                    });
                    refs.unref();
                  };
                }
                result.rebuild = rebuild;
              }
              if (response.watch) {
                if (!stop) {
                  let isStopped = false;
                  refs.ref();
                  stop = /* @__PURE__ */ __name2(() => {
                    if (isStopped)
                      return;
                    isStopped = true;
                    delete requestCallbacks["watch-rebuild"];
                    sendRequest(refs, { command: "watch-stop", key: buildKey }, () => {
                    });
                    refs.unref();
                  }, "stop");
                  if (watch) {
                    requestCallbacks["watch-rebuild"] = (id, request2) => {
                      try {
                        let watchResponse = request2.args;
                        let result2 = {
                          errors: replaceDetailsInMessages(watchResponse.errors, details),
                          warnings: replaceDetailsInMessages(watchResponse.warnings, details)
                        };
                        copyResponseToResult(watchResponse, result2);
                        runOnEndCallbacks(result2, logPluginError, () => {
                          if (result2.errors.length > 0) {
                            if (watch.onRebuild)
                              watch.onRebuild(failureErrorWithLog("Build failed", result2.errors, result2.warnings), null);
                            return;
                          }
                          result2.stop = stop;
                          if (watch.onRebuild)
                            watch.onRebuild(null, result2);
                        });
                      } catch (err) {
                        console.error(err);
                      }
                      sendResponse(id, {});
                    };
                  }
                }
                result.stop = stop;
              }
              callback2(null, result);
            });
          }, "buildResponseToResult");
          if (write && streamIn.isWriteUnavailable)
            throw new Error(`The "write" option is unavailable in this environment`);
          if (incremental && streamIn.isSync)
            throw new Error(`Cannot use "incremental" with a synchronous build`);
          if (watch && streamIn.isSync)
            throw new Error(`Cannot use "watch" with a synchronous build`);
          sendRequest(refs, request, (error, response) => {
            if (error)
              return callback(new Error(error), null);
            if (serve2) {
              let serveResponse = response;
              let isStopped = false;
              refs.ref();
              let result = {
                port: serveResponse.port,
                host: serveResponse.host,
                wait: serve2.wait,
                stop() {
                  if (isStopped)
                    return;
                  isStopped = true;
                  serve2.stop();
                  refs.unref();
                }
              };
              refs.ref();
              serve2.wait.then(refs.unref, refs.unref);
              return callback(null, result);
            }
            return buildResponseToResult(response, callback);
          });
        }
        __name2(buildOrServeContinue, "buildOrServeContinue");
      }
      __name2(buildOrServeImpl, "buildOrServeImpl");
      var buildServeData = /* @__PURE__ */ __name2((buildKey, sendRequest, sendResponse, refs, requestCallbacks, options, request) => {
        let keys22 = {};
        let port = getFlag(options, keys22, "port", mustBeInteger);
        let host = getFlag(options, keys22, "host", mustBeString);
        let servedir = getFlag(options, keys22, "servedir", mustBeString);
        let onRequest = getFlag(options, keys22, "onRequest", mustBeFunction);
        let wait = new Promise((resolve, reject) => {
          requestCallbacks["serve-wait"] = (id, request2) => {
            if (request2.error !== null)
              reject(new Error(request2.error));
            else
              resolve();
            sendResponse(id, {});
          };
        });
        request.serve = {};
        checkForInvalidFlags(options, keys22, `in serve() call`);
        if (port !== void 0)
          request.serve.port = port;
        if (host !== void 0)
          request.serve.host = host;
        if (servedir !== void 0)
          request.serve.servedir = servedir;
        requestCallbacks["serve-request"] = (id, request2) => {
          if (onRequest)
            onRequest(request2.args);
          sendResponse(id, {});
        };
        return {
          wait,
          stop() {
            sendRequest(refs, { command: "serve-stop", key: buildKey }, () => {
            });
          }
        };
      }, "buildServeData");
      var handlePlugins = /* @__PURE__ */ __name2((buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => __async(void 0, null, function* () {
        let onStartCallbacks = [];
        let onEndCallbacks = [];
        let onResolveCallbacks = {};
        let onLoadCallbacks = {};
        let nextCallbackID = 0;
        let i = 0;
        let requestPlugins = [];
        let isSetupDone = false;
        plugins = [...plugins];
        for (let item of plugins) {
          let keys22 = {};
          if (typeof item !== "object")
            throw new Error(`Plugin at index ${i} must be an object`);
          const name = getFlag(item, keys22, "name", mustBeString);
          if (typeof name !== "string" || name === "")
            throw new Error(`Plugin at index ${i} is missing a name`);
          try {
            let setup = getFlag(item, keys22, "setup", mustBeFunction);
            if (typeof setup !== "function")
              throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys22, `on plugin ${quote(name)}`);
            let plugin = {
              name,
              onResolve: [],
              onLoad: []
            };
            i++;
            let resolve = /* @__PURE__ */ __name2((path, options = {}) => {
              if (!isSetupDone)
                throw new Error('Cannot call "resolve" before plugin setup has completed');
              if (typeof path !== "string")
                throw new Error(`The path to resolve must be a string`);
              let keys222 = /* @__PURE__ */ Object.create(null);
              let pluginName = getFlag(options, keys222, "pluginName", mustBeString);
              let importer = getFlag(options, keys222, "importer", mustBeString);
              let namespace = getFlag(options, keys222, "namespace", mustBeString);
              let resolveDir = getFlag(options, keys222, "resolveDir", mustBeString);
              let kind = getFlag(options, keys222, "kind", mustBeString);
              let pluginData = getFlag(options, keys222, "pluginData", canBeAnything);
              checkForInvalidFlags(options, keys222, "in resolve() call");
              return new Promise((resolve2, reject) => {
                const request = {
                  command: "resolve",
                  path,
                  key: buildKey,
                  pluginName: name
                };
                if (pluginName != null)
                  request.pluginName = pluginName;
                if (importer != null)
                  request.importer = importer;
                if (namespace != null)
                  request.namespace = namespace;
                if (resolveDir != null)
                  request.resolveDir = resolveDir;
                if (kind != null)
                  request.kind = kind;
                else
                  throw new Error(`Must specify "kind" when calling "resolve"`);
                if (pluginData != null)
                  request.pluginData = details.store(pluginData);
                sendRequest(refs, request, (error, response) => {
                  if (error !== null)
                    reject(new Error(error));
                  else
                    resolve2({
                      errors: replaceDetailsInMessages(response.errors, details),
                      warnings: replaceDetailsInMessages(response.warnings, details),
                      path: response.path,
                      external: response.external,
                      sideEffects: response.sideEffects,
                      namespace: response.namespace,
                      suffix: response.suffix,
                      pluginData: details.load(response.pluginData)
                    });
                });
              });
            }, "resolve");
            let promise = setup({
              initialOptions,
              resolve,
              onStart(callback) {
                let registeredText = `This error came from the "onStart" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                onStartCallbacks.push({ name, callback, note: registeredNote });
              },
              onEnd(callback) {
                let registeredText = `This error came from the "onEnd" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                onEndCallbacks.push({ name, callback, note: registeredNote });
              },
              onResolve(options, callback) {
                let registeredText = `This error came from the "onResolve" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                let keys222 = {};
                let filter32 = getFlag(options, keys222, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys222, "namespace", mustBeString);
                checkForInvalidFlags(options, keys222, `in onResolve() call for plugin ${quote(name)}`);
                if (filter32 == null)
                  throw new Error(`onResolve() call is missing a filter`);
                let id = nextCallbackID++;
                onResolveCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onResolve.push({ id, filter: filter32.source, namespace: namespace || "" });
              },
              onLoad(options, callback) {
                let registeredText = `This error came from the "onLoad" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                let keys222 = {};
                let filter32 = getFlag(options, keys222, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys222, "namespace", mustBeString);
                checkForInvalidFlags(options, keys222, `in onLoad() call for plugin ${quote(name)}`);
                if (filter32 == null)
                  throw new Error(`onLoad() call is missing a filter`);
                let id = nextCallbackID++;
                onLoadCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onLoad.push({ id, filter: filter32.source, namespace: namespace || "" });
              },
              esbuild: streamIn.esbuild
            });
            if (promise)
              yield promise;
            requestPlugins.push(plugin);
          } catch (e) {
            return { ok: false, error: e, pluginName: name };
          }
        }
        requestCallbacks["on-start"] = (id, request) => __async(void 0, null, function* () {
          let response = { errors: [], warnings: [] };
          yield Promise.all(onStartCallbacks.map((_0) => __async(void 0, [_0], function* ({ name, callback, note }) {
            try {
              let result = yield callback();
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onStart() callback in plugin ${quote(name)}`);
                if (errors != null)
                  response.errors.push(...sanitizeMessages(errors, "errors", details, name));
                if (warnings != null)
                  response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name));
              }
            } catch (e) {
              response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
          })));
          sendResponse(id, response);
        });
        requestCallbacks["on-resolve"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onResolveCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                importer: request.importer,
                namespace: request.namespace,
                resolveDir: request.resolveDir,
                kind: request.kind,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let pluginName = getFlag(result, keys22, "pluginName", mustBeString);
                let path = getFlag(result, keys22, "path", mustBeString);
                let namespace = getFlag(result, keys22, "namespace", mustBeString);
                let suffix = getFlag(result, keys22, "suffix", mustBeString);
                let external = getFlag(result, keys22, "external", mustBeBoolean);
                let sideEffects = getFlag(result, keys22, "sideEffects", mustBeBoolean);
                let pluginData = getFlag(result, keys22, "pluginData", canBeAnything);
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys22, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys22, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onResolve() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (path != null)
                  response.path = path;
                if (namespace != null)
                  response.namespace = namespace;
                if (suffix != null)
                  response.suffix = suffix;
                if (external != null)
                  response.external = external;
                if (sideEffects != null)
                  response.sideEffects = sideEffects;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        requestCallbacks["on-load"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onLoadCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                namespace: request.namespace,
                suffix: request.suffix,
                pluginData: details.load(request.pluginData)
              });
              if (result != null) {
                if (typeof result !== "object")
                  throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                let keys22 = {};
                let pluginName = getFlag(result, keys22, "pluginName", mustBeString);
                let contents = getFlag(result, keys22, "contents", mustBeStringOrUint8Array);
                let resolveDir = getFlag(result, keys22, "resolveDir", mustBeString);
                let pluginData = getFlag(result, keys22, "pluginData", canBeAnything);
                let loader = getFlag(result, keys22, "loader", mustBeString);
                let errors = getFlag(result, keys22, "errors", mustBeArray);
                let warnings = getFlag(result, keys22, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys22, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys22, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys22, `from onLoad() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null)
                  response.pluginName = pluginName;
                if (contents instanceof Uint8Array)
                  response.contents = contents;
                else if (contents != null)
                  response.contents = encodeUTF8(contents);
                if (resolveDir != null)
                  response.resolveDir = resolveDir;
                if (pluginData != null)
                  response.pluginData = details.store(pluginData);
                if (loader != null)
                  response.loader = loader;
                if (errors != null)
                  response.errors = sanitizeMessages(errors, "errors", details, name);
                if (warnings != null)
                  response.warnings = sanitizeMessages(warnings, "warnings", details, name);
                if (watchFiles != null)
                  response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null)
                  response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        let runOnEndCallbacks = /* @__PURE__ */ __name2((result, logPluginError, done) => done(), "runOnEndCallbacks");
        if (onEndCallbacks.length > 0) {
          runOnEndCallbacks = /* @__PURE__ */ __name2((result, logPluginError, done) => {
            (() => __async(void 0, null, function* () {
              for (const { name, callback, note } of onEndCallbacks) {
                try {
                  yield callback(result);
                } catch (e) {
                  result.errors.push(yield new Promise((resolve) => logPluginError(e, name, note && note(), resolve)));
                }
              }
            }))().then(done);
          }, "runOnEndCallbacks");
        }
        isSetupDone = true;
        return {
          ok: true,
          requestPlugins,
          runOnEndCallbacks
        };
      }), "handlePlugins");
      function createObjectStash() {
        const map22 = /* @__PURE__ */ new Map();
        let nextID = 0;
        return {
          load(id) {
            return map22.get(id);
          },
          store(value) {
            if (value === void 0)
              return -1;
            const id = nextID++;
            map22.set(id, value);
            return id;
          }
        };
      }
      __name2(createObjectStash, "createObjectStash");
      function extractCallerV8(e, streamIn, ident) {
        let note;
        let tried = false;
        return () => {
          if (tried)
            return note;
          tried = true;
          try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location2 = parseStackLinesV8(streamIn, lines, ident);
            if (location2) {
              note = { text: e.message, location: location2 };
              return note;
            }
          } catch (e2) {
          }
        };
      }
      __name2(extractCallerV8, "extractCallerV8");
      function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
        let text = "Internal error";
        let location2 = null;
        try {
          text = (e && e.message || e) + "";
        } catch (e2) {
        }
        try {
          location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
        } catch (e2) {
        }
        return { id: "", pluginName, text, location: location2, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
      }
      __name2(extractErrorMessageV8, "extractErrorMessageV8");
      function parseStackLinesV8(streamIn, lines, ident) {
        let at = "    at ";
        if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            if (!line.startsWith(at))
              continue;
            line = line.slice(at.length);
            while (true) {
              let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^(\S+):(\d+):(\d+)$/.exec(line);
              if (match) {
                let contents;
                try {
                  contents = streamIn.readFileSync(match[1], "utf8");
                } catch (e) {
                  break;
                }
                let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                let column = +match[3] - 1;
                let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                return {
                  file: match[1],
                  namespace: "file",
                  line: +match[2],
                  column: encodeUTF8(lineText.slice(0, column)).length,
                  length: encodeUTF8(lineText.slice(column, column + length)).length,
                  lineText: lineText + "\n" + lines.slice(1).join("\n"),
                  suggestion: ""
                };
              }
              break;
            }
          }
        }
        return null;
      }
      __name2(parseStackLinesV8, "parseStackLinesV8");
      function failureErrorWithLog(text, errors, warnings) {
        let limit = 5;
        let summary = errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
          if (i === limit)
            return "\n...";
          if (!e.location)
            return `
error: ${e.text}`;
          let { file, line, column } = e.location;
          let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
          return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
        }).join("");
        let error = new Error(`${text}${summary}`);
        error.errors = errors;
        error.warnings = warnings;
        return error;
      }
      __name2(failureErrorWithLog, "failureErrorWithLog");
      function replaceDetailsInMessages(messages, stash) {
        for (const message of messages) {
          message.detail = stash.load(message.detail);
        }
        return messages;
      }
      __name2(replaceDetailsInMessages, "replaceDetailsInMessages");
      function sanitizeLocation(location2, where) {
        if (location2 == null)
          return null;
        let keys22 = {};
        let file = getFlag(location2, keys22, "file", mustBeString);
        let namespace = getFlag(location2, keys22, "namespace", mustBeString);
        let line = getFlag(location2, keys22, "line", mustBeInteger);
        let column = getFlag(location2, keys22, "column", mustBeInteger);
        let length = getFlag(location2, keys22, "length", mustBeInteger);
        let lineText = getFlag(location2, keys22, "lineText", mustBeString);
        let suggestion = getFlag(location2, keys22, "suggestion", mustBeString);
        checkForInvalidFlags(location2, keys22, where);
        return {
          file: file || "",
          namespace: namespace || "",
          line: line || 0,
          column: column || 0,
          length: length || 0,
          lineText: lineText || "",
          suggestion: suggestion || ""
        };
      }
      __name2(sanitizeLocation, "sanitizeLocation");
      function sanitizeMessages(messages, property, stash, fallbackPluginName) {
        let messagesClone = [];
        let index = 0;
        for (const message of messages) {
          let keys22 = {};
          let id = getFlag(message, keys22, "id", mustBeString);
          let pluginName = getFlag(message, keys22, "pluginName", mustBeString);
          let text = getFlag(message, keys22, "text", mustBeString);
          let location2 = getFlag(message, keys22, "location", mustBeObjectOrNull);
          let notes = getFlag(message, keys22, "notes", mustBeArray);
          let detail = getFlag(message, keys22, "detail", canBeAnything);
          let where = `in element ${index} of "${property}"`;
          checkForInvalidFlags(message, keys22, where);
          let notesClone = [];
          if (notes) {
            for (const note of notes) {
              let noteKeys = {};
              let noteText = getFlag(note, noteKeys, "text", mustBeString);
              let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
              checkForInvalidFlags(note, noteKeys, where);
              notesClone.push({
                text: noteText || "",
                location: sanitizeLocation(noteLocation, where)
              });
            }
          }
          messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location2, where),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
          });
          index++;
        }
        return messagesClone;
      }
      __name2(sanitizeMessages, "sanitizeMessages");
      function sanitizeStringArray(values22, property) {
        const result = [];
        for (const value of values22) {
          if (typeof value !== "string")
            throw new Error(`${quote(property)} must be an array of strings`);
          result.push(value);
        }
        return result;
      }
      __name2(sanitizeStringArray, "sanitizeStringArray");
      function convertOutputFiles({ path, contents }) {
        let text = null;
        return {
          path,
          contents,
          get text() {
            const binary = this.contents;
            if (text === null || binary !== contents) {
              contents = binary;
              text = decodeUTF8(binary);
            }
            return text;
          }
        };
      }
      __name2(convertOutputFiles, "convertOutputFiles");
      var version = "0.16.13";
      var build = /* @__PURE__ */ __name2((options) => ensureServiceIsRunning().build(options), "build");
      var serve = /* @__PURE__ */ __name2(() => {
        throw new Error(`The "serve" API only works in node`);
      }, "serve");
      var transform2 = /* @__PURE__ */ __name2((input, options) => ensureServiceIsRunning().transform(input, options), "transform");
      var formatMessages = /* @__PURE__ */ __name2((messages, options) => ensureServiceIsRunning().formatMessages(messages, options), "formatMessages");
      var analyzeMetafile = /* @__PURE__ */ __name2((metafile, options) => ensureServiceIsRunning().analyzeMetafile(metafile, options), "analyzeMetafile");
      var buildSync = /* @__PURE__ */ __name2(() => {
        throw new Error(`The "buildSync" API only works in node`);
      }, "buildSync");
      var transformSync = /* @__PURE__ */ __name2(() => {
        throw new Error(`The "transformSync" API only works in node`);
      }, "transformSync");
      var formatMessagesSync = /* @__PURE__ */ __name2(() => {
        throw new Error(`The "formatMessagesSync" API only works in node`);
      }, "formatMessagesSync");
      var analyzeMetafileSync = /* @__PURE__ */ __name2(() => {
        throw new Error(`The "analyzeMetafileSync" API only works in node`);
      }, "analyzeMetafileSync");
      var initializePromise;
      var longLivedService;
      var ensureServiceIsRunning = /* @__PURE__ */ __name2(() => {
        if (longLivedService)
          return longLivedService;
        if (initializePromise)
          throw new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');
        throw new Error('You need to call "initialize" before calling this');
      }, "ensureServiceIsRunning");
      var initialize2 = /* @__PURE__ */ __name2((options) => {
        options = validateInitializeOptions(options || {});
        let wasmURL = options.wasmURL;
        let wasmModule = options.wasmModule;
        let useWorker = options.worker !== false;
        if (!wasmURL && !wasmModule)
          throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
        if (initializePromise)
          throw new Error('Cannot call "initialize" more than once');
        initializePromise = startRunningService(wasmURL || "", wasmModule, useWorker);
        initializePromise.catch(() => {
          initializePromise = void 0;
        });
        return initializePromise;
      }, "initialize");
      var startRunningService = /* @__PURE__ */ __name2((wasmURL, wasmModule, useWorker) => __async(void 0, null, function* () {
        let worker;
        if (useWorker) {
          let blob = new Blob([`onmessage=${'((postMessage) => {\n      // Copyright 2018 The Go Authors. All rights reserved.\n      // Use of this source code is governed by a BSD-style\n      // license that can be found in the LICENSE file.\n      var __async = (__this, __arguments, generator) => {\n        return new Promise((resolve, reject) => {\n          var fulfilled = (value) => {\n            try {\n              step(generator.next(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var rejected = (value) => {\n            try {\n              step(generator.throw(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n          step((generator = generator.apply(__this, __arguments)).next());\n        });\n      };\n      let onmessage;\n      let globalThis = {};\n      for (let o = self; o; o = Object.getPrototypeOf(o))\n        for (let k of Object.getOwnPropertyNames(o))\n          if (!(k in globalThis))\n            Object.defineProperty(globalThis, k, { get: () => self[k] });\n      "use strict";\n      (() => {\n        const enosys = () => {\n          const err = new Error("not implemented");\n          err.code = "ENOSYS";\n          return err;\n        };\n        if (!globalThis.fs) {\n          let outputBuf = "";\n          globalThis.fs = {\n            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },\n            writeSync(fd, buf) {\n              outputBuf += decoder.decode(buf);\n              const nl = outputBuf.lastIndexOf("\\n");\n              if (nl != -1) {\n                console.log(outputBuf.substr(0, nl));\n                outputBuf = outputBuf.substr(nl + 1);\n              }\n              return buf.length;\n            },\n            write(fd, buf, offset, length, position, callback) {\n              if (offset !== 0 || length !== buf.length || position !== null) {\n                callback(enosys());\n                return;\n              }\n              const n = this.writeSync(fd, buf);\n              callback(null, n);\n            },\n            chmod(path, mode, callback) {\n              callback(enosys());\n            },\n            chown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            close(fd, callback) {\n              callback(enosys());\n            },\n            fchmod(fd, mode, callback) {\n              callback(enosys());\n            },\n            fchown(fd, uid, gid, callback) {\n              callback(enosys());\n            },\n            fstat(fd, callback) {\n              callback(enosys());\n            },\n            fsync(fd, callback) {\n              callback(null);\n            },\n            ftruncate(fd, length, callback) {\n              callback(enosys());\n            },\n            lchown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            link(path, link, callback) {\n              callback(enosys());\n            },\n            lstat(path, callback) {\n              callback(enosys());\n            },\n            mkdir(path, perm, callback) {\n              callback(enosys());\n            },\n            open(path, flags, mode, callback) {\n              callback(enosys());\n            },\n            read(fd, buffer, offset, length, position, callback) {\n              callback(enosys());\n            },\n            readdir(path, callback) {\n              callback(enosys());\n            },\n            readlink(path, callback) {\n              callback(enosys());\n            },\n            rename(from, to, callback) {\n              callback(enosys());\n            },\n            rmdir(path, callback) {\n              callback(enosys());\n            },\n            stat(path, callback) {\n              callback(enosys());\n            },\n            symlink(path, link, callback) {\n              callback(enosys());\n            },\n            truncate(path, length, callback) {\n              callback(enosys());\n            },\n            unlink(path, callback) {\n              callback(enosys());\n            },\n            utimes(path, atime, mtime, callback) {\n              callback(enosys());\n            }\n          };\n        }\n        if (!globalThis.process) {\n          globalThis.process = {\n            getuid() {\n              return -1;\n            },\n            getgid() {\n              return -1;\n            },\n            geteuid() {\n              return -1;\n            },\n            getegid() {\n              return -1;\n            },\n            getgroups() {\n              throw enosys();\n            },\n            pid: -1,\n            ppid: -1,\n            umask() {\n              throw enosys();\n            },\n            cwd() {\n              throw enosys();\n            },\n            chdir() {\n              throw enosys();\n            }\n          };\n        }\n        if (!globalThis.crypto) {\n          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");\n        }\n        if (!globalThis.performance) {\n          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");\n        }\n        if (!globalThis.TextEncoder) {\n          throw new Error("globalThis.TextEncoder is not available, polyfill required");\n        }\n        if (!globalThis.TextDecoder) {\n          throw new Error("globalThis.TextDecoder is not available, polyfill required");\n        }\n        const encoder = new TextEncoder("utf-8");\n        const decoder = new TextDecoder("utf-8");\n        globalThis.Go = class {\n          constructor() {\n            this.argv = ["js"];\n            this.env = {};\n            this.exit = (code) => {\n              if (code !== 0) {\n                console.warn("exit code:", code);\n              }\n            };\n            this._exitPromise = new Promise((resolve) => {\n              this._resolveExitPromise = resolve;\n            });\n            this._pendingEvent = null;\n            this._scheduledTimeouts = /* @__PURE__ */ new Map();\n            this._nextCallbackTimeoutID = 1;\n            const setInt64 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);\n            };\n            const getInt64 = (addr) => {\n              const low = this.mem.getUint32(addr + 0, true);\n              const high = this.mem.getInt32(addr + 4, true);\n              return low + high * 4294967296;\n            };\n            const loadValue = (addr) => {\n              const f = this.mem.getFloat64(addr, true);\n              if (f === 0) {\n                return void 0;\n              }\n              if (!isNaN(f)) {\n                return f;\n              }\n              const id = this.mem.getUint32(addr, true);\n              return this._values[id];\n            };\n            const storeValue = (addr, v) => {\n              const nanHead = 2146959360;\n              if (typeof v === "number" && v !== 0) {\n                if (isNaN(v)) {\n                  this.mem.setUint32(addr + 4, nanHead, true);\n                  this.mem.setUint32(addr, 0, true);\n                  return;\n                }\n                this.mem.setFloat64(addr, v, true);\n                return;\n              }\n              if (v === void 0) {\n                this.mem.setFloat64(addr, 0, true);\n                return;\n              }\n              let id = this._ids.get(v);\n              if (id === void 0) {\n                id = this._idPool.pop();\n                if (id === void 0) {\n                  id = this._values.length;\n                }\n                this._values[id] = v;\n                this._goRefCounts[id] = 0;\n                this._ids.set(v, id);\n              }\n              this._goRefCounts[id]++;\n              let typeFlag = 0;\n              switch (typeof v) {\n                case "object":\n                  if (v !== null) {\n                    typeFlag = 1;\n                  }\n                  break;\n                case "string":\n                  typeFlag = 2;\n                  break;\n                case "symbol":\n                  typeFlag = 3;\n                  break;\n                case "function":\n                  typeFlag = 4;\n                  break;\n              }\n              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);\n              this.mem.setUint32(addr, id, true);\n            };\n            const loadSlice = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return new Uint8Array(this._inst.exports.mem.buffer, array, len);\n            };\n            const loadSliceOfValues = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              const a = new Array(len);\n              for (let i = 0; i < len; i++) {\n                a[i] = loadValue(array + i * 8);\n              }\n              return a;\n            };\n            const loadString = (addr) => {\n              const saddr = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));\n            };\n            const timeOrigin = Date.now() - performance.now();\n            this.importObject = {\n              go: {\n                "runtime.wasmExit": (sp) => {\n                  sp >>>= 0;\n                  const code = this.mem.getInt32(sp + 8, true);\n                  this.exited = true;\n                  delete this._inst;\n                  delete this._values;\n                  delete this._goRefCounts;\n                  delete this._ids;\n                  delete this._idPool;\n                  this.exit(code);\n                },\n                "runtime.wasmWrite": (sp) => {\n                  sp >>>= 0;\n                  const fd = getInt64(sp + 8);\n                  const p = getInt64(sp + 16);\n                  const n = this.mem.getInt32(sp + 24, true);\n                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));\n                },\n                "runtime.resetMemoryDataView": (sp) => {\n                  sp >>>= 0;\n                  this.mem = new DataView(this._inst.exports.mem.buffer);\n                },\n                "runtime.nanotime1": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);\n                },\n                "runtime.walltime": (sp) => {\n                  sp >>>= 0;\n                  const msec = new Date().getTime();\n                  setInt64(sp + 8, msec / 1e3);\n                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);\n                },\n                "runtime.scheduleTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this._nextCallbackTimeoutID;\n                  this._nextCallbackTimeoutID++;\n                  this._scheduledTimeouts.set(id, setTimeout(\n                    () => {\n                      this._resume();\n                      while (this._scheduledTimeouts.has(id)) {\n                        console.warn("scheduleTimeoutEvent: missed timeout event");\n                        this._resume();\n                      }\n                    },\n                    getInt64(sp + 8) + 1\n                  ));\n                  this.mem.setInt32(sp + 16, id, true);\n                },\n                "runtime.clearTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getInt32(sp + 8, true);\n                  clearTimeout(this._scheduledTimeouts.get(id));\n                  this._scheduledTimeouts.delete(id);\n                },\n                "runtime.getRandomData": (sp) => {\n                  sp >>>= 0;\n                  crypto.getRandomValues(loadSlice(sp + 8));\n                },\n                "syscall/js.finalizeRef": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getUint32(sp + 8, true);\n                  this._goRefCounts[id]--;\n                  if (this._goRefCounts[id] === 0) {\n                    const v = this._values[id];\n                    this._values[id] = null;\n                    this._ids.delete(v);\n                    this._idPool.push(id);\n                  }\n                },\n                "syscall/js.stringVal": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, loadString(sp + 8));\n                },\n                "syscall/js.valueGet": (sp) => {\n                  sp >>>= 0;\n                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));\n                  sp = this._inst.exports.getsp() >>> 0;\n                  storeValue(sp + 32, result);\n                },\n                "syscall/js.valueSet": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));\n                },\n                "syscall/js.valueDelete": (sp) => {\n                  sp >>>= 0;\n                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));\n                },\n                "syscall/js.valueIndex": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));\n                },\n                "syscall/js.valueSetIndex": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));\n                },\n                "syscall/js.valueCall": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const m = Reflect.get(v, loadString(sp + 16));\n                    const args = loadSliceOfValues(sp + 32);\n                    const result = Reflect.apply(m, v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, result);\n                    this.mem.setUint8(sp + 64, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, err);\n                    this.mem.setUint8(sp + 64, 0);\n                  }\n                },\n                "syscall/js.valueInvoke": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.apply(v, void 0, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueNew": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.construct(v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                "syscall/js.valueLength": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));\n                },\n                "syscall/js.valuePrepareString": (sp) => {\n                  sp >>>= 0;\n                  const str = encoder.encode(String(loadValue(sp + 8)));\n                  storeValue(sp + 16, str);\n                  setInt64(sp + 24, str.length);\n                },\n                "syscall/js.valueLoadString": (sp) => {\n                  sp >>>= 0;\n                  const str = loadValue(sp + 8);\n                  loadSlice(sp + 16).set(str);\n                },\n                "syscall/js.valueInstanceOf": (sp) => {\n                  sp >>>= 0;\n                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);\n                },\n                "syscall/js.copyBytesToGo": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadSlice(sp + 8);\n                  const src = loadValue(sp + 32);\n                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "syscall/js.copyBytesToJS": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadValue(sp + 8);\n                  const src = loadSlice(sp + 16);\n                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "debug": (value) => {\n                  console.log(value);\n                }\n              }\n            };\n          }\n          run(instance) {\n            return __async(this, null, function* () {\n              if (!(instance instanceof WebAssembly.Instance)) {\n                throw new Error("Go.run: WebAssembly.Instance expected");\n              }\n              this._inst = instance;\n              this.mem = new DataView(this._inst.exports.mem.buffer);\n              this._values = [\n                NaN,\n                0,\n                null,\n                true,\n                false,\n                globalThis,\n                this\n              ];\n              this._goRefCounts = new Array(this._values.length).fill(Infinity);\n              this._ids = /* @__PURE__ */ new Map([\n                [0, 1],\n                [null, 2],\n                [true, 3],\n                [false, 4],\n                [globalThis, 5],\n                [this, 6]\n              ]);\n              this._idPool = [];\n              this.exited = false;\n              let offset = 4096;\n              const strPtr = (str) => {\n                const ptr = offset;\n                const bytes = encoder.encode(str + "\\0");\n                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);\n                offset += bytes.length;\n                if (offset % 8 !== 0) {\n                  offset += 8 - offset % 8;\n                }\n                return ptr;\n              };\n              const argc = this.argv.length;\n              const argvPtrs = [];\n              this.argv.forEach((arg) => {\n                argvPtrs.push(strPtr(arg));\n              });\n              argvPtrs.push(0);\n              const keys = Object.keys(this.env).sort();\n              keys.forEach((key) => {\n                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));\n              });\n              argvPtrs.push(0);\n              const argv = offset;\n              argvPtrs.forEach((ptr) => {\n                this.mem.setUint32(offset, ptr, true);\n                this.mem.setUint32(offset + 4, 0, true);\n                offset += 8;\n              });\n              const wasmMinDataAddr = 4096 + 8192;\n              if (offset >= wasmMinDataAddr) {\n                throw new Error("total length of command line and environment variables exceeds limit");\n              }\n              this._inst.exports.run(argc, argv);\n              if (this.exited) {\n                this._resolveExitPromise();\n              }\n              yield this._exitPromise;\n            });\n          }\n          _resume() {\n            if (this.exited) {\n              throw new Error("Go program has already exited");\n            }\n            this._inst.exports.resume();\n            if (this.exited) {\n              this._resolveExitPromise();\n            }\n          }\n          _makeFuncWrapper(id) {\n            const go = this;\n            return function() {\n              const event = { id, this: this, args: arguments };\n              go._pendingEvent = event;\n              go._resume();\n              return event.result;\n            };\n          }\n        };\n      })();\n      onmessage = ({ data: wasm }) => {\n        let decoder = new TextDecoder();\n        let fs = globalThis.fs;\n        let stderr = "";\n        fs.writeSync = (fd, buffer) => {\n          if (fd === 1) {\n            postMessage(buffer);\n          } else if (fd === 2) {\n            stderr += decoder.decode(buffer);\n            let parts = stderr.split("\\n");\n            if (parts.length > 1)\n              console.log(parts.slice(0, -1).join("\\n"));\n            stderr = parts[parts.length - 1];\n          } else {\n            throw new Error("Bad write");\n          }\n          return buffer.length;\n        };\n        let stdin = [];\n        let resumeStdin;\n        let stdinPos = 0;\n        onmessage = ({ data }) => {\n          if (data.length > 0) {\n            stdin.push(data);\n            if (resumeStdin)\n              resumeStdin();\n          }\n        };\n        fs.read = (fd, buffer, offset, length, position, callback) => {\n          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {\n            throw new Error("Bad read");\n          }\n          if (stdin.length === 0) {\n            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);\n            return;\n          }\n          let first = stdin[0];\n          let count = Math.max(0, Math.min(length, first.length - stdinPos));\n          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);\n          stdinPos += count;\n          if (stdinPos === first.length) {\n            stdin.shift();\n            stdinPos = 0;\n          }\n          callback(null, count);\n        };\n        let go = new globalThis.Go();\n        go.argv = ["", `--service=${"0.16.13"}`];\n        tryToInstantiateModule(wasm, go).then(\n          (instance) => {\n            postMessage(null);\n            go.run(instance);\n          },\n          (error) => {\n            postMessage(error);\n          }\n        );\n      };\n      function tryToInstantiateModule(wasm, go) {\n        return __async(this, null, function* () {\n          if (wasm instanceof WebAssembly.Module) {\n            return WebAssembly.instantiate(wasm, go.importObject);\n          }\n          const res = yield fetch(wasm);\n          if (!res.ok)\n            throw new Error(`Failed to download ${JSON.stringify(wasm)}`);\n          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {\n            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);\n            return result2.instance;\n          }\n          const bytes = yield res.arrayBuffer();\n          const result = yield WebAssembly.instantiate(bytes, go.importObject);\n          return result.instance;\n        });\n      }\n      return (m) => onmessage(m);\n    })'}(postMessage)`], { type: "text/javascript" });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          let onmessage = ((postMessage) => {
            var __async2 = /* @__PURE__ */ __name2((__this, __arguments, generator) => {
              return new Promise((resolve, reject) => {
                var fulfilled = /* @__PURE__ */ __name2((value) => {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "fulfilled");
                var rejected = /* @__PURE__ */ __name2((value) => {
                  try {
                    step(generator.throw(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "rejected");
                var step = /* @__PURE__ */ __name2((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
                step((generator = generator.apply(__this, __arguments)).next());
              });
            }, "__async");
            let onmessage2;
            let globalThis2 = {};
            for (let o = self; o; o = Object.getPrototypeOf(o))
              for (let k of Object.getOwnPropertyNames(o))
                if (!(k in globalThis2))
                  Object.defineProperty(globalThis2, k, { get: () => self[k] });
            "use strict";
            (() => {
              const enosys = /* @__PURE__ */ __name2(() => {
                const err = new Error("not implemented");
                err.code = "ENOSYS";
                return err;
              }, "enosys");
              if (!globalThis2.fs) {
                let outputBuf = "";
                globalThis2.fs = {
                  constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                  writeSync(fd, buf) {
                    outputBuf += decoder.decode(buf);
                    const nl = outputBuf.lastIndexOf("\n");
                    if (nl != -1) {
                      console.log(outputBuf.substr(0, nl));
                      outputBuf = outputBuf.substr(nl + 1);
                    }
                    return buf.length;
                  },
                  write(fd, buf, offset, length, position, callback) {
                    if (offset !== 0 || length !== buf.length || position !== null) {
                      callback(enosys());
                      return;
                    }
                    const n = this.writeSync(fd, buf);
                    callback(null, n);
                  },
                  chmod(path, mode, callback) {
                    callback(enosys());
                  },
                  chown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  close(fd, callback) {
                    callback(enosys());
                  },
                  fchmod(fd, mode, callback) {
                    callback(enosys());
                  },
                  fchown(fd, uid, gid, callback) {
                    callback(enosys());
                  },
                  fstat(fd, callback) {
                    callback(enosys());
                  },
                  fsync(fd, callback) {
                    callback(null);
                  },
                  ftruncate(fd, length, callback) {
                    callback(enosys());
                  },
                  lchown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  link(path, link, callback) {
                    callback(enosys());
                  },
                  lstat(path, callback) {
                    callback(enosys());
                  },
                  mkdir(path, perm, callback) {
                    callback(enosys());
                  },
                  open(path, flags, mode, callback) {
                    callback(enosys());
                  },
                  read(fd, buffer, offset, length, position, callback) {
                    callback(enosys());
                  },
                  readdir(path, callback) {
                    callback(enosys());
                  },
                  readlink(path, callback) {
                    callback(enosys());
                  },
                  rename(from, to, callback) {
                    callback(enosys());
                  },
                  rmdir(path, callback) {
                    callback(enosys());
                  },
                  stat(path, callback) {
                    callback(enosys());
                  },
                  symlink(path, link, callback) {
                    callback(enosys());
                  },
                  truncate(path, length, callback) {
                    callback(enosys());
                  },
                  unlink(path, callback) {
                    callback(enosys());
                  },
                  utimes(path, atime, mtime, callback) {
                    callback(enosys());
                  }
                };
              }
              if (!globalThis2.process) {
                globalThis2.process = {
                  getuid() {
                    return -1;
                  },
                  getgid() {
                    return -1;
                  },
                  geteuid() {
                    return -1;
                  },
                  getegid() {
                    return -1;
                  },
                  getgroups() {
                    throw enosys();
                  },
                  pid: -1,
                  ppid: -1,
                  umask() {
                    throw enosys();
                  },
                  cwd() {
                    throw enosys();
                  },
                  chdir() {
                    throw enosys();
                  }
                };
              }
              if (!globalThis2.crypto) {
                throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
              }
              if (!globalThis2.performance) {
                throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
              }
              if (!globalThis2.TextEncoder) {
                throw new Error("globalThis.TextEncoder is not available, polyfill required");
              }
              if (!globalThis2.TextDecoder) {
                throw new Error("globalThis.TextDecoder is not available, polyfill required");
              }
              const encoder = new TextEncoder("utf-8");
              const decoder = new TextDecoder("utf-8");
              globalThis2.Go = class {
                constructor() {
                  this.argv = ["js"];
                  this.env = {};
                  this.exit = (code) => {
                    if (code !== 0) {
                      console.warn("exit code:", code);
                    }
                  };
                  this._exitPromise = new Promise((resolve) => {
                    this._resolveExitPromise = resolve;
                  });
                  this._pendingEvent = null;
                  this._scheduledTimeouts = /* @__PURE__ */ new Map();
                  this._nextCallbackTimeoutID = 1;
                  const setInt64 = /* @__PURE__ */ __name2((addr, v) => {
                    this.mem.setUint32(addr + 0, v, true);
                    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
                  }, "setInt64");
                  const getInt64 = /* @__PURE__ */ __name2((addr) => {
                    const low = this.mem.getUint32(addr + 0, true);
                    const high = this.mem.getInt32(addr + 4, true);
                    return low + high * 4294967296;
                  }, "getInt64");
                  const loadValue = /* @__PURE__ */ __name2((addr) => {
                    const f = this.mem.getFloat64(addr, true);
                    if (f === 0) {
                      return void 0;
                    }
                    if (!isNaN(f)) {
                      return f;
                    }
                    const id = this.mem.getUint32(addr, true);
                    return this._values[id];
                  }, "loadValue");
                  const storeValue = /* @__PURE__ */ __name2((addr, v) => {
                    const nanHead = 2146959360;
                    if (typeof v === "number" && v !== 0) {
                      if (isNaN(v)) {
                        this.mem.setUint32(addr + 4, nanHead, true);
                        this.mem.setUint32(addr, 0, true);
                        return;
                      }
                      this.mem.setFloat64(addr, v, true);
                      return;
                    }
                    if (v === void 0) {
                      this.mem.setFloat64(addr, 0, true);
                      return;
                    }
                    let id = this._ids.get(v);
                    if (id === void 0) {
                      id = this._idPool.pop();
                      if (id === void 0) {
                        id = this._values.length;
                      }
                      this._values[id] = v;
                      this._goRefCounts[id] = 0;
                      this._ids.set(v, id);
                    }
                    this._goRefCounts[id]++;
                    let typeFlag = 0;
                    switch (typeof v) {
                      case "object":
                        if (v !== null) {
                          typeFlag = 1;
                        }
                        break;
                      case "string":
                        typeFlag = 2;
                        break;
                      case "symbol":
                        typeFlag = 3;
                        break;
                      case "function":
                        typeFlag = 4;
                        break;
                    }
                    this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
                    this.mem.setUint32(addr, id, true);
                  }, "storeValue");
                  const loadSlice = /* @__PURE__ */ __name2((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return new Uint8Array(this._inst.exports.mem.buffer, array, len);
                  }, "loadSlice");
                  const loadSliceOfValues = /* @__PURE__ */ __name2((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    const a = new Array(len);
                    for (let i = 0; i < len; i++) {
                      a[i] = loadValue(array + i * 8);
                    }
                    return a;
                  }, "loadSliceOfValues");
                  const loadString = /* @__PURE__ */ __name2((addr) => {
                    const saddr = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
                  }, "loadString");
                  const timeOrigin = Date.now() - performance.now();
                  this.importObject = {
                    go: {
                      "runtime.wasmExit": (sp) => {
                        sp >>>= 0;
                        const code = this.mem.getInt32(sp + 8, true);
                        this.exited = true;
                        delete this._inst;
                        delete this._values;
                        delete this._goRefCounts;
                        delete this._ids;
                        delete this._idPool;
                        this.exit(code);
                      },
                      "runtime.wasmWrite": (sp) => {
                        sp >>>= 0;
                        const fd = getInt64(sp + 8);
                        const p = getInt64(sp + 16);
                        const n = this.mem.getInt32(sp + 24, true);
                        globalThis2.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                      },
                      "runtime.resetMemoryDataView": (sp) => {
                        sp >>>= 0;
                        this.mem = new DataView(this._inst.exports.mem.buffer);
                      },
                      "runtime.nanotime1": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                      },
                      "runtime.walltime": (sp) => {
                        sp >>>= 0;
                        const msec = new Date().getTime();
                        setInt64(sp + 8, msec / 1e3);
                        this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                      },
                      "runtime.scheduleTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this._nextCallbackTimeoutID;
                        this._nextCallbackTimeoutID++;
                        this._scheduledTimeouts.set(id, setTimeout(
                          () => {
                            this._resume();
                            while (this._scheduledTimeouts.has(id)) {
                              console.warn("scheduleTimeoutEvent: missed timeout event");
                              this._resume();
                            }
                          },
                          getInt64(sp + 8) + 1
                        ));
                        this.mem.setInt32(sp + 16, id, true);
                      },
                      "runtime.clearTimeoutEvent": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getInt32(sp + 8, true);
                        clearTimeout(this._scheduledTimeouts.get(id));
                        this._scheduledTimeouts.delete(id);
                      },
                      "runtime.getRandomData": (sp) => {
                        sp >>>= 0;
                        crypto.getRandomValues(loadSlice(sp + 8));
                      },
                      "syscall/js.finalizeRef": (sp) => {
                        sp >>>= 0;
                        const id = this.mem.getUint32(sp + 8, true);
                        this._goRefCounts[id]--;
                        if (this._goRefCounts[id] === 0) {
                          const v = this._values[id];
                          this._values[id] = null;
                          this._ids.delete(v);
                          this._idPool.push(id);
                        }
                      },
                      "syscall/js.stringVal": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, loadString(sp + 8));
                      },
                      "syscall/js.valueGet": (sp) => {
                        sp >>>= 0;
                        const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                        sp = this._inst.exports.getsp() >>> 0;
                        storeValue(sp + 32, result);
                      },
                      "syscall/js.valueSet": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                      },
                      "syscall/js.valueDelete": (sp) => {
                        sp >>>= 0;
                        Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                      },
                      "syscall/js.valueIndex": (sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                      },
                      "syscall/js.valueSetIndex": (sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                      },
                      "syscall/js.valueCall": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const m = Reflect.get(v, loadString(sp + 16));
                          const args = loadSliceOfValues(sp + 32);
                          const result = Reflect.apply(m, v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, result);
                          this.mem.setUint8(sp + 64, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, err);
                          this.mem.setUint8(sp + 64, 0);
                        }
                      },
                      "syscall/js.valueInvoke": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.apply(v, void 0, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueNew": (sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.construct(v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      },
                      "syscall/js.valueLength": (sp) => {
                        sp >>>= 0;
                        setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                      },
                      "syscall/js.valuePrepareString": (sp) => {
                        sp >>>= 0;
                        const str = encoder.encode(String(loadValue(sp + 8)));
                        storeValue(sp + 16, str);
                        setInt64(sp + 24, str.length);
                      },
                      "syscall/js.valueLoadString": (sp) => {
                        sp >>>= 0;
                        const str = loadValue(sp + 8);
                        loadSlice(sp + 16).set(str);
                      },
                      "syscall/js.valueInstanceOf": (sp) => {
                        sp >>>= 0;
                        this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                      },
                      "syscall/js.copyBytesToGo": (sp) => {
                        sp >>>= 0;
                        const dst = loadSlice(sp + 8);
                        const src = loadValue(sp + 32);
                        if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "syscall/js.copyBytesToJS": (sp) => {
                        sp >>>= 0;
                        const dst = loadValue(sp + 8);
                        const src = loadSlice(sp + 16);
                        if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      },
                      "debug": (value) => {
                        console.log(value);
                      }
                    }
                  };
                }
                run(instance) {
                  return __async2(this, null, function* () {
                    if (!(instance instanceof WebAssembly.Instance)) {
                      throw new Error("Go.run: WebAssembly.Instance expected");
                    }
                    this._inst = instance;
                    this.mem = new DataView(this._inst.exports.mem.buffer);
                    this._values = [
                      NaN,
                      0,
                      null,
                      true,
                      false,
                      globalThis2,
                      this
                    ];
                    this._goRefCounts = new Array(this._values.length).fill(Infinity);
                    this._ids = /* @__PURE__ */ new Map([
                      [0, 1],
                      [null, 2],
                      [true, 3],
                      [false, 4],
                      [globalThis2, 5],
                      [this, 6]
                    ]);
                    this._idPool = [];
                    this.exited = false;
                    let offset = 4096;
                    const strPtr = /* @__PURE__ */ __name2((str) => {
                      const ptr = offset;
                      const bytes = encoder.encode(str + "\0");
                      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                      offset += bytes.length;
                      if (offset % 8 !== 0) {
                        offset += 8 - offset % 8;
                      }
                      return ptr;
                    }, "strPtr");
                    const argc = this.argv.length;
                    const argvPtrs = [];
                    this.argv.forEach((arg) => {
                      argvPtrs.push(strPtr(arg));
                    });
                    argvPtrs.push(0);
                    const keys22 = Object.keys(this.env).sort();
                    keys22.forEach((key) => {
                      argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
                    });
                    argvPtrs.push(0);
                    const argv = offset;
                    argvPtrs.forEach((ptr) => {
                      this.mem.setUint32(offset, ptr, true);
                      this.mem.setUint32(offset + 4, 0, true);
                      offset += 8;
                    });
                    const wasmMinDataAddr = 4096 + 8192;
                    if (offset >= wasmMinDataAddr) {
                      throw new Error("total length of command line and environment variables exceeds limit");
                    }
                    this._inst.exports.run(argc, argv);
                    if (this.exited) {
                      this._resolveExitPromise();
                    }
                    yield this._exitPromise;
                  });
                }
                _resume() {
                  if (this.exited) {
                    throw new Error("Go program has already exited");
                  }
                  this._inst.exports.resume();
                  if (this.exited) {
                    this._resolveExitPromise();
                  }
                }
                _makeFuncWrapper(id) {
                  const go = this;
                  return function() {
                    const event = { id, this: this, args: arguments };
                    go._pendingEvent = event;
                    go._resume();
                    return event.result;
                  };
                }
              };
            })();
            onmessage2 = /* @__PURE__ */ __name2(({ data: wasm }) => {
              let decoder = new TextDecoder();
              let fs = globalThis2.fs;
              let stderr = "";
              fs.writeSync = (fd, buffer) => {
                if (fd === 1) {
                  postMessage(buffer);
                } else if (fd === 2) {
                  stderr += decoder.decode(buffer);
                  let parts = stderr.split("\n");
                  if (parts.length > 1)
                    console.log(parts.slice(0, -1).join("\n"));
                  stderr = parts[parts.length - 1];
                } else {
                  throw new Error("Bad write");
                }
                return buffer.length;
              };
              let stdin = [];
              let resumeStdin;
              let stdinPos = 0;
              onmessage2 = /* @__PURE__ */ __name2(({ data }) => {
                if (data.length > 0) {
                  stdin.push(data);
                  if (resumeStdin)
                    resumeStdin();
                }
              }, "onmessage");
              fs.read = (fd, buffer, offset, length, position, callback) => {
                if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
                  throw new Error("Bad read");
                }
                if (stdin.length === 0) {
                  resumeStdin = /* @__PURE__ */ __name2(() => fs.read(fd, buffer, offset, length, position, callback), "resumeStdin");
                  return;
                }
                let first32 = stdin[0];
                let count22 = Math.max(0, Math.min(length, first32.length - stdinPos));
                buffer.set(first32.subarray(stdinPos, stdinPos + count22), offset);
                stdinPos += count22;
                if (stdinPos === first32.length) {
                  stdin.shift();
                  stdinPos = 0;
                }
                callback(null, count22);
              };
              let go = new globalThis2.Go();
              go.argv = ["", `--service=${"0.16.13"}`];
              tryToInstantiateModule(wasm, go).then(
                (instance) => {
                  postMessage(null);
                  go.run(instance);
                },
                (error) => {
                  postMessage(error);
                }
              );
            }, "onmessage");
            function tryToInstantiateModule(wasm, go) {
              return __async2(this, null, function* () {
                if (wasm instanceof WebAssembly.Module) {
                  return WebAssembly.instantiate(wasm, go.importObject);
                }
                const res = yield fetch(wasm);
                if (!res.ok)
                  throw new Error(`Failed to download ${JSON.stringify(wasm)}`);
                if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
                  const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
                  return result2.instance;
                }
                const bytes = yield res.arrayBuffer();
                const result = yield WebAssembly.instantiate(bytes, go.importObject);
                return result.instance;
              });
            }
            __name2(tryToInstantiateModule, "tryToInstantiateModule");
            return (m) => onmessage2(m);
          })((data) => worker.onmessage({ data }));
          worker = {
            onmessage: null,
            postMessage: (data) => setTimeout(() => onmessage({ data })),
            terminate() {
            }
          };
        }
        let firstMessageResolve;
        let firstMessageReject;
        const firstMessagePromise = new Promise((resolve, reject) => {
          firstMessageResolve = resolve;
          firstMessageReject = reject;
        });
        worker.onmessage = ({ data: error }) => {
          worker.onmessage = ({ data }) => readFromStdout(data);
          if (error)
            firstMessageReject(error);
          else
            firstMessageResolve();
        };
        worker.postMessage(wasmModule || new URL(wasmURL, location.href).toString());
        let { readFromStdout, service } = createChannel({
          writeToStdin(bytes) {
            worker.postMessage(bytes);
          },
          isSync: false,
          isWriteUnavailable: true,
          esbuild: browser_exports
        });
        yield firstMessagePromise;
        longLivedService = {
          build: (options) => new Promise((resolve, reject) => service.buildOrServe({
            callName: "build",
            refs: null,
            serveOptions: null,
            options,
            isTTY: false,
            defaultWD: "/",
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          transform: (input, options) => new Promise((resolve, reject) => service.transform({
            callName: "transform",
            refs: null,
            input,
            options: options || {},
            isTTY: false,
            fs: {
              readFile(_, callback) {
                callback(new Error("Internal error"), null);
              },
              writeFile(_, callback) {
                callback(null);
              }
            },
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
            callName: "formatMessages",
            refs: null,
            messages,
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          })),
          analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
            callName: "analyzeMetafile",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: (err, res) => err ? reject(err) : resolve(res)
          }))
        };
      }), "startRunningService");
      var browser_default = browser_exports;
    })(typeof module === "object" ? module : { set exports(x) {
      (typeof self !== "undefined" ? self : this).esbuild = x;
    } });
  }
});
init_define_process2();
init_define_process2();
var DELETE2 = "delete";
var SHIFT2 = 5;
var SIZE2 = 1 << SHIFT2;
var MASK2 = SIZE2 - 1;
var NOT_SET2 = {};
function MakeRef2() {
  return { value: false };
}
__name2(MakeRef2, "MakeRef");
function SetRef2(ref) {
  if (ref) {
    ref.value = true;
  }
}
__name2(SetRef2, "SetRef");
function OwnerID2() {
}
__name2(OwnerID2, "OwnerID");
function ensureSize2(iter) {
  if (iter.size === void 0) {
    iter.size = iter.__iterate(returnTrue2);
  }
  return iter.size;
}
__name2(ensureSize2, "ensureSize");
function wrapIndex2(iter, index) {
  if (typeof index !== "number") {
    var uint32Index = index >>> 0;
    if ("" + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize2(iter) + index : index;
}
__name2(wrapIndex2, "wrapIndex");
function returnTrue2() {
  return true;
}
__name2(returnTrue2, "returnTrue");
function wholeSlice2(begin, end, size) {
  return (begin === 0 && !isNeg2(begin) || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
}
__name2(wholeSlice2, "wholeSlice");
function resolveBegin2(begin, size) {
  return resolveIndex2(begin, size, 0);
}
__name2(resolveBegin2, "resolveBegin");
function resolveEnd2(end, size) {
  return resolveIndex2(end, size, size);
}
__name2(resolveEnd2, "resolveEnd");
function resolveIndex2(index, size, defaultIndex) {
  return index === void 0 ? defaultIndex : isNeg2(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
}
__name2(resolveIndex2, "resolveIndex");
function isNeg2(value) {
  return value < 0 || value === 0 && 1 / value === -Infinity;
}
__name2(isNeg2, "isNeg");
var IS_COLLECTION_SYMBOL2 = "@@__IMMUTABLE_ITERABLE__@@";
function isCollection2(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL2]);
}
__name2(isCollection2, "isCollection");
var IS_KEYED_SYMBOL2 = "@@__IMMUTABLE_KEYED__@@";
function isKeyed2(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL2]);
}
__name2(isKeyed2, "isKeyed");
var IS_INDEXED_SYMBOL2 = "@@__IMMUTABLE_INDEXED__@@";
function isIndexed2(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL2]);
}
__name2(isIndexed2, "isIndexed");
function isAssociative2(maybeAssociative) {
  return isKeyed2(maybeAssociative) || isIndexed2(maybeAssociative);
}
__name2(isAssociative2, "isAssociative");
var Collection3 = /* @__PURE__ */ __name2(function Collection22(value) {
  return isCollection2(value) ? value : Seq2(value);
}, "Collection");
var KeyedCollection2 = /* @__PURE__ */ function(Collection32) {
  function KeyedCollection22(value) {
    return isKeyed2(value) ? value : KeyedSeq2(value);
  }
  __name2(KeyedCollection22, "KeyedCollection");
  if (Collection32)
    KeyedCollection22.__proto__ = Collection32;
  KeyedCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  KeyedCollection22.prototype.constructor = KeyedCollection22;
  return KeyedCollection22;
}(Collection3);
var IndexedCollection2 = /* @__PURE__ */ function(Collection32) {
  function IndexedCollection22(value) {
    return isIndexed2(value) ? value : IndexedSeq2(value);
  }
  __name2(IndexedCollection22, "IndexedCollection");
  if (Collection32)
    IndexedCollection22.__proto__ = Collection32;
  IndexedCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  IndexedCollection22.prototype.constructor = IndexedCollection22;
  return IndexedCollection22;
}(Collection3);
var SetCollection2 = /* @__PURE__ */ function(Collection32) {
  function SetCollection22(value) {
    return isCollection2(value) && !isAssociative2(value) ? value : SetSeq2(value);
  }
  __name2(SetCollection22, "SetCollection");
  if (Collection32)
    SetCollection22.__proto__ = Collection32;
  SetCollection22.prototype = Object.create(Collection32 && Collection32.prototype);
  SetCollection22.prototype.constructor = SetCollection22;
  return SetCollection22;
}(Collection3);
Collection3.Keyed = KeyedCollection2;
Collection3.Indexed = IndexedCollection2;
Collection3.Set = SetCollection2;
var IS_SEQ_SYMBOL2 = "@@__IMMUTABLE_SEQ__@@";
function isSeq2(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL2]);
}
__name2(isSeq2, "isSeq");
var IS_RECORD_SYMBOL2 = "@@__IMMUTABLE_RECORD__@@";
function isRecord2(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL2]);
}
__name2(isRecord2, "isRecord");
function isImmutable2(maybeImmutable) {
  return isCollection2(maybeImmutable) || isRecord2(maybeImmutable);
}
__name2(isImmutable2, "isImmutable");
var IS_ORDERED_SYMBOL2 = "@@__IMMUTABLE_ORDERED__@@";
function isOrdered2(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL2]);
}
__name2(isOrdered2, "isOrdered");
var ITERATE_KEYS2 = 0;
var ITERATE_VALUES2 = 1;
var ITERATE_ENTRIES2 = 2;
var REAL_ITERATOR_SYMBOL2 = typeof Symbol === "function" && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL2 = "@@iterator";
var ITERATOR_SYMBOL2 = REAL_ITERATOR_SYMBOL2 || FAUX_ITERATOR_SYMBOL2;
var Iterator3 = /* @__PURE__ */ __name2(function Iterator22(next) {
  this.next = next;
}, "Iterator");
Iterator3.prototype.toString = /* @__PURE__ */ __name2(function toString5() {
  return "[Iterator]";
}, "toString");
Iterator3.KEYS = ITERATE_KEYS2;
Iterator3.VALUES = ITERATE_VALUES2;
Iterator3.ENTRIES = ITERATE_ENTRIES2;
Iterator3.prototype.inspect = Iterator3.prototype.toSource = function() {
  return this.toString();
};
Iterator3.prototype[ITERATOR_SYMBOL2] = function() {
  return this;
};
function iteratorValue2(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult ? iteratorResult.value = value : iteratorResult = {
    value,
    done: false
  };
  return iteratorResult;
}
__name2(iteratorValue2, "iteratorValue");
function iteratorDone2() {
  return { value: void 0, done: true };
}
__name2(iteratorDone2, "iteratorDone");
function hasIterator2(maybeIterable) {
  if (Array.isArray(maybeIterable)) {
    return true;
  }
  return !!getIteratorFn2(maybeIterable);
}
__name2(hasIterator2, "hasIterator");
function isIterator2(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === "function";
}
__name2(isIterator2, "isIterator");
function getIterator2(iterable) {
  var iteratorFn = getIteratorFn2(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}
__name2(getIterator2, "getIterator");
function getIteratorFn2(iterable) {
  var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL2 && iterable[REAL_ITERATOR_SYMBOL2] || iterable[FAUX_ITERATOR_SYMBOL2]);
  if (typeof iteratorFn === "function") {
    return iteratorFn;
  }
}
__name2(getIteratorFn2, "getIteratorFn");
function isEntriesIterable2(maybeIterable) {
  var iteratorFn = getIteratorFn2(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.entries;
}
__name2(isEntriesIterable2, "isEntriesIterable");
function isKeysIterable2(maybeIterable) {
  var iteratorFn = getIteratorFn2(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.keys;
}
__name2(isKeysIterable2, "isKeysIterable");
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
function isArrayLike2(value) {
  if (Array.isArray(value) || typeof value === "string") {
    return true;
  }
  return value && typeof value === "object" && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? Object.keys(value).length === 1 : value.hasOwnProperty(value.length - 1));
}
__name2(isArrayLike2, "isArrayLike");
var Seq2 = /* @__PURE__ */ function(Collection32) {
  function Seq22(value) {
    return value === void 0 || value === null ? emptySequence2() : isImmutable2(value) ? value.toSeq() : seqFromValue2(value);
  }
  __name2(Seq22, "Seq");
  if (Collection32)
    Seq22.__proto__ = Collection32;
  Seq22.prototype = Object.create(Collection32 && Collection32.prototype);
  Seq22.prototype.constructor = Seq22;
  Seq22.prototype.toSeq = /* @__PURE__ */ __name2(function toSeq32() {
    return this;
  }, "toSeq");
  Seq22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("Seq {", "}");
  }, "toString");
  Seq22.prototype.cacheResult = /* @__PURE__ */ __name2(function cacheResult() {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  }, "cacheResult");
  Seq22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse32 ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse32);
  }, "__iterate");
  Seq22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator3(function() {
        if (i === size) {
          return iteratorDone2();
        }
        var entry = cache[reverse32 ? size - ++i : i++];
        return iteratorValue2(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse32);
  }, "__iterator");
  return Seq22;
}(Collection3);
var KeyedSeq2 = /* @__PURE__ */ function(Seq22) {
  function KeyedSeq22(value) {
    return value === void 0 || value === null ? emptySequence2().toKeyedSeq() : isCollection2(value) ? isKeyed2(value) ? value.toSeq() : value.fromEntrySeq() : isRecord2(value) ? value.toSeq() : keyedSeqFromValue2(value);
  }
  __name2(KeyedSeq22, "KeyedSeq");
  if (Seq22)
    KeyedSeq22.__proto__ = Seq22;
  KeyedSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  KeyedSeq22.prototype.constructor = KeyedSeq22;
  KeyedSeq22.prototype.toKeyedSeq = /* @__PURE__ */ __name2(function toKeyedSeq32() {
    return this;
  }, "toKeyedSeq");
  return KeyedSeq22;
}(Seq2);
var IndexedSeq2 = /* @__PURE__ */ function(Seq22) {
  function IndexedSeq22(value) {
    return value === void 0 || value === null ? emptySequence2() : isCollection2(value) ? isKeyed2(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord2(value) ? value.toSeq().entrySeq() : indexedSeqFromValue2(value);
  }
  __name2(IndexedSeq22, "IndexedSeq");
  if (Seq22)
    IndexedSeq22.__proto__ = Seq22;
  IndexedSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  IndexedSeq22.prototype.constructor = IndexedSeq22;
  IndexedSeq22.of = /* @__PURE__ */ __name2(function of() {
    return IndexedSeq22(arguments);
  }, "of");
  IndexedSeq22.prototype.toIndexedSeq = /* @__PURE__ */ __name2(function toIndexedSeq22() {
    return this;
  }, "toIndexedSeq");
  IndexedSeq22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("Seq [", "]");
  }, "toString");
  return IndexedSeq22;
}(Seq2);
var SetSeq2 = /* @__PURE__ */ function(Seq22) {
  function SetSeq22(value) {
    return (isCollection2(value) && !isAssociative2(value) ? value : IndexedSeq2(value)).toSetSeq();
  }
  __name2(SetSeq22, "SetSeq");
  if (Seq22)
    SetSeq22.__proto__ = Seq22;
  SetSeq22.prototype = Object.create(Seq22 && Seq22.prototype);
  SetSeq22.prototype.constructor = SetSeq22;
  SetSeq22.of = /* @__PURE__ */ __name2(function of() {
    return SetSeq22(arguments);
  }, "of");
  SetSeq22.prototype.toSetSeq = /* @__PURE__ */ __name2(function toSetSeq22() {
    return this;
  }, "toSetSeq");
  return SetSeq22;
}(Seq2);
Seq2.isSeq = isSeq2;
Seq2.Keyed = KeyedSeq2;
Seq2.Set = SetSeq2;
Seq2.Indexed = IndexedSeq2;
Seq2.prototype[IS_SEQ_SYMBOL2] = true;
var ArraySeq2 = /* @__PURE__ */ function(IndexedSeq22) {
  function ArraySeq22(array) {
    this._array = array;
    this.size = array.length;
  }
  __name2(ArraySeq22, "ArraySeq");
  if (IndexedSeq22)
    ArraySeq22.__proto__ = IndexedSeq22;
  ArraySeq22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  ArraySeq22.prototype.constructor = ArraySeq22;
  ArraySeq22.prototype.get = /* @__PURE__ */ __name2(function get112(index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex2(this, index)] : notSetValue;
  }, "get");
  ArraySeq22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse32 ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  }, "__iterate");
  ArraySeq22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator3(function() {
      if (i === size) {
        return iteratorDone2();
      }
      var ii = reverse32 ? size - ++i : i++;
      return iteratorValue2(type, ii, array[ii]);
    });
  }, "__iterator");
  return ArraySeq22;
}(IndexedSeq2);
var ObjectSeq2 = /* @__PURE__ */ function(KeyedSeq22) {
  function ObjectSeq22(object) {
    var keys22 = Object.keys(object).concat(
      Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : []
    );
    this._object = object;
    this._keys = keys22;
    this.size = keys22.length;
  }
  __name2(ObjectSeq22, "ObjectSeq");
  if (KeyedSeq22)
    ObjectSeq22.__proto__ = KeyedSeq22;
  ObjectSeq22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  ObjectSeq22.prototype.constructor = ObjectSeq22;
  ObjectSeq22.prototype.get = /* @__PURE__ */ __name2(function get112(key, notSetValue) {
    if (notSetValue !== void 0 && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  }, "get");
  ObjectSeq22.prototype.has = /* @__PURE__ */ __name2(function has52(key) {
    return hasOwnProperty2.call(this._object, key);
  }, "has");
  ObjectSeq22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var object = this._object;
    var keys22 = this._keys;
    var size = keys22.length;
    var i = 0;
    while (i !== size) {
      var key = keys22[reverse32 ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  }, "__iterate");
  ObjectSeq22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var object = this._object;
    var keys22 = this._keys;
    var size = keys22.length;
    var i = 0;
    return new Iterator3(function() {
      if (i === size) {
        return iteratorDone2();
      }
      var key = keys22[reverse32 ? size - ++i : i++];
      return iteratorValue2(type, key, object[key]);
    });
  }, "__iterator");
  return ObjectSeq22;
}(KeyedSeq2);
ObjectSeq2.prototype[IS_ORDERED_SYMBOL2] = true;
var CollectionSeq2 = /* @__PURE__ */ function(IndexedSeq22) {
  function CollectionSeq22(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }
  __name2(CollectionSeq22, "CollectionSeq");
  if (IndexedSeq22)
    CollectionSeq22.__proto__ = IndexedSeq22;
  CollectionSeq22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  CollectionSeq22.prototype.constructor = CollectionSeq22;
  CollectionSeq22.prototype.__iterateUncached = /* @__PURE__ */ __name2(function __iterateUncached(fn, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var collection = this._collection;
    var iterator = getIterator2(collection);
    var iterations = 0;
    if (isIterator2(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  }, "__iterateUncached");
  CollectionSeq22.prototype.__iteratorUncached = /* @__PURE__ */ __name2(function __iteratorUncached(type, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var collection = this._collection;
    var iterator = getIterator2(collection);
    if (!isIterator2(iterator)) {
      return new Iterator3(iteratorDone2);
    }
    var iterations = 0;
    return new Iterator3(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue2(type, iterations++, step.value);
    });
  }, "__iteratorUncached");
  return CollectionSeq22;
}(IndexedSeq2);
var EMPTY_SEQ2;
function emptySequence2() {
  return EMPTY_SEQ2 || (EMPTY_SEQ2 = new ArraySeq2([]));
}
__name2(emptySequence2, "emptySequence");
function keyedSeqFromValue2(value) {
  var seq = maybeIndexedSeqFromValue2(value);
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === "object") {
    return new ObjectSeq2(value);
  }
  throw new TypeError(
    "Expected Array or collection object of [k, v] entries, or keyed object: " + value
  );
}
__name2(keyedSeqFromValue2, "keyedSeqFromValue");
function indexedSeqFromValue2(value) {
  var seq = maybeIndexedSeqFromValue2(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    "Expected Array or collection object of values: " + value
  );
}
__name2(indexedSeqFromValue2, "indexedSeqFromValue");
function seqFromValue2(value) {
  var seq = maybeIndexedSeqFromValue2(value);
  if (seq) {
    return isEntriesIterable2(value) ? seq.fromEntrySeq() : isKeysIterable2(value) ? seq.toSetSeq() : seq;
  }
  if (typeof value === "object") {
    return new ObjectSeq2(value);
  }
  throw new TypeError(
    "Expected Array or collection object of values, or keyed object: " + value
  );
}
__name2(seqFromValue2, "seqFromValue");
function maybeIndexedSeqFromValue2(value) {
  return isArrayLike2(value) ? new ArraySeq2(value) : hasIterator2(value) ? new CollectionSeq2(value) : void 0;
}
__name2(maybeIndexedSeqFromValue2, "maybeIndexedSeqFromValue");
var IS_MAP_SYMBOL2 = "@@__IMMUTABLE_MAP__@@";
function isMap2(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL2]);
}
__name2(isMap2, "isMap");
function isOrderedMap2(maybeOrderedMap) {
  return isMap2(maybeOrderedMap) && isOrdered2(maybeOrderedMap);
}
__name2(isOrderedMap2, "isOrderedMap");
function isValueObject2(maybeValue) {
  return Boolean(
    maybeValue && typeof maybeValue.equals === "function" && typeof maybeValue.hashCode === "function"
  );
}
__name2(isValueObject2, "isValueObject");
function is2(valueA, valueB) {
  if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(isValueObject2(valueA) && isValueObject2(valueB) && valueA.equals(valueB));
}
__name2(is2, "is");
var imul3 = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : /* @__PURE__ */ __name2(function imul22(a, b) {
  a |= 0;
  b |= 0;
  var c = a & 65535;
  var d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
}, "imul");
function smi2(i32) {
  return i32 >>> 1 & 1073741824 | i32 & 3221225471;
}
__name2(smi2, "smi");
var defaultValueOf2 = Object.prototype.valueOf;
function hash2(o) {
  if (o == null) {
    return hashNullish2(o);
  }
  if (typeof o.hashCode === "function") {
    return smi2(o.hashCode(o));
  }
  var v = valueOf2(o);
  if (v == null) {
    return hashNullish2(v);
  }
  switch (typeof v) {
    case "boolean":
      return v ? 1108378657 : 1108378656;
    case "number":
      return hashNumber2(v);
    case "string":
      return v.length > STRING_HASH_CACHE_MIN_STRLEN2 ? cachedHashString2(v) : hashString2(v);
    case "object":
    case "function":
      return hashJSObj2(v);
    case "symbol":
      return hashSymbol2(v);
    default:
      if (typeof v.toString === "function") {
        return hashString2(v.toString());
      }
      throw new Error("Value type " + typeof v + " cannot be hashed.");
  }
}
__name2(hash2, "hash");
function hashNullish2(nullish) {
  return nullish === null ? 1108378658 : 1108378659;
}
__name2(hashNullish2, "hashNullish");
function hashNumber2(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash22 = n | 0;
  if (hash22 !== n) {
    hash22 ^= n * 4294967295;
  }
  while (n > 4294967295) {
    n /= 4294967295;
    hash22 ^= n;
  }
  return smi2(hash22);
}
__name2(hashNumber2, "hashNumber");
function cachedHashString2(string) {
  var hashed = stringHashCache2[string];
  if (hashed === void 0) {
    hashed = hashString2(string);
    if (STRING_HASH_CACHE_SIZE2 === STRING_HASH_CACHE_MAX_SIZE2) {
      STRING_HASH_CACHE_SIZE2 = 0;
      stringHashCache2 = {};
    }
    STRING_HASH_CACHE_SIZE2++;
    stringHashCache2[string] = hashed;
  }
  return hashed;
}
__name2(cachedHashString2, "cachedHashString");
function hashString2(string) {
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = 31 * hashed + string.charCodeAt(ii) | 0;
  }
  return smi2(hashed);
}
__name2(hashString2, "hashString");
function hashSymbol2(sym) {
  var hashed = symbolMap2[sym];
  if (hashed !== void 0) {
    return hashed;
  }
  hashed = nextHash2();
  symbolMap2[sym] = hashed;
  return hashed;
}
__name2(hashSymbol2, "hashSymbol");
function hashJSObj2(obj) {
  var hashed;
  if (usingWeakMap2) {
    hashed = weakMap2.get(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = obj[UID_HASH_KEY2];
  if (hashed !== void 0) {
    return hashed;
  }
  if (!canDefineProperty2) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY2];
    if (hashed !== void 0) {
      return hashed;
    }
    hashed = getIENodeHash2(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = nextHash2();
  if (usingWeakMap2) {
    weakMap2.set(obj, hashed);
  } else if (isExtensible2 !== void 0 && isExtensible2(obj) === false) {
    throw new Error("Non-extensible objects are not allowed as keys.");
  } else if (canDefineProperty2) {
    Object.defineProperty(obj, UID_HASH_KEY2, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed
    });
  } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY2] = hashed;
  } else if (obj.nodeType !== void 0) {
    obj[UID_HASH_KEY2] = hashed;
  } else {
    throw new Error("Unable to set a non-enumerable property on object.");
  }
  return hashed;
}
__name2(hashJSObj2, "hashJSObj");
var isExtensible2 = Object.isExtensible;
var canDefineProperty2 = function() {
  try {
    Object.defineProperty({}, "@", {});
    return true;
  } catch (e) {
    return false;
  }
}();
function getIENodeHash2(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1:
        return node.uniqueID;
      case 9:
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}
__name2(getIENodeHash2, "getIENodeHash");
function valueOf2(obj) {
  return obj.valueOf !== defaultValueOf2 && typeof obj.valueOf === "function" ? obj.valueOf(obj) : obj;
}
__name2(valueOf2, "valueOf");
function nextHash2() {
  var nextHash22 = ++_objHashUID2;
  if (_objHashUID2 & 1073741824) {
    _objHashUID2 = 0;
  }
  return nextHash22;
}
__name2(nextHash2, "nextHash");
var usingWeakMap2 = typeof WeakMap === "function";
var weakMap2;
if (usingWeakMap2) {
  weakMap2 = /* @__PURE__ */ new WeakMap();
}
var symbolMap2 = /* @__PURE__ */ Object.create(null);
var _objHashUID2 = 0;
var UID_HASH_KEY2 = "__immutablehash__";
if (typeof Symbol === "function") {
  UID_HASH_KEY2 = Symbol(UID_HASH_KEY2);
}
var STRING_HASH_CACHE_MIN_STRLEN2 = 16;
var STRING_HASH_CACHE_MAX_SIZE2 = 255;
var STRING_HASH_CACHE_SIZE2 = 0;
var stringHashCache2 = {};
var ToKeyedSequence2 = /* @__PURE__ */ function(KeyedSeq22) {
  function ToKeyedSequence22(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }
  __name2(ToKeyedSequence22, "ToKeyedSequence");
  if (KeyedSeq22)
    ToKeyedSequence22.__proto__ = KeyedSeq22;
  ToKeyedSequence22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  ToKeyedSequence22.prototype.constructor = ToKeyedSequence22;
  ToKeyedSequence22.prototype.get = /* @__PURE__ */ __name2(function get112(key, notSetValue) {
    return this._iter.get(key, notSetValue);
  }, "get");
  ToKeyedSequence22.prototype.has = /* @__PURE__ */ __name2(function has52(key) {
    return this._iter.has(key);
  }, "has");
  ToKeyedSequence22.prototype.valueSeq = /* @__PURE__ */ __name2(function valueSeq22() {
    return this._iter.valueSeq();
  }, "valueSeq");
  ToKeyedSequence22.prototype.reverse = /* @__PURE__ */ __name2(function reverse32() {
    var this$1$1 = this;
    var reversedSequence = reverseFactory2(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().reverse();
      };
    }
    return reversedSequence;
  }, "reverse");
  ToKeyedSequence22.prototype.map = /* @__PURE__ */ __name2(function map22(mapper, context) {
    var this$1$1 = this;
    var mappedSequence = mapFactory2(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().map(mapper, context);
      };
    }
    return mappedSequence;
  }, "map");
  ToKeyedSequence22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v, k) {
      return fn(v, k, this$1$1);
    }, reverse32);
  }, "__iterate");
  ToKeyedSequence22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    return this._iter.__iterator(type, reverse32);
  }, "__iterator");
  return ToKeyedSequence22;
}(KeyedSeq2);
ToKeyedSequence2.prototype[IS_ORDERED_SYMBOL2] = true;
var ToIndexedSequence2 = /* @__PURE__ */ function(IndexedSeq22) {
  function ToIndexedSequence22(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  __name2(ToIndexedSequence22, "ToIndexedSequence");
  if (IndexedSeq22)
    ToIndexedSequence22.__proto__ = IndexedSeq22;
  ToIndexedSequence22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  ToIndexedSequence22.prototype.constructor = ToIndexedSequence22;
  ToIndexedSequence22.prototype.includes = /* @__PURE__ */ __name2(function includes32(value) {
    return this._iter.includes(value);
  }, "includes");
  ToIndexedSequence22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    var i = 0;
    reverse32 && ensureSize2(this);
    return this._iter.__iterate(
      function(v) {
        return fn(v, reverse32 ? this$1$1.size - ++i : i++, this$1$1);
      },
      reverse32
    );
  }, "__iterate");
  ToIndexedSequence22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var this$1$1 = this;
    var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse32);
    var i = 0;
    reverse32 && ensureSize2(this);
    return new Iterator3(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue2(
        type,
        reverse32 ? this$1$1.size - ++i : i++,
        step.value,
        step
      );
    });
  }, "__iterator");
  return ToIndexedSequence22;
}(IndexedSeq2);
var ToSetSequence2 = /* @__PURE__ */ function(SetSeq22) {
  function ToSetSequence22(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  __name2(ToSetSequence22, "ToSetSequence");
  if (SetSeq22)
    ToSetSequence22.__proto__ = SetSeq22;
  ToSetSequence22.prototype = Object.create(SetSeq22 && SetSeq22.prototype);
  ToSetSequence22.prototype.constructor = ToSetSequence22;
  ToSetSequence22.prototype.has = /* @__PURE__ */ __name2(function has52(key) {
    return this._iter.includes(key);
  }, "has");
  ToSetSequence22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v) {
      return fn(v, v, this$1$1);
    }, reverse32);
  }, "__iterate");
  ToSetSequence22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse32);
    return new Iterator3(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue2(type, step.value, step.value, step);
    });
  }, "__iterator");
  return ToSetSequence22;
}(SetSeq2);
var FromEntriesSequence2 = /* @__PURE__ */ function(KeyedSeq22) {
  function FromEntriesSequence22(entries32) {
    this._iter = entries32;
    this.size = entries32.size;
  }
  __name2(FromEntriesSequence22, "FromEntriesSequence");
  if (KeyedSeq22)
    FromEntriesSequence22.__proto__ = KeyedSeq22;
  FromEntriesSequence22.prototype = Object.create(KeyedSeq22 && KeyedSeq22.prototype);
  FromEntriesSequence22.prototype.constructor = FromEntriesSequence22;
  FromEntriesSequence22.prototype.entrySeq = /* @__PURE__ */ __name2(function entrySeq22() {
    return this._iter.toSeq();
  }, "entrySeq");
  FromEntriesSequence22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._iter.__iterate(function(entry) {
      if (entry) {
        validateEntry2(entry);
        var indexedCollection = isCollection2(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1$1
        );
      }
    }, reverse32);
  }, "__iterate");
  FromEntriesSequence22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse32);
    return new Iterator3(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        if (entry) {
          validateEntry2(entry);
          var indexedCollection = isCollection2(entry);
          return iteratorValue2(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  }, "__iterator");
  return FromEntriesSequence22;
}(KeyedSeq2);
ToIndexedSequence2.prototype.cacheResult = ToKeyedSequence2.prototype.cacheResult = ToSetSequence2.prototype.cacheResult = FromEntriesSequence2.prototype.cacheResult = cacheResultThrough2;
function flipFactory2(collection) {
  var flipSequence = makeSequence2(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function() {
    return collection;
  };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this);
    reversedSequence.flip = function() {
      return collection.reverse();
    };
    return reversedSequence;
  };
  flipSequence.has = function(key) {
    return collection.includes(key);
  };
  flipSequence.includes = function(key) {
    return collection.has(key);
  };
  flipSequence.cacheResult = cacheResultThrough2;
  flipSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    return collection.__iterate(function(v, k) {
      return fn(k, v, this$1$1) !== false;
    }, reverse32);
  };
  flipSequence.__iteratorUncached = function(type, reverse32) {
    if (type === ITERATE_ENTRIES2) {
      var iterator = collection.__iterator(type, reverse32);
      return new Iterator3(function() {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES2 ? ITERATE_KEYS2 : ITERATE_VALUES2,
      reverse32
    );
  };
  return flipSequence;
}
__name2(flipFactory2, "flipFactory");
function mapFactory2(collection, mapper, context) {
  var mappedSequence = makeSequence2(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function(key) {
    return collection.has(key);
  };
  mappedSequence.get = function(key, notSetValue) {
    var v = collection.get(key, NOT_SET2);
    return v === NOT_SET2 ? notSetValue : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    return collection.__iterate(
      function(v, k, c) {
        return fn(mapper.call(context, v, k, c), k, this$1$1) !== false;
      },
      reverse32
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse32);
    return new Iterator3(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue2(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}
__name2(mapFactory2, "mapFactory");
function reverseFactory2(collection, useKeys) {
  var this$1$1 = this;
  var reversedSequence = makeSequence2(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function() {
    return collection;
  };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory2(collection);
      flipSequence.reverse = function() {
        return collection.flip();
      };
      return flipSequence;
    };
  }
  reversedSequence.get = function(key, notSetValue) {
    return collection.get(useKeys ? key : -1 - key, notSetValue);
  };
  reversedSequence.has = function(key) {
    return collection.has(useKeys ? key : -1 - key);
  };
  reversedSequence.includes = function(value) {
    return collection.includes(value);
  };
  reversedSequence.cacheResult = cacheResultThrough2;
  reversedSequence.__iterate = function(fn, reverse32) {
    var this$1$12 = this;
    var i = 0;
    reverse32 && ensureSize2(collection);
    return collection.__iterate(
      function(v, k) {
        return fn(v, useKeys ? k : reverse32 ? this$1$12.size - ++i : i++, this$1$12);
      },
      !reverse32
    );
  };
  reversedSequence.__iterator = function(type, reverse32) {
    var i = 0;
    reverse32 && ensureSize2(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES2, !reverse32);
    return new Iterator3(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue2(
        type,
        useKeys ? entry[0] : reverse32 ? this$1$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}
__name2(reverseFactory2, "reverseFactory");
function filterFactory2(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence2(collection);
  if (useKeys) {
    filterSequence.has = function(key) {
      var v = collection.get(key, NOT_SET2);
      return v !== NOT_SET2 && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function(key, notSetValue) {
      var v = collection.get(key, NOT_SET2);
      return v !== NOT_SET2 && predicate.call(context, v, key, collection) ? v : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    }, reverse32);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse32);
    var iterations = 0;
    return new Iterator3(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue2(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}
__name2(filterFactory2, "filterFactory");
function countByFactory2(collection, grouper, context) {
  var groups = Map22().asMutable();
  collection.__iterate(function(v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function(a) {
      return a + 1;
    });
  });
  return groups.asImmutable();
}
__name2(countByFactory2, "countByFactory");
function groupByFactory2(collection, grouper, context) {
  var isKeyedIter = isKeyed2(collection);
  var groups = (isOrdered2(collection) ? OrderedMap2() : Map22()).asMutable();
  collection.__iterate(function(v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function(a) {
        return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
      }
    );
  });
  var coerce = collectionClass2(collection);
  return groups.map(function(arr) {
    return reify2(collection, coerce(arr));
  }).asImmutable();
}
__name2(groupByFactory2, "groupByFactory");
function partitionFactory2(collection, predicate, context) {
  var isKeyedIter = isKeyed2(collection);
  var groups = [[], []];
  collection.__iterate(function(v, k) {
    groups[predicate.call(context, v, k, collection) ? 1 : 0].push(
      isKeyedIter ? [k, v] : v
    );
  });
  var coerce = collectionClass2(collection);
  return groups.map(function(arr) {
    return reify2(collection, coerce(arr));
  });
}
__name2(partitionFactory2, "partitionFactory");
function sliceFactory2(collection, begin, end, useKeys) {
  var originalSize = collection.size;
  if (wholeSlice2(begin, end, originalSize)) {
    return collection;
  }
  var resolvedBegin = resolveBegin2(begin, originalSize);
  var resolvedEnd = resolveEnd2(end, originalSize);
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory2(collection.toSeq().cacheResult(), begin, end, useKeys);
  }
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }
  var sliceSeq = makeSequence2(collection);
  sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
  if (!useKeys && isSeq2(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex2(this, index);
      return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
    };
  }
  sliceSeq.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (sliceSize === 0) {
      return 0;
    }
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
      }
    });
    return iterations;
  };
  sliceSeq.__iteratorUncached = function(type, reverse32) {
    if (sliceSize !== 0 && reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    if (sliceSize === 0) {
      return new Iterator3(iteratorDone2);
    }
    var iterator = collection.__iterator(type, reverse32);
    var skipped = 0;
    var iterations = 0;
    return new Iterator3(function() {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone2();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES2 || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS2) {
        return iteratorValue2(type, iterations - 1, void 0, step);
      }
      return iteratorValue2(type, iterations - 1, step.value[1], step);
    });
  };
  return sliceSeq;
}
__name2(sliceFactory2, "sliceFactory");
function takeWhileFactory2(collection, predicate, context) {
  var takeSequence = makeSequence2(collection);
  takeSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var iterations = 0;
    collection.__iterate(
      function(v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1$1);
      }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse32);
    var iterating = true;
    return new Iterator3(function() {
      if (!iterating) {
        return iteratorDone2();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1$1)) {
        iterating = false;
        return iteratorDone2();
      }
      return type === ITERATE_ENTRIES2 ? step : iteratorValue2(type, k, v, step);
    });
  };
  return takeSequence;
}
__name2(takeWhileFactory2, "takeWhileFactory");
function skipWhileFactory2(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence2(collection);
  skipSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse32);
    var skipping = true;
    var iterations = 0;
    return new Iterator3(function() {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES2) {
            return step;
          }
          if (type === ITERATE_KEYS2) {
            return iteratorValue2(type, iterations++, void 0, step);
          }
          return iteratorValue2(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1$1));
      } while (skipping);
      return type === ITERATE_ENTRIES2 ? step : iteratorValue2(type, k, v, step);
    });
  };
  return skipSequence;
}
__name2(skipWhileFactory2, "skipWhileFactory");
function concatFactory2(collection, values22) {
  var isKeyedCollection = isKeyed2(collection);
  var iters = [collection].concat(values22).map(function(v) {
    if (!isCollection2(v)) {
      v = isKeyedCollection ? keyedSeqFromValue2(v) : indexedSeqFromValue2(Array.isArray(v) ? v : [v]);
    } else if (isKeyedCollection) {
      v = KeyedCollection2(v);
    }
    return v;
  }).filter(function(v) {
    return v.size !== 0;
  });
  if (iters.length === 0) {
    return collection;
  }
  if (iters.length === 1) {
    var singleton = iters[0];
    if (singleton === collection || isKeyedCollection && isKeyed2(singleton) || isIndexed2(collection) && isIndexed2(singleton)) {
      return singleton;
    }
  }
  var concatSeq = new ArraySeq2(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed2(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function(sum, seq) {
    if (sum !== void 0) {
      var size = seq.size;
      if (size !== void 0) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}
__name2(concatFactory2, "concatFactory");
function flattenFactory2(collection, depth, useKeys) {
  var flatSequence = makeSequence2(collection);
  flatSequence.__iterateUncached = function(fn, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterate(fn, reverse32);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function(v, k) {
        if ((!depth || currentDepth < depth) && isCollection2(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse32);
    }
    __name2(flatDeep, "flatDeep");
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse32) {
    if (reverse32) {
      return this.cacheResult().__iterator(type, reverse32);
    }
    var iterator = collection.__iterator(type, reverse32);
    var stack = [];
    var iterations = 0;
    return new Iterator3(function() {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES2) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection2(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse32);
        } else {
          return useKeys ? step : iteratorValue2(type, iterations++, v, step);
        }
      }
      return iteratorDone2();
    });
  };
  return flatSequence;
}
__name2(flattenFactory2, "flattenFactory");
function flatMapFactory2(collection, mapper, context) {
  var coerce = collectionClass2(collection);
  return collection.toSeq().map(function(v, k) {
    return coerce(mapper.call(context, v, k, collection));
  }).flatten(true);
}
__name2(flatMapFactory2, "flatMapFactory");
function interposeFactory2(collection, separator) {
  var interposedSequence = makeSequence2(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(
      function(v) {
        return (!iterations || fn(separator, iterations++, this$1$1) !== false) && fn(v, iterations++, this$1$1) !== false;
      },
      reverse32
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse32) {
    var iterator = collection.__iterator(ITERATE_VALUES2, reverse32);
    var iterations = 0;
    var step;
    return new Iterator3(function() {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2 ? iteratorValue2(type, iterations++, separator) : iteratorValue2(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}
__name2(interposeFactory2, "interposeFactory");
function sortFactory2(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator2;
  }
  var isKeyedCollection = isKeyed2(collection);
  var index = 0;
  var entries32 = collection.toSeq().map(function(v, k) {
    return [k, v, index++, mapper ? mapper(v, k, collection) : v];
  }).valueSeq().toArray();
  entries32.sort(function(a, b) {
    return comparator(a[3], b[3]) || a[2] - b[2];
  }).forEach(
    isKeyedCollection ? function(v, i) {
      entries32[i].length = 2;
    } : function(v, i) {
      entries32[i] = v[1];
    }
  );
  return isKeyedCollection ? KeyedSeq2(entries32) : isIndexed2(collection) ? IndexedSeq2(entries32) : SetSeq2(entries32);
}
__name2(sortFactory2, "sortFactory");
function maxFactory2(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator2;
  }
  if (mapper) {
    var entry = collection.toSeq().map(function(v, k) {
      return [v, mapper(v, k, collection)];
    }).reduce(function(a, b) {
      return maxCompare2(comparator, a[1], b[1]) ? b : a;
    });
    return entry && entry[0];
  }
  return collection.reduce(function(a, b) {
    return maxCompare2(comparator, a, b) ? b : a;
  });
}
__name2(maxFactory2, "maxFactory");
function maxCompare2(comparator, a, b) {
  var comp = comparator(b, a);
  return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
}
__name2(maxCompare2, "maxCompare");
function zipWithFactory2(keyIter, zipper, iters, zipAll22) {
  var zipSequence = makeSequence2(keyIter);
  var sizes = new ArraySeq2(iters).map(function(i) {
    return i.size;
  });
  zipSequence.size = zipAll22 ? sizes.max() : sizes.min();
  zipSequence.__iterate = function(fn, reverse32) {
    var iterator = this.__iterator(ITERATE_VALUES2, reverse32);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse32) {
    var iterators = iters.map(
      function(i) {
        return i = Collection3(i), getIterator2(reverse32 ? i.reverse() : i);
      }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator3(function() {
      var steps;
      if (!isDone) {
        steps = iterators.map(function(i) {
          return i.next();
        });
        isDone = zipAll22 ? steps.every(function(s) {
          return s.done;
        }) : steps.some(function(s) {
          return s.done;
        });
      }
      if (isDone) {
        return iteratorDone2();
      }
      return iteratorValue2(
        type,
        iterations++,
        zipper.apply(
          null,
          steps.map(function(s) {
            return s.value;
          })
        )
      );
    });
  };
  return zipSequence;
}
__name2(zipWithFactory2, "zipWithFactory");
function reify2(iter, seq) {
  return iter === seq ? iter : isSeq2(iter) ? seq : iter.constructor(seq);
}
__name2(reify2, "reify");
function validateEntry2(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError("Expected [K, V] tuple: " + entry);
  }
}
__name2(validateEntry2, "validateEntry");
function collectionClass2(collection) {
  return isKeyed2(collection) ? KeyedCollection2 : isIndexed2(collection) ? IndexedCollection2 : SetCollection2;
}
__name2(collectionClass2, "collectionClass");
function makeSequence2(collection) {
  return Object.create(
    (isKeyed2(collection) ? KeyedSeq2 : isIndexed2(collection) ? IndexedSeq2 : SetSeq2).prototype
  );
}
__name2(makeSequence2, "makeSequence");
function cacheResultThrough2() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq2.prototype.cacheResult.call(this);
}
__name2(cacheResultThrough2, "cacheResultThrough");
function defaultComparator2(a, b) {
  if (a === void 0 && b === void 0) {
    return 0;
  }
  if (a === void 0) {
    return 1;
  }
  if (b === void 0) {
    return -1;
  }
  return a > b ? 1 : a < b ? -1 : 0;
}
__name2(defaultComparator2, "defaultComparator");
function arrCopy2(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}
__name2(arrCopy2, "arrCopy");
function invariant2(condition, error) {
  if (!condition) {
    throw new Error(error);
  }
}
__name2(invariant2, "invariant");
function assertNotInfinite2(size) {
  invariant2(
    size !== Infinity,
    "Cannot perform this action with an infinite size."
  );
}
__name2(assertNotInfinite2, "assertNotInfinite");
function coerceKeyPath2(keyPath) {
  if (isArrayLike2(keyPath) && typeof keyPath !== "string") {
    return keyPath;
  }
  if (isOrdered2(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    "Invalid keyPath: expected Ordered Collection or Array: " + keyPath
  );
}
__name2(coerceKeyPath2, "coerceKeyPath");
var toString22 = Object.prototype.toString;
function isPlainObject2(value) {
  if (!value || typeof value !== "object" || toString22.call(value) !== "[object Object]") {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  var parentProto = proto;
  var nextProto = Object.getPrototypeOf(proto);
  while (nextProto !== null) {
    parentProto = nextProto;
    nextProto = Object.getPrototypeOf(parentProto);
  }
  return parentProto === proto;
}
__name2(isPlainObject2, "isPlainObject");
function isDataStructure2(value) {
  return typeof value === "object" && (isImmutable2(value) || Array.isArray(value) || isPlainObject2(value));
}
__name2(isDataStructure2, "isDataStructure");
function quoteString2(value) {
  try {
    return typeof value === "string" ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}
__name2(quoteString2, "quoteString");
function has5(collection, key) {
  return isImmutable2(collection) ? collection.has(key) : isDataStructure2(collection) && hasOwnProperty2.call(collection, key);
}
__name2(has5, "has");
function get11(collection, key, notSetValue) {
  return isImmutable2(collection) ? collection.get(key, notSetValue) : !has5(collection, key) ? notSetValue : typeof collection.get === "function" ? collection.get(key) : collection[key];
}
__name2(get11, "get");
function shallowCopy2(from) {
  if (Array.isArray(from)) {
    return arrCopy2(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty2.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}
__name2(shallowCopy2, "shallowCopy");
function remove3(collection, key) {
  if (!isDataStructure2(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable2(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        "Cannot update immutable value without .remove() method: " + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty2.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy2(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}
__name2(remove3, "remove");
function set3(collection, key, value) {
  if (!isDataStructure2(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable2(collection)) {
    if (!collection.set) {
      throw new TypeError(
        "Cannot update immutable value without .set() method: " + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty2.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy2(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}
__name2(set3, "set");
function updateIn$12(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = void 0;
  }
  var updatedValue = updateInDeeply2(
    isImmutable2(collection),
    collection,
    coerceKeyPath2(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET2 ? notSetValue : updatedValue;
}
__name2(updateIn$12, "updateIn$1");
function updateInDeeply2(inImmutable, existing, keyPath, i, notSetValue, updater) {
  var wasNotSet = existing === NOT_SET2;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure2(existing)) {
    throw new TypeError(
      "Cannot update within non-data-structure value in path [" + keyPath.slice(0, i).map(quoteString2) + "]: " + existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET2 : get11(existing, key, NOT_SET2);
  var nextUpdated = updateInDeeply2(
    nextExisting === NOT_SET2 ? inImmutable : isImmutable2(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET2 ? remove3(existing, key) : set3(
    wasNotSet ? inImmutable ? emptyMap2() : {} : existing,
    key,
    nextUpdated
  );
}
__name2(updateInDeeply2, "updateInDeeply");
function setIn$12(collection, keyPath, value) {
  return updateIn$12(collection, keyPath, NOT_SET2, function() {
    return value;
  });
}
__name2(setIn$12, "setIn$1");
function setIn2(keyPath, v) {
  return setIn$12(this, keyPath, v);
}
__name2(setIn2, "setIn");
function removeIn2(collection, keyPath) {
  return updateIn$12(collection, keyPath, function() {
    return NOT_SET2;
  });
}
__name2(removeIn2, "removeIn");
function deleteIn2(keyPath) {
  return removeIn2(this, keyPath);
}
__name2(deleteIn2, "deleteIn");
function update$12(collection, key, notSetValue, updater) {
  return updateIn$12(collection, [key], notSetValue, updater);
}
__name2(update$12, "update$1");
function update8(key, notSetValue, updater) {
  return arguments.length === 1 ? key(this) : update$12(this, key, notSetValue, updater);
}
__name2(update8, "update");
function updateIn2(keyPath, notSetValue, updater) {
  return updateIn$12(this, keyPath, notSetValue, updater);
}
__name2(updateIn2, "updateIn");
function merge$12() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeIntoKeyedWith2(this, iters);
}
__name2(merge$12, "merge$1");
function mergeWith$12(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  if (typeof merger !== "function") {
    throw new TypeError("Invalid merger function: " + merger);
  }
  return mergeIntoKeyedWith2(this, iters, merger);
}
__name2(mergeWith$12, "mergeWith$1");
function mergeIntoKeyedWith2(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection2(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function(collection2) {
    var mergeIntoCollection = merger ? function(value, key) {
      update$12(
        collection2,
        key,
        NOT_SET2,
        function(oldVal) {
          return oldVal === NOT_SET2 ? value : merger(oldVal, value, key);
        }
      );
    } : function(value, key) {
      collection2.set(key, value);
    };
    for (var ii2 = 0; ii2 < iters.length; ii2++) {
      iters[ii2].forEach(mergeIntoCollection);
    }
  });
}
__name2(mergeIntoKeyedWith2, "mergeIntoKeyedWith");
function mergeDeepWithSources2(collection, sources, merger) {
  return mergeWithSources2(collection, sources, deepMergerWith2(merger));
}
__name2(mergeDeepWithSources2, "mergeDeepWithSources");
function mergeWithSources2(collection, sources, merger) {
  if (!isDataStructure2(collection)) {
    throw new TypeError(
      "Cannot merge into non-data-structure value: " + collection
    );
  }
  if (isImmutable2(collection)) {
    return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection32 = isArray ? IndexedCollection2 : KeyedCollection2;
  var mergeItem = isArray ? function(value) {
    if (merged === collection) {
      merged = shallowCopy2(merged);
    }
    merged.push(value);
  } : function(value, key) {
    var hasVal = hasOwnProperty2.call(merged, key);
    var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
    if (!hasVal || nextVal !== merged[key]) {
      if (merged === collection) {
        merged = shallowCopy2(merged);
      }
      merged[key] = nextVal;
    }
  };
  for (var i = 0; i < sources.length; i++) {
    Collection32(sources[i]).forEach(mergeItem);
  }
  return merged;
}
__name2(mergeWithSources2, "mergeWithSources");
function deepMergerWith2(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure2(oldValue) && isDataStructure2(newValue) && areMergeable2(oldValue, newValue) ? mergeWithSources2(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
  }
  __name2(deepMerger, "deepMerger");
  return deepMerger;
}
__name2(deepMergerWith2, "deepMergerWith");
function areMergeable2(oldDataStructure, newDataStructure) {
  var oldSeq = Seq2(oldDataStructure);
  var newSeq = Seq2(newDataStructure);
  return isIndexed2(oldSeq) === isIndexed2(newSeq) && isKeyed2(oldSeq) === isKeyed2(newSeq);
}
__name2(areMergeable2, "areMergeable");
function mergeDeep2() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeDeepWithSources2(this, iters);
}
__name2(mergeDeep2, "mergeDeep");
function mergeDeepWith2(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return mergeDeepWithSources2(this, iters, merger);
}
__name2(mergeDeepWith2, "mergeDeepWith");
function mergeIn2(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$12(this, keyPath, emptyMap2(), function(m) {
    return mergeWithSources2(m, iters);
  });
}
__name2(mergeIn2, "mergeIn");
function mergeDeepIn2(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$12(
    this,
    keyPath,
    emptyMap2(),
    function(m) {
      return mergeDeepWithSources2(m, iters);
    }
  );
}
__name2(mergeDeepIn2, "mergeDeepIn");
function withMutations2(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
__name2(withMutations2, "withMutations");
function asMutable2() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID2());
}
__name2(asMutable2, "asMutable");
function asImmutable2() {
  return this.__ensureOwner();
}
__name2(asImmutable2, "asImmutable");
function wasAltered3() {
  return this.__altered;
}
__name2(wasAltered3, "wasAltered");
var Map22 = /* @__PURE__ */ function(KeyedCollection22) {
  function Map3(value) {
    return value === void 0 || value === null ? emptyMap2() : isMap2(value) && !isOrdered2(value) ? value : emptyMap2().withMutations(function(map22) {
      var iter = KeyedCollection22(value);
      assertNotInfinite2(iter.size);
      iter.forEach(function(v, k) {
        return map22.set(k, v);
      });
    });
  }
  __name2(Map3, "Map");
  if (KeyedCollection22)
    Map3.__proto__ = KeyedCollection22;
  Map3.prototype = Object.create(KeyedCollection22 && KeyedCollection22.prototype);
  Map3.prototype.constructor = Map3;
  Map3.of = /* @__PURE__ */ __name2(function of() {
    var keyValues = [], len = arguments.length;
    while (len--)
      keyValues[len] = arguments[len];
    return emptyMap2().withMutations(function(map22) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error("Missing value for key: " + keyValues[i]);
        }
        map22.set(keyValues[i], keyValues[i + 1]);
      }
    });
  }, "of");
  Map3.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("Map {", "}");
  }, "toString");
  Map3.prototype.get = /* @__PURE__ */ __name2(function get112(k, notSetValue) {
    return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
  }, "get");
  Map3.prototype.set = /* @__PURE__ */ __name2(function set32(k, v) {
    return updateMap2(this, k, v);
  }, "set");
  Map3.prototype.remove = /* @__PURE__ */ __name2(function remove32(k) {
    return updateMap2(this, k, NOT_SET2);
  }, "remove");
  Map3.prototype.deleteAll = /* @__PURE__ */ __name2(function deleteAll(keys22) {
    var collection = Collection3(keys22);
    if (collection.size === 0) {
      return this;
    }
    return this.withMutations(function(map22) {
      collection.forEach(function(key) {
        return map22.remove(key);
      });
    });
  }, "deleteAll");
  Map3.prototype.clear = /* @__PURE__ */ __name2(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyMap2();
  }, "clear");
  Map3.prototype.sort = /* @__PURE__ */ __name2(function sort22(comparator) {
    return OrderedMap2(sortFactory2(this, comparator));
  }, "sort");
  Map3.prototype.sortBy = /* @__PURE__ */ __name2(function sortBy22(mapper, comparator) {
    return OrderedMap2(sortFactory2(this, comparator, mapper));
  }, "sortBy");
  Map3.prototype.map = /* @__PURE__ */ __name2(function map22(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(map3) {
      map3.forEach(function(value, key) {
        map3.set(key, mapper.call(context, value, key, this$1$1));
      });
    });
  }, "map");
  Map3.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    return new MapIterator2(this, type, reverse32);
  }, "__iterator");
  Map3.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    var iterations = 0;
    this._root && this._root.iterate(function(entry) {
      iterations++;
      return fn(entry[1], entry[0], this$1$1);
    }, reverse32);
    return iterations;
  }, "__iterate");
  Map3.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap2();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap2(this.size, this._root, ownerID, this.__hash);
  }, "__ensureOwner");
  return Map3;
}(KeyedCollection2);
Map22.isMap = isMap2;
var MapPrototype2 = Map22.prototype;
MapPrototype2[IS_MAP_SYMBOL2] = true;
MapPrototype2[DELETE2] = MapPrototype2.remove;
MapPrototype2.removeAll = MapPrototype2.deleteAll;
MapPrototype2.setIn = setIn2;
MapPrototype2.removeIn = MapPrototype2.deleteIn = deleteIn2;
MapPrototype2.update = update8;
MapPrototype2.updateIn = updateIn2;
MapPrototype2.merge = MapPrototype2.concat = merge$12;
MapPrototype2.mergeWith = mergeWith$12;
MapPrototype2.mergeDeep = mergeDeep2;
MapPrototype2.mergeDeepWith = mergeDeepWith2;
MapPrototype2.mergeIn = mergeIn2;
MapPrototype2.mergeDeepIn = mergeDeepIn2;
MapPrototype2.withMutations = withMutations2;
MapPrototype2.wasAltered = wasAltered3;
MapPrototype2.asImmutable = asImmutable2;
MapPrototype2["@@transducer/init"] = MapPrototype2.asMutable = asMutable2;
MapPrototype2["@@transducer/step"] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype2["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var ArrayMapNode3 = /* @__PURE__ */ __name2(function ArrayMapNode22(ownerID, entries32) {
  this.ownerID = ownerID;
  this.entries = entries32;
}, "ArrayMapNode");
ArrayMapNode3.prototype.get = /* @__PURE__ */ __name2(function get22(shift, keyHash, key, notSetValue) {
  var entries32 = this.entries;
  for (var ii = 0, len = entries32.length; ii < len; ii++) {
    if (is2(key, entries32[ii][0])) {
      return entries32[ii][1];
    }
  }
  return notSetValue;
}, "get");
ArrayMapNode3.prototype.update = /* @__PURE__ */ __name2(function update22(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET2;
  var entries32 = this.entries;
  var idx = 0;
  var len = entries32.length;
  for (; idx < len; idx++) {
    if (is2(key, entries32[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries32[idx][1] === value : removed) {
    return this;
  }
  SetRef2(didAlter);
  (removed || !exists) && SetRef2(didChangeSize);
  if (removed && entries32.length === 1) {
    return;
  }
  if (!exists && !removed && entries32.length >= MAX_ARRAY_MAP_SIZE2) {
    return createNodes2(ownerID, entries32, key, value);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries32 : arrCopy2(entries32);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new ArrayMapNode3(ownerID, newEntries);
}, "update");
var BitmapIndexedNode3 = /* @__PURE__ */ __name2(function BitmapIndexedNode22(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
}, "BitmapIndexedNode");
BitmapIndexedNode3.prototype.get = /* @__PURE__ */ __name2(function get32(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash2(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK2);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount2(bitmap & bit - 1)].get(
    shift + SHIFT2,
    keyHash,
    key,
    notSetValue
  );
}, "get");
BitmapIndexedNode3.prototype.update = /* @__PURE__ */ __name2(function update32(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash2(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;
  if (!exists && value === NOT_SET2) {
    return this;
  }
  var idx = popCount2(bitmap & bit - 1);
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : void 0;
  var newNode = updateNode2(
    node,
    ownerID,
    shift + SHIFT2,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE2) {
    return expandNodes2(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }
  if (exists && !newNode && nodes.length === 2 && isLeafNode2(nodes[idx ^ 1])) {
    return nodes[idx ^ 1];
  }
  if (exists && newNode && nodes.length === 1 && isLeafNode2(newNode)) {
    return newNode;
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
  var newNodes = exists ? newNode ? setAt2(nodes, idx, newNode, isEditable) : spliceOut2(nodes, idx, isEditable) : spliceIn2(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }
  return new BitmapIndexedNode3(ownerID, newBitmap, newNodes);
}, "update");
var HashArrayMapNode3 = /* @__PURE__ */ __name2(function HashArrayMapNode22(ownerID, count22, nodes) {
  this.ownerID = ownerID;
  this.count = count22;
  this.nodes = nodes;
}, "HashArrayMapNode");
HashArrayMapNode3.prototype.get = /* @__PURE__ */ __name2(function get42(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash2(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
  var node = this.nodes[idx];
  return node ? node.get(shift + SHIFT2, keyHash, key, notSetValue) : notSetValue;
}, "get");
HashArrayMapNode3.prototype.update = /* @__PURE__ */ __name2(function update42(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash2(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
  var removed = value === NOT_SET2;
  var nodes = this.nodes;
  var node = nodes[idx];
  if (removed && !node) {
    return this;
  }
  var newNode = updateNode2(
    node,
    ownerID,
    shift + SHIFT2,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE2) {
      return packNodes2(ownerID, nodes, newCount, idx);
    }
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt2(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }
  return new HashArrayMapNode3(ownerID, newCount, newNodes);
}, "update");
var HashCollisionNode3 = /* @__PURE__ */ __name2(function HashCollisionNode22(ownerID, keyHash, entries32) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries32;
}, "HashCollisionNode");
HashCollisionNode3.prototype.get = /* @__PURE__ */ __name2(function get52(shift, keyHash, key, notSetValue) {
  var entries32 = this.entries;
  for (var ii = 0, len = entries32.length; ii < len; ii++) {
    if (is2(key, entries32[ii][0])) {
      return entries32[ii][1];
    }
  }
  return notSetValue;
}, "get");
HashCollisionNode3.prototype.update = /* @__PURE__ */ __name2(function update52(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash2(key);
  }
  var removed = value === NOT_SET2;
  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef2(didAlter);
    SetRef2(didChangeSize);
    return mergeIntoNode2(this, ownerID, shift, keyHash, [key, value]);
  }
  var entries32 = this.entries;
  var idx = 0;
  var len = entries32.length;
  for (; idx < len; idx++) {
    if (is2(key, entries32[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries32[idx][1] === value : removed) {
    return this;
  }
  SetRef2(didAlter);
  (removed || !exists) && SetRef2(didChangeSize);
  if (removed && len === 2) {
    return new ValueNode3(ownerID, this.keyHash, entries32[idx ^ 1]);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries32 : arrCopy2(entries32);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new HashCollisionNode3(ownerID, this.keyHash, newEntries);
}, "update");
var ValueNode3 = /* @__PURE__ */ __name2(function ValueNode22(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
}, "ValueNode");
ValueNode3.prototype.get = /* @__PURE__ */ __name2(function get62(shift, keyHash, key, notSetValue) {
  return is2(key, this.entry[0]) ? this.entry[1] : notSetValue;
}, "get");
ValueNode3.prototype.update = /* @__PURE__ */ __name2(function update62(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET2;
  var keyMatch = is2(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }
  SetRef2(didAlter);
  if (removed) {
    SetRef2(didChangeSize);
    return;
  }
  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode3(ownerID, this.keyHash, [key, value]);
  }
  SetRef2(didChangeSize);
  return mergeIntoNode2(this, ownerID, shift, hash2(key), [key, value]);
}, "update");
ArrayMapNode3.prototype.iterate = HashCollisionNode3.prototype.iterate = function(fn, reverse32) {
  var entries32 = this.entries;
  for (var ii = 0, maxIndex = entries32.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries32[reverse32 ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};
BitmapIndexedNode3.prototype.iterate = HashArrayMapNode3.prototype.iterate = function(fn, reverse32) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse32 ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse32) === false) {
      return false;
    }
  }
};
ValueNode3.prototype.iterate = function(fn, reverse32) {
  return fn(this.entry);
};
var MapIterator2 = /* @__PURE__ */ function(Iterator32) {
  function MapIterator22(map22, type, reverse32) {
    this._type = type;
    this._reverse = reverse32;
    this._stack = map22._root && mapIteratorFrame2(map22._root);
  }
  __name2(MapIterator22, "MapIterator");
  if (Iterator32)
    MapIterator22.__proto__ = Iterator32;
  MapIterator22.prototype = Object.create(Iterator32 && Iterator32.prototype);
  MapIterator22.prototype.constructor = MapIterator22;
  MapIterator22.prototype.next = /* @__PURE__ */ __name2(function next() {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = void 0;
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue2(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue2(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue2(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame2(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone2();
  }, "next");
  return MapIterator22;
}(Iterator3);
function mapIteratorValue2(type, entry) {
  return iteratorValue2(type, entry[0], entry[1]);
}
__name2(mapIteratorValue2, "mapIteratorValue");
function mapIteratorFrame2(node, prev) {
  return {
    node,
    index: 0,
    __prev: prev
  };
}
__name2(mapIteratorFrame2, "mapIteratorFrame");
function makeMap2(size, root, ownerID, hash22) {
  var map22 = Object.create(MapPrototype2);
  map22.size = size;
  map22._root = root;
  map22.__ownerID = ownerID;
  map22.__hash = hash22;
  map22.__altered = false;
  return map22;
}
__name2(makeMap2, "makeMap");
var EMPTY_MAP2;
function emptyMap2() {
  return EMPTY_MAP2 || (EMPTY_MAP2 = makeMap2(0));
}
__name2(emptyMap2, "emptyMap");
function updateMap2(map22, k, v) {
  var newRoot;
  var newSize;
  if (!map22._root) {
    if (v === NOT_SET2) {
      return map22;
    }
    newSize = 1;
    newRoot = new ArrayMapNode3(map22.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef2();
    var didAlter = MakeRef2();
    newRoot = updateNode2(
      map22._root,
      map22.__ownerID,
      0,
      void 0,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map22;
    }
    newSize = map22.size + (didChangeSize.value ? v === NOT_SET2 ? -1 : 1 : 0);
  }
  if (map22.__ownerID) {
    map22.size = newSize;
    map22._root = newRoot;
    map22.__hash = void 0;
    map22.__altered = true;
    return map22;
  }
  return newRoot ? makeMap2(newSize, newRoot) : emptyMap2();
}
__name2(updateMap2, "updateMap");
function updateNode2(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (!node) {
    if (value === NOT_SET2) {
      return node;
    }
    SetRef2(didAlter);
    SetRef2(didChangeSize);
    return new ValueNode3(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}
__name2(updateNode2, "updateNode");
function isLeafNode2(node) {
  return node.constructor === ValueNode3 || node.constructor === HashCollisionNode3;
}
__name2(isLeafNode2, "isLeafNode");
function mergeIntoNode2(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode3(ownerID, keyHash, [node.entry, entry]);
  }
  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK2;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
  var newNode;
  var nodes = idx1 === idx2 ? [mergeIntoNode2(node, ownerID, shift + SHIFT2, keyHash, entry)] : (newNode = new ValueNode3(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
  return new BitmapIndexedNode3(ownerID, 1 << idx1 | 1 << idx2, nodes);
}
__name2(mergeIntoNode2, "mergeIntoNode");
function createNodes2(ownerID, entries32, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID2();
  }
  var node = new ValueNode3(ownerID, hash2(key), [key, value]);
  for (var ii = 0; ii < entries32.length; ii++) {
    var entry = entries32[ii];
    node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
  }
  return node;
}
__name2(createNodes2, "createNodes");
function packNodes2(ownerID, nodes, count22, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count22);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== void 0 && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode3(ownerID, bitmap, packedNodes);
}
__name2(packNodes2, "packNodes");
function expandNodes2(ownerID, nodes, bitmap, including, node) {
  var count22 = 0;
  var expandedNodes = new Array(SIZE2);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count22++] : void 0;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode3(ownerID, count22 + 1, expandedNodes);
}
__name2(expandNodes2, "expandNodes");
function popCount2(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
__name2(popCount2, "popCount");
function setAt2(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy2(array);
  newArray[idx] = val;
  return newArray;
}
__name2(setAt2, "setAt");
function spliceIn2(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}
__name2(spliceIn2, "spliceIn");
function spliceOut2(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}
__name2(spliceOut2, "spliceOut");
var MAX_ARRAY_MAP_SIZE2 = SIZE2 / 4;
var MAX_BITMAP_INDEXED_SIZE2 = SIZE2 / 2;
var MIN_HASH_ARRAY_MAP_SIZE2 = SIZE2 / 4;
var IS_LIST_SYMBOL2 = "@@__IMMUTABLE_LIST__@@";
function isList2(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL2]);
}
__name2(isList2, "isList");
var List2 = /* @__PURE__ */ function(IndexedCollection22) {
  function List22(value) {
    var empty = emptyList2();
    if (value === void 0 || value === null) {
      return empty;
    }
    if (isList2(value)) {
      return value;
    }
    var iter = IndexedCollection22(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite2(size);
    if (size > 0 && size < SIZE2) {
      return makeList2(0, size, SHIFT2, null, new VNode3(iter.toArray()));
    }
    return empty.withMutations(function(list) {
      list.setSize(size);
      iter.forEach(function(v, i) {
        return list.set(i, v);
      });
    });
  }
  __name2(List22, "List");
  if (IndexedCollection22)
    List22.__proto__ = IndexedCollection22;
  List22.prototype = Object.create(IndexedCollection22 && IndexedCollection22.prototype);
  List22.prototype.constructor = List22;
  List22.of = /* @__PURE__ */ __name2(function of() {
    return this(arguments);
  }, "of");
  List22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("List [", "]");
  }, "toString");
  List22.prototype.get = /* @__PURE__ */ __name2(function get112(index, notSetValue) {
    index = wrapIndex2(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor2(this, index);
      return node && node.array[index & MASK2];
    }
    return notSetValue;
  }, "get");
  List22.prototype.set = /* @__PURE__ */ __name2(function set32(index, value) {
    return updateList2(this, index, value);
  }, "set");
  List22.prototype.remove = /* @__PURE__ */ __name2(function remove32(index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  }, "remove");
  List22.prototype.insert = /* @__PURE__ */ __name2(function insert(index, value) {
    return this.splice(index, 0, value);
  }, "insert");
  List22.prototype.clear = /* @__PURE__ */ __name2(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT2;
      this._root = this._tail = this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyList2();
  }, "clear");
  List22.prototype.push = /* @__PURE__ */ __name2(function push() {
    var values22 = arguments;
    var oldSize = this.size;
    return this.withMutations(function(list) {
      setListBounds2(list, 0, oldSize + values22.length);
      for (var ii = 0; ii < values22.length; ii++) {
        list.set(oldSize + ii, values22[ii]);
      }
    });
  }, "push");
  List22.prototype.pop = /* @__PURE__ */ __name2(function pop() {
    return setListBounds2(this, 0, -1);
  }, "pop");
  List22.prototype.unshift = /* @__PURE__ */ __name2(function unshift() {
    var values22 = arguments;
    return this.withMutations(function(list) {
      setListBounds2(list, -values22.length);
      for (var ii = 0; ii < values22.length; ii++) {
        list.set(ii, values22[ii]);
      }
    });
  }, "unshift");
  List22.prototype.shift = /* @__PURE__ */ __name2(function shift() {
    return setListBounds2(this, 1);
  }, "shift");
  List22.prototype.concat = /* @__PURE__ */ __name2(function concat22() {
    var arguments$1 = arguments;
    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection22(
        typeof argument !== "string" && hasIterator2(argument) ? argument : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function(list) {
      seqs.forEach(function(seq2) {
        return seq2.forEach(function(value) {
          return list.push(value);
        });
      });
    });
  }, "concat");
  List22.prototype.setSize = /* @__PURE__ */ __name2(function setSize(size) {
    return setListBounds2(this, 0, size);
  }, "setSize");
  List22.prototype.map = /* @__PURE__ */ __name2(function map22(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(list) {
      for (var i = 0; i < this$1$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, this$1$1));
      }
    });
  }, "map");
  List22.prototype.slice = /* @__PURE__ */ __name2(function slice32(begin, end) {
    var size = this.size;
    if (wholeSlice2(begin, end, size)) {
      return this;
    }
    return setListBounds2(
      this,
      resolveBegin2(begin, size),
      resolveEnd2(end, size)
    );
  }, "slice");
  List22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var index = reverse32 ? this.size : 0;
    var values22 = iterateList2(this, reverse32);
    return new Iterator3(function() {
      var value = values22();
      return value === DONE2 ? iteratorDone2() : iteratorValue2(type, reverse32 ? --index : index++, value);
    });
  }, "__iterator");
  List22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var index = reverse32 ? this.size : 0;
    var values22 = iterateList2(this, reverse32);
    var value;
    while ((value = values22()) !== DONE2) {
      if (fn(value, reverse32 ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  }, "__iterate");
  List22.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList2();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList2(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  }, "__ensureOwner");
  return List22;
}(IndexedCollection2);
List2.isList = isList2;
var ListPrototype2 = List2.prototype;
ListPrototype2[IS_LIST_SYMBOL2] = true;
ListPrototype2[DELETE2] = ListPrototype2.remove;
ListPrototype2.merge = ListPrototype2.concat;
ListPrototype2.setIn = setIn2;
ListPrototype2.deleteIn = ListPrototype2.removeIn = deleteIn2;
ListPrototype2.update = update8;
ListPrototype2.updateIn = updateIn2;
ListPrototype2.mergeIn = mergeIn2;
ListPrototype2.mergeDeepIn = mergeDeepIn2;
ListPrototype2.withMutations = withMutations2;
ListPrototype2.wasAltered = wasAltered3;
ListPrototype2.asImmutable = asImmutable2;
ListPrototype2["@@transducer/init"] = ListPrototype2.asMutable = asMutable2;
ListPrototype2["@@transducer/step"] = function(result, arr) {
  return result.push(arr);
};
ListPrototype2["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var VNode3 = /* @__PURE__ */ __name2(function VNode22(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
}, "VNode");
VNode3.prototype.removeBefore = /* @__PURE__ */ __name2(function removeBefore2(ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = index >>> level & MASK2;
  if (originIndex >= this.array.length) {
    return new VNode3([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT2, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode2(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = void 0;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
}, "removeBefore");
VNode3.prototype.removeAfter = /* @__PURE__ */ __name2(function removeAfter2(ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = index - 1 >>> level & MASK2;
  if (sizeIndex >= this.array.length) {
    return this;
  }
  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT2, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }
  var editable = editableVNode2(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
}, "removeAfter");
var DONE2 = {};
function iterateList2(list, reverse32) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset2(right);
  var tail = list._tail;
  return iterateNodeOrLeaf(list._root, list._level, 0);
  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
  }
  __name2(iterateNodeOrLeaf, "iterateNodeOrLeaf");
  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE2) {
      to = SIZE2;
    }
    return function() {
      if (from === to) {
        return DONE2;
      }
      var idx = reverse32 ? --to : from++;
      return array && array[idx];
    };
  }
  __name2(iterateLeaf, "iterateLeaf");
  function iterateNode(node, level, offset) {
    var values22;
    var array = node && node.array;
    var from = offset > left ? 0 : left - offset >> level;
    var to = (right - offset >> level) + 1;
    if (to > SIZE2) {
      to = SIZE2;
    }
    return function() {
      while (true) {
        if (values22) {
          var value = values22();
          if (value !== DONE2) {
            return value;
          }
          values22 = null;
        }
        if (from === to) {
          return DONE2;
        }
        var idx = reverse32 ? --to : from++;
        values22 = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT2,
          offset + (idx << level)
        );
      }
    };
  }
  __name2(iterateNode, "iterateNode");
}
__name2(iterateList2, "iterateList");
function makeList2(origin2, capacity, level, root, tail, ownerID, hash22) {
  var list = Object.create(ListPrototype2);
  list.size = capacity - origin2;
  list._origin = origin2;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash22;
  list.__altered = false;
  return list;
}
__name2(makeList2, "makeList");
var EMPTY_LIST2;
function emptyList2() {
  return EMPTY_LIST2 || (EMPTY_LIST2 = makeList2(0, 0, SHIFT2));
}
__name2(emptyList2, "emptyList");
function updateList2(list, index, value) {
  index = wrapIndex2(list, index);
  if (index !== index) {
    return list;
  }
  if (index >= list.size || index < 0) {
    return list.withMutations(function(list2) {
      index < 0 ? setListBounds2(list2, index).set(0, value) : setListBounds2(list2, 0, index + 1).set(index, value);
    });
  }
  index += list._origin;
  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef2();
  if (index >= getTailOffset2(list._capacity)) {
    newTail = updateVNode2(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode2(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }
  if (!didAlter.value) {
    return list;
  }
  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList2(list._origin, list._capacity, list._level, newRoot, newTail);
}
__name2(updateList2, "updateList");
function updateVNode2(node, ownerID, level, index, value, didAlter) {
  var idx = index >>> level & MASK2;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === void 0) {
    return node;
  }
  var newNode;
  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode2(
      lowerNode,
      ownerID,
      level - SHIFT2,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode2(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }
  if (nodeHas && node.array[idx] === value) {
    return node;
  }
  if (didAlter) {
    SetRef2(didAlter);
  }
  newNode = editableVNode2(node, ownerID);
  if (value === void 0 && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}
__name2(updateVNode2, "updateVNode");
function editableVNode2(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode3(node ? node.array.slice() : [], ownerID);
}
__name2(editableVNode2, "editableVNode");
function listNodeFor2(list, rawIndex) {
  if (rawIndex >= getTailOffset2(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << list._level + SHIFT2) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[rawIndex >>> level & MASK2];
      level -= SHIFT2;
    }
    return node;
  }
}
__name2(listNodeFor2, "listNodeFor");
function setListBounds2(list, begin, end) {
  if (begin !== void 0) {
    begin |= 0;
  }
  if (end !== void 0) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID2();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }
  if (newOrigin >= newCapacity) {
    return list.clear();
  }
  var newLevel = list._level;
  var newRoot = list._root;
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode3(
      newRoot && newRoot.array.length ? [void 0, newRoot] : [],
      owner
    );
    newLevel += SHIFT2;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }
  var oldTailOffset = getTailOffset2(oldCapacity);
  var newTailOffset = getTailOffset2(newCapacity);
  while (newTailOffset >= 1 << newLevel + SHIFT2) {
    newRoot = new VNode3(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT2;
  }
  var oldTail = list._tail;
  var newTail = newTailOffset < oldTailOffset ? listNodeFor2(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode3([], owner) : oldTail;
  if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
    newRoot = editableVNode2(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT2; level -= SHIFT2) {
      var idx = oldTailOffset >>> level & MASK2;
      node = node.array[idx] = editableVNode2(node.array[idx], owner);
    }
    node.array[oldTailOffset >>> SHIFT2 & MASK2] = oldTail;
  }
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT2;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;
    while (newRoot) {
      var beginIndex = newOrigin >>> newLevel & MASK2;
      if (beginIndex !== newTailOffset >>> newLevel & MASK2) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT2;
      newRoot = newRoot.array[beginIndex];
    }
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }
  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList2(newOrigin, newCapacity, newLevel, newRoot, newTail);
}
__name2(setListBounds2, "setListBounds");
function getTailOffset2(size) {
  return size < SIZE2 ? 0 : size - 1 >>> SHIFT2 << SHIFT2;
}
__name2(getTailOffset2, "getTailOffset");
var OrderedMap2 = /* @__PURE__ */ function(Map3) {
  function OrderedMap22(value) {
    return value === void 0 || value === null ? emptyOrderedMap2() : isOrderedMap2(value) ? value : emptyOrderedMap2().withMutations(function(map22) {
      var iter = KeyedCollection2(value);
      assertNotInfinite2(iter.size);
      iter.forEach(function(v, k) {
        return map22.set(k, v);
      });
    });
  }
  __name2(OrderedMap22, "OrderedMap");
  if (Map3)
    OrderedMap22.__proto__ = Map3;
  OrderedMap22.prototype = Object.create(Map3 && Map3.prototype);
  OrderedMap22.prototype.constructor = OrderedMap22;
  OrderedMap22.of = /* @__PURE__ */ __name2(function of() {
    return this(arguments);
  }, "of");
  OrderedMap22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("OrderedMap {", "}");
  }, "toString");
  OrderedMap22.prototype.get = /* @__PURE__ */ __name2(function get112(k, notSetValue) {
    var index = this._map.get(k);
    return index !== void 0 ? this._list.get(index)[1] : notSetValue;
  }, "get");
  OrderedMap22.prototype.clear = /* @__PURE__ */ __name2(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      this.__altered = true;
      return this;
    }
    return emptyOrderedMap2();
  }, "clear");
  OrderedMap22.prototype.set = /* @__PURE__ */ __name2(function set32(k, v) {
    return updateOrderedMap2(this, k, v);
  }, "set");
  OrderedMap22.prototype.remove = /* @__PURE__ */ __name2(function remove32(k) {
    return updateOrderedMap2(this, k, NOT_SET2);
  }, "remove");
  OrderedMap22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._list.__iterate(
      function(entry) {
        return entry && fn(entry[1], entry[0], this$1$1);
      },
      reverse32
    );
  }, "__iterate");
  OrderedMap22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    return this._list.fromEntrySeq().__iterator(type, reverse32);
  }, "__iterator");
  OrderedMap22.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap2();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap2(newMap, newList, ownerID, this.__hash);
  }, "__ensureOwner");
  return OrderedMap22;
}(Map22);
OrderedMap2.isOrderedMap = isOrderedMap2;
OrderedMap2.prototype[IS_ORDERED_SYMBOL2] = true;
OrderedMap2.prototype[DELETE2] = OrderedMap2.prototype.remove;
function makeOrderedMap2(map22, list, ownerID, hash22) {
  var omap = Object.create(OrderedMap2.prototype);
  omap.size = map22 ? map22.size : 0;
  omap._map = map22;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash22;
  omap.__altered = false;
  return omap;
}
__name2(makeOrderedMap2, "makeOrderedMap");
var EMPTY_ORDERED_MAP2;
function emptyOrderedMap2() {
  return EMPTY_ORDERED_MAP2 || (EMPTY_ORDERED_MAP2 = makeOrderedMap2(emptyMap2(), emptyList2()));
}
__name2(emptyOrderedMap2, "emptyOrderedMap");
function updateOrderedMap2(omap, k, v) {
  var map22 = omap._map;
  var list = omap._list;
  var i = map22.get(k);
  var has52 = i !== void 0;
  var newMap;
  var newList;
  if (v === NOT_SET2) {
    if (!has52) {
      return omap;
    }
    if (list.size >= SIZE2 && list.size >= map22.size * 2) {
      newList = list.filter(function(entry, idx) {
        return entry !== void 0 && i !== idx;
      });
      newMap = newList.toKeyedSeq().map(function(entry) {
        return entry[0];
      }).flip().toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map22.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
    }
  } else if (has52) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map22;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map22.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = void 0;
    omap.__altered = true;
    return omap;
  }
  return makeOrderedMap2(newMap, newList);
}
__name2(updateOrderedMap2, "updateOrderedMap");
var IS_STACK_SYMBOL2 = "@@__IMMUTABLE_STACK__@@";
function isStack2(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL2]);
}
__name2(isStack2, "isStack");
var Stack2 = /* @__PURE__ */ function(IndexedCollection22) {
  function Stack22(value) {
    return value === void 0 || value === null ? emptyStack2() : isStack2(value) ? value : emptyStack2().pushAll(value);
  }
  __name2(Stack22, "Stack");
  if (IndexedCollection22)
    Stack22.__proto__ = IndexedCollection22;
  Stack22.prototype = Object.create(IndexedCollection22 && IndexedCollection22.prototype);
  Stack22.prototype.constructor = Stack22;
  Stack22.of = /* @__PURE__ */ __name2(function of() {
    return this(arguments);
  }, "of");
  Stack22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("Stack [", "]");
  }, "toString");
  Stack22.prototype.get = /* @__PURE__ */ __name2(function get112(index, notSetValue) {
    var head = this._head;
    index = wrapIndex2(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  }, "get");
  Stack22.prototype.peek = /* @__PURE__ */ __name2(function peek() {
    return this._head && this._head.value;
  }, "peek");
  Stack22.prototype.push = /* @__PURE__ */ __name2(function push() {
    var arguments$1 = arguments;
    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack2(newSize, head);
  }, "push");
  Stack22.prototype.pushAll = /* @__PURE__ */ __name2(function pushAll(iter) {
    iter = IndexedCollection22(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack2(iter)) {
      return iter;
    }
    assertNotInfinite2(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function(value) {
      newSize++;
      head = {
        value,
        next: head
      };
    }, true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack2(newSize, head);
  }, "pushAll");
  Stack22.prototype.pop = /* @__PURE__ */ __name2(function pop() {
    return this.slice(1);
  }, "pop");
  Stack22.prototype.clear = /* @__PURE__ */ __name2(function clear22() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = void 0;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyStack2();
  }, "clear");
  Stack22.prototype.slice = /* @__PURE__ */ __name2(function slice32(begin, end) {
    if (wholeSlice2(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin2(begin, this.size);
    var resolvedEnd = resolveEnd2(end, this.size);
    if (resolvedEnd !== this.size) {
      return IndexedCollection22.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack2(newSize, head);
  }, "slice");
  Stack22.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack2();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack2(this.size, this._head, ownerID, this.__hash);
  }, "__ensureOwner");
  Stack22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    if (reverse32) {
      return new ArraySeq2(this.toArray()).__iterate(
        function(v, k) {
          return fn(v, k, this$1$1);
        },
        reverse32
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  }, "__iterate");
  Stack22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    if (reverse32) {
      return new ArraySeq2(this.toArray()).__iterator(type, reverse32);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator3(function() {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue2(type, iterations++, value);
      }
      return iteratorDone2();
    });
  }, "__iterator");
  return Stack22;
}(IndexedCollection2);
Stack2.isStack = isStack2;
var StackPrototype2 = Stack2.prototype;
StackPrototype2[IS_STACK_SYMBOL2] = true;
StackPrototype2.shift = StackPrototype2.pop;
StackPrototype2.unshift = StackPrototype2.push;
StackPrototype2.unshiftAll = StackPrototype2.pushAll;
StackPrototype2.withMutations = withMutations2;
StackPrototype2.wasAltered = wasAltered3;
StackPrototype2.asImmutable = asImmutable2;
StackPrototype2["@@transducer/init"] = StackPrototype2.asMutable = asMutable2;
StackPrototype2["@@transducer/step"] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype2["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
function makeStack2(size, head, ownerID, hash22) {
  var map22 = Object.create(StackPrototype2);
  map22.size = size;
  map22._head = head;
  map22.__ownerID = ownerID;
  map22.__hash = hash22;
  map22.__altered = false;
  return map22;
}
__name2(makeStack2, "makeStack");
var EMPTY_STACK2;
function emptyStack2() {
  return EMPTY_STACK2 || (EMPTY_STACK2 = makeStack2(0));
}
__name2(emptyStack2, "emptyStack");
var IS_SET_SYMBOL2 = "@@__IMMUTABLE_SET__@@";
function isSet2(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL2]);
}
__name2(isSet2, "isSet");
function isOrderedSet2(maybeOrderedSet) {
  return isSet2(maybeOrderedSet) && isOrdered2(maybeOrderedSet);
}
__name2(isOrderedSet2, "isOrderedSet");
function deepEqual2(a, b) {
  if (a === b) {
    return true;
  }
  if (!isCollection2(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed2(a) !== isKeyed2(b) || isIndexed2(a) !== isIndexed2(b) || isOrdered2(a) !== isOrdered2(b)) {
    return false;
  }
  if (a.size === 0 && b.size === 0) {
    return true;
  }
  var notAssociative = !isAssociative2(a);
  if (isOrdered2(a)) {
    var entries32 = a.entries();
    return b.every(function(v, k) {
      var entry = entries32.next().value;
      return entry && is2(entry[1], v) && (notAssociative || is2(entry[0], k));
    }) && entries32.next().done;
  }
  var flipped = false;
  if (a.size === void 0) {
    if (b.size === void 0) {
      if (typeof a.cacheResult === "function") {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }
  var allEqual = true;
  var bSize = b.__iterate(function(v, k) {
    if (notAssociative ? !a.has(v) : flipped ? !is2(v, a.get(k, NOT_SET2)) : !is2(a.get(k, NOT_SET2), v)) {
      allEqual = false;
      return false;
    }
  });
  return allEqual && a.size === bSize;
}
__name2(deepEqual2, "deepEqual");
function mixin2(ctor, methods) {
  var keyCopier = /* @__PURE__ */ __name2(function(key) {
    ctor.prototype[key] = methods[key];
  }, "keyCopier");
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}
__name2(mixin2, "mixin");
function toJS2(value) {
  if (!value || typeof value !== "object") {
    return value;
  }
  if (!isCollection2(value)) {
    if (!isDataStructure2(value)) {
      return value;
    }
    value = Seq2(value);
  }
  if (isKeyed2(value)) {
    var result$1 = {};
    value.__iterate(function(v, k) {
      result$1[k] = toJS2(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function(v) {
    result.push(toJS2(v));
  });
  return result;
}
__name2(toJS2, "toJS");
var Set2 = /* @__PURE__ */ function(SetCollection22) {
  function Set22(value) {
    return value === void 0 || value === null ? emptySet2() : isSet2(value) && !isOrdered2(value) ? value : emptySet2().withMutations(function(set32) {
      var iter = SetCollection22(value);
      assertNotInfinite2(iter.size);
      iter.forEach(function(v) {
        return set32.add(v);
      });
    });
  }
  __name2(Set22, "Set");
  if (SetCollection22)
    Set22.__proto__ = SetCollection22;
  Set22.prototype = Object.create(SetCollection22 && SetCollection22.prototype);
  Set22.prototype.constructor = Set22;
  Set22.of = /* @__PURE__ */ __name2(function of() {
    return this(arguments);
  }, "of");
  Set22.fromKeys = /* @__PURE__ */ __name2(function fromKeys(value) {
    return this(KeyedCollection2(value).keySeq());
  }, "fromKeys");
  Set22.intersect = /* @__PURE__ */ __name2(function intersect(sets) {
    sets = Collection3(sets).toArray();
    return sets.length ? SetPrototype2.intersect.apply(Set22(sets.pop()), sets) : emptySet2();
  }, "intersect");
  Set22.union = /* @__PURE__ */ __name2(function union(sets) {
    sets = Collection3(sets).toArray();
    return sets.length ? SetPrototype2.union.apply(Set22(sets.pop()), sets) : emptySet2();
  }, "union");
  Set22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("Set {", "}");
  }, "toString");
  Set22.prototype.has = /* @__PURE__ */ __name2(function has52(value) {
    return this._map.has(value);
  }, "has");
  Set22.prototype.add = /* @__PURE__ */ __name2(function add(value) {
    return updateSet2(this, this._map.set(value, value));
  }, "add");
  Set22.prototype.remove = /* @__PURE__ */ __name2(function remove32(value) {
    return updateSet2(this, this._map.remove(value));
  }, "remove");
  Set22.prototype.clear = /* @__PURE__ */ __name2(function clear22() {
    return updateSet2(this, this._map.clear());
  }, "clear");
  Set22.prototype.map = /* @__PURE__ */ __name2(function map22(mapper, context) {
    var this$1$1 = this;
    var didChanges = false;
    var newMap = updateSet2(
      this,
      this._map.mapEntries(function(ref) {
        var v = ref[1];
        var mapped = mapper.call(context, v, v, this$1$1);
        if (mapped !== v) {
          didChanges = true;
        }
        return [mapped, mapped];
      }, context)
    );
    return didChanges ? newMap : this;
  }, "map");
  Set22.prototype.union = /* @__PURE__ */ __name2(function union() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    iters = iters.filter(function(x) {
      return x.size !== 0;
    });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function(set32) {
      for (var ii = 0; ii < iters.length; ii++) {
        if (typeof iters[ii] === "string") {
          set32.add(iters[ii]);
        } else {
          SetCollection22(iters[ii]).forEach(function(value) {
            return set32.add(value);
          });
        }
      }
    });
  }, "union");
  Set22.prototype.intersect = /* @__PURE__ */ __name2(function intersect() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection22(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (!iters.every(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set32) {
      toRemove.forEach(function(value) {
        set32.remove(value);
      });
    });
  }, "intersect");
  Set22.prototype.subtract = /* @__PURE__ */ __name2(function subtract() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection22(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (iters.some(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set32) {
      toRemove.forEach(function(value) {
        set32.remove(value);
      });
    });
  }, "subtract");
  Set22.prototype.sort = /* @__PURE__ */ __name2(function sort22(comparator) {
    return OrderedSet2(sortFactory2(this, comparator));
  }, "sort");
  Set22.prototype.sortBy = /* @__PURE__ */ __name2(function sortBy22(mapper, comparator) {
    return OrderedSet2(sortFactory2(this, comparator, mapper));
  }, "sortBy");
  Set22.prototype.wasAltered = /* @__PURE__ */ __name2(function wasAltered32() {
    return this._map.wasAltered();
  }, "wasAltered");
  Set22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var this$1$1 = this;
    return this._map.__iterate(function(k) {
      return fn(k, k, this$1$1);
    }, reverse32);
  }, "__iterate");
  Set22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    return this._map.__iterator(type, reverse32);
  }, "__iterator");
  Set22.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner22(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  }, "__ensureOwner");
  return Set22;
}(SetCollection2);
Set2.isSet = isSet2;
var SetPrototype2 = Set2.prototype;
SetPrototype2[IS_SET_SYMBOL2] = true;
SetPrototype2[DELETE2] = SetPrototype2.remove;
SetPrototype2.merge = SetPrototype2.concat = SetPrototype2.union;
SetPrototype2.withMutations = withMutations2;
SetPrototype2.asImmutable = asImmutable2;
SetPrototype2["@@transducer/init"] = SetPrototype2.asMutable = asMutable2;
SetPrototype2["@@transducer/step"] = function(result, arr) {
  return result.add(arr);
};
SetPrototype2["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
SetPrototype2.__empty = emptySet2;
SetPrototype2.__make = makeSet2;
function updateSet2(set32, newMap) {
  if (set32.__ownerID) {
    set32.size = newMap.size;
    set32._map = newMap;
    return set32;
  }
  return newMap === set32._map ? set32 : newMap.size === 0 ? set32.__empty() : set32.__make(newMap);
}
__name2(updateSet2, "updateSet");
function makeSet2(map22, ownerID) {
  var set32 = Object.create(SetPrototype2);
  set32.size = map22 ? map22.size : 0;
  set32._map = map22;
  set32.__ownerID = ownerID;
  return set32;
}
__name2(makeSet2, "makeSet");
var EMPTY_SET2;
function emptySet2() {
  return EMPTY_SET2 || (EMPTY_SET2 = makeSet2(emptyMap2()));
}
__name2(emptySet2, "emptySet");
var Range2 = /* @__PURE__ */ function(IndexedSeq22) {
  function Range22(start, end, step) {
    if (!(this instanceof Range22)) {
      return new Range22(start, end, step);
    }
    invariant2(step !== 0, "Cannot step a Range by 0");
    start = start || 0;
    if (end === void 0) {
      end = Infinity;
    }
    step = step === void 0 ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE2) {
        return EMPTY_RANGE2;
      }
      EMPTY_RANGE2 = this;
    }
  }
  __name2(Range22, "Range");
  if (IndexedSeq22)
    Range22.__proto__ = IndexedSeq22;
  Range22.prototype = Object.create(IndexedSeq22 && IndexedSeq22.prototype);
  Range22.prototype.constructor = Range22;
  Range22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    if (this.size === 0) {
      return "Range []";
    }
    return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
  }, "toString");
  Range22.prototype.get = /* @__PURE__ */ __name2(function get112(index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex2(this, index) * this._step : notSetValue;
  }, "get");
  Range22.prototype.includes = /* @__PURE__ */ __name2(function includes32(searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  }, "includes");
  Range22.prototype.slice = /* @__PURE__ */ __name2(function slice32(begin, end) {
    if (wholeSlice2(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin2(begin, this.size);
    end = resolveEnd2(end, this.size);
    if (end <= begin) {
      return new Range22(0, 0);
    }
    return new Range22(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  }, "slice");
  Range22.prototype.indexOf = /* @__PURE__ */ __name2(function indexOf22(searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  }, "indexOf");
  Range22.prototype.lastIndexOf = /* @__PURE__ */ __name2(function lastIndexOf22(searchValue) {
    return this.indexOf(searchValue);
  }, "lastIndexOf");
  Range22.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate22(fn, reverse32) {
    var size = this.size;
    var step = this._step;
    var value = reverse32 ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse32 ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse32 ? -step : step;
    }
    return i;
  }, "__iterate");
  Range22.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator22(type, reverse32) {
    var size = this.size;
    var step = this._step;
    var value = reverse32 ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator3(function() {
      if (i === size) {
        return iteratorDone2();
      }
      var v = value;
      value += reverse32 ? -step : step;
      return iteratorValue2(type, reverse32 ? size - ++i : i++, v);
    });
  }, "__iterator");
  Range22.prototype.equals = /* @__PURE__ */ __name2(function equals32(other) {
    return other instanceof Range22 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual2(this, other);
  }, "equals");
  return Range22;
}(IndexedSeq2);
var EMPTY_RANGE2;
function getIn$12(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath2(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get11(collection, keyPath[i++], NOT_SET2);
    if (collection === NOT_SET2) {
      return notSetValue;
    }
  }
  return collection;
}
__name2(getIn$12, "getIn$1");
function getIn2(searchKeyPath, notSetValue) {
  return getIn$12(this, searchKeyPath, notSetValue);
}
__name2(getIn2, "getIn");
function hasIn$12(collection, keyPath) {
  return getIn$12(collection, keyPath, NOT_SET2) !== NOT_SET2;
}
__name2(hasIn$12, "hasIn$1");
function hasIn2(searchKeyPath) {
  return hasIn$12(this, searchKeyPath);
}
__name2(hasIn2, "hasIn");
function toObject2() {
  assertNotInfinite2(this.size);
  var object = {};
  this.__iterate(function(v, k) {
    object[k] = v;
  });
  return object;
}
__name2(toObject2, "toObject");
Collection3.isIterable = isCollection2;
Collection3.isKeyed = isKeyed2;
Collection3.isIndexed = isIndexed2;
Collection3.isAssociative = isAssociative2;
Collection3.isOrdered = isOrdered2;
Collection3.Iterator = Iterator3;
mixin2(Collection3, {
  toArray: /* @__PURE__ */ __name2(function toArray2() {
    assertNotInfinite2(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed2(this);
    var i = 0;
    this.__iterate(function(v, k) {
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  }, "toArray"),
  toIndexedSeq: /* @__PURE__ */ __name2(function toIndexedSeq2() {
    return new ToIndexedSequence2(this);
  }, "toIndexedSeq"),
  toJS: /* @__PURE__ */ __name2(function toJS$13() {
    return toJS2(this);
  }, "toJS$1"),
  toKeyedSeq: /* @__PURE__ */ __name2(function toKeyedSeq3() {
    return new ToKeyedSequence2(this, true);
  }, "toKeyedSeq"),
  toMap: /* @__PURE__ */ __name2(function toMap2() {
    return Map22(this.toKeyedSeq());
  }, "toMap"),
  toObject: toObject2,
  toOrderedMap: /* @__PURE__ */ __name2(function toOrderedMap2() {
    return OrderedMap2(this.toKeyedSeq());
  }, "toOrderedMap"),
  toOrderedSet: /* @__PURE__ */ __name2(function toOrderedSet2() {
    return OrderedSet2(isKeyed2(this) ? this.valueSeq() : this);
  }, "toOrderedSet"),
  toSet: /* @__PURE__ */ __name2(function toSet2() {
    return Set2(isKeyed2(this) ? this.valueSeq() : this);
  }, "toSet"),
  toSetSeq: /* @__PURE__ */ __name2(function toSetSeq2() {
    return new ToSetSequence2(this);
  }, "toSetSeq"),
  toSeq: /* @__PURE__ */ __name2(function toSeq3() {
    return isIndexed2(this) ? this.toIndexedSeq() : isKeyed2(this) ? this.toKeyedSeq() : this.toSetSeq();
  }, "toSeq"),
  toStack: /* @__PURE__ */ __name2(function toStack2() {
    return Stack2(isKeyed2(this) ? this.valueSeq() : this);
  }, "toStack"),
  toList: /* @__PURE__ */ __name2(function toList2() {
    return List2(isKeyed2(this) ? this.valueSeq() : this);
  }, "toList"),
  toString: /* @__PURE__ */ __name2(function toString32() {
    return "[Collection]";
  }, "toString"),
  __toString: /* @__PURE__ */ __name2(function __toString2(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
  }, "__toString"),
  concat: /* @__PURE__ */ __name2(function concat2() {
    var values22 = [], len = arguments.length;
    while (len--)
      values22[len] = arguments[len];
    return reify2(this, concatFactory2(this, values22));
  }, "concat"),
  includes: /* @__PURE__ */ __name2(function includes3(searchValue) {
    return this.some(function(value) {
      return is2(value, searchValue);
    });
  }, "includes"),
  entries: /* @__PURE__ */ __name2(function entries3() {
    return this.__iterator(ITERATE_ENTRIES2);
  }, "entries"),
  every: /* @__PURE__ */ __name2(function every2(predicate, context) {
    assertNotInfinite2(this.size);
    var returnValue = true;
    this.__iterate(function(v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  }, "every"),
  filter: /* @__PURE__ */ __name2(function filter3(predicate, context) {
    return reify2(this, filterFactory2(this, predicate, context, true));
  }, "filter"),
  partition: /* @__PURE__ */ __name2(function partition2(predicate, context) {
    return partitionFactory2(this, predicate, context);
  }, "partition"),
  find: /* @__PURE__ */ __name2(function find2(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  }, "find"),
  forEach: /* @__PURE__ */ __name2(function forEach2(sideEffect, context) {
    assertNotInfinite2(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  }, "forEach"),
  join: /* @__PURE__ */ __name2(function join2(separator) {
    assertNotInfinite2(this.size);
    separator = separator !== void 0 ? "" + separator : ",";
    var joined = "";
    var isFirst = true;
    this.__iterate(function(v) {
      isFirst ? isFirst = false : joined += separator;
      joined += v !== null && v !== void 0 ? v.toString() : "";
    });
    return joined;
  }, "join"),
  keys: /* @__PURE__ */ __name2(function keys2() {
    return this.__iterator(ITERATE_KEYS2);
  }, "keys"),
  map: /* @__PURE__ */ __name2(function map2(mapper, context) {
    return reify2(this, mapFactory2(this, mapper, context));
  }, "map"),
  reduce: /* @__PURE__ */ __name2(function reduce$12(reducer, initialReduction, context) {
    return reduce2(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  }, "reduce$1"),
  reduceRight: /* @__PURE__ */ __name2(function reduceRight2(reducer, initialReduction, context) {
    return reduce2(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  }, "reduceRight"),
  reverse: /* @__PURE__ */ __name2(function reverse3() {
    return reify2(this, reverseFactory2(this, true));
  }, "reverse"),
  slice: /* @__PURE__ */ __name2(function slice3(begin, end) {
    return reify2(this, sliceFactory2(this, begin, end, true));
  }, "slice"),
  some: /* @__PURE__ */ __name2(function some2(predicate, context) {
    return !this.every(not2(predicate), context);
  }, "some"),
  sort: /* @__PURE__ */ __name2(function sort2(comparator) {
    return reify2(this, sortFactory2(this, comparator));
  }, "sort"),
  values: /* @__PURE__ */ __name2(function values2() {
    return this.__iterator(ITERATE_VALUES2);
  }, "values"),
  butLast: /* @__PURE__ */ __name2(function butLast2() {
    return this.slice(0, -1);
  }, "butLast"),
  isEmpty: /* @__PURE__ */ __name2(function isEmpty2() {
    return this.size !== void 0 ? this.size === 0 : !this.some(function() {
      return true;
    });
  }, "isEmpty"),
  count: /* @__PURE__ */ __name2(function count2(predicate, context) {
    return ensureSize2(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  }, "count"),
  countBy: /* @__PURE__ */ __name2(function countBy2(grouper, context) {
    return countByFactory2(this, grouper, context);
  }, "countBy"),
  equals: /* @__PURE__ */ __name2(function equals3(other) {
    return deepEqual2(this, other);
  }, "equals"),
  entrySeq: /* @__PURE__ */ __name2(function entrySeq2() {
    var collection = this;
    if (collection._cache) {
      return new ArraySeq2(collection._cache);
    }
    var entriesSequence = collection.toSeq().map(entryMapper2).toIndexedSeq();
    entriesSequence.fromEntrySeq = function() {
      return collection.toSeq();
    };
    return entriesSequence;
  }, "entrySeq"),
  filterNot: /* @__PURE__ */ __name2(function filterNot2(predicate, context) {
    return this.filter(not2(predicate), context);
  }, "filterNot"),
  findEntry: /* @__PURE__ */ __name2(function findEntry2(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  }, "findEntry"),
  findKey: /* @__PURE__ */ __name2(function findKey2(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  }, "findKey"),
  findLast: /* @__PURE__ */ __name2(function findLast2(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
  }, "findLast"),
  findLastEntry: /* @__PURE__ */ __name2(function findLastEntry2(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
  }, "findLastEntry"),
  findLastKey: /* @__PURE__ */ __name2(function findLastKey2(predicate, context) {
    return this.toKeyedSeq().reverse().findKey(predicate, context);
  }, "findLastKey"),
  first: /* @__PURE__ */ __name2(function first3(notSetValue) {
    return this.find(returnTrue2, null, notSetValue);
  }, "first"),
  flatMap: /* @__PURE__ */ __name2(function flatMap2(mapper, context) {
    return reify2(this, flatMapFactory2(this, mapper, context));
  }, "flatMap"),
  flatten: /* @__PURE__ */ __name2(function flatten3(depth) {
    return reify2(this, flattenFactory2(this, depth, true));
  }, "flatten"),
  fromEntrySeq: /* @__PURE__ */ __name2(function fromEntrySeq2() {
    return new FromEntriesSequence2(this);
  }, "fromEntrySeq"),
  get: /* @__PURE__ */ __name2(function get72(searchKey, notSetValue) {
    return this.find(function(_, key) {
      return is2(key, searchKey);
    }, void 0, notSetValue);
  }, "get"),
  getIn: getIn2,
  groupBy: /* @__PURE__ */ __name2(function groupBy2(grouper, context) {
    return groupByFactory2(this, grouper, context);
  }, "groupBy"),
  has: /* @__PURE__ */ __name2(function has22(searchKey) {
    return this.get(searchKey, NOT_SET2) !== NOT_SET2;
  }, "has"),
  hasIn: hasIn2,
  isSubset: /* @__PURE__ */ __name2(function isSubset2(iter) {
    iter = typeof iter.includes === "function" ? iter : Collection3(iter);
    return this.every(function(value) {
      return iter.includes(value);
    });
  }, "isSubset"),
  isSuperset: /* @__PURE__ */ __name2(function isSuperset2(iter) {
    iter = typeof iter.isSubset === "function" ? iter : Collection3(iter);
    return iter.isSubset(this);
  }, "isSuperset"),
  keyOf: /* @__PURE__ */ __name2(function keyOf2(searchValue) {
    return this.findKey(function(value) {
      return is2(value, searchValue);
    });
  }, "keyOf"),
  keySeq: /* @__PURE__ */ __name2(function keySeq4() {
    return this.toSeq().map(keyMapper2).toIndexedSeq();
  }, "keySeq"),
  last: /* @__PURE__ */ __name2(function last3(notSetValue) {
    return this.toSeq().reverse().first(notSetValue);
  }, "last"),
  lastKeyOf: /* @__PURE__ */ __name2(function lastKeyOf2(searchValue) {
    return this.toKeyedSeq().reverse().keyOf(searchValue);
  }, "lastKeyOf"),
  max: /* @__PURE__ */ __name2(function max2(comparator) {
    return maxFactory2(this, comparator);
  }, "max"),
  maxBy: /* @__PURE__ */ __name2(function maxBy2(mapper, comparator) {
    return maxFactory2(this, comparator, mapper);
  }, "maxBy"),
  min: /* @__PURE__ */ __name2(function min2(comparator) {
    return maxFactory2(
      this,
      comparator ? neg2(comparator) : defaultNegComparator2
    );
  }, "min"),
  minBy: /* @__PURE__ */ __name2(function minBy2(mapper, comparator) {
    return maxFactory2(
      this,
      comparator ? neg2(comparator) : defaultNegComparator2,
      mapper
    );
  }, "minBy"),
  rest: /* @__PURE__ */ __name2(function rest2() {
    return this.slice(1);
  }, "rest"),
  skip: /* @__PURE__ */ __name2(function skip2(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  }, "skip"),
  skipLast: /* @__PURE__ */ __name2(function skipLast2(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  }, "skipLast"),
  skipWhile: /* @__PURE__ */ __name2(function skipWhile3(predicate, context) {
    return reify2(this, skipWhileFactory2(this, predicate, context, true));
  }, "skipWhile"),
  skipUntil: /* @__PURE__ */ __name2(function skipUntil2(predicate, context) {
    return this.skipWhile(not2(predicate), context);
  }, "skipUntil"),
  sortBy: /* @__PURE__ */ __name2(function sortBy2(mapper, comparator) {
    return reify2(this, sortFactory2(this, comparator, mapper));
  }, "sortBy"),
  take: /* @__PURE__ */ __name2(function take2(amount) {
    return this.slice(0, Math.max(0, amount));
  }, "take"),
  takeLast: /* @__PURE__ */ __name2(function takeLast2(amount) {
    return this.slice(-Math.max(0, amount));
  }, "takeLast"),
  takeWhile: /* @__PURE__ */ __name2(function takeWhile2(predicate, context) {
    return reify2(this, takeWhileFactory2(this, predicate, context));
  }, "takeWhile"),
  takeUntil: /* @__PURE__ */ __name2(function takeUntil2(predicate, context) {
    return this.takeWhile(not2(predicate), context);
  }, "takeUntil"),
  update: /* @__PURE__ */ __name2(function update72(fn) {
    return fn(this);
  }, "update"),
  valueSeq: /* @__PURE__ */ __name2(function valueSeq2() {
    return this.toIndexedSeq();
  }, "valueSeq"),
  hashCode: /* @__PURE__ */ __name2(function hashCode4() {
    return this.__hash || (this.__hash = hashCollection2(this));
  }, "hashCode")
});
var CollectionPrototype2 = Collection3.prototype;
CollectionPrototype2[IS_COLLECTION_SYMBOL2] = true;
CollectionPrototype2[ITERATOR_SYMBOL2] = CollectionPrototype2.values;
CollectionPrototype2.toJSON = CollectionPrototype2.toArray;
CollectionPrototype2.__toStringMapper = quoteString2;
CollectionPrototype2.inspect = CollectionPrototype2.toSource = function() {
  return this.toString();
};
CollectionPrototype2.chain = CollectionPrototype2.flatMap;
CollectionPrototype2.contains = CollectionPrototype2.includes;
mixin2(KeyedCollection2, {
  flip: /* @__PURE__ */ __name2(function flip2() {
    return reify2(this, flipFactory2(this));
  }, "flip"),
  mapEntries: /* @__PURE__ */ __name2(function mapEntries2(mapper, context) {
    var this$1$1 = this;
    var iterations = 0;
    return reify2(
      this,
      this.toSeq().map(function(v, k) {
        return mapper.call(context, [k, v], iterations++, this$1$1);
      }).fromEntrySeq()
    );
  }, "mapEntries"),
  mapKeys: /* @__PURE__ */ __name2(function mapKeys2(mapper, context) {
    var this$1$1 = this;
    return reify2(
      this,
      this.toSeq().flip().map(function(k, v) {
        return mapper.call(context, k, v, this$1$1);
      }).flip()
    );
  }, "mapKeys")
});
var KeyedCollectionPrototype2 = KeyedCollection2.prototype;
KeyedCollectionPrototype2[IS_KEYED_SYMBOL2] = true;
KeyedCollectionPrototype2[ITERATOR_SYMBOL2] = CollectionPrototype2.entries;
KeyedCollectionPrototype2.toJSON = toObject2;
KeyedCollectionPrototype2.__toStringMapper = function(v, k) {
  return quoteString2(k) + ": " + quoteString2(v);
};
mixin2(IndexedCollection2, {
  toKeyedSeq: /* @__PURE__ */ __name2(function toKeyedSeq22() {
    return new ToKeyedSequence2(this, false);
  }, "toKeyedSeq"),
  filter: /* @__PURE__ */ __name2(function filter22(predicate, context) {
    return reify2(this, filterFactory2(this, predicate, context, false));
  }, "filter"),
  findIndex: /* @__PURE__ */ __name2(function findIndex2(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  }, "findIndex"),
  indexOf: /* @__PURE__ */ __name2(function indexOf2(searchValue) {
    var key = this.keyOf(searchValue);
    return key === void 0 ? -1 : key;
  }, "indexOf"),
  lastIndexOf: /* @__PURE__ */ __name2(function lastIndexOf2(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === void 0 ? -1 : key;
  }, "lastIndexOf"),
  reverse: /* @__PURE__ */ __name2(function reverse22() {
    return reify2(this, reverseFactory2(this, false));
  }, "reverse"),
  slice: /* @__PURE__ */ __name2(function slice22(begin, end) {
    return reify2(this, sliceFactory2(this, begin, end, false));
  }, "slice"),
  splice: /* @__PURE__ */ __name2(function splice2(index, removeNum) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || numArgs === 2 && !removeNum) {
      return this;
    }
    index = resolveBegin2(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify2(
      this,
      numArgs === 1 ? spliced : spliced.concat(arrCopy2(arguments, 2), this.slice(index + removeNum))
    );
  }, "splice"),
  findLastIndex: /* @__PURE__ */ __name2(function findLastIndex2(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  }, "findLastIndex"),
  first: /* @__PURE__ */ __name2(function first22(notSetValue) {
    return this.get(0, notSetValue);
  }, "first"),
  flatten: /* @__PURE__ */ __name2(function flatten22(depth) {
    return reify2(this, flattenFactory2(this, depth, false));
  }, "flatten"),
  get: /* @__PURE__ */ __name2(function get82(index, notSetValue) {
    index = wrapIndex2(this, index);
    return index < 0 || this.size === Infinity || this.size !== void 0 && index > this.size ? notSetValue : this.find(function(_, key) {
      return key === index;
    }, void 0, notSetValue);
  }, "get"),
  has: /* @__PURE__ */ __name2(function has32(index) {
    index = wrapIndex2(this, index);
    return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
  }, "has"),
  interpose: /* @__PURE__ */ __name2(function interpose2(separator) {
    return reify2(this, interposeFactory2(this, separator));
  }, "interpose"),
  interleave: /* @__PURE__ */ __name2(function interleave2() {
    var collections = [this].concat(arrCopy2(arguments));
    var zipped = zipWithFactory2(this.toSeq(), IndexedSeq2.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify2(this, interleaved);
  }, "interleave"),
  keySeq: /* @__PURE__ */ __name2(function keySeq22() {
    return Range2(0, this.size);
  }, "keySeq"),
  last: /* @__PURE__ */ __name2(function last22(notSetValue) {
    return this.get(-1, notSetValue);
  }, "last"),
  skipWhile: /* @__PURE__ */ __name2(function skipWhile22(predicate, context) {
    return reify2(this, skipWhileFactory2(this, predicate, context, false));
  }, "skipWhile"),
  zip: /* @__PURE__ */ __name2(function zip2() {
    var collections = [this].concat(arrCopy2(arguments));
    return reify2(this, zipWithFactory2(this, defaultZipper2, collections));
  }, "zip"),
  zipAll: /* @__PURE__ */ __name2(function zipAll2() {
    var collections = [this].concat(arrCopy2(arguments));
    return reify2(this, zipWithFactory2(this, defaultZipper2, collections, true));
  }, "zipAll"),
  zipWith: /* @__PURE__ */ __name2(function zipWith2(zipper) {
    var collections = arrCopy2(arguments);
    collections[0] = this;
    return reify2(this, zipWithFactory2(this, zipper, collections));
  }, "zipWith")
});
var IndexedCollectionPrototype2 = IndexedCollection2.prototype;
IndexedCollectionPrototype2[IS_INDEXED_SYMBOL2] = true;
IndexedCollectionPrototype2[IS_ORDERED_SYMBOL2] = true;
mixin2(SetCollection2, {
  get: /* @__PURE__ */ __name2(function get92(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  }, "get"),
  includes: /* @__PURE__ */ __name2(function includes22(value) {
    return this.has(value);
  }, "includes"),
  keySeq: /* @__PURE__ */ __name2(function keySeq32() {
    return this.valueSeq();
  }, "keySeq")
});
var SetCollectionPrototype2 = SetCollection2.prototype;
SetCollectionPrototype2.has = CollectionPrototype2.includes;
SetCollectionPrototype2.contains = SetCollectionPrototype2.includes;
SetCollectionPrototype2.keys = SetCollectionPrototype2.values;
mixin2(KeyedSeq2, KeyedCollectionPrototype2);
mixin2(IndexedSeq2, IndexedCollectionPrototype2);
mixin2(SetSeq2, SetCollectionPrototype2);
function reduce2(collection, reducer, reduction, context, useFirst, reverse32) {
  assertNotInfinite2(collection.size);
  collection.__iterate(function(v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse32);
  return reduction;
}
__name2(reduce2, "reduce");
function keyMapper2(v, k) {
  return k;
}
__name2(keyMapper2, "keyMapper");
function entryMapper2(v, k) {
  return [k, v];
}
__name2(entryMapper2, "entryMapper");
function not2(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
__name2(not2, "not");
function neg2(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}
__name2(neg2, "neg");
function defaultZipper2() {
  return arrCopy2(arguments);
}
__name2(defaultZipper2, "defaultZipper");
function defaultNegComparator2(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}
__name2(defaultNegComparator2, "defaultNegComparator");
function hashCollection2(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered2(collection);
  var keyed = isKeyed2(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed ? ordered ? function(v, k) {
      h = 31 * h + hashMerge2(hash2(v), hash2(k)) | 0;
    } : function(v, k) {
      h = h + hashMerge2(hash2(v), hash2(k)) | 0;
    } : ordered ? function(v) {
      h = 31 * h + hash2(v) | 0;
    } : function(v) {
      h = h + hash2(v) | 0;
    }
  );
  return murmurHashOfSize2(size, h);
}
__name2(hashCollection2, "hashCollection");
function murmurHashOfSize2(size, h) {
  h = imul3(h, 3432918353);
  h = imul3(h << 15 | h >>> -15, 461845907);
  h = imul3(h << 13 | h >>> -13, 5);
  h = (h + 3864292196 | 0) ^ size;
  h = imul3(h ^ h >>> 16, 2246822507);
  h = imul3(h ^ h >>> 13, 3266489909);
  h = smi2(h ^ h >>> 16);
  return h;
}
__name2(murmurHashOfSize2, "murmurHashOfSize");
function hashMerge2(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
}
__name2(hashMerge2, "hashMerge");
var OrderedSet2 = /* @__PURE__ */ function(Set22) {
  function OrderedSet22(value) {
    return value === void 0 || value === null ? emptyOrderedSet2() : isOrderedSet2(value) ? value : emptyOrderedSet2().withMutations(function(set32) {
      var iter = SetCollection2(value);
      assertNotInfinite2(iter.size);
      iter.forEach(function(v) {
        return set32.add(v);
      });
    });
  }
  __name2(OrderedSet22, "OrderedSet");
  if (Set22)
    OrderedSet22.__proto__ = Set22;
  OrderedSet22.prototype = Object.create(Set22 && Set22.prototype);
  OrderedSet22.prototype.constructor = OrderedSet22;
  OrderedSet22.of = /* @__PURE__ */ __name2(function of() {
    return this(arguments);
  }, "of");
  OrderedSet22.fromKeys = /* @__PURE__ */ __name2(function fromKeys(value) {
    return this(KeyedCollection2(value).keySeq());
  }, "fromKeys");
  OrderedSet22.prototype.toString = /* @__PURE__ */ __name2(function toString52() {
    return this.__toString("OrderedSet {", "}");
  }, "toString");
  return OrderedSet22;
}(Set2);
OrderedSet2.isOrderedSet = isOrderedSet2;
var OrderedSetPrototype2 = OrderedSet2.prototype;
OrderedSetPrototype2[IS_ORDERED_SYMBOL2] = true;
OrderedSetPrototype2.zip = IndexedCollectionPrototype2.zip;
OrderedSetPrototype2.zipWith = IndexedCollectionPrototype2.zipWith;
OrderedSetPrototype2.zipAll = IndexedCollectionPrototype2.zipAll;
OrderedSetPrototype2.__empty = emptyOrderedSet2;
OrderedSetPrototype2.__make = makeOrderedSet2;
function makeOrderedSet2(map22, ownerID) {
  var set32 = Object.create(OrderedSetPrototype2);
  set32.size = map22 ? map22.size : 0;
  set32._map = map22;
  set32.__ownerID = ownerID;
  return set32;
}
__name2(makeOrderedSet2, "makeOrderedSet");
var EMPTY_ORDERED_SET2;
function emptyOrderedSet2() {
  return EMPTY_ORDERED_SET2 || (EMPTY_ORDERED_SET2 = makeOrderedSet2(emptyOrderedMap2()));
}
__name2(emptyOrderedSet2, "emptyOrderedSet");
function throwOnInvalidDefaultValues2(defaultValues) {
  if (isRecord2(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead."
    );
  }
  if (isImmutable2(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead."
    );
  }
  if (defaultValues === null || typeof defaultValues !== "object") {
    throw new Error(
      "Can not call `Record` with a non-object as default values. Use a plain javascript object instead."
    );
  }
}
__name2(throwOnInvalidDefaultValues2, "throwOnInvalidDefaultValues");
var Record3 = /* @__PURE__ */ __name2(function Record22(defaultValues, name) {
  var hasInitialized;
  throwOnInvalidDefaultValues2(defaultValues);
  var RecordType = /* @__PURE__ */ __name2(function Record32(values22) {
    var this$1$1 = this;
    if (values22 instanceof RecordType) {
      return values22;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values22);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys22 = Object.keys(defaultValues);
      var indices = RecordTypePrototype._indices = {};
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys22;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys22.length; i++) {
        var propName = keys22[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          typeof console === "object" && console.warn && console.warn(
            "Cannot define " + recordName2(this) + ' with property "' + propName + '" since that property name is part of the Record API.'
          );
        } else {
          setProp2(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = void 0;
    this._values = List2().withMutations(function(l) {
      l.setSize(this$1$1._keys.length);
      KeyedCollection2(values22).forEach(function(v, k) {
        l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? void 0 : v);
      });
    });
    return this;
  }, "Record");
  var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype2);
  RecordTypePrototype.constructor = RecordType;
  if (name) {
    RecordType.displayName = name;
  }
  return RecordType;
}, "Record");
Record3.prototype.toString = /* @__PURE__ */ __name2(function toString42() {
  var str = recordName2(this) + " { ";
  var keys22 = this._keys;
  var k;
  for (var i = 0, l = keys22.length; i !== l; i++) {
    k = keys22[i];
    str += (i ? ", " : "") + k + ": " + quoteString2(this.get(k));
  }
  return str + " }";
}, "toString");
Record3.prototype.equals = /* @__PURE__ */ __name2(function equals22(other) {
  return this === other || isRecord2(other) && recordSeq2(this).equals(recordSeq2(other));
}, "equals");
Record3.prototype.hashCode = /* @__PURE__ */ __name2(function hashCode22() {
  return recordSeq2(this).hashCode();
}, "hashCode");
Record3.prototype.has = /* @__PURE__ */ __name2(function has42(k) {
  return this._indices.hasOwnProperty(k);
}, "has");
Record3.prototype.get = /* @__PURE__ */ __name2(function get102(k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === void 0 ? this._defaultValues[k] : value;
}, "get");
Record3.prototype.set = /* @__PURE__ */ __name2(function set22(k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? void 0 : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord2(this, newValues);
    }
  }
  return this;
}, "set");
Record3.prototype.remove = /* @__PURE__ */ __name2(function remove22(k) {
  return this.set(k);
}, "remove");
Record3.prototype.clear = /* @__PURE__ */ __name2(function clear2() {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord2(this, newValues);
}, "clear");
Record3.prototype.wasAltered = /* @__PURE__ */ __name2(function wasAltered22() {
  return this._values.wasAltered();
}, "wasAltered");
Record3.prototype.toSeq = /* @__PURE__ */ __name2(function toSeq22() {
  return recordSeq2(this);
}, "toSeq");
Record3.prototype.toJS = /* @__PURE__ */ __name2(function toJS$122() {
  return toJS2(this);
}, "toJS$1");
Record3.prototype.entries = /* @__PURE__ */ __name2(function entries22() {
  return this.__iterator(ITERATE_ENTRIES2);
}, "entries");
Record3.prototype.__iterator = /* @__PURE__ */ __name2(function __iterator2(type, reverse32) {
  return recordSeq2(this).__iterator(type, reverse32);
}, "__iterator");
Record3.prototype.__iterate = /* @__PURE__ */ __name2(function __iterate2(fn, reverse32) {
  return recordSeq2(this).__iterate(fn, reverse32);
}, "__iterate");
Record3.prototype.__ensureOwner = /* @__PURE__ */ __name2(function __ensureOwner2(ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord2(this, newValues, ownerID);
}, "__ensureOwner");
Record3.isRecord = isRecord2;
Record3.getDescriptiveName = recordName2;
var RecordPrototype2 = Record3.prototype;
RecordPrototype2[IS_RECORD_SYMBOL2] = true;
RecordPrototype2[DELETE2] = RecordPrototype2.remove;
RecordPrototype2.deleteIn = RecordPrototype2.removeIn = deleteIn2;
RecordPrototype2.getIn = getIn2;
RecordPrototype2.hasIn = CollectionPrototype2.hasIn;
RecordPrototype2.merge = merge$12;
RecordPrototype2.mergeWith = mergeWith$12;
RecordPrototype2.mergeIn = mergeIn2;
RecordPrototype2.mergeDeep = mergeDeep2;
RecordPrototype2.mergeDeepWith = mergeDeepWith2;
RecordPrototype2.mergeDeepIn = mergeDeepIn2;
RecordPrototype2.setIn = setIn2;
RecordPrototype2.update = update8;
RecordPrototype2.updateIn = updateIn2;
RecordPrototype2.withMutations = withMutations2;
RecordPrototype2.asMutable = asMutable2;
RecordPrototype2.asImmutable = asImmutable2;
RecordPrototype2[ITERATOR_SYMBOL2] = RecordPrototype2.entries;
RecordPrototype2.toJSON = RecordPrototype2.toObject = CollectionPrototype2.toObject;
RecordPrototype2.inspect = RecordPrototype2.toSource = function() {
  return this.toString();
};
function makeRecord2(likeRecord, values22, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values22;
  record.__ownerID = ownerID;
  return record;
}
__name2(makeRecord2, "makeRecord");
function recordName2(record) {
  return record.constructor.displayName || record.constructor.name || "Record";
}
__name2(recordName2, "recordName");
function recordSeq2(record) {
  return keyedSeqFromValue2(record._keys.map(function(k) {
    return [k, record.get(k)];
  }));
}
__name2(recordSeq2, "recordSeq");
function setProp2(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant2(this.__ownerID, "Cannot set on an immutable record.");
        this.set(name, value);
      }
    });
  } catch (error) {
  }
}
__name2(setProp2, "setProp");
var src_default2 = '<!DOCTYPE html>\n<html lang="en">\n\n<head profile="http://www.w3.org/2005/10/profile">\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width" />\n  <meta name="sharedArrayBuffer" description="using cross-origin-isolation in the web browser">\n  <base href="/">\n  <link rel="shortcut icon" type="image/png" href="/src/assets/favicons/chunk-chunk-fe2f7da4f9ccc2.png">\n  <title>Instant React Editor</title>\n\n  <script type="importmap"><\/script>\n  <style>\n    html,\n    body {\n      overflow: hidden;\n      margin: 0;\n      height: 100%;\n      --webkit-overflow-scrolling: touch;\n      overscroll-behavior-x: none;\n    }\n\n    q {\n      display: none;\n    }\n\n\n    @media screen and (prefers-color-scheme: dark) {\n      body {\n        background-color: #121212;\n        ;\n        color: hsl(210, 10%, 62%);\n        --text-color-normal: hsl(210, 10%, 62%);\n        --text-color-light: hsl(210, 15%, 35%);\n        --text-color-richer: hsl(210, 50%, 72%);\n        --text-color-highlight: hsl(25, 70%, 45%);\n      }\n    }\n\n\n    @media screen and (prefers-color-scheme: light) {\n      body {\n        background-color: white;\n        color: black;\n        --text-color-normal: #0a244d;\n        --text-color-light: #8cabd9;\n      }\n    }\n\n    /**reset*/\n  </style>\n</head>\n\n\n<body>\n  <div id="root"></div>\n</body>\n\n</html>';
init_define_process2();
var md52 = /* @__PURE__ */ __name2((code) => md5FULL2(code).split("0").join("k").split("1").join("g").split("2").join("j").split("3").join("k").split("4").join("b").split("5").join("n").split("6").join("o").split("7").join("x").split("8").join("q").split("9").join("z").slice(0, 8), "md5");
function md5FULL2(inputString) {
  const hc = "0123456789abcdef";
  function rh(n) {
    let j;
    let s = "";
    for (j = 0; j <= 3; j++) {
      s += hc.charAt(n >> j * 8 + 4 & 15) + hc.charAt(n >> j * 8 & 15);
    }
    return s;
  }
  __name2(rh, "rh");
  function ad(x2, y) {
    const l = (x2 & 65535) + (y & 65535);
    const m = (x2 >> 16) + (y >> 16) + (l >> 16);
    return m << 16 | l & 65535;
  }
  __name2(ad, "ad");
  function rl(n, c2) {
    return n << c2 | n >>> 32 - c2;
  }
  __name2(rl, "rl");
  function cm(q, a2, b2, x2, s, t) {
    return ad(rl(ad(ad(a2, q), ad(x2, t)), s), b2);
  }
  __name2(cm, "cm");
  function ff(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & c2 | ~b2 & d2, a2, b2, x2, s, t);
  }
  __name2(ff, "ff");
  function gg(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & d2 | c2 & ~d2, a2, b2, x2, s, t);
  }
  __name2(gg, "gg");
  function hh(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 ^ c2 ^ d2, a2, b2, x2, s, t);
  }
  __name2(hh, "hh");
  function ii(a2, b2, c2, d2, x2, s, t) {
    return cm(c2 ^ (b2 | ~d2), a2, b2, x2, s, t);
  }
  __name2(ii, "ii");
  function sb(x2) {
    let i2;
    const nblk = (x2.length + 8 >> 6) + 1;
    const blks = Array.from({ length: nblk * 16 });
    for (i2 = 0; i2 < nblk * 16; i2++) {
      blks[i2] = 0;
    }
    for (i2 = 0; i2 < x2.length; i2++) {
      blks[i2 >> 2] |= x2.charCodeAt(i2) << i2 % 4 * 8;
    }
    blks[i2 >> 2] |= 128 << i2 % 4 * 8;
    blks[nblk * 16 - 2] = x2.length * 8;
    return blks;
  }
  __name2(sb, "sb");
  let i;
  const x = sb(inputString);
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  let olda;
  let oldb;
  let oldc;
  let oldd;
  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = ad(a, olda);
    b = ad(b, oldb);
    c = ad(c, oldc);
    d = ad(d, oldd);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}
__name2(md5FULL2, "md5FULL");
init_define_process2();
var resetCSS2 = `
*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
all: unset;
display: revert;
}

*,
*::before,
*::after {
box-sizing: border-box;
}

a, button {
cursor: revert;
}

ol, ul, menu {
list-style: none;
}

img {
max-width: 100%;
}

table {
border-collapse: collapse;
}

input, textarea {
-webkit-user-select: auto;
}

textarea {
white-space: revert;
}

/* minimum style to allow to style meter element */
meter {
-webkit-appearance: revert;
appearance: revert;
}

/* reset default text opacity of input placeholder */
::placeholder {
color: unset;
}

/* fix the feature of 'hidden' attribute.
display:revert; revert to element instead of a/live/editttribute */
:where([hidden]) {
display: none;
}

/* revert for bug in Chromium browsers
- fix for the content editable attribute will work properly.
- webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
:where([contenteditable]:not([contenteditable="false"])) {
-moz-user-modify: read-write;
-webkit-user-modify: read-write;
overflow-wrap: break-word;
-webkit-line-break: after-white-space;
-webkit-user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
-webkit-user-drag: element;
}`;
init_define_process2();
var import_fast_diff2 = __toESM3(require_diff2(), 1);
function createDelta2(original, revision) {
  const result = (0, import_fast_diff2.default)(original, revision);
  const delta = result.map((r) => r[0] === 1 ? r : [r[0], r[1].length]);
  return delta;
}
__name2(createDelta2, "createDelta");
function applyPatch3(original, delta) {
  let result = "";
  let index = 0;
  for (const item of delta) {
    const operation = item[0];
    const value = item[1];
    if (item[0] === -1 && typeof value === "number") {
      index += value;
    } else if (operation == 0 && typeof value === "number") {
      result += original.slice(index, index += value);
    } else {
      result += value;
    }
  }
  return result;
}
__name2(applyPatch3, "applyPatch");
init_define_process2();
init_define_process2();
var import_esbuild_wasm2 = __toESM3(require_browser2(), 1);
init_define_process2();
async function getRequest2(req) {
  console.log({ getReq: req });
  let response = await fetch(req);
  if (!response || !response.ok)
    return response;
  response = new Response(response.body, response);
  return response;
}
__name2(getRequest2, "getRequest");
init_define_process2();
var mod2 = {
  init: false,
  initialize: (orig) => {
    if (mod2.init === false) {
      return mod2.init = (0, import_esbuild_wasm2.initialize)({
        wasmURL: new URL(esbuild_default2, orig + "/src/").toString()
      });
    }
    return mod2.init;
  }
};
var initAndTransform2 = /* @__PURE__ */ __name2(async (code, opts, origin2) => {
  const initFinished = mod2.initialize(origin2);
  if (initFinished !== true)
    await initFinished;
  const ttCode = await (0, import_esbuild_wasm2.transform)(code, {
    ...opts,
    define: { ...define2, ...opts?.define ? opts.define : {} }
  });
  const res = { code: `/*${md52(code)}*/` + ttCode.code };
  return res;
}, "initAndTransform");
var define2 = {
  "process.env.NODE_ENV": `"development"`,
  "process.env.NODE_DEBUG": JSON.stringify(false),
  "process.browser": JSON.stringify(true),
  "process.env.DEBUG": JSON.stringify(true),
  "isBrowser": JSON.stringify(true),
  "isJest": JSON.stringify(false),
  "process.env.version": '"1.1.1"',
  global: "globalThis",
  "WORKER_DOM_DEBUG": JSON.stringify(false),
  "process.env.DUMP_SESSION_KEYS": JSON.stringify(false),
  process: JSON.stringify({
    env: {
      NODE_ENV: `development`,
      browser: true,
      NODE_DEBUG: false,
      DEBUG: true,
      isBrowser: true
    },
    browser: true
  })
};
async function esmTransform2(code, origin2) {
  const transpiled = await initAndTransform2(code, {
    loader: "tsx",
    format: "esm",
    treeShaking: true,
    platform: "browser",
    minify: false,
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        useDefineForClassFields: false,
        jsxFragmentFactory: "Fragment",
        jsxImportSource: "@emotion/react"
      }
    },
    target: "es2022"
  }, origin2);
  return transpiled.code;
}
__name2(esmTransform2, "esmTransform");
function initSession2(room, u) {
  return Record3({ ...u, room, state: Record3(u.state)() });
}
__name2(initSession2, "initSession");
var syncStorage2 = /* @__PURE__ */ __name2(async (_setItem, _getItem, oldSession, newSession, message) => {
  const setItem = /* @__PURE__ */ __name2((k, v) => _setItem("#" + String(k), v), "setItem");
  const getItem = /* @__PURE__ */ __name2((k) => _getItem("#" + String(k)), "getItem");
  const hashOfOldSession = Record3(oldSession)().hashCode();
  let historyHead = await getItem < "head";
  if (!historyHead) {
    await setItem(hashOfOldSession, oldSession);
    await setItem("head", hashOfOldSession);
    historyHead = hashOfOldSession;
  }
  await setItem(message.newHash, {
    ...newSession,
    oldHash: message.oldHash,
    reversePatch: message.reversePatch
  });
  const oldNode = await getItem(historyHead);
  await setItem(historyHead, {
    newHash: message.newHash,
    patch: message.patch,
    ...oldNode ? {
      i: oldNode.i,
      oldHash: oldNode.oldHash,
      reversePatch: oldNode.reversePatch
    } : {
      code: oldSession.code,
      transpiled: oldSession.transpiled,
      html: oldSession.html,
      css: oldSession.css
    }
  });
  await setItem("head", message.newHash);
}, "syncStorage");
var sessions2 = {};
var hashStore2 = {};
var CodeSession2 = class {
  constructor(codeSpace, user) {
    this.cb = {};
    this.hashCodeSession = 0;
    this.created = new Date().toISOString();
    this.hashOfState = () => {
      const state = this.session.get("state");
      const hashCode42 = state.hashCode();
      hashStore2[hashCode42] = state;
      return hashCode42;
    };
    this.createPatchFromHashCode = (oldHash, state) => {
      const s = JSON.parse(string_2(state));
      hashStore2[hashKEY2(this.room)] = this.session.get(
        "state"
      );
      let oldRec = hashStore2[oldHash];
      let usedOldHash = oldHash;
      const oldString = string_2(oldRec.toJSON());
      const newRec = oldRec.merge(s);
      const newString = string_2(newRec.toJSON()).split(
        md52(newRec.get("transpiled"))
      ).join("css");
      const newNewRecord = this.session.get("state").merge(JSON.parse(newString));
      const newHash = newNewRecord.hashCode();
      hashStore2[newHash] = newNewRecord;
      const patch = createPatch2(oldString, newString);
      const reversePatch = createPatch2(newString, oldString);
      return {
        oldHash: usedOldHash,
        newHash,
        reversePatch,
        patch
      };
    };
    this.patchSync = (sess, force = false) => {
      if (!force) {
        if (sess.code !== this.session.get("state").code && sess.i <= this.session.get("state").i)
          throw new Error("Code update without I update error");
        sess.i;
        if (sess.i < this.session.get("state").i) {
          console.log("never going back!");
          sess.i = this.session.get("state").i + 1;
        }
        if (sess.code !== this.session.get("state").code && sess.i <= this.session.get("state").i)
          throw new Error("Code update without I update error");
        if (sess.transpiled.slice(0, 12) !== `/*${md52(sess.code)}*/`) {
          console.error(
            `missing: /*${md52(sess.code)}*/, transpiled: ${sess.transpiled.slice(0, 12)}`
          );
          throw new Error("transpiled	hack issue");
        }
        if (sess.code.length < 5) {
          throw new Error("code deleted?");
        }
        if (sess.html.indexOf(md52(sess.transpiled)) === -1) {
          console.error(`missing md5trans from html: ${md52(sess.transpiled)}
      ${sess.html.slice(0, 64)}
      
      `);
          throw new Error(`render hack issue missing: ${md52(sess.transpiled)}.`);
        }
        if (sess.css.length && sess.css.indexOf(md52(sess.transpiled)) === -1) {
          console.error(`missing from css: ${md52(sess.transpiled)}`);
          throw new Error(`render hack issue missing: ${md52(sess.transpiled)}.`);
        }
      }
      const oldHash = this.session.get("state").hashCode();
      this.session = this.session.set(
        "state",
        this.session.get("state").merge(sess)
      );
      const newHash = this.session.get("state").hashCode();
      if (newHash !== oldHash && force !== true) {
        this.update();
      }
      return this.session;
    };
    this.applyPatch = ({
      oldHash,
      newHash,
      patch
    }) => {
      if (!(oldHash && newHash && patch.length))
        return;
      hashStore2[hashCode32(this.room)] = this.session.get("state");
      let maybeOldRec = hashStore2[oldHash];
      if (!maybeOldRec)
        throw new Error(`cant find old record: ${oldHash}`);
      const oldString = string_2(maybeOldRec.toJSON());
      const applied = applyPatch3(oldString, patch);
      const newState = JSON.parse(applied);
      const newRec = this.session.get("state").merge(
        newState
      );
      const newRecord = this.session.get("state").merge(newRec);
      const newHashCheck = newRecord.hashCode();
      if (newHashCheck === newHash) {
        this.session = this.session.set("state", newRecord);
        hashStore2[newHash] = this.session.get("state");
      } else {
        throw new Error("Wrong patch");
      }
      return newHash;
    };
    sessions2[codeSpace] = this;
    this.room = codeSpace;
    const savedState = null;
    this.session = initSession2(codeSpace, {
      ...user,
      state: savedState ? savedState : JSON.parse(string_2({ ...user.state, codeSpace }))
    })();
    hashStore2[hashKEY2(codeSpace)] = this.session.get("state");
  }
  update() {
    Object.keys(this.cb).map((k) => this.cb[k]).map((x) => {
      try {
        x();
      } catch (error) {
        console.error("error calling callback", { err: error });
      }
    });
  }
  onUpdate(fn, regId) {
    this.cb[regId] = fn;
  }
  json() {
    const user = this.session.toJSON();
    const state = user.state.toJSON();
    return { ...user, state };
  }
  setRoom(codeSpace) {
    const user = this.session.set("room", codeSpace);
    this.session = user;
  }
};
__name2(CodeSession2, "CodeSession");
var hashKEY2 = /* @__PURE__ */ __name2((codeSpace) => sessions2[codeSpace].session.get("state").hashCode(), "hashKEY");
var hashCode32 = /* @__PURE__ */ __name2((codeSpace) => md52(mST2(codeSpace).transpiled), "hashCode");
function mST2(codeSpace, p) {
  const sessAsJs = sessions2[codeSpace].session.get("state").toJSON();
  const { i, transpiled, code, html, css } = p ? JSON.parse(
    applyPatch3(
      string_2(
        sessAsJs
      ),
      p
    )
  ) : sessAsJs;
  return { i, transpiled, code, html, css, codeSpace };
}
__name2(mST2, "mST");
function string_2(s) {
  const { i, transpiled, code, html, css } = s;
  return JSON.stringify({ i, transpiled, code, html, css });
}
__name2(string_2, "string_");
var makePatchFrom2 = /* @__PURE__ */ __name2((n, st) => ({ codeSpace: st.codeSpace, i: st.i, ...sessions2[st.codeSpace].createPatchFromHashCode(n, st) }), "makePatchFrom");
var makePatch2 = /* @__PURE__ */ __name2((st) => ({ ...makePatchFrom2(hashKEY2(st.codeSpace), st), codeSpace: st.codeSpace, i: st.i }), "makePatch");
var startSession2 = /* @__PURE__ */ __name2((codeSpace, u) => sessions2[codeSpace] || (sessions2[codeSpace] = new CodeSession2(codeSpace, {
  name: u.name,
  state: { ...u.state, codeSpace }
})), "startSession");
function createPatch2(oldCode, newCode) {
  return createDelta2(oldCode, newCode);
}
__name2(createPatch2, "createPatch");
var patchSync2 = /* @__PURE__ */ __name2((sess, force = true) => sessions2[sess.codeSpace].patchSync(sess, force), "patchSync");

// ../code/dist/src/session.mjs
init_chunk_chunk_QRJQSMAR2();
init_chunk_chunk_JLPTXNJM2();

// src/handleErrors.ts
async function handleErrors(request, func) {
  try {
    return await func();
  } catch (err) {
    if (request.headers.get("Upgrade") === "websocket") {
      let stack = null;
      if (err instanceof Error) {
        stack = err.stack;
        console.log({ error: err.stack, message: err.message });
      }
      const pair = new WebSocketPair();
      pair[1].accept();
      pair[1].send(JSON.stringify({ error: stack }));
      pair[1].close(1011, "Uncaught exception during session setup");
      return new Response(null, { status: 101, webSocket: pair[0] });
    } else {
      let stack = "We have no idea what happened";
      if (err instanceof Error) {
        stack = err.stack || stack;
        console.log({ error: err.stack, message: err.message });
      }
      return new Response(stack, { status: 500 });
    }
  }
}

// src/chat.ts
var api = {
  fetch: async (req, env) => {
    let request = new Request(req.url, req);
    if (request.cf && request.cf.asOrganization && request.cf.asOrganization.startsWith("YANDEX")) {
      return new Response(null, { status: 401, statusText: "no robots" });
    }
    return handleErrors(request, async () => {
      console.log(`handling request: ${request.url}`);
      const u = new URL(request.url);
      const url = u;
      const accept = request.headers.get("accept");
      const path = url.pathname.slice(1).split("/");
      if (!path[0]) {
        const utcSecs = Math.floor(Math.floor(Date.now() / 1e3 / 7200));
        console.log({ asOrganization: request.cf?.asOrganization });
        const start = md52(
          (request.cf?.asOrganization || "default") + utcSecs + `
        and reset every 2 hours
        time`
        );
        return new Response(
          `<meta http-equiv="refresh" content="0; URL=${u.origin}/live/${start}" />`,
          {
            status: 307,
            headers: {
              "Location": `${u.origin}/live/${start}/`,
              "Content-Type": "text/html;charset=UTF-8",
              "Cache-Control": "no-cache",
              ASSET_HASH
            }
          }
        );
      }
      const handleFetchApi = async (path2) => {
        const newUrl = new URL(path2.join("/"), url.origin);
        request = new Request(newUrl, request);
        const cacheKey = new Request(request.url);
        const cache = await caches.open(newUrl.origin);
        let response = await cache.match(cacheKey);
        if (response) {
          return response;
        }
        switch (path2[0]) {
          case "ping":
            return new Response("ping" + Math.random(), {
              headers: {
                "Content-Type": "text/html;charset=UTF-8",
                "Cache-Control": "no-cache"
              }
            });
          case "env":
            return new Response(JSON.stringify({ env, accept }), {
              headers: {
                "Content-Type": "text/html;charset=UTF-8",
                "Cache-Control": "no-cache"
              }
            });
          case "files.json":
            return new Response(JSON.stringify(files), {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Cache-Control": "no-cache",
                ASSET_HASH
              }
            });
          case "packages.json":
            return new Response(JSON.stringify(package_default), {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Cache-Control": "no-cache"
              }
            });
          case "importmap.json":
            return new Response(JSON.stringify(importmap_default2), {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Cache-Control": "no-cache",
                ASSET_HASH
              }
            });
          case "api":
            return handleApiRequest(path2.slice(1), request, env);
          case "ipns":
          case "ipfs": {
            const u2 = new URL(request.url, "https://cloudflare-ipfs.com");
            const new1 = new URL(u2.pathname, "https://cloudflare-ipfs.com");
            const resp = await fetch(new1.toString());
            if (!resp.ok)
              return resp;
            const new2 = new URL(u2.pathname, "https://ipfs.io");
            const resp2 = await fetch(new2.toString());
            return resp2;
          }
          case "live": {
            const paths = [...path2.slice(1)];
            return handleApiRequest(
              ["room", ...paths],
              request,
              env
            ).catch(
              (e) => new Response("Error," + e?.message, {
                status: 500,
                statusText: e?.message
              })
            );
          }
          default: {
            const file = newUrl.pathname.slice(0, 7) === "/assets/" ? newUrl.pathname.slice(8) : newUrl.pathname.slice(1);
            if (files[file]) {
              const kvCacheKey = new Request(
                request.url.replace(file, files[file])
              );
              response = await cache.match(kvCacheKey);
              if (response)
                return response;
              let kvResp = await (0, import_kv_asset_handler.getAssetFromKV)(
                {
                  request,
                  waitUntil: async (prom) => await prom
                },
                {
                  ASSET_NAMESPACE: env.__STATIC_CONTENT,
                  ASSET_MANIFEST
                }
              );
              if (!kvResp.ok) {
                request = new Request(request.url.replace(url.origin, url.origin + "/src"), request);
                kvResp = await (0, import_kv_asset_handler.getAssetFromKV)(
                  {
                    request,
                    waitUntil: async (prom) => await prom
                  },
                  {
                    ASSET_NAMESPACE: env.__STATIC_CONTENT,
                    ASSET_MANIFEST
                  }
                );
              }
              if (!kvResp.ok)
                return kvResp;
              kvResp = new Response(kvResp.body, kvResp);
              const headers2 = new Headers(kvResp.headers);
              if (isChunk(request.url)) {
                headers2.set("Cache-Control", "public, max-age=604800, immutable");
              }
              headers2.append("Cross-Origin-Embedder-Policy", "require-corp");
              kvResp = new Response(kvResp.body, { ...kvResp, headers: headers2 });
              cache.put(kvCacheKey, kvResp.clone());
              return kvResp;
            }
            const isDTS = u.pathname.endsWith(".d.ts");
            const packageName = u.toString().split(
              u.origin
            ).join(
              "https://esm.sh"
            ).split(
              "/node_modules"
            ).join(
              ""
            ).split(
              "/npm:"
            ).join(
              ""
            ).replace("/index.d.ts", "");
            const esmUrl = packageName;
            request = new Request(esmUrl, { redirect: "follow" });
            response = await fetch(request);
            if (!response.ok) {
              request = new Request(new URL(newUrl.pathname, "https://raw.githubusercontent.com/").toString());
              response = await fetch(request);
              if (!response.ok)
                return response;
            }
            const redirectUrl = response.headers.get("location") || response.url;
            const headers = new Headers(response.headers);
            headers.set(
              "location",
              redirectUrl.replace(
                "esm.sh/",
                u.hostname + "/"
              )
            );
            headers.set("Cross-Origin-Embedder-Policy", "require-corp");
            const xTs = response.headers.get("x-typescript-types") || "NO_DTS";
            if (isDTS) {
              if (xTs === "NO_DTS") {
                return new Response(JSON.stringify({ error: "NO_DTS" }), {
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "Cache-Control": "no-cache"
                  }
                });
              }
              const xt = response.headers.get("x-typescript-types");
              response = new Response(
                `
              export * from "${xt}";
              export { default } from "${xt}";
              `,
                {
                  headers: {
                    "content-type": "application/javascript; charset=utf-8",
                    "Cache-Control": "no-cache"
                  }
                }
              );
            }
            const isText = !!response?.headers?.get("Content-Type")?.includes(
              "charset"
            );
            const bodyStr = isText ? importMapReplace2(
              await response.text(),
              u.origin,
              isDTS ? xTs : response.url
            ).split("esm.sh").join(
              url.host
            ) : await response.blob();
            response = new Response(
              bodyStr,
              {
                ...response,
                status: 200,
                headers
              }
            );
            await cache.put(cacheKey, response.clone());
            return response;
          }
        }
      };
      return handleFetchApi(path);
    });
  }
};
async function handleApiRequest(path, request, env) {
  switch (path[0]) {
    case "room": {
      if (!path[1]) {
        if (request.method === "POST") {
          const id2 = env.CODE.newUniqueId();
          return new Response(id2.toString(), {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp"
            }
          });
        } else {
          return new Response("Method not allowed", { status: 405 });
        }
      }
      const name = path[1].replace(".tsx", "");
      let id;
      if (name.match(/^[0-9a-f]{64}$/)) {
        id = env.CODE.idFromString(name);
      } else if (name.length <= 32) {
        id = env.CODE.idFromName(name);
      } else {
        return new Response("Name too long", { status: 404 });
      }
      const roomObject = env.CODE.get(id);
      const newUrl = new URL(request.url);
      newUrl.pathname = "/" + path.slice(2).join("/");
      newUrl.searchParams.append("room", name);
      return roomObject.fetch(new Request(newUrl.toString(), request));
    }
    default:
      return new Response("Not found", { status: 404 });
  }
}
function isChunk(link) {
  const chunkRegExp = /[.]{1}[a-f0-9]{10}[.]+/gm;
  return link.indexOf("chunk-") !== -1 || chunkRegExp.test(link);
}
var chat_default = api;

// ../../../../../Users/z/.yarn/berry/cache/avl-npm-1.5.3-ee43491243-9.zip/node_modules/avl/src/utils.js
function print(root, printNode = (n) => n.key) {
  var out = [];
  row(root, "", true, (v) => out.push(v), printNode);
  return out.join("");
}
function row(root, prefix, isTail, out, printNode) {
  if (root) {
    out(`${prefix}${isTail ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 "}${printNode(root)}
`);
    const indent = prefix + (isTail ? "    " : "\u2502   ");
    if (root.left)
      row(root.left, indent, false, out, printNode);
    if (root.right)
      row(root.right, indent, true, out, printNode);
  }
}
function isBalanced(root) {
  if (root === null)
    return true;
  var lh = height(root.left);
  var rh = height(root.right);
  if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right))
    return true;
  return false;
}
function height(node) {
  return node ? 1 + Math.max(height(node.left), height(node.right)) : 0;
}
function loadRecursive(parent, keys3, values3, start, end) {
  const size = end - start;
  if (size > 0) {
    const middle = start + Math.floor(size / 2);
    const key = keys3[middle];
    const data = values3[middle];
    const node = { key, data, parent };
    node.left = loadRecursive(node, keys3, values3, start, middle);
    node.right = loadRecursive(node, keys3, values3, middle + 1, end);
    return node;
  }
  return null;
}
function markBalance(node) {
  if (node === null)
    return 0;
  const lh = markBalance(node.left);
  const rh = markBalance(node.right);
  node.balanceFactor = lh - rh;
  return Math.max(lh, rh) + 1;
}
function sort3(keys3, values3, left, right, compare) {
  if (left >= right)
    return;
  const pivot = keys3[left + right >> 1];
  let i = left - 1;
  let j = right + 1;
  while (true) {
    do
      i++;
    while (compare(keys3[i], pivot) < 0);
    do
      j--;
    while (compare(keys3[j], pivot) > 0);
    if (i >= j)
      break;
    let tmp = keys3[i];
    keys3[i] = keys3[j];
    keys3[j] = tmp;
    tmp = values3[i];
    values3[i] = values3[j];
    values3[j] = tmp;
  }
  sort3(keys3, values3, left, j, compare);
  sort3(keys3, values3, j + 1, right, compare);
}

// ../../../../../Users/z/.yarn/berry/cache/avl-npm-1.5.3-ee43491243-9.zip/node_modules/avl/src/index.js
function DEFAULT_COMPARE(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function rotateLeft(node) {
  var rightNode = node.right;
  node.right = rightNode.left;
  if (rightNode.left)
    rightNode.left.parent = node;
  rightNode.parent = node.parent;
  if (rightNode.parent) {
    if (rightNode.parent.left === node) {
      rightNode.parent.left = rightNode;
    } else {
      rightNode.parent.right = rightNode;
    }
  }
  node.parent = rightNode;
  rightNode.left = node;
  node.balanceFactor += 1;
  if (rightNode.balanceFactor < 0) {
    node.balanceFactor -= rightNode.balanceFactor;
  }
  rightNode.balanceFactor += 1;
  if (node.balanceFactor > 0) {
    rightNode.balanceFactor += node.balanceFactor;
  }
  return rightNode;
}
function rotateRight(node) {
  var leftNode = node.left;
  node.left = leftNode.right;
  if (node.left)
    node.left.parent = node;
  leftNode.parent = node.parent;
  if (leftNode.parent) {
    if (leftNode.parent.left === node) {
      leftNode.parent.left = leftNode;
    } else {
      leftNode.parent.right = leftNode;
    }
  }
  node.parent = leftNode;
  leftNode.right = node;
  node.balanceFactor -= 1;
  if (leftNode.balanceFactor > 0) {
    node.balanceFactor -= leftNode.balanceFactor;
  }
  leftNode.balanceFactor -= 1;
  if (node.balanceFactor < 0) {
    leftNode.balanceFactor += node.balanceFactor;
  }
  return leftNode;
}
var AVLTree = class {
  constructor(comparator, noDuplicates = false) {
    this._comparator = comparator || DEFAULT_COMPARE;
    this._root = null;
    this._size = 0;
    this._noDuplicates = !!noDuplicates;
  }
  destroy() {
    return this.clear();
  }
  clear() {
    this._root = null;
    this._size = 0;
    return this;
  }
  get size() {
    return this._size;
  }
  contains(key) {
    if (this._root) {
      var node = this._root;
      var comparator = this._comparator;
      while (node) {
        var cmp = comparator(key, node.key);
        if (cmp === 0)
          return true;
        else if (cmp < 0)
          node = node.left;
        else
          node = node.right;
      }
    }
    return false;
  }
  next(node) {
    var successor = node;
    if (successor) {
      if (successor.right) {
        successor = successor.right;
        while (successor.left)
          successor = successor.left;
      } else {
        successor = node.parent;
        while (successor && successor.right === node) {
          node = successor;
          successor = successor.parent;
        }
      }
    }
    return successor;
  }
  prev(node) {
    var predecessor = node;
    if (predecessor) {
      if (predecessor.left) {
        predecessor = predecessor.left;
        while (predecessor.right)
          predecessor = predecessor.right;
      } else {
        predecessor = node.parent;
        while (predecessor && predecessor.left === node) {
          node = predecessor;
          predecessor = predecessor.parent;
        }
      }
    }
    return predecessor;
  }
  forEach(callback) {
    var current = this._root;
    var s = [], done = false, i = 0;
    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          callback(current, i++);
          current = current.right;
        } else
          done = true;
      }
    }
    return this;
  }
  range(low, high, fn, ctx) {
    const Q = [];
    const compare = this._comparator;
    let node = this._root, cmp;
    while (Q.length !== 0 || node) {
      if (node) {
        Q.push(node);
        node = node.left;
      } else {
        node = Q.pop();
        cmp = compare(node.key, high);
        if (cmp > 0) {
          break;
        } else if (compare(node.key, low) >= 0) {
          if (fn.call(ctx, node))
            return this;
        }
        node = node.right;
      }
    }
    return this;
  }
  keys() {
    var current = this._root;
    var s = [], r = [], done = false;
    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          r.push(current.key);
          current = current.right;
        } else
          done = true;
      }
    }
    return r;
  }
  values() {
    var current = this._root;
    var s = [], r = [], done = false;
    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          r.push(current.data);
          current = current.right;
        } else
          done = true;
      }
    }
    return r;
  }
  at(index) {
    var current = this._root;
    var s = [], done = false, i = 0;
    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          if (i === index)
            return current;
          i++;
          current = current.right;
        } else
          done = true;
      }
    }
    return null;
  }
  minNode() {
    var node = this._root;
    if (!node)
      return null;
    while (node.left)
      node = node.left;
    return node;
  }
  maxNode() {
    var node = this._root;
    if (!node)
      return null;
    while (node.right)
      node = node.right;
    return node;
  }
  min() {
    var node = this._root;
    if (!node)
      return null;
    while (node.left)
      node = node.left;
    return node.key;
  }
  max() {
    var node = this._root;
    if (!node)
      return null;
    while (node.right)
      node = node.right;
    return node.key;
  }
  isEmpty() {
    return !this._root;
  }
  pop() {
    var node = this._root, returnValue = null;
    if (node) {
      while (node.left)
        node = node.left;
      returnValue = { key: node.key, data: node.data };
      this.remove(node.key);
    }
    return returnValue;
  }
  popMax() {
    var node = this._root, returnValue = null;
    if (node) {
      while (node.right)
        node = node.right;
      returnValue = { key: node.key, data: node.data };
      this.remove(node.key);
    }
    return returnValue;
  }
  find(key) {
    var root = this._root;
    var subtree = root, cmp;
    var compare = this._comparator;
    while (subtree) {
      cmp = compare(key, subtree.key);
      if (cmp === 0)
        return subtree;
      else if (cmp < 0)
        subtree = subtree.left;
      else
        subtree = subtree.right;
    }
    return null;
  }
  insert(key, data) {
    if (!this._root) {
      this._root = {
        parent: null,
        left: null,
        right: null,
        balanceFactor: 0,
        key,
        data
      };
      this._size++;
      return this._root;
    }
    var compare = this._comparator;
    var node = this._root;
    var parent = null;
    var cmp = 0;
    if (this._noDuplicates) {
      while (node) {
        cmp = compare(key, node.key);
        parent = node;
        if (cmp === 0)
          return null;
        else if (cmp < 0)
          node = node.left;
        else
          node = node.right;
      }
    } else {
      while (node) {
        cmp = compare(key, node.key);
        parent = node;
        if (cmp <= 0)
          node = node.left;
        else
          node = node.right;
      }
    }
    var newNode = {
      left: null,
      right: null,
      balanceFactor: 0,
      parent,
      key,
      data
    };
    var newRoot;
    if (cmp <= 0)
      parent.left = newNode;
    else
      parent.right = newNode;
    while (parent) {
      cmp = compare(parent.key, key);
      if (cmp < 0)
        parent.balanceFactor -= 1;
      else
        parent.balanceFactor += 1;
      if (parent.balanceFactor === 0)
        break;
      else if (parent.balanceFactor < -1) {
        if (parent.right.balanceFactor === 1)
          rotateRight(parent.right);
        newRoot = rotateLeft(parent);
        if (parent === this._root)
          this._root = newRoot;
        break;
      } else if (parent.balanceFactor > 1) {
        if (parent.left.balanceFactor === -1)
          rotateLeft(parent.left);
        newRoot = rotateRight(parent);
        if (parent === this._root)
          this._root = newRoot;
        break;
      }
      parent = parent.parent;
    }
    this._size++;
    return newNode;
  }
  remove(key) {
    if (!this._root)
      return null;
    var node = this._root;
    var compare = this._comparator;
    var cmp = 0;
    while (node) {
      cmp = compare(key, node.key);
      if (cmp === 0)
        break;
      else if (cmp < 0)
        node = node.left;
      else
        node = node.right;
    }
    if (!node)
      return null;
    var returnValue = node.key;
    var max3, min3;
    if (node.left) {
      max3 = node.left;
      while (max3.left || max3.right) {
        while (max3.right)
          max3 = max3.right;
        node.key = max3.key;
        node.data = max3.data;
        if (max3.left) {
          node = max3;
          max3 = max3.left;
        }
      }
      node.key = max3.key;
      node.data = max3.data;
      node = max3;
    }
    if (node.right) {
      min3 = node.right;
      while (min3.left || min3.right) {
        while (min3.left)
          min3 = min3.left;
        node.key = min3.key;
        node.data = min3.data;
        if (min3.right) {
          node = min3;
          min3 = min3.right;
        }
      }
      node.key = min3.key;
      node.data = min3.data;
      node = min3;
    }
    var parent = node.parent;
    var pp = node;
    var newRoot;
    while (parent) {
      if (parent.left === pp)
        parent.balanceFactor -= 1;
      else
        parent.balanceFactor += 1;
      if (parent.balanceFactor < -1) {
        if (parent.right.balanceFactor === 1)
          rotateRight(parent.right);
        newRoot = rotateLeft(parent);
        if (parent === this._root)
          this._root = newRoot;
        parent = newRoot;
      } else if (parent.balanceFactor > 1) {
        if (parent.left.balanceFactor === -1)
          rotateLeft(parent.left);
        newRoot = rotateRight(parent);
        if (parent === this._root)
          this._root = newRoot;
        parent = newRoot;
      }
      if (parent.balanceFactor === -1 || parent.balanceFactor === 1)
        break;
      pp = parent;
      parent = parent.parent;
    }
    if (node.parent) {
      if (node.parent.left === node)
        node.parent.left = null;
      else
        node.parent.right = null;
    }
    if (node === this._root)
      this._root = null;
    this._size--;
    return returnValue;
  }
  load(keys3 = [], values3 = [], presort) {
    if (this._size !== 0)
      throw new Error("bulk-load: tree is not empty");
    const size = keys3.length;
    if (presort)
      sort3(keys3, values3, 0, size - 1, this._comparator);
    this._root = loadRecursive(null, keys3, values3, 0, size);
    markBalance(this._root);
    this._size = size;
    return this;
  }
  isBalanced() {
    return isBalanced(this._root);
  }
  toString(printNode) {
    return print(this._root, printNode);
  }
};
AVLTree.default = AVLTree;

// src/esbuild.ts
var import_esbuild_wasm3 = __toESM(require_browser3(), 1);
import was from "../src/esbuild.wasm";
Object.assign(globalThis, {
  performance: {
    now: () => Date.now()
  }
});
var mod3 = {
  init: false,
  initialize: () => mod3.init || (0, import_esbuild_wasm3.initialize)({
    wasmModule: was,
    worker: false
  }).then(() => mod3.init = true)
};
var initAndTransform3 = async (code, opts, origin2) => {
  const initFinished = mod3.initialize();
  if (initFinished !== true)
    await initFinished;
  return await esmTransform3(code, origin2);
};
async function esmTransform3(code, origin2) {
  const transpiled = await (0, import_esbuild_wasm3.transform)(code, {
    loader: "tsx",
    format: "esm",
    treeShaking: true,
    platform: "browser",
    minify: false,
    keepNames: true,
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react-jsx",
        useDefineForClassFields: false,
        jsxFragmentFactory: "Fragment",
        jsxImportSource: "@emotion/react"
      }
    },
    target: "es2022"
  });
  if (origin2)
    return importMapReplace2(transpiled.code, origin2, origin2);
  else
    return transpiled.code;
}

// src/iife.html
var iife_default = `
<!DOCTYPE html>
<html lang="en">
<head profile="http://www.w3.org/2005/10/profile">
  <meta http-equiv="Content-Type" content="text/html,charset=utf-8" />
  <meta name="viewport" content="width=device-width" />
  <base href="/">
  <title>Instant React Editor</title>
  <style>
    html,
body,
#root {
  box-sizing: border-box;
  width: 100%;
  height: 100%; 
 }


*, *::before, *::after {
  box-sizing: inherit;
}
body {
  border: 0;
  padding: 0;
  margin: 0;
  background: fixed;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  overscroll-behavior-y: contain;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  min-height: -webkit-fill-available;
  height: 100%;
  /* prevent overscroll bounce*/
  /* overflow-y: scroll; */
  --webkit-overflow-scrolling: touch;
  padding-bottom: 0 !important;
  overflow: hidden;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
}
  </style>
</head>
<body>
  <script>     
  window.startedWithNativeEsmModules = false;
  if (location.href.indexOf(".tsx")!==-1) {
    const loc = location.href.indexOf(".tsx");

    location.href = location.href.slice(0,loc);
  }
  window.process = {
    env: {
      "NODE_ENV": "production"
    }};
  <\/script>
  <div id="root"></div>
  <script>


   /** startState **/


window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    console.log('This page was restored from the bg cache.');
  } else {
    console.log('This page was loaded normally.');
  }
});
 
 <\/script>

  <script type="importmap">
{
  "imports": {
    "react/jsx-runtime": "/react.mjs",
    "react": "/react.mjs",
    "react-dom/client": "/react.mjs",
    "react-dom/server": "/react.mjs",
    "framer-motion": "/framer-motion.mjs",
    "@emotion/react": "/emotion.mjs",
    "@emotion/react/jsx-runtime": "/emotion.mjs",
    "@emotion/cache": "/emotion.mjs"
  }
}
    <\/script>
  
    <script defer src="/iife.js"><\/script>


  <!-- Cloudflare Web Analytics -->
  <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cc7e2ceaa75d4111b26b0ec989795375"}'><\/script><!-- End Cloudflare Web Analytics -->
</body>
</html>`;

// src/chatRoom.ts
var Code = class {
  constructor(state, env) {
    this.env = env;
    this.kv = state.storage;
    this.state = state;
    this.head = "";
    this.sessionStarted = false;
    this.sessions = [];
    this.sess = null;
    this.env = env;
    this.codeSpace = "";
    this.address = "";
    this.state.blockConcurrencyWhile(async () => {
      const session = await this.kv.get("session", { allowConcurrency: true }) || await env.CODE.get(env.CODE.idFromName("code-main")).fetch(
        "session.json"
      ).then((x) => x.json());
      if (!session)
        throw Error("cant get the starter session");
      this.head = await this.kv.get("head") || "";
      this.address = await this.kv.get("address", { allowConcurrency: true }) || "";
      this.sess = session;
      this.codeSpace = session.codeSpace || "";
      if (this.sess.codeSpace) {
        this.session = startSession2(
          this.codeSpace,
          { state: session, name: this.user }
        );
      }
      this.sessionStarted = false;
    });
  }
  state;
  kv;
  codeSpace;
  sess;
  sessionStarted;
  session = null;
  user = md52(self.crypto.randomUUID());
  address;
  users = new AVLTree(
    (a, b) => a === b ? 0 : a < b ? 1 : -1,
    true
  );
  head;
  waiting = [];
  sessions;
  i = 0;
  syncKV(oldSession, newSess, message) {
    return (async () => await syncStorage2(
      async (key, v) => await this.kv.put(key, v, { allowConcurrency: true, allowUnconfirmed: true }),
      async (key) => await this.kv.get(key, { allowConcurrency: true }),
      oldSession,
      newSess,
      message
    ))();
  }
  wait = (x) => {
    this.waiting = this.waiting.filter((x2) => !x2()) || [];
    if (x && !x())
      this.waiting.push(x);
  };
  async fetch(request) {
    const url = new URL(request.url);
    this.wait();
    if (!this.codeSpace) {
      this.codeSpace = url.searchParams.get("room") || "code-main";
      this.codeSpace = url.searchParams.get("room") || "code-main";
      this.sess.codeSpace = this.codeSpace;
      await this.kv.put("session", this.sess, { allowConcurrency: true });
      this.session = startSession2(
        this.codeSpace,
        { state: this.sess, name: this.codeSpace }
      );
      this.sessionStarted = true;
    }
    if (typeof this.head !== "number") {
      const headVals = await this.kv.get(this.head);
      if (headVals) {
        const oldSession = mST2(this.codeSpace, headVals.reversePatch);
        const newSession = mST2(this.codeSpace);
        patchSync2(oldSession, true);
        const message = makePatch2(newSession);
        patchSync2(newSession, true);
        await this.syncKV(oldSession, newSession, message);
      }
    }
    return handleErrors(request, async () => {
      const { code, transpiled, css, html, i } = mST2(this.codeSpace);
      const path = url.pathname.slice(1).split("/");
      if (path.length === 0)
        path.push("");
      switch (path[0]) {
        case "code":
        case "index.tsx":
          return new Response(code, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              content_hash: md52(code),
              "Content-Type": "application/javascript; charset=UTF-8"
            }
          });
        case "index.trans.js": {
          const trp = await initAndTransform3(mST2(this.codeSpace).code, {}, url.origin);
          return new Response(trp, {
            status: 200,
            headers: {
              "x-typescript-types": `${url.origin}/live/${this.codeSpace}/index.tsx`,
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              content_hash: md52(trp),
              "Content-Type": "application/javascript; charset=UTF-8"
            }
          });
        }
        case "session.json":
        case "session": {
          if (path[1]) {
            let session = await this.kv.get(path[1], { allowConcurrency: true });
            if (session) {
              if (typeof session !== "string") {
                session = JSON.stringify(session);
              }
              return new Response(session, {
                status: 200,
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Cross-Origin-Embedder-Policy": "require-corp",
                  "Cache-Control": "no-cache",
                  content_hash: md52(session),
                  "Content-Type": "application/json; charset=UTF-8"
                }
              });
            } else {
              return new Response(
                JSON.stringify({ success: false, statusCode: 404 }),
                {
                  status: 404,
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Cross-Origin-Embedder-Policy": "require-corp",
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json; charset=UTF-8"
                  }
                }
              );
            }
          }
          const body = string_2(this.session?.session.get("state").toJSON());
          return new Response(body, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              content_hash: md52(body),
              "Content-Type": "application/json; charset=UTF-8"
            }
          });
        }
        case "lazy":
          return new Response(
            `import { jsx as jsX } from "@emotion/react";
           import {LoadRoom} from "/live/lazy/js";
           export default ()=>jsX(LoadRoom, { room:"${this.codeSpace}"}) ;
           `,
            {
              status: 200,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Cache-Control": "no-cache",
                "Content-Type": "application/javascript; charset=UTF-8"
              }
            }
          );
        case "request": {
          return new Response(JSON.stringify({ ...request }), {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "application/json; charset=UTF-8"
            }
          });
        }
        case "list": {
          const list = await this.kv.list({ allowConcurrency: true });
          return new Response(JSON.stringify({ ...list }), {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "application/json; charset=UTF-8"
            }
          });
        }
        case "mST.mjs": {
          const body = `
          export const mST=${JSON.stringify(mST2(this.codeSpace))};
          export const codeSpace="${this.codeSpace}";
          export const address="${this.address}";
          export const importmapReplaced=${JSON.stringify({
            js: importMapReplace2(mST2(this.codeSpace).transpiled, url.origin, url.origin)
          })}`;
          const content_hash = md52(body);
          return new Response(
            `
              export const mST=${JSON.stringify(mST2(this.codeSpace))};
              export const codeSpace="${this.codeSpace}";
              export const address="${this.address}";
              export const importmapReplaced=${JSON.stringify({
              js: importMapReplace2(mST2(this.codeSpace).transpiled, url.origin, url.origin)
            })}`,
            {
              status: 200,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Cache-Control": "no-cache",
                content_hash,
                "Content-Type": "application/javascript; charset=UTF-8"
              }
            }
          );
        }
        case "mST":
          return new Response(
            JSON.stringify({
              mST: mST2(this.codeSpace),
              hashCode: hashKEY2(this.codeSpace)
            }),
            {
              status: 200,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Cache-Control": "no-cache",
                "Content-Type": "application/json; charset=UTF-8"
              }
            }
          );
        case "room":
          return new Response(JSON.stringify({ codeSpace: this.codeSpace }), {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "application/json; charset=UTF-8"
            }
          });
        case "path":
          return new Response(path.join("----"), {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "application/javascript; charset=UTF-8"
            }
          });
        case "index.mjs":
        case "index.js":
        case "js": {
          const i2 = path[1] || mST2(this.codeSpace).i;
          if (i2 > mST2(this.codeSpace).i) {
            const started = Date.now() / 1e3;
            const body = await new Promise(
              (res, reject) => this.wait(() => {
                const now = Date.now() / 1e3;
                if (mST2(this.codeSpace).i < Number(i2) && started - now < 3e3) {
                  return false;
                }
                if (mST2(this.codeSpace).i < Number(i2) && started - now >= 3e3) {
                  reject(null);
                  return false;
                }
                initAndTransform3(mST2(this.codeSpace).code, {}, url.origin).then((transpiled2) => res(transpiled2));
                return true;
              })
            );
            const trp2 = await initAndTransform3(mST2(this.codeSpace).code, {}, url.origin);
            return new Response(trp2, {
              status: 200,
              headers: {
                "x-typescript-types": `${url.origin}/live/${this.codeSpace}/index.tsx`,
                "Access-Control-Allow-Origin": "*",
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Cache-Control": "no-cache",
                content_hash: md52(trp2),
                "Content-Type": "application/javascript; charset=UTF-8"
              }
            });
          }
          if (i2 < mST2(this.codeSpace).i) {
            const trp2 = await initAndTransform3(mST2(this.codeSpace).code, {}, url.origin);
            return new Response(trp2, {
              status: 307,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Cross-Origin-Embedder-Policy": "require-corp",
                "Location": `${url.origin}/live/${this.codeSpace}/index.mjs/${mST2(this.codeSpace).i}`,
                "Cache-Control": "no-cache",
                content_hash: md52(trp2),
                "Content-Type": "application/javascript; charset=UTF-8"
              }
            });
          }
          const trp = await initAndTransform3(mST2(this.codeSpace).code, {}, url.origin);
          return new Response(trp, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              content_hash: md52(trp),
              "Content-Type": "application/javascript; charset=UTF-8"
            }
          });
        }
        case "env": {
          return new Response(request.url, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Content-Type": "text/html; charset=UTF-8"
            }
          });
        }
        case "hashCode": {
          const hashCode5 = String(Number(path[1]));
          const patch = await this.kv.get(
            hashCode5,
            { allowConcurrency: true }
          );
          return new Response(JSON.stringify(patch || {}), {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "application/json; charset=UTF-8"
            }
          });
        }
        case "":
        case "hydrated":
        case "worker":
        case "dehydrated":
        case "public": {
          const respText = src_default2.replace(
            "/**reset*/",
            resetCSS2
          ).replace(
            `<div id="root"></div>`,
            `<div id="root" style="height: 100%;">
                  <div id="${this.codeSpace}-css" data-i="${i}" style="height: 100%;">
                  <style>${css}</style>
                  ${html}
                  </div>
              </div>` + (path[0] === "dehydrated" ? `<script>

              const paths = location.href.split("/");
              const page = paths.pop();
              const codeSpace = paths.pop();
                
            
                const BC = new BroadcastChannel([...paths, codeSpace, ""].join("/"));
              
              BC.onmessage = ({data}) => {
                const {html, css, i } = data;
                if (page ==="dehydrated" && html ) document.getElementById("root").innerHTML = ['<div id="', codeSpace, '-css" style="height: 100%"><style>', css, "</style>", html, "<div>" ].join("");
                
              }
              <\/script>` : `<script type="module" src="${url.origin}/src/hydrate.mjs?ASSET_HASH=${ASSET_HASH}"><\/script>`)
          );
          const headers = new Headers();
          headers.set("Access-Control-Allow-Origin", "*");
          headers.set("Cross-Origin-Embedder-Policy", "require-corp");
          headers.set("Cross-Origin-Opener-Policy", "same-origin");
          headers.set(
            "Cache-Control",
            "no-cache"
          );
          headers.set("Content-Type", "text/html; charset=UTF-8");
          headers.set("content_hash", md52(respText));
          return new Response(respText, {
            status: 200,
            headers
          });
        }
        case "prerender": {
          const respText = src_default2.replace(
            "/**reset*/",
            resetCSS2
          ).replace(
            `<div id="root"></div>`,
            `   
          <div id="root"></div>
          <script type="module">
          import App from "${url.origin}/live/${this.codeSpace}/index.js?i=${mST2(this.codeSpace).i}"
              
            import {prerender} from "${url.origin}/src/render.mjs"
              
              
             const res = prerender(App).then(res=>window.parent.postMessage(res))

            //  console.log({res});
            
              <\/script>`
          ).split("ASSET_HASH").join(ASSET_HASH);
          const headers = new Headers();
          headers.set("Access-Control-Allow-Origin", "*");
          headers.set("Cross-Origin-Embedder-Policy", "require-corp");
          headers.set("Cross-Origin-Opener-Policy", "same-origin");
          headers.set(
            "Cache-Control",
            "no-cache"
          );
          headers.set("Content-Type", "text/html; charset=UTF-8");
          headers.set("content_hash", md52(respText));
          return new Response(respText, {
            status: 200,
            headers
          });
        }
        case "iframe": {
          const respText = src_default2.replace(
            "/**reset*/",
            resetCSS2
          ).replace(
            `<div id="root"></div>`,
            `
              <div id="root" data-i="${i}" style="height: 100%;">

              <style>${css}</style>
              <div id="${this.codeSpace}-css" style="height: 100%;">
                ${html}
              </div>
              </div>
              <script type="module">

              import {render} from "${url.origin}/src/render.mjs";
              
              import App from "${url.origin}/live/${this.codeSpace}/index.js?i=${mST2(this.codeSpace).i}";

              const rootEl = document.getElementById("${this.codeSpace}-css");
              
              render(rootEl, App, "${this.codeSpace}");          
          
              <\/script>`
          ).split("ASSET_HASH").join(ASSET_HASH);
          const headers = new Headers();
          headers.set("Access-Control-Allow-Origin", "*");
          headers.set("Cross-Origin-Embedder-Policy", "require-corp");
          headers.set("Cross-Origin-Opener-Policy", "same-origin");
          headers.set(
            "Cache-Control",
            "no-cache"
          );
          headers.set("Content-Type", "text/html; charset=UTF-8");
          headers.set("content_hash", md52(respText));
          return new Response(respText, {
            status: 200,
            headers
          });
        }
        case "iife": {
          const startState = mST2(this.codeSpace);
          const html2 = iife_default.replace(
            `/** startState **/`,
            `Object.assign(window,${JSON.stringify({
              startState,
              codeSpace: this.codeSpace,
              address: this.address
            })});`
          );
          return new Response(html2, {
            status: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Cross-Origin-Embedder-Policy": "require-corp",
              "Cache-Control": "no-cache",
              "Content-Type": "text/html; charset=UTF-8"
            }
          });
        }
        case "websocket": {
          if (request.headers.get("Upgrade") != "websocket") {
            return new Response("expected websocket", { status: 400 });
          }
          const pair = new WebSocketPair();
          await this.handleSession(pair[1]);
          return new Response(null, { status: 101, webSocket: pair[0] });
        }
        default:
          return new Response("Not found", { status: 404 });
      }
    });
  }
  async handleSession(webSocket) {
    webSocket.accept();
    const session = {
      name: "",
      quit: false,
      webSocket
    };
    this.sessions.push(session);
    this.sessions = this.sessions.filter((x) => !x.quit);
    const users = this.sessions.filter((x) => x.name).map((x) => x.name);
    webSocket.send(
      JSON.stringify({ hashCode: hashKEY2(this.codeSpace), i: mST2(this.codeSpace).i, users, type: "handshake" })
    );
    webSocket.addEventListener(
      "message",
      (msg) => this.processWsMessage(msg, session)
    );
    const closeOrErrorHandler = () => {
      session.quit = true;
    };
    webSocket.addEventListener("close", closeOrErrorHandler);
    webSocket.addEventListener("error", closeOrErrorHandler);
  }
  async processWsMessage(msg, session) {
    if (session.quit) {
      this.users.remove(session.name);
      session.webSocket.close(1011, "WebSocket broken.");
      return;
    }
    const { name } = session;
    const respondWith = (obj) => session.webSocket.send(JSON.stringify(obj));
    let data;
    try {
      data = typeof msg.data === "string" ? JSON.parse(msg.data) : JSON.parse(new TextDecoder().decode(msg.data));
    } catch (exp) {
      return respondWith({
        error: "JSON parse error",
        exp: exp || {}
      });
    }
    if (!name) {
      if (!data.name) {
        return respondWith({
          msg: "no-name-no-party"
        });
      }
      this.sessions.filter((x) => x.name === data.name).map((x) => x.quit = true);
      session.name = name;
    }
    if (data.type == "handshake") {
      const HEAD = hashKEY2(this.codeSpace);
      let commit = data.hashCode;
      while (commit && commit !== HEAD) {
        const oldNode = await this.kv.get("" + commit, { allowConcurrency: true });
        const newNode = await this.kv.get("" + oldNode.newHash, { allowConcurrency: true });
        return respondWith({
          oldHash: commit,
          newHash: oldNode.newHash,
          patch: oldNode.patch,
          reversePatch: newNode.reversePatch
        });
      }
    }
    try {
      try {
        if (data.target && data.type && ["new-ice-candidate", "video-offer", "video-answer"].includes(
          data.type
        )) {
          return this.user2user(data.target, { ...data, name });
        }
        if (data.patch && data.oldHash && data.newHash) {
          const oldSession = mST2(this.codeSpace);
          const newSess = mST2(this.codeSpace, data.patch);
          if (hashKEY2(this.codeSpace) !== data.oldHash) {
            return respondWith({
              error: `old hashes not matching`
            });
          }
          try {
            patchSync2(
              newSess
            );
          } catch (exp) {
            const err = exp || {};
            return respondWith({
              error: "unknown error- in patching" + JSON.stringify({ err }),
              exp: exp || {}
            });
          }
          try {
            await this.kv.put("session", newSess, { allowConcurrency: true });
            const { newHash, oldHash, patch, reversePatch } = data;
            await this.syncKV(oldSession, newSess, {
              newHash: +newHash,
              oldHash: +oldHash,
              codeSpace: this.codeSpace,
              patch,
              reversePatch
            });
            this.broadcast(data);
          } catch (err) {
            return respondWith({
              error: "Saving it its really hard",
              exp: err || {}
            });
          }
          return respondWith({
            hashCode: hashKEY2(this.codeSpace)
          });
        }
      } catch (exp) {
        console.error({ exp });
        return respondWith({
          error: "unknown error - e1",
          exp: exp || {}
        });
      }
    } catch (exp) {
      console.error({ exp });
      return respondWith({
        error: "unknown error - e2",
        exp: exp || {}
      });
    }
  }
  user2user(to, msg) {
    const message = typeof msg !== "string" ? JSON.stringify(msg) : msg;
    this.sessions.filter((session) => session.name === to).map((s) => {
      try {
        s.webSocket.send(message);
      } catch {
        console.error("p2p error");
      }
    });
  }
  broadcast(msg) {
    const message = JSON.stringify(msg);
    this.sessions.filter((s) => s.name).map((s) => {
      try {
        s.webSocket.send(message);
      } catch (err) {
        s.quit = true;
        this.users.remove(s.name);
      }
    });
  }
};

// src/rateLimiter.ts
var CodeRateLimiter = class {
  nextAllowedTime = 0;
  async fetch(request) {
    return await handleErrors(request, async () => {
      const now = Date.now() / 1e3;
      this.nextAllowedTime = Math.max(now, this.nextAllowedTime);
      if (request.method == "POST") {
        this.nextAllowedTime += 1;
      }
      const cooldown = Math.max(0, this.nextAllowedTime - now - 1);
      return new Response(`${cooldown}`);
    });
  }
};

// src/users.ts
var Users = class {
  async fetch(_request, _env) {
    return new Response("OKi");
  }
};

// src/r2bucket.ts
var r2bucket_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);
    let object;
    let headers;
    switch (request.method) {
      case "PUT":
        await env.r2_bucket.put(key, request.body);
        return new Response(`Put ${key} successfully!`);
      case "GET":
        object = await env.r2_bucket.get(key);
        if (object === null) {
          return new Response("Object Not Found", { status: 404 });
        }
        headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set("etag", object.httpEtag);
        return new Response(object.body, {
          headers
        });
      case "DELETE":
        await env.r2_bucket.delete(key);
        return new Response("Deleted!");
      default:
        return new Response("Method Not Allowed", {
          status: 405,
          headers: {
            Allow: "PUT, GET, DELETE"
          }
        });
    }
  }
};

// src/index.ts
var src_default3 = chat_default;
export {
  Code,
  CodeRateLimiter,
  r2bucket_default as R2,
  Users,
  src_default3 as default
};
