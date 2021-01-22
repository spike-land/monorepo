/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.21.1(b87d56c53329360e70d7d4cdb74da0073a3ee75c)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/ (function () {
  var z = [
      "require",
      "exports",
      "vs/base/common/platform",
      "vs/editor/common/core/position",
      "vs/base/common/errors",
      "vs/base/common/strings",
      "vs/editor/common/core/range",
      "vs/base/common/lifecycle",
      "vs/base/common/stopwatch",
      "vs/base/common/event",
      "vs/base/common/diff/diff",
      "vs/base/common/types",
      "vs/base/common/uint",
      "vs/base/common/uri",
      "vs/base/common/arrays",
      "vs/base/common/diff/diffChange",
      "vs/base/common/iterator",
      "vs/base/common/keyCodes",
      "vs/base/common/linkedList",
      "vs/base/common/process",
      "vs/base/common/path",
      "vs/base/common/cancellation",
      "vs/base/common/hash",
      "vs/editor/common/core/characterClassifier",
      "vs/editor/common/core/selection",
      "vs/editor/common/core/token",
      "vs/editor/common/diff/diffComputer",
      "vs/editor/common/model/wordHelper",
      "vs/editor/common/modes/linkComputer",
      "vs/editor/common/modes/supports/inplaceReplaceSupport",
      "vs/editor/common/standalone/standaloneEnums",
      "vs/editor/common/standalone/standaloneBase",
      "vs/editor/common/viewModel/prefixSumComputer",
      "vs/editor/common/model/mirrorTextModel",
      "vs/base/common/worker/simpleWorker",
      "vs/editor/common/services/editorSimpleWorker",
    ],
    G = function (I) {
      for (var t = [], p = 0, P = I.length; p < P; p++) t[p] = z[I[p]];
      return t;
    };
  "use strict";
  var ce = this, fe = typeof global == "object" ? global : {}, X;
  (function (I) {
    I.global = ce;
    var t = function () {
      function p() {
        this._detected = !1,
          this._isWindows = !1,
          this._isNode = !1,
          this._isElectronRenderer = !1,
          this._isWebWorker = !1;
      }
      return Object.defineProperty(p.prototype, "isWindows", {
        get: function () {
          return this._detect(), this._isWindows;
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(p.prototype, "isNode", {
          get: function () {
            return this._detect(), this._isNode;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(p.prototype, "isElectronRenderer", {
          get: function () {
            return this._detect(), this._isElectronRenderer;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(p.prototype, "isWebWorker", {
          get: function () {
            return this._detect(), this._isWebWorker;
          },
          enumerable: !1,
          configurable: !0,
        }),
        p.prototype._detect = function () {
          this._detected ||
            (this._detected = !0,
              this._isWindows = p._isWindows(),
              this._isNode = typeof module != "undefined" && !!module.exports,
              this._isElectronRenderer = typeof process != "undefined" &&
                typeof process.versions != "undefined" &&
                typeof process.versions.electron != "undefined" &&
                process.type === "renderer",
              this._isWebWorker = typeof I.global.importScripts == "function");
        },
        p._isWindows = function () {
          return typeof navigator != "undefined" && navigator.userAgent &&
              navigator.userAgent.indexOf("Windows") >= 0 ? !0
          : typeof process != "undefined"
            ? process.platform === "win32"
            : !1;
        },
        p;
    }();
    I.Environment = t;
  })(X || (X = {}));
  var X;
  (function (I) {
    var t = function () {
      function E(o, h, s) {
        this.type = o, this.detail = h, this.timestamp = s;
      }
      return E;
    }();
    I.LoaderEvent = t;
    var p = function () {
      function E(o) {
        this._events = [new t(1, "", o)];
      }
      return E.prototype.record = function (o, h) {
        this._events.push(
          new t(o, h, I.Utilities.getHighPerformanceTimestamp()),
        );
      },
        E.prototype.getEvents = function () {
          return this._events;
        },
        E;
    }();
    I.LoaderEventRecorder = p;
    var P = function () {
      function E() {}
      return E.prototype.record = function (o, h) {},
        E.prototype.getEvents = function () {
          return [];
        },
        E.INSTANCE = new E(),
        E;
    }();
    I.NullLoaderEventRecorder = P;
  })(X || (X = {}));
  var X;
  (function (I) {
    var t = function () {
      function p() {}
      return p.fileUriToFilePath = function (P, E) {
        if (E = decodeURI(E).replace(/%23/g, "#"), P) {
          if (/^file:\/\/\//.test(E)) return E.substr(8);
          if (/^file:\/\//.test(E)) return E.substr(5);
        } else if (/^file:\/\//.test(E)) return E.substr(7);
        return E;
      },
        p.startsWith = function (P, E) {
          return P.length >= E.length && P.substr(0, E.length) === E;
        },
        p.endsWith = function (P, E) {
          return P.length >= E.length && P.substr(P.length - E.length) === E;
        },
        p.containsQueryString = function (P) {
          return /^[^\#]*\?/gi.test(P);
        },
        p.isAbsolutePath = function (P) {
          return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(P);
        },
        p.forEachProperty = function (P, E) {
          if (P) {
            var o = void 0;
            for (o in P) P.hasOwnProperty(o) && E(o, P[o]);
          }
        },
        p.isEmpty = function (P) {
          var E = !0;
          return p.forEachProperty(P, function () {
            E = !1;
          }),
            E;
        },
        p.recursiveClone = function (P) {
          if (
            !P || typeof P != "object" || P instanceof RegExp ||
            !Array.isArray(P) && Object.getPrototypeOf(P) !== Object.prototype
          ) {
            return P;
          }
          var E = Array.isArray(P) ? [] : {};
          return p.forEachProperty(P, function (o, h) {
            h && typeof h == "object" ? E[o] = p.recursiveClone(h) : E[o] = h;
          }),
            E;
        },
        p.generateAnonymousModule = function () {
          return "===anonymous" + p.NEXT_ANONYMOUS_ID++ + "===";
        },
        p.isAnonymousModule = function (P) {
          return p.startsWith(P, "===anonymous");
        },
        p.getHighPerformanceTimestamp = function () {
          return this.PERFORMANCE_NOW_PROBED ||
            (this.PERFORMANCE_NOW_PROBED = !0,
              this.HAS_PERFORMANCE_NOW = I.global.performance &&
                typeof I.global.performance.now == "function"),
            this.HAS_PERFORMANCE_NOW ? I.global.performance.now() : Date.now();
        },
        p.NEXT_ANONYMOUS_ID = 1,
        p.PERFORMANCE_NOW_PROBED = !1,
        p.HAS_PERFORMANCE_NOW = !1,
        p;
    }();
    I.Utilities = t;
  })(X || (X = {}));
  var X;
  (function (I) {
    function t(E) {
      if (E instanceof Error) return E;
      var o = new Error(E.message || String(E) || "Unknown Error");
      return E.stack && (o.stack = E.stack), o;
    }
    I.ensureError = t;
    var p = function () {
      function E() {}
      return E.validateConfigurationOptions = function (o) {
        function h(u) {
          if (u.phase === "loading") {
            console.error('Loading "' + u.moduleId + '" failed'),
              console.error(u),
              console.error("Here are the modules that depend on it:"),
              console.error(u.neededBy);
            return;
          }
          if (u.phase === "factory") {
            console.error(
              'The factory method of "' + u.moduleId +
                '" has thrown an exception',
            ), console.error(u);
            return;
          }
        }
        if (
          o = o || {},
            typeof o.baseUrl != "string" && (o.baseUrl = ""),
            typeof o.isBuild != "boolean" && (o.isBuild = !1),
            typeof o.paths != "object" && (o.paths = {}),
            typeof o.config != "object" && (o.config = {}),
            typeof o.catchError == "undefined" && (o.catchError = !1),
            typeof o.recordStats == "undefined" && (o.recordStats = !1),
            typeof o.urlArgs != "string" && (o.urlArgs = ""),
            typeof o.onError != "function" && (o.onError = h),
            Array.isArray(o.ignoreDuplicateModules) ||
            (o.ignoreDuplicateModules = []),
            o.baseUrl.length > 0 &&
            (I.Utilities.endsWith(o.baseUrl, "/") || (o.baseUrl += "/")),
            typeof o.cspNonce != "string" && (o.cspNonce = ""),
            typeof o.preferScriptTags == "undefined" &&
            (o.preferScriptTags = !1),
            Array.isArray(o.nodeModules) || (o.nodeModules = []),
            o.nodeCachedData && typeof o.nodeCachedData == "object" &&
            (typeof o.nodeCachedData.seed != "string" &&
              (o.nodeCachedData.seed = "seed"),
              (typeof o.nodeCachedData.writeDelay != "number" ||
                o.nodeCachedData.writeDelay < 0) &&
              (o.nodeCachedData.writeDelay = 1e3 * 7),
              !o.nodeCachedData.path ||
              typeof o.nodeCachedData.path != "string")
        ) {
          var s = t(
            new Error("INVALID cached data configuration, 'path' MUST be set"),
          );
          s.phase = "configuration", o.onError(s), o.nodeCachedData = void 0;
        }
        return o;
      },
        E.mergeConfigurationOptions = function (o, h) {
          o === void 0 && (o = null), h === void 0 && (h = null);
          var s = I.Utilities.recursiveClone(h || {});
          return I.Utilities.forEachProperty(o, function (u, d) {
            u === "ignoreDuplicateModules" &&
              typeof s.ignoreDuplicateModules != "undefined"
              ? s.ignoreDuplicateModules = s.ignoreDuplicateModules.concat(d)
              : u === "paths" && typeof s.paths != "undefined"
              ? I.Utilities.forEachProperty(d, function (N, a) {
                return s.paths[N] = a;
              })
              : u === "config" && typeof s.config != "undefined"
              ? I.Utilities.forEachProperty(d, function (N, a) {
                return s.config[N] = a;
              })
              : s[u] = I.Utilities.recursiveClone(d);
          }),
            E.validateConfigurationOptions(s);
        },
        E;
    }();
    I.ConfigurationOptionsUtil = p;
    var P = function () {
      function E(o, h) {
        if (
          this._env = o,
            this.options = p.mergeConfigurationOptions(h),
            this._createIgnoreDuplicateModulesMap(),
            this._createNodeModulesMap(),
            this._createSortedPathsRules(),
            this.options.baseUrl === ""
        ) {
          if (
            this.options.nodeRequire && this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename && this._env.isNode
          ) {
            var s = this.options.nodeRequire.main.filename,
              u = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
            this.options.baseUrl = s.substring(0, u + 1);
          }
          if (this.options.nodeMain && this._env.isNode) {
            var s = this.options.nodeMain,
              u = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
            this.options.baseUrl = s.substring(0, u + 1);
          }
        }
      }
      return E.prototype._createIgnoreDuplicateModulesMap = function () {
        this.ignoreDuplicateModulesMap = {};
        for (var o = 0; o < this.options.ignoreDuplicateModules.length; o++) {
          this
            .ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[o]] =
              !0;
        }
      },
        E.prototype._createNodeModulesMap = function () {
          this.nodeModulesMap = Object.create(null);
          for (var o = 0, h = this.options.nodeModules; o < h.length; o++) {
            var s = h[o];
            this.nodeModulesMap[s] = !0;
          }
        },
        E.prototype._createSortedPathsRules = function () {
          var o = this;
          this.sortedPathsRules = [],
            I.Utilities.forEachProperty(this.options.paths, function (h, s) {
              Array.isArray(s)
                ? o.sortedPathsRules.push({ from: h, to: s })
                : o.sortedPathsRules.push({ from: h, to: [s] });
            }),
            this.sortedPathsRules.sort(function (h, s) {
              return s.from.length - h.from.length;
            });
        },
        E.prototype.cloneAndMerge = function (o) {
          return new E(this._env, p.mergeConfigurationOptions(o, this.options));
        },
        E.prototype.getOptionsLiteral = function () {
          return this.options;
        },
        E.prototype._applyPaths = function (o) {
          for (var h, s = 0, u = this.sortedPathsRules.length; s < u; s++) {
            if (
              h = this.sortedPathsRules[s], I.Utilities.startsWith(o, h.from)
            ) {
              for (var d = [], N = 0, a = h.to.length; N < a; N++) {
                d.push(h.to[N] + o.substr(h.from.length));
              }
              return d;
            }
          }
          return [o];
        },
        E.prototype._addUrlArgsToUrl = function (o) {
          return I.Utilities.containsQueryString(o)
            ? o + "&" + this.options.urlArgs : o + "?" + this.options.urlArgs;
        },
        E.prototype._addUrlArgsIfNecessaryToUrl = function (o) {
          return this.options.urlArgs ? this._addUrlArgsToUrl(o) : o;
        },
        E.prototype._addUrlArgsIfNecessaryToUrls = function (o) {
          if (this.options.urlArgs) {
            for (var h = 0, s = o.length; h < s; h++) {
              o[h] = this._addUrlArgsToUrl(o[h]);
            }
          }
          return o;
        },
        E.prototype.moduleIdToPaths = function (o) {
          var h = this.nodeModulesMap[o] === !0 ||
            this.options.amdModulesPattern instanceof RegExp &&
              !this.options.amdModulesPattern.test(o);
          if (h) return this.isBuild() ? ["empty:"] : ["node|" + o];
          var s = o, u;
          if (
            !I.Utilities.endsWith(s, ".js") && !I.Utilities.isAbsolutePath(s)
          ) {
            u = this._applyPaths(s);
            for (
              var d = 0, N = u.length; d < N; d++
            ) {
              this.isBuild() && u[d] === "empty:" ||
                (I.Utilities.isAbsolutePath(u[d]) ||
                  (u[d] = this.options.baseUrl + u[d]),
                  !I.Utilities.endsWith(u[d], ".js") &&
                  !I.Utilities.containsQueryString(u[d]) &&
                  (u[d] = u[d] + ".js"));
            }
          } else {
            !I.Utilities.endsWith(s, ".js") &&
            !I.Utilities.containsQueryString(s) && (s = s + ".js"), u = [s];
          }
          return this._addUrlArgsIfNecessaryToUrls(u);
        },
        E.prototype.requireToUrl = function (o) {
          var h = o;
          return I.Utilities.isAbsolutePath(h) ||
            (h = this._applyPaths(h)[0],
              I.Utilities.isAbsolutePath(h) || (h = this.options.baseUrl + h)),
            this._addUrlArgsIfNecessaryToUrl(h);
        },
        E.prototype.isBuild = function () {
          return this.options.isBuild;
        },
        E.prototype.isDuplicateMessageIgnoredFor = function (o) {
          return this.ignoreDuplicateModulesMap.hasOwnProperty(o);
        },
        E.prototype.getConfigForModule = function (o) {
          if (this.options.config) return this.options.config[o];
        },
        E.prototype.shouldCatchError = function () {
          return this.options.catchError;
        },
        E.prototype.shouldRecordStats = function () {
          return this.options.recordStats;
        },
        E.prototype.onError = function (o) {
          this.options.onError(o);
        },
        E;
    }();
    I.Configuration = P;
  })(X || (X = {}));
  var X;
  (function (I) {
    var t = function () {
        function s(u) {
          this._env = u, this._scriptLoader = null, this._callbackMap = {};
        }
        return s.prototype.load = function (u, d, N, a) {
          var b = this;
          if (!this._scriptLoader) {
            if (this._env.isWebWorker) this._scriptLoader = new P();
            else if (this._env.isElectronRenderer) {
              var _ = u.getConfig().getOptionsLiteral().preferScriptTags;
              _
                ? this._scriptLoader = new p()
                : this._scriptLoader = new E(this._env);
            } else {
              this._env.isNode
                ? this._scriptLoader = new E(this._env)
                : this._scriptLoader = new p();
            }
          }
          var v = { callback: N, errorback: a };
          if (this._callbackMap.hasOwnProperty(d)) {
            this._callbackMap[d].push(v);
            return;
          }
          this._callbackMap[d] = [v],
            this._scriptLoader.load(u, d, function () {
              return b.triggerCallback(d);
            }, function (i) {
              return b.triggerErrorback(d, i);
            });
        },
          s.prototype.triggerCallback = function (u) {
            var d = this._callbackMap[u];
            delete this._callbackMap[u];
            for (var N = 0; N < d.length; N++) d[N].callback();
          },
          s.prototype.triggerErrorback = function (u, d) {
            var N = this._callbackMap[u];
            delete this._callbackMap[u];
            for (var a = 0; a < N.length; a++) N[a].errorback(d);
          },
          s;
      }(),
      p = function () {
        function s() {}
        return s.prototype.attachListeners = function (u, d, N) {
          var a = function () {
              u.removeEventListener("load", b),
                u.removeEventListener("error", _);
            },
            b = function (v) {
              a(), d();
            },
            _ = function (v) {
              a(), N(v);
            };
          u.addEventListener("load", b), u.addEventListener("error", _);
        },
          s.prototype.load = function (u, d, N, a) {
            if (/^node\|/.test(d)) {
              var b = u.getConfig().getOptionsLiteral(),
                _ = o(u.getRecorder(), b.nodeRequire || I.global.nodeRequire),
                v = d.split("|"),
                i = null;
              try {
                i = _(v[1]);
              } catch (l) {
                a(l);
                return;
              }
              u.enqueueDefineAnonymousModule([], function () {
                return i;
              }), N();
            } else {
              var r = document.createElement("script");
              r.setAttribute("async", "async"),
                r.setAttribute("type", "text/javascript"),
                this.attachListeners(r, N, a);
              var g = u.getConfig().getOptionsLiteral().trustedTypesPolicy;
              g && (d = g.createScriptURL(d)), r.setAttribute("src", d);
              var f = u.getConfig().getOptionsLiteral().cspNonce;
              f && r.setAttribute("nonce", f),
                document.getElementsByTagName("head")[0].appendChild(r);
            }
          },
          s;
      }(),
      P = function () {
        function s() {}
        return s.prototype.load = function (u, d, N, a) {
          var b = u.getConfig().getOptionsLiteral().trustedTypesPolicy;
          b && (d = b.createScriptURL(d));
          try {
            importScripts(d), N();
          } catch (_) {
            a(_);
          }
        },
          s;
      }(),
      E = function () {
        function s(u) {
          this._env = u,
            this._didInitialize = !1,
            this._didPatchNodeRequire = !1;
        }
        return s.prototype._init = function (u) {
          this._didInitialize ||
            (this._didInitialize = !0,
              this._fs = u("fs"),
              this._vm = u("vm"),
              this._path = u("path"),
              this._crypto = u("crypto"));
        },
          s.prototype._initNodeRequire = function (u, d) {
            var N = d.getConfig().getOptionsLiteral().nodeCachedData;
            if (!!N && !this._didPatchNodeRequire) {
              this._didPatchNodeRequire = !0;
              var a = this, b = u("module");
              function _(v) {
                var i = v.constructor,
                  r = function (f) {
                    try {
                      return v.require(f);
                    } finally {
                    }
                  };
                return r.resolve = function (f) {
                  return i._resolveFilename(f, v);
                },
                  r.main = process.mainModule,
                  r.extensions = i._extensions,
                  r.cache = i._cache,
                  r;
              }
              b.prototype._compile = function (v, i) {
                var r = b.wrap(v.replace(/^#!.*/, "")),
                  g = d.getRecorder(),
                  f = a._getCachedDataPath(N, i),
                  l = { filename: i },
                  n;
                try {
                  var m = a._fs.readFileSync(f);
                  n = m.slice(0, 16),
                    l.cachedData = m.slice(16),
                    g.record(60, f);
                } catch (M) {
                  g.record(61, f);
                }
                var S = new a._vm.Script(r, l),
                  w = S.runInThisContext(l),
                  c = a._path.dirname(i),
                  C = _(this),
                  L = [this.exports, C, this, i, c, process, fe, Buffer],
                  A = w.apply(this.exports, L);
                return a._handleCachedData(S, r, f, !l.cachedData, d),
                  a._verifyCachedData(S, r, f, n, d),
                  A;
              };
            }
          },
          s.prototype.load = function (u, d, N, a) {
            var b = this,
              _ = u.getConfig().getOptionsLiteral(),
              v = o(u.getRecorder(), _.nodeRequire || I.global.nodeRequire),
              i = _.nodeInstrumenter || function (w) {
                return w;
              };
            this._init(v), this._initNodeRequire(v, u);
            var r = u.getRecorder();
            if (/^node\|/.test(d)) {
              var g = d.split("|"), f = null;
              try {
                f = v(g[1]);
              } catch (w) {
                a(w);
                return;
              }
              u.enqueueDefineAnonymousModule([], function () {
                return f;
              }), N();
            } else {
              d = I.Utilities.fileUriToFilePath(this._env.isWindows, d);
              var l = this._path.normalize(d),
                n = this._getElectronRendererScriptPathOrUri(l),
                m = Boolean(_.nodeCachedData),
                S = m ? this._getCachedDataPath(_.nodeCachedData, d) : void 0;
              this._readSourceAndCachedData(l, S, r, function (w, c, C, L) {
                if (w) {
                  a(w);
                  return;
                }
                var A;
                c.charCodeAt(0) === s._BOM
                  ? A = s._PREFIX + c.substring(1) + s._SUFFIX
                  : A = s._PREFIX + c + s._SUFFIX, A = i(A, l);
                var M = { filename: n, cachedData: C },
                  R = b._createAndEvalScript(u, A, M, N, a);
                b._handleCachedData(R, A, S, m && !C, u),
                  b._verifyCachedData(R, A, S, L, u);
              });
            }
          },
          s.prototype._createAndEvalScript = function (u, d, N, a, b) {
            var _ = u.getRecorder();
            _.record(31, N.filename);
            var v = new this._vm.Script(d, N),
              i = v.runInThisContext(N),
              r = u.getGlobalAMDDefineFunc(),
              g = !1,
              f = function () {
                return g = !0, r.apply(null, arguments);
              };
            return f.amd = r.amd,
              i.call(
                I.global,
                u.getGlobalAMDRequireFunc(),
                f,
                N.filename,
                this._path.dirname(N.filename),
              ),
              _.record(32, N.filename),
              g ? a()
              : b(
                new Error("Didn't receive define call in " + N.filename + "!"),
              ),
              v;
          },
          s.prototype._getElectronRendererScriptPathOrUri = function (u) {
            if (!this._env.isElectronRenderer)return u;
            var d = u.match(/^([a-z])\:(.*)/i);
            return d
              ? "file:///" +
                (d[1].toUpperCase() + ":" + d[2]).replace(/\\/g, "/")
              : "file://" + u;
          },
          s.prototype._getCachedDataPath = function (u, d) {
            var N = this._crypto.createHash("md5").update(d, "utf8").update(
                u.seed,
                "utf8",
              ).update(process.arch, "").digest("hex"),
              a = this._path.basename(d).replace(/\.js$/, "");
            return this._path.join(u.path, a + "-" + N + ".code");
          },
          s.prototype._handleCachedData = function (u, d, N, a, b) {
            var _ = this;
            u.cachedDataRejected ? this._fs.unlink(N, function (v) {
              b.getRecorder().record(62, N),
                _._createAndWriteCachedData(u, d, N, b),
                v && b.getConfig().onError(v);
            }) : a && this._createAndWriteCachedData(u, d, N, b);
          },
          s.prototype._createAndWriteCachedData = function (u, d, N, a) {
            var b = this,
              _ = Math.ceil(
                a.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                  (1 + Math.random()),
              ),
              v = -1,
              i = 0,
              r = void 0,
              g = function () {
                setTimeout(function () {
                  r ||
                    (r = b._crypto.createHash("md5").update(d, "utf8")
                      .digest());
                  var f = u.createCachedData();
                  if (!(f.length === 0 || f.length === v || i >= 5)) {
                    if (f.length < v) {
                      g();
                      return;
                    }
                    v = f.length,
                      b._fs.writeFile(N, Buffer.concat([r, f]), function (l) {
                        l && a.getConfig().onError(l),
                          a.getRecorder().record(63, N),
                          g();
                      });
                  }
                }, _ * Math.pow(4, i++));
              };
            g();
          },
          s.prototype._readSourceAndCachedData = function (u, d, N, a) {
            if (!d)this._fs.readFile(u, { encoding: "utf8" }, a);
            else {
              var b = void 0,
                _ = void 0,
                v = void 0,
                i = 2,
                r = function (g) {
                  g ? a(g) : --i == 0 && a(void 0, b, _, v);
                };
              this._fs.readFile(u, { encoding: "utf8" }, function (g, f) {
                b = f, r(g);
              }),
                this._fs.readFile(d, function (g, f) {
                  !g && f && f.length > 0
                    ? (v = f.slice(0, 16), _ = f.slice(16), N.record(60, d))
                    : N.record(61, d), r();
                });
            }
          },
          s.prototype._verifyCachedData = function (u, d, N, a, b) {
            var _ = this;
            !a || u.cachedDataRejected || setTimeout(function () {
              var v = _._crypto.createHash("md5").update(d, "utf8").digest();
              a.equals(v) ||
                (b.getConfig().onError(
                  new Error(
                    "FAILED TO VERIFY CACHED DATA, deleting stale '" + N +
                      "' now, but a RESTART IS REQUIRED",
                  ),
                ),
                  _._fs.unlink(N, function (i) {
                    i && b.getConfig().onError(i);
                  }));
            }, Math.ceil(5e3 * (1 + Math.random())));
          },
          s._BOM = 65279,
          s._PREFIX = "(function (require, define, __filename, __dirname) { ",
          s._SUFFIX = `
});`,
          s;
      }();
    function o(s, u) {
      if (u.__$__isRecorded) return u;
      var d = function (a) {
        s.record(33, a);
        try {
          return u(a);
        } finally {
          s.record(34, a);
        }
      };
      return d.__$__isRecorded = !0, d;
    }
    I.ensureRecordedNodeRequire = o;
    function h(s) {
      return new t(s);
    }
    I.createScriptLoader = h;
  })(X || (X = {}));
  var X;
  (function (I) {
    var t = function () {
      function s(u) {
        var d = u.lastIndexOf("/");
        d !== -1
          ? this.fromModulePath = u.substr(0, d + 1)
          : this.fromModulePath = "";
      }
      return s._normalizeModuleId = function (u) {
        var d = u, N;
        for (N = /\/\.\//; N.test(d);) d = d.replace(N, "/");
        for (
          d = d.replace(/^\.\//g, ""),
            N =
              /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
          N.test(d);
        ) {
          d = d.replace(N, "/");
        }
        return d = d.replace(
          /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
          "",
        ),
          d;
      },
        s.prototype.resolveModule = function (u) {
          var d = u;
          return I.Utilities.isAbsolutePath(d) ||
            (I.Utilities.startsWith(d, "./") ||
                I.Utilities.startsWith(d, "../")) &&
              (d = s._normalizeModuleId(this.fromModulePath + d)),
            d;
        },
        s.ROOT = new s(""),
        s;
    }();
    I.ModuleIdResolver = t;
    var p = function () {
      function s(u, d, N, a, b, _) {
        this.id = u,
          this.strId = d,
          this.dependencies = N,
          this._callback = a,
          this._errorback = b,
          this.moduleIdResolver = _,
          this.exports = {},
          this.error = null,
          this.exportsPassedIn = !1,
          this.unresolvedDependenciesCount = this.dependencies.length,
          this._isComplete = !1;
      }
      return s._safeInvokeFunction = function (u, d) {
        try {
          return { returnedValue: u.apply(I.global, d), producedError: null };
        } catch (N) {
          return { returnedValue: null, producedError: N };
        }
      },
        s._invokeFactory = function (u, d, N, a) {
          return u.isBuild() && !I.Utilities.isAnonymousModule(d)
            ? { returnedValue: null, producedError: null }
            : u.shouldCatchError()
            ? this._safeInvokeFunction(N, a)
            : { returnedValue: N.apply(I.global, a), producedError: null };
        },
        s.prototype.complete = function (u, d, N) {
          this._isComplete = !0;
          var a = null;
          if (this._callback) {
            if (typeof this._callback == "function") {
              u.record(21, this.strId);
              var b = s._invokeFactory(d, this.strId, this._callback, N);
              a = b.producedError,
                u.record(22, this.strId),
                !a && typeof b.returnedValue != "undefined" &&
                (!this.exportsPassedIn || I.Utilities.isEmpty(this.exports)) &&
                (this.exports = b.returnedValue);
            } else this.exports = this._callback;
          }
          if (a) {
            var _ = I.ensureError(a);
            _.phase = "factory",
              _.moduleId = this.strId,
              this.error = _,
              d.onError(_);
          }
          this.dependencies = null,
            this._callback = null,
            this._errorback = null,
            this.moduleIdResolver = null;
        },
        s.prototype.onDependencyError = function (u) {
          return this._isComplete = !0,
            this.error = u,
            this._errorback ? (this._errorback(u), !0) : !1;
        },
        s.prototype.isComplete = function () {
          return this._isComplete;
        },
        s;
    }();
    I.Module = p;
    var P = function () {
        function s() {
          this._nextId = 0,
            this._strModuleIdToIntModuleId = new Map(),
            this._intModuleIdToStrModuleId = [],
            this.getModuleId("exports"),
            this.getModuleId("module"),
            this.getModuleId("require");
        }
        return s.prototype.getMaxModuleId = function () {
          return this._nextId;
        },
          s.prototype.getModuleId = function (u) {
            var d = this._strModuleIdToIntModuleId.get(u);
            return typeof d == "undefined" &&
              (d = this._nextId++,
                this._strModuleIdToIntModuleId.set(u, d),
                this._intModuleIdToStrModuleId[d] = u),
              d;
          },
          s.prototype.getStrModuleId = function (u) {
            return this._intModuleIdToStrModuleId[u];
          },
          s;
      }(),
      E = function () {
        function s(u) {
          this.id = u;
        }
        return s.EXPORTS = new s(0),
          s.MODULE = new s(1),
          s.REQUIRE = new s(2),
          s;
      }();
    I.RegularDependency = E;
    var o = function () {
      function s(u, d, N) {
        this.id = u, this.pluginId = d, this.pluginParam = N;
      }
      return s;
    }();
    I.PluginDependency = o;
    var h = function () {
      function s(u, d, N, a, b) {
        b === void 0 && (b = 0),
          this._env = u,
          this._scriptLoader = d,
          this._loaderAvailableTimestamp = b,
          this._defineFunc = N,
          this._requireFunc = a,
          this._moduleIdProvider = new P(),
          this._config = new I.Configuration(this._env),
          this._hasDependencyCycle = !1,
          this._modules2 = [],
          this._knownModules2 = [],
          this._inverseDependencies2 = [],
          this._inversePluginDependencies2 = new Map(),
          this._currentAnnonymousDefineCall = null,
          this._recorder = null,
          this._buildInfoPath = [],
          this._buildInfoDefineStack = [],
          this._buildInfoDependencies = [];
      }
      return s.prototype.reset = function () {
        return new s(
          this._env,
          this._scriptLoader,
          this._defineFunc,
          this._requireFunc,
          this._loaderAvailableTimestamp,
        );
      },
        s.prototype.getGlobalAMDDefineFunc = function () {
          return this._defineFunc;
        },
        s.prototype.getGlobalAMDRequireFunc = function () {
          return this._requireFunc;
        },
        s._findRelevantLocationInStack = function (u, d) {
          for (
            var N = function (n) {
                return n.replace(/\\/g, "/");
              },
              a = N(u),
              b = d.split(/\n/),
              _ = 0;
            _ < b.length;
            _++
          ) {
            var v = b[_].match(/(.*):(\d+):(\d+)\)?$/);
            if (v) {
              var i = v[1],
                r = v[2],
                g = v[3],
                f = Math.max(i.lastIndexOf(" ") + 1, i.lastIndexOf("(") + 1);
              if (i = i.substr(f), i = N(i), i === a) {
                var l = { line: parseInt(r, 10), col: parseInt(g, 10) };
                return l.line === 1 &&
                  (l.col -=
                    "(function (require, define, __filename, __dirname) { "
                      .length),
                  l;
              }
            }
          }
          throw new Error(
            "Could not correlate define call site for needle " + u,
          );
        },
        s.prototype.getBuildInfo = function () {
          if (!this._config.isBuild()) return null;
          for (
            var u = [], d = 0, N = 0, a = this._modules2.length; N < a; N++
          ) {
            var b = this._modules2[N];
            if (!!b) {
              var _ = this._buildInfoPath[b.id] || null,
                v = this._buildInfoDefineStack[b.id] || null,
                i = this._buildInfoDependencies[b.id];
              u[d++] = {
                id: b.strId,
                path: _,
                defineLocation: _ && v ? s._findRelevantLocationInStack(_, v)
                : null,
                dependencies: i,
                shim: null,
                exports: b.exports,
              };
            }
          }
          return u;
        },
        s.prototype.getRecorder = function () {
          return this._recorder ||
            (this._config.shouldRecordStats()
              ? this._recorder = new I.LoaderEventRecorder(
                this._loaderAvailableTimestamp,
              )
              : this._recorder = I.NullLoaderEventRecorder.INSTANCE),
            this._recorder;
        },
        s.prototype.getLoaderEvents = function () {
          return this.getRecorder().getEvents();
        },
        s.prototype.enqueueDefineAnonymousModule = function (u, d) {
          if (this._currentAnnonymousDefineCall !== null) {
            throw new Error(
              "Can only have one anonymous define call per script file",
            );
          }
          var N = null;
          this._config.isBuild() &&
          (N = new Error("StackLocation").stack || null),
            this._currentAnnonymousDefineCall = {
              stack: N,
              dependencies: u,
              callback: d,
            };
        },
        s.prototype.defineModule = function (u, d, N, a, b, _) {
          var v = this;
          _ === void 0 && (_ = new t(u));
          var i = this._moduleIdProvider.getModuleId(u);
          if (this._modules2[i]) {
            this._config.isDuplicateMessageIgnoredFor(u) ||
              console.warn("Duplicate definition of module '" + u + "'");
            return;
          }
          var r = new p(i, u, this._normalizeDependencies(d, _), N, a, _);
          this._modules2[i] = r,
            this._config.isBuild() &&
            (this._buildInfoDefineStack[i] = b,
              this._buildInfoDependencies[i] = (r.dependencies || []).map(
                function (g) {
                  return v._moduleIdProvider.getStrModuleId(g.id);
                },
              )),
            this._resolve(r);
        },
        s.prototype._normalizeDependency = function (u, d) {
          if (u === "exports") return E.EXPORTS;
          if (u === "module") return E.MODULE;
          if (u === "require") return E.REQUIRE;
          var N = u.indexOf("!");
          if (N >= 0) {
            var a = d.resolveModule(u.substr(0, N)),
              b = d.resolveModule(u.substr(N + 1)),
              _ = this._moduleIdProvider.getModuleId(a + "!" + b),
              v = this._moduleIdProvider.getModuleId(a);
            return new o(_, v, b);
          }
          return new E(this._moduleIdProvider.getModuleId(d.resolveModule(u)));
        },
        s.prototype._normalizeDependencies = function (u, d) {
          for (var N = [], a = 0, b = 0, _ = u.length; b < _; b++) {
            N[a++] = this._normalizeDependency(u[b], d);
          }
          return N;
        },
        s.prototype._relativeRequire = function (u, d, N, a) {
          if (typeof d == "string") return this.synchronousRequire(d, u);
          this.defineModule(
            I.Utilities.generateAnonymousModule(),
            d,
            N,
            a,
            null,
            u,
          );
        },
        s.prototype.synchronousRequire = function (u, d) {
          d === void 0 && (d = new t(u));
          var N = this._normalizeDependency(u, d), a = this._modules2[N.id];
          if (!a) {
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                u + "'. This is the first mention of this module!",
            );
          }
          if (!a.isComplete()) {
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                u + "'. This module has not been resolved completely yet.",
            );
          }
          if (a.error) throw a.error;
          return a.exports;
        },
        s.prototype.configure = function (u, d) {
          var N = this._config.shouldRecordStats();
          d
            ? this._config = new I.Configuration(this._env, u)
            : this._config = this._config.cloneAndMerge(u),
            this._config.shouldRecordStats() && !N && (this._recorder = null);
        },
        s.prototype.getConfig = function () {
          return this._config;
        },
        s.prototype._onLoad = function (u) {
          if (this._currentAnnonymousDefineCall !== null) {
            var d = this._currentAnnonymousDefineCall;
            this._currentAnnonymousDefineCall = null,
              this.defineModule(
                this._moduleIdProvider.getStrModuleId(u),
                d.dependencies,
                d.callback,
                null,
                d.stack,
              );
          }
        },
        s.prototype._createLoadError = function (u, d) {
          var N = this,
            a = this._moduleIdProvider.getStrModuleId(u),
            b = (this._inverseDependencies2[u] || []).map(function (v) {
              return N._moduleIdProvider.getStrModuleId(v);
            }),
            _ = I.ensureError(d);
          return _.phase = "loading", _.moduleId = a, _.neededBy = b, _;
        },
        s.prototype._onLoadError = function (u, d) {
          var N = this._createLoadError(u, d);
          this._modules2[u] ||
            (this._modules2[u] = new p(
              u,
              this._moduleIdProvider.getStrModuleId(u),
              [],
              function () {},
              function () {},
              null,
            ));
          for (
            var a = [], b = 0, _ = this._moduleIdProvider.getMaxModuleId();
            b < _;
            b++
          ) {
            a[b] = !1;
          }
          var v = !1, i = [];
          for (i.push(u), a[u] = !0; i.length > 0;) {
            var r = i.shift(), g = this._modules2[r];
            g && (v = g.onDependencyError(N) || v);
            var f = this._inverseDependencies2[r];
            if (f) {
              for (var b = 0, _ = f.length; b < _; b++) {
                var l = f[b];
                a[l] || (i.push(l), a[l] = !0);
              }
            }
          }
          v || this._config.onError(N);
        },
        s.prototype._hasDependencyPath = function (u, d) {
          var N = this._modules2[u];
          if (!N) return !1;
          for (
            var a = [], b = 0, _ = this._moduleIdProvider.getMaxModuleId();
            b < _;
            b++
          ) {
            a[b] = !1;
          }
          var v = [];
          for (v.push(N), a[u] = !0; v.length > 0;) {
            var i = v.shift(), r = i.dependencies;
            if (r) {
              for (var b = 0, _ = r.length; b < _; b++) {
                var g = r[b];
                if (g.id === d) return !0;
                var f = this._modules2[g.id];
                f && !a[g.id] && (a[g.id] = !0, v.push(f));
              }
            }
          }
          return !1;
        },
        s.prototype._findCyclePath = function (u, d, N) {
          if (u === d || N === 50) return [u];
          var a = this._modules2[u];
          if (!a) return null;
          var b = a.dependencies;
          if (b) {
            for (var _ = 0, v = b.length; _ < v; _++) {
              var i = this._findCyclePath(b[_].id, d, N + 1);
              if (i !== null) return i.push(u), i;
            }
          }
          return null;
        },
        s.prototype._createRequire = function (u) {
          var d = this,
            N = function (a, b, _) {
              return d._relativeRequire(u, a, b, _);
            };
          return N.toUrl = function (a) {
            return d._config.requireToUrl(u.resolveModule(a));
          },
            N.getStats = function () {
              return d.getLoaderEvents();
            },
            N.hasDependencyCycle = function () {
              return d._hasDependencyCycle;
            },
            N.config = function (a, b) {
              b === void 0 && (b = !1), d.configure(a, b);
            },
            N.__$__nodeRequire = I.global.nodeRequire,
            N;
        },
        s.prototype._loadModule = function (u) {
          var d = this;
          if (!(this._modules2[u] || this._knownModules2[u])) {
            this._knownModules2[u] = !0;
            var N = this._moduleIdProvider.getStrModuleId(u),
              a = this._config.moduleIdToPaths(N),
              b = /^@[^\/]+\/[^\/]+$/;
            this._env.isNode && (N.indexOf("/") === -1 || b.test(N)) &&
              a.push("node|" + N);
            var _ = -1,
              v = function (i) {
                if (_++, _ >= a.length) d._onLoadError(u, i);
                else {
                  var r = a[_], g = d.getRecorder();
                  if (d._config.isBuild() && r === "empty:") {
                    d._buildInfoPath[u] = r,
                      d.defineModule(
                        d._moduleIdProvider.getStrModuleId(u),
                        [],
                        null,
                        null,
                        null,
                      ),
                      d._onLoad(u);
                    return;
                  }
                  g.record(10, r),
                    d._scriptLoader.load(d, r, function () {
                      d._config.isBuild() && (d._buildInfoPath[u] = r),
                        g.record(11, r),
                        d._onLoad(u);
                    }, function (f) {
                      g.record(12, r), v(f);
                    });
                }
              };
            v(null);
          }
        },
        s.prototype._loadPluginDependency = function (u, d) {
          var N = this;
          if (!(this._modules2[d.id] || this._knownModules2[d.id])) {
            this._knownModules2[d.id] = !0;
            var a = function (b) {
              N.defineModule(
                N._moduleIdProvider.getStrModuleId(d.id),
                [],
                b,
                null,
                null,
              );
            };
            a.error = function (b) {
              N._config.onError(N._createLoadError(d.id, b));
            },
              u.load(
                d.pluginParam,
                this._createRequire(t.ROOT),
                a,
                this._config.getOptionsLiteral(),
              );
          }
        },
        s.prototype._resolve = function (u) {
          var d = this, N = u.dependencies;
          if (N) {
            for (var a = 0, b = N.length; a < b; a++) {
              var _ = N[a];
              if (_ === E.EXPORTS) {
                u.exportsPassedIn = !0, u.unresolvedDependenciesCount--;
                continue;
              }
              if (_ === E.MODULE) {
                u.unresolvedDependenciesCount--;
                continue;
              }
              if (_ === E.REQUIRE) {
                u.unresolvedDependenciesCount--;
                continue;
              }
              var v = this._modules2[_.id];
              if (v && v.isComplete()) {
                if (v.error) {
                  u.onDependencyError(v.error);
                  return;
                }
                u.unresolvedDependenciesCount--;
                continue;
              }
              if (this._hasDependencyPath(_.id, u.id)) {
                this._hasDependencyCycle = !0,
                  console.warn(
                    "There is a dependency cycle between '" +
                      this._moduleIdProvider.getStrModuleId(_.id) + "' and '" +
                      this._moduleIdProvider.getStrModuleId(u.id) +
                      "'. The cyclic path follows:",
                  );
                var i = this._findCyclePath(_.id, u.id, 0) || [];
                i.reverse(),
                  i.push(_.id),
                  console.warn(
                    i.map(function (f) {
                      return d._moduleIdProvider.getStrModuleId(f);
                    }).join(` => 
`),
                  ),
                  u.unresolvedDependenciesCount--;
                continue;
              }
              if (
                this._inverseDependencies2[_.id] =
                  this._inverseDependencies2[_.id] || [],
                  this._inverseDependencies2[_.id].push(u.id),
                  _ instanceof o
              ) {
                var r = this._modules2[_.pluginId];
                if (r && r.isComplete()) {
                  this._loadPluginDependency(r.exports, _);
                  continue;
                }
                var g = this._inversePluginDependencies2.get(_.pluginId);
                g ||
                (g = [], this._inversePluginDependencies2.set(_.pluginId, g)),
                  g.push(_),
                  this._loadModule(_.pluginId);
                continue;
              }
              this._loadModule(_.id);
            }
          }
          u.unresolvedDependenciesCount === 0 && this._onModuleComplete(u);
        },
        s.prototype._onModuleComplete = function (u) {
          var d = this, N = this.getRecorder();
          if (!u.isComplete()) {
            var a = u.dependencies, b = [];
            if (a) {
              for (var _ = 0, v = a.length; _ < v; _++) {
                var i = a[_];
                if (i === E.EXPORTS) {
                  b[_] = u.exports;
                  continue;
                }
                if (i === E.MODULE) {
                  b[_] = {
                    id: u.strId,
                    config: function () {
                      return d._config.getConfigForModule(u.strId);
                    },
                  };
                  continue;
                }
                if (i === E.REQUIRE) {
                  b[_] = this._createRequire(u.moduleIdResolver);
                  continue;
                }
                var r = this._modules2[i.id];
                if (r) {
                  b[_] = r.exports;
                  continue;
                }
                b[_] = null;
              }
            }
            u.complete(N, this._config, b);
            var g = this._inverseDependencies2[u.id];
            if (this._inverseDependencies2[u.id] = null, g) {
              for (var _ = 0, v = g.length; _ < v; _++) {
                var f = g[_], l = this._modules2[f];
                l.unresolvedDependenciesCount--,
                  l.unresolvedDependenciesCount === 0 &&
                  this._onModuleComplete(l);
              }
            }
            var n = this._inversePluginDependencies2.get(u.id);
            if (n) {
              this._inversePluginDependencies2.delete(u.id);
              for (var _ = 0, v = n.length; _ < v; _++) {
                this._loadPluginDependency(u.exports, n[_]);
              }
            }
          }
        },
        s;
    }();
    I.ModuleManager = h;
  })(X || (X = {}));
  var V, X;
  (function (I) {
    var t = new I.Environment(),
      p = null,
      P = function (s, u, d) {
        typeof s != "string" && (d = u, u = s, s = null),
          (typeof u != "object" || !Array.isArray(u)) && (d = u, u = null),
          u || (u = ["require", "exports", "module"]),
          s
            ? p.defineModule(s, u, d, null, null)
            : p.enqueueDefineAnonymousModule(u, d);
      };
    P.amd = { jQuery: !0 };
    var E = function (s, u) {
        u === void 0 && (u = !1), p.configure(s, u);
      },
      o = function () {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
            E(arguments[0]);
            return;
          }
          if (typeof arguments[0] == "string") {
            return p.synchronousRequire(arguments[0]);
          }
        }
        if (
          (arguments.length === 2 || arguments.length === 3) &&
          Array.isArray(arguments[0])
        ) {
          p.defineModule(
            I.Utilities.generateAnonymousModule(),
            arguments[0],
            arguments[1],
            arguments[2],
            null,
          );
          return;
        }
        throw new Error("Unrecognized require call");
      };
    o.config = E,
      o.getConfig = function () {
        return p.getConfig().getOptionsLiteral();
      },
      o.reset = function () {
        p = p.reset();
      },
      o.getBuildInfo = function () {
        return p.getBuildInfo();
      },
      o.getStats = function () {
        return p.getLoaderEvents();
      },
      o.define = function () {
        return P.apply(null, arguments);
      };
    function h() {
      if (
        typeof I.global.require != "undefined" || typeof require != "undefined"
      ) {
        var s = I.global.require || require;
        if (typeof s == "function" && typeof s.resolve == "function") {
          var u = I.ensureRecordedNodeRequire(p.getRecorder(), s);
          I.global.nodeRequire = u, o.nodeRequire = u, o.__$__nodeRequire = u;
        }
      }
      t.isNode && !t.isElectronRenderer
        ? (module.exports = o, require = o)
        : (t.isElectronRenderer || (I.global.define = P), I.global.require = o);
    }
    I.init = h,
      (typeof I.global.define != "function" || !I.global.define.amd) &&
      (p = new I.ModuleManager(
        t,
        I.createScriptLoader(t),
        P,
        o,
        I.Utilities.getHighPerformanceTimestamp(),
      ),
        typeof I.global.require != "undefined" &&
        typeof I.global.require != "function" && o.config(I.global.require),
        V = function () {
          return P.apply(null, arguments);
        },
        V.amd = P.amd,
        typeof doNotInitLoader == "undefined" && h());
  })(X || (X = {})),
    V(z[14], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.asArray = t.pushToEnd = t.pushToStart = t.arrayInsert = t.range = t
          .flatten = t.firstOrDefault = t.distinctES6 = t.distinct = t
            .isNonEmptyArray = t.isFalsyOrEmpty = t.coalesce = t.groupBy = t
              .mergeSort = t.quickSelect = t.findFirstInSorted = t
                .binarySearch = t.equals = t.tail2 = t.tail = void 0;
      function p(c, C = 0) {
        return c[c.length - (1 + C)];
      }
      t.tail = p;
      function P(c) {
        if (c.length === 0) throw new Error("Invalid tail call");
        return [c.slice(0, c.length - 1), c[c.length - 1]];
      }
      t.tail2 = P;
      function E(c, C, L = (A, M) => A === M) {
        if (c === C) return !0;
        if (!c || !C || c.length !== C.length) return !1;
        for (let A = 0, M = c.length; A < M; A++) if (!L(c[A], C[A])) return !1;
        return !0;
      }
      t.equals = E;
      function o(c, C, L) {
        let A = 0, M = c.length - 1;
        for (; A <= M;) {
          const R = (A + M) / 2 | 0, D = L(c[R], C);
          if (D < 0) A = R + 1;
          else if (D > 0) M = R - 1;
          else return R;
        }
        return -(A + 1);
      }
      t.binarySearch = o;
      function h(c, C) {
        let L = 0, A = c.length;
        if (A === 0) return 0;
        for (; L < A;) {
          const M = Math.floor((L + A) / 2);
          C(c[M]) ? A = M : L = M + 1;
        }
        return L;
      }
      t.findFirstInSorted = h;
      function s(c, C, L) {
        if (c = c | 0, c >= C.length) throw new TypeError("invalid index");
        let A = C[Math.floor(C.length * Math.random())], M = [], R = [], D = [];
        for (let T of C) {
          const $ = L(T, A);
          $ < 0 ? M.push(T) : $ > 0 ? R.push(T) : D.push(T);
        }
        return c < M.length
          ? s(c, M, L)
          : c < M.length + D.length
          ? D[0]
          : s(c - (M.length + D.length), R, L);
      }
      t.quickSelect = s;
      function u(c, C) {
        return N(c, C, 0, c.length - 1, []), c;
      }
      t.mergeSort = u;
      function d(c, C, L, A, M, R) {
        let D = L, T = A + 1;
        for (let $ = L; $ <= M; $++) R[$] = c[$];
        for (let $ = L; $ <= M; $++) {
          D > A ? c[$] = R[T++] : T > M
            ? c[$] = R[D++]
            : C(R[T], R[D]) < 0
            ? c[$] = R[T++]
            : c[$] = R[D++];
        }
      }
      function N(c, C, L, A, M) {
        if (!(A <= L)) {
          const R = L + (A - L) / 2 | 0;
          N(c, C, L, R, M),
            N(c, C, R + 1, A, M),
            !(C(c[R], c[R + 1]) <= 0) && d(c, C, L, R, A, M);
        }
      }
      function a(c, C) {
        const L = [];
        let A;
        for (const M of u(c.slice(0), C)) {
          !A || C(A[0], M) !== 0
            ? (A = [M], L.push(A))
            : A.push(M);
        }
        return L;
      }
      t.groupBy = a;
      function b(c) {
        return c.filter((C) => !!C);
      }
      t.coalesce = b;
      function _(c) {
        return !Array.isArray(c) || c.length === 0;
      }
      t.isFalsyOrEmpty = _;
      function v(c) {
        return Array.isArray(c) && c.length > 0;
      }
      t.isNonEmptyArray = v;
      function i(c, C) {
        if (!C) return c.filter((A, M) => c.indexOf(A) === M);
        const L = Object.create(null);
        return c.filter((A) => {
          const M = C(A);
          return L[M] ? !1 : (L[M] = !0, !0);
        });
      }
      t.distinct = i;
      function r(c) {
        const C = new Set();
        return c.filter((L) => C.has(L) ? !1 : (C.add(L), !0));
      }
      t.distinctES6 = r;
      function g(c, C) {
        return c.length > 0 ? c[0] : C;
      }
      t.firstOrDefault = g;
      function f(c) {
        return [].concat(...c);
      }
      t.flatten = f;
      function l(c, C) {
        let L = typeof C == "number" ? c : 0;
        typeof C == "number" ? L = c : (L = 0, C = c);
        const A = [];
        if (L <= C) for (let M = L; M < C; M++) A.push(M);
        else for (let M = L; M > C; M--) A.push(M);
        return A;
      }
      t.range = l;
      function n(c, C, L) {
        const A = c.slice(0, C), M = c.slice(C);
        return A.concat(L, M);
      }
      t.arrayInsert = n;
      function m(c, C) {
        const L = c.indexOf(C);
        L > -1 && (c.splice(L, 1), c.unshift(C));
      }
      t.pushToStart = m;
      function S(c, C) {
        const L = c.indexOf(C);
        L > -1 && (c.splice(L, 1), c.push(C));
      }
      t.pushToEnd = S;
      function w(c) {
        return Array.isArray(c) ? c : [c];
      }
      t.asArray = w;
    }),
    V(z[15], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.DiffChange = void 0;
      class p {
        constructor(E, o, h, s) {
          this.originalStart = E,
            this.originalLength = o,
            this.modifiedStart = h,
            this.modifiedLength = s;
        }
        getOriginalEnd() {
          return this.originalStart + this.originalLength;
        }
        getModifiedEnd() {
          return this.modifiedStart + this.modifiedLength;
        }
      }
      t.DiffChange = p;
    }),
    V(z[4], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.illegalState = t.illegalArgument = t.canceled = t
          .isPromiseCanceledError = t.transformErrorForSerialization = t
            .onUnexpectedExternalError = t.onUnexpectedError = t.errorHandler =
              t.ErrorHandler = void 0;
      class p {
        constructor() {
          this.listeners = [],
            this.unexpectedErrorHandler = function (b) {
              setTimeout(() => {
                throw b.stack
                  ? new Error(
                    b.message + `

` + b.stack,
                  )
                  : b;
              }, 0);
            };
        }
        emit(b) {
          this.listeners.forEach((_) => {
            _(b);
          });
        }
        onUnexpectedError(b) {
          this.unexpectedErrorHandler(b), this.emit(b);
        }
        onUnexpectedExternalError(b) {
          this.unexpectedErrorHandler(b);
        }
      }
      t.ErrorHandler = p, t.errorHandler = new p();
      function P(a) {
        s(a) || t.errorHandler.onUnexpectedError(a);
      }
      t.onUnexpectedError = P;
      function E(a) {
        s(a) || t.errorHandler.onUnexpectedExternalError(a);
      }
      t.onUnexpectedExternalError = E;
      function o(a) {
        if (a instanceof Error) {
          let { name: b, message: _ } = a;
          const v = a.stacktrace || a.stack;
          return { $isError: !0, name: b, message: _, stack: v };
        }
        return a;
      }
      t.transformErrorForSerialization = o;
      const h = "Canceled";
      function s(a) {
        return a instanceof Error && a.name === h && a.message === h;
      }
      t.isPromiseCanceledError = s;
      function u() {
        const a = new Error(h);
        return a.name = a.message, a;
      }
      t.canceled = u;
      function d(a) {
        return a
          ? new Error(`Illegal argument: ${a}`)
          : new Error("Illegal argument");
      }
      t.illegalArgument = d;
      function N(a) {
        return a ? new Error(`Illegal state: ${a}`)
        : new Error("Illegal state");
      }
      t.illegalState = N;
    }),
    V(z[16], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.Iterable = void 0;
      var p;
      (function (P) {
        function E(f) {
          return f && typeof f == "object" &&
            typeof f[Symbol.iterator] == "function";
        }
        P.is = E;
        const o = Object.freeze([]);
        function h() {
          return o;
        }
        P.empty = h;
        function* s(f) {
          yield f;
        }
        P.single = s;
        function u(f) {
          return f || o;
        }
        P.from = u;
        function d(f) {
          return !f || f[Symbol.iterator]().next().done === !0;
        }
        P.isEmpty = d;
        function N(f) {
          return f[Symbol.iterator]().next().value;
        }
        P.first = N;
        function a(f, l) {
          for (const n of f) if (l(n)) return !0;
          return !1;
        }
        P.some = a;
        function* b(f, l) {
          for (const n of f) l(n) && (yield n);
        }
        P.filter = b;
        function* _(f, l) {
          for (const n of f) yield l(n);
        }
        P.map = _;
        function* v(...f) {
          for (const l of f) for (const n of l) yield n;
        }
        P.concat = v;
        function* i(f) {
          for (const l of f) for (const n of l) yield n;
        }
        P.concatNested = i;
        function* r(f, l, n = f.length) {
          for (
            l < 0 && (l += f.length),
              n < 0
                ? n += f.length
                : n > f.length && (n = f.length);
            l < n;
            l++
          ) {
            yield f[l];
          }
        }
        P.slice = r;
        function g(f, l = Number.POSITIVE_INFINITY) {
          const n = [];
          if (l === 0) return [n, f];
          const m = f[Symbol.iterator]();
          for (let S = 0; S < l; S++) {
            const w = m.next();
            if (w.done) return [n, P.empty()];
            n.push(w.value);
          }
          return [n, {
            [Symbol.iterator]() {
              return m;
            },
          }];
        }
        P.consume = g;
      })(p = t.Iterable || (t.Iterable = {}));
    }),
    V(z[17], G([0, 1, 4]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.ResolvedKeybinding = t.ResolvedKeybindingPart = t.ChordKeybinding = t
          .SimpleKeybinding = t.createSimpleKeybinding = t.createKeybinding = t
            .KeyChord = t.KeyCodeUtils = void 0;
      class P {
        constructor() {
          this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
        }
        define(r, g) {
          this._keyCodeToStr[r] = g, this._strToKeyCode[g.toLowerCase()] = r;
        }
        keyCodeToStr(r) {
          return this._keyCodeToStr[r];
        }
        strToKeyCode(r) {
          return this._strToKeyCode[r.toLowerCase()] || 0;
        }
      }
      const E = new P(), o = new P(), h = new P();
      (function () {
        function i(r, g, f = g, l = f) {
          E.define(r, g), o.define(r, f), h.define(r, l);
        }
        i(0, "unknown"),
          i(1, "Backspace"),
          i(2, "Tab"),
          i(3, "Enter"),
          i(4, "Shift"),
          i(5, "Ctrl"),
          i(6, "Alt"),
          i(7, "PauseBreak"),
          i(8, "CapsLock"),
          i(9, "Escape"),
          i(10, "Space"),
          i(11, "PageUp"),
          i(12, "PageDown"),
          i(13, "End"),
          i(14, "Home"),
          i(15, "LeftArrow", "Left"),
          i(16, "UpArrow", "Up"),
          i(17, "RightArrow", "Right"),
          i(18, "DownArrow", "Down"),
          i(19, "Insert"),
          i(20, "Delete"),
          i(21, "0"),
          i(22, "1"),
          i(23, "2"),
          i(24, "3"),
          i(25, "4"),
          i(26, "5"),
          i(27, "6"),
          i(28, "7"),
          i(29, "8"),
          i(30, "9"),
          i(31, "A"),
          i(32, "B"),
          i(33, "C"),
          i(34, "D"),
          i(35, "E"),
          i(36, "F"),
          i(37, "G"),
          i(38, "H"),
          i(39, "I"),
          i(40, "J"),
          i(41, "K"),
          i(42, "L"),
          i(43, "M"),
          i(44, "N"),
          i(45, "O"),
          i(46, "P"),
          i(47, "Q"),
          i(48, "R"),
          i(49, "S"),
          i(50, "T"),
          i(51, "U"),
          i(52, "V"),
          i(53, "W"),
          i(54, "X"),
          i(55, "Y"),
          i(56, "Z"),
          i(57, "Meta"),
          i(58, "ContextMenu"),
          i(59, "F1"),
          i(60, "F2"),
          i(61, "F3"),
          i(62, "F4"),
          i(63, "F5"),
          i(64, "F6"),
          i(65, "F7"),
          i(66, "F8"),
          i(67, "F9"),
          i(68, "F10"),
          i(69, "F11"),
          i(70, "F12"),
          i(71, "F13"),
          i(72, "F14"),
          i(73, "F15"),
          i(74, "F16"),
          i(75, "F17"),
          i(76, "F18"),
          i(77, "F19"),
          i(78, "NumLock"),
          i(79, "ScrollLock"),
          i(80, ";", ";", "OEM_1"),
          i(81, "=", "=", "OEM_PLUS"),
          i(82, ",", ",", "OEM_COMMA"),
          i(83, "-", "-", "OEM_MINUS"),
          i(84, ".", ".", "OEM_PERIOD"),
          i(85, "/", "/", "OEM_2"),
          i(86, "`", "`", "OEM_3"),
          i(110, "ABNT_C1"),
          i(111, "ABNT_C2"),
          i(87, "[", "[", "OEM_4"),
          i(88, "\\", "\\", "OEM_5"),
          i(89, "]", "]", "OEM_6"),
          i(90, "'", "'", "OEM_7"),
          i(91, "OEM_8"),
          i(92, "OEM_102"),
          i(93, "NumPad0"),
          i(94, "NumPad1"),
          i(95, "NumPad2"),
          i(96, "NumPad3"),
          i(97, "NumPad4"),
          i(98, "NumPad5"),
          i(99, "NumPad6"),
          i(100, "NumPad7"),
          i(101, "NumPad8"),
          i(102, "NumPad9"),
          i(103, "NumPad_Multiply"),
          i(104, "NumPad_Add"),
          i(105, "NumPad_Separator"),
          i(106, "NumPad_Subtract"),
          i(107, "NumPad_Decimal"),
          i(108, "NumPad_Divide");
      })();
      var s;
      (function (i) {
        function r(m) {
          return E.keyCodeToStr(m);
        }
        i.toString = r;
        function g(m) {
          return E.strToKeyCode(m);
        }
        i.fromString = g;
        function f(m) {
          return o.keyCodeToStr(m);
        }
        i.toUserSettingsUS = f;
        function l(m) {
          return h.keyCodeToStr(m);
        }
        i.toUserSettingsGeneral = l;
        function n(m) {
          return o.strToKeyCode(m) || h.strToKeyCode(m);
        }
        i.fromUserSettings = n;
      })(s = t.KeyCodeUtils || (t.KeyCodeUtils = {}));
      function u(i, r) {
        const g = (r & 65535) << 16 >>> 0;
        return (i | g) >>> 0;
      }
      t.KeyChord = u;
      function d(i, r) {
        if (i === 0) return null;
        const g = (i & 65535) >>> 0, f = (i & 4294901760) >>> 16;
        return f !== 0 ? new b([N(g, r), N(f, r)]) : new b([N(g, r)]);
      }
      t.createKeybinding = d;
      function N(i, r) {
        const g = !!(i & 2048),
          f = !!(i & 256),
          l = r === 2 ? f : g,
          n = !!(i & 1024),
          m = !!(i & 512),
          S = r === 2 ? g : f,
          w = i & 255;
        return new a(l, n, m, S, w);
      }
      t.createSimpleKeybinding = N;
      class a {
        constructor(r, g, f, l, n) {
          this.ctrlKey = r,
            this.shiftKey = g,
            this.altKey = f,
            this.metaKey = l,
            this.keyCode = n;
        }
        equals(r) {
          return this.ctrlKey === r.ctrlKey && this.shiftKey === r.shiftKey &&
            this.altKey === r.altKey && this.metaKey === r.metaKey &&
            this.keyCode === r.keyCode;
        }
        isModifierKey() {
          return this.keyCode === 0 || this.keyCode === 5 ||
            this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
        }
        toChord() {
          return new b([this]);
        }
        isDuplicateModifierCase() {
          return this.ctrlKey && this.keyCode === 5 ||
            this.shiftKey && this.keyCode === 4 ||
            this.altKey && this.keyCode === 6 ||
            this.metaKey && this.keyCode === 57;
        }
      }
      t.SimpleKeybinding = a;
      class b {
        constructor(r) {
          if (r.length === 0) throw p.illegalArgument("parts");
          this.parts = r;
        }
      }
      t.ChordKeybinding = b;
      class _ {
        constructor(r, g, f, l, n, m) {
          this.ctrlKey = r,
            this.shiftKey = g,
            this.altKey = f,
            this.metaKey = l,
            this.keyLabel = n,
            this.keyAriaLabel = m;
        }
      }
      t.ResolvedKeybindingPart = _;
      class v {}
      t.ResolvedKeybinding = v;
    }),
    V(z[7], G([0, 1, 16]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.ImmortalReference = t.MutableDisposable = t.Disposable = t
          .DisposableStore = t.toDisposable = t.combinedDisposable = t.dispose =
            t.isDisposable = t.MultiDisposeError = t.trackDisposable = void 0;
      const P = !1;
      let E = null;
      if (P) {
        const r = "__is_disposable_tracked__";
        E = new class {
          trackDisposable(g) {
            const f = new Error("Potentially leaked disposable").stack;
            setTimeout(() => {
              g[r] || console.log(f);
            }, 3e3);
          }
          markTracked(g) {
            if (g && g !== _.None) {
              try {
                g[r] = !0;
              } catch (f) {}
            }
          }
        }();
      }
      function o(r) {
        !E || E.markTracked(r);
      }
      function h(r) {
        return E && E.trackDisposable(r), r;
      }
      t.trackDisposable = h;
      class s extends Error {
        constructor(g) {
          super(
            `Encounter errors while disposing of store. Errors: [${
              g.join(", ")
            }]`,
          );
          this.errors = g;
        }
      }
      t.MultiDisposeError = s;
      function u(r) {
        return typeof r.dispose == "function" && r.dispose.length === 0;
      }
      t.isDisposable = u;
      function d(r) {
        if (p.Iterable.is(r)) {
          let g = [];
          for (const f of r) {
            if (f) {
              o(f);
              try {
                f.dispose();
              } catch (l) {
                g.push(l);
              }
            }
          }
          if (g.length === 1) throw g[0];
          if (g.length > 1) throw new s(g);
          return Array.isArray(r) ? [] : r;
        } else if (r) return o(r), r.dispose(), r;
      }
      t.dispose = d;
      function N(...r) {
        return r.forEach(o), a(() => d(r));
      }
      t.combinedDisposable = N;
      function a(r) {
        const g = h({
          dispose: () => {
            o(g), r();
          },
        });
        return g;
      }
      t.toDisposable = a;
      class b {
        constructor() {
          this._toDispose = new Set(), this._isDisposed = !1;
        }
        dispose() {
          this._isDisposed || (o(this), this._isDisposed = !0, this.clear());
        }
        clear() {
          try {
            d(this._toDispose.values());
          } finally {
            this._toDispose.clear();
          }
        }
        add(g) {
          if (!g) return g;
          if (g === this) {
            throw new Error("Cannot register a disposable on itself!");
          }
          return o(g),
            this._isDisposed
              ? b.DISABLE_DISPOSED_WARNING ||
                console.warn(
                  new Error(
                    "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!",
                  ).stack,
                )
              : this._toDispose.add(g),
            g;
        }
      }
      t.DisposableStore = b, b.DISABLE_DISPOSED_WARNING = !1;
      class _ {
        constructor() {
          this._store = new b(), h(this);
        }
        dispose() {
          o(this), this._store.dispose();
        }
        _register(g) {
          if (g === this) {
            throw new Error("Cannot register a disposable on itself!");
          }
          return this._store.add(g);
        }
      }
      t.Disposable = _, _.None = Object.freeze({ dispose() {} });
      class v {
        constructor() {
          this._isDisposed = !1, h(this);
        }
        get value() {
          return this._isDisposed ? void 0 : this._value;
        }
        set value(g) {
          this._isDisposed || g === this._value ||
            (this._value && this._value.dispose(), g && o(g), this._value = g);
        }
        clear() {
          this.value = void 0;
        }
        dispose() {
          this._isDisposed = !0,
            o(this),
            this._value && this._value.dispose(),
            this._value = void 0;
        }
      }
      t.MutableDisposable = v;
      class i {
        constructor(g) {
          this.object = g;
        }
        dispose() {}
      }
      t.ImmortalReference = i;
    }),
    V(z[18], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.LinkedList = void 0;
      class p {
        constructor(o) {
          this.element = o, this.next = p.Undefined, this.prev = p.Undefined;
        }
      }
      p.Undefined = new p(void 0);
      class P {
        constructor() {
          this._first = p.Undefined, this._last = p.Undefined, this._size = 0;
        }
        get size() {
          return this._size;
        }
        isEmpty() {
          return this._first === p.Undefined;
        }
        clear() {
          this._first = p.Undefined, this._last = p.Undefined, this._size = 0;
        }
        unshift(o) {
          return this._insert(o, !1);
        }
        push(o) {
          return this._insert(o, !0);
        }
        _insert(o, h) {
          const s = new p(o);
          if (this._first === p.Undefined) this._first = s, this._last = s;
          else if (h) {
            const d = this._last;
            this._last = s, s.prev = d, d.next = s;
          } else {
            const d = this._first;
            this._first = s, s.next = d, d.prev = s;
          }
          this._size += 1;
          let u = !1;
          return () => {
            u || (u = !0, this._remove(s));
          };
        }
        shift() {
          if (this._first !== p.Undefined) {
            const o = this._first.element;
            return this._remove(this._first), o;
          }
        }
        pop() {
          if (this._last !== p.Undefined) {
            const o = this._last.element;
            return this._remove(this._last), o;
          }
        }
        _remove(o) {
          if (o.prev !== p.Undefined && o.next !== p.Undefined) {
            const h = o.prev;
            h.next = o.next, o.next.prev = h;
          } else {
            o.prev === p.Undefined && o.next === p.Undefined
              ? (this._first = p.Undefined, this._last = p.Undefined)
              : o.next === p.Undefined
              ? (this._last = this._last.prev, this._last.next = p.Undefined)
              : o.prev === p.Undefined &&
                (this._first = this._first.next,
                  this._first.prev = p.Undefined);
          }
          this._size -= 1;
        }
        *[Symbol.iterator]() {
          let o = this._first;
          for (; o !== p.Undefined;) yield o.element, o = o.next;
        }
      }
      t.LinkedList = P;
    }),
    V(z[2], G([0, 1]), function (I, t) {
      "use strict";
      var p;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.isLittleEndian = t.OS = t.setImmediate = t.globals = t.userAgent = t
          .isIOS = t.isWeb = t.isNative = t.isLinux = t.isMacintosh = t
            .isWindows = t.isPreferringBrowserCodeLoad = t
              .browserCodeLoadingCacheStrategy = t.isElectronSandboxed = void 0;
      const P = "en";
      let E = !1,
        o = !1,
        h = !1,
        s = !1,
        u = !1,
        d = !1,
        N = !1,
        a,
        b = P,
        _,
        v;
      const i = typeof self == "object"
        ? self
        : typeof global == "object"
        ? global
        : {};
      let r;
      typeof process != "undefined" ? r = process
      : typeof i.vscode != "undefined" && (r = i.vscode.process);
      const g =
        typeof ((p = r == null ? void 0 : r.versions) === null || p === void 0
            ? void 0
            : p.electron) == "string" && r.type === "renderer";
      if (
        t.isElectronSandboxed = g && (r == null ? void 0 : r.sandboxed),
          t.browserCodeLoadingCacheStrategy = (() => {
            if (t.isElectronSandboxed) return "bypassHeatCheck";
            const S = r == null
              ? void 0
              : r.env.ENABLE_VSCODE_BROWSER_CODE_LOADING;
            if (typeof S == "string") {
              return S === "none" || S === "code" || S === "bypassHeatCheck" ||
                  S === "bypassHeatCheckAndEagerCompile"
                ? S
                : "bypassHeatCheck";
            }
          })(),
          t.isPreferringBrowserCodeLoad =
            typeof t.browserCodeLoadingCacheStrategy == "string",
          typeof navigator == "object" && !g
      ) {
        v = navigator.userAgent,
          E = v.indexOf("Windows") >= 0,
          o = v.indexOf("Macintosh") >= 0,
          N =
            (v.indexOf("Macintosh") >= 0 || v.indexOf("iPad") >= 0 ||
              v.indexOf("iPhone") >= 0) &&
            !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0,
          h = v.indexOf("Linux") >= 0,
          d = !0,
          a = navigator.language,
          b = a;
      } else if (typeof r == "object") {
        E = r.platform === "win32",
          o = r.platform === "darwin",
          h = r.platform === "linux",
          s = h && !!r.env.SNAP && !!r.env.SNAP_REVISION,
          a = P,
          b = P;
        const S = r.env.VSCODE_NLS_CONFIG;
        if (S) {
          try {
            const w = JSON.parse(S), c = w.availableLanguages["*"];
            a = w.locale, b = c || P, _ = w._translationsConfigFile;
          } catch (w) {}
        }
        u = !0;
      } else console.error("Unable to resolve platform.");
      let f = 0;
      o ? f = 1 : E ? f = 3 : h && (f = 2),
        t.isWindows = E,
        t.isMacintosh = o,
        t.isLinux = h,
        t.isNative = u,
        t.isWeb = d,
        t.isIOS = N,
        t.userAgent = v,
        t.globals = i,
        t.setImmediate = function () {
          if (t.globals.setImmediate) {
            return t.globals.setImmediate.bind(t.globals);
          }
          if (
            typeof t.globals.postMessage == "function" &&
            !t.globals.importScripts
          ) {
            let c = [];
            t.globals.addEventListener("message", (L) => {
              if (L.data && L.data.vscodeSetImmediateId) {
                for (let A = 0, M = c.length; A < M; A++) {
                  const R = c[A];
                  if (R.id === L.data.vscodeSetImmediateId) {
                    c.splice(A, 1), R.callback();
                    return;
                  }
                }
              }
            });
            let C = 0;
            return (L) => {
              const A = ++C;
              c.push({ id: A, callback: L }),
                t.globals.postMessage({ vscodeSetImmediateId: A }, "*");
            };
          }
          if (r)return r.nextTick.bind(r);
          const w = Promise.resolve();
          return (c) => w.then(c);
        }(),
        t.OS = o || N ? 2 : E ? 1 : 3;
      let l = !0, n = !1;
      function m() {
        if (!n) {
          n = !0;
          const S = new Uint8Array(2);
          S[0] = 1, S[1] = 2, l = new Uint16Array(S.buffer)[0] === (2 << 8) + 1;
        }
        return l;
      }
      t.isLittleEndian = m;
    }),
    V(z[19], G([0, 1, 2]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.platform = t.env = t.cwd = void 0;
      let P;
      typeof process != "undefined"
        ? P = process
        : typeof p.globals.vscode != "undefined"
        ? P = {
          get platform() {
            return p.globals.vscode.process.platform;
          },
          get env() {
            return p.globals.vscode.process.env;
          },
          nextTick(E) {
            return p.setImmediate(E);
          },
          cwd() {
            return p.globals.vscode.process.env.VSCODE_CWD ||
              p.globals.vscode.process.execPath.substr(
                0,
                p.globals.vscode.process.execPath.lastIndexOf(
                  p.globals.vscode.process.platform === "win32" ? "\\" : "/",
                ),
              );
          },
        }
        : P = {
          get platform() {
            return p.isWindows ? "win32" : p.isMacintosh ? "darwin" : "linux";
          },
          nextTick(E) {
            return p.setImmediate(E);
          },
          get env() {
            return Object.create(null);
          },
          cwd() {
            return "/";
          },
        },
        t.cwd = P.cwd,
        t.env = P.env,
        t.platform = P.platform;
    }),
    V(z[20], G([0, 1, 19]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.sep = t.extname = t.basename = t.dirname = t.relative = t.resolve = t
          .normalize = t.posix = t.win32 = void 0;
      const P = 65,
        E = 97,
        o = 90,
        h = 122,
        s = 46,
        u = 47,
        d = 92,
        N = 58,
        a = 63;
      class b extends Error {
        constructor(n, m, S) {
          let w;
          typeof m == "string" && m.indexOf("not ") === 0
            ? (w = "must not be", m = m.replace(/^not /, ""))
            : w = "must be";
          const c = n.indexOf(".") !== -1 ? "property" : "argument";
          let C = `The "${n}" ${c} ${w} of type ${m}`;
          C += `. Received type ${typeof S}`,
            super(C),
            this.code = "ERR_INVALID_ARG_TYPE";
        }
      }
      function _(l, n) {
        if (typeof l != "string") throw new b(n, "string", l);
      }
      function v(l) {
        return l === u || l === d;
      }
      function i(l) {
        return l === u;
      }
      function r(l) {
        return l >= P && l <= o || l >= E && l <= h;
      }
      function g(l, n, m, S) {
        let w = "", c = 0, C = -1, L = 0, A = 0;
        for (let M = 0; M <= l.length; ++M) {
          if (M < l.length) A = l.charCodeAt(M);
          else {
            if (S(A)) break;
            A = u;
          }
          if (S(A)) {
            if (!(C === M - 1 || L === 1)) {
              if (L === 2) {
                if (
                  w.length < 2 || c !== 2 || w.charCodeAt(w.length - 1) !== s ||
                  w.charCodeAt(w.length - 2) !== s
                ) {
                  if (w.length > 2) {
                    const R = w.lastIndexOf(m);
                    R === -1
                      ? (w = "", c = 0)
                      : (w = w.slice(0, R),
                        c = w.length - 1 - w.lastIndexOf(m)),
                      C = M,
                      L = 0;
                    continue;
                  } else if (w.length !== 0) {
                    w = "", c = 0, C = M, L = 0;
                    continue;
                  }
                }
                n && (w += w.length > 0 ? `${m}..` : "..", c = 2);
              } else {
                w.length > 0
                  ? w += `${m}${l.slice(C + 1, M)}`
                  : w = l.slice(C + 1, M), c = M - C - 1;
              }
            }
            C = M, L = 0;
          } else A === s && L !== -1 ? ++L : L = -1;
        }
        return w;
      }
      function f(l, n) {
        if (n === null || typeof n != "object") {throw new b(
            "pathObject",
            "Object",
            n,
          );}
        const m = n.dir || n.root,
          S = n.base || `${n.name || ""}${n.ext || ""}`;
        return m ? m === n.root ? `${m}${S}` : `${m}${l}${S}` : S;
      }
      t.win32 = {
        resolve(...l) {
          let n = "", m = "", S = !1;
          for (let w = l.length - 1; w >= -1; w--) {
            let c;
            if (w >= 0) if (c = l[w], _(c, "path"), c.length === 0) continue;
            else {
              n.length === 0
                ? c = p.cwd()
                : (c = p.env[`=${n}`] || p.cwd(),
                  (c === void 0 ||
                    c.slice(0, 2).toLowerCase() !== n.toLowerCase() &&
                      c.charCodeAt(2) === d) && (c = `${n}\\`));
            }
            const C = c.length;
            let L = 0, A = "", M = !1;
            const R = c.charCodeAt(0);
            if (C === 1) v(R) && (L = 1, M = !0);
            else if (v(R)) {
              if (M = !0, v(c.charCodeAt(1))) {
                let D = 2, T = D;
                for (; D < C && !v(c.charCodeAt(D));) D++;
                if (D < C && D !== T) {
                  const $ = c.slice(T, D);
                  for (T = D; D < C && v(c.charCodeAt(D));) D++;
                  if (D < C && D !== T) {
                    for (T = D; D < C && !v(c.charCodeAt(D));) D++;
                    (D === C || D !== T) &&
                      (A = `\\\\${$}\\${c.slice(T, D)}`, L = D);
                  }
                }
              } else L = 1;
            } else {
              r(R) && c.charCodeAt(1) === N &&
                (A = c.slice(0, 2),
                  L = 2,
                  C > 2 && v(c.charCodeAt(2)) && (M = !0, L = 3));
            }
            if (A.length > 0) {
              if (n.length > 0) {if (A.toLowerCase() !== n.toLowerCase()) {
                  continue;
                }} else n = A;
            }
            if (S) if (n.length > 0) break;
            else if (m = `${c.slice(L)}\\${m}`, S = M, M && n.length > 0) break;
          }
          return m = g(m, !S, "\\", v),
            S
              ? `${n}\\${m}`
              : `${n}${m}` || ".";
        },
        normalize(l) {
          _(l, "path");
          const n = l.length;
          if (n === 0) return ".";
          let m = 0, S, w = !1;
          const c = l.charCodeAt(0);
          if (n === 1) return i(c) ? "\\" : l;
          if (v(c)) {
            if (w = !0, v(l.charCodeAt(1))) {
              let L = 2, A = L;
              for (; L < n && !v(l.charCodeAt(L));) L++;
              if (L < n && L !== A) {
                const M = l.slice(A, L);
                for (A = L; L < n && v(l.charCodeAt(L));) L++;
                if (L < n && L !== A) {
                  for (A = L; L < n && !v(l.charCodeAt(L));) L++;
                  if (L === n) return `\\\\${M}\\${l.slice(A)}\\`;
                  L !== A && (S = `\\\\${M}\\${l.slice(A, L)}`, m = L);
                }
              }
            } else m = 1;
          } else {
            r(c) && l.charCodeAt(1) === N &&
              (S = l.slice(0, 2),
                m = 2,
                n > 2 && v(l.charCodeAt(2)) && (w = !0, m = 3));
          }
          let C = m < n ? g(l.slice(m), !w, "\\", v) : "";
          return C.length === 0 && !w && (C = "."),
            C.length > 0 && v(l.charCodeAt(n - 1)) && (C += "\\"),
            S === void 0 ? w ? `\\${C}` : C : w ? `${S}\\${C}` : `${S}${C}`;
        },
        isAbsolute(l) {
          _(l, "path");
          const n = l.length;
          if (n === 0) return !1;
          const m = l.charCodeAt(0);
          return v(m) ||
            n > 2 && r(m) && l.charCodeAt(1) === N && v(l.charCodeAt(2));
        },
        join(...l) {
          if (l.length === 0) return ".";
          let n, m;
          for (let c = 0; c < l.length; ++c) {
            const C = l[c];
            _(C, "path"),
              C.length > 0 && (n === void 0 ? n = m = C : n += `\\${C}`);
          }
          if (n === void 0) return ".";
          let S = !0, w = 0;
          if (typeof m == "string" && v(m.charCodeAt(0))) {
            ++w;
            const c = m.length;
            c > 1 && v(m.charCodeAt(1)) &&
              (++w, c > 2 && (v(m.charCodeAt(2)) ? ++w : S = !1));
          }
          if (S) {
            for (; w < n.length && v(n.charCodeAt(w));) w++;
            w >= 2 && (n = `\\${n.slice(w)}`);
          }
          return t.win32.normalize(n);
        },
        relative(l, n) {
          if (_(l, "from"), _(n, "to"), l === n) return "";
          const m = t.win32.resolve(l), S = t.win32.resolve(n);
          if (m === S || (l = m.toLowerCase(), n = S.toLowerCase(), l === n)) {
            return "";
          }
          let w = 0;
          for (; w < l.length && l.charCodeAt(w) === d;) { 
            w++;
          }
          let c = l.length;
          for (; c - 1 > w && l.charCodeAt(c - 1) === d;) c--;
          const C = c - w;
          let L = 0;
          for (; L < n.length && n.charCodeAt(L) === d;) L++;
          let A = n.length;
          for (; A - 1 > L && n.charCodeAt(A - 1) === d;) A--;
          const M = A - L, R = C < M ? C : M;
          let D = -1, T = 0;
          for (; T < R; T++) {
            const k = l.charCodeAt(w + T);
            if (k !== n.charCodeAt(L + T)) break;
            k === d && (D = T);
          }
          if (T !== R) if (D === -1) return S;
          else {
            if (M > R) {
              if (n.charCodeAt(L + T) === d) return S.slice(L + T + 1);
              if (T === 2) return S.slice(L + T);
            }
            C > R && (l.charCodeAt(w + T) === d ? D = T : T === 2 && (D = 3)),
              D === -1 && (D = 0);
          }
          let $ = "";
          for (T = w + D + 1; T <= c; ++T) {
            (T === c || l.charCodeAt(T) === d) && ($ += $.length === 0
              ? ".."
              : "\\..");
          }
          return L += D,
            $.length > 0
              ? `${$}${S.slice(L, A)}`
              : (S.charCodeAt(L) === d && ++L, S.slice(L, A));
        },
        toNamespacedPath(l) {
          if (typeof l != "string") return l;
          if (l.length === 0) return "";
          const n = t.win32.resolve(l);
          if (n.length <= 2) return l;
          if (n.charCodeAt(0) === d) {
            if (n.charCodeAt(1) === d) {
              const m = n.charCodeAt(2);
              if (m !== a && m !== s) return `\\\\?\\UNC\\${n.slice(2)}`;
            }
          } else if (
            r(n.charCodeAt(0)) && n.charCodeAt(1) === N && n.charCodeAt(2) === d
          ) {
            return `\\\\?\\${n}`;
          }
          return l;
        },
        dirname(l) {
          _(l, "path");
          const n = l.length;
          if (n === 0) return ".";
          let m = -1, S = 0;
          const w = l.charCodeAt(0);
          if (n === 1) return v(w) ? l : ".";
          if (v(w)) {
            if (m = S = 1, v(l.charCodeAt(1))) {
              let L = 2, A = L;
              for (; L < n && !v(l.charCodeAt(L));) L++;
              if (L < n && L !== A) {
                for (A = L; L < n && v(l.charCodeAt(L));) L++;
                if (L < n && L !== A) {
                  for (A = L; L < n && !v(l.charCodeAt(L));) L++;
                  if (L === n) return l;
                  L !== A && (m = S = L + 1);
                }
              }
            }
          } else {
            r(w) && l.charCodeAt(1) === N &&
              (m = n > 2 && v(l.charCodeAt(2)) ? 3 : 2, S = m);
          }
          let c = -1, C = !0;
          for (let L = n - 1; L >= S; --L) {
            if (v(l.charCodeAt(L))) {
              if (!C) {
                c = L;
                break;
              }
            } else C = !1;
          }
          if (c === -1) {
            if (m === -1) return ".";
            c = m;
          }
          return l.slice(0, c);
        },
        basename(l, n) {
          n !== void 0 && _(n, "ext"), _(l, "path");
          let m = 0, S = -1, w = !0, c;
          if (
            l.length >= 2 && r(l.charCodeAt(0)) && l.charCodeAt(1) === N &&
            (m = 2), n !== void 0 && n.length > 0 && n.length <= l.length
          ) {
            if (n === l) return "";
            let C = n.length - 1, L = -1;
            for (c = l.length - 1; c >= m; --c) {
              const A = l.charCodeAt(c);
              if (v(A)) {
                if (!w) {
                  m = c + 1;
                  break;
                }
              } else {
                L === -1 && (w = !1, L = c + 1),
                  C >= 0 && (A === n.charCodeAt(C)
                    ? --C == -1 && (S = c)
                    : (C = -1, S = L));
              }
            }
            return m === S ? S = L : S === -1 && (S = l.length), l.slice(m, S);
          }
          for (c = l.length - 1; c >= m; --c) {
            if (v(l.charCodeAt(c))) {
              if (!w) {
                m = c + 1;
                break;
              }
            } else S === -1 && (w = !1, S = c + 1);
          }
          return S === -1 ? "" : l.slice(m, S);
        },
        extname(l) {
          _(l, "path");
          let n = 0, m = -1, S = 0, w = -1, c = !0, C = 0;
          l.length >= 2 && l.charCodeAt(1) === N && r(l.charCodeAt(0)) &&
            (n = S = 2);
          for (let L = l.length - 1; L >= n; --L) {
            const A = l.charCodeAt(L);
            if (v(A)) {
              if (!c) {
                S = L + 1;
                break;
              }
              continue;
            }
            w === -1 && (c = !1, w = L + 1),
              A === s
                ? m === -1 ? m = L : C !== 1 && (C = 1)
                : m !== -1 && (C = -1);
          }
          return m === -1 || w === -1 || C === 0 ||
              C === 1 && m === w - 1 && m === S + 1 ? "" : l.slice(m, w);
        },
        format: f.bind(null, "\\"),
        parse(l) {
          _(l, "path");
          const n = { root: "", dir: "", base: "", ext: "", name: "" };
          if (l.length === 0) return n;
          const m = l.length;
          let S = 0, w = l.charCodeAt(0);
          if (m === 1) {return v(w) ? (n.root = n.dir = l, n)
            : (n.base = n.name = l, n);}
          if (v(w)) {
            if (S = 1, v(l.charCodeAt(1))) {
              let D = 2, T = D;
              for (; D < m && !v(l.charCodeAt(D));) D++;
              if (D < m && D !== T) {
                for (T = D; D < m && v(l.charCodeAt(D));) D++;
                if (D < m && D !== T) {
                  for (T = D; D < m && !v(l.charCodeAt(D));) D++;
                  D === m ? S = D : D !== T && (S = D + 1);
                }
              }
            }
          } else if (r(w) && l.charCodeAt(1) === N) {
            if (m <= 2) return n.root = n.dir = l, n;
            if (S = 2, v(l.charCodeAt(2))) {
              if (m === 3) return n.root = n.dir = l, n;
              S = 3;
            }
          }
          S > 0 && (n.root = l.slice(0, S));
          let c = -1, C = S, L = -1, A = !0, M = l.length - 1, R = 0;
          for (; M >= S; --M) {
            if (w = l.charCodeAt(M), v(w)) {
              if (!A) {
                C = M + 1;
                break;
              }
              continue;
            }
            L === -1 && (A = !1, L = M + 1),
              w === s
                ? c === -1
                  ? c = M
                  : R !== 1 && (R = 1)
                : c !== -1 && (R = -1);
          }
          return L !== -1 &&
            (c === -1 || R === 0 || R === 1 && c === L - 1 && c === C + 1
              ? n.base = n.name = l.slice(C, L)
              : (n.name = l.slice(C, c),
                n.base = l.slice(C, L),
                n.ext = l.slice(c, L))),
            C > 0 && C !== S ? n.dir = l.slice(0, C - 1) : n.dir = n.root,
            n;
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null,
      },
        t.posix = {
          resolve(...l) {
            let n = "", m = !1;
            for (let S = l.length - 1; S >= -1 && !m; S--) {
              const w = S >= 0 ? l[S] : p.cwd();
              _(w, "path"),
                w.length !== 0 && (n = `${w}/${n}`, m = w.charCodeAt(0) === u);
            }
            return n = g(n, !m, "/", i), m ? `/${n}` : n.length > 0 ? n : ".";
          },
          normalize(l) {
            if (_(l, "path"), l.length === 0)return ".";
            const n = l.charCodeAt(0) === u,
              m = l.charCodeAt(l.length - 1) === u;
            return l = g(l, !n, "/", i),
              l.length === 0
                ? n
                  ? "/"
                  : m
                  ? "./"
                  : "."
                : (m && (l += "/"), n ? `/${l}` : l);
          },
          isAbsolute(l) {
            return _(l, "path"), l.length > 0 && l.charCodeAt(0) === u;
          },
          join(...l) {
            if (l.length === 0)return ".";
            let n;
            for (let m = 0; m < l.length; ++m) {
              const S = l[m];
              _(S, "path"),
                S.length > 0 && (n === void 0 ? n = S : n += `/${S}`);
            }
            return n === void 0 ? "." : t.posix.normalize(n);
          },
          relative(l, n) {
            if (
              _(l, "from"),
                _(n, "to"),
                l === n ||
                (l = t.posix.resolve(l), n = t.posix.resolve(n), l === n)
            ) {
              return "";
            }
            const m = 1,
              S = l.length,
              w = S - m,
              c = 1,
              C = n.length - c,
              L = w < C ? w : C;
            let A = -1, M = 0;
            for (; M < L; M++) {
              const D = l.charCodeAt(m + M);
              if (D !== n.charCodeAt(c + M)) break;
              D === u && (A = M);
            }
            if (M === L) {
              if (C > L) {
                if (n.charCodeAt(c + M) === u) return n.slice(c + M + 1);
                if (M === 0) return n.slice(c + M);
              } else {
                w > L &&
                  (l.charCodeAt(m + M) === u ? A = M : M === 0 && (A = 0));
              }
            }
            let R = "";
            for (
              M = m + A + 1; M <= S; ++M
            ) {
              (M === S || l.charCodeAt(M) === u) &&
                (R += R.length === 0 ? ".." : "/..");
            }
            return `${R}${n.slice(c + A)}`;
          },
          toNamespacedPath(l) {
            return l;
          },
          dirname(l) {
            if (_(l, "path"), l.length === 0)return ".";
            const n = l.charCodeAt(0) === u;
            let m = -1, S = !0;
            for (let w = l.length - 1; w >= 1; --w) {if (
                l.charCodeAt(w) === u
              ) {
                if (!S) {
                  m = w;
                  break;
                }
              } else S = !1;}
            return m === -1 ? n ? "/" : "."
            : n && m === 1 ? "//" : l.slice(0, m);
          },
          basename(l, n) {
            n !== void 0 && _(n, "ext"), _(l, "path");
            let m = 0, S = -1, w = !0, c;
            if (n !== void 0 && n.length > 0 && n.length <= l.length) {
              if (n === l)return "";
              let C = n.length - 1, L = -1;
              for (c = l.length - 1; c >= 0; --c) {
                const A = l.charCodeAt(c);
                if (A === u) {
                  if (!w) {
                    m = c + 1;
                    break;
                  }
                } else {
                  L === -1 && (w = !1, L = c + 1),
                    C >= 0 &&
                    (A === n.charCodeAt(C)
                      ? --C == -1 && (S = c)
                      : (C = -1, S = L));
                }
              }
              return m === S ? S = L : S === -1 && (S = l.length),
                l.slice(m, S);
            }
            for (c = l.length - 1; c >= 0; --c) {
              if (l.charCodeAt(c) === u) {if (!w) {
                  m = c + 1;
                  break;
                }} else S === -1 && (w = !1, S = c + 1);
            }
            return S === -1 ? "" : l.slice(m, S);
          },
          extname(l) {
            _(l, "path");
            let n = -1, m = 0, S = -1, w = !0, c = 0;
            for (let C = l.length - 1; C >= 0; --C) {
              const L = l.charCodeAt(C);
              if (L === u) {
                if (!w) {
                  m = C + 1;
                  break;
                }
                continue;
              }
              S === -1 && (w = !1, S = C + 1),
                L === s
                  ? n === -1 ? n = C : c !== 1 && (c = 1)
                  : n !== -1 && (c = -1);
            }
            return n === -1 || S === -1 || c === 0 ||
                c === 1 && n === S - 1 && n === m + 1 ? "" : l.slice(n, S);
          },
          format: f.bind(null, "/"),
          parse(l) {
            _(l, "path");
            const n = { root: "", dir: "", base: "", ext: "", name: "" };
            if (l.length === 0)return n;
            const m = l.charCodeAt(0) === u;
            let S;
            m ? (n.root = "/", S = 1) : S = 0;
            let w = -1, c = 0, C = -1, L = !0, A = l.length - 1, M = 0;
            for (; A >= S; --A) {
              const R = l.charCodeAt(A);
              if (R === u) {
                if (!L) {
                  c = A + 1;
                  break;
                }
                continue;
              }
              C === -1 && (L = !1, C = A + 1),
                R === s
                  ? w === -1 ? w = A : M !== 1 && (M = 1)
                  : w !== -1 && (M = -1);
            }
            if (C !== -1) {
              const R = c === 0 && m ? 1 : c;
              w === -1 || M === 0 || M === 1 && w === C - 1 && w === c + 1
                ? n.base = n.name = l.slice(R, C)
                : (n.name = l.slice(R, w),
                  n.base = l.slice(R, C),
                  n.ext = l.slice(w, C));
            }
            return c > 0 ? n.dir = l.slice(0, c - 1) : m && (n.dir = "/"), n;
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        },
        t.posix.win32 = t.win32.win32 = t.win32,
        t.posix.posix = t.win32.posix = t.posix,
        t.normalize = p.platform === "win32" ? t.win32.normalize
        : t.posix.normalize,
        t.resolve = p.platform === "win32" ? t.win32.resolve : t.posix.resolve,
        t.relative = p.platform === "win32" ? t.win32.relative
        : t.posix.relative,
        t.dirname = p.platform === "win32" ? t.win32.dirname : t.posix.dirname,
        t.basename = p.platform === "win32" ? t.win32.basename
        : t.posix.basename,
        t.extname = p.platform === "win32" ? t.win32.extname : t.posix.extname,
        t.sep = p.platform === "win32" ? t.win32.sep : t.posix.sep;
    }),
    V(z[8], G([0, 1, 2]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.StopWatch = void 0;
      const P = p.globals.performance &&
        typeof p.globals.performance.now == "function";
      class E {
        constructor(h) {
          this._highResolution = P && h,
            this._startTime = this._now(),
            this._stopTime = -1;
        }
        static create(h = !0) {
          return new E(h);
        }
        stop() {
          this._stopTime = this._now();
        }
        elapsed() {
          return this._stopTime !== -1
            ? this._stopTime - this._startTime
            : this._now() - this._startTime;
        }
        _now() {
          return this._highResolution ? p.globals.performance.now()
          : Date.now();
        }
      }
      t.StopWatch = E;
    }),
    V(z[9], G([0, 1, 4, 7, 18, 8]), function (I, t, p, P, E, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.Relay = t.EventBufferer = t.PauseableEmitter = t.Emitter = t.Event =
          void 0;
      var h;
      (function (v) {
        v.None = () => P.Disposable.None;
        function i(k) {
          return (F, e = null, O) => {
            let H = !1, B;
            return B = k(
              (Q) => {
                if (!H) return B ? B.dispose() : H = !0, F.call(e, Q);
              },
              null,
              O,
            ),
              H && B.dispose(),
              B;
          };
        }
        v.once = i;
        function r(k, F) {
          return S((e, O = null, H) => k((B) => e.call(O, F(B)), null, H));
        }
        v.map = r;
        function g(k, F) {
          return S((e, O = null, H) =>
            k(
              (B) => {
                F(B), e.call(O, B);
              },
              null,
              H,
            )
          );
        }
        v.forEach = g;
        function f(k, F) {
          return S((e, O = null, H) => k((B) => F(B) && e.call(O, B), null, H));
        }
        v.filter = f;
        function l(k) {
          return k;
        }
        v.signal = l;
        function n(...k) {
          return (F, e = null, O) =>
            P.combinedDisposable(
              ...k.map((H) => H((B) => F.call(e, B), null, O)),
            );
        }
        v.any = n;
        function m(k, F, e) {
          let O = e;
          return r(k, (H) => (O = F(O, H), O));
        }
        v.reduce = m;
        function S(k) {
          let F;
          const e = new N({
            onFirstListenerAdd() {
              F = k(e.fire, e);
            },
            onLastListenerRemove() {
              F.dispose();
            },
          });
          return e.event;
        }
        v.snapshot = S;
        function w(k, F, e = 100, O = !1, H) {
          let B, Q, Z, ie = 0;
          const re = new N({
            leakWarningThreshold: H,
            onFirstListenerAdd() {
              B = k((se) => {
                ie++,
                  Q = F(Q, se),
                  O && !Z && (re.fire(Q), Q = void 0),
                  clearTimeout(Z),
                  Z = setTimeout(() => {
                    const le = Q;
                    Q = void 0,
                      Z = void 0,
                      (!O || ie > 1) && re.fire(le),
                      ie = 0;
                  }, e);
              });
            },
            onLastListenerRemove() {
              B.dispose();
            },
          });
          return re.event;
        }
        v.debounce = w;
        function c(k) {
          const F = new Date().getTime();
          return r(i(k), (e) => new Date().getTime() - F);
        }
        v.stopwatch = c;
        function C(k) {
          let F = !0, e;
          return f(k, (O) => {
            const H = F || O !== e;
            return F = !1, e = O, H;
          });
        }
        v.latch = C;
        function L(k, F = !1, e = []) {
          let O = e.slice(),
            H = k((Z) => {
              O ? O.push(Z) : Q.fire(Z);
            });
          const B = () => {
              O && O.forEach((Z) => Q.fire(Z)), O = null;
            },
            Q = new N({
              onFirstListenerAdd() {
                H || (H = k((Z) => Q.fire(Z)));
              },
              onFirstListenerDidAdd() {
                O && (F ? setTimeout(B) : B());
              },
              onLastListenerRemove() {
                H && H.dispose(), H = null;
              },
            });
          return Q.event;
        }
        v.buffer = L;
        class A {
          constructor(F) {
            this.event = F;
          }
          map(F) {
            return new A(r(this.event, F));
          }
          forEach(F) {
            return new A(g(this.event, F));
          }
          filter(F) {
            return new A(f(this.event, F));
          }
          reduce(F, e) {
            return new A(m(this.event, F, e));
          }
          latch() {
            return new A(C(this.event));
          }
          debounce(F, e = 100, O = !1, H) {
            return new A(w(this.event, F, e, O, H));
          }
          on(F, e, O) {
            return this.event(F, e, O);
          }
          once(F, e, O) {
            return i(this.event)(F, e, O);
          }
        }
        function M(k) {
          return new A(k);
        }
        v.chain = M;
        function R(k, F, e = (O) => O) {
          const O = (...Z) => Q.fire(e(...Z)),
            H = () => k.on(F, O),
            B = () => k.removeListener(F, O),
            Q = new N({ onFirstListenerAdd: H, onLastListenerRemove: B });
          return Q.event;
        }
        v.fromNodeEventEmitter = R;
        function D(k, F, e = (O) => O) {
          const O = (...Z) => Q.fire(e(...Z)),
            H = () => k.addEventListener(F, O),
            B = () => k.removeEventListener(F, O),
            Q = new N({ onFirstListenerAdd: H, onLastListenerRemove: B });
          return Q.event;
        }
        v.fromDOMEventEmitter = D;
        function T(k) {
          const F = new N();
          let e = !1;
          return k.then(void 0, () => null).then(() => {
            e ? F.fire(void 0) : setTimeout(() => F.fire(void 0), 0);
          }),
            e = !0,
            F.event;
        }
        v.fromPromise = T;
        function $(k) {
          return new Promise((F) => i(k)(F));
        }
        v.toPromise = $;
      })(h = t.Event || (t.Event = {}));
      class s {
        constructor(i) {
          this._listenerCount = 0,
            this._invocationCount = 0,
            this._elapsedOverall = 0,
            this._name = `${i}_${s._idPool++}`;
        }
        start(i) {
          this._stopWatch = new o.StopWatch(!0), this._listenerCount = i;
        }
        stop() {
          if (this._stopWatch) {
            const i = this._stopWatch.elapsed();
            this._elapsedOverall += i,
              this._invocationCount += 1,
              console.info(
                `did FIRE ${this._name}: elapsed_ms: ${
                  i.toFixed(5)
                }, listener: ${this._listenerCount} (elapsed_overall: ${
                  this._elapsedOverall.toFixed(2)
                }, invocations: ${this._invocationCount})`,
              ),
              this._stopWatch = void 0;
          }
        }
      }
      s._idPool = 0;
      let u = -1;
      class d {
        constructor(i, r = Math.random().toString(18).slice(2, 5)) {
          this.customThreshold = i, this.name = r, this._warnCountdown = 0;
        }
        dispose() {
          this._stacks && this._stacks.clear();
        }
        check(i) {
          let r = u;
          if (
            typeof this.customThreshold == "number" &&
            (r = this.customThreshold), !(r <= 0 || i < r)
          ) {
            this._stacks || (this._stacks = new Map());
            const g = new Error().stack.split(`
`).slice(3).join(`
`),
              f = this._stacks.get(g) || 0;
            if (
              this._stacks.set(g, f + 1),
                this._warnCountdown -= 1,
                this._warnCountdown <= 0
            ) {
              this._warnCountdown = r * .5;
              let l, n = 0;
              for (const [m, S] of this._stacks)(!l || n < S) && (l = m, n = S);
              console.warn(
                `[${this.name}] potential listener LEAK detected, having ${i} listeners already. MOST frequent listener (${n}):`,
              ), console.warn(l);
            }
            return () => {
              const l = this._stacks.get(g) || 0;
              this._stacks.set(g, l - 1);
            };
          }
        }
      }
      class N {
        constructor(i) {
          var r;
          this._disposed = !1,
            this._options = i,
            this._leakageMon = u > 0
              ? new d(this._options && this._options.leakWarningThreshold)
              : void 0,
            this._perfMon = ((r = this._options) === null || r === void 0
                ? void 0
                : r._profName)
              ? new s(this._options._profName)
              : void 0;
        }
        get event() {
          return this._event || (this._event = (i, r, g) => {
            var f;
            this._listeners || (this._listeners = new E.LinkedList());
            const l = this._listeners.isEmpty();
            l && this._options && this._options.onFirstListenerAdd &&
              this._options.onFirstListenerAdd(this);
            const n = this._listeners.push(r ? [i, r] : i);
            l && this._options && this._options.onFirstListenerDidAdd &&
            this._options.onFirstListenerDidAdd(this),
              this._options && this._options.onListenerDidAdd &&
              this._options.onListenerDidAdd(this, i, r);
            const m = (f = this._leakageMon) === null || f === void 0
              ? void 0
              : f.check(this._listeners.size);
            let S;
            return S = {
              dispose: () => {
                m && m(),
                  S.dispose = N._noop,
                  this._disposed ||
                  (n(),
                    this._options && this._options.onLastListenerRemove &&
                    (this._listeners && !this._listeners.isEmpty() ||
                      this._options.onLastListenerRemove(this)));
              },
            },
              g instanceof P.DisposableStore
                ? g.add(S)
                : Array.isArray(g) && g.push(S),
              S;
          }),
            this._event;
        }
        fire(i) {
          var r, g;
          if (this._listeners) {
            this._deliveryQueue || (this._deliveryQueue = new E.LinkedList());
            for (let f of this._listeners) this._deliveryQueue.push([f, i]);
            for (
              (r = this._perfMon) === null || r === void 0 ||
              r.start(this._deliveryQueue.size);
              this._deliveryQueue.size > 0;
            ) {
              const [f, l] = this._deliveryQueue.shift();
              try {
                typeof f == "function" ? f.call(void 0, l) : f[0].call(f[1], l);
              } catch (n) {
                p.onUnexpectedError(n);
              }
            }
            (g = this._perfMon) === null || g === void 0 || g.stop();
          }
        }
        dispose() {
          var i, r, g;
          (i = this._listeners) === null || i === void 0 || i.clear(),
            (r = this._deliveryQueue) === null || r === void 0 || r.clear(),
            (g = this._leakageMon) === null || g === void 0 || g.dispose(),
            this._disposed = !0;
        }
      }
      t.Emitter = N, N._noop = function () {};
      class a extends N {
        constructor(i) {
          super(i);
          this._isPaused = 0,
            this._eventQueue = new E.LinkedList(),
            this._mergeFn = i == null ? void 0 : i.merge;
        }
        pause() {
          this._isPaused++;
        }
        resume() {
          if (this._isPaused !== 0 && --this._isPaused == 0) {
            if (this._mergeFn) {
              const i = Array.from(this._eventQueue);
              this._eventQueue.clear(), super.fire(this._mergeFn(i));
            } else {
              for (; !this._isPaused && this._eventQueue.size !== 0;) {
                super.fire(this._eventQueue.shift());
              }
            }
          }
        }
        fire(i) {
          this._listeners &&
            (this._isPaused !== 0 ? this._eventQueue.push(i) : super.fire(i));
        }
      }
      t.PauseableEmitter = a;
      class b {
        constructor() {
          this.buffers = [];
        }
        wrapEvent(i) {
          return (r, g, f) =>
            i(
              (l) => {
                const n = this.buffers[this.buffers.length - 1];
                n ? n.push(() => r.call(g, l)) : r.call(g, l);
              },
              void 0,
              f,
            );
        }
        bufferEvents(i) {
          const r = [];
          this.buffers.push(r);
          const g = i();
          return this.buffers.pop(), r.forEach((f) => f()), g;
        }
      }
      t.EventBufferer = b;
      class _ {
        constructor() {
          this.listening = !1,
            this.inputEvent = h.None,
            this.inputEventListener = P.Disposable.None,
            this.emitter = new N({
              onFirstListenerDidAdd: () => {
                this.listening = !0,
                  this.inputEventListener = this.inputEvent(
                    this.emitter.fire,
                    this.emitter,
                  );
              },
              onLastListenerRemove: () => {
                this.listening = !1, this.inputEventListener.dispose();
              },
            }),
            this.event = this.emitter.event;
        }
        set input(i) {
          this.inputEvent = i,
            this.listening &&
            (this.inputEventListener.dispose(),
              this.inputEventListener = i(this.emitter.fire, this.emitter));
        }
        dispose() {
          this.inputEventListener.dispose(), this.emitter.dispose();
        }
      }
      t.Relay = _;
    }),
    V(z[21], G([0, 1, 9]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.CancellationTokenSource = t.CancellationToken = void 0;
      const P = Object.freeze(function (s, u) {
        const d = setTimeout(s.bind(u), 0);
        return {
          dispose() {
            clearTimeout(d);
          },
        };
      });
      var E;
      (function (s) {
        function u(d) {
          return d === s.None || d === s.Cancelled || d instanceof o
            ? !0
            : !d || typeof d != "object"
            ? !1
            : typeof d.isCancellationRequested == "boolean" &&
              typeof d.onCancellationRequested == "function";
        }
        s.isCancellationToken = u,
          s.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: p.Event.None,
          }),
          s.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: P,
          });
      })(E = t.CancellationToken || (t.CancellationToken = {}));
      class o {
        constructor() {
          this._isCancelled = !1, this._emitter = null;
        }
        cancel() {
          this._isCancelled ||
            (this._isCancelled = !0,
              this._emitter && (this._emitter.fire(void 0), this.dispose()));
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          return this._isCancelled ? P
          : (this._emitter || (this._emitter = new p.Emitter()),
            this._emitter.event);
        }
        dispose() {
          this._emitter && (this._emitter.dispose(), this._emitter = null);
        }
      }
      class h {
        constructor(u) {
          this._token = void 0,
            this._parentListener = void 0,
            this._parentListener = u &&
              u.onCancellationRequested(this.cancel, this);
        }
        get token() {
          return this._token || (this._token = new o()), this._token;
        }
        cancel() {
          this._token ? this._token instanceof o && this._token.cancel()
          : this._token = E.Cancelled;
        }
        dispose(u = !1) {
          u && this.cancel(),
            this._parentListener && this._parentListener.dispose(),
            this._token
              ? this._token instanceof o && this._token.dispose()
              : this._token = E.None;
        }
      }
      t.CancellationTokenSource = h;
    }),
    V(z[5], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.breakBetweenGraphemeBreakType = t.getGraphemeBreakType = t
          .singleLetterHash = t.containsUppercaseCharacter = t
            .startsWithUTF8BOM = t.UTF8_BOM_CHARACTER = t.isEmojiImprecise = t
              .isFullWidthCharacter = t.containsFullWidthCharacter = t
                .containsUnusualLineTerminators = t.UNUSUAL_LINE_TERMINATORS = t
                  .isBasicASCII = t.containsEmoji = t.containsRTL = t
                    .decodeUTF8 = t.prevCharLength = t.nextCharLength = t
                      .getNextCodePoint = t.computeCodePoint = t
                        .isLowSurrogate = t.isHighSurrogate = t
                          .commonSuffixLength = t.commonPrefixLength = t
                            .startsWithIgnoreCase = t.equalsIgnoreCase = t
                              .isUpperAsciiLetter = t.isLowerAsciiLetter = t
                                .compareSubstringIgnoreCase = t
                                  .compareIgnoreCase = t.compareSubstring = t
                                    .compare = t.lastNonWhitespaceIndex = t
                                      .getLeadingWhitespace = t
                                        .firstNonWhitespaceIndex = t
                                          .splitLines = t.regExpFlags = t
                                            .regExpLeadsToEndlessLoop = t
                                              .createRegExp = t.stripWildcards =
                                                t.convertSimple2RegExpPattern =
                                                  t.rtrim = t.ltrim = t.trim = t
                                                    .escapeRegExpCharacters = t
                                                      .escape = t.format = t
                                                        .isFalsyOrWhitespace =
                                                          void 0;
      function p(y) {
        return !y || typeof y != "string" ? !0 : y.trim().length === 0;
      }
      t.isFalsyOrWhitespace = p;
      const P = /{(\d+)}/g;
      function E(y, ...U) {
        return U.length === 0 ? y : y.replace(P, function (W, q) {
          const j = parseInt(q, 10);
          return isNaN(j) || j < 0 || j >= U.length ? W : U[j];
        });
      }
      t.format = E;
      function o(y) {
        return y.replace(/[<>&]/g, function (U) {
          switch (U) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "&":
              return "&amp;";
            default:
              return U;
          }
        });
      }
      t.escape = o;
      function h(y) {
        return y.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
      }
      t.escapeRegExpCharacters = h;
      function s(y, U = " ") {
        const W = u(y, U);
        return d(W, U);
      }
      t.trim = s;
      function u(y, U) {
        if (!y || !U) return y;
        const W = U.length;
        if (W === 0 || y.length === 0) return y;
        let q = 0;
        for (; y.indexOf(U, q) === q;) q = q + W;
        return y.substring(q);
      }
      t.ltrim = u;
      function d(y, U) {
        if (!y || !U) return y;
        const W = U.length, q = y.length;
        if (W === 0 || q === 0) return y;
        let j = q, Y = -1;
        for (; Y = y.lastIndexOf(U, j - 1), !(Y === -1 || Y + W !== j);) {
          if (Y === 0) return "";
          j = Y;
        }
        return y.substring(0, j);
      }
      t.rtrim = d;
      function N(y) {
        return y.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
          .replace(/[\*]/g, ".*");
      }
      t.convertSimple2RegExpPattern = N;
      function a(y) {
        return y.replace(/\*/g, "");
      }
      t.stripWildcards = a;
      function b(y, U, W = {}) {
        if (!y) throw new Error("Cannot create regex from empty string");
        U || (y = h(y)),
          W.wholeWord &&
          (/\B/.test(y.charAt(0)) || (y = "\\b" + y),
            /\B/.test(y.charAt(y.length - 1)) || (y = y + "\\b"));
        let q = "";
        return W.global && (q += "g"),
          W.matchCase || (q += "i"),
          W.multiline && (q += "m"),
          W.unicode && (q += "u"),
          new RegExp(y, q);
      }
      t.createRegExp = b;
      function _(y) {
        return y.source === "^" || y.source === "^$" || y.source === "$" ||
            y.source === "^\\s*$"
          ? !1
          : !!(y.exec("") && y.lastIndex === 0);
      }
      t.regExpLeadsToEndlessLoop = _;
      function v(y) {
        return (y.global ? "g" : "") + (y.ignoreCase ? "i" : "") + (y.multiline
          ? "m"
          : "") +
          (y.unicode ? "u" : "");
      }
      t.regExpFlags = v;
      function i(y) {
        return y.split(/\r\n|\r|\n/);
      }
      t.splitLines = i;
      function r(y) {
        for (let U = 0, W = y.length; U < W; U++) {
          const q = y.charCodeAt(U);
          if (q !== 32 && q !== 9) return U;
        }
        return -1;
      }
      t.firstNonWhitespaceIndex = r;
      function g(y, U = 0, W = y.length) {
        for (let q = U; q < W; q++) {
          const j = y.charCodeAt(q);
          if (j !== 32 && j !== 9) return y.substring(U, q);
        }
        return y.substring(U, W);
      }
      t.getLeadingWhitespace = g;
      function f(y, U = y.length - 1) {
        for (let W = U; W >= 0; W--) {
          const q = y.charCodeAt(W);
          if (q !== 32 && q !== 9) return W;
        }
        return -1;
      }
      t.lastNonWhitespaceIndex = f;
      function l(y, U) {
        return y < U ? -1 : y > U ? 1 : 0;
      }
      t.compare = l;
      function n(y, U, W = 0, q = y.length, j = 0, Y = U.length) {
        for (; W < q && j < Y; W++, j++) {
          let K = y.charCodeAt(W), te = U.charCodeAt(j);
          if (K < te) return -1;
          if (K > te) return 1;
        }
        const J = q - W, x = Y - j;
        return J < x ? -1 : J > x ? 1 : 0;
      }
      t.compareSubstring = n;
      function m(y, U) {
        return S(y, U, 0, y.length, 0, U.length);
      }
      t.compareIgnoreCase = m;
      function S(y, U, W = 0, q = y.length, j = 0, Y = U.length) {
        for (; W < q && j < Y; W++, j++) {
          let K = y.charCodeAt(W), te = U.charCodeAt(j);
          if (K !== te) {
            const oe = K - te;
            if (!(oe === 32 && c(te)) && !(oe === -32 && c(K))) {
              return w(K) && w(te)
                ? oe
                : n(y.toLowerCase(), U.toLowerCase(), W, q, j, Y);
            }
          }
        }
        const J = q - W, x = Y - j;
        return J < x ? -1 : J > x ? 1 : 0;
      }
      t.compareSubstringIgnoreCase = S;
      function w(y) {
        return y >= 97 && y <= 122;
      }
      t.isLowerAsciiLetter = w;
      function c(y) {
        return y >= 65 && y <= 90;
      }
      t.isUpperAsciiLetter = c;
      function C(y) {
        return w(y) || c(y);
      }
      function L(y, U) {
        return y.length === U.length && A(y, U);
      }
      t.equalsIgnoreCase = L;
      function A(y, U, W = y.length) {
        for (let q = 0; q < W; q++) {
          const j = y.charCodeAt(q), Y = U.charCodeAt(q);
          if (j !== Y) {
            if (C(j) && C(Y)) {
              const J = Math.abs(j - Y);
              if (J !== 0 && J !== 32) return !1;
            } else if (
              String.fromCharCode(j).toLowerCase() !==
                String.fromCharCode(Y).toLowerCase()
            ) {
              return !1;
            }
          }
        }
        return !0;
      }
      function M(y, U) {
        const W = U.length;
        return U.length > y.length ? !1 : A(y, U, W);
      }
      t.startsWithIgnoreCase = M;
      function R(y, U) {
        let W, q = Math.min(y.length, U.length);
        for (W = 0; W < q; W++) {
          if (y.charCodeAt(W) !== U.charCodeAt(W)) return W;
        }
        return q;
      }
      t.commonPrefixLength = R;
      function D(y, U) {
        let W, q = Math.min(y.length, U.length);
        const j = y.length - 1, Y = U.length - 1;
        for (W = 0; W < q; W++) {
          if (y.charCodeAt(j - W) !== U.charCodeAt(Y - W)) {
            return W;
          }
        }
        return q;
      }
      t.commonSuffixLength = D;
      function T(y) {
        return 55296 <= y && y <= 56319;
      }
      t.isHighSurrogate = T;
      function $(y) {
        return 56320 <= y && y <= 57343;
      }
      t.isLowSurrogate = $;
      function k(y, U) {
        return (y - 55296 << 10) + (U - 56320) + 65536;
      }
      t.computeCodePoint = k;
      function F(y, U, W) {
        const q = y.charCodeAt(W);
        if (T(q) && W + 1 < U) {
          const j = y.charCodeAt(W + 1);
          if ($(j)) return k(q, j);
        }
        return q;
      }
      t.getNextCodePoint = F;
      function e(y, U) {
        const W = y.charCodeAt(U - 1);
        if ($(W) && U > 1) {
          const q = y.charCodeAt(U - 2);
          if (T(q)) return k(q, W);
        }
        return W;
      }
      function O(y, U) {
        const W = ee.getInstance(), q = U, j = y.length, Y = F(y, j, U);
        U += Y >= 65536 ? 2 : 1;
        let J = W.getGraphemeBreakType(Y);
        for (; U < j;) {
          const x = F(y, j, U), K = W.getGraphemeBreakType(x);
          if (ue(J, K)) break;
          U += x >= 65536 ? 2 : 1, J = K;
        }
        return U - q;
      }
      t.nextCharLength = O;
      function H(y, U) {
        const W = ee.getInstance(), q = U, j = e(y, U);
        U -= j >= 65536 ? 2 : 1;
        let Y = W.getGraphemeBreakType(j);
        for (; U > 0;) {
          const J = e(y, U), x = W.getGraphemeBreakType(J);
          if (ue(x, Y)) break;
          U -= J >= 65536 ? 2 : 1, Y = x;
        }
        return q - U;
      }
      t.prevCharLength = H;
      function B(y) {
        const U = y.byteLength, W = [];
        let q = 0;
        for (; q < U;) {
          const j = y[q];
          let Y;
          if (
            j >= 240 && q + 3 < U
              ? Y = (y[q++] & 7) << 18 >>> 0 | (y[q++] & 63) << 12 >>> 0 |
                (y[q++] & 63) << 6 >>> 0 | (y[q++] & 63) << 0 >>> 0
              : j >= 224 && q + 2 < U
              ? Y = (y[q++] & 15) << 12 >>> 0 | (y[q++] & 63) << 6 >>> 0 |
                (y[q++] & 63) << 0 >>> 0
              : j >= 192 && q + 1 < U
              ? Y = (y[q++] & 31) << 6 >>> 0 | (y[q++] & 63) << 0 >>> 0
              : Y = y[q++], Y >= 0 && Y <= 55295 || Y >= 57344 && Y <= 65535
          ) {
            W.push(String.fromCharCode(Y));
          } else if (Y >= 65536 && Y <= 1114111) {
            const J = Y - 65536,
              x = 55296 + ((J & 1047552) >>> 10),
              K = 56320 + ((J & 1023) >>> 0);
            W.push(String.fromCharCode(x)), W.push(String.fromCharCode(K));
          } else W.push(String.fromCharCode(65533));
        }
        return W.join("");
      }
      t.decodeUTF8 = B;
      const Q =
        /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      function Z(y) {
        return Q.test(y);
      }
      t.containsRTL = Z;
      const ie =
        /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD00-\uDDFF\uDE70-\uDE73\uDE78-\uDE82\uDE90-\uDE95])/;
      function re(y) {
        return ie.test(y);
      }
      t.containsEmoji = re;
      const se = /^[\t\n\r\x20-\x7E]*$/;
      function le(y) {
        return se.test(y);
      }
      t.isBasicASCII = le, t.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
      function he(y) {
        return t.UNUSUAL_LINE_TERMINATORS.test(y);
      }
      t.containsUnusualLineTerminators = he;
      function de(y) {
        for (let U = 0, W = y.length; U < W; U++) {
          if (ae(y.charCodeAt(U))) {
            return !0;
          }
        }
        return !1;
      }
      t.containsFullWidthCharacter = de;
      function ae(y) {
        return y = +y,
          y >= 11904 && y <= 55215 || y >= 63744 && y <= 64255 ||
          y >= 65281 && y <= 65374;
      }
      t.isFullWidthCharacter = ae;
      function me(y) {
        return y >= 127462 && y <= 127487 || y >= 9728 && y <= 10175 ||
          y >= 127744 && y <= 128591 || y >= 128640 && y <= 128764 ||
          y >= 128992 && y <= 129003 || y >= 129280 && y <= 129535 ||
          y >= 129648 && y <= 129651 || y >= 129656 && y <= 129666 ||
          y >= 129680 && y <= 129685;
      }
      t.isEmojiImprecise = me,
        t.UTF8_BOM_CHARACTER = String.fromCharCode(65279);
      function ge(y) {
        return !!(y && y.length > 0 && y.charCodeAt(0) === 65279);
      }
      t.startsWithUTF8BOM = ge;
      function _e(y, U = !1) {
        return y
          ? (U && (y = y.replace(/\\./g, "")), y.toLowerCase() !== y)
          : !1;
      }
      t.containsUppercaseCharacter = _e;
      function ve(y) {
        const U = 90 - 65 + 1;
        return y = y % (2 * U),
          y < U ? String.fromCharCode(97 + y) : String.fromCharCode(65 + y - U);
      }
      t.singleLetterHash = ve;
      function Ce(y) {
        return ee.getInstance().getGraphemeBreakType(y);
      }
      t.getGraphemeBreakType = Ce;
      function ue(y, U) {
        return y === 0 ? U !== 5 && U !== 7 : y === 2 && U === 3
          ? !1
          : y === 4 || y === 2 || y === 3 || U === 4 || U === 2 || U === 3
          ? !0
          : !(y === 8 && (U === 8 || U === 9 || U === 11 || U === 12) ||
            (y === 11 || y === 9) && (U === 9 || U === 10) ||
            (y === 12 || y === 10) && U === 10 || U === 5 || U === 13 ||
            U === 7 || y === 1 || y === 13 && U === 14 || y === 6 && U === 6);
      }
      t.breakBetweenGraphemeBreakType = ue;
      class ee {
        constructor() {
          this._data = be();
        }
        static getInstance() {
          return ee._INSTANCE || (ee._INSTANCE = new ee()), ee._INSTANCE;
        }
        getGraphemeBreakType(U) {
          if (U < 32) return U === 10 ? 3 : U === 13 ? 2 : 4;
          if (U < 127) return 0;
          const W = this._data, q = W.length / 3;
          let j = 1;
          for (; j <= q;) {
            if (U < W[3 * j]) j = 2 * j;
            else if (U > W[3 * j + 1]) j = 2 * j + 1;
            else return W[3 * j + 2];
          }
          return 0;
        }
      }
      ee._INSTANCE = null;
      function be() {
        return JSON.parse(
          "[0,0,0,51592,51592,11,44424,44424,11,72251,72254,5,7150,7150,7,48008,48008,11,55176,55176,11,128420,128420,14,3276,3277,5,9979,9980,14,46216,46216,11,49800,49800,11,53384,53384,11,70726,70726,5,122915,122916,5,129320,129327,14,2558,2558,5,5906,5908,5,9762,9763,14,43360,43388,8,45320,45320,11,47112,47112,11,48904,48904,11,50696,50696,11,52488,52488,11,54280,54280,11,70082,70083,1,71350,71350,7,73111,73111,5,127892,127893,14,128726,128727,14,129473,129474,14,2027,2035,5,2901,2902,5,3784,3789,5,6754,6754,5,8418,8420,5,9877,9877,14,11088,11088,14,44008,44008,5,44872,44872,11,45768,45768,11,46664,46664,11,47560,47560,11,48456,48456,11,49352,49352,11,50248,50248,11,51144,51144,11,52040,52040,11,52936,52936,11,53832,53832,11,54728,54728,11,69811,69814,5,70459,70460,5,71096,71099,7,71998,71998,5,72874,72880,5,119149,119149,7,127374,127374,14,128335,128335,14,128482,128482,14,128765,128767,14,129399,129400,14,129680,129685,14,1476,1477,5,2377,2380,7,2759,2760,5,3137,3140,7,3458,3459,7,4153,4154,5,6432,6434,5,6978,6978,5,7675,7679,5,9723,9726,14,9823,9823,14,9919,9923,14,10035,10036,14,42736,42737,5,43596,43596,5,44200,44200,11,44648,44648,11,45096,45096,11,45544,45544,11,45992,45992,11,46440,46440,11,46888,46888,11,47336,47336,11,47784,47784,11,48232,48232,11,48680,48680,11,49128,49128,11,49576,49576,11,50024,50024,11,50472,50472,11,50920,50920,11,51368,51368,11,51816,51816,11,52264,52264,11,52712,52712,11,53160,53160,11,53608,53608,11,54056,54056,11,54504,54504,11,54952,54952,11,68108,68111,5,69933,69940,5,70197,70197,7,70498,70499,7,70845,70845,5,71229,71229,5,71727,71735,5,72154,72155,5,72344,72345,5,73023,73029,5,94095,94098,5,121403,121452,5,126981,127182,14,127538,127546,14,127990,127990,14,128391,128391,14,128445,128449,14,128500,128505,14,128752,128752,14,129160,129167,14,129356,129356,14,129432,129442,14,129648,129651,14,129751,131069,14,173,173,4,1757,1757,1,2274,2274,1,2494,2494,5,2641,2641,5,2876,2876,5,3014,3016,7,3262,3262,7,3393,3396,5,3570,3571,7,3968,3972,5,4228,4228,7,6086,6086,5,6679,6680,5,6912,6915,5,7080,7081,5,7380,7392,5,8252,8252,14,9096,9096,14,9748,9749,14,9784,9786,14,9833,9850,14,9890,9894,14,9938,9938,14,9999,9999,14,10085,10087,14,12349,12349,14,43136,43137,7,43454,43456,7,43755,43755,7,44088,44088,11,44312,44312,11,44536,44536,11,44760,44760,11,44984,44984,11,45208,45208,11,45432,45432,11,45656,45656,11,45880,45880,11,46104,46104,11,46328,46328,11,46552,46552,11,46776,46776,11,47000,47000,11,47224,47224,11,47448,47448,11,47672,47672,11,47896,47896,11,48120,48120,11,48344,48344,11,48568,48568,11,48792,48792,11,49016,49016,11,49240,49240,11,49464,49464,11,49688,49688,11,49912,49912,11,50136,50136,11,50360,50360,11,50584,50584,11,50808,50808,11,51032,51032,11,51256,51256,11,51480,51480,11,51704,51704,11,51928,51928,11,52152,52152,11,52376,52376,11,52600,52600,11,52824,52824,11,53048,53048,11,53272,53272,11,53496,53496,11,53720,53720,11,53944,53944,11,54168,54168,11,54392,54392,11,54616,54616,11,54840,54840,11,55064,55064,11,65438,65439,5,69633,69633,5,69837,69837,1,70018,70018,7,70188,70190,7,70368,70370,7,70465,70468,7,70712,70719,5,70835,70840,5,70850,70851,5,71132,71133,5,71340,71340,7,71458,71461,5,71985,71989,7,72002,72002,7,72193,72202,5,72281,72283,5,72766,72766,7,72885,72886,5,73104,73105,5,92912,92916,5,113824,113827,4,119173,119179,5,121505,121519,5,125136,125142,5,127279,127279,14,127489,127490,14,127570,127743,14,127900,127901,14,128254,128254,14,128369,128370,14,128400,128400,14,128425,128432,14,128468,128475,14,128489,128494,14,128715,128720,14,128745,128745,14,128759,128760,14,129004,129023,14,129296,129304,14,129340,129342,14,129388,129392,14,129404,129407,14,129454,129455,14,129485,129487,14,129659,129663,14,129719,129727,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2363,2363,7,2402,2403,5,2507,2508,7,2622,2624,7,2691,2691,7,2786,2787,5,2881,2884,5,3006,3006,5,3072,3072,5,3170,3171,5,3267,3268,7,3330,3331,7,3406,3406,1,3538,3540,5,3655,3662,5,3897,3897,5,4038,4038,5,4184,4185,5,4352,4447,8,6068,6069,5,6155,6157,5,6448,6449,7,6742,6742,5,6783,6783,5,6966,6970,5,7042,7042,7,7143,7143,7,7212,7219,5,7412,7412,5,8206,8207,4,8294,8303,4,8596,8601,14,9410,9410,14,9742,9742,14,9757,9757,14,9770,9770,14,9794,9794,14,9828,9828,14,9855,9855,14,9882,9882,14,9900,9903,14,9929,9933,14,9963,9967,14,9987,9988,14,10006,10006,14,10062,10062,14,10175,10175,14,11744,11775,5,42607,42607,5,43043,43044,7,43263,43263,5,43444,43445,7,43569,43570,5,43698,43700,5,43766,43766,5,44032,44032,11,44144,44144,11,44256,44256,11,44368,44368,11,44480,44480,11,44592,44592,11,44704,44704,11,44816,44816,11,44928,44928,11,45040,45040,11,45152,45152,11,45264,45264,11,45376,45376,11,45488,45488,11,45600,45600,11,45712,45712,11,45824,45824,11,45936,45936,11,46048,46048,11,46160,46160,11,46272,46272,11,46384,46384,11,46496,46496,11,46608,46608,11,46720,46720,11,46832,46832,11,46944,46944,11,47056,47056,11,47168,47168,11,47280,47280,11,47392,47392,11,47504,47504,11,47616,47616,11,47728,47728,11,47840,47840,11,47952,47952,11,48064,48064,11,48176,48176,11,48288,48288,11,48400,48400,11,48512,48512,11,48624,48624,11,48736,48736,11,48848,48848,11,48960,48960,11,49072,49072,11,49184,49184,11,49296,49296,11,49408,49408,11,49520,49520,11,49632,49632,11,49744,49744,11,49856,49856,11,49968,49968,11,50080,50080,11,50192,50192,11,50304,50304,11,50416,50416,11,50528,50528,11,50640,50640,11,50752,50752,11,50864,50864,11,50976,50976,11,51088,51088,11,51200,51200,11,51312,51312,11,51424,51424,11,51536,51536,11,51648,51648,11,51760,51760,11,51872,51872,11,51984,51984,11,52096,52096,11,52208,52208,11,52320,52320,11,52432,52432,11,52544,52544,11,52656,52656,11,52768,52768,11,52880,52880,11,52992,52992,11,53104,53104,11,53216,53216,11,53328,53328,11,53440,53440,11,53552,53552,11,53664,53664,11,53776,53776,11,53888,53888,11,54000,54000,11,54112,54112,11,54224,54224,11,54336,54336,11,54448,54448,11,54560,54560,11,54672,54672,11,54784,54784,11,54896,54896,11,55008,55008,11,55120,55120,11,64286,64286,5,66272,66272,5,68900,68903,5,69762,69762,7,69817,69818,5,69927,69931,5,70003,70003,5,70070,70078,5,70094,70094,7,70194,70195,7,70206,70206,5,70400,70401,5,70463,70463,7,70475,70477,7,70512,70516,5,70722,70724,5,70832,70832,5,70842,70842,5,70847,70848,5,71088,71089,7,71102,71102,7,71219,71226,5,71231,71232,5,71342,71343,7,71453,71455,5,71463,71467,5,71737,71738,5,71995,71996,5,72000,72000,7,72145,72147,7,72160,72160,5,72249,72249,7,72273,72278,5,72330,72342,5,72752,72758,5,72850,72871,5,72882,72883,5,73018,73018,5,73031,73031,5,73109,73109,5,73461,73462,7,94031,94031,5,94192,94193,7,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,126976,126979,14,127184,127231,14,127344,127345,14,127405,127461,14,127514,127514,14,127561,127567,14,127778,127779,14,127896,127896,14,127985,127986,14,127995,127999,5,128326,128328,14,128360,128366,14,128378,128378,14,128394,128397,14,128405,128406,14,128422,128423,14,128435,128443,14,128453,128464,14,128479,128480,14,128484,128487,14,128496,128498,14,128640,128709,14,128723,128724,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129096,129103,14,129292,129292,14,129311,129311,14,129329,129330,14,129344,129349,14,129360,129374,14,129394,129394,14,129402,129402,14,129413,129425,14,129445,129450,14,129466,129471,14,129483,129483,14,129511,129535,14,129653,129655,14,129667,129670,14,129705,129711,14,129731,129743,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2307,2307,7,2366,2368,7,2382,2383,7,2434,2435,7,2497,2500,5,2519,2519,5,2563,2563,7,2631,2632,5,2677,2677,5,2750,2752,7,2763,2764,7,2817,2817,5,2879,2879,5,2891,2892,7,2914,2915,5,3008,3008,5,3021,3021,5,3076,3076,5,3146,3149,5,3202,3203,7,3264,3265,7,3271,3272,7,3298,3299,5,3390,3390,5,3402,3404,7,3426,3427,5,3535,3535,5,3544,3550,7,3635,3635,7,3763,3763,7,3893,3893,5,3953,3966,5,3981,3991,5,4145,4145,7,4157,4158,5,4209,4212,5,4237,4237,5,4520,4607,10,5970,5971,5,6071,6077,5,6089,6099,5,6277,6278,5,6439,6440,5,6451,6456,7,6683,6683,5,6744,6750,5,6765,6770,7,6846,6846,5,6964,6964,5,6972,6972,5,7019,7027,5,7074,7077,5,7083,7085,5,7146,7148,7,7154,7155,7,7222,7223,5,7394,7400,5,7416,7417,5,8204,8204,5,8233,8233,4,8288,8292,4,8413,8416,5,8482,8482,14,8986,8987,14,9193,9203,14,9654,9654,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9775,14,9792,9792,14,9800,9811,14,9825,9826,14,9831,9831,14,9852,9853,14,9872,9873,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9936,9936,14,9941,9960,14,9974,9974,14,9982,9985,14,9992,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10145,10145,14,11013,11015,14,11503,11505,5,12334,12335,5,12951,12951,14,42612,42621,5,43014,43014,5,43047,43047,7,43204,43205,5,43335,43345,5,43395,43395,7,43450,43451,7,43561,43566,5,43573,43574,5,43644,43644,5,43710,43711,5,43758,43759,7,44005,44005,5,44012,44012,7,44060,44060,11,44116,44116,11,44172,44172,11,44228,44228,11,44284,44284,11,44340,44340,11,44396,44396,11,44452,44452,11,44508,44508,11,44564,44564,11,44620,44620,11,44676,44676,11,44732,44732,11,44788,44788,11,44844,44844,11,44900,44900,11,44956,44956,11,45012,45012,11,45068,45068,11,45124,45124,11,45180,45180,11,45236,45236,11,45292,45292,11,45348,45348,11,45404,45404,11,45460,45460,11,45516,45516,11,45572,45572,11,45628,45628,11,45684,45684,11,45740,45740,11,45796,45796,11,45852,45852,11,45908,45908,11,45964,45964,11,46020,46020,11,46076,46076,11,46132,46132,11,46188,46188,11,46244,46244,11,46300,46300,11,46356,46356,11,46412,46412,11,46468,46468,11,46524,46524,11,46580,46580,11,46636,46636,11,46692,46692,11,46748,46748,11,46804,46804,11,46860,46860,11,46916,46916,11,46972,46972,11,47028,47028,11,47084,47084,11,47140,47140,11,47196,47196,11,47252,47252,11,47308,47308,11,47364,47364,11,47420,47420,11,47476,47476,11,47532,47532,11,47588,47588,11,47644,47644,11,47700,47700,11,47756,47756,11,47812,47812,11,47868,47868,11,47924,47924,11,47980,47980,11,48036,48036,11,48092,48092,11,48148,48148,11,48204,48204,11,48260,48260,11,48316,48316,11,48372,48372,11,48428,48428,11,48484,48484,11,48540,48540,11,48596,48596,11,48652,48652,11,48708,48708,11,48764,48764,11,48820,48820,11,48876,48876,11,48932,48932,11,48988,48988,11,49044,49044,11,49100,49100,11,49156,49156,11,49212,49212,11,49268,49268,11,49324,49324,11,49380,49380,11,49436,49436,11,49492,49492,11,49548,49548,11,49604,49604,11,49660,49660,11,49716,49716,11,49772,49772,11,49828,49828,11,49884,49884,11,49940,49940,11,49996,49996,11,50052,50052,11,50108,50108,11,50164,50164,11,50220,50220,11,50276,50276,11,50332,50332,11,50388,50388,11,50444,50444,11,50500,50500,11,50556,50556,11,50612,50612,11,50668,50668,11,50724,50724,11,50780,50780,11,50836,50836,11,50892,50892,11,50948,50948,11,51004,51004,11,51060,51060,11,51116,51116,11,51172,51172,11,51228,51228,11,51284,51284,11,51340,51340,11,51396,51396,11,51452,51452,11,51508,51508,11,51564,51564,11,51620,51620,11,51676,51676,11,51732,51732,11,51788,51788,11,51844,51844,11,51900,51900,11,51956,51956,11,52012,52012,11,52068,52068,11,52124,52124,11,52180,52180,11,52236,52236,11,52292,52292,11,52348,52348,11,52404,52404,11,52460,52460,11,52516,52516,11,52572,52572,11,52628,52628,11,52684,52684,11,52740,52740,11,52796,52796,11,52852,52852,11,52908,52908,11,52964,52964,11,53020,53020,11,53076,53076,11,53132,53132,11,53188,53188,11,53244,53244,11,53300,53300,11,53356,53356,11,53412,53412,11,53468,53468,11,53524,53524,11,53580,53580,11,53636,53636,11,53692,53692,11,53748,53748,11,53804,53804,11,53860,53860,11,53916,53916,11,53972,53972,11,54028,54028,11,54084,54084,11,54140,54140,11,54196,54196,11,54252,54252,11,54308,54308,11,54364,54364,11,54420,54420,11,54476,54476,11,54532,54532,11,54588,54588,11,54644,54644,11,54700,54700,11,54756,54756,11,54812,54812,11,54868,54868,11,54924,54924,11,54980,54980,11,55036,55036,11,55092,55092,11,55148,55148,11,55216,55238,9,65056,65071,5,65529,65531,4,68097,68099,5,68159,68159,5,69446,69456,5,69688,69702,5,69808,69810,7,69815,69816,7,69821,69821,1,69888,69890,5,69932,69932,7,69957,69958,7,70016,70017,5,70067,70069,7,70079,70080,7,70089,70092,5,70095,70095,5,70191,70193,5,70196,70196,5,70198,70199,5,70367,70367,5,70371,70378,5,70402,70403,7,70462,70462,5,70464,70464,5,70471,70472,7,70487,70487,5,70502,70508,5,70709,70711,7,70720,70721,7,70725,70725,7,70750,70750,5,70833,70834,7,70841,70841,7,70843,70844,7,70846,70846,7,70849,70849,7,71087,71087,5,71090,71093,5,71100,71101,5,71103,71104,5,71216,71218,7,71227,71228,7,71230,71230,7,71339,71339,5,71341,71341,5,71344,71349,5,71351,71351,5,71456,71457,7,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123628,123631,5,125252,125258,5,126980,126980,14,127183,127183,14,127245,127247,14,127340,127343,14,127358,127359,14,127377,127386,14,127462,127487,6,127491,127503,14,127535,127535,14,127548,127551,14,127568,127569,14,127744,127777,14,127780,127891,14,127894,127895,14,127897,127899,14,127902,127984,14,127987,127989,14,127991,127994,14,128000,128253,14,128255,128317,14,128329,128334,14,128336,128359,14,128367,128368,14,128371,128377,14,128379,128390,14,128392,128393,14,128398,128399,14,128401,128404,14,128407,128419,14,128421,128421,14,128424,128424,14,128433,128434,14,128444,128444,14,128450,128452,14,128465,128467,14,128476,128478,14,128481,128481,14,128483,128483,14,128488,128488,14,128495,128495,14,128499,128499,14,128506,128591,14,128710,128714,14,128721,128722,14,128725,128725,14,128728,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129664,129666,14,129671,129679,14,129686,129704,14,129712,129718,14,129728,129730,14,129744,129750,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2259,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3134,3136,5,3142,3144,5,3157,3158,5,3201,3201,5,3260,3260,5,3263,3263,5,3266,3266,5,3270,3270,5,3274,3275,7,3285,3286,5,3328,3329,5,3387,3388,5,3391,3392,7,3398,3400,7,3405,3405,5,3415,3415,5,3457,3457,5,3530,3530,5,3536,3537,7,3542,3542,5,3551,3551,5,3633,3633,5,3636,3642,5,3761,3761,5,3764,3772,5,3864,3865,5,3895,3895,5,3902,3903,7,3967,3967,7,3974,3975,5,3993,4028,5,4141,4144,5,4146,4151,5,4155,4156,7,4182,4183,7,4190,4192,5,4226,4226,5,4229,4230,5,4253,4253,5,4448,4519,9,4957,4959,5,5938,5940,5,6002,6003,5,6070,6070,7,6078,6085,7,6087,6088,7,6109,6109,5,6158,6158,4,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6848,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7673,5,8203,8203,4,8205,8205,13,8232,8232,4,8234,8238,4,8265,8265,14,8293,8293,4,8400,8412,5,8417,8417,5,8421,8432,5,8505,8505,14,8617,8618,14,9000,9000,14,9167,9167,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9776,9783,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9935,14,9937,9937,14,9939,9940,14,9961,9962,14,9968,9973,14,9975,9978,14,9981,9981,14,9986,9986,14,9989,9989,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10084,14,10133,10135,14,10160,10160,14,10548,10549,14,11035,11036,14,11093,11093,14,11647,11647,5,12330,12333,5,12336,12336,14,12441,12442,5,12953,12953,14,42608,42610,5,42654,42655,5,43010,43010,5,43019,43019,5,43045,43046,5,43052,43052,5,43188,43203,7,43232,43249,5,43302,43309,5,43346,43347,7,43392,43394,5,43443,43443,5,43446,43449,5,43452,43453,5,43493,43493,5,43567,43568,7,43571,43572,7,43587,43587,5,43597,43597,7,43696,43696,5,43703,43704,5,43713,43713,5,43756,43757,5,43765,43765,7,44003,44004,7,44006,44007,7,44009,44010,7,44013,44013,5,44033,44059,12,44061,44087,12,44089,44115,12,44117,44143,12,44145,44171,12,44173,44199,12,44201,44227,12,44229,44255,12,44257,44283,12,44285,44311,12,44313,44339,12,44341,44367,12,44369,44395,12,44397,44423,12,44425,44451,12,44453,44479,12,44481,44507,12,44509,44535,12,44537,44563,12,44565,44591,12,44593,44619,12,44621,44647,12,44649,44675,12,44677,44703,12,44705,44731,12,44733,44759,12,44761,44787,12,44789,44815,12,44817,44843,12,44845,44871,12,44873,44899,12,44901,44927,12,44929,44955,12,44957,44983,12,44985,45011,12,45013,45039,12,45041,45067,12,45069,45095,12,45097,45123,12,45125,45151,12,45153,45179,12,45181,45207,12,45209,45235,12,45237,45263,12,45265,45291,12,45293,45319,12,45321,45347,12,45349,45375,12,45377,45403,12,45405,45431,12,45433,45459,12,45461,45487,12,45489,45515,12,45517,45543,12,45545,45571,12,45573,45599,12,45601,45627,12,45629,45655,12,45657,45683,12,45685,45711,12,45713,45739,12,45741,45767,12,45769,45795,12,45797,45823,12,45825,45851,12,45853,45879,12,45881,45907,12,45909,45935,12,45937,45963,12,45965,45991,12,45993,46019,12,46021,46047,12,46049,46075,12,46077,46103,12,46105,46131,12,46133,46159,12,46161,46187,12,46189,46215,12,46217,46243,12,46245,46271,12,46273,46299,12,46301,46327,12,46329,46355,12,46357,46383,12,46385,46411,12,46413,46439,12,46441,46467,12,46469,46495,12,46497,46523,12,46525,46551,12,46553,46579,12,46581,46607,12,46609,46635,12,46637,46663,12,46665,46691,12,46693,46719,12,46721,46747,12,46749,46775,12,46777,46803,12,46805,46831,12,46833,46859,12,46861,46887,12,46889,46915,12,46917,46943,12,46945,46971,12,46973,46999,12,47001,47027,12,47029,47055,12,47057,47083,12,47085,47111,12,47113,47139,12,47141,47167,12,47169,47195,12,47197,47223,12,47225,47251,12,47253,47279,12,47281,47307,12,47309,47335,12,47337,47363,12,47365,47391,12,47393,47419,12,47421,47447,12,47449,47475,12,47477,47503,12,47505,47531,12,47533,47559,12,47561,47587,12,47589,47615,12,47617,47643,12,47645,47671,12,47673,47699,12,47701,47727,12,47729,47755,12,47757,47783,12,47785,47811,12,47813,47839,12,47841,47867,12,47869,47895,12,47897,47923,12,47925,47951,12,47953,47979,12,47981,48007,12,48009,48035,12,48037,48063,12,48065,48091,12,48093,48119,12,48121,48147,12,48149,48175,12,48177,48203,12,48205,48231,12,48233,48259,12,48261,48287,12,48289,48315,12,48317,48343,12,48345,48371,12,48373,48399,12,48401,48427,12,48429,48455,12,48457,48483,12,48485,48511,12,48513,48539,12,48541,48567,12,48569,48595,12,48597,48623,12,48625,48651,12,48653,48679,12,48681,48707,12,48709,48735,12,48737,48763,12,48765,48791,12,48793,48819,12,48821,48847,12,48849,48875,12,48877,48903,12,48905,48931,12,48933,48959,12,48961,48987,12,48989,49015,12,49017,49043,12,49045,49071,12,49073,49099,12,49101,49127,12,49129,49155,12,49157,49183,12,49185,49211,12,49213,49239,12,49241,49267,12,49269,49295,12,49297,49323,12,49325,49351,12,49353,49379,12,49381,49407,12,49409,49435,12,49437,49463,12,49465,49491,12,49493,49519,12,49521,49547,12,49549,49575,12,49577,49603,12,49605,49631,12,49633,49659,12,49661,49687,12,49689,49715,12,49717,49743,12,49745,49771,12,49773,49799,12,49801,49827,12,49829,49855,12,49857,49883,12,49885,49911,12,49913,49939,12,49941,49967,12,49969,49995,12,49997,50023,12,50025,50051,12,50053,50079,12,50081,50107,12,50109,50135,12,50137,50163,12,50165,50191,12,50193,50219,12,50221,50247,12,50249,50275,12,50277,50303,12,50305,50331,12,50333,50359,12,50361,50387,12,50389,50415,12,50417,50443,12,50445,50471,12,50473,50499,12,50501,50527,12,50529,50555,12,50557,50583,12,50585,50611,12,50613,50639,12,50641,50667,12,50669,50695,12,50697,50723,12,50725,50751,12,50753,50779,12,50781,50807,12,50809,50835,12,50837,50863,12,50865,50891,12,50893,50919,12,50921,50947,12,50949,50975,12,50977,51003,12,51005,51031,12,51033,51059,12,51061,51087,12,51089,51115,12,51117,51143,12,51145,51171,12,51173,51199,12,51201,51227,12,51229,51255,12,51257,51283,12,51285,51311,12,51313,51339,12,51341,51367,12,51369,51395,12,51397,51423,12,51425,51451,12,51453,51479,12,51481,51507,12,51509,51535,12,51537,51563,12,51565,51591,12,51593,51619,12,51621,51647,12,51649,51675,12,51677,51703,12,51705,51731,12,51733,51759,12,51761,51787,12,51789,51815,12,51817,51843,12,51845,51871,12,51873,51899,12,51901,51927,12,51929,51955,12,51957,51983,12,51985,52011,12,52013,52039,12,52041,52067,12,52069,52095,12,52097,52123,12,52125,52151,12,52153,52179,12,52181,52207,12,52209,52235,12,52237,52263,12,52265,52291,12,52293,52319,12,52321,52347,12,52349,52375,12,52377,52403,12,52405,52431,12,52433,52459,12,52461,52487,12,52489,52515,12,52517,52543,12,52545,52571,12,52573,52599,12,52601,52627,12,52629,52655,12,52657,52683,12,52685,52711,12,52713,52739,12,52741,52767,12,52769,52795,12,52797,52823,12,52825,52851,12,52853,52879,12,52881,52907,12,52909,52935,12,52937,52963,12,52965,52991,12,52993,53019,12,53021,53047,12,53049,53075,12,53077,53103,12,53105,53131,12,53133,53159,12,53161,53187,12,53189,53215,12,53217,53243,12,53245,53271,12,53273,53299,12,53301,53327,12,53329,53355,12,53357,53383,12,53385,53411,12,53413,53439,12,53441,53467,12,53469,53495,12,53497,53523,12,53525,53551,12,53553,53579,12,53581,53607,12,53609,53635,12,53637,53663,12,53665,53691,12,53693,53719,12,53721,53747,12,53749,53775,12,53777,53803,12,53805,53831,12,53833,53859,12,53861,53887,12,53889,53915,12,53917,53943,12,53945,53971,12,53973,53999,12,54001,54027,12,54029,54055,12,54057,54083,12,54085,54111,12,54113,54139,12,54141,54167,12,54169,54195,12,54197,54223,12,54225,54251,12,54253,54279,12,54281,54307,12,54309,54335,12,54337,54363,12,54365,54391,12,54393,54419,12,54421,54447,12,54449,54475,12,54477,54503,12,54505,54531,12,54533,54559,12,54561,54587,12,54589,54615,12,54617,54643,12,54645,54671,12,54673,54699,12,54701,54727,12,54729,54755,12,54757,54783,12,54785,54811,12,54813,54839,12,54841,54867,12,54869,54895,12,54897,54923,12,54925,54951,12,54953,54979,12,54981,55007,12,55009,55035,12,55037,55063,12,55065,55091,12,55093,55119,12,55121,55147,12,55149,55175,12,55177,55203,12,55243,55291,10,65024,65039,5,65279,65279,4,65520,65528,4,66045,66045,5,66422,66426,5,68101,68102,5,68152,68154,5,68325,68326,5,69291,69292,5,69632,69632,7,69634,69634,7,69759,69761,5]",
        );
      }
    }),
    V(z[22], G([0, 1, 5]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.StringSHA1 = t.toHexString = t.stringHash = t.doHash = t.hash =
          void 0;
      function P(i) {
        return E(i, 0);
      }
      t.hash = P;
      function E(i, r) {
        switch (typeof i) {
          case "object":
            return i === null
              ? o(349, r)
              : Array.isArray(i)
              ? u(i, r)
              : d(i, r);
          case "string":
            return s(i, r);
          case "boolean":
            return h(i, r);
          case "number":
            return o(i, r);
          case "undefined":
            return o(937, r);
          default:
            return o(617, r);
        }
      }
      t.doHash = E;
      function o(i, r) {
        return (r << 5) - r + i | 0;
      }
      function h(i, r) {
        return o(i ? 433 : 863, r);
      }
      function s(i, r) {
        r = o(149417, r);
        for (let g = 0, f = i.length; g < f; g++) r = o(i.charCodeAt(g), r);
        return r;
      }
      t.stringHash = s;
      function u(i, r) {
        return r = o(104579, r), i.reduce((g, f) => E(f, g), r);
      }
      function d(i, r) {
        return r = o(181387, r),
          Object.keys(i).sort().reduce((g, f) => (g = s(f, g), E(i[f], g)), r);
      }
      function N(i, r, g = 32) {
        const f = g - r, l = ~((1 << f) - 1);
        return (i << r | (l & i) >>> f) >>> 0;
      }
      function a(i, r = 0, g = i.byteLength, f = 0) {
        for (let l = 0; l < g; l++) i[r + l] = f;
      }
      function b(i, r, g = "0") {
        for (; i.length < r;) i = g + i;
        return i;
      }
      function _(i, r = 32) {
        return i instanceof ArrayBuffer
          ? Array.from(new Uint8Array(i)).map((g) =>
            g.toString(16).padStart(2, "0")
          ).join("") : b((i >>> 0).toString(16), r / 4);
      }
      t.toHexString = _;
      class v {
        constructor() {
          this._h0 = 1732584193,
            this._h1 = 4023233417,
            this._h2 = 2562383102,
            this._h3 = 271733878,
            this._h4 = 3285377520,
            this._buff = new Uint8Array(64 + 3),
            this._buffDV = new DataView(this._buff.buffer),
            this._buffLen = 0,
            this._totalLen = 0,
            this._leftoverHighSurrogate = 0,
            this._finished = !1;
        }
        update(r) {
          const g = r.length;
          if (g !== 0) {
            const f = this._buff;
            let l = this._buffLen, n = this._leftoverHighSurrogate, m, S;
            for (
              n !== 0 ? (m = n, S = -1, n = 0) : (m = r.charCodeAt(0), S = 0);;
            ) {
              let w = m;
              if (p.isHighSurrogate(m)) {
                if (S + 1 < g) {
                  const c = r.charCodeAt(S + 1);
                  p.isLowSurrogate(c) ? (S++, w = p.computeCodePoint(m, c))
                  : w = 65533;
                } else {
                  n = m;
                  break;
                }
              } else p.isLowSurrogate(m) && (w = 65533);
              if (l = this._push(f, l, w), S++, S < g) m = r.charCodeAt(S);
              else break;
            }
            this._buffLen = l, this._leftoverHighSurrogate = n;
          }
        }
        _push(r, g, f) {
          return f < 128 ? r[g++] = f : f < 2048
            ? (r[g++] = 192 | (f & 1984) >>> 6, r[g++] = 128 | (f & 63) >>> 0)
            : f < 65536
            ? (r[g++] = 224 | (f & 61440) >>> 12,
              r[g++] = 128 | (f & 4032) >>> 6,
              r[g++] = 128 | (f & 63) >>> 0)
            : (r[g++] = 240 | (f & 1835008) >>> 18,
              r[g++] = 128 | (f & 258048) >>> 12,
              r[g++] = 128 | (f & 4032) >>> 6,
              r[g++] = 128 | (f & 63) >>> 0),
            g >= 64 &&
            (this._step(),
              g -= 64,
              this._totalLen += 64,
              r[0] = r[64 + 0],
              r[1] = r[64 + 1],
              r[2] = r[64 + 2]),
            g;
        }
        digest() {
          return this._finished ||
            (this._finished = !0,
              this._leftoverHighSurrogate &&
              (this._leftoverHighSurrogate = 0,
                this._buffLen = this._push(this._buff, this._buffLen, 65533)),
              this._totalLen += this._buffLen,
              this._wrapUp()),
            _(this._h0) + _(this._h1) + _(this._h2) + _(this._h3) + _(this._h4);
        }
        _wrapUp() {
          this._buff[this._buffLen++] = 128,
            a(this._buff, this._buffLen),
            this._buffLen > 56 && (this._step(), a(this._buff));
          const r = 8 * this._totalLen;
          this._buffDV.setUint32(56, Math.floor(r / 4294967296), !1),
            this._buffDV.setUint32(60, r % 4294967296, !1),
            this._step();
        }
        _step() {
          const r = v._bigBlock32, g = this._buffDV;
          for (let L = 0; L < 64; L += 4) {
            r.setUint32(L, g.getUint32(L, !1), !1);
          }
          for (let L = 64; L < 320; L += 4) {
            r.setUint32(
              L,
              N(
                r.getUint32(L - 12, !1) ^ r.getUint32(L - 32, !1) ^
                  r.getUint32(L - 56, !1) ^ r.getUint32(L - 64, !1),
                1,
              ),
              !1,
            );
          }
          let f = this._h0,
            l = this._h1,
            n = this._h2,
            m = this._h3,
            S = this._h4,
            w,
            c,
            C;
          for (
            let L = 0; L < 80; L++
          ) {
            L < 20
              ? (w = l & n | ~l & m, c = 1518500249)
              : L < 40
              ? (w = l ^ n ^ m, c = 1859775393)
              : L < 60
              ? (w = l & n | l & m | n & m, c = 2400959708)
              : (w = l ^ n ^ m, c = 3395469782),
              C = N(f, 5) + w + S + c + r.getUint32(L * 4, !1) & 4294967295,
              S = m,
              m = n,
              n = N(l, 30),
              l = f,
              f = C;
          }
          this._h0 = this._h0 + f & 4294967295,
            this._h1 = this._h1 + l & 4294967295,
            this._h2 = this._h2 + n & 4294967295,
            this._h3 = this._h3 + m & 4294967295,
            this._h4 = this._h4 + S & 4294967295;
        }
      }
      t.StringSHA1 = v, v._bigBlock32 = new DataView(new ArrayBuffer(320));
    }),
    V(z[10], G([0, 1, 15, 22]), function (I, t, p, P) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.LcsDiff = t.MyArray = t.Debug = t.stringDiff = t.StringDiffSequence =
          void 0;
      class E {
        constructor(a) {
          this.source = a;
        }
        getElements() {
          const a = this.source, b = new Int32Array(a.length);
          for (let _ = 0, v = a.length; _ < v; _++) b[_] = a.charCodeAt(_);
          return b;
        }
      }
      t.StringDiffSequence = E;
      function o(N, a, b) {
        return new d(new E(N), new E(a)).ComputeDiff(b).changes;
      }
      t.stringDiff = o;
      class h {
        static Assert(a, b) {
          if (!a) throw new Error(b);
        }
      }
      t.Debug = h;
      class s {
        static Copy(a, b, _, v, i) {
          for (let r = 0; r < i; r++) _[v + r] = a[b + r];
        }
        static Copy2(a, b, _, v, i) {
          for (let r = 0; r < i; r++) _[v + r] = a[b + r];
        }
      }
      t.MyArray = s;
      class u {
        constructor() {
          this.m_changes = [],
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824,
            this.m_originalCount = 0,
            this.m_modifiedCount = 0;
        }
        MarkNextChange() {
          (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
          this.m_changes.push(
            new p.DiffChange(
              this.m_originalStart,
              this.m_originalCount,
              this.m_modifiedStart,
              this.m_modifiedCount,
            ),
          ),
            this.m_originalCount = 0,
            this.m_modifiedCount = 0,
            this.m_originalStart = 1073741824,
            this.m_modifiedStart = 1073741824;
        }
        AddOriginalElement(a, b) {
          this.m_originalStart = Math.min(this.m_originalStart, a),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, b),
            this.m_originalCount++;
        }
        AddModifiedElement(a, b) {
          this.m_originalStart = Math.min(this.m_originalStart, a),
            this.m_modifiedStart = Math.min(this.m_modifiedStart, b),
            this.m_modifiedCount++;
        }
        getChanges() {
          return (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.MarkNextChange(),
            this.m_changes;
        }
        getReverseChanges() {
          return (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
            this.MarkNextChange(),
            this.m_changes.reverse(),
            this.m_changes;
        }
      }
      class d {
        constructor(a, b, _ = null) {
          this.ContinueProcessingPredicate = _;
          const [v, i, r] = d._getElements(a), [g, f, l] = d._getElements(b);
          this._hasStrings = r && l,
            this._originalStringElements = v,
            this._originalElementsOrHash = i,
            this._modifiedStringElements = g,
            this._modifiedElementsOrHash = f,
            this.m_forwardHistory = [],
            this.m_reverseHistory = [];
        }
        static _isStringArray(a) {
          return a.length > 0 && typeof a[0] == "string";
        }
        static _getElements(a) {
          const b = a.getElements();
          if (d._isStringArray(b)) {
            const _ = new Int32Array(b.length);
            for (let v = 0, i = b.length; v < i; v++) {
              _[v] = P.stringHash(b[v], 0);
            }
            return [b, _, !0];
          }
          return b instanceof Int32Array
            ? [[], b, !1]
            : [[], new Int32Array(b), !1];
        }
        ElementsAreEqual(a, b) {
          return this._originalElementsOrHash[a] !==
              this._modifiedElementsOrHash[b]
            ? !1
            : this._hasStrings
            ? this._originalStringElements[a] ===
              this._modifiedStringElements[b]
            : !0;
        }
        OriginalElementsAreEqual(a, b) {
          return this._originalElementsOrHash[a] !==
              this._originalElementsOrHash[b] ? !1 : this._hasStrings
            ? this._originalStringElements[a] ===
              this._originalStringElements[b]
            : !0;
        }
        ModifiedElementsAreEqual(a, b) {
          return this._modifiedElementsOrHash[a] !==
              this._modifiedElementsOrHash[b] ? !1 : this._hasStrings
            ? this._modifiedStringElements[a] ===
              this._modifiedStringElements[b]
            : !0;
        }
        ComputeDiff(a) {
          return this._ComputeDiff(
            0,
            this._originalElementsOrHash.length - 1,
            0,
            this._modifiedElementsOrHash.length - 1,
            a,
          );
        }
        _ComputeDiff(a, b, _, v, i) {
          const r = [!1];
          let g = this.ComputeDiffRecursive(a, b, _, v, r);
          return i && (g = this.PrettifyChanges(g)),
            { quitEarly: r[0], changes: g };
        }
        ComputeDiffRecursive(a, b, _, v, i) {
          for (i[0] = !1; a <= b && _ <= v && this.ElementsAreEqual(a, _);) {
            a++, _++;
          }
          for (; b >= a && v >= _ && this.ElementsAreEqual(b, v);) b--, v--;
          if (a > b || _ > v) {
            let m;
            return _ <= v
              ? (h.Assert(
                a === b + 1,
                "originalStart should only be one more than originalEnd",
              ),
                m = [new p.DiffChange(a, 0, _, v - _ + 1)])
              : a <= b
              ? (h.Assert(
                _ === v + 1,
                "modifiedStart should only be one more than modifiedEnd",
              ),
                m = [new p.DiffChange(a, b - a + 1, _, 0)])
              : (h.Assert(
                a === b + 1,
                "originalStart should only be one more than originalEnd",
              ),
                h.Assert(
                  _ === v + 1,
                  "modifiedStart should only be one more than modifiedEnd",
                ),
                m = []),
              m;
          }
          const r = [0],
            g = [0],
            f = this.ComputeRecursionPoint(a, b, _, v, r, g, i),
            l = r[0],
            n = g[0];
          if (f !== null) return f;
          if (!i[0]) {
            const m = this.ComputeDiffRecursive(a, l, _, n, i);
            let S = [];
            return i[0]
              ? S = [
                new p.DiffChange(
                  l + 1,
                  b - (l + 1) + 1,
                  n + 1,
                  v - (n + 1) + 1,
                ),
              ]
              : S = this.ComputeDiffRecursive(l + 1, b, n + 1, v, i),
              this.ConcatenateChanges(m, S);
          }
          return [new p.DiffChange(a, b - a + 1, _, v - _ + 1)];
        }
        WALKTRACE(a, b, _, v, i, r, g, f, l, n, m, S, w, c, C, L, A, M) {
          let R = null,
            D = null,
            T = new u(),
            $ = b,
            k = _,
            F = w[0] - L[0] - v,
            e = -1073741824,
            O = this.m_forwardHistory.length - 1;
          do {
            const H = F + a;
            H === $ || H < k && l[H - 1] < l[H + 1]
              ? (m = l[H + 1],
                c = m - F - v,
                m < e && T.MarkNextChange(),
                e = m,
                T.AddModifiedElement(m + 1, c),
                F = H + 1 - a)
              : (m = l[H - 1] + 1,
                c = m - F - v,
                m < e && T.MarkNextChange(),
                e = m - 1,
                T.AddOriginalElement(m, c + 1),
                F = H - 1 - a),
              O >= 0 &&
              (l = this.m_forwardHistory[O], a = l[0], $ = 1, k = l.length - 1);
          } while (--O >= -1);
          if (R = T.getReverseChanges(), M[0]) {
            let H = w[0] + 1, B = L[0] + 1;
            if (R !== null && R.length > 0) {
              const Q = R[R.length - 1];
              H = Math.max(H, Q.getOriginalEnd()),
                B = Math.max(B, Q.getModifiedEnd());
            }
            D = [new p.DiffChange(H, S - H + 1, B, C - B + 1)];
          } else {
            T = new u(),
              $ = r,
              k = g,
              F = w[0] - L[0] - f,
              e = 1073741824,
              O = A ? this.m_reverseHistory.length - 1
              : this.m_reverseHistory.length - 2;
            do {
              const H = F + i;
              H === $ || H < k && n[H - 1] >= n[H + 1]
                ? (m = n[H + 1] - 1,
                  c = m - F - f,
                  m > e && T.MarkNextChange(),
                  e = m + 1,
                  T.AddOriginalElement(m + 1, c + 1),
                  F = H + 1 - i)
                : (m = n[H - 1],
                  c = m - F - f,
                  m > e && T.MarkNextChange(),
                  e = m,
                  T.AddModifiedElement(m + 1, c + 1),
                  F = H - 1 - i),
                O >= 0 &&
                (n = this.m_reverseHistory[O],
                  i = n[0],
                  $ = 1,
                  k = n.length - 1);
            } while (--O >= -1);
            D = T.getChanges();
          }
          return this.ConcatenateChanges(R, D);
        }
        ComputeRecursionPoint(a, b, _, v, i, r, g) {
          let f = 0, l = 0, n = 0, m = 0, S = 0, w = 0;
          a--,
            _--,
            i[0] = 0,
            r[0] = 0,
            this.m_forwardHistory = [],
            this.m_reverseHistory = [];
          const c = b - a + (v - _),
            C = c + 1,
            L = new Int32Array(C),
            A = new Int32Array(C),
            M = v - _,
            R = b - a,
            D = a - _,
            T = b - v,
            k = (R - M) % 2 == 0;
          L[M] = a, A[R] = b, g[0] = !1;
          for (let F = 1; F <= c / 2 + 1; F++) {
            let e = 0, O = 0;
            n = this.ClipDiagonalBound(M - F, F, M, C),
              m = this.ClipDiagonalBound(M + F, F, M, C);
            for (let B = n; B <= m; B += 2) {
              B === n || B < m && L[B - 1] < L[B + 1]
                ? f = L[B + 1]
                : f = L[B - 1] + 1, l = f - (B - M) - D;
              const Q = f;
              for (; f < b && l < v && this.ElementsAreEqual(f + 1, l + 1);) {
                f++, l++;
              }
              if (
                L[B] = f,
                  f + l > e + O && (e = f, O = l),
                  !k && Math.abs(B - R) <= F - 1 && f >= A[B]
              ) {
                return i[0] = f,
                  r[0] = l,
                  Q <= A[B] && 1447 > 0 && F <= 1447 + 1
                    ? this.WALKTRACE(
                      M,
                      n,
                      m,
                      D,
                      R,
                      S,
                      w,
                      T,
                      L,
                      A,
                      f,
                      b,
                      i,
                      l,
                      v,
                      r,
                      k,
                      g,
                    )
                    : null;
              }
            }
            const H = (e - a + (O - _) - F) / 2;
            if (
              this.ContinueProcessingPredicate !== null &&
              !this.ContinueProcessingPredicate(e, H)
            ) {
              return g[0] = !0,
                i[0] = e,
                r[0] = O,
                H > 0 && 1447 > 0 && F <= 1447 + 1
                  ? this.WALKTRACE(
                    M,
                    n,
                    m,
                    D,
                    R,
                    S,
                    w,
                    T,
                    L,
                    A,
                    f,
                    b,
                    i,
                    l,
                    v,
                    r,
                    k,
                    g,
                  )
                  : (a++, _++, [new p.DiffChange(a, b - a + 1, _, v - _ + 1)]);
            }
            S = this.ClipDiagonalBound(R - F, F, R, C),
              w = this.ClipDiagonalBound(R + F, F, R, C);
            for (let B = S; B <= w; B += 2) {
              B === S || B < w && A[B - 1] >= A[B + 1]
                ? f = A[B + 1] - 1
                : f = A[B - 1], l = f - (B - R) - T;
              const Q = f;
              for (; f > a && l > _ && this.ElementsAreEqual(f, l);) f--, l--;
              if (A[B] = f, k && Math.abs(B - M) <= F && f <= L[B]) {
                return i[0] = f,
                  r[0] = l,
                  Q >= L[B] && 1447 > 0 && F <= 1447 + 1
                    ? this.WALKTRACE(
                      M,
                      n,
                      m,
                      D,
                      R,
                      S,
                      w,
                      T,
                      L,
                      A,
                      f,
                      b,
                      i,
                      l,
                      v,
                      r,
                      k,
                      g,
                    )
                    : null;
              }
            }
            if (F <= 1447) {
              let B = new Int32Array(m - n + 2);
              B[0] = M - n + 1,
                s.Copy2(L, n, B, 1, m - n + 1),
                this.m_forwardHistory.push(B),
                B = new Int32Array(w - S + 2),
                B[0] = R - S + 1,
                s.Copy2(A, S, B, 1, w - S + 1),
                this.m_reverseHistory.push(B);
            }
          }
          return this.WALKTRACE(
            M,
            n,
            m,
            D,
            R,
            S,
            w,
            T,
            L,
            A,
            f,
            b,
            i,
            l,
            v,
            r,
            k,
            g,
          );
        }
        PrettifyChanges(a) {
          for (let b = 0; b < a.length; b++) {
            const _ = a[b],
              v = b < a.length - 1
                ? a[b + 1].originalStart
                : this._originalElementsOrHash.length,
              i = b < a.length - 1
                ? a[b + 1].modifiedStart
                : this._modifiedElementsOrHash.length,
              r = _.originalLength > 0,
              g = _.modifiedLength > 0;
            for (
              ;
              _.originalStart + _.originalLength < v &&
              _.modifiedStart + _.modifiedLength < i &&
              (!r ||
                this.OriginalElementsAreEqual(
                  _.originalStart,
                  _.originalStart + _.originalLength,
                )) &&
              (!g ||
                this.ModifiedElementsAreEqual(
                  _.modifiedStart,
                  _.modifiedStart + _.modifiedLength,
                ));
            ) {
              _.originalStart++, _.modifiedStart++;
            }
            let f = [null];
            if (b < a.length - 1 && this.ChangesOverlap(a[b], a[b + 1], f)) {
              a[b] = f[0], a.splice(b + 1, 1), b--;
              continue;
            }
          }
          for (let b = a.length - 1; b >= 0; b--) {
            const _ = a[b];
            let v = 0, i = 0;
            if (b > 0) {
              const n = a[b - 1];
              n.originalLength > 0 && (v = n.originalStart + n.originalLength),
                n.modifiedLength > 0 &&
                (i = n.modifiedStart + n.modifiedLength);
            }
            const r = _.originalLength > 0, g = _.modifiedLength > 0;
            let f = 0,
              l = this._boundaryScore(
                _.originalStart,
                _.originalLength,
                _.modifiedStart,
                _.modifiedLength,
              );
            for (let n = 1;; n++) {
              const m = _.originalStart - n, S = _.modifiedStart - n;
              if (
                m < v || S < i ||
                r && !this.OriginalElementsAreEqual(m, m + _.originalLength) ||
                g && !this.ModifiedElementsAreEqual(S, S + _.modifiedLength)
              ) {
                break;
              }
              const w = this._boundaryScore(
                m,
                _.originalLength,
                S,
                _.modifiedLength,
              );
              w > l && (l = w, f = n);
            }
            _.originalStart -= f, _.modifiedStart -= f;
          }
          if (this._hasStrings) {
            for (let b = 1, _ = a.length; b < _; b++) {
              const v = a[b - 1],
                i = a[b],
                r = i.originalStart - v.originalStart - v.originalLength,
                g = v.originalStart,
                f = i.originalStart + i.originalLength,
                l = f - g,
                n = v.modifiedStart,
                m = i.modifiedStart + i.modifiedLength,
                S = m - n;
              if (r < 5 && l < 20 && S < 20) {
                const w = this._findBetterContiguousSequence(g, l, n, S, r);
                if (w) {
                  const [c, C] = w;
                  (c !== v.originalStart + v.originalLength ||
                    C !== v.modifiedStart + v.modifiedLength) &&
                    (v.originalLength = c - v.originalStart,
                      v.modifiedLength = C - v.modifiedStart,
                      i.originalStart = c + r,
                      i.modifiedStart = C + r,
                      i.originalLength = f - i.originalStart,
                      i.modifiedLength = m - i.modifiedStart);
                }
              }
            }
          }
          return a;
        }
        _findBetterContiguousSequence(a, b, _, v, i) {
          if (b < i || v < i) return null;
          const r = a + b - i + 1, g = _ + v - i + 1;
          let f = 0, l = 0, n = 0;
          for (let m = a; m < r; m++) {
            for (let S = _; S < g; S++) {
              const w = this._contiguousSequenceScore(m, S, i);
              w > 0 && w > f && (f = w, l = m, n = S);
            }
          }
          return f > 0 ? [l, n] : null;
        }
        _contiguousSequenceScore(a, b, _) {
          let v = 0;
          for (let i = 0; i < _; i++) {
            if (!this.ElementsAreEqual(a + i, b + i)) return 0;
            v += this._originalStringElements[a + i].length;
          }
          return v;
        }
        _OriginalIsBoundary(a) {
          return a <= 0 || a >= this._originalElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._originalStringElements[a]);
        }
        _OriginalRegionIsBoundary(a, b) {
          if (this._OriginalIsBoundary(a) || this._OriginalIsBoundary(a - 1)) {
            return !0;
          }
          if (b > 0) {
            const _ = a + b;
            if (
              this._OriginalIsBoundary(_ - 1) || this._OriginalIsBoundary(_)
            ) {
              return !0;
            }
          }
          return !1;
        }
        _ModifiedIsBoundary(a) {
          return a <= 0 || a >= this._modifiedElementsOrHash.length - 1
            ? !0
            : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[a]);
        }
        _ModifiedRegionIsBoundary(a, b) {
          if (
            this._ModifiedIsBoundary(a) || this._ModifiedIsBoundary(a - 1)
          ) {
            return !0;
          }
          if (b > 0) {
            const _ = a + b;
            if (
              this._ModifiedIsBoundary(_ - 1) || this._ModifiedIsBoundary(_)
            ) {
              return !0;
            }
          }
          return !1;
        }
        _boundaryScore(a, b, _, v) {
          const i = this._OriginalRegionIsBoundary(a, b) ? 1 : 0,
            r = this._ModifiedRegionIsBoundary(_, v) ? 1 : 0;
          return i + r;
        }
        ConcatenateChanges(a, b) {
          let _ = [];
          if (a.length === 0 || b.length === 0) return b.length > 0 ? b : a;
          if (this.ChangesOverlap(a[a.length - 1], b[0], _)) {
            const v = new Array(a.length + b.length - 1);
            return s.Copy(a, 0, v, 0, a.length - 1),
              v[a.length - 1] = _[0],
              s.Copy(b, 1, v, a.length, b.length - 1),
              v;
          } else {
            const v = new Array(a.length + b.length);
            return s.Copy(a, 0, v, 0, a.length),
              s.Copy(b, 0, v, a.length, b.length),
              v;
          }
        }
        ChangesOverlap(a, b, _) {
          if (
            h.Assert(
              a.originalStart <= b.originalStart,
              "Left change is not less than or equal to right change",
            ),
              h.Assert(
                a.modifiedStart <= b.modifiedStart,
                "Left change is not less than or equal to right change",
              ),
              a.originalStart + a.originalLength >= b.originalStart ||
              a.modifiedStart + a.modifiedLength >= b.modifiedStart
          ) {
            const v = a.originalStart;
            let i = a.originalLength;
            const r = a.modifiedStart;
            let g = a.modifiedLength;
            return a.originalStart + a.originalLength >= b.originalStart &&
              (i = b.originalStart + b.originalLength - a.originalStart),
              a.modifiedStart + a.modifiedLength >= b.modifiedStart &&
              (g = b.modifiedStart + b.modifiedLength - a.modifiedStart),
              _[0] = new p.DiffChange(v, i, r, g),
              !0;
          } else return _[0] = null, !1;
        }
        ClipDiagonalBound(a, b, _, v) {
          if (a >= 0 && a < v) return a;
          const i = _, r = v - _ - 1, g = b % 2 == 0;
          if (a < 0) {
            const f = i % 2 == 0;
            return g === f ? 0 : 1;
          } else {
            const f = r % 2 == 0;
            return g === f ? v - 1 : v - 2;
          }
        }
      }
      t.LcsDiff = d;
    }),
    V(z[11], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.withNullAsUndefined = t.createProxyObject = t.getAllMethodNames = t
          .getAllPropertyNames = t.validateConstraint = t.validateConstraints =
            t.isFunction = t.assertIsDefined = t.assertType = t
              .isUndefinedOrNull = t.isUndefined = t.isBoolean = t.isNumber = t
                .isObject = t.isString = t.isArray = void 0;
      function p(f) {
        return Array.isArray(f);
      }
      t.isArray = p;
      function P(f) {
        return typeof f == "string";
      }
      t.isString = P;
      function E(f) {
        return typeof f == "object" && f !== null && !Array.isArray(f) &&
          !(f instanceof RegExp) && !(f instanceof Date);
      }
      t.isObject = E;
      function o(f) {
        return typeof f == "number" && !isNaN(f);
      }
      t.isNumber = o;
      function h(f) {
        return f === !0 || f === !1;
      }
      t.isBoolean = h;
      function s(f) {
        return typeof f == "undefined";
      }
      t.isUndefined = s;
      function u(f) {
        return s(f) || f === null;
      }
      t.isUndefinedOrNull = u;
      function d(f, l) {
        if (!f) {
          throw new Error(
            l ? `Unexpected type, expected '${l}'` : "Unexpected type",
          );
        }
      }
      t.assertType = d;
      function N(f) {
        if (u(f)) {
          throw new Error("Assertion Failed: argument is undefined or null");
        }
        return f;
      }
      t.assertIsDefined = N;
      function a(f) {
        return typeof f == "function";
      }
      t.isFunction = a;
      function b(f, l) {
        const n = Math.min(f.length, l.length);
        for (let m = 0; m < n; m++) _(f[m], l[m]);
      }
      t.validateConstraints = b;
      function _(f, l) {
        if (P(l)) {
          if (typeof f !== l) {
            throw new Error(`argument does not match constraint: typeof ${l}`);
          }
        } else if (a(l)) {
          try {
            if (f instanceof l) return;
          } catch (n) {}
          if (
            !u(f) && f.constructor === l ||
            l.length === 1 && l.call(void 0, f) === !0
          ) {
            return;
          }
          throw new Error(
            "argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true",
          );
        }
      }
      t.validateConstraint = _;
      function v(f) {
        let l = [], n = Object.getPrototypeOf(f);
        for (
          ; Object.prototype !== n;
        ) {
          l = l.concat(Object.getOwnPropertyNames(n)),
            n = Object.getPrototypeOf(n);
        }
        return l;
      }
      t.getAllPropertyNames = v;
      function i(f) {
        const l = [];
        for (const n of v(f)) typeof f[n] == "function" && l.push(n);
        return l;
      }
      t.getAllMethodNames = i;
      function r(f, l) {
        const n = (S) =>
          function () {
            const w = Array.prototype.slice.call(arguments, 0);
            return l(S, w);
          };
        let m = {};
        for (const S of f) m[S] = n(S);
        return m;
      }
      t.createProxyObject = r;
      function g(f) {
        return f === null ? void 0 : f;
      }
      t.withNullAsUndefined = g;
    }),
    V(z[12], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.toUint32 = t.toUint8 = void 0;
      function p(E) {
        return E < 0 ? 0 : E > 255 ? 255 : E | 0;
      }
      t.toUint8 = p;
      function P(E) {
        return E < 0 ? 0 : E > 4294967295 ? 4294967295 : E | 0;
      }
      t.toUint32 = P;
    }),
    V(z[13], G([0, 1, 2, 20]), function (I, t, p, P) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.uriToFsPath = t.URI = void 0;
      const E = /^\w[\w\d+.-]*$/, o = /^\//, h = /^\/\//;
      function s(c, C) {
        if (!c.scheme && C) {
          throw new Error(
            `[UriError]: Scheme is missing: {scheme: "", authority: "${c.authority}", path: "${c.path}", query: "${c.query}", fragment: "${c.fragment}"}`,
          );
        }
        if (c.scheme && !E.test(c.scheme)) {
          throw new Error("[UriError]: Scheme contains illegal characters.");
        }
        if (c.path) {
          if (c.authority) {
            if (!o.test(c.path)) {
              throw new Error(
                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
              );
            }
          } else if (h.test(c.path)) {
            throw new Error(
              '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
            );
          }
        }
      }
      function u(c, C) {
        return !c && !C ? "file" : c;
      }
      function d(c, C) {
        switch (c) {
          case "https":
          case "http":
          case "file":
            C ? C[0] !== a && (C = a + C) : C = a;
            break;
        }
        return C;
      }
      const N = "",
        a = "/",
        b = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class _ {
        constructor(C, L, A, M, R, D = !1) {
          typeof C == "object"
            ? (this.scheme = C.scheme || N,
              this.authority = C.authority || N,
              this.path = C.path || N,
              this.query = C.query || N,
              this.fragment = C.fragment || N)
            : (this.scheme = u(C, D),
              this.authority = L || N,
              this.path = d(this.scheme, A || N),
              this.query = M || N,
              this.fragment = R || N,
              s(this, D));
        }
        static isUri(C) {
          return C instanceof _
            ? !0
            : C
            ? typeof C.authority == "string" && typeof C.fragment == "string" &&
              typeof C.path == "string" && typeof C.query == "string" &&
              typeof C.scheme == "string" && typeof C.fsPath == "function" &&
              typeof C.with == "function" && typeof C.toString == "function"
            : !1;
        }
        get fsPath() {
          return l(this, !1);
        }
        with(C) {
          if (!C) return this;
          let { scheme: L, authority: A, path: M, query: R, fragment: D } = C;
          return L === void 0 ? L = this.scheme : L === null && (L = N),
            A === void 0 ? A = this.authority : A === null && (A = N),
            M === void 0 ? M = this.path : M === null && (M = N),
            R === void 0 ? R = this.query : R === null && (R = N),
            D === void 0 ? D = this.fragment : D === null && (D = N),
            L === this.scheme && A === this.authority && M === this.path &&
              R === this.query && D === this.fragment
              ? this
              : new i(L, A, M, R, D);
        }
        static parse(C, L = !1) {
          const A = b.exec(C);
          return A
            ? new i(
              A[2] || N,
              w(A[4] || N),
              w(A[5] || N),
              w(A[7] || N),
              w(A[9] || N),
              L,
            )
            : new i(N, N, N, N, N);
        }
        static file(C) {
          let L = N;
          if (
            p.isWindows && (C = C.replace(/\\/g, a)), C[0] === a && C[1] === a
          ) {
            const A = C.indexOf(a, 2);
            A === -1 ? (L = C.substring(2), C = a)
            : (L = C.substring(2, A), C = C.substring(A) || a);
          }
          return new i("file", L, C, N, N);
        }
        static from(C) {
          return new i(C.scheme, C.authority, C.path, C.query, C.fragment);
        }
        static joinPath(C, ...L) {
          if (!C.path) {
            throw new Error(
              "[UriError]: cannot call joinPath on URI without path",
            );
          }
          let A;
          return p.isWindows && C.scheme === "file"
            ? A = _.file(P.win32.join(l(C, !0), ...L)).path
            : A = P.posix.join(C.path, ...L),
            C.with({ path: A });
        }
        toString(C = !1) {
          return n(this, C);
        }
        toJSON() {
          return this;
        }
        static revive(C) {
          if (C) {
            if (C instanceof _) return C;
            {
              const L = new i(C);
              return L._formatted = C.external,
                L._fsPath = C._sep === v ? C.fsPath : null,
                L;
            }
          } else return C;
        }
      }
      t.URI = _;
      const v = p.isWindows ? 1 : void 0;
      class i extends _ {
        constructor() {
          super(...arguments);
          this._formatted = null, this._fsPath = null;
        }
        get fsPath() {
          return this._fsPath || (this._fsPath = l(this, !1)), this._fsPath;
        }
        toString(C = !1) {
          return C ? n(this, !0)
          : (this._formatted || (this._formatted = n(this, !1)),
            this._formatted);
        }
        toJSON() {
          const C = { $mid: 1 };
          return this._fsPath && (C.fsPath = this._fsPath, C._sep = v),
            this._formatted && (C.external = this._formatted),
            this.path && (C.path = this.path),
            this.scheme && (C.scheme = this.scheme),
            this.authority && (C.authority = this.authority),
            this.query && (C.query = this.query),
            this.fragment && (C.fragment = this.fragment),
            C;
        }
      }
      const r = {
        [58]: "%3A",
        [47]: "%2F",
        [63]: "%3F",
        [35]: "%23",
        [91]: "%5B",
        [93]: "%5D",
        [64]: "%40",
        [33]: "%21",
        [36]: "%24",
        [38]: "%26",
        [39]: "%27",
        [40]: "%28",
        [41]: "%29",
        [42]: "%2A",
        [43]: "%2B",
        [44]: "%2C",
        [59]: "%3B",
        [61]: "%3D",
        [32]: "%20",
      };
      function g(c, C) {
        let L, A = -1;
        for (let M = 0; M < c.length; M++) {
          const R = c.charCodeAt(M);
          if (
            R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 ||
            R === 45 || R === 46 || R === 95 || R === 126 || C && R === 47
          ) {
            A !== -1 && (L += encodeURIComponent(c.substring(A, M)), A = -1),
              L !== void 0 && (L += c.charAt(M));
          } else {
            L === void 0 && (L = c.substr(0, M));
            const D = r[R];
            D !== void 0
              ? (A !== -1 &&
                (L += encodeURIComponent(c.substring(A, M)), A = -1),
                L += D)
              : A === -1 && (A = M);
          }
        }
        return A !== -1 && (L += encodeURIComponent(c.substring(A))),
          L !== void 0 ? L : c;
      }
      function f(c) {
        let C;
        for (let L = 0; L < c.length; L++) {
          const A = c.charCodeAt(L);
          A === 35 || A === 63
            ? (C === void 0 && (C = c.substr(0, L)), C += r[A])
            : C !== void 0 && (C += c[L]);
        }
        return C !== void 0 ? C : c;
      }
      function l(c, C) {
        let L;
        return c.authority && c.path.length > 1 && c.scheme === "file"
          ? L = `//${c.authority}${c.path}`
          : c.path.charCodeAt(0) === 47 &&
              (c.path.charCodeAt(1) >= 65 && c.path.charCodeAt(1) <= 90 ||
                c.path.charCodeAt(1) >= 97 && c.path.charCodeAt(1) <= 122) &&
              c.path.charCodeAt(2) === 58
          ? C
            ? L = c.path.substr(1)
            : L = c.path[1].toLowerCase() + c.path.substr(2)
          : L = c.path,
          p.isWindows && (L = L.replace(/\//g, "\\")),
          L;
      }
      t.uriToFsPath = l;
      function n(c, C) {
        const L = C ? f : g;
        let A = "",
          { scheme: M, authority: R, path: D, query: T, fragment: $ } = c;
        if (
          M && (A += M, A += ":"), (R || M === "file") && (A += a, A += a), R
        ) {
          let k = R.indexOf("@");
          if (k !== -1) {
            const F = R.substr(0, k);
            R = R.substr(k + 1),
              k = F.indexOf(":"),
              k === -1 ? A += L(F, !1)
              : (A += L(F.substr(0, k), !1),
                A += ":",
                A += L(F.substr(k + 1), !1)),
              A += "@";
          }
          R = R.toLowerCase(),
            k = R.indexOf(":"),
            k === -1 ? A += L(R, !1)
            : (A += L(R.substr(0, k), !1), A += R.substr(k));
        }
        if (D) {
          if (
            D.length >= 3 && D.charCodeAt(0) === 47 && D.charCodeAt(2) === 58
          ) {
            const k = D.charCodeAt(1);
            k >= 65 && k <= 90 &&
              (D = `/${String.fromCharCode(k + 32)}:${D.substr(3)}`);
          } else if (D.length >= 2 && D.charCodeAt(1) === 58) {
            const k = D.charCodeAt(0);
            k >= 65 && k <= 90 &&
              (D = `${String.fromCharCode(k + 32)}:${D.substr(2)}`);
          }
          A += L(D, !0);
        }
        return T && (A += "?", A += L(T, !1)),
          $ && (A += "#", A += C ? $ : g($, !1)),
          A;
      }
      function m(c) {
        try {
          return decodeURIComponent(c);
        } catch (C) {
          return c.length > 3 ? c.substr(0, 3) + m(c.substr(3)) : c;
        }
      }
      const S = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function w(c) {
        return c.match(S) ? c.replace(S, (C) => m(C)) : c;
      }
    }),
    V(z[34], G([0, 1, 4, 7, 2, 11]), function (I, t, p, P, E, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.create = t.SimpleWorkerServer = t.SimpleWorkerClient = t
          .logOnceWebWorkerWarning = void 0;
      const h = "$initialize";
      let s = !1;
      function u(_) {
        !E.isWeb ||
          (s ||
            (s = !0,
              console.warn(
                "Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq",
              )),
            console.warn(_.message));
      }
      t.logOnceWebWorkerWarning = u;
      class d {
        constructor(v) {
          this._workerId = -1,
            this._handler = v,
            this._lastSentReq = 0,
            this._pendingReplies = Object.create(null);
        }
        setWorkerId(v) {
          this._workerId = v;
        }
        sendMessage(v, i) {
          let r = String(++this._lastSentReq);
          return new Promise((g, f) => {
            this._pendingReplies[r] = { resolve: g, reject: f },
              this._send({
                vsWorker: this._workerId,
                req: r,
                method: v,
                args: i,
              });
          });
        }
        handleMessage(v) {
          !v || !v.vsWorker ||
            this._workerId !== -1 && v.vsWorker !== this._workerId ||
            this._handleMessage(v);
        }
        _handleMessage(v) {
          if (v.seq) {
            let f = v;
            if (!this._pendingReplies[f.seq]) {
              console.warn("Got reply to unknown seq");
              return;
            }
            let l = this._pendingReplies[f.seq];
            if (delete this._pendingReplies[f.seq], f.err) {
              let n = f.err;
              f.err.$isError &&
              (n = new Error(),
                n.name = f.err.name,
                n.message = f.err.message,
                n.stack = f.err.stack), l.reject(n);
              return;
            }
            l.resolve(f.res);
            return;
          }
          let i = v, r = i.req;
          this._handler.handleMessage(i.method, i.args).then((f) => {
            this._send({
              vsWorker: this._workerId,
              seq: r,
              res: f,
              err: void 0,
            });
          }, (f) => {
            f.detail instanceof Error &&
            (f.detail = p.transformErrorForSerialization(f.detail)),
              this._send({
                vsWorker: this._workerId,
                seq: r,
                res: void 0,
                err: p.transformErrorForSerialization(f),
              });
          });
        }
        _send(v) {
          let i = [];
          if (v.req) {
            const r = v;
            for (
              let g = 0; g < r.args.length; g++
            ) {
              r.args[g] instanceof ArrayBuffer && i.push(r.args[g]);
            }
          } else {
            const r = v;
            r.res instanceof ArrayBuffer && i.push(r.res);
          }
          this._handler.sendMessage(v, i);
        }
      }
      class N extends P.Disposable {
        constructor(v, i, r) {
          super();
          let g = null;
          this._worker = this._register(
            v.create("vs/base/common/worker/simpleWorker", (m) => {
              this._protocol.handleMessage(m);
            }, (m) => {
              g && g(m);
            }),
          ),
            this._protocol = new d({
              sendMessage: (m, S) => {
                this._worker.postMessage(m, S);
              },
              handleMessage: (m, S) => {
                if (typeof r[m] != "function") {
                  return Promise.reject(
                    new Error("Missing method " + m + " on main thread host."),
                  );
                }
                try {
                  return Promise.resolve(r[m].apply(r, S));
                } catch (w) {
                  return Promise.reject(w);
                }
              },
            }),
            this._protocol.setWorkerId(this._worker.getId());
          let f = null;
          typeof self.require != "undefined" &&
            typeof self.require.getConfig == "function"
            ? f = self.require.getConfig()
            : typeof self.requirejs != "undefined" &&
              (f = self.requirejs.s.contexts._.config);
          const l = o.getAllMethodNames(r);
          this._onModuleLoaded = this._protocol.sendMessage(h, [
            this._worker.getId(),
            JSON.parse(JSON.stringify(f)),
            i,
            l,
          ]);
          const n = (m, S) => this._request(m, S);
          this._lazyProxy = new Promise((m, S) => {
            g = S,
              this._onModuleLoaded.then((w) => {
                m(o.createProxyObject(w, n));
              }, (w) => {
                S(w), this._onError("Worker failed to load " + i, w);
              });
          });
        }
        getProxyObject() {
          return this._lazyProxy;
        }
        _request(v, i) {
          return new Promise((r, g) => {
            this._onModuleLoaded.then(() => {
              this._protocol.sendMessage(v, i).then(r, g);
            }, g);
          });
        }
        _onError(v, i) {
          console.error(v), console.info(i);
        }
      }
      t.SimpleWorkerClient = N;
      class a {
        constructor(v, i) {
          this._requestHandlerFactory = i,
            this._requestHandler = null,
            this._protocol = new d({
              sendMessage: (r, g) => {
                v(r, g);
              },
              handleMessage: (r, g) => this._handleMessage(r, g),
            });
        }
        onmessage(v) {
          this._protocol.handleMessage(v);
        }
        _handleMessage(v, i) {
          if (v === h) return this.initialize(i[0], i[1], i[2], i[3]);
          if (
            !this._requestHandler ||
            typeof this._requestHandler[v] != "function"
          ) {
            return Promise.reject(
              new Error("Missing requestHandler or method: " + v),
            );
          }
          try {
            return Promise.resolve(
              this._requestHandler[v].apply(this._requestHandler, i),
            );
          } catch (r) {
            return Promise.reject(r);
          }
        }
        initialize(v, i, r, g) {
          this._protocol.setWorkerId(v);
          const f = (n, m) => this._protocol.sendMessage(n, m),
            l = o.createProxyObject(g, f);
          return this._requestHandlerFactory
            ? (this._requestHandler = this._requestHandlerFactory(l),
              Promise.resolve(o.getAllMethodNames(this._requestHandler)))
            : (i &&
              (typeof i.baseUrl != "undefined" && delete i.baseUrl,
                typeof i.paths != "undefined" &&
                typeof i.paths.vs != "undefined" && delete i.paths.vs,
                typeof i.trustedTypesPolicy !== void 0 &&
                delete i.trustedTypesPolicy,
                i.catchError = !0,
                self.require.config(i)),
              new Promise((n, m) => {
                self.require([r], (S) => {
                  if (
                    this._requestHandler = S.create(l), !this._requestHandler
                  ) {
                    m(new Error("No RequestHandler!"));
                    return;
                  }
                  n(o.getAllMethodNames(this._requestHandler));
                }, m);
              }));
        }
      }
      t.SimpleWorkerServer = a;
      function b(_) {
        return new a(_, null);
      }
      t.create = b;
    }),
    V(z[23], G([0, 1, 12]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.CharacterSet = t.CharacterClassifier = void 0;
      class P {
        constructor(h) {
          let s = p.toUint8(h);
          this._defaultValue = s,
            this._asciiMap = P._createAsciiMap(s),
            this._map = new Map();
        }
        static _createAsciiMap(h) {
          let s = new Uint8Array(256);
          for (let u = 0; u < 256; u++) s[u] = h;
          return s;
        }
        set(h, s) {
          let u = p.toUint8(s);
          h >= 0 && h < 256 ? this._asciiMap[h] = u : this._map.set(h, u);
        }
        get(h) {
          return h >= 0 && h < 256
            ? this._asciiMap[h]
            : this._map.get(h) || this._defaultValue;
        }
      }
      t.CharacterClassifier = P;
      class E {
        constructor() {
          this._actual = new P(0);
        }
        add(h) {
          this._actual.set(h, 1);
        }
        has(h) {
          return this._actual.get(h) === 1;
        }
      }
      t.CharacterSet = E;
    }),
    V(z[3], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.Position = void 0;
      class p {
        constructor(E, o) {
          this.lineNumber = E, this.column = o;
        }
        with(E = this.lineNumber, o = this.column) {
          return E === this.lineNumber && o === this.column
            ? this
            : new p(E, o);
        }
        delta(E = 0, o = 0) {
          return this.with(this.lineNumber + E, this.column + o);
        }
        equals(E) {
          return p.equals(this, E);
        }
        static equals(E, o) {
          return !E && !o ? !0
          : !!E && !!o && E.lineNumber === o.lineNumber &&
            E.column === o.column;
        }
        isBefore(E) {
          return p.isBefore(this, E);
        }
        static isBefore(E, o) {
          return E.lineNumber < o.lineNumber ? !0
          : o.lineNumber < E.lineNumber ? !1 : E.column < o.column;
        }
        isBeforeOrEqual(E) {
          return p.isBeforeOrEqual(this, E);
        }
        static isBeforeOrEqual(E, o) {
          return E.lineNumber < o.lineNumber ? !0
          : o.lineNumber < E.lineNumber ? !1 : E.column <= o.column;
        }
        static compare(E, o) {
          let h = E.lineNumber | 0, s = o.lineNumber | 0;
          if (h === s) {
            let u = E.column | 0, d = o.column | 0;
            return u - d;
          }
          return h - s;
        }
        clone() {
          return new p(this.lineNumber, this.column);
        }
        toString() {
          return "(" + this.lineNumber + "," + this.column + ")";
        }
        static lift(E) {
          return new p(E.lineNumber, E.column);
        }
        static isIPosition(E) {
          return E && typeof E.lineNumber == "number" &&
            typeof E.column == "number";
        }
      }
      t.Position = p;
    }),
    V(z[6], G([0, 1, 3]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), t.Range = void 0;
      class P {
        constructor(o, h, s, u) {
          o > s || o === s && h > u
            ? (this.startLineNumber = s,
              this.startColumn = u,
              this.endLineNumber = o,
              this.endColumn = h)
            : (this.startLineNumber = o,
              this.startColumn = h,
              this.endLineNumber = s,
              this.endColumn = u);
        }
        isEmpty() {
          return P.isEmpty(this);
        }
        static isEmpty(o) {
          return o.startLineNumber === o.endLineNumber &&
            o.startColumn === o.endColumn;
        }
        containsPosition(o) {
          return P.containsPosition(this, o);
        }
        static containsPosition(o, h) {
          return !(h.lineNumber < o.startLineNumber ||
            h.lineNumber > o.endLineNumber ||
            h.lineNumber === o.startLineNumber && h.column < o.startColumn ||
            h.lineNumber === o.endLineNumber && h.column > o.endColumn);
        }
        containsRange(o) {
          return P.containsRange(this, o);
        }
        static containsRange(o, h) {
          return !(h.startLineNumber < o.startLineNumber ||
            h.endLineNumber < o.startLineNumber ||
            h.startLineNumber > o.endLineNumber ||
            h.endLineNumber > o.endLineNumber ||
            h.startLineNumber === o.startLineNumber &&
              h.startColumn < o.startColumn ||
            h.endLineNumber === o.endLineNumber && h.endColumn > o.endColumn);
        }
        strictContainsRange(o) {
          return P.strictContainsRange(this, o);
        }
        static strictContainsRange(o, h) {
          return !(h.startLineNumber < o.startLineNumber ||
            h.endLineNumber < o.startLineNumber ||
            h.startLineNumber > o.endLineNumber ||
            h.endLineNumber > o.endLineNumber ||
            h.startLineNumber === o.startLineNumber &&
              h.startColumn <= o.startColumn ||
            h.endLineNumber === o.endLineNumber && h.endColumn >= o.endColumn);
        }
        plusRange(o) {
          return P.plusRange(this, o);
        }
        static plusRange(o, h) {
          let s, u, d, N;
          return h.startLineNumber < o.startLineNumber
            ? (s = h.startLineNumber, u = h.startColumn)
            : h.startLineNumber === o.startLineNumber
            ? (s = h.startLineNumber,
              u = Math.min(h.startColumn, o.startColumn))
            : (s = o.startLineNumber, u = o.startColumn),
            h.endLineNumber > o.endLineNumber
              ? (d = h.endLineNumber, N = h.endColumn)
              : h.endLineNumber === o.endLineNumber
              ? (d = h.endLineNumber, N = Math.max(h.endColumn, o.endColumn))
              : (d = o.endLineNumber, N = o.endColumn),
            new P(s, u, d, N);
        }
        intersectRanges(o) {
          return P.intersectRanges(this, o);
        }
        static intersectRanges(o, h) {
          let s = o.startLineNumber,
            u = o.startColumn,
            d = o.endLineNumber,
            N = o.endColumn,
            a = h.startLineNumber,
            b = h.startColumn,
            _ = h.endLineNumber,
            v = h.endColumn;
          return s < a ? (s = a, u = b) : s === a && (u = Math.max(u, b)),
            d > _ ? (d = _, N = v) : d === _ && (N = Math.min(N, v)),
            s > d || s === d && u > N ? null : new P(s, u, d, N);
        }
        equalsRange(o) {
          return P.equalsRange(this, o);
        }
        static equalsRange(o, h) {
          return !!o && !!h && o.startLineNumber === h.startLineNumber &&
            o.startColumn === h.startColumn &&
            o.endLineNumber === h.endLineNumber && o.endColumn === h.endColumn;
        }
        getEndPosition() {
          return P.getEndPosition(this);
        }
        static getEndPosition(o) {
          return new p.Position(o.endLineNumber, o.endColumn);
        }
        getStartPosition() {
          return P.getStartPosition(this);
        }
        static getStartPosition(o) {
          return new p.Position(o.startLineNumber, o.startColumn);
        }
        toString() {
          return "[" + this.startLineNumber + "," + this.startColumn + " -> " +
            this.endLineNumber + "," + this.endColumn + "]";
        }
        setEndPosition(o, h) {
          return new P(this.startLineNumber, this.startColumn, o, h);
        }
        setStartPosition(o, h) {
          return new P(o, h, this.endLineNumber, this.endColumn);
        }
        collapseToStart() {
          return P.collapseToStart(this);
        }
        static collapseToStart(o) {
          return new P(
            o.startLineNumber,
            o.startColumn,
            o.startLineNumber,
            o.startColumn,
          );
        }
        static fromPositions(o, h = o) {
          return new P(o.lineNumber, o.column, h.lineNumber, h.column);
        }
        static lift(o) {
          return o
            ? new P(
              o.startLineNumber,
              o.startColumn,
              o.endLineNumber,
              o.endColumn,
            )
            : null;
        }
        static isIRange(o) {
          return o && typeof o.startLineNumber == "number" &&
            typeof o.startColumn == "number" &&
            typeof o.endLineNumber == "number" &&
            typeof o.endColumn == "number";
        }
        static areIntersectingOrTouching(o, h) {
          return !(o.endLineNumber < h.startLineNumber ||
            o.endLineNumber === h.startLineNumber &&
              o.endColumn < h.startColumn ||
            h.endLineNumber < o.startLineNumber ||
            h.endLineNumber === o.startLineNumber &&
              h.endColumn < o.startColumn);
        }
        static areIntersecting(o, h) {
          return !(o.endLineNumber < h.startLineNumber ||
            o.endLineNumber === h.startLineNumber &&
              o.endColumn <= h.startColumn ||
            h.endLineNumber < o.startLineNumber ||
            h.endLineNumber === o.startLineNumber &&
              h.endColumn <= o.startColumn);
        }
        static compareRangesUsingStarts(o, h) {
          if (o && h) {
            const d = o.startLineNumber | 0, N = h.startLineNumber | 0;
            if (d === N) {
              const a = o.startColumn | 0, b = h.startColumn | 0;
              if (a === b) {
                const _ = o.endLineNumber | 0, v = h.endLineNumber | 0;
                if (_ === v) {
                  const i = o.endColumn | 0, r = h.endColumn | 0;
                  return i - r;
                }
                return _ - v;
              }
              return a - b;
            }
            return d - N;
          }
          return (o ? 1 : 0) - (h ? 1 : 0);
        }
        static compareRangesUsingEnds(o, h) {
          return o.endLineNumber === h.endLineNumber
            ? o.endColumn === h.endColumn
              ? o.startLineNumber === h.startLineNumber
                ? o.startColumn - h.startColumn
                : o.startLineNumber - h.startLineNumber
              : o.endColumn - h.endColumn
            : o.endLineNumber - h.endLineNumber;
        }
        static spansMultipleLines(o) {
          return o.endLineNumber > o.startLineNumber;
        }
      }
      t.Range = P;
    }),
    V(z[24], G([0, 1, 3, 6]), function (I, t, p, P) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.Selection = void 0;
      class E extends P.Range {
        constructor(h, s, u, d) {
          super(h, s, u, d);
          this.selectionStartLineNumber = h,
            this.selectionStartColumn = s,
            this.positionLineNumber = u,
            this.positionColumn = d;
        }
        toString() {
          return "[" + this.selectionStartLineNumber + "," +
            this.selectionStartColumn + " -> " + this.positionLineNumber + "," +
            this.positionColumn + "]";
        }
        equalsSelection(h) {
          return E.selectionsEqual(this, h);
        }
        static selectionsEqual(h, s) {
          return h.selectionStartLineNumber === s.selectionStartLineNumber &&
            h.selectionStartColumn === s.selectionStartColumn &&
            h.positionLineNumber === s.positionLineNumber &&
            h.positionColumn === s.positionColumn;
        }
        getDirection() {
          return this.selectionStartLineNumber === this.startLineNumber &&
              this.selectionStartColumn === this.startColumn
            ? 0
            : 1;
        }
        setEndPosition(h, s) {
          return this.getDirection() === 0
            ? new E(this.startLineNumber, this.startColumn, h, s)
            : new E(h, s, this.startLineNumber, this.startColumn);
        }
        getPosition() {
          return new p.Position(this.positionLineNumber, this.positionColumn);
        }
        setStartPosition(h, s) {
          return this.getDirection() === 0
            ? new E(h, s, this.endLineNumber, this.endColumn)
            : new E(this.endLineNumber, this.endColumn, h, s);
        }
        static fromPositions(h, s = h) {
          return new E(h.lineNumber, h.column, s.lineNumber, s.column);
        }
        static liftSelection(h) {
          return new E(
            h.selectionStartLineNumber,
            h.selectionStartColumn,
            h.positionLineNumber,
            h.positionColumn,
          );
        }
        static selectionsArrEqual(h, s) {
          if (h && !s || !h && s) return !1;
          if (!h && !s) return !0;
          if (h.length !== s.length) return !1;
          for (let u = 0, d = h.length; u < d; u++) {
            if (!this.selectionsEqual(h[u], s[u]))return !1;
          }
          return !0;
        }
        static isISelection(h) {
          return h && typeof h.selectionStartLineNumber == "number" &&
            typeof h.selectionStartColumn == "number" &&
            typeof h.positionLineNumber == "number" &&
            typeof h.positionColumn == "number";
        }
        static createWithDirection(h, s, u, d, N) {
          return N === 0 ? new E(h, s, u, d) : new E(u, d, h, s);
        }
      }
      t.Selection = E;
    }),
    V(z[25], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.TokenizationResult2 = t.TokenizationResult = t.Token = void 0;
      class p {
        constructor(h, s, u) {
          this.offset = h | 0, this.type = s, this.language = u;
        }
        toString() {
          return "(" + this.offset + ", " + this.type + ")";
        }
      }
      t.Token = p;
      class P {
        constructor(h, s) {
          this.tokens = h, this.endState = s;
        }
      }
      t.TokenizationResult = P;
      class E {
        constructor(h, s) {
          this.tokens = h, this.endState = s;
        }
      }
      t.TokenizationResult2 = E;
    }),
    V(z[26], G([0, 1, 10, 5]), function (I, t, p, P) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.DiffComputer = void 0;
      const E = 3;
      function o(i, r, g, f) {
        return new p.LcsDiff(i, r, g).ComputeDiff(f);
      }
      class h {
        constructor(r) {
          const g = [], f = [];
          for (let l = 0, n = r.length; l < n; l++) {
            g[l] = b(r[l], 1), f[l] = _(r[l], 1);
          }
          this.lines = r, this._startColumns = g, this._endColumns = f;
        }
        getElements() {
          const r = [];
          for (let g = 0, f = this.lines.length; g < f; g++) {
            r[g] = this.lines[g].substring(
              this._startColumns[g] - 1,
              this._endColumns[g] - 1,
            );
          }
          return r;
        }
        getStartLineNumber(r) {
          return r + 1;
        }
        getEndLineNumber(r) {
          return r + 1;
        }
        createCharSequence(r, g, f) {
          const l = [], n = [], m = [];
          let S = 0;
          for (let w = g; w <= f; w++) {
            const c = this.lines[w],
              C = r ? this._startColumns[w] : 1,
              L = r ? this._endColumns[w] : c.length + 1;
            for (let A = C; A < L; A++) {
              l[S] = c.charCodeAt(A - 1), n[S] = w + 1, m[S] = A, S++;
            }
          }
          return new s(l, n, m);
        }
      }
      class s {
        constructor(r, g, f) {
          this._charCodes = r, this._lineNumbers = g, this._columns = f;
        }
        getElements() {
          return this._charCodes;
        }
        getStartLineNumber(r) {
          return this._lineNumbers[r];
        }
        getStartColumn(r) {
          return this._columns[r];
        }
        getEndLineNumber(r) {
          return this._lineNumbers[r];
        }
        getEndColumn(r) {
          return this._columns[r] + 1;
        }
      }
      class u {
        constructor(r, g, f, l, n, m, S, w) {
          this.originalStartLineNumber = r,
            this.originalStartColumn = g,
            this.originalEndLineNumber = f,
            this.originalEndColumn = l,
            this.modifiedStartLineNumber = n,
            this.modifiedStartColumn = m,
            this.modifiedEndLineNumber = S,
            this.modifiedEndColumn = w;
        }
        static createFromDiffChange(r, g, f) {
          let l, n, m, S, w, c, C, L;
          return r.originalLength === 0
            ? (l = 0, n = 0, m = 0, S = 0)
            : (l = g.getStartLineNumber(r.originalStart),
              n = g.getStartColumn(r.originalStart),
              m = g.getEndLineNumber(r.originalStart + r.originalLength - 1),
              S = g.getEndColumn(r.originalStart + r.originalLength - 1)),
            r.modifiedLength === 0
              ? (w = 0, c = 0, C = 0, L = 0)
              : (w = f.getStartLineNumber(r.modifiedStart),
                c = f.getStartColumn(r.modifiedStart),
                C = f.getEndLineNumber(r.modifiedStart + r.modifiedLength - 1),
                L = f.getEndColumn(r.modifiedStart + r.modifiedLength - 1)),
            new u(l, n, m, S, w, c, C, L);
        }
      }
      function d(i) {
        if (i.length <= 1) return i;
        const r = [i[0]];
        let g = r[0];
        for (let f = 1, l = i.length; f < l; f++) {
          const n = i[f],
            m = n.originalStart - (g.originalStart + g.originalLength),
            S = n.modifiedStart - (g.modifiedStart + g.modifiedLength);
          Math.min(m, S) < E
            ? (g.originalLength = n.originalStart + n.originalLength -
              g.originalStart,
              g.modifiedLength = n.modifiedStart + n.modifiedLength -
                g.modifiedStart)
            : (r.push(n), g = n);
        }
        return r;
      }
      class N {
        constructor(r, g, f, l, n) {
          this.originalStartLineNumber = r,
            this.originalEndLineNumber = g,
            this.modifiedStartLineNumber = f,
            this.modifiedEndLineNumber = l,
            this.charChanges = n;
        }
        static createFromDiffResult(r, g, f, l, n, m, S) {
          let w, c, C, L, A;
          if (
            g.originalLength === 0
              ? (w = f.getStartLineNumber(g.originalStart) - 1, c = 0)
              : (w = f.getStartLineNumber(g.originalStart),
                c = f.getEndLineNumber(g.originalStart + g.originalLength - 1)),
              g.modifiedLength === 0
                ? (C = l.getStartLineNumber(g.modifiedStart) - 1, L = 0)
                : (C = l.getStartLineNumber(g.modifiedStart),
                  L = l.getEndLineNumber(
                    g.modifiedStart + g.modifiedLength - 1,
                  )),
              m && g.originalLength > 0 && g.originalLength < 20 &&
              g.modifiedLength > 0 && g.modifiedLength < 20 && n()
          ) {
            const M = f.createCharSequence(
                r,
                g.originalStart,
                g.originalStart + g.originalLength - 1,
              ),
              R = l.createCharSequence(
                r,
                g.modifiedStart,
                g.modifiedStart + g.modifiedLength - 1,
              );
            let D = o(M, R, n, !0).changes;
            S && (D = d(D)), A = [];
            for (let T = 0, $ = D.length; T < $; T++) {A.push(
                u.createFromDiffChange(D[T], M, R),
              );}
          }
          return new N(w, c, C, L, A);
        }
      }
      class a {
        constructor(r, g, f) {
          this.shouldComputeCharChanges = f.shouldComputeCharChanges,
            this.shouldPostProcessCharChanges = f.shouldPostProcessCharChanges,
            this.shouldIgnoreTrimWhitespace = f.shouldIgnoreTrimWhitespace,
            this.shouldMakePrettyDiff = f.shouldMakePrettyDiff,
            this.originalLines = r,
            this.modifiedLines = g,
            this.original = new h(r),
            this.modified = new h(g),
            this.continueLineDiff = v(f.maxComputationTime),
            this.continueCharDiff = v(
              f.maxComputationTime === 0
                ? 0
                : Math.min(f.maxComputationTime, 5e3),
            );
        }
        computeDiff() {
          if (
            this.original.lines.length === 1 &&
            this.original.lines[0].length === 0
          ) {
            return this.modified.lines.length === 1 &&
                this.modified.lines[0].length === 0
              ? { quitEarly: !1, changes: [] }
              : {
                quitEarly: !1,
                changes: [{
                  originalStartLineNumber: 1,
                  originalEndLineNumber: 1,
                  modifiedStartLineNumber: 1,
                  modifiedEndLineNumber: this.modified.lines.length,
                  charChanges: [{
                    modifiedEndColumn: 0,
                    modifiedEndLineNumber: 0,
                    modifiedStartColumn: 0,
                    modifiedStartLineNumber: 0,
                    originalEndColumn: 0,
                    originalEndLineNumber: 0,
                    originalStartColumn: 0,
                    originalStartLineNumber: 0,
                  }],
                }],
              };
          }
          if (
            this.modified.lines.length === 1 &&
            this.modified.lines[0].length === 0
          ) {
            return {
              quitEarly: !1,
              changes: [{
                originalStartLineNumber: 1,
                originalEndLineNumber: this.original.lines.length,
                modifiedStartLineNumber: 1,
                modifiedEndLineNumber: 1,
                charChanges: [{
                  modifiedEndColumn: 0,
                  modifiedEndLineNumber: 0,
                  modifiedStartColumn: 0,
                  modifiedStartLineNumber: 0,
                  originalEndColumn: 0,
                  originalEndLineNumber: 0,
                  originalStartColumn: 0,
                  originalStartLineNumber: 0,
                }],
              }],
            };
          }
          const r = o(
              this.original,
              this.modified,
              this.continueLineDiff,
              this.shouldMakePrettyDiff,
            ),
            g = r.changes,
            f = r.quitEarly;
          if (this.shouldIgnoreTrimWhitespace) {
            const S = [];
            for (let w = 0, c = g.length; w < c; w++) {
              S.push(
                N.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  g[w],
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              );
            }
            return { quitEarly: f, changes: S };
          }
          const l = [];
          let n = 0, m = 0;
          for (let S = -1, w = g.length; S < w; S++) {
            const c = S + 1 < w ? g[S + 1] : null,
              C = c ? c.originalStart : this.originalLines.length,
              L = c ? c.modifiedStart : this.modifiedLines.length;
            for (; n < C && m < L;) {
              const A = this.originalLines[n], M = this.modifiedLines[m];
              if (A !== M) {
                {
                  let R = b(A, 1), D = b(M, 1);
                  for (; R > 1 && D > 1;) {
                    const T = A.charCodeAt(R - 2), $ = M.charCodeAt(D - 2);
                    if (T !== $) break;
                    R--, D--;
                  }
                  (R > 1 || D > 1) &&
                    this._pushTrimWhitespaceCharChange(
                      l,
                      n + 1,
                      1,
                      R,
                      m + 1,
                      1,
                      D,
                    );
                }
                {
                  let R = _(A, 1), D = _(M, 1);
                  const T = A.length + 1, $ = M.length + 1;
                  for (; R < T && D < $;) {
                    const k = A.charCodeAt(R - 1), F = A.charCodeAt(D - 1);
                    if (k !== F) break;
                    R++, D++;
                  }
                  (R < T || D < $) &&
                    this._pushTrimWhitespaceCharChange(
                      l,
                      n + 1,
                      R,
                      T,
                      m + 1,
                      D,
                      $,
                    );
                }
              }
              n++, m++;
            }
            c &&
              (l.push(
                N.createFromDiffResult(
                  this.shouldIgnoreTrimWhitespace,
                  c,
                  this.original,
                  this.modified,
                  this.continueCharDiff,
                  this.shouldComputeCharChanges,
                  this.shouldPostProcessCharChanges,
                ),
              ),
                n += c.originalLength,
                m += c.modifiedLength);
          }
          return { quitEarly: f, changes: l };
        }
        _pushTrimWhitespaceCharChange(r, g, f, l, n, m, S) {
          if (!this._mergeTrimWhitespaceCharChange(r, g, f, l, n, m, S)) {
            let w;
            this.shouldComputeCharChanges &&
            (w = [new u(g, f, g, l, n, m, n, S)]), r.push(new N(g, g, n, n, w));
          }
        }
        _mergeTrimWhitespaceCharChange(r, g, f, l, n, m, S) {
          const w = r.length;
          if (w === 0) return !1;
          const c = r[w - 1];
          return c.originalEndLineNumber === 0 || c.modifiedEndLineNumber === 0
            ? !1
            : c.originalEndLineNumber + 1 === g &&
                c.modifiedEndLineNumber + 1 === n
            ? (c.originalEndLineNumber = g,
              c.modifiedEndLineNumber = n,
              this.shouldComputeCharChanges && c.charChanges &&
              c.charChanges.push(new u(g, f, g, l, n, m, n, S)),
              !0)
            : !1;
        }
      }
      t.DiffComputer = a;
      function b(i, r) {
        const g = P.firstNonWhitespaceIndex(i);
        return g === -1 ? r : g + 1;
      }
      function _(i, r) {
        const g = P.lastNonWhitespaceIndex(i);
        return g === -1 ? r : g + 2;
      }
      function v(i) {
        if (i === 0) return () => !0;
        const r = Date.now();
        return () => Date.now() - r < i;
      }
    }),
    V(z[27], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.getWordAtText = t.ensureValidWordDefinition = t.DEFAULT_WORD_REGEXP =
          t.USUAL_WORD_SEPARATORS = void 0,
        t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
      function p(s = "") {
        let u = "(-?\\d*\\.\\d\\w*)|([^";
        for (const d of t.USUAL_WORD_SEPARATORS) {
          s.indexOf(d) >= 0 || (u += "\\" + d);
        }
        return u += "\\s]+)", new RegExp(u, "g");
      }
      t.DEFAULT_WORD_REGEXP = p();
      function P(s) {
        let u = t.DEFAULT_WORD_REGEXP;
        if (s && s instanceof RegExp) {
          if (s.global) u = s;
          else {
            let d = "g";
            s.ignoreCase && (d += "i"),
              s.multiline && (d += "m"),
              s.unicode && (d += "u"),
              u = new RegExp(s.source, d);
          }
        }
        return u.lastIndex = 0, u;
      }
      t.ensureValidWordDefinition = P;
      const E = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
      function o(s, u, d, N, a = E) {
        if (d.length > a.maxLen) {
          let r = s - a.maxLen / 2;
          return r < 0 ? r = 0 : N += r,
            d = d.substring(r, s + a.maxLen / 2),
            o(s, u, d, N, a);
        }
        const b = Date.now(), _ = s - 1 - N;
        let v = -1, i = null;
        for (let r = 1; !(Date.now() - b >= a.timeBudget); r++) {
          const g = _ - a.windowSize * r;
          u.lastIndex = Math.max(0, g);
          const f = h(u, d, _, v);
          if (!f && i || (i = f, g <= 0)) break;
          v = g;
        }
        if (i) {
          let r = {
            word: i[0],
            startColumn: N + 1 + i.index,
            endColumn: N + 1 + i.index + i[0].length,
          };
          return u.lastIndex = 0, r;
        }
        return null;
      }
      t.getWordAtText = o;
      function h(s, u, d, N) {
        let a;
        for (; a = s.exec(u);) {
          const b = a.index || 0;
          if (b <= d && s.lastIndex >= d) return a;
          if (N > 0 && b > N) return null;
        }
        return null;
      }
    }),
    V(z[28], G([0, 1, 23]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.computeLinks = t.LinkComputer = t.StateMachine = t.Uint8Matrix =
          void 0;
      class P {
        constructor(b, _, v) {
          const i = new Uint8Array(b * _);
          for (let r = 0, g = b * _; r < g; r++) i[r] = v;
          this._data = i, this.rows = b, this.cols = _;
        }
        get(b, _) {
          return this._data[b * this.cols + _];
        }
        set(b, _, v) {
          this._data[b * this.cols + _] = v;
        }
      }
      t.Uint8Matrix = P;
      class E {
        constructor(b) {
          let _ = 0, v = 0;
          for (let r = 0, g = b.length; r < g; r++) {
            let [f, l, n] = b[r];
            l > _ && (_ = l), f > v && (v = f), n > v && (v = n);
          }
          _++, v++;
          let i = new P(v, _, 0);
          for (let r = 0, g = b.length; r < g; r++) {
            let [f, l, n] = b[r];
            i.set(f, l, n);
          }
          this._states = i, this._maxCharCode = _;
        }
        nextState(b, _) {
          return _ < 0 || _ >= this._maxCharCode ? 0 : this._states.get(b, _);
        }
      }
      t.StateMachine = E;
      let o = null;
      function h() {
        return o === null &&
          (o = new E([
            [1, 104, 2],
            [1, 72, 2],
            [1, 102, 6],
            [1, 70, 6],
            [2, 116, 3],
            [2, 84, 3],
            [3, 116, 4],
            [3, 84, 4],
            [4, 112, 5],
            [4, 80, 5],
            [5, 115, 9],
            [5, 83, 9],
            [5, 58, 10],
            [6, 105, 7],
            [6, 73, 7],
            [7, 108, 8],
            [7, 76, 8],
            [8, 101, 9],
            [8, 69, 9],
            [9, 58, 10],
            [10, 47, 11],
            [11, 47, 12],
          ])),
          o;
      }
      let s = null;
      function u() {
        if (s === null) {
          s = new p.CharacterClassifier(0);
          const a =
            ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u3011\u300F\u300D\u300B\u3009\u201D\u2019\uFF40\uFF5E\u2026`;
          for (let _ = 0; _ < a.length; _++) s.set(a.charCodeAt(_), 1);
          const b = ".,;";
          for (let _ = 0; _ < b.length; _++) s.set(b.charCodeAt(_), 2);
        }
        return s;
      }
      class d {
        static _createLink(b, _, v, i, r) {
          let g = r - 1;
          do {
            const f = _.charCodeAt(g);
            if (b.get(f) !== 2) break;
            g--;
          } while (g > i);
          if (i > 0) {
            const f = _.charCodeAt(i - 1), l = _.charCodeAt(g);
            (f === 40 && l === 41 || f === 91 && l === 93 ||
              f === 123 && l === 125) && g--;
          }
          return {
            range: {
              startLineNumber: v,
              startColumn: i + 1,
              endLineNumber: v,
              endColumn: g + 2,
            },
            url: _.substring(i, g + 1),
          };
        }
        static computeLinks(b, _ = h()) {
          const v = u();
          let i = [];
          for (let r = 1, g = b.getLineCount(); r <= g; r++) {
            const f = b.getLineContent(r), l = f.length;
            let n = 0, m = 0, S = 0, w = 1, c = !1, C = !1, L = !1, A = !1;
            for (; n < l;) {
              let M = !1;
              const R = f.charCodeAt(n);
              if (w === 13) {
                let D;
                switch (R) {
                  case 40:
                    c = !0, D = 0;
                    break;
                  case 41:
                    D = c ? 0 : 1;
                    break;
                  case 91:
                    L = !0, C = !0, D = 0;
                    break;
                  case 93:
                    L = !1, D = C ? 0 : 1;
                    break;
                  case 123:
                    A = !0, D = 0;
                    break;
                  case 125:
                    D = A ? 0 : 1;
                    break;
                  case 39:
                    D = S === 34 || S === 96 ? 0 : 1;
                    break;
                  case 34:
                    D = S === 39 || S === 96 ? 0 : 1;
                    break;
                  case 96:
                    D = S === 39 || S === 34 ? 0 : 1;
                    break;
                  case 42:
                    D = S === 42 ? 1 : 0;
                    break;
                  case 124:
                    D = S === 124 ? 1 : 0;
                    break;
                  case 32:
                    D = L ? 0 : 1;
                    break;
                  default:
                    D = v.get(R);
                }
                D === 1 && (i.push(d._createLink(v, f, r, m, n)), M = !0);
              } else if (w === 12) {
                let D;
                R === 91 ? (C = !0, D = 0) : D = v.get(R),
                  D === 1 ? M = !0 : w = 13;
              } else w = _.nextState(w, R), w === 0 && (M = !0);
              M && (w = 1, c = !1, C = !1, A = !1, m = n + 1, S = R), n++;
            }
            w === 13 && i.push(d._createLink(v, f, r, m, l));
          }
          return i;
        }
      }
      t.LinkComputer = d;
      function N(a) {
        return !a || typeof a.getLineCount != "function" ||
            typeof a.getLineContent != "function"
          ? []
          : d.computeLinks(a);
      }
      t.computeLinks = N;
    }),
    V(z[29], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.BasicInplaceReplace = void 0;
      class p {
        constructor() {
          this._defaultValueSet = [["true", "false"], ["True", "False"], [
            "Private",
            "Public",
            "Friend",
            "ReadOnly",
            "Partial",
            "Protected",
            "WriteOnly",
          ], ["public", "protected", "private"]];
        }
        navigateValueSet(E, o, h, s, u) {
          if (E && o) {
            let d = this.doNavigateValueSet(o, u);
            if (d) return { range: E, value: d };
          }
          if (h && s) {
            let d = this.doNavigateValueSet(s, u);
            if (d) return { range: h, value: d };
          }
          return null;
        }
        doNavigateValueSet(E, o) {
          let h = this.numberReplace(E, o);
          return h !== null ? h : this.textReplace(E, o);
        }
        numberReplace(E, o) {
          let h = Math.pow(10, E.length - (E.lastIndexOf(".") + 1)),
            s = Number(E),
            u = parseFloat(E);
          return !isNaN(s) && !isNaN(u) && s === u
            ? s === 0 && !o
              ? null
              : (s = Math.floor(s * h), s += o ? h : -h, String(s / h))
            : null;
        }
        textReplace(E, o) {
          return this.valueSetsReplace(this._defaultValueSet, E, o);
        }
        valueSetsReplace(E, o, h) {
          let s = null;
          for (let u = 0, d = E.length; s === null && u < d; u++) {
            s = this.valueSetReplace(E[u], o, h);
          }
          return s;
        }
        valueSetReplace(E, o, h) {
          let s = E.indexOf(o);
          return s >= 0
            ? (s += h ? 1 : -1, s < 0 ? s = E.length - 1 : s %= E.length, E[s])
            : null;
        }
      }
      t.BasicInplaceReplace = p, p.INSTANCE = new p();
    }),
    V(z[30], G([0, 1]), function (I, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.WrappingIndent = t.TrackedRangeStickiness = t.TextEditorCursorStyle =
          t.TextEditorCursorBlinkingStyle = t.SymbolTag = t.SymbolKind = t
            .SignatureHelpTriggerKind = t.SelectionDirection = t
              .ScrollbarVisibility = t.ScrollType = t.RenderMinimap = t
                .RenderLineNumbersType = t.OverviewRulerLane = t
                  .OverlayWidgetPositionPreference = t.MouseTargetType = t
                    .MinimapPosition = t.MarkerTag = t.MarkerSeverity = t
                      .KeyCode = t.IndentAction = t.EndOfLineSequence = t
                        .EndOfLinePreference = t.EditorOption = t
                          .EditorAutoIndentStrategy = t.DocumentHighlightKind =
                            t.DefaultEndOfLine = t.CursorChangeReason = t
                              .ContentWidgetPositionPreference = t
                                .CompletionTriggerKind = t.CompletionItemTag = t
                                  .CompletionItemKind = t
                                    .CompletionItemInsertTextRule = t
                                      .AccessibilitySupport = void 0;
      var p;
      (function (e) {
        e[e.Unknown = 0] = "Unknown",
          e[e.Disabled = 1] = "Disabled",
          e[e.Enabled = 2] = "Enabled";
      })(p = t.AccessibilitySupport || (t.AccessibilitySupport = {}));
      var P;
      (function (e) {
        e[e.KeepWhitespace = 1] = "KeepWhitespace",
          e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
      })(
        P = t.CompletionItemInsertTextRule ||
          (t.CompletionItemInsertTextRule = {}),
      );
      var E;
      (function (e) {
        e[e.Method = 0] = "Method",
          e[e.Function = 1] = "Function",
          e[e.Constructor = 2] = "Constructor",
          e[e.Field = 3] = "Field",
          e[e.Variable = 4] = "Variable",
          e[e.Class = 5] = "Class",
          e[e.Struct = 6] = "Struct",
          e[e.Interface = 7] = "Interface",
          e[e.Module = 8] = "Module",
          e[e.Property = 9] = "Property",
          e[e.Event = 10] = "Event",
          e[e.Operator = 11] = "Operator",
          e[e.Unit = 12] = "Unit",
          e[e.Value = 13] = "Value",
          e[e.Constant = 14] = "Constant",
          e[e.Enum = 15] = "Enum",
          e[e.EnumMember = 16] = "EnumMember",
          e[e.Keyword = 17] = "Keyword",
          e[e.Text = 18] = "Text",
          e[e.Color = 19] = "Color",
          e[e.File = 20] = "File",
          e[e.Reference = 21] = "Reference",
          e[e.Customcolor = 22] = "Customcolor",
          e[e.Folder = 23] = "Folder",
          e[e.TypeParameter = 24] = "TypeParameter",
          e[e.User = 25] = "User",
          e[e.Issue = 26] = "Issue",
          e[e.Snippet = 27] = "Snippet";
      })(E = t.CompletionItemKind || (t.CompletionItemKind = {}));
      var o;
      (function (e) {
        e[e.Deprecated = 1] = "Deprecated";
      })(o = t.CompletionItemTag || (t.CompletionItemTag = {}));
      var h;
      (function (e) {
        e[e.Invoke = 0] = "Invoke",
          e[e.TriggerCharacter = 1] = "TriggerCharacter",
          e[e.TriggerForIncompleteCompletions = 2] =
            "TriggerForIncompleteCompletions";
      })(h = t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
      var s;
      (function (e) {
        e[e.EXACT = 0] = "EXACT",
          e[e.ABOVE = 1] = "ABOVE",
          e[e.BELOW = 2] = "BELOW";
      })(
        s = t.ContentWidgetPositionPreference ||
          (t.ContentWidgetPositionPreference = {}),
      );
      var u;
      (function (e) {
        e[e.NotSet = 0] = "NotSet",
          e[e.ContentFlush = 1] = "ContentFlush",
          e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers",
          e[e.Explicit = 3] = "Explicit",
          e[e.Paste = 4] = "Paste",
          e[e.Undo = 5] = "Undo",
          e[e.Redo = 6] = "Redo";
      })(u = t.CursorChangeReason || (t.CursorChangeReason = {}));
      var d;
      (function (e) {
        e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
      })(d = t.DefaultEndOfLine || (t.DefaultEndOfLine = {}));
      var N;
      (function (e) {
        e[e.Text = 0] = "Text",
          e[e.Read = 1] = "Read",
          e[e.Write = 2] = "Write";
      })(N = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
      var a;
      (function (e) {
        e[e.None = 0] = "None",
          e[e.Keep = 1] = "Keep",
          e[e.Brackets = 2] = "Brackets",
          e[e.Advanced = 3] = "Advanced",
          e[e.Full = 4] = "Full";
      })(a = t.EditorAutoIndentStrategy || (t.EditorAutoIndentStrategy = {}));
      var b;
      (function (e) {
        e[e.acceptSuggestionOnCommitCharacter = 0] =
          "acceptSuggestionOnCommitCharacter",
          e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter",
          e[e.accessibilitySupport = 2] = "accessibilitySupport",
          e[e.accessibilityPageSize = 3] = "accessibilityPageSize",
          e[e.ariaLabel = 4] = "ariaLabel",
          e[e.autoClosingBrackets = 5] = "autoClosingBrackets",
          e[e.autoClosingOvertype = 6] = "autoClosingOvertype",
          e[e.autoClosingQuotes = 7] = "autoClosingQuotes",
          e[e.autoIndent = 8] = "autoIndent",
          e[e.automaticLayout = 9] = "automaticLayout",
          e[e.autoSurround = 10] = "autoSurround",
          e[e.codeLens = 11] = "codeLens",
          e[e.codeLensFontFamily = 12] = "codeLensFontFamily",
          e[e.codeLensFontSize = 13] = "codeLensFontSize",
          e[e.colorDecorators = 14] = "colorDecorators",
          e[e.columnSelection = 15] = "columnSelection",
          e[e.comments = 16] = "comments",
          e[e.contextmenu = 17] = "contextmenu",
          e[e.copyWithSyntaxHighlighting = 18] = "copyWithSyntaxHighlighting",
          e[e.cursorBlinking = 19] = "cursorBlinking",
          e[e.cursorSmoothCaretAnimation = 20] = "cursorSmoothCaretAnimation",
          e[e.cursorStyle = 21] = "cursorStyle",
          e[e.cursorSurroundingLines = 22] = "cursorSurroundingLines",
          e[e.cursorSurroundingLinesStyle = 23] = "cursorSurroundingLinesStyle",
          e[e.cursorWidth = 24] = "cursorWidth",
          e[e.disableLayerHinting = 25] = "disableLayerHinting",
          e[e.disableMonospaceOptimizations = 26] =
            "disableMonospaceOptimizations",
          e[e.dragAndDrop = 27] = "dragAndDrop",
          e[e.emptySelectionClipboard = 28] = "emptySelectionClipboard",
          e[e.extraEditorClassName = 29] = "extraEditorClassName",
          e[e.fastScrollSensitivity = 30] = "fastScrollSensitivity",
          e[e.find = 31] = "find",
          e[e.fixedOverflowWidgets = 32] = "fixedOverflowWidgets",
          e[e.folding = 33] = "folding",
          e[e.foldingStrategy = 34] = "foldingStrategy",
          e[e.foldingHighlight = 35] = "foldingHighlight",
          e[e.unfoldOnClickAfterEndOfLine = 36] = "unfoldOnClickAfterEndOfLine",
          e[e.fontFamily = 37] = "fontFamily",
          e[e.fontInfo = 38] = "fontInfo",
          e[e.fontLigatures = 39] = "fontLigatures",
          e[e.fontSize = 40] = "fontSize",
          e[e.fontWeight = 41] = "fontWeight",
          e[e.formatOnPaste = 42] = "formatOnPaste",
          e[e.formatOnType = 43] = "formatOnType",
          e[e.glyphMargin = 44] = "glyphMargin",
          e[e.gotoLocation = 45] = "gotoLocation",
          e[e.hideCursorInOverviewRuler = 46] = "hideCursorInOverviewRuler",
          e[e.highlightActiveIndentGuide = 47] = "highlightActiveIndentGuide",
          e[e.hover = 48] = "hover",
          e[e.inDiffEditor = 49] = "inDiffEditor",
          e[e.letterSpacing = 50] = "letterSpacing",
          e[e.lightbulb = 51] = "lightbulb",
          e[e.lineDecorationsWidth = 52] = "lineDecorationsWidth",
          e[e.lineHeight = 53] = "lineHeight",
          e[e.lineNumbers = 54] = "lineNumbers",
          e[e.lineNumbersMinChars = 55] = "lineNumbersMinChars",
          e[e.linkedEditing = 56] = "linkedEditing",
          e[e.links = 57] = "links",
          e[e.matchBrackets = 58] = "matchBrackets",
          e[e.minimap = 59] = "minimap",
          e[e.mouseStyle = 60] = "mouseStyle",
          e[e.mouseWheelScrollSensitivity = 61] = "mouseWheelScrollSensitivity",
          e[e.mouseWheelZoom = 62] = "mouseWheelZoom",
          e[e.multiCursorMergeOverlapping = 63] = "multiCursorMergeOverlapping",
          e[e.multiCursorModifier = 64] = "multiCursorModifier",
          e[e.multiCursorPaste = 65] = "multiCursorPaste",
          e[e.occurrencesHighlight = 66] = "occurrencesHighlight",
          e[e.overviewRulerBorder = 67] = "overviewRulerBorder",
          e[e.overviewRulerLanes = 68] = "overviewRulerLanes",
          e[e.padding = 69] = "padding",
          e[e.parameterHints = 70] = "parameterHints",
          e[e.peekWidgetDefaultFocus = 71] = "peekWidgetDefaultFocus",
          e[e.definitionLinkOpensInPeek = 72] = "definitionLinkOpensInPeek",
          e[e.quickSuggestions = 73] = "quickSuggestions",
          e[e.quickSuggestionsDelay = 74] = "quickSuggestionsDelay",
          e[e.readOnly = 75] = "readOnly",
          e[e.renameOnType = 76] = "renameOnType",
          e[e.renderControlCharacters = 77] = "renderControlCharacters",
          e[e.renderIndentGuides = 78] = "renderIndentGuides",
          e[e.renderFinalNewline = 79] = "renderFinalNewline",
          e[e.renderLineHighlight = 80] = "renderLineHighlight",
          e[e.renderLineHighlightOnlyWhenFocus = 81] =
            "renderLineHighlightOnlyWhenFocus",
          e[e.renderValidationDecorations = 82] = "renderValidationDecorations",
          e[e.renderWhitespace = 83] = "renderWhitespace",
          e[e.revealHorizontalRightPadding = 84] =
            "revealHorizontalRightPadding",
          e[e.roundedSelection = 85] = "roundedSelection",
          e[e.rulers = 86] = "rulers",
          e[e.scrollbar = 87] = "scrollbar",
          e[e.scrollBeyondLastColumn = 88] = "scrollBeyondLastColumn",
          e[e.scrollBeyondLastLine = 89] = "scrollBeyondLastLine",
          e[e.scrollPredominantAxis = 90] = "scrollPredominantAxis",
          e[e.selectionClipboard = 91] = "selectionClipboard",
          e[e.selectionHighlight = 92] = "selectionHighlight",
          e[e.selectOnLineNumbers = 93] = "selectOnLineNumbers",
          e[e.showFoldingControls = 94] = "showFoldingControls",
          e[e.showUnused = 95] = "showUnused",
          e[e.snippetSuggestions = 96] = "snippetSuggestions",
          e[e.smartSelect = 97] = "smartSelect",
          e[e.smoothScrolling = 98] = "smoothScrolling",
          e[e.stickyTabStops = 99] = "stickyTabStops",
          e[e.stopRenderingLineAfter = 100] = "stopRenderingLineAfter",
          e[e.suggest = 101] = "suggest",
          e[e.suggestFontSize = 102] = "suggestFontSize",
          e[e.suggestLineHeight = 103] = "suggestLineHeight",
          e[e.suggestOnTriggerCharacters = 104] = "suggestOnTriggerCharacters",
          e[e.suggestSelection = 105] = "suggestSelection",
          e[e.tabCompletion = 106] = "tabCompletion",
          e[e.tabIndex = 107] = "tabIndex",
          e[e.unusualLineTerminators = 108] = "unusualLineTerminators",
          e[e.useTabStops = 109] = "useTabStops",
          e[e.wordSeparators = 110] = "wordSeparators",
          e[e.wordWrap = 111] = "wordWrap",
          e[e.wordWrapBreakAfterCharacters = 112] =
            "wordWrapBreakAfterCharacters",
          e[e.wordWrapBreakBeforeCharacters = 113] =
            "wordWrapBreakBeforeCharacters",
          e[e.wordWrapColumn = 114] = "wordWrapColumn",
          e[e.wordWrapOverride1 = 115] = "wordWrapOverride1",
          e[e.wordWrapOverride2 = 116] = "wordWrapOverride2",
          e[e.wrappingIndent = 117] = "wrappingIndent",
          e[e.wrappingStrategy = 118] = "wrappingStrategy",
          e[e.showDeprecated = 119] = "showDeprecated",
          e[e.inlineHints = 120] = "inlineHints",
          e[e.editorClassName = 121] = "editorClassName",
          e[e.pixelRatio = 122] = "pixelRatio",
          e[e.tabFocusMode = 123] = "tabFocusMode",
          e[e.layoutInfo = 124] = "layoutInfo",
          e[e.wrappingInfo = 125] = "wrappingInfo";
      })(b = t.EditorOption || (t.EditorOption = {}));
      var _;
      (function (e) {
        e[e.TextDefined = 0] = "TextDefined",
          e[e.LF = 1] = "LF",
          e[e.CRLF = 2] = "CRLF";
      })(_ = t.EndOfLinePreference || (t.EndOfLinePreference = {}));
      var v;
      (function (e) {
        e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
      })(v = t.EndOfLineSequence || (t.EndOfLineSequence = {}));
      var i;
      (function (e) {
        e[e.None = 0] = "None",
          e[e.Indent = 1] = "Indent",
          e[e.IndentOutdent = 2] = "IndentOutdent",
          e[e.Outdent = 3] = "Outdent";
      })(i = t.IndentAction || (t.IndentAction = {}));
      var r;
      (function (e) {
        e[e.Unknown = 0] = "Unknown",
          e[e.Backspace = 1] = "Backspace",
          e[e.Tab = 2] = "Tab",
          e[e.Enter = 3] = "Enter",
          e[e.Shift = 4] = "Shift",
          e[e.Ctrl = 5] = "Ctrl",
          e[e.Alt = 6] = "Alt",
          e[e.PauseBreak = 7] = "PauseBreak",
          e[e.CapsLock = 8] = "CapsLock",
          e[e.Escape = 9] = "Escape",
          e[e.Space = 10] = "Space",
          e[e.PageUp = 11] = "PageUp",
          e[e.PageDown = 12] = "PageDown",
          e[e.End = 13] = "End",
          e[e.Home = 14] = "Home",
          e[e.LeftArrow = 15] = "LeftArrow",
          e[e.UpArrow = 16] = "UpArrow",
          e[e.RightArrow = 17] = "RightArrow",
          e[e.DownArrow = 18] = "DownArrow",
          e[e.Insert = 19] = "Insert",
          e[e.Delete = 20] = "Delete",
          e[e.KEY_0 = 21] = "KEY_0",
          e[e.KEY_1 = 22] = "KEY_1",
          e[e.KEY_2 = 23] = "KEY_2",
          e[e.KEY_3 = 24] = "KEY_3",
          e[e.KEY_4 = 25] = "KEY_4",
          e[e.KEY_5 = 26] = "KEY_5",
          e[e.KEY_6 = 27] = "KEY_6",
          e[e.KEY_7 = 28] = "KEY_7",
          e[e.KEY_8 = 29] = "KEY_8",
          e[e.KEY_9 = 30] = "KEY_9",
          e[e.KEY_A = 31] = "KEY_A",
          e[e.KEY_B = 32] = "KEY_B",
          e[e.KEY_C = 33] = "KEY_C",
          e[e.KEY_D = 34] = "KEY_D",
          e[e.KEY_E = 35] = "KEY_E",
          e[e.KEY_F = 36] = "KEY_F",
          e[e.KEY_G = 37] = "KEY_G",
          e[e.KEY_H = 38] = "KEY_H",
          e[e.KEY_I = 39] = "KEY_I",
          e[e.KEY_J = 40] = "KEY_J",
          e[e.KEY_K = 41] = "KEY_K",
          e[e.KEY_L = 42] = "KEY_L",
          e[e.KEY_M = 43] = "KEY_M",
          e[e.KEY_N = 44] = "KEY_N",
          e[e.KEY_O = 45] = "KEY_O",
          e[e.KEY_P = 46] = "KEY_P",
          e[e.KEY_Q = 47] = "KEY_Q",
          e[e.KEY_R = 48] = "KEY_R",
          e[e.KEY_S = 49] = "KEY_S",
          e[e.KEY_T = 50] = "KEY_T",
          e[e.KEY_U = 51] = "KEY_U",
          e[e.KEY_V = 52] = "KEY_V",
          e[e.KEY_W = 53] = "KEY_W",
          e[e.KEY_X = 54] = "KEY_X",
          e[e.KEY_Y = 55] = "KEY_Y",
          e[e.KEY_Z = 56] = "KEY_Z",
          e[e.Meta = 57] = "Meta",
          e[e.ContextMenu = 58] = "ContextMenu",
          e[e.F1 = 59] = "F1",
          e[e.F2 = 60] = "F2",
          e[e.F3 = 61] = "F3",
          e[e.F4 = 62] = "F4",
          e[e.F5 = 63] = "F5",
          e[e.F6 = 64] = "F6",
          e[e.F7 = 65] = "F7",
          e[e.F8 = 66] = "F8",
          e[e.F9 = 67] = "F9",
          e[e.F10 = 68] = "F10",
          e[e.F11 = 69] = "F11",
          e[e.F12 = 70] = "F12",
          e[e.F13 = 71] = "F13",
          e[e.F14 = 72] = "F14",
          e[e.F15 = 73] = "F15",
          e[e.F16 = 74] = "F16",
          e[e.F17 = 75] = "F17",
          e[e.F18 = 76] = "F18",
          e[e.F19 = 77] = "F19",
          e[e.NumLock = 78] = "NumLock",
          e[e.ScrollLock = 79] = "ScrollLock",
          e[e.US_SEMICOLON = 80] = "US_SEMICOLON",
          e[e.US_EQUAL = 81] = "US_EQUAL",
          e[e.US_COMMA = 82] = "US_COMMA",
          e[e.US_MINUS = 83] = "US_MINUS",
          e[e.US_DOT = 84] = "US_DOT",
          e[e.US_SLASH = 85] = "US_SLASH",
          e[e.US_BACKTICK = 86] = "US_BACKTICK",
          e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET",
          e[e.US_BACKSLASH = 88] = "US_BACKSLASH",
          e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET",
          e[e.US_QUOTE = 90] = "US_QUOTE",
          e[e.OEM_8 = 91] = "OEM_8",
          e[e.OEM_102 = 92] = "OEM_102",
          e[e.NUMPAD_0 = 93] = "NUMPAD_0",
          e[e.NUMPAD_1 = 94] = "NUMPAD_1",
          e[e.NUMPAD_2 = 95] = "NUMPAD_2",
          e[e.NUMPAD_3 = 96] = "NUMPAD_3",
          e[e.NUMPAD_4 = 97] = "NUMPAD_4",
          e[e.NUMPAD_5 = 98] = "NUMPAD_5",
          e[e.NUMPAD_6 = 99] = "NUMPAD_6",
          e[e.NUMPAD_7 = 100] = "NUMPAD_7",
          e[e.NUMPAD_8 = 101] = "NUMPAD_8",
          e[e.NUMPAD_9 = 102] = "NUMPAD_9",
          e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",
          e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",
          e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",
          e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",
          e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",
          e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",
          e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION",
          e[e.ABNT_C1 = 110] = "ABNT_C1",
          e[e.ABNT_C2 = 111] = "ABNT_C2",
          e[e.MAX_VALUE = 112] = "MAX_VALUE";
      })(r = t.KeyCode || (t.KeyCode = {}));
      var g;
      (function (e) {
        e[e.Hint = 1] = "Hint",
          e[e.Info = 2] = "Info",
          e[e.Warning = 4] = "Warning",
          e[e.Error = 8] = "Error";
      })(g = t.MarkerSeverity || (t.MarkerSeverity = {}));
      var f;
      (function (e) {
        e[e.Unnecessary = 1] = "Unnecessary",
          e[e.Deprecated = 2] = "Deprecated";
      })(f = t.MarkerTag || (t.MarkerTag = {}));
      var l;
      (function (e) {
        e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
      })(l = t.MinimapPosition || (t.MinimapPosition = {}));
      var n;
      (function (e) {
        e[e.UNKNOWN = 0] = "UNKNOWN",
          e[e.TEXTAREA = 1] = "TEXTAREA",
          e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN",
          e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS",
          e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS",
          e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE",
          e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT",
          e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY",
          e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE",
          e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET",
          e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER",
          e[e.SCROLLBAR = 11] = "SCROLLBAR",
          e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET",
          e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
      })(n = t.MouseTargetType || (t.MouseTargetType = {}));
      var m;
      (function (e) {
        e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER",
          e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER",
          e[e.TOP_CENTER = 2] = "TOP_CENTER";
      })(
        m = t.OverlayWidgetPositionPreference ||
          (t.OverlayWidgetPositionPreference = {}),
      );
      var S;
      (function (e) {
        e[e.Left = 1] = "Left",
          e[e.Center = 2] = "Center",
          e[e.Right = 4] = "Right",
          e[e.Full = 7] = "Full";
      })(S = t.OverviewRulerLane || (t.OverviewRulerLane = {}));
      var w;
      (function (e) {
        e[e.Off = 0] = "Off",
          e[e.On = 1] = "On",
          e[e.Relative = 2] = "Relative",
          e[e.Interval = 3] = "Interval",
          e[e.Custom = 4] = "Custom";
      })(w = t.RenderLineNumbersType || (t.RenderLineNumbersType = {}));
      var c;
      (function (e) {
        e[e.None = 0] = "None",
          e[e.Text = 1] = "Text",
          e[e.Blocks = 2] = "Blocks";
      })(c = t.RenderMinimap || (t.RenderMinimap = {}));
      var C;
      (function (e) {
        e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
      })(C = t.ScrollType || (t.ScrollType = {}));
      var L;
      (function (e) {
        e[e.Auto = 1] = "Auto",
          e[e.Hidden = 2] = "Hidden",
          e[e.Visible = 3] = "Visible";
      })(L = t.ScrollbarVisibility || (t.ScrollbarVisibility = {}));
      var A;
      (function (e) {
        e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
      })(A = t.SelectionDirection || (t.SelectionDirection = {}));
      var M;
      (function (e) {
        e[e.Invoke = 1] = "Invoke",
          e[e.TriggerCharacter = 2] = "TriggerCharacter",
          e[e.ContentChange = 3] = "ContentChange";
      })(M = t.SignatureHelpTriggerKind || (t.SignatureHelpTriggerKind = {}));
      var R;
      (function (e) {
        e[e.File = 0] = "File",
          e[e.Module = 1] = "Module",
          e[e.Namespace = 2] = "Namespace",
          e[e.Package = 3] = "Package",
          e[e.Class = 4] = "Class",
          e[e.Method = 5] = "Method",
          e[e.Property = 6] = "Property",
          e[e.Field = 7] = "Field",
          e[e.Constructor = 8] = "Constructor",
          e[e.Enum = 9] = "Enum",
          e[e.Interface = 10] = "Interface",
          e[e.Function = 11] = "Function",
          e[e.Variable = 12] = "Variable",
          e[e.Constant = 13] = "Constant",
          e[e.String = 14] = "String",
          e[e.Number = 15] = "Number",
          e[e.Boolean = 16] = "Boolean",
          e[e.Array = 17] = "Array",
          e[e.Object = 18] = "Object",
          e[e.Key = 19] = "Key",
          e[e.Null = 20] = "Null",
          e[e.EnumMember = 21] = "EnumMember",
          e[e.Struct = 22] = "Struct",
          e[e.Event = 23] = "Event",
          e[e.Operator = 24] = "Operator",
          e[e.TypeParameter = 25] = "TypeParameter";
      })(R = t.SymbolKind || (t.SymbolKind = {}));
      var D;
      (function (e) {
        e[e.Deprecated = 1] = "Deprecated";
      })(D = t.SymbolTag || (t.SymbolTag = {}));
      var T;
      (function (e) {
        e[e.Hidden = 0] = "Hidden",
          e[e.Blink = 1] = "Blink",
          e[e.Smooth = 2] = "Smooth",
          e[e.Phase = 3] = "Phase",
          e[e.Expand = 4] = "Expand",
          e[e.Solid = 5] = "Solid";
      })(
        T = t.TextEditorCursorBlinkingStyle ||
          (t.TextEditorCursorBlinkingStyle = {}),
      );
      var $;
      (function (e) {
        e[e.Line = 1] = "Line",
          e[e.Block = 2] = "Block",
          e[e.Underline = 3] = "Underline",
          e[e.LineThin = 4] = "LineThin",
          e[e.BlockOutline = 5] = "BlockOutline",
          e[e.UnderlineThin = 6] = "UnderlineThin";
      })($ = t.TextEditorCursorStyle || (t.TextEditorCursorStyle = {}));
      var k;
      (function (e) {
        e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges",
          e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges",
          e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore",
          e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
      })(k = t.TrackedRangeStickiness || (t.TrackedRangeStickiness = {}));
      var F;
      (function (e) {
        e[e.None = 0] = "None",
          e[e.Same = 1] = "Same",
          e[e.Indent = 2] = "Indent",
          e[e.DeepIndent = 3] = "DeepIndent";
      })(F = t.WrappingIndent || (t.WrappingIndent = {}));
    }),
    V(
      z[31],
      G([0, 1, 21, 9, 17, 13, 3, 6, 24, 25, 30]),
      function (I, t, p, P, E, o, h, s, u, d, N) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          t.createMonacoBaseAPI = t.KeyMod = void 0;
        class a {
          static chord(v, i) {
            return E.KeyChord(v, i);
          }
        }
        t.KeyMod = a,
          a.CtrlCmd = 2048,
          a.Shift = 1024,
          a.Alt = 512,
          a.WinCtrl = 256;
        function b() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: p.CancellationTokenSource,
            Emitter: P.Emitter,
            KeyCode: N.KeyCode,
            KeyMod: a,
            Position: h.Position,
            Range: s.Range,
            Selection: u.Selection,
            SelectionDirection: N.SelectionDirection,
            MarkerSeverity: N.MarkerSeverity,
            MarkerTag: N.MarkerTag,
            Uri: o.URI,
            Token: d.Token,
          };
        }
        t.createMonacoBaseAPI = b;
      },
    ),
    V(z[32], G([0, 1, 12]), function (I, t, p) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.PrefixSumComputer = t.PrefixSumIndexOfResult = void 0;
      class P {
        constructor(h, s) {
          this.index = h, this.remainder = s;
        }
      }
      t.PrefixSumIndexOfResult = P;
      class E {
        constructor(h) {
          this.values = h,
            this.prefixSum = new Uint32Array(h.length),
            this.prefixSumValidIndex = new Int32Array(1),
            this.prefixSumValidIndex[0] = -1;
        }
        insertValues(h, s) {
          h = p.toUint32(h);
          const u = this.values, d = this.prefixSum, N = s.length;
          return N === 0
            ? !1
            : (this.values = new Uint32Array(u.length + N),
              this.values.set(u.subarray(0, h), 0),
              this.values.set(u.subarray(h), h + N),
              this.values.set(s, h),
              h - 1 < this.prefixSumValidIndex[0] &&
              (this.prefixSumValidIndex[0] = h - 1),
              this.prefixSum = new Uint32Array(this.values.length),
              this.prefixSumValidIndex[0] >= 0 &&
              this.prefixSum.set(
                d.subarray(0, this.prefixSumValidIndex[0] + 1),
              ),
              !0);
        }
        changeValue(h, s) {
          return h = p.toUint32(h),
            s = p.toUint32(s),
            this.values[h] === s ? !1
            : (this.values[h] = s,
              h - 1 < this.prefixSumValidIndex[0] &&
              (this.prefixSumValidIndex[0] = h - 1),
              !0);
        }
        removeValues(h, s) {
          h = p.toUint32(h), s = p.toUint32(s);
          const u = this.values, d = this.prefixSum;
          if (h >= u.length) return !1;
          let N = u.length - h;
          return s >= N && (s = N),
            s === 0
              ? !1
              : (this.values = new Uint32Array(u.length - s),
                this.values.set(u.subarray(0, h), 0),
                this.values.set(u.subarray(h + s), h),
                this.prefixSum = new Uint32Array(this.values.length),
                h - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = h - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  d.subarray(0, this.prefixSumValidIndex[0] + 1),
                ),
                !0);
        }
        getTotalValue() {
          return this.values.length === 0 ? 0
          : this._getAccumulatedValue(this.values.length - 1);
        }
        getAccumulatedValue(h) {
          return h < 0 ? 0 : (h = p.toUint32(h), this._getAccumulatedValue(h));
        }
        _getAccumulatedValue(h) {
          if (h <= this.prefixSumValidIndex[0]) return this.prefixSum[h];
          let s = this.prefixSumValidIndex[0] + 1;
          s === 0 && (this.prefixSum[0] = this.values[0], s++),
            h >= this.values.length && (h = this.values.length - 1);
          for (let u = s; u <= h; u++) {
            this.prefixSum[u] = this.prefixSum[u - 1] + this.values[u];
          }
          return this.prefixSumValidIndex[0] = Math.max(
            this.prefixSumValidIndex[0],
            h,
          ),
            this.prefixSum[h];
        }
        getIndexOf(h) {
          h = Math.floor(h), this.getTotalValue();
          let s = 0, u = this.values.length - 1, d = 0, N = 0, a = 0;
          for (; s <= u;) {
            if (
              d = s + (u - s) / 2 | 0,
                N = this.prefixSum[d],
                a = N - this.values[d],
                h < a
            ) {
              u = d - 1;
            } else if (h >= N) s = d + 1;
            else break;
          }
          return new P(d, h - a);
        }
      }
      t.PrefixSumComputer = E;
    }),
    V(z[33], G([0, 1, 5, 3, 32]), function (I, t, p, P, E) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.MirrorTextModel = void 0;
      class o {
        constructor(s, u, d, N) {
          this._uri = s,
            this._lines = u,
            this._eol = d,
            this._versionId = N,
            this._lineStarts = null,
            this._cachedTextValue = null;
        }
        dispose() {
          this._lines.length = 0;
        }
        getText() {
          return this._cachedTextValue === null &&
            (this._cachedTextValue = this._lines.join(this._eol)),
            this._cachedTextValue;
        }
        onEvents(s) {
          s.eol && s.eol !== this._eol &&
            (this._eol = s.eol, this._lineStarts = null);
          const u = s.changes;
          for (const d of u) {
            this._acceptDeleteRange(d.range),
              this._acceptInsertText(
                new P.Position(d.range.startLineNumber, d.range.startColumn),
                d.text,
              );
          }
          this._versionId = s.versionId, this._cachedTextValue = null;
        }
        _ensureLineStarts() {
          if (!this._lineStarts) {
            const s = this._eol.length,
              u = this._lines.length,
              d = new Uint32Array(u);
            for (let N = 0; N < u; N++) d[N] = this._lines[N].length + s;
            this._lineStarts = new E.PrefixSumComputer(d);
          }
        }
        _setLineText(s, u) {
          this._lines[s] = u,
            this._lineStarts &&
            this._lineStarts.changeValue(
              s,
              this._lines[s].length + this._eol.length,
            );
        }
        _acceptDeleteRange(s) {
          if (s.startLineNumber === s.endLineNumber) {
            if (s.startColumn === s.endColumn) return;
            this._setLineText(
              s.startLineNumber - 1,
              this._lines[s.startLineNumber - 1].substring(
                0,
                s.startColumn - 1,
              ) + this._lines[s.startLineNumber - 1].substring(s.endColumn - 1),
            );
            return;
          }
          this._setLineText(
            s.startLineNumber - 1,
            this._lines[s.startLineNumber - 1].substring(0, s.startColumn - 1) +
              this._lines[s.endLineNumber - 1].substring(s.endColumn - 1),
          ),
            this._lines.splice(
              s.startLineNumber,
              s.endLineNumber - s.startLineNumber,
            ),
            this._lineStarts &&
            this._lineStarts.removeValues(
              s.startLineNumber,
              s.endLineNumber - s.startLineNumber,
            );
        }
        _acceptInsertText(s, u) {
          if (u.length !== 0) {
            let d = p.splitLines(u);
            if (d.length === 1) {
              this._setLineText(
                s.lineNumber - 1,
                this._lines[s.lineNumber - 1].substring(0, s.column - 1) +
                  d[0] + this._lines[s.lineNumber - 1].substring(s.column - 1),
              );
              return;
            }
            d[d.length - 1] += this._lines[s.lineNumber - 1].substring(
              s.column - 1,
            ),
              this._setLineText(
                s.lineNumber - 1,
                this._lines[s.lineNumber - 1].substring(0, s.column - 1) + d[0],
              );
            let N = new Uint32Array(d.length - 1);
            for (
              let a = 1; a < d.length; a++
            ) {
              this._lines.splice(s.lineNumber + a - 1, 0, d[a]),
                N[a - 1] = d[a].length + this._eol.length;
            }
            this._lineStarts && this._lineStarts.insertValues(s.lineNumber, N);
          }
        }
      }
      t.MirrorTextModel = o;
    });
  var ne = this && this.__awaiter || function (I, t, p, P) {
    function E(o) {
      return o instanceof p ? o : new p(function (h) {
        h(o);
      });
    }
    return new (p || (p = Promise))(function (o, h) {
      function s(N) {
        try {
          d(P.next(N));
        } catch (a) {
          h(a);
        }
      }
      function u(N) {
        try {
          d(P.throw(N));
        } catch (a) {
          h(a);
        }
      }
      function d(N) {
        N.done ? o(N.value) : E(N.value).then(s, u);
      }
      d((P = P.apply(I, t || [])).next());
    });
  };
  V(
    z[35],
    G([0, 1, 14, 10, 2, 13, 3, 6, 26, 33, 27, 28, 29, 31, 11, 8]),
    function (I, t, p, P, E, o, h, s, u, d, N, a, b, _, v, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.create = t.EditorSimpleWorker = void 0;
      class r extends d.MirrorTextModel {
        get uri() {
          return this._uri;
        }
        get version() {
          return this._versionId;
        }
        get eol() {
          return this._eol;
        }
        getValue() {
          return this.getText();
        }
        getLinesContent() {
          return this._lines.slice(0);
        }
        getLineCount() {
          return this._lines.length;
        }
        getLineContent(n) {
          return this._lines[n - 1];
        }
        getWordAtPosition(n, m) {
          let S = N.getWordAtText(
            n.column,
            N.ensureValidWordDefinition(m),
            this._lines[n.lineNumber - 1],
            0,
          );
          return S
            ? new s.Range(
              n.lineNumber,
              S.startColumn,
              n.lineNumber,
              S.endColumn,
            )
            : null;
        }
        words(n) {
          const m = this._lines, S = this._wordenize.bind(this);
          let w = 0, c = "", C = 0, L = [];
          return {
            *[Symbol.iterator]() {
              for (;;) {
                if (C < L.length) {
                  const A = c.substring(L[C].start, L[C].end);
                  C += 1, yield A;
                } else if (w < m.length) c = m[w], L = S(c, n), C = 0, w += 1;
                else break;
              }
            },
          };
        }
        getLineWords(n, m) {
          let S = this._lines[n - 1], w = this._wordenize(S, m), c = [];
          for (const C of w) {
            c.push({
              word: S.substring(C.start, C.end),
              startColumn: C.start + 1,
              endColumn: C.end + 1,
            });
          }
          return c;
        }
        _wordenize(n, m) {
          const S = [];
          let w;
          for (m.lastIndex = 0; (w = m.exec(n)) && w[0].length !== 0;) {
            S.push({ start: w.index, end: w.index + w[0].length });
          }
          return S;
        }
        getValueInRange(n) {
          if (
            n = this._validateRange(n), n.startLineNumber === n.endLineNumber
          ) {
            return this._lines[n.startLineNumber - 1].substring(
              n.startColumn - 1,
              n.endColumn - 1,
            );
          }
          let m = this._eol,
            S = n.startLineNumber - 1,
            w = n.endLineNumber - 1,
            c = [];
          c.push(this._lines[S].substring(n.startColumn - 1));
          for (let C = S + 1; C < w; C++) c.push(this._lines[C]);
          return c.push(this._lines[w].substring(0, n.endColumn - 1)),
            c.join(m);
        }
        offsetAt(n) {
          return n = this._validatePosition(n),
            this._ensureLineStarts(),
            this._lineStarts.getAccumulatedValue(n.lineNumber - 2) +
            (n.column - 1);
        }
        positionAt(n) {
          n = Math.floor(n), n = Math.max(0, n), this._ensureLineStarts();
          let m = this._lineStarts.getIndexOf(n),
            S = this._lines[m.index].length;
          return {
            lineNumber: 1 + m.index,
            column: 1 + Math.min(m.remainder, S),
          };
        }
        _validateRange(n) {
          const m = this._validatePosition({
              lineNumber: n.startLineNumber,
              column: n.startColumn,
            }),
            S = this._validatePosition({
              lineNumber: n.endLineNumber,
              column: n.endColumn,
            });
          return m.lineNumber !== n.startLineNumber ||
              m.column !== n.startColumn || S.lineNumber !== n.endLineNumber ||
              S.column !== n.endColumn
            ? {
              startLineNumber: m.lineNumber,
              startColumn: m.column,
              endLineNumber: S.lineNumber,
              endColumn: S.column,
            }
            : n;
        }
        _validatePosition(n) {
          if (!h.Position.isIPosition(n)) throw new Error("bad position");
          let { lineNumber: m, column: S } = n, w = !1;
          if (m < 1) m = 1, S = 1, w = !0;
          else if (m > this._lines.length) {
            m = this._lines.length, S = this._lines[m - 1].length + 1, w = !0;
          } else {
            let c = this._lines[m - 1].length + 1;
            S < 1 ? (S = 1, w = !0) : S > c && (S = c, w = !0);
          }
          return w ? { lineNumber: m, column: S } : n;
        }
      }
      class g {
        constructor(n, m) {
          this._host = n,
            this._models = Object.create(null),
            this._foreignModuleFactory = m,
            this._foreignModule = null;
        }
        dispose() {
          this._models = Object.create(null);
        }
        _getModel(n) {
          return this._models[n];
        }
        _getModels() {
          let n = [];
          return Object.keys(this._models).forEach((m) =>
            n.push(this._models[m])
          ),
            n;
        }
        acceptNewModel(n) {
          this._models[n.url] = new r(
            o.URI.parse(n.url),
            n.lines,
            n.EOL,
            n.versionId,
          );
        }
        acceptModelChanged(n, m) {
          !this._models[n] || this._models[n].onEvents(m);
        }
        acceptRemovedModel(n) {
          !this._models[n] || delete this._models[n];
        }
        computeDiff(n, m, S, w) {
          return ne(this, void 0, void 0, function* () {
            const c = this._getModel(n), C = this._getModel(m);
            if (!c || !C) return null;
            const L = c.getLinesContent(),
              A = C.getLinesContent(),
              R = new u.DiffComputer(L, A, {
                shouldComputeCharChanges: !0,
                shouldPostProcessCharChanges: !0,
                shouldIgnoreTrimWhitespace: S,
                shouldMakePrettyDiff: !0,
                maxComputationTime: w,
              }).computeDiff(),
              D = R.changes.length > 0 ? !1 : this._modelsAreIdentical(c, C);
            return { quitEarly: R.quitEarly, identical: D, changes: R.changes };
          });
        }
        _modelsAreIdentical(n, m) {
          const S = n.getLineCount(), w = m.getLineCount();
          if (S !== w) return !1;
          for (let c = 1; c <= S; c++) {
            const C = n.getLineContent(c), L = m.getLineContent(c);
            if (C !== L) return !1;
          }
          return !0;
        }
        computeMoreMinimalEdits(n, m) {
          return ne(this, void 0, void 0, function* () {
            const S = this._getModel(n);
            if (!S) return m;
            const w = [];
            let c;
            m = p.mergeSort(m, (C, L) => {
              if (C.range && L.range) {
                return s.Range.compareRangesUsingStarts(C.range, L.range);
              }
              let A = C.range ? 0 : 1, M = L.range ? 0 : 1;
              return A - M;
            });
            for (let { range: C, text: L, eol: A } of m) {
              if (
                typeof A == "number" && (c = A), !(s.Range.isEmpty(C) && !L)
              ) {
                const M = S.getValueInRange(C);
                if (L = L.replace(/\r\n|\n|\r/g, S.eol), M !== L) {
                  if (Math.max(L.length, M.length) > g._diffLimit) {
                    w.push({ range: C, text: L });
                    continue;
                  }
                  const R = P.stringDiff(M, L, !1),
                    D = S.offsetAt(s.Range.lift(C).getStartPosition());
                  for (const T of R) {
                    const $ = S.positionAt(D + T.originalStart),
                      k = S.positionAt(D + T.originalStart + T.originalLength),
                      F = {
                        text: L.substr(T.modifiedStart, T.modifiedLength),
                        range: {
                          startLineNumber: $.lineNumber,
                          startColumn: $.column,
                          endLineNumber: k.lineNumber,
                          endColumn: k.column,
                        },
                      };
                    S.getValueInRange(F.range) !== F.text && w.push(F);
                  }
                }
              }
            }
            return typeof c == "number" &&
              w.push({
                eol: c,
                text: "",
                range: {
                  startLineNumber: 0,
                  startColumn: 0,
                  endLineNumber: 0,
                  endColumn: 0,
                },
              }),
              w;
          });
        }
        computeLinks(n) {
          return ne(this, void 0, void 0, function* () {
            let m = this._getModel(n);
            return m ? a.computeLinks(m) : null;
          });
        }
        textualSuggest(n, m, S, w) {
          return ne(this, void 0, void 0, function* () {
            const c = new i.StopWatch(!0), C = new RegExp(S, w), L = new Set();
            e:
            for (let A of n) {
              const M = this._getModel(A);
              if (!!M) {
                for (let R of M.words(C)) {
                  if (
                    !(R === m || !isNaN(Number(R))) &&
                    (L.add(R), L.size > g._suggestionsLimit)
                  ) {
                    break e;
                  }
                }
              }
            }
            return { words: Array.from(L), duration: c.elapsed() };
          });
        }
        computeWordRanges(n, m, S, w) {
          return ne(this, void 0, void 0, function* () {
            let c = this._getModel(n);
            if (!c) return Object.create(null);
            const C = new RegExp(S, w), L = Object.create(null);
            for (let A = m.startLineNumber; A < m.endLineNumber; A++) {
              let M = c.getLineWords(A, C);
              for (const R of M) {
                if (!!isNaN(Number(R.word))) {
                  let D = L[R.word];
                  D || (D = [], L[R.word] = D),
                    D.push({
                      startLineNumber: A,
                      startColumn: R.startColumn,
                      endLineNumber: A,
                      endColumn: R.endColumn,
                    });
                }
              }
            }
            return L;
          });
        }
        navigateValueSet(n, m, S, w, c) {
          return ne(this, void 0, void 0, function* () {
            let C = this._getModel(n);
            if (!C) return null;
            let L = new RegExp(w, c);
            m.startColumn === m.endColumn &&
              (m = {
                startLineNumber: m.startLineNumber,
                startColumn: m.startColumn,
                endLineNumber: m.endLineNumber,
                endColumn: m.endColumn + 1,
              });
            let A = C.getValueInRange(m),
              M = C.getWordAtPosition({
                lineNumber: m.startLineNumber,
                column: m.startColumn,
              }, L);
            if (!M) return null;
            let R = C.getValueInRange(M);
            return b.BasicInplaceReplace.INSTANCE.navigateValueSet(
              m,
              A,
              M,
              R,
              S,
            );
          });
        }
        loadForeignModule(n, m, S) {
          const w = (L, A) => this._host.fhr(L, A);
          let C = {
            host: v.createProxyObject(S, w),
            getMirrorModels: () => this._getModels(),
          };
          return this._foreignModuleFactory
            ? (this._foreignModule = this._foreignModuleFactory(C, m),
              Promise.resolve(v.getAllMethodNames(this._foreignModule)))
            : new Promise((L, A) => {
              I([n], (M) => {
                this._foreignModule = M.create(C, m),
                  L(v.getAllMethodNames(this._foreignModule));
              }, A);
            });
        }
        fmr(n, m) {
          if (
            !this._foreignModule || typeof this._foreignModule[n] != "function"
          ) {
            return Promise.reject(
              new Error("Missing requestHandler or method: " + n),
            );
          }
          try {
            return Promise.resolve(
              this._foreignModule[n].apply(this._foreignModule, m),
            );
          } catch (S) {
            return Promise.reject(S);
          }
        }
      }
      t.EditorSimpleWorker = g, g._diffLimit = 1e5, g._suggestionsLimit = 1e4;
      function f(l) {
        return new g(l, null);
      }
      t.create = f,
        typeof importScripts == "function" &&
        (E.globals.monaco = _.createMonacoBaseAPI());
    },
  );
  "use strict";
  (function () {
    var I;
    let t = self.MonacoEnvironment,
      p = t && t.baseUrl ? t.baseUrl : "../../../";
    const P = (I = self.trustedTypes) === null || I === void 0
      ? void 0
      : I.createPolicy("amdLoader", { createScriptURL: (s) => s });
    if (typeof self.define != "function" || !self.define.amd) {
      let s = p + "vs/loader.js";
      P && (s = P.createScriptURL(s)), importScripts(s);
    }
    require.config({ baseUrl: p, catchError: !0, trustedTypesPolicy: P });
    let E = function (s) {
        require([s], function (u) {
          setTimeout(function () {
            let d = u.create((N, a) => {
              self.postMessage(N, a);
            }, null);
            for (self.onmessage = (N) => d.onmessage(N.data); h.length > 0;) {
              self.onmessage(h.shift());
            }
          }, 0);
        });
      },
      o = !0,
      h = [];
    self.onmessage = (s) => {
      if (!o) {
        h.push(s);
        return;
      }
      o = !1, E(s.data);
    };
  })();
}).call(this);

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
