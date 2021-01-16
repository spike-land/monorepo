var sr = Object.create,
  ie = Object.defineProperty,
  rr = Object.getPrototypeOf,
  nr = Object.prototype.hasOwnProperty,
  ir = Object.getOwnPropertyNames,
  or = Object.getOwnPropertyDescriptor;
var br = (e) => ie(e, "__esModule", { value: !0 });
var o = (e, t) =>
  () => (t || (t = { exports: {} }, e(t.exports, t)), t.exports);
var ar = (e, t, s) => {
    if (br(e), t && typeof t == "object" || typeof t == "function") {
      for (let r of ir(t)) {
        !nr.call(e, r) && r !== "default" && ie(e, r, {
          get: () => t[r],
          enumerable: !(s = or(t, r)) || s.enumerable,
        });
      }
    }
    return e;
  },
  De = (e) =>
    e && e.__esModule ? e : ar(
      ie(e != null ? sr(rr(e)) : {}, "default", { value: e, enumerable: !0 }),
      e,
    );
var je = o((v0, Te) => {
  "use strict";
  function cr(e) {
    if (e.length >= 255) throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
    for (var r = 0; r < e.length; r++) {
      var n = e.charAt(r), i = n.charCodeAt(0);
      if (t[i] !== 255) throw new TypeError(n + " is ambiguous");
      t[i] = r;
    }
    var b = e.length,
      a = e.charAt(0),
      l = Math.log(b) / Math.log(256),
      k = Math.log(256) / Math.log(b);
    function G(c) {
      if (
        c instanceof Uint8Array ||
        (ArrayBuffer.isView(c)
          ? c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)
          : Array.isArray(c) && (c = Uint8Array.from(c))),
          !(c instanceof Uint8Array)
      ) {
        throw new TypeError("Expected Uint8Array");
      }
      if (c.length === 0) return "";
      for (var d = 0, C = 0, f = 0, m = c.length; f !== m && c[f] === 0;) {
        f++, d++;
      }
      for (var g = (m - f) * k + 1 >>> 0, u = new Uint8Array(g); f !== m;) {
        for (
          var w = c[f], A = 0, h = g - 1;
          (w !== 0 || A < C) && h !== -1;
          h--, A++
        ) {
          w += 256 * u[h] >>> 0, u[h] = w % b >>> 0, w = w / b >>> 0;
        }
        if (w !== 0) throw new Error("Non-zero carry");
        C = A, f++;
      }
      for (var y = g - C; y !== g && u[y] === 0;) y++;
      for (var Q = a.repeat(d); y < g; ++y) Q += e.charAt(u[y]);
      return Q;
    }
    function Se(c) {
      if (typeof c != "string") throw new TypeError("Expected String");
      if (c.length === 0) return new Uint8Array();
      var d = 0;
      if (c[d] !== " ") {
        for (var C = 0, f = 0; c[d] === a;) C++, d++;
        for (
          var m = (c.length - d) * l + 1 >>> 0, g = new Uint8Array(m);
          c[d];
        ) {
          var u = t[c.charCodeAt(d)];
          if (u === 255) return;
          for (var w = 0, A = m - 1; (u !== 0 || w < f) && A !== -1; A--, w++) {
            u += b * g[A] >>> 0, g[A] = u % 256 >>> 0, u = u / 256 >>> 0;
          }
          if (u !== 0) throw new Error("Non-zero carry");
          f = w, d++;
        }
        if (c[d] !== " ") {
          for (var h = m - f; h !== m && g[h] === 0;) h++;
          for (var y = new Uint8Array(C + (m - h)), Q = C; h !== m;) {
            y[Q++] = g[h++];
          }
          return y;
        }
      }
    }
    function tr(c) {
      var d = Se(c);
      if (d) return d;
      throw new Error("Non-base" + b + " character");
    }
    return { encode: G, decodeUnsafe: Se, decode: tr };
  }
  Te.exports = cr;
});
var q = o((oe) => {
  "use strict";
  oe.TextEncoder = TextEncoder;
  oe.TextDecoder = TextDecoder;
});
var J = o((A0, Ue) => {
  "use strict";
  var { TextEncoder: xr, TextDecoder: lr } = q(),
    dr = new lr(),
    kr = (e) => dr.decode(e),
    ur = new xr(),
    fr = (e) => ur.encode(e);
  function hr(e, t) {
    let s = new Uint8Array(t), r = 0;
    for (let n of e) s.set(n, r), r += n.length;
    return s;
  }
  Ue.exports = { decodeText: kr, encodeText: fr, concat: hr };
});
var Be = o((C0, Me) => {
  "use strict";
  var { encodeText: pr } = J(),
    Ne = class {
      constructor(t, s, r, n) {
        this.name = t,
          this.code = s,
          this.codeBuf = pr(this.code),
          this.alphabet = n,
          this.codec = r(n);
      }
      encode(t) {
        return this.codec.encode(t);
      }
      decode(t) {
        for (let s of t) {
          if (this.alphabet && this.alphabet.indexOf(s) < 0) {
            throw new Error(`invalid character '${s}' in '${t}'`);
          }
        }
        return this.codec.decode(t);
      }
    };
  Me.exports = Ne;
});
var ze = o((q0, Re) => {
  "use strict";
  var mr = (e, t, s) => {
      let r = {};
      for (let k = 0; k < t.length; ++k) r[t[k]] = k;
      let n = e.length;
      for (; e[n - 1] === "=";) --n;
      let i = new Uint8Array(n * s / 8 | 0), b = 0, a = 0, l = 0;
      for (let k = 0; k < n; ++k) {
        let G = r[e[k]];
        if (G === void 0) throw new SyntaxError("Invalid character " + e[k]);
        a = a << s | G, b += s, b >= 8 && (b -= 8, i[l++] = 255 & a >> b);
      }
      if (b >= s || 255 & a << 8 - b) {
        throw new SyntaxError("Unexpected end of data");
      }
      return i;
    },
    gr = (e, t, s) => {
      let r = t[t.length - 1] === "=", n = (1 << s) - 1, i = "", b = 0, a = 0;
      for (let l = 0; l < e.length; ++l) {
        for (a = a << 8 | e[l], b += 8; b > s;) b -= s, i += t[n & a >> b];
      }
      if (b && (i += t[n & a << s - b]), r) {
        for (; i.length * s & 7;) i += "=";
      }
      return i;
    },
    wr = (e) =>
      (t) => ({
        encode(s) {
          return gr(s, t, e);
        },
        decode(s) {
          return mr(s, t, e);
        },
      });
  Re.exports = { rfc4648: wr };
});
var P = o((I0, Oe) => {
  "use strict";
  var R = je(),
    yr = Be(),
    { rfc4648: x } = ze(),
    { decodeText: vr, encodeText: Er } = J(),
    Ar = () => ({ encode: vr, decode: Er }),
    Fe = [
      ["identity", "\0", Ar, ""],
      ["base2", "0", x(1), "01"],
      ["base8", "7", x(3), "01234567"],
      ["base10", "9", R, "0123456789"],
      ["base16", "f", x(4), "0123456789abcdef"],
      ["base16upper", "F", x(4), "0123456789ABCDEF"],
      ["base32hex", "v", x(5), "0123456789abcdefghijklmnopqrstuv"],
      ["base32hexupper", "V", x(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
      ["base32hexpad", "t", x(5), "0123456789abcdefghijklmnopqrstuv="],
      ["base32hexpadupper", "T", x(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
      ["base32", "b", x(5), "abcdefghijklmnopqrstuvwxyz234567"],
      ["base32upper", "B", x(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
      ["base32pad", "c", x(5), "abcdefghijklmnopqrstuvwxyz234567="],
      ["base32padupper", "C", x(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
      ["base32z", "h", x(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
      ["base36", "k", R, "0123456789abcdefghijklmnopqrstuvwxyz"],
      ["base36upper", "K", R, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      [
        "base58btc",
        "z",
        R,
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
      ],
      [
        "base58flickr",
        "Z",
        R,
        "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
      ],
      [
        "base64",
        "m",
        x(6),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      ],
      [
        "base64pad",
        "M",
        x(6),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      ],
      [
        "base64url",
        "u",
        x(6),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      ],
      [
        "base64urlpad",
        "U",
        x(6),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      ],
    ],
    Le = Fe.reduce((e, t) => (e[t[0]] = new yr(t[0], t[1], t[2], t[3]), e), {}),
    Cr = Fe.reduce((e, t) => (e[t[1]] = Le[t[0]], e), {});
  Oe.exports = { names: Le, codes: Cr };
});
var T = o((v, Ve) => {
  "use strict";
  var D = P(), { encodeText: qr, decodeText: X, concat: _e } = J();
  function Sr(e, t) {
    if (!t) throw new Error("requires an encoded Uint8Array");
    let { name: s, codeBuf: r } = I(e);
    return Ir(s, t), _e([r, t], r.length + t.length);
  }
  function Dr(e, t) {
    let s = I(e), r = qr(s.encode(t));
    return _e([s.codeBuf, r], s.codeBuf.length + r.length);
  }
  function Tr(e) {
    e instanceof Uint8Array && (e = X(e));
    let t = e[0];
    return ["f", "F", "v", "V", "t", "T", "b", "B", "c", "C", "h", "k", "K"]
      .includes(t) && (e = e.toLowerCase()),
      I(e[0]).decode(e.substring(1));
  }
  function jr(e) {
    if (
      e instanceof Uint8Array && (e = X(e)),
        Object.prototype.toString.call(e) !== "[object String]"
    ) {
      return !1;
    }
    try {
      return I(e[0]).name;
    } catch (t) {
      return !1;
    }
  }
  function Ir(e, t) {
    I(e).decode(X(t));
  }
  function I(e) {
    if (D.names[e]) return D.names[e];
    if (D.codes[e]) return D.codes[e];
    throw new Error(`Unsupported encoding: ${e}`);
  }
  function Ur(e) {
    return e instanceof Uint8Array && (e = X(e)), I(e[0]);
  }
  v = Ve.exports = Sr;
  v.encode = Dr;
  v.decode = Tr;
  v.isEncoded = jr;
  v.encoding = I;
  v.encodingFromData = Ur;
  v.names = Object.freeze(D.names);
  v.codes = Object.freeze(D.codes);
});
var Je = o((S0, Ge) => {
  Ge.exports = be;
  var Qe = 128, Mr = 127, Nr = ~Mr, Br = Math.pow(2, 31);
  function be(e, t, s) {
    if (
      Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER
    ) {
      throw be.bytes = 0, new RangeError("Could not encode varint");
    }
    t = t || [], s = s || 0;
    for (var r = s; e >= Br;) t[s++] = e & 255 | Qe, e /= 128;
    for (; e & Nr;) t[s++] = e & 255 | Qe, e >>>= 7;
    return t[s] = e | 0, be.bytes = s - r + 1, t;
  }
});
var Ke = o((D0, Pe) => {
  Pe.exports = ae;
  var Rr = 128, Xe = 127;
  function ae(e, t) {
    var s = 0, t = t || 0, r = 0, n = t, i, b = e.length;
    do {
      if (n >= b || r > 49) {
        throw ae.bytes = 0, new RangeError("Could not decode varint");
      }
      i = e[n++],
        s += r < 28 ? (i & Xe) << r : (i & Xe) * Math.pow(2, r),
        r += 7;
    } while (i >= Rr);
    return ae.bytes = n - t, s;
  }
});
var He = o((T0, $e) => {
  var zr = Math.pow(2, 7),
    Or = Math.pow(2, 14),
    Fr = Math.pow(2, 21),
    Lr = Math.pow(2, 28),
    Vr = Math.pow(2, 35),
    _r = Math.pow(2, 42),
    Gr = Math.pow(2, 49),
    Qr = Math.pow(2, 56),
    Jr = Math.pow(2, 63);
  $e.exports = function (e) {
    return e < zr
      ? 1
      : e < Or
      ? 2
      : e < Fr
      ? 3
      : e < Lr
      ? 4
      : e < Vr
      ? 5
      : e < _r
      ? 6
      : e < Gr
      ? 7
      : e < Qr
      ? 8
      : e < Jr
      ? 9
      : 10;
  };
});
var We = o((j0, Ze) => {
  Ze.exports = { encode: Je(), decode: Ke(), encodingLength: He() };
});
var et = o((U0, Ye) => {
  "use strict";
  var Pr = Object.freeze(
    {
      identity: 0,
      sha1: 17,
      "sha2-256": 18,
      "sha2-512": 19,
      "sha3-512": 20,
      "sha3-384": 21,
      "sha3-256": 22,
      "sha3-224": 23,
      "shake-128": 24,
      "shake-256": 25,
      "keccak-224": 26,
      "keccak-256": 27,
      "keccak-384": 28,
      "keccak-512": 29,
      blake3: 30,
      "murmur3-128": 34,
      "murmur3-32": 35,
      "dbl-sha2-256": 86,
      md4: 212,
      md5: 213,
      bmt: 214,
      "sha2-256-trunc254-padded": 4114,
      "ripemd-128": 4178,
      "ripemd-160": 4179,
      "ripemd-256": 4180,
      "ripemd-320": 4181,
      x11: 4352,
      kangarootwelve: 7425,
      "sm3-256": 21325,
      "blake2b-8": 45569,
      "blake2b-16": 45570,
      "blake2b-24": 45571,
      "blake2b-32": 45572,
      "blake2b-40": 45573,
      "blake2b-48": 45574,
      "blake2b-56": 45575,
      "blake2b-64": 45576,
      "blake2b-72": 45577,
      "blake2b-80": 45578,
      "blake2b-88": 45579,
      "blake2b-96": 45580,
      "blake2b-104": 45581,
      "blake2b-112": 45582,
      "blake2b-120": 45583,
      "blake2b-128": 45584,
      "blake2b-136": 45585,
      "blake2b-144": 45586,
      "blake2b-152": 45587,
      "blake2b-160": 45588,
      "blake2b-168": 45589,
      "blake2b-176": 45590,
      "blake2b-184": 45591,
      "blake2b-192": 45592,
      "blake2b-200": 45593,
      "blake2b-208": 45594,
      "blake2b-216": 45595,
      "blake2b-224": 45596,
      "blake2b-232": 45597,
      "blake2b-240": 45598,
      "blake2b-248": 45599,
      "blake2b-256": 45600,
      "blake2b-264": 45601,
      "blake2b-272": 45602,
      "blake2b-280": 45603,
      "blake2b-288": 45604,
      "blake2b-296": 45605,
      "blake2b-304": 45606,
      "blake2b-312": 45607,
      "blake2b-320": 45608,
      "blake2b-328": 45609,
      "blake2b-336": 45610,
      "blake2b-344": 45611,
      "blake2b-352": 45612,
      "blake2b-360": 45613,
      "blake2b-368": 45614,
      "blake2b-376": 45615,
      "blake2b-384": 45616,
      "blake2b-392": 45617,
      "blake2b-400": 45618,
      "blake2b-408": 45619,
      "blake2b-416": 45620,
      "blake2b-424": 45621,
      "blake2b-432": 45622,
      "blake2b-440": 45623,
      "blake2b-448": 45624,
      "blake2b-456": 45625,
      "blake2b-464": 45626,
      "blake2b-472": 45627,
      "blake2b-480": 45628,
      "blake2b-488": 45629,
      "blake2b-496": 45630,
      "blake2b-504": 45631,
      "blake2b-512": 45632,
      "blake2s-8": 45633,
      "blake2s-16": 45634,
      "blake2s-24": 45635,
      "blake2s-32": 45636,
      "blake2s-40": 45637,
      "blake2s-48": 45638,
      "blake2s-56": 45639,
      "blake2s-64": 45640,
      "blake2s-72": 45641,
      "blake2s-80": 45642,
      "blake2s-88": 45643,
      "blake2s-96": 45644,
      "blake2s-104": 45645,
      "blake2s-112": 45646,
      "blake2s-120": 45647,
      "blake2s-128": 45648,
      "blake2s-136": 45649,
      "blake2s-144": 45650,
      "blake2s-152": 45651,
      "blake2s-160": 45652,
      "blake2s-168": 45653,
      "blake2s-176": 45654,
      "blake2s-184": 45655,
      "blake2s-192": 45656,
      "blake2s-200": 45657,
      "blake2s-208": 45658,
      "blake2s-216": 45659,
      "blake2s-224": 45660,
      "blake2s-232": 45661,
      "blake2s-240": 45662,
      "blake2s-248": 45663,
      "blake2s-256": 45664,
      "skein256-8": 45825,
      "skein256-16": 45826,
      "skein256-24": 45827,
      "skein256-32": 45828,
      "skein256-40": 45829,
      "skein256-48": 45830,
      "skein256-56": 45831,
      "skein256-64": 45832,
      "skein256-72": 45833,
      "skein256-80": 45834,
      "skein256-88": 45835,
      "skein256-96": 45836,
      "skein256-104": 45837,
      "skein256-112": 45838,
      "skein256-120": 45839,
      "skein256-128": 45840,
      "skein256-136": 45841,
      "skein256-144": 45842,
      "skein256-152": 45843,
      "skein256-160": 45844,
      "skein256-168": 45845,
      "skein256-176": 45846,
      "skein256-184": 45847,
      "skein256-192": 45848,
      "skein256-200": 45849,
      "skein256-208": 45850,
      "skein256-216": 45851,
      "skein256-224": 45852,
      "skein256-232": 45853,
      "skein256-240": 45854,
      "skein256-248": 45855,
      "skein256-256": 45856,
      "skein512-8": 45857,
      "skein512-16": 45858,
      "skein512-24": 45859,
      "skein512-32": 45860,
      "skein512-40": 45861,
      "skein512-48": 45862,
      "skein512-56": 45863,
      "skein512-64": 45864,
      "skein512-72": 45865,
      "skein512-80": 45866,
      "skein512-88": 45867,
      "skein512-96": 45868,
      "skein512-104": 45869,
      "skein512-112": 45870,
      "skein512-120": 45871,
      "skein512-128": 45872,
      "skein512-136": 45873,
      "skein512-144": 45874,
      "skein512-152": 45875,
      "skein512-160": 45876,
      "skein512-168": 45877,
      "skein512-176": 45878,
      "skein512-184": 45879,
      "skein512-192": 45880,
      "skein512-200": 45881,
      "skein512-208": 45882,
      "skein512-216": 45883,
      "skein512-224": 45884,
      "skein512-232": 45885,
      "skein512-240": 45886,
      "skein512-248": 45887,
      "skein512-256": 45888,
      "skein512-264": 45889,
      "skein512-272": 45890,
      "skein512-280": 45891,
      "skein512-288": 45892,
      "skein512-296": 45893,
      "skein512-304": 45894,
      "skein512-312": 45895,
      "skein512-320": 45896,
      "skein512-328": 45897,
      "skein512-336": 45898,
      "skein512-344": 45899,
      "skein512-352": 45900,
      "skein512-360": 45901,
      "skein512-368": 45902,
      "skein512-376": 45903,
      "skein512-384": 45904,
      "skein512-392": 45905,
      "skein512-400": 45906,
      "skein512-408": 45907,
      "skein512-416": 45908,
      "skein512-424": 45909,
      "skein512-432": 45910,
      "skein512-440": 45911,
      "skein512-448": 45912,
      "skein512-456": 45913,
      "skein512-464": 45914,
      "skein512-472": 45915,
      "skein512-480": 45916,
      "skein512-488": 45917,
      "skein512-496": 45918,
      "skein512-504": 45919,
      "skein512-512": 45920,
      "skein1024-8": 45921,
      "skein1024-16": 45922,
      "skein1024-24": 45923,
      "skein1024-32": 45924,
      "skein1024-40": 45925,
      "skein1024-48": 45926,
      "skein1024-56": 45927,
      "skein1024-64": 45928,
      "skein1024-72": 45929,
      "skein1024-80": 45930,
      "skein1024-88": 45931,
      "skein1024-96": 45932,
      "skein1024-104": 45933,
      "skein1024-112": 45934,
      "skein1024-120": 45935,
      "skein1024-128": 45936,
      "skein1024-136": 45937,
      "skein1024-144": 45938,
      "skein1024-152": 45939,
      "skein1024-160": 45940,
      "skein1024-168": 45941,
      "skein1024-176": 45942,
      "skein1024-184": 45943,
      "skein1024-192": 45944,
      "skein1024-200": 45945,
      "skein1024-208": 45946,
      "skein1024-216": 45947,
      "skein1024-224": 45948,
      "skein1024-232": 45949,
      "skein1024-240": 45950,
      "skein1024-248": 45951,
      "skein1024-256": 45952,
      "skein1024-264": 45953,
      "skein1024-272": 45954,
      "skein1024-280": 45955,
      "skein1024-288": 45956,
      "skein1024-296": 45957,
      "skein1024-304": 45958,
      "skein1024-312": 45959,
      "skein1024-320": 45960,
      "skein1024-328": 45961,
      "skein1024-336": 45962,
      "skein1024-344": 45963,
      "skein1024-352": 45964,
      "skein1024-360": 45965,
      "skein1024-368": 45966,
      "skein1024-376": 45967,
      "skein1024-384": 45968,
      "skein1024-392": 45969,
      "skein1024-400": 45970,
      "skein1024-408": 45971,
      "skein1024-416": 45972,
      "skein1024-424": 45973,
      "skein1024-432": 45974,
      "skein1024-440": 45975,
      "skein1024-448": 45976,
      "skein1024-456": 45977,
      "skein1024-464": 45978,
      "skein1024-472": 45979,
      "skein1024-480": 45980,
      "skein1024-488": 45981,
      "skein1024-496": 45982,
      "skein1024-504": 45983,
      "skein1024-512": 45984,
      "skein1024-520": 45985,
      "skein1024-528": 45986,
      "skein1024-536": 45987,
      "skein1024-544": 45988,
      "skein1024-552": 45989,
      "skein1024-560": 45990,
      "skein1024-568": 45991,
      "skein1024-576": 45992,
      "skein1024-584": 45993,
      "skein1024-592": 45994,
      "skein1024-600": 45995,
      "skein1024-608": 45996,
      "skein1024-616": 45997,
      "skein1024-624": 45998,
      "skein1024-632": 45999,
      "skein1024-640": 46e3,
      "skein1024-648": 46001,
      "skein1024-656": 46002,
      "skein1024-664": 46003,
      "skein1024-672": 46004,
      "skein1024-680": 46005,
      "skein1024-688": 46006,
      "skein1024-696": 46007,
      "skein1024-704": 46008,
      "skein1024-712": 46009,
      "skein1024-720": 46010,
      "skein1024-728": 46011,
      "skein1024-736": 46012,
      "skein1024-744": 46013,
      "skein1024-752": 46014,
      "skein1024-760": 46015,
      "skein1024-768": 46016,
      "skein1024-776": 46017,
      "skein1024-784": 46018,
      "skein1024-792": 46019,
      "skein1024-800": 46020,
      "skein1024-808": 46021,
      "skein1024-816": 46022,
      "skein1024-824": 46023,
      "skein1024-832": 46024,
      "skein1024-840": 46025,
      "skein1024-848": 46026,
      "skein1024-856": 46027,
      "skein1024-864": 46028,
      "skein1024-872": 46029,
      "skein1024-880": 46030,
      "skein1024-888": 46031,
      "skein1024-896": 46032,
      "skein1024-904": 46033,
      "skein1024-912": 46034,
      "skein1024-920": 46035,
      "skein1024-928": 46036,
      "skein1024-936": 46037,
      "skein1024-944": 46038,
      "skein1024-952": 46039,
      "skein1024-960": 46040,
      "skein1024-968": 46041,
      "skein1024-976": 46042,
      "skein1024-984": 46043,
      "skein1024-992": 46044,
      "skein1024-1000": 46045,
      "skein1024-1008": 46046,
      "skein1024-1016": 46047,
      "skein1024-1024": 46048,
      "poseidon-bls12_381-a2-fc1": 46081,
      "poseidon-bls12_381-a2-fc1-sc": 46082,
    },
  );
  Ye.exports = { names: Pr };
});
var st = o((M0, tt) => {
  "use strict";
  var { encoding: Xr } = T(), { TextDecoder: Kr } = q(), $r = new Kr("utf8");
  function Hr(e) {
    let t = "";
    for (let s = 0; s < e.length; s++) t += String.fromCharCode(e[s]);
    return t;
  }
  function Zr(e, t = "utf8") {
    return t === "utf8" || t === "utf-8"
      ? $r.decode(e)
      : t === "ascii"
      ? Hr(e)
      : Xr(t).encode(e);
  }
  tt.exports = Zr;
});
var nt = o((N0, rt) => {
  "use strict";
  var { encoding: Wr } = T(), { TextEncoder: Yr } = q(), en = new Yr();
  function tn(e) {
    let t = new Uint8Array(e.length);
    for (let s = 0; s < e.length; s++) t[s] = e.charCodeAt(s);
    return t;
  }
  function sn(e, t = "utf8") {
    return t === "utf8" || t === "utf-8"
      ? en.encode(e)
      : t === "ascii"
      ? tn(e)
      : Wr(t).decode(e);
  }
  rt.exports = sn;
});
var ot = o((B0, it) => {
  "use strict";
  function rn(e, t) {
    t || (t = e.reduce((n, i) => n + i.length, 0));
    let s = new Uint8Array(t), r = 0;
    for (let n of e) s.set(n, r), r += n.length;
    return s;
  }
  it.exports = rn;
});
var xe = o((R0, bt) => {
  "use strict";
  var at = T(),
    j = We(),
    { names: z } = et(),
    K = st(),
    nn = nt(),
    on = ot(),
    O = {};
  for (let e in z) {
    let t = e;
    O[z[t]] = t;
  }
  function bn(e) {
    if (!(e instanceof Uint8Array)) {
      throw new Error("must be passed a Uint8Array");
    }
    return K(e, "base16");
  }
  function an(e) {
    return nn(e, "base16");
  }
  function cn(e) {
    if (!(e instanceof Uint8Array)) {
      throw new Error("must be passed a Uint8Array");
    }
    return K(at.encode("base58btc", e)).slice(1);
  }
  function xn(e) {
    let t = e instanceof Uint8Array ? K(e) : e;
    return at.decode("z" + t);
  }
  function xt(e) {
    if (!(e instanceof Uint8Array)) {
      throw new Error("multihash must be a Uint8Array");
    }
    if (e.length < 2) {
      throw new Error("multihash too short. must be > 2 bytes.");
    }
    let t = j.decode(e);
    if (!ct(t)) {
      throw new Error(`multihash unknown function code: 0x${t.toString(16)}`);
    }
    e = e.slice(j.decode.bytes);
    let s = j.decode(e);
    if (s < 0) throw new Error(`multihash invalid length: ${s}`);
    if (e = e.slice(j.decode.bytes), e.length !== s) {
      throw new Error(`multihash length inconsistent: 0x${K(e, "base16")}`);
    }
    return { code: t, name: O[t], length: s, digest: e };
  }
  function ln(e, t, s) {
    if (!e || t === void 0) {
      throw new Error(
        "multihash encode requires at least two args: digest, code",
      );
    }
    let r = lt(t);
    if (!(e instanceof Uint8Array)) {
      throw new Error("digest should be a Uint8Array");
    }
    if (s == null && (s = e.length), s && e.length !== s) {
      throw new Error("digest length should be equal to specified length.");
    }
    let n = j.encode(r), i = j.encode(s);
    return on([n, i, e], n.length + i.length + e.length);
  }
  function lt(e) {
    let t = e;
    if (typeof e == "string") {
      if (z[e] === void 0) {
        throw new Error(`Unrecognized hash function named: ${e}`);
      }
      t = z[e];
    }
    if (typeof t != "number") {
      throw new Error(`Hash function code should be a number. Got: ${t}`);
    }
    if (O[t] === void 0 && !ce(t)) {
      throw new Error(`Unrecognized function code: ${t}`);
    }
    return t;
  }
  function ce(e) {
    return e > 0 && e < 16;
  }
  function ct(e) {
    return !!(ce(e) || O[e]);
  }
  function dt(e) {
    xt(e);
  }
  function dn(e) {
    return dt(e), e.subarray(0, 2);
  }
  bt.exports = {
    names: z,
    codes: Object.freeze(O),
    toHexString: bn,
    fromHexString: an,
    toB58String: cn,
    fromB58String: xn,
    decode: xt,
    encode: ln,
    coerceCode: lt,
    isAppCode: ce,
    validate: dt,
    prefix: dn,
    isValidCode: ct,
  };
});
var ft = o((z0, kt) => {
  kt.exports = le;
  var ut = 128, kn = 127, un = ~kn, fn = Math.pow(2, 31);
  function le(e, t, s) {
    if (
      Number.MAX_SAFE_INTEGER && e > Number.MAX_SAFE_INTEGER
    ) {
      throw le.bytes = 0, new RangeError("Could not encode varint");
    }
    t = t || [], s = s || 0;
    for (var r = s; e >= fn;) t[s++] = e & 255 | ut, e /= 128;
    for (; e & un;) t[s++] = e & 255 | ut, e >>>= 7;
    return t[s] = e | 0, le.bytes = s - r + 1, t;
  }
});
var mt = o((O0, ht) => {
  ht.exports = de;
  var hn = 128, pt = 127;
  function de(e, t) {
    var s = 0, t = t || 0, r = 0, n = t, i, b = e.length;
    do {
      if (n >= b || r > 49) {
        throw de.bytes = 0, new RangeError("Could not decode varint");
      }
      i = e[n++],
        s += r < 28 ? (i & pt) << r : (i & pt) * Math.pow(2, r),
        r += 7;
    } while (i >= hn);
    return de.bytes = n - t, s;
  }
});
var wt = o((F0, gt) => {
  var pn = Math.pow(2, 7),
    mn = Math.pow(2, 14),
    gn = Math.pow(2, 21),
    wn = Math.pow(2, 28),
    yn = Math.pow(2, 35),
    vn = Math.pow(2, 42),
    En = Math.pow(2, 49),
    An = Math.pow(2, 56),
    Cn = Math.pow(2, 63);
  gt.exports = function (e) {
    return e < pn
      ? 1
      : e < mn
      ? 2
      : e < gn
      ? 3
      : e < wn
      ? 4
      : e < yn
      ? 5
      : e < vn
      ? 6
      : e < En
      ? 7
      : e < An
      ? 8
      : e < Cn
      ? 9
      : 10;
  };
});
var ke = o((L0, yt) => {
  yt.exports = { encode: ft(), decode: mt(), encodingLength: wt() };
});
var U = o((V0, vt) => {
  "use strict";
  var qn = Object.freeze(
    {
      identity: 0,
      cidv1: 1,
      cidv2: 2,
      cidv3: 3,
      ip4: 4,
      tcp: 6,
      sha1: 17,
      "sha2-256": 18,
      "sha2-512": 19,
      "sha3-512": 20,
      "sha3-384": 21,
      "sha3-256": 22,
      "sha3-224": 23,
      "shake-128": 24,
      "shake-256": 25,
      "keccak-224": 26,
      "keccak-256": 27,
      "keccak-384": 28,
      "keccak-512": 29,
      blake3: 30,
      dccp: 33,
      "murmur3-128": 34,
      "murmur3-32": 35,
      ip6: 41,
      ip6zone: 42,
      path: 47,
      multicodec: 48,
      multihash: 49,
      multiaddr: 50,
      multibase: 51,
      dns: 53,
      dns4: 54,
      dns6: 55,
      dnsaddr: 56,
      protobuf: 80,
      cbor: 81,
      raw: 85,
      "dbl-sha2-256": 86,
      rlp: 96,
      bencode: 99,
      "dag-pb": 112,
      "dag-cbor": 113,
      "libp2p-key": 114,
      "git-raw": 120,
      "torrent-info": 123,
      "torrent-file": 124,
      "leofcoin-block": 129,
      "leofcoin-tx": 130,
      "leofcoin-pr": 131,
      sctp: 132,
      "dag-jose": 133,
      "dag-cose": 134,
      "eth-block": 144,
      "eth-block-list": 145,
      "eth-tx-trie": 146,
      "eth-tx": 147,
      "eth-tx-receipt-trie": 148,
      "eth-tx-receipt": 149,
      "eth-state-trie": 150,
      "eth-account-snapshot": 151,
      "eth-storage-trie": 152,
      "bitcoin-block": 176,
      "bitcoin-tx": 177,
      "bitcoin-witness-commitment": 178,
      "zcash-block": 192,
      "zcash-tx": 193,
      docid: 206,
      "stellar-block": 208,
      "stellar-tx": 209,
      md4: 212,
      md5: 213,
      bmt: 214,
      "decred-block": 224,
      "decred-tx": 225,
      "ipld-ns": 226,
      "ipfs-ns": 227,
      "swarm-ns": 228,
      "ipns-ns": 229,
      zeronet: 230,
      "secp256k1-pub": 231,
      "bls12_381-g1-pub": 234,
      "bls12_381-g2-pub": 235,
      "x25519-pub": 236,
      "ed25519-pub": 237,
      "bls12_381-g1g2-pub": 238,
      "dash-block": 240,
      "dash-tx": 241,
      "swarm-manifest": 250,
      "swarm-feed": 251,
      udp: 273,
      "p2p-webrtc-star": 275,
      "p2p-webrtc-direct": 276,
      "p2p-stardust": 277,
      "p2p-circuit": 290,
      "dag-json": 297,
      udt: 301,
      utp: 302,
      unix: 400,
      p2p: 421,
      ipfs: 421,
      https: 443,
      onion: 444,
      onion3: 445,
      garlic64: 446,
      garlic32: 447,
      tls: 448,
      quic: 460,
      ws: 477,
      wss: 478,
      "p2p-websocket-star": 479,
      http: 480,
      json: 512,
      messagepack: 513,
      "libp2p-peer-record": 769,
      "sha2-256-trunc254-padded": 4114,
      "ripemd-128": 4178,
      "ripemd-160": 4179,
      "ripemd-256": 4180,
      "ripemd-320": 4181,
      x11: 4352,
      "p256-pub": 4608,
      "p384-pub": 4609,
      "p521-pub": 4610,
      "ed448-pub": 4611,
      "x448-pub": 4612,
      "ed25519-priv": 4864,
      kangarootwelve: 7425,
      "sm3-256": 21325,
      "blake2b-8": 45569,
      "blake2b-16": 45570,
      "blake2b-24": 45571,
      "blake2b-32": 45572,
      "blake2b-40": 45573,
      "blake2b-48": 45574,
      "blake2b-56": 45575,
      "blake2b-64": 45576,
      "blake2b-72": 45577,
      "blake2b-80": 45578,
      "blake2b-88": 45579,
      "blake2b-96": 45580,
      "blake2b-104": 45581,
      "blake2b-112": 45582,
      "blake2b-120": 45583,
      "blake2b-128": 45584,
      "blake2b-136": 45585,
      "blake2b-144": 45586,
      "blake2b-152": 45587,
      "blake2b-160": 45588,
      "blake2b-168": 45589,
      "blake2b-176": 45590,
      "blake2b-184": 45591,
      "blake2b-192": 45592,
      "blake2b-200": 45593,
      "blake2b-208": 45594,
      "blake2b-216": 45595,
      "blake2b-224": 45596,
      "blake2b-232": 45597,
      "blake2b-240": 45598,
      "blake2b-248": 45599,
      "blake2b-256": 45600,
      "blake2b-264": 45601,
      "blake2b-272": 45602,
      "blake2b-280": 45603,
      "blake2b-288": 45604,
      "blake2b-296": 45605,
      "blake2b-304": 45606,
      "blake2b-312": 45607,
      "blake2b-320": 45608,
      "blake2b-328": 45609,
      "blake2b-336": 45610,
      "blake2b-344": 45611,
      "blake2b-352": 45612,
      "blake2b-360": 45613,
      "blake2b-368": 45614,
      "blake2b-376": 45615,
      "blake2b-384": 45616,
      "blake2b-392": 45617,
      "blake2b-400": 45618,
      "blake2b-408": 45619,
      "blake2b-416": 45620,
      "blake2b-424": 45621,
      "blake2b-432": 45622,
      "blake2b-440": 45623,
      "blake2b-448": 45624,
      "blake2b-456": 45625,
      "blake2b-464": 45626,
      "blake2b-472": 45627,
      "blake2b-480": 45628,
      "blake2b-488": 45629,
      "blake2b-496": 45630,
      "blake2b-504": 45631,
      "blake2b-512": 45632,
      "blake2s-8": 45633,
      "blake2s-16": 45634,
      "blake2s-24": 45635,
      "blake2s-32": 45636,
      "blake2s-40": 45637,
      "blake2s-48": 45638,
      "blake2s-56": 45639,
      "blake2s-64": 45640,
      "blake2s-72": 45641,
      "blake2s-80": 45642,
      "blake2s-88": 45643,
      "blake2s-96": 45644,
      "blake2s-104": 45645,
      "blake2s-112": 45646,
      "blake2s-120": 45647,
      "blake2s-128": 45648,
      "blake2s-136": 45649,
      "blake2s-144": 45650,
      "blake2s-152": 45651,
      "blake2s-160": 45652,
      "blake2s-168": 45653,
      "blake2s-176": 45654,
      "blake2s-184": 45655,
      "blake2s-192": 45656,
      "blake2s-200": 45657,
      "blake2s-208": 45658,
      "blake2s-216": 45659,
      "blake2s-224": 45660,
      "blake2s-232": 45661,
      "blake2s-240": 45662,
      "blake2s-248": 45663,
      "blake2s-256": 45664,
      "skein256-8": 45825,
      "skein256-16": 45826,
      "skein256-24": 45827,
      "skein256-32": 45828,
      "skein256-40": 45829,
      "skein256-48": 45830,
      "skein256-56": 45831,
      "skein256-64": 45832,
      "skein256-72": 45833,
      "skein256-80": 45834,
      "skein256-88": 45835,
      "skein256-96": 45836,
      "skein256-104": 45837,
      "skein256-112": 45838,
      "skein256-120": 45839,
      "skein256-128": 45840,
      "skein256-136": 45841,
      "skein256-144": 45842,
      "skein256-152": 45843,
      "skein256-160": 45844,
      "skein256-168": 45845,
      "skein256-176": 45846,
      "skein256-184": 45847,
      "skein256-192": 45848,
      "skein256-200": 45849,
      "skein256-208": 45850,
      "skein256-216": 45851,
      "skein256-224": 45852,
      "skein256-232": 45853,
      "skein256-240": 45854,
      "skein256-248": 45855,
      "skein256-256": 45856,
      "skein512-8": 45857,
      "skein512-16": 45858,
      "skein512-24": 45859,
      "skein512-32": 45860,
      "skein512-40": 45861,
      "skein512-48": 45862,
      "skein512-56": 45863,
      "skein512-64": 45864,
      "skein512-72": 45865,
      "skein512-80": 45866,
      "skein512-88": 45867,
      "skein512-96": 45868,
      "skein512-104": 45869,
      "skein512-112": 45870,
      "skein512-120": 45871,
      "skein512-128": 45872,
      "skein512-136": 45873,
      "skein512-144": 45874,
      "skein512-152": 45875,
      "skein512-160": 45876,
      "skein512-168": 45877,
      "skein512-176": 45878,
      "skein512-184": 45879,
      "skein512-192": 45880,
      "skein512-200": 45881,
      "skein512-208": 45882,
      "skein512-216": 45883,
      "skein512-224": 45884,
      "skein512-232": 45885,
      "skein512-240": 45886,
      "skein512-248": 45887,
      "skein512-256": 45888,
      "skein512-264": 45889,
      "skein512-272": 45890,
      "skein512-280": 45891,
      "skein512-288": 45892,
      "skein512-296": 45893,
      "skein512-304": 45894,
      "skein512-312": 45895,
      "skein512-320": 45896,
      "skein512-328": 45897,
      "skein512-336": 45898,
      "skein512-344": 45899,
      "skein512-352": 45900,
      "skein512-360": 45901,
      "skein512-368": 45902,
      "skein512-376": 45903,
      "skein512-384": 45904,
      "skein512-392": 45905,
      "skein512-400": 45906,
      "skein512-408": 45907,
      "skein512-416": 45908,
      "skein512-424": 45909,
      "skein512-432": 45910,
      "skein512-440": 45911,
      "skein512-448": 45912,
      "skein512-456": 45913,
      "skein512-464": 45914,
      "skein512-472": 45915,
      "skein512-480": 45916,
      "skein512-488": 45917,
      "skein512-496": 45918,
      "skein512-504": 45919,
      "skein512-512": 45920,
      "skein1024-8": 45921,
      "skein1024-16": 45922,
      "skein1024-24": 45923,
      "skein1024-32": 45924,
      "skein1024-40": 45925,
      "skein1024-48": 45926,
      "skein1024-56": 45927,
      "skein1024-64": 45928,
      "skein1024-72": 45929,
      "skein1024-80": 45930,
      "skein1024-88": 45931,
      "skein1024-96": 45932,
      "skein1024-104": 45933,
      "skein1024-112": 45934,
      "skein1024-120": 45935,
      "skein1024-128": 45936,
      "skein1024-136": 45937,
      "skein1024-144": 45938,
      "skein1024-152": 45939,
      "skein1024-160": 45940,
      "skein1024-168": 45941,
      "skein1024-176": 45942,
      "skein1024-184": 45943,
      "skein1024-192": 45944,
      "skein1024-200": 45945,
      "skein1024-208": 45946,
      "skein1024-216": 45947,
      "skein1024-224": 45948,
      "skein1024-232": 45949,
      "skein1024-240": 45950,
      "skein1024-248": 45951,
      "skein1024-256": 45952,
      "skein1024-264": 45953,
      "skein1024-272": 45954,
      "skein1024-280": 45955,
      "skein1024-288": 45956,
      "skein1024-296": 45957,
      "skein1024-304": 45958,
      "skein1024-312": 45959,
      "skein1024-320": 45960,
      "skein1024-328": 45961,
      "skein1024-336": 45962,
      "skein1024-344": 45963,
      "skein1024-352": 45964,
      "skein1024-360": 45965,
      "skein1024-368": 45966,
      "skein1024-376": 45967,
      "skein1024-384": 45968,
      "skein1024-392": 45969,
      "skein1024-400": 45970,
      "skein1024-408": 45971,
      "skein1024-416": 45972,
      "skein1024-424": 45973,
      "skein1024-432": 45974,
      "skein1024-440": 45975,
      "skein1024-448": 45976,
      "skein1024-456": 45977,
      "skein1024-464": 45978,
      "skein1024-472": 45979,
      "skein1024-480": 45980,
      "skein1024-488": 45981,
      "skein1024-496": 45982,
      "skein1024-504": 45983,
      "skein1024-512": 45984,
      "skein1024-520": 45985,
      "skein1024-528": 45986,
      "skein1024-536": 45987,
      "skein1024-544": 45988,
      "skein1024-552": 45989,
      "skein1024-560": 45990,
      "skein1024-568": 45991,
      "skein1024-576": 45992,
      "skein1024-584": 45993,
      "skein1024-592": 45994,
      "skein1024-600": 45995,
      "skein1024-608": 45996,
      "skein1024-616": 45997,
      "skein1024-624": 45998,
      "skein1024-632": 45999,
      "skein1024-640": 46e3,
      "skein1024-648": 46001,
      "skein1024-656": 46002,
      "skein1024-664": 46003,
      "skein1024-672": 46004,
      "skein1024-680": 46005,
      "skein1024-688": 46006,
      "skein1024-696": 46007,
      "skein1024-704": 46008,
      "skein1024-712": 46009,
      "skein1024-720": 46010,
      "skein1024-728": 46011,
      "skein1024-736": 46012,
      "skein1024-744": 46013,
      "skein1024-752": 46014,
      "skein1024-760": 46015,
      "skein1024-768": 46016,
      "skein1024-776": 46017,
      "skein1024-784": 46018,
      "skein1024-792": 46019,
      "skein1024-800": 46020,
      "skein1024-808": 46021,
      "skein1024-816": 46022,
      "skein1024-824": 46023,
      "skein1024-832": 46024,
      "skein1024-840": 46025,
      "skein1024-848": 46026,
      "skein1024-856": 46027,
      "skein1024-864": 46028,
      "skein1024-872": 46029,
      "skein1024-880": 46030,
      "skein1024-888": 46031,
      "skein1024-896": 46032,
      "skein1024-904": 46033,
      "skein1024-912": 46034,
      "skein1024-920": 46035,
      "skein1024-928": 46036,
      "skein1024-936": 46037,
      "skein1024-944": 46038,
      "skein1024-952": 46039,
      "skein1024-960": 46040,
      "skein1024-968": 46041,
      "skein1024-976": 46042,
      "skein1024-984": 46043,
      "skein1024-992": 46044,
      "skein1024-1000": 46045,
      "skein1024-1008": 46046,
      "skein1024-1016": 46047,
      "skein1024-1024": 46048,
      "poseidon-bls12_381-a2-fc1": 46081,
      "poseidon-bls12_381-a2-fc1-sc": 46082,
      "zeroxcert-imprint-256": 52753,
      "fil-commitment-unsealed": 61697,
      "fil-commitment-sealed": 61698,
      "holochain-adr-v0": 8417572,
      "holochain-adr-v1": 8483108,
      "holochain-key-v0": 9728292,
      "holochain-key-v1": 9793828,
      "holochain-sig-v0": 10645796,
      "holochain-sig-v1": 10711332,
      "skynet-ns": 11639056,
    },
  );
  vt.exports = { baseTable: qn };
});
var qt = o((_0, Et) => {
  "use strict";
  var { baseTable: At } = U(), Ct = new Map();
  for (let e in At) {
    let t = At[e];
    Ct.set(t, e);
  }
  Et.exports = Object.freeze(Ct);
});
var St = o((G0, It) => {
  "use strict";
  var { names: In } = P(), { TextDecoder: Sn } = q(), Dn = new Sn("utf8");
  function Tn(e) {
    let t = "";
    for (let s = 0; s < e.length; s++) t += String.fromCharCode(e[s]);
    return t;
  }
  function jn(e, t = "utf8") {
    if (t === "utf8" || t === "utf-8") return Dn.decode(e);
    if (t === "ascii") return Tn(e);
    let s = In[t];
    if (!s) throw new Error("Unknown base");
    return s.encode(e);
  }
  It.exports = jn;
});
var Tt = o((Q0, Dt) => {
  "use strict";
  var { names: Un } = P(), { TextEncoder: Mn } = q(), Nn = new Mn();
  function Bn(e) {
    let t = new Uint8Array(e.length);
    for (let s = 0; s < e.length; s++) t[s] = e.charCodeAt(s);
    return t;
  }
  function Rn(e, t = "utf8") {
    if (t === "utf8" || t === "utf-8") return Nn.encode(e);
    if (t === "ascii") return Bn(e);
    let s = Un[t];
    if (!s) throw new Error("Unknown base");
    return s.decode(e);
  }
  Dt.exports = Rn;
});
var ue = o((J0, jt) => {
  "use strict";
  var Ut = ke(), zn = St(), On = Tt();
  jt.exports = {
    numberToUint8Array: Fn,
    uint8ArrayToNumber: Mt,
    varintUint8ArrayEncode: Ln,
    varintEncode: Vn,
  };
  function Mt(e) {
    return parseInt(zn(e, "base16"), 16);
  }
  function Fn(e) {
    let t = e.toString(16);
    return t.length % 2 == 1 && (t = "0" + t), On(t, "base16");
  }
  function Ln(e) {
    return Uint8Array.from(Ut.encode(Mt(e)));
  }
  function Vn(e) {
    return Uint8Array.from(Ut.encode(e));
  }
});
var zt = o((P0, Nt) => {
  "use strict";
  var { baseTable: Bt } = U(), _n = ue().varintEncode, Rt = {};
  for (let e in Bt) {
    let t = Bt[e];
    Rt[e] = _n(t);
  }
  Nt.exports = Object.freeze(Rt);
});
var Ft = o((X0, Ot) => {
  "use strict";
  function Gn(e, t) {
    t || (t = e.reduce((n, i) => n + i.length, 0));
    let s = new Uint8Array(t), r = 0;
    for (let n of e) s.set(n, r), r += n.length;
    return s;
  }
  Ot.exports = Gn;
});
var _t = o((K0, Lt) => {
  "use strict";
  var { baseTable: Qn } = U(), Vt = {};
  for (let [e, t] of Object.entries(Qn)) {
    let s = e.toUpperCase().replace(/-/g, "_");
    Vt[s] = t;
  }
  Lt.exports = Object.freeze(Vt);
});
var Qt = o(($0, Gt) => {
  "use strict";
  var { baseTable: Jn } = U(), fe = {};
  for (let [e, t] of Object.entries(Jn)) fe[t] === void 0 && (fe[t] = e);
  Gt.exports = Object.freeze(fe);
});
var Xt = o((H0, Jt) => {
  "use strict";
  var M = ke(), Pt = qt(), $ = zt(), Pn = ue(), Xn = Ft();
  function Kn(e, t) {
    let s;
    if (e instanceof Uint8Array) s = Pn.varintUint8ArrayEncode(e);
    else if ($[e]) s = $[e];
    else throw new Error("multicodec not recognized");
    return Xn([s, t], s.length + t.length);
  }
  function $n(e) {
    return M.decode(e), e.slice(M.decode.bytes);
  }
  function Hn(e) {
    let t = M.decode(e), s = Pt.get(t);
    if (s === void 0) throw new Error(`Code ${t} not found`);
    return s;
  }
  function Zn(e) {
    return Pt.get(e);
  }
  function Wn(e) {
    let t = $[e];
    if (t === void 0) throw new Error("Codec `" + e + "` not found");
    return M.decode(t);
  }
  function Yn(e) {
    return M.decode(e);
  }
  function ei(e) {
    let t = $[e];
    if (t === void 0) throw new Error("Codec `" + e + "` not found");
    return t;
  }
  function ti(e) {
    return M.encode(e);
  }
  var si = _t(), ri = Qt();
  Jt.exports = {
    addPrefix: Kn,
    rmPrefix: $n,
    getCodec: Hn,
    getName: Zn,
    getNumber: Wn,
    getCode: Yn,
    getCodeVarint: ei,
    getVarint: ti,
    print: ri,
    ...si,
  };
});
var $t = o((Z0, Kt) => {
  "use strict";
  var ni = xe(),
    ii = {
      checkCIDComponents: function (e) {
        if (e == null) return "null values are not valid CIDs";
        if (
          !(e.version === 0 || e.version === 1)
        ) {
          return "Invalid version, must be a number equal to 1 or 0";
        }
        if (typeof e.codec != "string") return "codec must be string";
        if (e.version === 0) {
          if (e.codec !== "dag-pb") return "codec must be 'dag-pb' for CIDv0";
          if (
            e.multibaseName !== "base58btc"
          ) {
            return "multibaseName must be 'base58btc' for CIDv0";
          }
        }
        if (
          !(e.multihash instanceof Uint8Array)
        ) {
          return "multihash must be a Uint8Array";
        }
        try {
          ni.validate(e.multihash);
        } catch (t) {
          let s = t.message;
          return s || (s = "Multihash validation failed"), s;
        }
      },
    };
  Kt.exports = ii;
});
var Zt = o((W0, Ht) => {
  "use strict";
  function oi(e, t) {
    t || (t = e.reduce((n, i) => n + i.length, 0));
    let s = new Uint8Array(t), r = 0;
    for (let n of e) s.set(n, r), r += n.length;
    return s;
  }
  Ht.exports = oi;
});
var Yt = o((Y0, Wt) => {
  "use strict";
  var { encoding: bi } = T(), { TextDecoder: ai } = q(), ci = new ai("utf8");
  function xi(e) {
    let t = "";
    for (let s = 0; s < e.length; s++) t += String.fromCharCode(e[s]);
    return t;
  }
  function li(e, t = "utf8") {
    return t === "utf8" || t === "utf-8"
      ? ci.decode(e)
      : t === "ascii"
      ? xi(e)
      : bi(t).encode(e);
  }
  Wt.exports = li;
});
var ts = o((eo, es) => {
  "use strict";
  function di(e, t) {
    if (e === t) return !0;
    if (e.byteLength !== t.byteLength) return !1;
    for (let s = 0; s < e.byteLength; s++) if (e[s] !== t[s]) return !1;
    return !0;
  }
  es.exports = di;
});
var W = o((to, ss) => {
  "use strict";
  var H = xe(),
    he = T(),
    N = Xt(),
    { baseTable: Z } = U(),
    ki = $t(),
    rs = Zt(),
    ui = Yt(),
    fi = ts(),
    hi = Object.keys(Z).reduce((e, t) => (e[Z[t]] = t, e), {}),
    ns = Symbol.for("@ipld/js-cid/CID"),
    p = class {
      constructor(t, s, r, n) {
        if (
          this.version,
            this.codec,
            this.multihash,
            Object.defineProperty(this, ns, { value: !0 }),
            p.isCID(t)
        ) {
          let i = t;
          this.version = i.version,
            this.codec = i.codec,
            this.multihash = i.multihash,
            this.multibaseName = i.multibaseName ||
              (i.version === 0 ? "base58btc" : "base32");
          return;
        }
        if (typeof t == "string") {
          let i = he.isEncoded(t);
          if (i) {
            let b = he.decode(t);
            this.version = parseInt(b[0].toString(), 16),
              this.codec = N.getCodec(b.slice(1)),
              this.multihash = N.rmPrefix(b.slice(1)),
              this.multibaseName = i;
          } else {
            this.version = 0,
              this.codec = "dag-pb",
              this.multihash = H.fromB58String(t),
              this.multibaseName = "base58btc";
          }
          p.validateCID(this),
            Object.defineProperty(this, "string", { value: t });
          return;
        }
        if (t instanceof Uint8Array) {
          let i = parseInt(t[0].toString(), 16);
          if (i === 1) {
            let b = t;
            this.version = i,
              this.codec = N.getCodec(b.slice(1)),
              this.multihash = N.rmPrefix(b.slice(1)),
              this.multibaseName = "base32";
          } else {
            this.version = 0,
              this.codec = "dag-pb",
              this.multihash = t,
              this.multibaseName = "base58btc";
          }
          p.validateCID(this);
          return;
        }
        this.version = t,
          typeof s == "number" && (s = hi[s]),
          this.codec = s,
          this.multihash = r,
          this.multibaseName = n || (t === 0 ? "base58btc" : "base32"),
          p.validateCID(this);
      }
      get bytes() {
        let t = this._bytes;
        if (!t) {
          if (this.version === 0) t = this.multihash;
          else if (this.version === 1) {
            let s = N.getCodeVarint(this.codec);
            t = rs(
              [[1], s, this.multihash],
              1 + s.byteLength + this.multihash.byteLength,
            );
          } else throw new Error("unsupported version");
          Object.defineProperty(this, "_bytes", { value: t });
        }
        return t;
      }
      get prefix() {
        let t = N.getCodeVarint(this.codec), s = H.prefix(this.multihash);
        return rs([[this.version], t, s], 1 + t.byteLength + s.byteLength);
      }
      get code() {
        return Z[this.codec];
      }
      toV0() {
        if (this.codec !== "dag-pb") {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        let { name: t, length: s } = H.decode(this.multihash);
        if (t !== "sha2-256") {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        if (s !== 32) {
          throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");
        }
        return new p(0, this.codec, this.multihash);
      }
      toV1() {
        return new p(1, this.codec, this.multihash);
      }
      toBaseEncodedString(t = this.multibaseName) {
        if (
          this.string && this.string.length !== 0 && t === this.multibaseName
        ) {
          return this.string;
        }
        let s;
        if (this.version === 0) {
          if (t !== "base58btc") {
            throw new Error(
              "not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()",
            );
          }
          s = H.toB58String(this.multihash);
        } else if (this.version === 1) s = ui(he.encode(t, this.bytes));
        else throw new Error("unsupported version");
        return t === this.multibaseName &&
          Object.defineProperty(this, "string", { value: s }),
          s;
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
      }
      toString(t) {
        return this.toBaseEncodedString(t);
      }
      toJSON() {
        return {
          codec: this.codec,
          version: this.version,
          hash: this.multihash,
        };
      }
      equals(t) {
        return this.codec === t.codec && this.version === t.version &&
          fi(this.multihash, t.multihash);
      }
      static validateCID(t) {
        let s = ki.checkCIDComponents(t);
        if (s) throw new Error(s);
      }
      static isCID(t) {
        return t instanceof p || Boolean(t && t[ns]);
      }
    };
  p.codecs = Z;
  ss.exports = p;
});
var Y = o((pe) => {
  "use strict";
  var pi = (e) => {
    let { name: t, message: s, stack: r, code: n, detail: i } = e;
    return { name: t, message: s, stack: r, code: n, detail: i };
  };
  pe.encodeError = pi;
  var gi = (e) => {
    if (e instanceof Error) return e;
    {
      let { name: t, message: s, stack: r, code: n } = e;
      return Object.assign(mi(t, s), { name: t, stack: r, code: n });
    }
  };
  pe.decodeError = gi;
  var mi = (e, t) => {
    switch (e) {
      case "RangeError":
        return new RangeError(t);
      case "ReferenceError":
        return ReferenceError(t);
      case "SyntaxError":
        return new SyntaxError(t);
      case "TypeError":
        return new TypeError(t);
      case "URIError":
        return new URIError(t);
      default:
        return new Error(t);
    }
  };
});
var is = o((ee) => {
  "use strict";
  ee.TimeoutError = class extends Error {
    get name() {
      return this.constructor.name;
    }
  };
  ee.AbortError = class extends Error {
    get name() {
      return this.constructor.name;
    }
  };
  ee.DisconnectError = class extends Error {
    get name() {
      return this.constructor.name;
    }
  };
});
var bs = o((bo, os) => {
  "use strict";
  var { decodeError: wi } = Y(),
    { DisconnectError: yi, TimeoutError: vi, AbortError: Ei } = is();
  os.exports = class te {
    constructor(t) {
      this.port = null,
        this.id = Math.random().toString(32).slice(2),
        this.nextID = 0,
        this.queries = Object.create(null),
        t && this.connect(t);
    }
    execute(t) {
      let s = `${this.id}@${this.nextID++}`;
      return this.queries[s] = t,
        t.timeout > 0 && t.timeout < Infinity &&
        (t.timerID = setTimeout(te.timeout, t.timeout, this, s)),
        t.signal &&
        t.signal.addEventListener("abort", () => this.abort(s), { once: !0 }),
        this.port && te.postQuery(this.port, s, t),
        t.result;
    }
    connect(t) {
      if (this.port) throw new Error("Transport is already open");
      this.port = t,
        this.port.addEventListener("message", this),
        this.port.start();
      for (let [s, r] of Object.entries(this.queries)) te.postQuery(t, s, r);
    }
    disconnect() {
      let t = new yi();
      for (let [s, r] of Object.entries(this.queries)) r.fail(t), this.abort(s);
      this.port &&
        (this.port.removeEventListener("message", this), this.port.close());
    }
    static timeout(t, s) {
      let { queries: r } = t, n = r[s];
      n &&
        (delete r[s],
          n.fail(new vi("request timed out")),
          t.port && t.port.postMessage({ type: "abort", id: s }));
    }
    abort(t) {
      let { queries: s } = this, r = s[t];
      r &&
        (delete s[t],
          r.fail(new Ei()),
          this.port && this.port.postMessage({ type: "abort", id: t }),
          r.timerID != null && clearTimeout(r.timerID));
    }
    static postQuery(t, s, r) {
      t.postMessage(
        {
          type: "query",
          namespace: r.namespace,
          method: r.method,
          id: s,
          input: r.toJSON(),
        },
        [...new Set(r.transfer() || [])],
      );
    }
    handleEvent(t) {
      let { id: s, result: r } = t.data, n = this.queries[s];
      n &&
        (delete this.queries[s],
          r.ok ? n.succeed(r.value) : n.fail(wi(r.error)),
          n.timerID != null && clearTimeout(n.timerID));
    }
  };
});
var cs = o((co, as) => {
  "use strict";
  as.exports = class {
    constructor(t, s, r) {
      this.result = new Promise((n, i) => {
        this.succeed = n,
          this.fail = i,
          this.signal = r.signal,
          this.input = r,
          this.namespace = t,
          this.method = s,
          this.timeout = r.timeout == null ? Infinity : r.timeout,
          this.timerID = null;
      });
    }
    toJSON() {
      return this.input;
    }
    transfer() {
      return this.input.transfer;
    }
  };
});
var ls = o((lo, xs) => {
  "use strict";
  var Ai = cs();
  xs.exports = class {
    constructor(t, s, r) {
      this.transport = r;
      let n = this;
      for (let i of s) {
        n[i] = (b) => this.transport.execute(new Ai(t, i.toString(), b));
      }
    }
  };
});
var F = o((uo, ds) => {
  "use strict";
  var Ci = ls();
  ds.exports = class {
    constructor(t, s, r) {
      this.remote = new Ci(t, s, r);
    }
  };
});
var S = o((se) => {
  "use strict";
  var ks = W(), qi = (e, t) => (t && t.push(e.multihash.buffer), e);
  se.encodeCID = qi;
  var Ii = (e) => {
    let t = e;
    return Object.setPrototypeOf(t.multihash, Uint8Array.prototype),
      Object.setPrototypeOf(t, ks.prototype),
      Object.defineProperty(t, Symbol.for("@ipld/js-cid/CID"), { value: !0 }),
      t;
  };
  se.decodeCID = Ii;
  se.CID = ks;
});
var fs = o((ho, us) => {
  us.exports = {
    name: "ipld-block",
    version: "0.11.0",
    description: "JavaScript Implementation of IPLD Block",
    leadMaintainer: "Volker Mische <volker.mische@gmail.com>",
    main: "src/index.js",
    scripts: {
      lint: "aegir lint",
      check: "tsc --noEmit --noErrorTruncation",
      build: "npm run build:js && npm run build:types",
      "build:js": "aegir build",
      "build:types": "tsc --emitDeclarationOnly --declarationDir dist",
      test: "aegir test",
      "test:node": "aegir test --target node",
      "test:browser": "aegir test --target browser",
      release: "aegir release --docs",
      "release-minor": "aegir release --type minor --docs",
      "release-major": "aegir release --type major --docs",
      coverage: "aegir coverage",
      "coverage-publish": "aegir coverage --provider coveralls",
      docs: "aegir docs",
      prepare: "npm run build:types",
    },
    "pre-push": ["lint", "test"],
    repository: {
      type: "git",
      url: "git+https://github.com/ipld/js-ipld-block.git",
    },
    keywords: ["IPLD"],
    license: "MIT",
    bugs: { url: "https://github.com/ipld/js-ipld-block/issues" },
    homepage: "https://github.com/ipld/js-ipld-block#readme",
    devDependencies: {
      aegir: "^27.0.0",
      uint8arrays: "^1.0.0",
      typescript: "^4.0.3",
    },
    dependencies: { cids: "^1.0.0" },
    engines: { node: ">=6.0.0", npm: ">=3.0.0" },
    typesVersions: { "*": { "*": ["dist/*"] } },
    contributors: [
      "David Dias <daviddias.p@gmail.com>",
      "Volker Mische <volker.mische@gmail.com>",
      "Friedel Ziegelmayer <dignifiedquire@gmail.com>",
      "Irakli Gozalishvili <contact@gozala.io>",
      "achingbrain <alex@achingbrain.net>",
      "\u1D20\u026A\u1D04\u1D1B\u1D0F\u0280 \u0299\u1D0A\u1D07\u029F\u1D0B\u029C\u1D0F\u029F\u1D0D <victorbjelkholm@gmail.com>",
      "Alan Shaw <alan.shaw@protocol.ai>",
      "Charlie <the_charlie_daly@hotmail.co.uk>",
      "Diogo Silva <fsdiogo@gmail.com>",
      "Hugo Dias <hugomrdias@gmail.com>",
      "Mikeal Rogers <mikeal.rogers@gmail.com>",
      "Richard Littauer <richard.littauer@gmail.com>",
      "Richard Schneider <makaretu@gmail.com>",
      "Xmader <xmader@outlook.com>",
    ],
  };
});
var ys = o((po, hs) => {
  "use strict";
  var Si = W(),
    { version: Di } = fs(),
    ps = Symbol.for("@ipld/js-ipld-block/block"),
    ms = { writable: !1, configurable: !1, enumerable: !0 },
    gs = class {
      constructor(t, s) {
        if (!t || !(t instanceof Uint8Array)) {
          throw new Error("first argument  must be a Uint8Array");
        }
        if (!s || !Si.isCID(s)) {
          throw new Error("second argument must be a CID");
        }
        this.data = t,
          this.cid = s,
          Object.defineProperties(this, { data: ms, cid: ms });
      }
      get _data() {
        return ji(), this.data;
      }
      get _cid() {
        return Ti(), this.cid;
      }
      get [Symbol.toStringTag]() {
        return "Block";
      }
      get [ps]() {
        return !0;
      }
      static isBlock(t) {
        return Boolean(t && t[ps]);
      }
    },
    ws = (e, t) => {
      let s = !1;
      return () => {
        if (e.test(Di)) s || (s = !0, console.warn(t));
        else throw new Error(t);
      };
    },
    Ti = ws(
      /^0\.10|^0\.11/,
      "block._cid is deprecated and will be removed in 0.12 release. Please use block.cid instead",
    ),
    ji = ws(
      /^0\.10|^0.11/,
      "block._data is deprecated and will be removed in 0.12 release. Please use block.data instead",
    );
  hs.exports = gs;
});
var Es = o((re) => {
  "use strict";
  var { encodeCID: Ui, decodeCID: Mi } = S(),
    vs = ys(),
    Ni = (
      { cid: e, data: t },
      s,
    ) => (s && s.push(t.buffer), { cid: Ui(e, s), data: t });
  re.encodeBlock = Ni;
  var Bi = ({ cid: e, data: t }) => new vs(t, Mi(e));
  re.decodeBlock = Bi;
  re.Block = vs;
});
var Ss = o((go, As) => {
  "use strict";
  var Ri = F(),
    { encodeCID: L, decodeCID: Cs } = S(),
    { decodeError: zi } = Y(),
    { encodeBlock: Oi, decodeBlock: qs } = Es(),
    Is = class extends Ri {
      constructor(t) {
        super("block", ["put", "get", "rm", "stat"], t);
      }
      async get(t, s = {}) {
        let { transfer: r } = s,
          { block: n } = await this.remote.get({ ...s, cid: L(t, r) });
        return qs(n);
      }
      async put(t, s = {}) {
        let { transfer: r } = s;
        delete s.progress;
        let n = await this.remote.put({
          ...s,
          cid: s.cid == null ? void 0 : L(s.cid, r),
          block: t instanceof Uint8Array ? t : Oi(t, r),
        });
        return qs(n.block);
      }
      async *rm(t, s = {}) {
        let { transfer: r } = s;
        yield* (await this.remote.rm(
          { ...s, cids: Array.isArray(t) ? t.map((i) => L(i, r)) : [L(t, r)] },
        )).map(Fi);
      }
      async stat(t, s = {}) {
        let { transfer: r } = s,
          n = await this.remote.stat({ ...s, cid: L(t, r) });
        return { ...n, cid: Cs(n.cid) };
      }
    },
    Fi = (e) => {
      let t = Cs(e.cid);
      return e.error ? { cid: t, error: zi(e.error) } : { cid: t };
    };
  As.exports = Is;
});
var Ds = o((me) => {
  "use strict";
  var { encodeCID: Li, decodeCID: Vi, CID: _i } = S(),
    Gi = ({ dagNode: e, cids: t }) => {
      for (let s of t) Vi(s);
      return e;
    };
  me.decodeNode = Gi;
  var Qi = (e, t) => {
    let s = [];
    return ge(e, s, t), { dagNode: e, cids: s };
  };
  me.encodeNode = Qi;
  var ge = (e, t, s) => {
    if (e != null && typeof e == "object") {
      if (_i.isCID(e)) t.push(e), Li(e, s);
      else if (e instanceof ArrayBuffer) s && s.push(e);
      else if (ArrayBuffer.isView(e)) s && s.push(e.buffer);
      else if (Array.isArray(e)) for (let r of e) ge(r, t, s);
      else for (let r of Object.values(e)) ge(r, t, s);
    }
  };
});
var Ms = o((yo, Ts) => {
  "use strict";
  var Ji = F(),
    { encodeCID: ne, decodeCID: js } = S(),
    { encodeNode: Pi, decodeNode: Xi } = Ds(),
    Us = class extends Ji {
      constructor(t) {
        super("dag", ["put", "get", "resolve", "tree"], t);
      }
      async put(t, s = {}) {
        let { cid: r } = s,
          n = await this.remote.put({
            ...s,
            cid: r != null ? ne(r) : void 0,
            dagNode: Pi(t, s.transfer),
          });
        return js(n);
      }
      async get(t, s = {}) {
        let { value: r, remainderPath: n } = await this.remote.get(
          { ...s, cid: ne(t, s.transfer) },
        );
        return { value: Xi(r), remainderPath: n };
      }
      async resolve(t, s = {}) {
        let { cid: r, remainderPath: n } = await this.remote.resolve(
          { ...s, cid: Ki(t, s.transfer) },
        );
        return { cid: js(r), remainderPath: n };
      }
      async *tree(t, s = {}) {
        yield* await this.remote.tree({ ...s, cid: ne(t, s.transfer) });
      }
    },
    Ki = (e, t) => typeof e == "string" ? e : ne(e, t);
  Ts.exports = Us;
});
var Ns = o((V) => {
  "use strict";
  var { encodeError: $i, decodeError: Hi } = Y(),
    Zi = async function* ({ port: e }, t) {
      let s = (b) => {},
        r = () => new Promise((b) => s = b),
        n = () => (e.postMessage({ method: "next" }), r());
      e.onmessage = (b) => s(b.data);
      let i = !1;
      try {
        for (; !i;) {
          let { done: b, value: a, error: l } = await n();
          if (i = b, l != null) throw Hi(l);
          a != null && (yield t(a));
        }
      } finally {
        i || e.postMessage({ method: "return" }), e.close();
      }
    };
  V.decodeIterable = Zi;
  var Yi = (e, t, s) => {
    let { port1: r, port2: n } = new MessageChannel(), i = [], b = Wi(e);
    return r.onmessage = async ({ data: { method: a } }) => {
      switch (a) {
        case "next": {
          try {
            let { done: l, value: k } = await b.next();
            l
              ? (r.postMessage({ type: "next", done: !0 }), r.close())
              : (i.length = 0,
                r.postMessage({ type: "next", done: !1, value: t(k, i) }, i));
          } catch (l) {
            r.postMessage({ type: "throw", error: $i(l) }), r.close();
          }
          break;
        }
        case "return": {
          r.close(), b.return && b.return();
          break;
        }
        default:
          break;
      }
    },
      r.start(),
      s.push(n),
      { type: "RemoteIterable", port: n };
  };
  V.encodeIterable = Yi;
  var Wi = (e) => {
      if (e != null) {
        if (
          typeof e[Symbol.asyncIterator] == "function"
        ) {
          return e[Symbol.asyncIterator]();
        }
        if (typeof e[Symbol.iterator] == "function") {
          return e[Symbol.iterator]();
        }
      }
      throw TypeError("Value must be async or sync iterable");
    },
    e0 = (e, t) => {
      let { port1: s, port2: r } = new MessageChannel();
      return s.onmessage = ({ data: n }) => e.apply(null, n),
        t.push(r),
        { type: "RemoteCallback", port: r };
    };
  V.encodeCallback = e0;
  var t0 = ({ port: e }) =>
    (s, r = []) => {
      e.postMessage(s, [...new Set(r)]);
    };
  V.decodeCallback = t0;
});
var Rs = o((Eo, Bs) => {
  "use strict";
  async function* s0(e, t = {}) {
    let s = e.getReader();
    try {
      for (;;) {
        let r = await s.read();
        if (r.done) return;
        yield r.value;
      }
    } finally {
      t.preventCancel !== !0 && s.cancel(), s.releaseLock();
    }
  }
  Bs.exports = s0;
});
var Qs = o((Ao, zs) => {
  "use strict";
  var r0 = F(),
    { encodeCID: Os, decodeCID: Fs, CID: Ls } = S(),
    { decodeIterable: we, encodeIterable: E, encodeCallback: Vs } = Ns(),
    ye = Rs(),
    _s = class extends r0 {
      constructor(t) {
        super("core", ["add", "addAll", "cat", "ls"], t);
      }
      async *addAll(t, s = {}) {
        let { timeout: r, signal: n } = s,
          i = [...s.transfer || []],
          b = s.progress ? Vs(s.progress, i) : void 0,
          a = await this.remote.addAll(
            {
              ...s,
              input: b0(t, i),
              progress: b,
              transfer: i,
              timeout: r,
              signal: n,
            },
          );
        yield* we(a.data, Gs);
      }
      async add(t, s = {}) {
        let { timeout: r, signal: n } = s,
          i = [...s.transfer || []],
          b = s.progress ? Vs(s.progress, i) : void 0,
          a = await this.remote.add(
            {
              ...s,
              input: o0(t, i),
              progress: b,
              transfer: i,
              timeout: r,
              signal: n,
            },
          );
        return Gs(a.data);
      }
      async *cat(t, s = {}) {
        let r = Ls.isCID(t) ? Os(t) : t,
          n = await this.remote.cat({ ...s, path: r });
        yield* we(n.data, i0);
      }
      async *ls(t, s = {}) {
        let r = Ls.isCID(t) ? Os(t) : t,
          n = await this.remote.ls({ ...s, path: r });
        yield* we(n.data, n0);
      }
    },
    Gs = ({ path: e, cid: t, mode: s, mtime: r, size: n }) => ({
      path: e,
      cid: Fs(t),
      mode: s,
      mtime: r,
      size: n,
    }),
    n0 = (
      {
        depth: e,
        name: t,
        path: s,
        size: r,
        cid: n,
        type: i,
        mode: b,
        mtime: a,
      },
    ) => ({
      cid: Fs(n),
      type: i,
      name: t,
      path: s,
      mode: b,
      mtime: a,
      size: r,
      depth: e,
    }),
    i0 = (e) => e,
    o0 = (e, t) => {
      if (e instanceof Blob) return e;
      if (typeof e == "string") return e;
      if (e instanceof ArrayBuffer) return e;
      if (ArrayBuffer.isView(e)) return e;
      {
        let s = Ae(e);
        if (s) return E(s, ve, t);
        let r = Ce(e);
        if (r) return E(r, B, t);
        let n = qe(e);
        if (n) return E(ye(n), B, t);
        let i = Ie(e);
        if (i) return Ee(i, t);
        throw TypeError("Unexpected input: " + typeof e);
      }
    },
    b0 = (e, t) => {
      let s = Ae(e);
      if (s) return E(s, ve, t);
      let r = Ce(e);
      if (r) return E(r, B, t);
      let n = qe(e);
      if (n) return E(ye(n), B, t);
      throw TypeError("Unexpected input: " + typeof e);
    },
    B = (e, t) => {
      if (e instanceof ArrayBuffer) return e;
      if (ArrayBuffer.isView(e)) return e;
      if (e instanceof Blob) return { path: "", content: e };
      if (typeof e == "string") return { path: "", content: e };
      {
        let s = Ie(e);
        if (s) return Ee(s, t);
        throw TypeError("Unexpected input: " + typeof e);
      }
    },
    ve = (e, t) => {
      if (typeof e == "number") {
        throw TypeError("Iterable of numbers is not supported");
      }
      if (e instanceof ArrayBuffer) return e;
      if (ArrayBuffer.isView(e)) return e;
      if (e instanceof Blob) return { path: "", content: e };
      if (typeof e == "string") return { path: "", content: e };
      {
        let s = Ie(e);
        if (s) return Ee(s, t);
        throw TypeError("Unexpected input: " + typeof e);
      }
    },
    Ee = ({ path: e, mode: t, mtime: s, content: r }, n) => ({
      path: e,
      mode: t,
      mtime: s,
      content: r ? a0(r, n) : void 0,
    }),
    a0 = (e, t) => {
      if (e == null) return "";
      if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return e;
      if (e instanceof Blob) return e;
      if (typeof e == "string") return e;
      {
        let s = Ae(e);
        if (s) return E(s, ve, t);
        let r = Ce(e);
        if (r) return E(r, B, t);
        let n = qe(e);
        if (n) return E(ye(n), B, t);
        throw TypeError("Unexpected input: " + typeof e);
      }
    },
    Ae = (e) => {
      let t = e;
      return t && typeof t[Symbol.iterator] == "function" ? t : null;
    },
    Ce = (e) => {
      let t = e;
      return t && typeof t[Symbol.asyncIterator] == "function" ? t : null;
    },
    qe = (e) => e && typeof e.getReader == "function" ? e : null,
    Ie = (e) => typeof e == "object" && (e.path || e.content) ? e : null;
  zs.exports = _s;
});
var Xs = o((Co, Js) => {
  "use strict";
  var c0 = F(),
    { decodeCID: x0, CID: l0 } = S(),
    Ps = class extends c0 {
      constructor(t) {
        super("files", ["stat"], t);
      }
      async stat(t, s = {}) {
        let { size: r, hash: n, withLocal: i, timeout: b, signal: a } = s,
          { stat: l } = await this.remote.stat(
            {
              path: d0(t),
              size: r,
              hash: n,
              withLocal: i,
              timeout: b,
              signal: a,
            },
          );
        return k0(l);
      }
    };
  Js.exports = Ps;
  var d0 = (e) => l0.isCID(e) ? `/ipfs/${e.toString()}` : e,
    k0 = (e) => ({ ...e, cid: x0(e.cid) });
});
var Hs = o((qo, Ks) => {
  "use strict";
  var $s = bs(),
    u0 = Ss(),
    f0 = Ms(),
    h0 = Qs(),
    p0 = Xs(),
    _ = class extends h0 {
      constructor(t) {
        super(t);
        this.transport = t,
          this.dag = new f0(this.transport),
          this.files = new p0(this.transport),
          this.block = new u0(this.transport);
      }
      static attach(t, s) {
        t.transport.connect(s);
      }
      static detached() {
        return new _(new $s(void 0));
      }
      static from(t) {
        return new _(new $s(t));
      }
    };
  Ks.exports = _;
});
var Ys = De(W()), er = De(Hs());
var Zs = [
  "https://ipfs.io/ipfs/:hash",
  "https://dweb.link/ipfs/:hash",
  "https://gateway.ipfs.io/ipfs/:hash",
  "https://ipfs.infura.io/ipfs/:hash",
  "https://ninetailed.ninja/ipfs/:hash",
  "https://10.via0.com/ipfs/:hash",
  "https://ipfs.eternum.io/ipfs/:hash",
  "https://hardbin.com/ipfs/:hash",
  "https://cloudflare-ipfs.com/ipfs/:hash",
  "https://cf-ipfs.com/ipfs/:hash",
  "https://gateway.pinata.cloud/ipfs/:hash",
  "https://ipfs.sloppyta.co/ipfs/:hash",
  "https://ipfs.greyh.at/ipfs/:hash",
  "https://jorropo.ovh/ipfs/:hash",
  "https://jorropo.net/ipfs/:hash",
  "https://gateway.temporal.cloud/ipfs/:hash",
  "https://ipfs.runfission.com/ipfs/:hash",
  "https://trusti.id/ipfs/:hash",
  "https://ipfs.overpi.com/ipfs/:hash",
  "https://ipfs.ink/ipfs/:hash",
  "https://gateway.ravenland.org/ipfs/:hash",
  "https://ipfs.smartsignature.io/ipfs/:hash",
  "https://ipfs.telos.miami/ipfs/:hash",
  "https://robotizing.net/ipfs/:hash",
  "https://ipfs.mttk.net/ipfs/:hash",
  "https://ipfs.fleek.co/ipfs/:hash",
  "https://ipfs.jbb.one/ipfs/:hash",
  "https://jacl.tech/ipfs/:hash",
  "https://ipfs.k1ic.com/ipfs/:hash",
  "https://ipfs.drink.cafe/ipfs/:hash",
  "https://ipfs.azurewebsites.net/ipfs/:hash",
  "https://gw.ipfspin.com/ipfs/:hash",
  "https://ipfs.denarius.io/ipfs/:hash",
];
function Ws(e) {
  let t = 0;
  return new Promise((s, r) =>
    e.forEach((n) =>
      n.then(s).catch(() => {
        ++t === e.length && r();
      })
    )
  );
}
var m0 = (e) =>
  new Uint8Array((e.match(/.{1,2}/g) || []).map((t) => parseInt(t, 16)));
var g0 = Ys.default;
var w0 = er.default;
export {
  g0 as CID,
  m0 as fromHexString,
  w0 as IpfsClient,
  Ws as raceToSuccess,
  Zs as publicIpfsGateways,
};
