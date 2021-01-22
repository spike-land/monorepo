(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "lRBY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getDB", function() { return /* binding */ getDB; });
__webpack_require__.d(__webpack_exports__, "shaDB", function() { return /* binding */ shaDB; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("ls82");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/vendor/idb.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var instanceOfAny = function instanceOfAny(object, constructors) {
  return constructors.some(function (c) {
    return object instanceof c;
  });
};

var idbProxyableTypes;
var cursorAdvanceMethods;

function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}

function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}

var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();

function promisifyRequest(request) {
  var promise = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };

    var success = function success() {
      resolve(wrap1(request.result));
      unlisten();
    };

    var error = function error() {
      reject(request.error);
      unlisten();
    };

    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then(function (value) {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(function () {});
  reverseTransformCache.set(promise, request);
  return promise;
}

function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx)) return;
  var done = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };

    var complete = function complete() {
      resolve();
      unlisten();
    };

    var error = function error() {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };

    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}

var idbProxyTraps = {
  get: function get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done") return transactionDoneMap.get(target);

      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }

      if (prop === "store") {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }

    return wrap1(target[prop]);
  },
  set: function set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has: function has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }

    return prop in target;
  }
};

function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}

function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function (storeNames) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var tx = func.call.apply(func, [unwrap1(this), storeNames].concat(args));
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap1(tx);
    };
  }

  if (getCursorAdvanceMethods().includes(func)) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      func.apply(unwrap1(this), args);
      return wrap1(cursorRequestMap.get(this));
    };
  }

  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return wrap1(func.apply(unwrap1(this), args));
  };
}

function transformCachableValue(value) {
  if (typeof value === "function") return wrapFunction(value);
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);

  if (instanceOfAny(value, getIdbProxyableTypes())) {
    return new Proxy(value, idbProxyTraps);
  }

  return value;
}

function wrap1(value) {
  if (value instanceof IDBRequest) return promisifyRequest(value);
  if (transformCache.has(value)) return transformCache.get(value);
  var newValue = transformCachableValue(value);

  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }

  return newValue;
}

var unwrap1 = function unwrap1(value) {
  return reverseTransformCache.get(value);
};

var u = unwrap1,
    w = wrap1;


function openDB1(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      blocked = _ref.blocked,
      upgrade = _ref.upgrade,
      blocking = _ref.blocking,
      terminated = _ref.terminated;

  var request = indexedDB.open(name, version);
  var openPromise = wrap1(request);

  if (upgrade) {
    request.addEventListener("upgradeneeded", function (event) {
      upgrade(wrap1(request.result), event.oldVersion, event.newVersion, wrap1(request.transaction));
    });
  }

  if (blocked) request.addEventListener("blocked", function () {
    return blocked();
  });
  openPromise.then(function (db) {
    if (terminated) db.addEventListener("close", function () {
      return terminated();
    });
    if (blocking) db.addEventListener("versionchange", function () {
      return blocking();
    });
  }).catch(function () {});
  return openPromise;
}

function deleteDB1(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      blocked = _ref2.blocked;

  var request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener("blocked", function () {
    return blocked();
  });
  return wrap1(request).then(function () {
    return undefined;
  });
}

var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = new Map();

function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }

  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, "");
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);

  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }

  var method = /*#__PURE__*/function () {
    var _ref3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(storeName) {
      var _target;

      var tx,
          target1,
          _len4,
          args,
          _key4,
          _args = arguments;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
              target1 = tx.store;

              for (_len4 = _args.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = _args[_key4];
              }

              if (useIndex) target1 = target1.index(args.shift());
              _context.next = 6;
              return Promise.all([(_target = target1)[targetFuncName].apply(_target, args), isWrite && tx.done]);

            case 6:
              return _context.abrupt("return", _context.sent[0]);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  cachedMethods.set(prop, method);
  return method;
}

replaceTraps(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});

var unwrap2 = unwrap1;
var wrap2 = wrap1;
var deleteDB2 = deleteDB1;
var openDB2 = openDB1;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/vendor/diffMin.js


function N() {}

N.prototype = {
  diff: function diff(n, r) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        s = t.callback;
    typeof t == "function" && (s = t, t = {}), this.options = t;
    var i = this;

    function l(d) {
      return s ? (setTimeout(function () {
        s(void 0, d);
      }, 0), !0) : d;
    }

    n = this.castInput(n), r = this.castInput(r), n = this.removeEmpty(this.tokenize(n)), r = this.removeEmpty(this.tokenize(r));
    var f = r.length,
        a = n.length,
        o = 1,
        p = f + a,
        c = [{
      newPos: -1,
      components: []
    }],
        u = this.extractCommon(c[0], r, n, 0);
    if (c[0].newPos + 1 >= f && u + 1 >= a) return l([{
      value: this.join(r),
      count: r.length
    }]);

    function v() {
      for (var d = -1 * o; d <= o; d += 2) {
        var w = void 0,
            y = c[d - 1],
            L = c[d + 1],
            x = (L ? L.newPos : 0) - d;
        y && (c[d - 1] = void 0);
        var g = y && y.newPos + 1 < f,
            F = L && 0 <= x && x < a;

        if (!g && !F) {
          c[d] = void 0;
          continue;
        }

        if (!g || F && y.newPos < L.newPos ? (w = fe(L), i.pushComponent(w.components, void 0, !0)) : (w = y, w.newPos++, i.pushComponent(w.components, !0, void 0)), x = i.extractCommon(w, r, n, d), w.newPos + 1 >= f && x + 1 >= a) return l(le(i, w.components, r, n, i.useLongestToken));
        c[d] = w;
      }

      o++;
    }

    if (s) (function d() {
      setTimeout(function () {
        if (o > p) return s();
        v() || d();
      }, 0);
    })();else for (; o <= p;) {
      var h = v();
      if (h) return h;
    }
  },
  pushComponent: function pushComponent(n, r, t) {
    var s = n[n.length - 1];
    s && s.added === r && s.removed === t ? n[n.length - 1] = {
      count: s.count + 1,
      added: r,
      removed: t
    } : n.push({
      count: 1,
      added: r,
      removed: t
    });
  },
  extractCommon: function extractCommon(n, r, t, s) {
    for (var i = r.length, l = t.length, f = n.newPos, a = f - s, o = 0; f + 1 < i && a + 1 < l && this.equals(r[f + 1], t[a + 1]);) {
      f++, a++, o++;
    }

    return o && n.components.push({
      count: o
    }), n.newPos = f, a;
  },
  equals: function equals(n, r) {
    return this.options.comparator ? this.options.comparator(n, r) : n === r || this.options.ignoreCase && n.toLowerCase() === r.toLowerCase();
  },
  removeEmpty: function removeEmpty(n) {
    for (var r = [], t = 0; t < n.length; t++) {
      n[t] && r.push(n[t]);
    }

    return r;
  },
  castInput: function castInput(n) {
    return n;
  },
  tokenize: function tokenize(n) {
    return n.split("");
  },
  join: function join(n) {
    return n.join("");
  }
};

function le(e, n, r, t, s) {
  for (var i = 0, l = n.length, f = 0, a = 0; i < l; i++) {
    var o = n[i];

    if (o.removed) {
      if (o.value = e.join(t.slice(a, a + o.count)), a += o.count, i && n[i - 1].added) {
        var c = n[i - 1];
        n[i - 1] = n[i], n[i] = c;
      }
    } else {
      if (!o.added && s) {
        var p = r.slice(f, f + o.count);
        p = p.map(function (v, h) {
          var d = t[a + h];
          return d.length > v.length ? d : v;
        }), o.value = e.join(p);
      } else o.value = e.join(r.slice(f, f + o.count));

      f += o.count, o.added || (a += o.count);
    }
  }

  var u = n[l - 1];
  return l > 1 && typeof u.value == "string" && (u.added || u.removed) && e.equals("", u.value) && (n[l - 2].value += u.value, n.pop()), n;
}

function fe(e) {
  return {
    newPos: e.newPos,
    components: e.components.slice(0)
  };
}

var oe = new N();

function Y(e, n, r) {
  return oe.diff(e, n, r);
}

function Ce(e, n) {
  if (typeof e == "function") n.callback = e;else if (e) for (var r in e) {
    e.hasOwnProperty(r) && (n[r] = e[r]);
  }
  return n;
}

var K = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
    j = /\S/,
    P = new N();
P.equals = function (e, n) {
  return this.options.ignoreCase && (e = e.toLowerCase(), n = n.toLowerCase()), e === n || this.options.ignoreWhitespace && !j.test(e) && !j.test(n);
}, P.tokenize = function (e) {
  for (var n = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < n.length - 1; r++) {
    !n[r + 1] && n[r + 2] && K.test(n[r]) && K.test(n[r + 2]) && (n[r] += n[r + 2], n.splice(r + 1, 2), r--);
  }

  return n;
};
var U = new N();

U.tokenize = function (e) {
  var n = [],
      r = e.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();

  for (var t = 0; t < r.length; t++) {
    var s = r[t];
    t % 2 && !this.options.newlineIsToken ? n[n.length - 1] += s : (this.options.ignoreWhitespace && (s = s.trim()), n.push(s));
  }

  return n;
};

function ue(e, n, r) {
  return U.diff(e, n, r);
}

var ae = new N();

ae.tokenize = function (e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var de = new N();

de.tokenize = function (e) {
  return e.split(/([{}:;,]|\s+)/);
};

function W(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? W = function W(n) {
    return typeof n;
  } : W = function W(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(e);
}

function b(e) {
  return ce(e) || pe(e) || ve(e) || he();
}

function ce(e) {
  if (Array.isArray(e)) return V(e);
}

function pe(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e)) return Array.from(e);
}

function ve(e, n) {
  if (!!e) {
    if (typeof e == "string") return V(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return V(e, n);
  }
}

function V(e, n) {
  (n == null || n > e.length) && (n = e.length);

  for (var r = 0, t = new Array(n); r < n; r++) {
    t[r] = e[r];
  }

  return t;
}

function he() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ge = Object.prototype.toString,
    q = new N();
q.useLongestToken = !0, q.tokenize = U.tokenize, q.castInput = function (e) {
  var n = this.options,
      r = n.undefinedReplacement,
      t = n.stringifyReplacer,
      s = t === void 0 ? function (i, l) {
    return typeof l == "undefined" ? r : l;
  } : t;
  return typeof e == "string" ? e : JSON.stringify(Z(e, null, null, s), s, "  ");
}, q.equals = function (e, n) {
  return N.prototype.equals.call(q, e.replace(/,([\r\n])/g, "$1"), n.replace(/,([\r\n])/g, "$1"));
};

function Z(e, n, r, t, s) {
  n = n || [], r = r || [], t && (e = t(s, e));
  var i;

  for (i = 0; i < n.length; i += 1) {
    if (n[i] === e) return r[i];
  }

  var l;

  if (ge.call(e) === "[object Array]") {
    for (n.push(e), l = new Array(e.length), r.push(l), i = 0; i < e.length; i += 1) {
      l[i] = Z(e[i], n, r, t, s);
    }

    return n.pop(), r.pop(), l;
  }

  if (e && e.toJSON && (e = e.toJSON()), W(e) === "object" && e !== null) {
    n.push(e), l = {}, r.push(l);
    var f = [],
        a;

    for (a in e) {
      e.hasOwnProperty(a) && f.push(a);
    }

    for (f.sort(), i = 0; i < f.length; i += 1) {
      a = f[i], l[a] = Z(e[a], n, r, t, a);
    }

    n.pop(), r.pop();
  } else l = e;

  return l;
}

var B = new N();
B.tokenize = function (e) {
  return e.slice();
}, B.join = B.removeEmpty = function (e) {
  return e;
};

function _(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = e.split(/\r\n|[\n\v\f\r\x85]/),
      t = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      s = [],
      i = 0;

  function l() {
    var o = {};

    for (s.push(o); i < r.length;) {
      var p = r[i];
      if (/^(\-\-\-|\+\+\+|@@)\s/.test(p)) break;
      var c = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(p);
      c && (o.index = c[1]), i++;
    }

    for (f(o), f(o), o.hunks = []; i < r.length;) {
      var u = r[i];
      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u)) break;
      if (/^@@/.test(u)) o.hunks.push(a());else {
        if (u && n.strict) throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(u));
        i++;
      }
    }
  }

  function f(o) {
    var p = /^(---|\+\+\+)\s+(.*)$/.exec(r[i]);

    if (p) {
      var c = p[1] === "---" ? "old" : "new",
          u = p[2].split("	", 2),
          v = u[0].replace(/\\\\/g, "\\");
      /^".*"$/.test(v) && (v = v.substr(1, v.length - 2)), o[c + "FileName"] = v, o[c + "Header"] = (u[1] || "").trim(), i++;
    }
  }

  function a() {
    var o = i,
        p = r[i++],
        c = p.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
        u = {
      oldStart: +c[1],
      oldLines: typeof c[2] == "undefined" ? 1 : +c[2],
      newStart: +c[3],
      newLines: typeof c[4] == "undefined" ? 1 : +c[4],
      lines: [],
      linedelimiters: []
    };
    u.oldLines === 0 && (u.oldStart += 1), u.newLines === 0 && (u.newStart += 1);

    for (var v = 0, h = 0; i < r.length && !(r[i].indexOf("--- ") === 0 && i + 2 < r.length && r[i + 1].indexOf("+++ ") === 0 && r[i + 2].indexOf("@@") === 0); i++) {
      var d = r[i].length == 0 && i != r.length - 1 ? " " : r[i][0];
      if (d === "+" || d === "-" || d === " " || d === "\\") u.lines.push(r[i]), u.linedelimiters.push(t[i] || "\n"), d === "+" ? v++ : d === "-" ? h++ : d === " " && (v++, h++);else break;
    }

    if (!v && u.newLines === 1 && (u.newLines = 0), !h && u.oldLines === 1 && (u.oldLines = 0), n.strict) {
      if (v !== u.newLines) throw new Error("Added line count did not match for hunk at line " + (o + 1));
      if (h !== u.oldLines) throw new Error("Removed line count did not match for hunk at line " + (o + 1));
    }

    return u;
  }

  for (; i < r.length;) {
    l();
  }

  return s;
}

function we(e, n, r) {
  var t = !0,
      s = !1,
      i = !1,
      l = 1;
  return function f() {
    if (t && !i) {
      if (s ? l++ : t = !1, e + l <= r) return l;
      i = !0;
    }

    if (!s) return i || (t = !0), n <= e - l ? -l++ : (s = !0, f());
  };
}

function Ie(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};

  if (typeof n == "string" && (n = _(n)), Array.isArray(n)) {
    if (n.length > 1) throw new Error("applyPatch only works with a single input.");
    n = n[0];
  }

  var t = e.split(/\r\n|[\n\v\f\r\x85]/),
      s = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      i = n.hunks,
      l = r.compareLine || function (M, S, R, H) {
    return S === H;
  },
      f = 0,
      a = r.fuzzFactor || 0,
      o = 0,
      p = 0,
      c,
      u;

  function v(M, S) {
    for (var R = 0; R < M.lines.length; R++) {
      var H = M.lines[R],
          D = H.length > 0 ? H[0] : " ",
          se = H.length > 0 ? H.substr(1) : H;

      if (D === " " || D === "-") {
        if (!l(S + 1, t[S], D, se) && (f++, f > a)) return !1;
        S++;
      }
    }

    return !0;
  }

  for (var h = 0; h < i.length; h++) {
    for (var d = i[h], w = t.length - d.oldLines, y = 0, L = p + d.oldStart - 1, x = we(L, o, w); y !== void 0; y = x()) {
      if (v(d, L + y)) {
        d.offset = p += y;
        break;
      }
    }

    if (y === void 0) return !1;
    o = d.offset + d.oldStart + d.oldLines;
  }

  for (var g = 0, F = 0; F < i.length; F++) {
    var m = i[F],
        E = m.oldStart + m.offset + g - 1;
    g += m.newLines - m.oldLines;

    for (var C = 0; C < m.lines.length; C++) {
      var I = m.lines[C],
          z = I.length > 0 ? I[0] : " ",
          $ = I.length > 0 ? I.substr(1) : I,
          J = m.linedelimiters[C];
      if (z === " ") E++;else if (z === "-") t.splice(E, 1), s.splice(E, 1);else if (z === "+") t.splice(E, 0, $), s.splice(E, 0, J), E++;else if (z === "\\") {
        var T = m.lines[C - 1] ? m.lines[C - 1][0] : null;
        T === "+" ? c = !0 : T === "-" && (u = !0);
      }
    }
  }

  if (c) for (; !t[t.length - 1];) {
    t.pop(), s.pop();
  } else u && (t.push(""), s.push("\n"));

  for (var A = 0; A < t.length - 1; A++) {
    t[A] = t[A] + s[A];
  }

  return t.join("");
}

function k(e, n, r, t, s, i, l) {
  l || (l = {}), typeof l.context == "undefined" && (l.context = 4);
  var f = ue(r, t, l);
  f.push({
    value: "",
    lines: []
  });

  function a(y) {
    return y.map(function (L) {
      return " " + L;
    });
  }

  for (var o = [], p = 0, c = 0, u = [], v = 1, h = 1, d = function d(L) {
    var x = f[L],
        g = x.lines || x.value.replace(/\n$/, "").split("\n");

    if (x.lines = g, x.added || x.removed) {
      var F;

      if (!p) {
        var m = f[L - 1];
        p = v, c = h, m && (u = l.context > 0 ? a(m.lines.slice(-l.context)) : [], p -= u.length, c -= u.length);
      }

      (F = u).push.apply(F, b(g.map(function (A) {
        return (x.added ? "+" : "-") + A;
      }))), x.added ? h += g.length : v += g.length;
    } else {
      if (p) if (g.length <= l.context * 2 && L < f.length - 2) {
        var E;
        (E = u).push.apply(E, b(a(g)));
      } else {
        var C,
            I = Math.min(g.length, l.context);
        (C = u).push.apply(C, b(a(g.slice(0, I))));
        var z = {
          oldStart: p,
          oldLines: v - p + I,
          newStart: c,
          newLines: h - c + I,
          lines: u
        };

        if (L >= f.length - 2 && g.length <= l.context) {
          var $ = /\n$/.test(r),
              J = /\n$/.test(t),
              T = g.length == 0 && u.length > z.oldLines;
          !$ && T && r.length > 0 && u.splice(z.oldLines, 0, "\\ No newline at end of file"), (!$ && !T || !J) && u.push("\\ No newline at end of file");
        }

        o.push(z), p = 0, c = 0, u = [];
      }
      v += g.length, h += g.length;
    }
  }, w = 0; w < f.length; w++) {
    d(w);
  }

  return {
    oldFileName: e,
    newFileName: n,
    oldHeader: s,
    newHeader: i,
    hunks: o
  };
}

function Le(e) {
  var n = [];
  e.oldFileName == e.newFileName && n.push("Index: " + e.oldFileName), n.push("==================================================================="), n.push("--- " + e.oldFileName + (typeof e.oldHeader == "undefined" ? "" : "	" + e.oldHeader)), n.push("+++ " + e.newFileName + (typeof e.newHeader == "undefined" ? "" : "	" + e.newHeader));

  for (var r = 0; r < e.hunks.length; r++) {
    var t = e.hunks[r];
    t.oldLines === 0 && (t.oldStart -= 1), t.newLines === 0 && (t.newStart -= 1), n.push("@@ -" + t.oldStart + "," + t.oldLines + " +" + t.newStart + "," + t.newLines + " @@"), n.push.apply(n, t.lines);
  }

  return n.join("\n") + "\n";
}

function Ne(e, n, r, t, s, i, l) {
  return Le(k(e, n, r, t, s, i, l));
}

function ye(e, n) {
  return e.length !== n.length ? !1 : G(e, n);
}

function G(e, n) {
  if (n.length > e.length) return !1;

  for (var r = 0; r < n.length; r++) {
    if (n[r] !== e[r]) return !1;
  }

  return !0;
}

function xe(e) {
  var n = X(e.lines),
      r = n.oldLines,
      t = n.newLines;
  r !== void 0 ? e.oldLines = r : delete e.oldLines, t !== void 0 ? e.newLines = t : delete e.newLines;
}

function be(e, n) {
  if (typeof e == "string") {
    if (/^@@/m.test(e) || /^Index:/m.test(e)) return _(e)[0];
    if (!n) throw new Error("Must provide a base reference or pass in a patch");
    return k(void 0, void 0, n, e);
  }

  return e;
}

function ze(e) {
  return e.newFileName && e.newFileName !== e.oldFileName;
}

function Ae(e, n, r) {
  return n === r ? n : (e.conflict = !0, {
    mine: n,
    theirs: r
  });
}

function He(e, n) {
  return e.oldStart < n.oldStart && e.oldStart + e.oldLines < n.oldStart;
}

function Oe(e, n) {
  return {
    oldStart: e.oldStart,
    oldLines: e.oldLines,
    newStart: e.newStart + n,
    newLines: e.newLines,
    lines: e.lines
  };
}

function Te(e, n, r, t, s) {
  var i = {
    offset: n,
    lines: r,
    index: 0
  },
      l = {
    offset: t,
    lines: s,
    index: 0
  };

  for (ne(e, i, l), ne(e, l, i); i.index < i.lines.length && l.index < l.lines.length;) {
    var f = i.lines[i.index],
        a = l.lines[l.index];
    if ((f[0] === "-" || f[0] === "+") && (a[0] === "-" || a[0] === "+")) me(e, i, l);else if (f[0] === "+" && a[0] === " ") {
      var o;
      (o = e.lines).push.apply(o, b(O(i)));
    } else if (a[0] === "+" && f[0] === " ") {
      var p;
      (p = e.lines).push.apply(p, b(O(l)));
    } else f[0] === "-" && a[0] === " " ? ee(e, i, l) : a[0] === "-" && f[0] === " " ? ee(e, l, i, !0) : f === a ? (e.lines.push(f), i.index++, l.index++) : Q(e, O(i), O(l));
  }

  re(e, i), re(e, l), xe(e);
}

function me(e, n, r) {
  var t = O(n),
      s = O(r);

  if (te(t) && te(s)) {
    if (G(t, s) && ie(r, t, t.length - s.length)) {
      var i;
      (i = e.lines).push.apply(i, b(t));
      return;
    } else if (G(s, t) && ie(n, s, s.length - t.length)) {
      var l;
      (l = e.lines).push.apply(l, b(s));
      return;
    }
  } else if (ye(t, s)) {
    var f;
    (f = e.lines).push.apply(f, b(t));
    return;
  }

  Q(e, t, s);
}

function ee(e, n, r, t) {
  var s = O(n),
      i = Fe(r, s);

  if (i.merged) {
    var l;
    (l = e.lines).push.apply(l, b(i.merged));
  } else Q(e, t ? i : s, t ? s : i);
}

function Q(e, n, r) {
  e.conflict = !0, e.lines.push({
    conflict: !0,
    mine: n,
    theirs: r
  });
}

function ne(e, n, r) {
  for (; n.offset < r.offset && n.index < n.lines.length;) {
    var t = n.lines[n.index++];
    e.lines.push(t), n.offset++;
  }
}

function re(e, n) {
  for (; n.index < n.lines.length;) {
    var r = n.lines[n.index++];
    e.lines.push(r);
  }
}

function O(e) {
  for (var n = [], r = e.lines[e.index][0]; e.index < e.lines.length;) {
    var t = e.lines[e.index];
    if (r === "-" && t[0] === "+" && (r = "+"), r === t[0]) n.push(t), e.index++;else break;
  }

  return n;
}

function Fe(e, n) {
  for (var r = [], t = [], s = 0, i = !1, l = !1; s < n.length && e.index < e.lines.length;) {
    var f = e.lines[e.index],
        a = n[s];
    if (a[0] === "+") break;
    if (i = i || f[0] !== " ", t.push(a), s++, f[0] === "+") for (l = !0; f[0] === "+";) {
      r.push(f), f = e.lines[++e.index];
    }
    a.substr(1) === f.substr(1) ? (r.push(f), e.index++) : l = !0;
  }

  if ((n[s] || "")[0] === "+" && i && (l = !0), l) return r;

  for (; s < n.length;) {
    t.push(n[s++]);
  }

  return {
    merged: t,
    changes: r
  };
}

function te(e) {
  return e.reduce(function (n, r) {
    return n && r[0] === "-";
  }, !0);
}

function ie(e, n, r) {
  for (var t = 0; t < r; t++) {
    var s = n[n.length - r + t].substr(1);
    if (e.lines[e.index + t] !== " " + s) return !1;
  }

  return e.index += r, !0;
}

function X(e) {
  var n = 0,
      r = 0;
  return e.forEach(function (t) {
    if (typeof t != "string") {
      var s = X(t.mine),
          i = X(t.theirs);
      n !== void 0 && (s.oldLines === i.oldLines ? n += s.oldLines : n = void 0), r !== void 0 && (s.newLines === i.newLines ? r += s.newLines : r = void 0);
    } else r !== void 0 && (t[0] === "+" || t[0] === " ") && r++, n !== void 0 && (t[0] === "-" || t[0] === " ") && n++;
  }), {
    oldLines: n,
    newLines: r
  };
}

function Se(e) {
  var n = e;
  return n = n.replace(/&/g, "&amp;"), n = n.replace(/</g, "&lt;"), n = n.replace(/>/g, "&gt;"), n = n.replace(/"/g, "&quot;"), n;
}

var Ee = Y,
    qe = Y;

// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/sha256.js



var sha256 = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(x) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = Array;
            _context.t1 = Uint8Array;
            _context.next = 4;
            return crypto.subtle.digest("SHA-256", typeof x === "string" ? new TextEncoder().encode(x) : x);

          case 4:
            _context.t2 = _context.sent;
            _context.t3 = new _context.t1(_context.t2).slice(0, 4);
            return _context.abrupt("return", _context.t0.from.call(_context.t0, _context.t3).map(function (b) {
              return ("00" + b.toString(16)).slice(-2);
            }).join(""));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sha256(_x) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/diff.js






var diff = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(str1, str2) {
    var sha1Str1, res;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sha1Str1 = sha256(str1);
            res = Ee(str1, str2);
            _context.next = 4;
            return sha1Str1;

          case 4:
            _context.t0 = _context.sent;
            _context.t1 = res.map(function (x) {
              return x.added ? x.value : x.removed ? -x.count : x.count;
            });
            return _context.abrupt("return", {
              b: _context.t0,
              c: _context.t1
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function diff(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var diff_isDiff = function isDiff(str) {
  if (str.length < 10) {
    return false;
  }

  var isKey = Object(toConsumableArray["a" /* default */])(str.slice(0, 8)).filter(function (x) {
    return x < "0" || x > "f";
  }).length === 0;
  var maybeInst = str.slice(8);

  if (isKey && maybeInst[0] === "[" && maybeInst[maybeInst.length - 1] === "]") {
    try {
      return JSON.parse(maybeInst).length > 1;
    } catch (_a) {
      return false;
    }
  }

  return false;
};
var assemble = function assemble(oldValue, instructions) {
  var instArr = JSON.parse(instructions);
  var old = oldValue.slice();
  var ret = "";
  instArr.forEach(function (element) {
    if (Number(element) === element) {
      var absNum = Math.abs(element);
      var currentString = old.slice(0, absNum);
      old = old.slice(absNum);

      if (element > 0) {
        ret += String(currentString);
      }
    } else {
      ret += String(element);
    }
  });
  return ret;
};
// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/getDbObj.js





var getDbObj_getDbObj = function getDbObj(db) {
  var dbObj = {
    get: function get(key) {
      var _arguments = arguments;
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var format, data, json, allData, text, keyOfDiff, instructions, oldValue;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                format = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : "string";
                _context.prev = 1;
                _context.next = 4;
                return db.get(key);

              case 4:
                data = _context.sent;

                if (data) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", null);

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", null);

              case 12:
                if (!(format === "json")) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 13;
                json = JSON.parse(data);
                return _context.abrupt("return", json);

              case 18:
                _context.prev = 18;
                _context.t1 = _context["catch"](13);
                return _context.abrupt("return", data);

              case 21:
                _context.next = 23;
                return data;

              case 23:
                allData = _context.sent;

                if (!(format === "string")) {
                  _context.next = 36;
                  break;
                }

                if (!(typeof allData === "string" && format === "string")) {
                  _context.next = 35;
                  break;
                }

                text = allData;

                if (!diff_isDiff(text)) {
                  _context.next = 34;
                  break;
                }

                keyOfDiff = text.slice(0, 8);
                instructions = text.slice(8);
                _context.next = 32;
                return dbObj.get(keyOfDiff);

              case 32:
                oldValue = _context.sent;
                return _context.abrupt("return", assemble(oldValue, instructions));

              case 34:
                return _context.abrupt("return", allData);

              case 35:
                return _context.abrupt("return", new TextDecoder().decode(allData));

              case 36:
                return _context.abrupt("return", data);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9], [13, 18]]);
      }))();
    },
    put: function put(key, val) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var prev, oldKey, actualValue, prevValue, prevSha, diffObj, diffAsStr, str;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return dbObj.get(key);

              case 3:
                oldKey = _context2.sent;

                if (!(typeof oldKey === "string" && typeof val === "string" && oldKey.length === 8 && oldKey !== val)) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 7;
                return dbObj.get(val);

              case 7:
                actualValue = _context2.sent;
                _context2.next = 10;
                return dbObj.get(oldKey);

              case 10:
                prevValue = _context2.sent;

                if (!(typeof prevValue === "string")) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 14;
                return sha256(prevValue);

              case 14:
                prevSha = _context2.sent;

                if (!(prevSha === oldKey)) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 18;
                return diff(actualValue, prevValue);

              case 18:
                diffObj = _context2.sent;
                diffAsStr = diffObj.b + JSON.stringify(diffObj.c);
                _context2.next = 22;
                return dbObj.put(prevSha, diffAsStr);

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);
                prev = "";

              case 27:
                if (!(prev !== "" && val === prev)) {
                  _context2.next = 29;
                  break;
                }

                return _context2.abrupt("return", val);

              case 29:
                if (typeof val !== "string") {
                  str = new TextDecoder().decode(val);
                } else {
                  str = val;
                }

                _context2.next = 32;
                return db.put(key, str);

              case 32:
                return _context2.abrupt("return", _context2.sent);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 24]]);
      }))();
    },
    delete: function _delete(key) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return db.delete(key);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    clear: function clear() {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return db.clear();

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    keys: function keys() {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return db.getAllKeys();

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  };
  return dbObj;
};
// CONCATENATED MODULE: ./node_modules/@zedvision/shadb/dist/shaDB.js



//@ts-nocheck


function getDB() {
  var storeName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "defaultStore";
  return /*#__PURE__*/Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
    var dbPromise, keyVal;
    return regenerator_default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dbPromise = openDB1("zed-vision-alpha", 1, {
              upgrade: function upgrade(db) {
                db.createObjectStore(storeName);
              },
              blocked: function blocked() {},
              blocking: function blocking() {},
              terminated: function terminated() {}
            });
            keyVal = {
              get: function get(key) {
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return dbPromise;

                        case 2:
                          return _context.abrupt("return", _context.sent.get(storeName, key));

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },
              put: function put(key, val) {
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                  return regenerator_default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return dbPromise;

                        case 2:
                          return _context2.abrupt("return", _context2.sent.put(storeName, val, key));

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))();
              },
              delete: function _delete(key) {
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
                  return regenerator_default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return dbPromise;

                        case 2:
                          return _context3.abrupt("return", _context3.sent.delete(storeName, key));

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }))();
              },
              clear: function clear() {
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
                  return regenerator_default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return dbPromise;

                        case 2:
                          return _context4.abrupt("return", _context4.sent.clear(storeName));

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }))();
              },
              keys: function keys() {
                return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
                  return regenerator_default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return dbPromise;

                        case 2:
                          return _context5.abrupt("return", _context5.sent.getAllKeys(storeName));

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }))();
              }
            };
            return _context6.abrupt("return", getDbObj_getDbObj(keyVal));

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}
var shaDB = {
  /**
  * @param {string} key
  * @param {"string" | "json"} type
  */
  get: function () {
    var _get = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee7(key, type) {
      var db;
      return regenerator_default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return getDB("shaDB");

            case 2:
              _context7.t0 = _context7.sent;
              _context7.next = 5;
              return (0, _context7.t0)();

            case 5:
              db = _context7.sent;
              return _context7.abrupt("return", db.get(key, type));

            case 7:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),

  /**
  * @param {string} key
  * @param {string} value
  */
  put: function () {
    var _put = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee8(key, value) {
      var db;
      return regenerator_default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return getDB("shaDB");

            case 2:
              _context8.t0 = _context8.sent;
              _context8.next = 5;
              return (0, _context8.t0)();

            case 5:
              db = _context8.sent;
              return _context8.abrupt("return", db.put(key, value));

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function put(_x3, _x4) {
      return _put.apply(this, arguments);
    }

    return put;
  }()
};

/***/ })

}]);
//# sourceMappingURL=5-acb8c56955b8ef43ced8.js.map