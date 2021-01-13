//@ts-nocheck

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __commonJS = (callback, module) =>
  () => {
    if (!module) {
      module = { exports: {} };
      callback(module.exports, module);
    }
    return module.exports;
  };
var __exportStar = (target, module, desc) => {
  __markAsModule(target);
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module)) {
      if (!__hasOwnProp.call(target, key) && key !== "default") {
        __defProp(
          target,
          key,
          {
            get: () => module[key],
            enumerable: !(desc = __getOwnPropDesc(module, key)) ||
              desc.enumerable,
          },
        );
      }
    }
  }
  return target;
};
var __toModule = (module) => {
  if (module && module.__esModule) {
    return module;
  }
  return __exportStar(
    __defProp(
      module != null ? __create(__getProtoOf(module)) : {},
      "default",
      { value: module, enumerable: true },
    ),
    module,
  );
};

// ../../node_modules/@multiformats/base-x/src/index.js
var require_src = __commonJS((exports, module) => {
  "use strict";
  function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
      if (source instanceof Uint8Array) {
      } else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(
          source.buffer,
          source.byteOffset,
          source.byteLength,
        );
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (
          var it1 = size - 1;
          (carry !== 0 || i2 < length) && it1 !== -1;
          it1--, i2++
        ) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i2;
        pbegin++;
      }
      var it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (
          var it3 = size - 1;
          (carry !== 0 || i2 < length) && it3 !== -1;
          it3--, i2++
        ) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size - it4));
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode(string) {
      var buffer = decodeUnsafe(string);
      if (buffer) {
        return buffer;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    return {
      encode,
      decodeUnsafe,
      decode,
    };
  }
  module.exports = base;
});

// ../../node_modules/web-encoding/src/lib.browser.js
var require_lib_browser = __commonJS((exports) => {
  "use strict";
  exports.TextEncoder = TextEncoder;
  exports.TextDecoder = TextDecoder;
});

// ../../node_modules/multibase/src/util.js
var require_util = __commonJS((exports, module) => {
  "use strict";
  var { TextEncoder: TextEncoder2, TextDecoder: TextDecoder2 } =
    require_lib_browser();
  var textDecoder = new TextDecoder2();
  var decodeText = (bytes) => textDecoder.decode(bytes);
  var textEncoder = new TextEncoder2();
  var encodeText = (text) => textEncoder.encode(text);
  function concat(arrs, length) {
    const output = new Uint8Array(length);
    let offset = 0;
    for (const arr of arrs) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return output;
  }
  module.exports = { decodeText, encodeText, concat };
});

// ../../node_modules/multibase/src/base.js
var require_base = __commonJS((exports, module) => {
  "use strict";
  var { encodeText } = require_util();
  var Base = class {
    constructor(name, code, factory, alphabet) {
      this.name = name;
      this.code = code;
      this.codeBuf = encodeText(this.code);
      this.alphabet = alphabet;
      this.codec = factory(alphabet);
    }
    encode(buf) {
      return this.codec.encode(buf);
    }
    decode(string) {
      for (const char of string) {
        if (this.alphabet && this.alphabet.indexOf(char) < 0) {
          throw new Error(`invalid character '${char}' in '${string}'`);
        }
      }
      return this.codec.decode(string);
    }
  };
  module.exports = Base;
});

// ../../node_modules/multibase/src/rfc4648.js
var require_rfc4648 = __commonJS((exports, module) => {
  "use strict";
  var decode = (string, alphabet, bitsPerChar) => {
    const codes = {};
    for (let i = 0; i < alphabet.length; ++i) {
      codes[alphabet[i]] = i;
    }
    let end = string.length;
    while (string[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for (let i = 0; i < end; ++i) {
      const value = codes[string[i]];
      if (value === void 0) {
        throw new SyntaxError("Invalid character " + string[i]);
      }
      buffer = buffer << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  };
  var encode = (data, alphabet, bitsPerChar) => {
    const pad = alphabet[alphabet.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for (let i = 0; i < data.length; ++i) {
      buffer = buffer << 8 | data[i];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet[mask & buffer >> bits];
      }
    }
    if (bits) {
      out += alphabet[mask & buffer << bitsPerChar - bits];
    }
    if (pad) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  };
  var rfc4648 = (bitsPerChar) =>
    (alphabet) => {
      return {
        encode(input) {
          return encode(input, alphabet, bitsPerChar);
        },
        decode(input) {
          return decode(input, alphabet, bitsPerChar);
        },
      };
    };
  module.exports = { rfc4648 };
});

// ../../node_modules/multibase/src/constants.js
var require_constants = __commonJS((exports, module) => {
  "use strict";
  var baseX = require_src();
  var Base = require_base();
  var { rfc4648 } = require_rfc4648();
  var { decodeText, encodeText } = require_util();
  var identity = () => {
    return {
      encode: decodeText,
      decode: encodeText,
    };
  };
  var constants = [
    ["identity", "\0", identity, ""],
    ["base2", "0", rfc4648(1), "01"],
    ["base8", "7", rfc4648(3), "01234567"],
    ["base10", "9", baseX, "0123456789"],
    ["base16", "f", rfc4648(4), "0123456789abcdef"],
    ["base16upper", "F", rfc4648(4), "0123456789ABCDEF"],
    ["base32hex", "v", rfc4648(5), "0123456789abcdefghijklmnopqrstuv"],
    ["base32hexupper", "V", rfc4648(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
    ["base32hexpad", "t", rfc4648(5), "0123456789abcdefghijklmnopqrstuv="],
    ["base32hexpadupper", "T", rfc4648(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
    ["base32", "b", rfc4648(5), "abcdefghijklmnopqrstuvwxyz234567"],
    ["base32upper", "B", rfc4648(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
    ["base32pad", "c", rfc4648(5), "abcdefghijklmnopqrstuvwxyz234567="],
    ["base32padupper", "C", rfc4648(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
    ["base32z", "h", rfc4648(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
    ["base36", "k", baseX, "0123456789abcdefghijklmnopqrstuvwxyz"],
    ["base36upper", "K", baseX, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    [
      "base58btc",
      "z",
      baseX,
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    ],
    [
      "base58flickr",
      "Z",
      baseX,
      "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    ],
    [
      "base64",
      "m",
      rfc4648(6),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    ],
    [
      "base64pad",
      "M",
      rfc4648(6),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ],
    [
      "base64url",
      "u",
      rfc4648(6),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    ],
    [
      "base64urlpad",
      "U",
      rfc4648(6),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    ],
  ];
  var names = constants.reduce((prev, tupple) => {
    prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3]);
    return prev;
  }, {});
  var codes = constants.reduce((prev, tupple) => {
    prev[tupple[1]] = names[tupple[0]];
    return prev;
  }, {});
  module.exports = {
    names,
    codes,
  };
});

// ../../node_modules/multibase/src/index.js
var require_src2 = __commonJS((exports, module) => {
  "use strict";
  var constants = require_constants();
  var { encodeText, decodeText, concat } = require_util();
  function multibase(nameOrCode, buf) {
    if (!buf) {
      throw new Error("requires an encoded Uint8Array");
    }
    const { name, codeBuf } = encoding(nameOrCode);
    validEncode(name, buf);
    return concat([codeBuf, buf], codeBuf.length + buf.length);
  }
  function encode(nameOrCode, buf) {
    const enc = encoding(nameOrCode);
    const data = encodeText(enc.encode(buf));
    return concat([enc.codeBuf, data], enc.codeBuf.length + data.length);
  }
  function decode(data) {
    if (data instanceof Uint8Array) {
      data = decodeText(data);
    }
    const prefix = data[0];
    if (
      ["f", "F", "v", "V", "t", "T", "b", "B", "c", "C", "h", "k", "K"]
        .includes(prefix)
    ) {
      data = data.toLowerCase();
    }
    const enc = encoding(data[0]);
    return enc.decode(data.substring(1));
  }
  function isEncoded(data) {
    if (data instanceof Uint8Array) {
      data = decodeText(data);
    }
    if (Object.prototype.toString.call(data) !== "[object String]") {
      return false;
    }
    try {
      const enc = encoding(data[0]);
      return enc.name;
    } catch (err) {
      return false;
    }
  }
  function validEncode(name, buf) {
    const enc = encoding(name);
    enc.decode(decodeText(buf));
  }
  function encoding(nameOrCode) {
    if (constants.names[nameOrCode]) {
      return constants.names[nameOrCode];
    } else if (constants.codes[nameOrCode]) {
      return constants.codes[nameOrCode];
    } else {
      throw new Error(`Unsupported encoding: ${nameOrCode}`);
    }
  }
  function encodingFromData(data) {
    if (data instanceof Uint8Array) {
      data = decodeText(data);
    }
    return encoding(data[0]);
  }
  exports = module.exports = multibase;
  exports.encode = encode;
  exports.decode = decode;
  exports.isEncoded = isEncoded;
  exports.encoding = encoding;
  exports.encodingFromData = encodingFromData;
  exports.names = Object.freeze(constants.names);
  exports.codes = Object.freeze(constants.codes);
});

// ../../node_modules/varint/encode.js
var require_encode = __commonJS((exports, module) => {
  module.exports = encode;
  var MSB = 128;
  var REST = 127;
  var MSBALL = ~REST;
  var INT = Math.pow(2, 31);
  function encode(num, out, offset) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
      encode.bytes = 0;
      throw new RangeError("Could not encode varint");
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT) {
      out[offset++] = num & 255 | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = num & 255 | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
  }
});

// ../../node_modules/varint/decode.js
var require_decode = __commonJS((exports, module) => {
  module.exports = read;
  var MSB = 128;
  var REST = 127;
  function read(buf, offset) {
    var res = 0,
      offset = offset || 0,
      shift = 0,
      counter = offset,
      b,
      l = buf.length;
    do {
      if (counter >= l || shift > 49) {
        read.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b = buf[counter++];
      res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
      shift += 7;
    } while (b >= MSB);
    read.bytes = counter - offset;
    return res;
  }
});

// ../../node_modules/varint/length.js
var require_length = __commonJS((exports, module) => {
  var N1 = Math.pow(2, 7);
  var N2 = Math.pow(2, 14);
  var N3 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);
  module.exports = function (value) {
    return value < N1
      ? 1
      : value < N2
      ? 2
      : value < N3
      ? 3
      : value < N4
      ? 4
      : value < N5
      ? 5
      : value < N6
      ? 6
      : value < N7
      ? 7
      : value < N8
      ? 8
      : value < N9
      ? 9
      : 10;
  };
});

// ../../node_modules/varint/index.js
var require_varint = __commonJS((exports, module) => {
  module.exports = {
    encode: require_encode(),
    decode: require_decode(),
    encodingLength: require_length(),
  };
});

// ../../node_modules/multihashes/src/constants.js
var require_constants2 = __commonJS((exports, module) => {
  "use strict";
  var names = Object.freeze({
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
  });
  module.exports = { names };
});

// ../../node_modules/uint8arrays/to-string.js
var require_to_string = __commonJS((exports, module) => {
  "use strict";
  var { encoding: getCodec } = require_src2();
  var { TextDecoder: TextDecoder2 } = require_lib_browser();
  var utf8Decoder = new TextDecoder2("utf8");
  function uint8ArrayToAsciiString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += String.fromCharCode(array[i]);
    }
    return string;
  }
  function toString(array, encoding = "utf8") {
    if (encoding === "utf8" || encoding === "utf-8") {
      return utf8Decoder.decode(array);
    }
    if (encoding === "ascii") {
      return uint8ArrayToAsciiString(array);
    }
    return getCodec(encoding).encode(array);
  }
  module.exports = toString;
});

// ../../node_modules/uint8arrays/from-string.js
var require_from_string = __commonJS((exports, module) => {
  "use strict";
  var { encoding: getCodec } = require_src2();
  var { TextEncoder: TextEncoder2 } = require_lib_browser();
  var utf8Encoder = new TextEncoder2();
  function asciiStringToUint8Array(string) {
    const array = new Uint8Array(string.length);
    for (let i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array;
  }
  function fromString(string, encoding = "utf8") {
    if (encoding === "utf8" || encoding === "utf-8") {
      return utf8Encoder.encode(string);
    }
    if (encoding === "ascii") {
      return asciiStringToUint8Array(string);
    }
    return getCodec(encoding).decode(string);
  }
  module.exports = fromString;
});

// ../../node_modules/uint8arrays/concat.js
var require_concat = __commonJS((exports, module) => {
  "use strict";
  function concat(arrays, length) {
    if (!length) {
      length = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = new Uint8Array(length);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return output;
  }
  module.exports = concat;
});

// ../../node_modules/multihashes/src/index.js
var require_src3 = __commonJS((exports, module) => {
  "use strict";
  var multibase = require_src2();
  var varint = require_varint();
  var { names } = require_constants2();
  var uint8ArrayToString = require_to_string();
  var uint8ArrayFromString = require_from_string();
  var uint8ArrayConcat = require_concat();
  var codes = {};
  for (const key in names) {
    const name = key;
    codes[names[name]] = name;
  }
  function toHexString(hash) {
    if (!(hash instanceof Uint8Array)) {
      throw new Error("must be passed a Uint8Array");
    }
    return uint8ArrayToString(hash, "base16");
  }
  function fromHexString(hash) {
    return uint8ArrayFromString(hash, "base16");
  }
  function toB58String(hash) {
    if (!(hash instanceof Uint8Array)) {
      throw new Error("must be passed a Uint8Array");
    }
    return uint8ArrayToString(multibase.encode("base58btc", hash)).slice(1);
  }
  function fromB58String(hash) {
    const encoded = hash instanceof Uint8Array
      ? uint8ArrayToString(hash)
      : hash;
    return multibase.decode("z" + encoded);
  }
  function decode(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      throw new Error("multihash must be a Uint8Array");
    }
    if (bytes.length < 2) {
      throw new Error("multihash too short. must be > 2 bytes.");
    }
    const code = varint.decode(bytes);
    if (!isValidCode(code)) {
      throw new Error(
        `multihash unknown function code: 0x${code.toString(16)}`,
      );
    }
    bytes = bytes.slice(varint.decode.bytes);
    const len = varint.decode(bytes);
    if (len < 0) {
      throw new Error(`multihash invalid length: ${len}`);
    }
    bytes = bytes.slice(varint.decode.bytes);
    if (bytes.length !== len) {
      throw new Error(
        `multihash length inconsistent: 0x${
          uint8ArrayToString(bytes, "base16")
        }`,
      );
    }
    return {
      code,
      name: codes[code],
      length: len,
      digest: bytes,
    };
  }
  function encode(digest, code, length) {
    if (!digest || code === void 0) {
      throw new Error(
        "multihash encode requires at least two args: digest, code",
      );
    }
    const hashfn = coerceCode(code);
    if (!(digest instanceof Uint8Array)) {
      throw new Error("digest should be a Uint8Array");
    }
    if (length == null) {
      length = digest.length;
    }
    if (length && digest.length !== length) {
      throw new Error("digest length should be equal to specified length.");
    }
    const hash = varint.encode(hashfn);
    const len = varint.encode(length);
    return uint8ArrayConcat(
      [hash, len, digest],
      hash.length + len.length + digest.length,
    );
  }
  function coerceCode(name) {
    let code = name;
    if (typeof name === "string") {
      if (names[name] === void 0) {
        throw new Error(`Unrecognized hash function named: ${name}`);
      }
      code = names[name];
    }
    if (typeof code !== "number") {
      throw new Error(`Hash function code should be a number. Got: ${code}`);
    }
    if (codes[code] === void 0 && !isAppCode(code)) {
      throw new Error(`Unrecognized function code: ${code}`);
    }
    return code;
  }
  function isAppCode(code) {
    return code > 0 && code < 16;
  }
  function isValidCode(code) {
    if (isAppCode(code)) {
      return true;
    }
    if (codes[code]) {
      return true;
    }
    return false;
  }
  function validate(multihash) {
    decode(multihash);
  }
  function prefix(multihash) {
    validate(multihash);
    return multihash.subarray(0, 2);
  }
  module.exports = {
    names,
    codes: Object.freeze(codes),
    toHexString,
    fromHexString,
    toB58String,
    fromB58String,
    decode,
    encode,
    coerceCode,
    isAppCode,
    validate,
    prefix,
    isValidCode,
  };
});

// ../../node_modules/multicodec/src/base-table.js
var require_base_table = __commonJS((exports, module) => {
  "use strict";
  var baseTable = Object.freeze({
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
  });
  module.exports = { baseTable };
});

// ../../node_modules/multicodec/src/int-table.js
var require_int_table = __commonJS((exports, module) => {
  "use strict";
  var { baseTable } = require_base_table();
  var nameTable = new Map();
  for (const encodingName in baseTable) {
    const code = baseTable[encodingName];
    nameTable.set(code, encodingName);
  }
  module.exports = Object.freeze(nameTable);
});

// ../../node_modules/multicodec/node_modules/uint8arrays/to-string.js
var require_to_string2 = __commonJS((exports, module) => {
  "use strict";
  var { names } = require_constants();
  var { TextDecoder: TextDecoder2 } = require_lib_browser();
  var utf8Decoder = new TextDecoder2("utf8");
  function uint8ArrayToAsciiString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
      string += String.fromCharCode(array[i]);
    }
    return string;
  }
  function toString(array, encoding = "utf8") {
    if (encoding === "utf8" || encoding === "utf-8") {
      return utf8Decoder.decode(array);
    }
    if (encoding === "ascii") {
      return uint8ArrayToAsciiString(array);
    }
    const codec = names[encoding];
    if (!codec) {
      throw new Error("Unknown base");
    }
    return codec.encode(array);
  }
  module.exports = toString;
});

// ../../node_modules/multicodec/node_modules/uint8arrays/from-string.js
var require_from_string2 = __commonJS((exports, module) => {
  "use strict";
  var { names } = require_constants();
  var { TextEncoder: TextEncoder2 } = require_lib_browser();
  var utf8Encoder = new TextEncoder2();
  function asciiStringToUint8Array(string) {
    const array = new Uint8Array(string.length);
    for (let i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
    }
    return array;
  }
  function fromString(string, encoding = "utf8") {
    if (encoding === "utf8" || encoding === "utf-8") {
      return utf8Encoder.encode(string);
    }
    if (encoding === "ascii") {
      return asciiStringToUint8Array(string);
    }
    const codec = names[encoding];
    if (!codec) {
      throw new Error("Unknown base");
    }
    return codec.decode(string);
  }
  module.exports = fromString;
});

// ../../node_modules/multicodec/src/util.js
var require_util2 = __commonJS((exports, module) => {
  "use strict";
  var varint = require_varint();
  var uint8ArrayToString = require_to_string2();
  var uint8ArrayFromString = require_from_string2();
  module.exports = {
    numberToUint8Array,
    uint8ArrayToNumber,
    varintUint8ArrayEncode,
    varintEncode,
  };
  function uint8ArrayToNumber(buf) {
    return parseInt(uint8ArrayToString(buf, "base16"), 16);
  }
  function numberToUint8Array(num) {
    let hexString = num.toString(16);
    if (hexString.length % 2 === 1) {
      hexString = "0" + hexString;
    }
    return uint8ArrayFromString(hexString, "base16");
  }
  function varintUint8ArrayEncode(input) {
    return Uint8Array.from(varint.encode(uint8ArrayToNumber(input)));
  }
  function varintEncode(num) {
    return Uint8Array.from(varint.encode(num));
  }
});

// ../../node_modules/multicodec/src/varint-table.js
var require_varint_table = __commonJS((exports, module) => {
  "use strict";
  var { baseTable } = require_base_table();
  var varintEncode = require_util2().varintEncode;
  var varintTable = {};
  for (const encodingName in baseTable) {
    const code = baseTable[encodingName];
    varintTable[encodingName] = varintEncode(code);
  }
  module.exports = Object.freeze(varintTable);
});

// ../../node_modules/multicodec/node_modules/uint8arrays/concat.js
var require_concat2 = __commonJS((exports, module) => {
  "use strict";
  function concat(arrays, length) {
    if (!length) {
      length = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = new Uint8Array(length);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return output;
  }
  module.exports = concat;
});

// ../../node_modules/multicodec/src/constants.js
var require_constants3 = __commonJS((exports, module) => {
  "use strict";
  var { baseTable } = require_base_table();
  var constants = {};
  for (const [name, code] of Object.entries(baseTable)) {
    const constant = name.toUpperCase().replace(/-/g, "_");
    constants[constant] = code;
  }
  module.exports = Object.freeze(constants);
});

// ../../node_modules/multicodec/src/print.js
var require_print = __commonJS((exports, module) => {
  "use strict";
  var { baseTable } = require_base_table();
  var tableByCode = {};
  for (const [name, code] of Object.entries(baseTable)) {
    if (tableByCode[code] === void 0) {
      tableByCode[code] = name;
    }
  }
  module.exports = Object.freeze(tableByCode);
});

// ../../node_modules/multicodec/src/index.js
var require_src4 = __commonJS((exports, module) => {
  "use strict";
  var varint = require_varint();
  var intTable = require_int_table();
  var codecNameToCodeVarint = require_varint_table();
  var util = require_util2();
  var uint8ArrayConcat = require_concat2();
  function addPrefix(multicodecStrOrCode, data) {
    let prefix;
    if (multicodecStrOrCode instanceof Uint8Array) {
      prefix = util.varintUint8ArrayEncode(multicodecStrOrCode);
    } else {
      if (codecNameToCodeVarint[multicodecStrOrCode]) {
        prefix = codecNameToCodeVarint[multicodecStrOrCode];
      } else {
        throw new Error("multicodec not recognized");
      }
    }
    return uint8ArrayConcat([prefix, data], prefix.length + data.length);
  }
  function rmPrefix(data) {
    varint.decode(data);
    return data.slice(varint.decode.bytes);
  }
  function getCodec(prefixedData) {
    const code = varint.decode(prefixedData);
    const codecName = intTable.get(code);
    if (codecName === void 0) {
      throw new Error(`Code ${code} not found`);
    }
    return codecName;
  }
  function getName(codec) {
    return intTable.get(codec);
  }
  function getNumber(name) {
    const code = codecNameToCodeVarint[name];
    if (code === void 0) {
      throw new Error("Codec `" + name + "` not found");
    }
    return varint.decode(code);
  }
  function getCode(prefixedData) {
    return varint.decode(prefixedData);
  }
  function getCodeVarint(codecName) {
    const code = codecNameToCodeVarint[codecName];
    if (code === void 0) {
      throw new Error("Codec `" + codecName + "` not found");
    }
    return code;
  }
  function getVarint(code) {
    return varint.encode(code);
  }
  var constants = require_constants3();
  var print = require_print();
  module.exports = {
    addPrefix,
    rmPrefix,
    getCodec,
    getName,
    getNumber,
    getCode,
    getCodeVarint,
    getVarint,
    print,
    ...constants,
  };
});

// ../../node_modules/cids/src/cid-util.js
var require_cid_util = __commonJS((exports, module) => {
  "use strict";
  var mh = require_src3();
  var CIDUtil = {
    checkCIDComponents: function (other) {
      if (other == null) {
        return "null values are not valid CIDs";
      }
      if (!(other.version === 0 || other.version === 1)) {
        return "Invalid version, must be a number equal to 1 or 0";
      }
      if (typeof other.codec !== "string") {
        return "codec must be string";
      }
      if (other.version === 0) {
        if (other.codec !== "dag-pb") {
          return "codec must be 'dag-pb' for CIDv0";
        }
        if (other.multibaseName !== "base58btc") {
          return "multibaseName must be 'base58btc' for CIDv0";
        }
      }
      if (!(other.multihash instanceof Uint8Array)) {
        return "multihash must be a Uint8Array";
      }
      try {
        mh.validate(other.multihash);
      } catch (err) {
        let errorMsg = err.message;
        if (!errorMsg) {
          errorMsg = "Multihash validation failed";
        }
        return errorMsg;
      }
    },
  };
  module.exports = CIDUtil;
});

// ../../node_modules/uint8arrays/equals.js
var require_equals = __commonJS((exports, module) => {
  "use strict";
  function equals(a, b) {
    if (a === b) {
      return true;
    }
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (let i = 0; i < a.byteLength; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  module.exports = equals;
});

// ../../node_modules/cids/src/index.js
var require_src5 = __commonJS((exports, module) => {
  "use strict";
  var mh = require_src3();
  var multibase = require_src2();
  var multicodec = require_src4();
  var { baseTable: codecs } = require_base_table();
  var CIDUtil = require_cid_util();
  var uint8ArrayConcat = require_concat();
  var uint8ArrayToString = require_to_string();
  var uint8ArrayEquals = require_equals();
  var codecInts = Object.keys(codecs).reduce((p, name) => {
    p[codecs[name]] = name;
    return p;
  }, {});
  var symbol = Symbol.for("@ipld/js-cid/CID");
  var CID2 = class {
    constructor(version, codec, multihash, multibaseName) {
      this.version;
      this.codec;
      this.multihash;
      Object.defineProperty(this, symbol, { value: true });
      if (CID2.isCID(version)) {
        const cid = version;
        this.version = cid.version;
        this.codec = cid.codec;
        this.multihash = cid.multihash;
        this.multibaseName = cid.multibaseName ||
          (cid.version === 0 ? "base58btc" : "base32");
        return;
      }
      if (typeof version === "string") {
        const baseName = multibase.isEncoded(version);
        if (baseName) {
          const cid = multibase.decode(version);
          this.version = parseInt(cid[0].toString(), 16);
          this.codec = multicodec.getCodec(cid.slice(1));
          this.multihash = multicodec.rmPrefix(cid.slice(1));
          this.multibaseName = baseName;
        } else {
          this.version = 0;
          this.codec = "dag-pb";
          this.multihash = mh.fromB58String(version);
          this.multibaseName = "base58btc";
        }
        CID2.validateCID(this);
        Object.defineProperty(this, "string", { value: version });
        return;
      }
      if (version instanceof Uint8Array) {
        const v = parseInt(version[0].toString(), 16);
        if (v === 1) {
          const cid = version;
          this.version = v;
          this.codec = multicodec.getCodec(cid.slice(1));
          this.multihash = multicodec.rmPrefix(cid.slice(1));
          this.multibaseName = "base32";
        } else {
          this.version = 0;
          this.codec = "dag-pb";
          this.multihash = version;
          this.multibaseName = "base58btc";
        }
        CID2.validateCID(this);
        return;
      }
      this.version = version;
      if (typeof codec === "number") {
        codec = codecInts[codec];
      }
      this.codec = codec;
      this.multihash = multihash;
      this.multibaseName = multibaseName ||
        (version === 0 ? "base58btc" : "base32");
      CID2.validateCID(this);
    }
    get bytes() {
      let bytes = this._bytes;
      if (!bytes) {
        if (this.version === 0) {
          bytes = this.multihash;
        } else if (this.version === 1) {
          const codec = multicodec.getCodeVarint(this.codec);
          bytes = uint8ArrayConcat([
            [1],
            codec,
            this.multihash,
          ], 1 + codec.byteLength + this.multihash.byteLength);
        } else {
          throw new Error("unsupported version");
        }
        Object.defineProperty(this, "_bytes", { value: bytes });
      }
      return bytes;
    }
    get prefix() {
      const codec = multicodec.getCodeVarint(this.codec);
      const multihash = mh.prefix(this.multihash);
      const prefix = uint8ArrayConcat([
        [this.version],
        codec,
        multihash,
      ], 1 + codec.byteLength + multihash.byteLength);
      return prefix;
    }
    get code() {
      return codecs[this.codec];
    }
    toV0() {
      if (this.codec !== "dag-pb") {
        throw new Error("Cannot convert a non dag-pb CID to CIDv0");
      }
      const { name, length } = mh.decode(this.multihash);
      if (name !== "sha2-256") {
        throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
      }
      if (length !== 32) {
        throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");
      }
      return new CID2(0, this.codec, this.multihash);
    }
    toV1() {
      return new CID2(1, this.codec, this.multihash);
    }
    toBaseEncodedString(base = this.multibaseName) {
      if (
        this.string && this.string.length !== 0 && base === this.multibaseName
      ) {
        return this.string;
      }
      let str;
      if (this.version === 0) {
        if (base !== "base58btc") {
          throw new Error(
            "not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()",
          );
        }
        str = mh.toB58String(this.multihash);
      } else if (this.version === 1) {
        str = uint8ArrayToString(multibase.encode(base, this.bytes));
      } else {
        throw new Error("unsupported version");
      }
      if (base === this.multibaseName) {
        Object.defineProperty(this, "string", { value: str });
      }
      return str;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    toString(base) {
      return this.toBaseEncodedString(base);
    }
    toJSON() {
      return {
        codec: this.codec,
        version: this.version,
        hash: this.multihash,
      };
    }
    equals(other) {
      return this.codec === other.codec && this.version === other.version &&
        uint8ArrayEquals(this.multihash, other.multihash);
    }
    static validateCID(other) {
      const errorMsg = CIDUtil.checkCIDComponents(other);
      if (errorMsg) {
        throw new Error(errorMsg);
      }
    }
    static isCID(value) {
      return value instanceof CID2 || Boolean(value && value[symbol]);
    }
  };
  CID2.codecs = codecs;
  module.exports = CID2;
});

// src/mhash.js
var import_cids = __toModule(require_src5());
var mhash_default = import_cids.default;
export { mhash_default as default };
