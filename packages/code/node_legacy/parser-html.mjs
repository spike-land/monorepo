var e = "undefined" != typeof globalThis
  ? globalThis
  : "undefined" != typeof window
  ? window
  : "undefined" != typeof global
  ? global
  : "undefined" != typeof self
  ? self
  : {};
function t(e, t, n) {
  return e(
    n = {
      path: t,
      exports: {},
      require: function (e, t) {
        return function () {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }(null == t && n.path);
      },
    },
    n.exports,
  ),
    n.exports;
}
var n = t(
    (function (e, t) {
      function n(e) {
        return t.$0 <= e && e <= t.$9;
      }
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.$EOF = 0,
        t.$BSPACE = 8,
        t.$TAB = 9,
        t.$LF = 10,
        t.$VTAB = 11,
        t.$FF = 12,
        t.$CR = 13,
        t.$SPACE = 32,
        t.$BANG = 33,
        t.$DQ = 34,
        t.$HASH = 35,
        t.$$ = 36,
        t.$PERCENT = 37,
        t.$AMPERSAND = 38,
        t.$SQ = 39,
        t.$LPAREN = 40,
        t.$RPAREN = 41,
        t.$STAR = 42,
        t.$PLUS = 43,
        t.$COMMA = 44,
        t.$MINUS = 45,
        t.$PERIOD = 46,
        t.$SLASH = 47,
        t.$COLON = 58,
        t.$SEMICOLON = 59,
        t.$LT = 60,
        t.$EQ = 61,
        t.$GT = 62,
        t.$QUESTION = 63,
        t.$0 = 48,
        t.$7 = 55,
        t.$9 = 57,
        t.$A = 65,
        t.$E = 69,
        t.$F = 70,
        t.$X = 88,
        t.$Z = 90,
        t.$LBRACKET = 91,
        t.$BACKSLASH = 92,
        t.$RBRACKET = 93,
        t.$CARET = 94,
        t.$_ = 95,
        t.$a = 97,
        t.$b = 98,
        t.$e = 101,
        t.$f = 102,
        t.$n = 110,
        t.$r = 114,
        t.$t = 116,
        t.$u = 117,
        t.$v = 118,
        t.$x = 120,
        t.$z = 122,
        t.$LBRACE = 123,
        t.$BAR = 124,
        t.$RBRACE = 125,
        t.$NBSP = 160,
        t.$PIPE = 124,
        t.$TILDA = 126,
        t.$AT = 64,
        t.$BT = 96,
        t.isWhitespace = function (e) {
          return e >= t.$TAB && e <= t.$SPACE || e == t.$NBSP;
        },
        t.isDigit = n,
        t.isAsciiLetter = function (e) {
          return e >= t.$a && e <= t.$z || e >= t.$A && e <= t.$Z;
        },
        t.isAsciiHexDigit = function (e) {
          return e >= t.$a && e <= t.$f || e >= t.$A && e <= t.$F || n(e);
        },
        t.isNewLine = function (e) {
          return e === t.$LF || e === t.$CR;
        },
        t.isOctalDigit = function (e) {
          return t.$0 <= e && e <= t.$7;
        };
    }),
  ),
  r = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      class n {
        constructor(e, t, n) {
          this.filePath = e, this.name = t, this.members = n;
        }
        assertNoMembers() {
          if (this.members.length) {
            throw new Error(
              "Illegal state: symbol without members expected, but got ".concat(
                JSON.stringify(this),
                ".",
              ),
            );
          }
        }
      }
      t.StaticSymbol = n;
      t.StaticSymbolCache = class {
        constructor() {
          this.cache = new Map();
        }
        get(e, t, r) {
          const s = (r = r || []).length ? ".".concat(r.join(".")) : "",
            i = '"'.concat(e, '".').concat(t).concat(s);
          let o = this.cache.get(i);
          return o || (o = new n(e, t, r), this.cache.set(i, o)), o;
        }
      };
    }),
  ),
  s = t(
    (function (t, n) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(n, "__esModule", { value: !0 });
      const r = /-+([a-z0-9])/g;
      function s(e, t, n) {
        const r = e.indexOf(t);
        return -1 == r ? n : [e.slice(0, r).trim(), e.slice(r + 1).trim()];
      }
      function i(e, t, n) {
        return Array.isArray(e)
          ? t.visitArray(e, n)
          : "object" == typeof (r = e) && null !== r &&
              Object.getPrototypeOf(r) === u
          ? t.visitStringMap(e, n)
          : null == e || "string" == typeof e || "number" == typeof e ||
              "boolean" == typeof e
          ? t.visitPrimitive(e, n)
          : t.visitOther(e, n);
        var r;
      }
      n.dashCaseToCamelCase = function (e) {
        return e.replace(r, ((...e) => e[1].toUpperCase()));
      },
        n.splitAtColon = function (e, t) {
          return s(e, ":", t);
        },
        n.splitAtPeriod = function (e, t) {
          return s(e, ".", t);
        },
        n.visitValue = i,
        n.isDefined = function (e) {
          return null != e;
        },
        n.noUndefined = function (e) {
          return void 0 === e ? null : e;
        };
      n.ValueTransformer = class {
        visitArray(e, t) {
          return e.map(((e) => i(e, this, t)));
        }
        visitStringMap(e, t) {
          const n = {};
          return Object.keys(e).forEach(
            ((r) => {
              n[r] = i(e[r], this, t);
            }),
          ),
            n;
        }
        visitPrimitive(e, t) {
          return e;
        }
        visitOther(e, t) {
          return e;
        }
      },
        n.SyncAsync = {
          assertSync: (e) => {
            if (c(e)) {throw new Error(
                "Illegal state: value cannot be a promise",
              );}
            return e;
          },
          then: (e, t) => c(e) ? e.then(t) : t(e),
          all: (e) =>
            e.some(c) ? Promise.all(e) : e,
        },
        n.error = function (e) {
          throw new Error("Internal Error: ".concat(e));
        },
        n.syntaxError = function (e, t) {
          const n = Error(e);
          return n[o] = !0, t && (n[a] = t), n;
        };
      const o = "ngSyntaxError", a = "ngParseErrors";
      n.isSyntaxError = function (e) {
        return e[o];
      },
        n.getParseErrors = function (e) {
          return e[a] || [];
        },
        n.escapeRegExp = function (e) {
          return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        };
      const u = Object.getPrototypeOf({});
      function c(e) {
        return !!e && "function" == typeof e.then;
      }
      n.utf8Encode = function (e) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
          let r = e.charCodeAt(n);
          if (r >= 55296 && r <= 56319 && e.length > n + 1) {
            const t = e.charCodeAt(n + 1);
            t >= 56320 && t <= 57343 &&
              (n++, r = (r - 55296 << 10) + t - 56320 + 65536);
          }
          r <= 127
            ? t += String.fromCharCode(r)
            : r <= 2047
            ? t += String.fromCharCode(r >> 6 & 31 | 192, 63 & r | 128)
            : r <= 65535
            ? t += String.fromCharCode(
              r >> 12 | 224,
              r >> 6 & 63 | 128,
              63 & r | 128,
            )
            : r <= 2097151 &&
              (t += String.fromCharCode(
                r >> 18 & 7 | 240,
                r >> 12 & 63 | 128,
                r >> 6 & 63 | 128,
                63 & r | 128,
              ));
        }
        return t;
      },
        n.stringify = function e(t) {
          if ("string" == typeof t) return t;
          if (t instanceof Array) { 
            return "[" + t.map(e).join(", ") + "]";
          }
          if (null == t) return "" + t;
          if (t.overriddenName) return "".concat(t.overriddenName);
          if (t.name) return "".concat(t.name);
          if (!t.toString) return "object";
          const n = t.toString();
          if (null == n) return "" + n;
          const r = n.indexOf("\n");
          return -1 === r ? n : n.substring(0, r);
        },
        n.resolveForwardRef = function (e) {
          return "function" == typeof e && e.hasOwnProperty("__forward_ref__")
            ? e() : e;
        },
        n.isPromise = c;
      n.Version = class {
        constructor(e) {
          this.full = e;
          const t = e.split(".");
          this.major = t[0],
            this.minor = t[1],
            this.patch = t.slice(2).join(".");
        }
      };
      const l = "undefined" != typeof window && window,
        p = "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope && self,
        D = void 0 !== e && e || l || p;
      n.global = D;
    }),
  ),
  i = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
      function i(e) {
        return e.replace(/\W/g, "_");
      }
      t.sanitizeIdentifier = i;
      let o = 0;
      function a(e) {
        if (!e || !e.reference) return null;
        const t = e.reference;
        if (t instanceof r.StaticSymbol) return t.name;
        if (t.__anonymousType) return t.__anonymousType;
        let n = s.stringify(t);
        return n.indexOf("(") >= 0
          ? (n = "anonymous_".concat(o++), t.__anonymousType = n)
          : n = i(n),
          n;
      }
      var u;
      t.identifierName = a,
        t.identifierModuleUrl = function (e) {
          const t = e.reference;
          return t instanceof r.StaticSymbol
            ? t.filePath
            : "./".concat(s.stringify(t));
        },
        t.viewClassName = function (e, t) {
          return "View_".concat(a({ reference: e }), "_").concat(t);
        },
        t.rendererTypeName = function (e) {
          return "RenderType_".concat(a({ reference: e }));
        },
        t.hostViewClassName = function (e) {
          return "HostView_".concat(a({ reference: e }));
        },
        t.componentFactoryName = function (e) {
          return "".concat(a({ reference: e }), "NgFactory");
        },
        function (e) {
          e[e.Pipe = 0] = "Pipe",
            e[e.Directive = 1] = "Directive",
            e[e.NgModule = 2] = "NgModule",
            e[e.Injectable = 3] = "Injectable";
        }(u = t.CompileSummaryKind || (t.CompileSummaryKind = {})),
        t.tokenName = function (e) {
          return null != e.value ? i(e.value) : a(e.identifier);
        },
        t.tokenReference = function (e) {
          return null != e.identifier ? e.identifier.reference : e.value;
        };
      t.CompileStylesheetMetadata = class {
        constructor({ moduleUrl: e, styles: t, styleUrls: n } = {}) {
          this.moduleUrl = e || null, this.styles = l(t), this.styleUrls = l(n);
        }
      };
      t.CompileTemplateMetadata = class {
        constructor(
          {
            encapsulation: e,
            template: t,
            templateUrl: n,
            htmlAst: r,
            styles: s,
            styleUrls: i,
            externalStylesheets: o,
            animations: a,
            ngContentSelectors: u,
            interpolation: c,
            isInline: D,
            preserveWhitespaces: h,
          },
        ) {
          if (
            this.encapsulation = e,
              this.template = t,
              this.templateUrl = n,
              this.htmlAst = r,
              this.styles = l(s),
              this.styleUrls = l(i),
              this.externalStylesheets = l(o),
              this.animations = a ? p(a) : [],
              this.ngContentSelectors = u || [],
              c && 2 != c.length
          ) {
            throw new Error(
              "'interpolation' should have a start and an end symbol.",
            );
          }
          this.interpolation = c,
            this.isInline = D,
            this.preserveWhitespaces = h;
        }
        toSummary() {
          return {
            ngContentSelectors: this.ngContentSelectors,
            encapsulation: this.encapsulation,
            styles: this.styles,
            animations: this.animations,
          };
        }
      };
      class c {
        static create(
          {
            isHost: e,
            type: t,
            isComponent: r,
            selector: i,
            exportAs: o,
            changeDetection: a,
            inputs: u,
            outputs: l,
            host: p,
            providers: D,
            viewProviders: h,
            queries: d,
            guards: f,
            viewQueries: m,
            entryComponents: g,
            template: E,
            componentViewType: C,
            rendererType: T,
            componentFactory: y,
          },
        ) {
          const S = {}, _ = {}, b = {};
          null != p && Object.keys(p).forEach(
            ((e) => {
              const t = p[e], r = e.match(n);
              null === r ? b[e] = t : null != r[1]
                ? _[r[1]] = t
                : null != r[2] && (S[r[2]] = t);
            }),
          );
          const F = {};
          null != u && u.forEach(
            ((e) => {
              const t = s.splitAtColon(e, [e, e]);
              F[t[0]] = t[1];
            }),
          );
          const A = {};
          return null != l && l.forEach(
            ((e) => {
              const t = s.splitAtColon(e, [e, e]);
              A[t[0]] = t[1];
            }),
          ),
            new c({
              isHost: e,
              type: t,
              isComponent: !!r,
              selector: i,
              exportAs: o,
              changeDetection: a,
              inputs: F,
              outputs: A,
              hostListeners: S,
              hostProperties: _,
              hostAttributes: b,
              providers: D,
              viewProviders: h,
              queries: d,
              guards: f,
              viewQueries: m,
              entryComponents: g,
              template: E,
              componentViewType: C,
              rendererType: T,
              componentFactory: y,
            });
        }
        constructor(
          {
            isHost: e,
            type: t,
            isComponent: n,
            selector: r,
            exportAs: s,
            changeDetection: i,
            inputs: o,
            outputs: a,
            hostListeners: u,
            hostProperties: c,
            hostAttributes: p,
            providers: D,
            viewProviders: h,
            queries: d,
            guards: f,
            viewQueries: m,
            entryComponents: g,
            template: E,
            componentViewType: C,
            rendererType: T,
            componentFactory: y,
          },
        ) {
          this.isHost = !!e,
            this.type = t,
            this.isComponent = n,
            this.selector = r,
            this.exportAs = s,
            this.changeDetection = i,
            this.inputs = o,
            this.outputs = a,
            this.hostListeners = u,
            this.hostProperties = c,
            this.hostAttributes = p,
            this.providers = l(D),
            this.viewProviders = l(h),
            this.queries = l(d),
            this.guards = f,
            this.viewQueries = l(m),
            this.entryComponents = l(g),
            this.template = E,
            this.componentViewType = C,
            this.rendererType = T,
            this.componentFactory = y;
        }
        toSummary() {
          return {
            summaryKind: u.Directive,
            type: this.type,
            isComponent: this.isComponent,
            selector: this.selector,
            exportAs: this.exportAs,
            inputs: this.inputs,
            outputs: this.outputs,
            hostListeners: this.hostListeners,
            hostProperties: this.hostProperties,
            hostAttributes: this.hostAttributes,
            providers: this.providers,
            viewProviders: this.viewProviders,
            queries: this.queries,
            guards: this.guards,
            viewQueries: this.viewQueries,
            entryComponents: this.entryComponents,
            changeDetection: this.changeDetection,
            template: this.template && this.template.toSummary(),
            componentViewType: this.componentViewType,
            rendererType: this.rendererType,
            componentFactory: this.componentFactory,
          };
        }
      }
      t.CompileDirectiveMetadata = c;
      t.CompilePipeMetadata = class {
        constructor({ type: e, name: t, pure: n }) {
          this.type = e, this.name = t, this.pure = !!n;
        }
        toSummary() {
          return {
            summaryKind: u.Pipe,
            type: this.type,
            name: this.name,
            pure: this.pure,
          };
        }
      };
      t.CompileShallowModuleMetadata = class {};
      t.CompileNgModuleMetadata = class {
        constructor(
          {
            type: e,
            providers: t,
            declaredDirectives: n,
            exportedDirectives: r,
            declaredPipes: s,
            exportedPipes: i,
            entryComponents: o,
            bootstrapComponents: a,
            importedModules: u,
            exportedModules: c,
            schemas: p,
            transitiveModule: D,
            id: h,
          },
        ) {
          this.type = e || null,
            this.declaredDirectives = l(n),
            this.exportedDirectives = l(r),
            this.declaredPipes = l(s),
            this.exportedPipes = l(i),
            this.providers = l(t),
            this.entryComponents = l(o),
            this.bootstrapComponents = l(a),
            this.importedModules = l(u),
            this.exportedModules = l(c),
            this.schemas = l(p),
            this.id = h || null,
            this.transitiveModule = D || null;
        }
        toSummary() {
          const e = this.transitiveModule;
          return {
            summaryKind: u.NgModule,
            type: this.type,
            entryComponents: e.entryComponents,
            providers: e.providers,
            modules: e.modules,
            exportedDirectives: e.exportedDirectives,
            exportedPipes: e.exportedPipes,
          };
        }
      };
      function l(e) {
        return e || [];
      }
      t.TransitiveCompileNgModuleMetadata = class {
        constructor() {
          this.directivesSet = new Set(),
            this.directives = [],
            this.exportedDirectivesSet = new Set(),
            this.exportedDirectives = [],
            this.pipesSet = new Set(),
            this.pipes = [],
            this.exportedPipesSet = new Set(),
            this.exportedPipes = [],
            this.modulesSet = new Set(),
            this.modules = [],
            this.entryComponentsSet = new Set(),
            this.entryComponents = [],
            this.providers = [];
        }
        addProvider(e, t) {
          this.providers.push({ provider: e, module: t });
        }
        addDirective(e) {
          this.directivesSet.has(e.reference) ||
            (this.directivesSet.add(e.reference), this.directives.push(e));
        }
        addExportedDirective(e) {
          this.exportedDirectivesSet.has(e.reference) ||
            (this.exportedDirectivesSet.add(e.reference),
              this.exportedDirectives.push(e));
        }
        addPipe(e) {
          this.pipesSet.has(e.reference) ||
            (this.pipesSet.add(e.reference), this.pipes.push(e));
        }
        addExportedPipe(e) {
          this.exportedPipesSet.has(e.reference) ||
            (this.exportedPipesSet.add(e.reference),
              this.exportedPipes.push(e));
        }
        addModule(e) {
          this.modulesSet.has(e.reference) ||
            (this.modulesSet.add(e.reference), this.modules.push(e));
        }
        addEntryComponent(e) {
          this.entryComponentsSet.has(e.componentType) ||
            (this.entryComponentsSet.add(e.componentType),
              this.entryComponents.push(e));
        }
      };
      function p(e) {
        return e.reduce(
          ((e, t) => {
            const n = Array.isArray(t) ? p(t) : t;
            return e.concat(n);
          }),
          [],
        );
      }
      function D(e) {
        return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
      }
      t.ProviderMeta = class {
        constructor(
          e,
          {
            useClass: t,
            useValue: n,
            useExisting: r,
            useFactory: s,
            deps: i,
            multi: o,
          },
        ) {
          this.token = e,
            this.useClass = t || null,
            this.useValue = n,
            this.useExisting = r,
            this.useFactory = s || null,
            this.dependencies = i || null,
            this.multi = !!o;
        }
      },
        t.flatten = p,
        t.templateSourceUrl = function (e, t, n) {
          let s;
          return s = n.isInline
            ? t.type.reference instanceof r.StaticSymbol
              ? "".concat(t.type.reference.filePath, ".").concat(
                t.type.reference.name,
                ".html",
              )
              : "".concat(a(e), "/").concat(a(t.type), ".html")
            : n.templateUrl,
            t.type.reference instanceof r.StaticSymbol ? s : D(s);
        },
        t.sharedStylesheetJitUrl = function (e, t) {
          const n = e.moduleUrl.split(/\/\\/g), r = n[n.length - 1];
          return D("css/".concat(t).concat(r, ".ngstyle.js"));
        },
        t.ngModuleJitUrl = function (e) {
          return D("".concat(a(e.type), "/module.ngfactory.js"));
        },
        t.templateJitUrl = function (e, t) {
          return D("".concat(a(e), "/").concat(a(t.type), ".ngfactory.js"));
        };
    }),
  ),
  o = t(
    (function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      class r {
        constructor(e, t, n, r) {
          this.file = e, this.offset = t, this.line = n, this.col = r;
        }
        toString() {
          return null != this.offset
            ? "".concat(this.file.url, "@").concat(this.line, ":").concat(
              this.col,
            )
            : this.file.url;
        }
        moveBy(e) {
          const t = this.file.content, s = t.length;
          let i = this.offset, o = this.line, a = this.col;
          for (; i > 0 && e < 0;) {
            i--, e++;
            if (t.charCodeAt(i) == n.$LF) {
              o--;
              const e = t.substr(0, i - 1).lastIndexOf(
                String.fromCharCode(n.$LF),
              );
              a = e > 0 ? i - e : i;
            } else a--;
          }
          for (; i < s && e > 0;) {
            const r = t.charCodeAt(i);
            i++, e--, r == n.$LF ? (o++, a = 0) : a++;
          }
          return new r(this.file, i, o, a);
        }
        getContext(e, t) {
          const n = this.file.content;
          let r = this.offset;
          if (null != r) {
            r > n.length - 1 && (r = n.length - 1);
            let s = r, i = 0, o = 0;
            for (; i < e && r > 0 && (r--, i++, "\n" != n[r] || ++o != t););
            for (
              i = 0, o = 0;
              i < e && s < n.length - 1 && (s++, i++, "\n" != n[s] || ++o != t);
            );
            return {
              before: n.substring(r, this.offset),
              after: n.substring(this.offset, s + 1),
            };
          }
          return null;
        }
      }
      t.ParseLocation = r;
      class s {
        constructor(e, t) {
          this.content = e, this.url = t;
        }
      }
      t.ParseSourceFile = s;
      class o {
        constructor(e, t, n = null) {
          this.start = e, this.end = t, this.details = n;
        }
        toString() {
          return this.start.file.content.substring(
            this.start.offset,
            this.end.offset,
          );
        }
      }
      var a;
      t.ParseSourceSpan = o,
        t.EMPTY_PARSE_LOCATION = new r(new s("", ""), 0, 0, 0),
        t.EMPTY_SOURCE_SPAN = new o(
          t.EMPTY_PARSE_LOCATION,
          t.EMPTY_PARSE_LOCATION,
        ),
        function (e) {
          e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR";
        }(a = t.ParseErrorLevel || (t.ParseErrorLevel = {}));
      t.ParseError = class {
        constructor(e, t, n = a.ERROR) {
          this.span = e, this.msg = t, this.level = n;
        }
        contextualMessage() {
          const e = this.span.start.getContext(100, 3);
          return e
            ? "".concat(this.msg, ' ("').concat(e.before, "[").concat(
              a[this.level],
              " ->]",
            ).concat(e.after, '")')
            : this.msg;
        }
        toString() {
          const e = this.span.details ? ", ".concat(this.span.details) : "";
          return "".concat(this.contextualMessage(), ": ").concat(
            this.span.start,
          ).concat(e);
        }
      },
        t.typeSourceSpan = function (e, t) {
          const n = i.identifierModuleUrl(t),
            a = null != n
              ? "in ".concat(e, " ").concat(i.identifierName(t), " in ").concat(
                n,
              )
              : "in ".concat(e, " ").concat(i.identifierName(t)),
            u = new s("", a);
          return new o(new r(u, -1, -1, -1), new r(u, -1, -1, -1));
        },
        t.r3JitTypeSourceSpan = function (e, t, n) {
          const i = "in ".concat(e, " ").concat(t, " in ").concat(n),
            a = new s("", i);
          return new o(new r(a, -1, -1, -1), new r(a, -1, -1, -1));
        };
    }),
  ),
  a = (e) => {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
function u(e) {
  return { type: "concat", parts: e };
}
function c(e) {
  return { type: "indent", contents: e };
}
function l(e, t) {
  return { type: "align", contents: t, n: e };
}
function p(e, t) {
  return {
    type: "group",
    id: (t = t || {}).id,
    contents: e,
    break: !!t.shouldBreak,
    expandedStates: t.expandedStates,
  };
}
const D = { type: "break-parent" },
  h = u([{ type: "line", hard: !0 }, D]),
  d = u([{ type: "line", hard: !0, literal: !0 }, D]);
var f = {
    concat: u,
    join: function (e, t) {
      const n = [];
      for (let r = 0; r < t.length; r++) 0 !== r && n.push(e), n.push(t[r]);
      return u(n);
    },
    line: { type: "line" },
    softline: { type: "line", soft: !0 },
    hardline: h,
    literalline: d,
    group: p,
    conditionalGroup: function (e, t) {
      return p(e[0], Object.assign({}, t, { expandedStates: e }));
    },
    fill: function (e) {
      return { type: "fill", parts: e };
    },
    lineSuffix: function (e) {
      return { type: "line-suffix", contents: e };
    },
    lineSuffixBoundary: { type: "line-suffix-boundary" },
    cursor: { type: "cursor", placeholder: Symbol("cursor") },
    breakParent: D,
    ifBreak: function (e, t, n) {
      return {
        type: "if-break",
        breakContents: e,
        flatContents: t,
        groupId: (n = n || {}).groupId,
      };
    },
    trim: { type: "trim" },
    indent: c,
    align: l,
    addAlignmentToDoc: function (e, t, n) {
      let r = e;
      if (t > 0) {
        for (let e = 0; e < Math.floor(t / n); ++e) r = c(r);
        r = l(t % n, r), r = l(-1 / 0, r);
      }
      return r;
    },
    markAsRoot: function (e) {
      return l({ type: "root" }, e);
    },
    dedentToRoot: function (e) {
      return l(-1 / 0, e);
    },
    dedent: function (e) {
      return l(-1, e);
    },
  },
  m = (e) =>
    "string" == typeof e
      ? e.replace(
        (({ onlyFirst: e = !1 } = {}) => {
          const t = [
            "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
            "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
          ].join("|");
          return new RegExp(t, e ? void 0 : "g");
        })(),
        "",
      )
      : e;
const g = (e) =>
  !Number.isNaN(e) &&
  (e >= 4352 &&
    (e <= 4447 || 9001 === e || 9002 === e ||
      11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 ||
      19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 ||
      44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 ||
      65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 ||
      65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 ||
      110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 ||
      131072 <= e && e <= 262141));
var E = g, C = g;
E.default = C;
const T = (e) => {
  if (
    "string" !=
      typeof (e = e.replace(
        /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,
        "  ",
      )) || 0 === e.length
  ) {
    return 0;
  }
  e = m(e);
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.codePointAt(n);
    r <= 31 || r >= 127 && r <= 159 ||
      (r >= 768 && r <= 879 || (r > 65535 && n++, t += E(r) ? 2 : 1));
  }
  return t;
};
var y = T, S = T;
y.default = S;
function _(e, t) {
  return t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    );
}
var b = "undefined" != typeof global
  ? global
  : "undefined" != typeof self
  ? self
  : "undefined" != typeof window
  ? window
  : {};
function F() {
  throw new Error("setTimeout has not been defined");
}
function A() {
  throw new Error("clearTimeout has not been defined");
}
var v = F, w = A;
function k(e) {
  if (v === setTimeout) return setTimeout(e, 0);
  if ((v === F || !v) && setTimeout) return v = setTimeout, setTimeout(e, 0);
  try {
    return v(e, 0);
  } catch (t) {
    try {
      return v.call(null, e, 0);
    } catch (t) {
      return v.call(this, e, 0);
    }
  }
}
"function" == typeof b.setTimeout && (v = setTimeout),
  "function" == typeof b.clearTimeout && (w = clearTimeout);
var N, x = [], O = !1, R = -1;
function L() {
  O && N && (O = !1, N.length ? x = N.concat(x) : R = -1, x.length && P());
}
function P() {
  if (!O) {
    var e = k(L);
    O = !0;
    for (var t = x.length; t;) {
      for (N = x, x = []; ++R < t;) N && N[R].run();
      R = -1, t = x.length;
    }
    N = null,
      O = !1,
      function (e) {
        if (w === clearTimeout) return clearTimeout(e);
        if ((w === A || !w) && clearTimeout) {
          return w = clearTimeout, clearTimeout(e);
        }
        try {
          w(e);
        } catch (t) {
          try {
            return w.call(null, e);
          } catch (t) {
            return w.call(this, e);
          }
        }
      }(e);
  }
}
function B(e, t) {
  this.fun = e, this.array = t;
}
B.prototype.run = function () {
  this.fun.apply(null, this.array);
};
function I() {}
var q = I, $ = I, M = I, U = I, G = I, V = I, j = I;
var H = b.performance || {},
  X = H.now || H.mozNow || H.msNow || H.oNow || H.webkitNow || function () {
    return (new Date()).getTime();
  };
var z = new Date();
var W = {
  nextTick: function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) {for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }}
    x.push(new B(e, t)), 1 !== x.length || O || k(P);
  },
  title: "browser",
  browser: !0,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: q,
  addListener: $,
  once: M,
  off: U,
  removeListener: G,
  removeAllListeners: V,
  emit: j,
  binding: function (e) {
    throw new Error("process.binding is not supported");
  },
  cwd: function () {
    return "/";
  },
  chdir: function (e) {
    throw new Error("process.chdir is not supported");
  },
  umask: function () {
    return 0;
  },
  hrtime: function (e) {
    var t = .001 * X.call(H), n = Math.floor(t), r = Math.floor(t % 1 * 1e9);
    return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r];
  },
  platform: "browser",
  release: {},
  config: {},
  uptime: function () {
    return (new Date() - z) / 1e3;
  },
};
var Q =
  "object" == typeof W && W.env && W.env.NODE_DEBUG &&
    /\bsemver\b/i.test(W.env.NODE_DEBUG)
    ? (...e) => console.error("SEMVER", ...e)
    : () => {};
var Y = {
    SEMVER_SPEC_VERSION: "2.0.0",
    MAX_LENGTH: 256,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH: 16,
  },
  J = t(
    (function (e, t) {
      const { MAX_SAFE_COMPONENT_LENGTH: n } = Y,
        r = (t = e.exports = {}).re = [],
        s = t.src = [],
        i = t.t = {};
      let o = 0;
      const a = (e, t, n) => {
        const a = o++;
        Q(a, t), i[e] = a, s[a] = t, r[a] = new RegExp(t, n ? "g" : void 0);
      };
      a("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        a("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
        a("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
        a(
          "MAINVERSION",
          "(".concat(s[i.NUMERICIDENTIFIER], ")\\.") +
            "(".concat(s[i.NUMERICIDENTIFIER], ")\\.") +
            "(".concat(s[i.NUMERICIDENTIFIER], ")"),
        ),
        a(
          "MAINVERSIONLOOSE",
          "(".concat(s[i.NUMERICIDENTIFIERLOOSE], ")\\.") +
            "(".concat(s[i.NUMERICIDENTIFIERLOOSE], ")\\.") +
            "(".concat(s[i.NUMERICIDENTIFIERLOOSE], ")"),
        ),
        a(
          "PRERELEASEIDENTIFIER",
          "(?:".concat(s[i.NUMERICIDENTIFIER], "|").concat(
            s[i.NONNUMERICIDENTIFIER],
            ")",
          ),
        ),
        a(
          "PRERELEASEIDENTIFIERLOOSE",
          "(?:".concat(s[i.NUMERICIDENTIFIERLOOSE], "|").concat(
            s[i.NONNUMERICIDENTIFIER],
            ")",
          ),
        ),
        a(
          "PRERELEASE",
          "(?:-(".concat(s[i.PRERELEASEIDENTIFIER], "(?:\\.").concat(
            s[i.PRERELEASEIDENTIFIER],
            ")*))",
          ),
        ),
        a(
          "PRERELEASELOOSE",
          "(?:-?(".concat(s[i.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(
            s[i.PRERELEASEIDENTIFIERLOOSE],
            ")*))",
          ),
        ),
        a("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
        a(
          "BUILD",
          "(?:\\+(".concat(s[i.BUILDIDENTIFIER], "(?:\\.").concat(
            s[i.BUILDIDENTIFIER],
            ")*))",
          ),
        ),
        a(
          "FULLPLAIN",
          "v?".concat(s[i.MAINVERSION]).concat(s[i.PRERELEASE], "?").concat(
            s[i.BUILD],
            "?",
          ),
        ),
        a("FULL", "^".concat(s[i.FULLPLAIN], "$")),
        a(
          "LOOSEPLAIN",
          "[v=\\s]*".concat(s[i.MAINVERSIONLOOSE]).concat(
            s[i.PRERELEASELOOSE],
            "?",
          ).concat(s[i.BUILD], "?"),
        ),
        a("LOOSE", "^".concat(s[i.LOOSEPLAIN], "$")),
        a("GTLT", "((?:<|>)?=?)"),
        a(
          "XRANGEIDENTIFIERLOOSE",
          "".concat(s[i.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"),
        ),
        a("XRANGEIDENTIFIER", "".concat(s[i.NUMERICIDENTIFIER], "|x|X|\\*")),
        a(
          "XRANGEPLAIN",
          "[v=\\s]*(".concat(s[i.XRANGEIDENTIFIER], ")") +
            "(?:\\.(".concat(s[i.XRANGEIDENTIFIER], ")") +
            "(?:\\.(".concat(s[i.XRANGEIDENTIFIER], ")") +
            "(?:".concat(s[i.PRERELEASE], ")?").concat(s[i.BUILD], "?") +
            ")?)?",
        ),
        a(
          "XRANGEPLAINLOOSE",
          "[v=\\s]*(".concat(s[i.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:\\.(".concat(s[i.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:\\.(".concat(s[i.XRANGEIDENTIFIERLOOSE], ")") +
            "(?:".concat(s[i.PRERELEASELOOSE], ")?").concat(s[i.BUILD], "?") +
            ")?)?",
        ),
        a(
          "XRANGE",
          "^".concat(s[i.GTLT], "\\s*").concat(s[i.XRANGEPLAIN], "$"),
        ),
        a(
          "XRANGELOOSE",
          "^".concat(s[i.GTLT], "\\s*").concat(s[i.XRANGEPLAINLOOSE], "$"),
        ),
        a(
          "COERCE",
          "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") +
            "(?:\\.(\\d{1,".concat(n, "}))?") +
            "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:$|[^\\d])",
        ),
        a("COERCERTL", s[i.COERCE], !0),
        a("LONETILDE", "(?:~>?)"),
        a("TILDETRIM", "(\\s*)".concat(s[i.LONETILDE], "\\s+"), !0),
        t.tildeTrimReplace = "$1~",
        a("TILDE", "^".concat(s[i.LONETILDE]).concat(s[i.XRANGEPLAIN], "$")),
        a(
          "TILDELOOSE",
          "^".concat(s[i.LONETILDE]).concat(s[i.XRANGEPLAINLOOSE], "$"),
        ),
        a("LONECARET", "(?:\\^)"),
        a("CARETTRIM", "(\\s*)".concat(s[i.LONECARET], "\\s+"), !0),
        t.caretTrimReplace = "$1^",
        a("CARET", "^".concat(s[i.LONECARET]).concat(s[i.XRANGEPLAIN], "$")),
        a(
          "CARETLOOSE",
          "^".concat(s[i.LONECARET]).concat(s[i.XRANGEPLAINLOOSE], "$"),
        ),
        a(
          "COMPARATORLOOSE",
          "^".concat(s[i.GTLT], "\\s*(").concat(s[i.LOOSEPLAIN], ")$|^$"),
        ),
        a(
          "COMPARATOR",
          "^".concat(s[i.GTLT], "\\s*(").concat(s[i.FULLPLAIN], ")$|^$"),
        ),
        a(
          "COMPARATORTRIM",
          "(\\s*)".concat(s[i.GTLT], "\\s*(").concat(s[i.LOOSEPLAIN], "|")
            .concat(s[i.XRANGEPLAIN], ")"),
          !0,
        ),
        t.comparatorTrimReplace = "$1$2$3",
        a(
          "HYPHENRANGE",
          "^\\s*(".concat(s[i.XRANGEPLAIN], ")") + "\\s+-\\s+" +
            "(".concat(s[i.XRANGEPLAIN], ")") + "\\s*$",
        ),
        a(
          "HYPHENRANGELOOSE",
          "^\\s*(".concat(s[i.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" +
            "(".concat(s[i.XRANGEPLAINLOOSE], ")") + "\\s*$",
        ),
        a("STAR", "(<|>)?=?\\s*\\*"),
        a("GTE0", "^\\s*>=\\s*0.0.0\\s*$"),
        a("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
    }),
  );
const Z = /^[0-9]+$/,
  K = (e, t) => {
    const n = Z.test(e), r = Z.test(t);
    return n && r && (e = +e, t = +t),
      e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
  };
var ee = { compareIdentifiers: K, rcompareIdentifiers: (e, t) => K(t, e) };
const { MAX_LENGTH: te, MAX_SAFE_INTEGER: ne } = Y,
  { re: re, t: se } = J,
  { compareIdentifiers: ie } = ee;
class oe {
  constructor(e, t) {
    if (
      t && "object" == typeof t || (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof oe
    ) {
      if (
        e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease
      ) {
        return e;
      }
      e = e.version;
    } else if ("string" != typeof e) {
      throw new TypeError("Invalid Version: ".concat(e));
    }
    if (e.length > te) {
      throw new TypeError("version is longer than ".concat(te, " characters"));
    }
    Q("SemVer", e, t),
      this.options = t,
      this.loose = !!t.loose,
      this.includePrerelease = !!t.includePrerelease;
    const n = e.trim().match(t.loose ? re[se.LOOSE] : re[se.FULL]);
    if (!n) throw new TypeError("Invalid Version: ".concat(e));
    if (
      this.raw = e,
        this.major = +n[1],
        this.minor = +n[2],
        this.patch = +n[3],
        this.major > ne || this.major < 0
    ) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > ne || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > ne || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    n[4]
      ? this.prerelease = n[4].split(".").map(
        ((e) => {
          if (/^[0-9]+$/.test(e)) {
            const t = +e;
            if (t >= 0 && t < ne) return t;
          }
          return e;
        }),
      )
      : this.prerelease = [],
      this.build = n[5] ? n[5].split(".") : [],
      this.format();
  }
  format() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".")
      .concat(this.patch),
      this.prerelease.length &&
      (this.version += "-".concat(this.prerelease.join("."))),
      this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (
      Q("SemVer.compare", this.version, this.options, e), !(e instanceof oe)
    ) {
      if ("string" == typeof e && e === this.version) return 0;
      e = new oe(e, this.options);
    }
    return e.version === this.version
      ? 0
      : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof oe || (e = new oe(e, this.options)),
      ie(this.major, e.major) || ie(this.minor, e.minor) ||
      ie(this.patch, e.patch);
  }
  comparePre(e) {
    if (
      e instanceof oe || (e = new oe(e, this.options)),
        this.prerelease.length && !e.prerelease.length
    ) {
      return -1;
    }
    if (!this.prerelease.length && e.prerelease.length) return 1;
    if (!this.prerelease.length && !e.prerelease.length) return 0;
    let t = 0;
    do {
      const n = this.prerelease[t], r = e.prerelease[t];
      if (
        Q("prerelease compare", t, n, r), void 0 === n && void 0 === r
      ) {
        return 0;
      }
      if (void 0 === r) return 1;
      if (void 0 === n) return -1;
      if (n !== r) return ie(n, r);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof oe || (e = new oe(e, this.options));
    let t = 0;
    do {
      const n = this.build[t], r = e.build[t];
      if (
        Q("prerelease compare", t, n, r), void 0 === n && void 0 === r
      ) {
        return 0;
      }
      if (void 0 === r) return 1;
      if (void 0 === n) return -1;
      if (n !== r) return ie(n, r);
    } while (++t);
  }
  inc(e, t) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0,
          this.patch = 0,
          this.minor = 0,
          this.major++,
          this.inc("pre", t);
        break;
      case "preminor":
        this.prerelease.length = 0,
          this.patch = 0,
          this.minor++,
          this.inc("pre", t);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
        break;
      case "prerelease":
        0 === this.prerelease.length && this.inc("patch", t),
          this.inc("pre", t);
        break;
      case "major":
        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length ||
        this.major++,
          this.minor = 0,
          this.patch = 0,
          this.prerelease = [];
        break;
      case "minor":
        0 === this.patch && 0 !== this.prerelease.length || this.minor++,
          this.patch = 0,
          this.prerelease = [];
        break;
      case "patch":
        0 === this.prerelease.length && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (0 === this.prerelease.length) this.prerelease = [0];
        else {
          let e = this.prerelease.length;
          for (; --e >= 0;) {
            "number" == typeof this.prerelease[e] &&
              (this.prerelease[e]++, e = -2);
          }
          -1 === e && this.prerelease.push(0);
        }
        t &&
          (this.prerelease[0] === t
            ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
            : this.prerelease = [t, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(e));
    }
    return this.format(), this.raw = this.version, this;
  }
}
var ae = oe;
var ue = (e, t, n) => new ae(e, n).compare(new ae(t, n));
var ce = (e, t, n) => ue(e, t, n) < 0;
var le = (e, t, n) => ue(e, t, n) >= 0,
  pe = "2.2.1",
  De = t(
    (function (e, t) {
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      }
      function r() {
        return "undefined" != typeof WeakMap
          ? new WeakMap()
          : {
            add: n,
            delete: n,
            get: n,
            set: n,
            has: function (e) {
              return !1;
            },
          };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = Object.prototype.hasOwnProperty,
        i = function (e, t) {
          return s.call(e, t);
        };
      function o(e, t) {
        for (var n in t) i(t, n) && (e[n] = t[n]);
        return e;
      }
      var a = /^[ \t]*(?:\r\n|\r|\n)/,
        u = /(?:\r\n|\r|\n)[ \t]*$/,
        c = /^(?:[\r\n]|$)/,
        l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function D(e, t, n) {
        var r = 0, s = e[0].match(l);
        s && (r = s[1].length);
        var i = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
        t && (e = e.slice(1));
        var o = n.newline,
          c = n.trimLeadingNewline,
          p = n.trimTrailingNewline,
          D = "string" == typeof o,
          h = e.length;
        return e.map(
          (function (e, t) {
            return e = e.replace(i, "$1"),
              0 === t && c && (e = e.replace(a, "")),
              t === h - 1 && p && (e = e.replace(u, "")),
              D && (e = e.replace(
                /\r\n|\n|\r/g,
                (function (e) {
                  return o;
                }),
              )),
              e;
          }),
        );
      }
      function h(e, t) {
        for (var n = "", r = 0, s = e.length; r < s; r++) {n += e[r],
            r < s - 1 && (n += t[r]);}
        return n;
      }
      function d(e) {
        return i(e, "raw") && i(e, "length");
      }
      var f = function e(t) {
        var n = r(), s = r();
        return o(
          (function r(i) {
            for (var a = [], u = 1; u < arguments.length; u++) {a[u - 1] =
                arguments[u];}
            if (d(i)) {
              var l = i,
                m = (a[0] === r || a[0] === f) && p.test(l[0]) && c.test(l[1]),
                g = m ? s : n,
                E = g.get(l);
              if (E || (E = D(l, m, t), g.set(l, E)), 0 === a.length) {
                return E[0];
              }
              var C = h(E, m ? a.slice(1) : a);
              return C;
            }
            return e(o(o({}, t), i || {}));
          }),
          {
            string: function (e) {
              return D([e], !1, t)[0];
            },
          },
        );
      }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
      t.outdent = f, t.default = f;
      try {
        e.exports = f,
          Object.defineProperty(f, "__esModule", { value: !0 }),
          f.default = f,
          f.outdent = f;
      } catch (e) {}
    }),
  );
function he() {
  const e = _([
    "\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    ",
  ]);
  return he = function () {
    return e;
  },
    e;
}
function de() {
  const e = _([
    "\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    ",
  ]);
  return de = function () {
    return e;
  },
    e;
}
function fe() {
  const e = _([
    "\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    ",
  ]);
  return fe = function () {
    return e;
  },
    e;
}
function me() {
  const e = _([
    "\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    ",
  ]);
  return me = function () {
    return e;
  },
    e;
}
function ge() {
  const e = _([
    "\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        ",
  ]);
  return ge = function () {
    return e;
  },
    e;
}
function Ee() {
  const e = _([
    "\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    ",
  ]);
  return Ee = function () {
    return e;
  },
    e;
}
const { outdent: Ce } = De,
  Te = {
    cursorOffset: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: -1,
      range: { start: -1, end: 1 / 0, step: 1 },
      description: Ce(Ee()),
      cliCategory: "Editor",
    },
    endOfLine: {
      since: "1.15.0",
      category: "Global",
      type: "choice",
      default: [{ since: "1.15.0", value: "auto" }, {
        since: "2.0.0",
        value: "lf",
      }],
      description: "Which end of line characters to apply.",
      choices: [{
        value: "lf",
        description:
          "Line Feed only (\\n), common on Linux and macOS as well as inside git repos",
      }, {
        value: "crlf",
        description:
          "Carriage Return + Line Feed characters (\\r\\n), common on Windows",
      }, {
        value: "cr",
        description: "Carriage Return character only (\\r), used very rarely",
      }, { value: "auto", description: Ce(ge()) }],
    },
    filepath: {
      since: "1.4.0",
      category: "Special",
      type: "path",
      description:
        "Specify the input filepath. This will be used to do parser inference.",
      cliName: "stdin-filepath",
      cliCategory: "Other",
      cliDescription: "Path to the file to pretend that stdin comes from.",
    },
    insertPragma: {
      since: "1.8.0",
      category: "Special",
      type: "boolean",
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: "Other",
    },
    parser: {
      since: "0.0.10",
      category: "Global",
      type: "choice",
      default: [{ since: "0.0.10", value: "babylon" }, {
        since: "1.13.0",
        value: void 0,
      }],
      description: "Which parser to use.",
      exception: (e) => "string" == typeof e || "function" == typeof e,
      choices: [
        { value: "flow", description: "Flow" },
        { value: "babel", since: "1.16.0", description: "JavaScript" },
        { value: "babel-flow", since: "1.16.0", description: "Flow" },
        { value: "babel-ts", since: "2.0.0", description: "TypeScript" },
        { value: "typescript", since: "1.4.0", description: "TypeScript" },
        { value: "espree", since: "2.2.0", description: "JavaScript" },
        { value: "meriyah", since: "2.2.0", description: "JavaScript" },
        { value: "css", since: "1.7.1", description: "CSS" },
        { value: "less", since: "1.7.1", description: "Less" },
        { value: "scss", since: "1.7.1", description: "SCSS" },
        { value: "json", since: "1.5.0", description: "JSON" },
        { value: "json5", since: "1.13.0", description: "JSON5" },
        {
          value: "json-stringify",
          since: "1.13.0",
          description: "JSON.stringify",
        },
        { value: "graphql", since: "1.5.0", description: "GraphQL" },
        { value: "markdown", since: "1.8.0", description: "Markdown" },
        { value: "mdx", since: "1.15.0", description: "MDX" },
        { value: "vue", since: "1.10.0", description: "Vue" },
        { value: "yaml", since: "1.14.0", description: "YAML" },
        { value: "glimmer", since: null, description: "Handlebars" },
        { value: "html", since: "1.15.0", description: "HTML" },
        { value: "angular", since: "1.15.0", description: "Angular" },
        {
          value: "lwc",
          since: "1.17.0",
          description: "Lightning Web Components",
        },
      ],
    },
    plugins: {
      since: "1.10.0",
      type: "path",
      array: !0,
      default: [{ value: [] }],
      category: "Global",
      description:
        "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
      exception: (e) => "string" == typeof e || "object" == typeof e,
      cliName: "plugin",
      cliCategory: "Config",
    },
    pluginSearchDirs: {
      since: "1.13.0",
      type: "path",
      array: !0,
      default: [{ value: [] }],
      category: "Global",
      description: Ce(me()),
      exception: (e) => "string" == typeof e || "object" == typeof e,
      cliName: "plugin-search-dir",
      cliCategory: "Config",
    },
    printWidth: {
      since: "0.0.0",
      category: "Global",
      type: "int",
      default: 80,
      description: "The line length where Prettier will try wrap.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    rangeEnd: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: 1 / 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: Ce(fe()),
      cliCategory: "Editor",
    },
    rangeStart: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: Ce(de()),
      cliCategory: "Editor",
    },
    requirePragma: {
      since: "1.7.0",
      category: "Special",
      type: "boolean",
      default: !1,
      description: Ce(he()),
      cliCategory: "Other",
    },
    tabWidth: {
      type: "int",
      category: "Global",
      default: 2,
      description: "Number of spaces per indentation level.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    useTabs: {
      since: "1.0.0",
      category: "Global",
      type: "boolean",
      default: !1,
      description: "Indent with tabs instead of spaces.",
    },
    embeddedLanguageFormatting: {
      since: "2.1.0",
      category: "Global",
      type: "choice",
      default: [{ since: "2.1.0", value: "auto" }],
      description:
        "Control how Prettier formats quoted code embedded in the file.",
      choices: [{
        value: "auto",
        description:
          "Format embedded code if Prettier can automatically identify it.",
      }, {
        value: "off",
        description: "Never automatically format embedded code.",
      }],
    },
  };
const ye = { compare: ue, lt: ce, gte: le },
  Se = pe,
  _e =
    {
      CATEGORY_CONFIG: "Config",
      CATEGORY_EDITOR: "Editor",
      CATEGORY_FORMAT: "Format",
      CATEGORY_OTHER: "Other",
      CATEGORY_OUTPUT: "Output",
      CATEGORY_GLOBAL: "Global",
      CATEGORY_SPECIAL: "Special",
      options: Te,
    }.options;
var be = {
  getSupportInfo: function (
    {
      plugins: e = [],
      showUnreleased: t = !1,
      showDeprecated: n = !1,
      showInternal: r = !1,
    } = {},
  ) {
    const s = Se.split("-", 1)[0],
      i = e.reduce(((e, t) => e.concat(t.languages || [])), []).filter(a),
      o = ((e, t) =>
        Object.entries(e).map(
          (([e, n]) => Object.assign({ [t]: e }, n)),
        ))(Object.assign({}, ...e.map((({ options: e }) => e)), _e), "name")
        .filter(
          ((e) => a(e) && u(e)),
        ).sort(((e, t) => e.name === t.name ? 0 : e.name < t.name ? -1 : 1))
        .map(
          (function (e) {
            if (r) return e;
            return function (e, t) {
              if (null == e) { 
                return {};
              }
              var n, r, s = {}, i = Object.keys(e);
              for (r = 0; r < i.length; r++) {n = i[r],
                  t.indexOf(n) >= 0 || (s[n] = e[n]);}
              return s;
            }(e, ["cliName", "cliCategory", "cliDescription"]);
          }),
        ).map(
          ((t) => {
            t = Object.assign({}, t),
              Array.isArray(t.default) && (t.default = 1 === t.default.length
                ? t.default[0].value
                : t.default.filter(a).sort(
                  ((e, t) => ye.compare(t.since, e.since)),
                )[0].value),
              Array.isArray(t.choices) &&
              (t.choices = t.choices.filter(((e) => a(e) && u(e))),
                "parser" === t.name && function (e, t, n) {
                  const r = new Set(e.choices.map(((e) => e.value)));
                  for (const s of t) {
                    if (s.parsers) {
                      for (const t of s.parsers) {
                        if (!r.has(t)) {
                          r.add(t);
                          const i = n.find(
                            ((e) => e.parsers && e.parsers[t]),
                          );
                          let o = s.name;
                          i && i.name &&
                          (o += " (plugin: ".concat(i.name, ")")),
                            e.choices.push({ value: t, description: o });
                        }
                      }
                    }
                  }
                }(t, i, e));
            const n = e.filter(
              ((e) => e.defaultOptions && void 0 !== e.defaultOptions[t.name]),
            ).reduce(((e, n) => (e[n.name] = n.defaultOptions[t.name], e)), {});
            return Object.assign({}, t, { pluginDefaults: n });
          }),
        );
    return { languages: i, options: o };
    function a(e) {
      return t || !("since" in e) || e.since && ye.gte(s, e.since);
    }
    function u(e) {
      return n || !("deprecated" in e) ||
        e.deprecated && ye.lt(s, e.deprecated);
    }
  },
};
const { getSupportInfo: Fe } = be, Ae = /[^\x20-\x7F]/;
function ve(e) {
  return (t, n, r) => {
    const s = r && r.backwards;
    if (!1 === n) return !1;
    const { length: i } = t;
    let o = n;
    for (; o >= 0 && o < i;) {
      const n = t.charAt(o);
      if (e instanceof RegExp) if (!e.test(n)) return o;
      else if (!e.includes(n)) return o;
      s ? o-- : o++;
    }
    return (-1 === o || o === i) && o;
  };
}
const we = ve(/\s/), ke = ve(" \t"), Ne = ve(",; \t"), xe = ve(/[^\n\r]/);
function Oe(e, t) {
  if (!1 === t) return !1;
  if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
    for (let n = t + 2; n < e.length; ++n) {
      if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) {
        return n + 2;
      }
    }
  }
  return t;
}
function Re(e, t) {
  return !1 !== t &&
    ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? xe(e, t) : t);
}
function Le(e, t, n) {
  const r = n && n.backwards;
  if (!1 === t) return !1;
  const s = e.charAt(t);
  if (r) {
    if ("\r" === e.charAt(t - 1) && "\n" === s) return t - 2;
    if ("\n" === s || "\r" === s || "\u2028" === s || "\u2029" === s) {
      return t - 1;
    }
  } else {
    if ("\r" === s && "\n" === e.charAt(t + 1)) return t + 2;
    if ("\n" === s || "\r" === s || "\u2028" === s || "\u2029" === s) {
      return t + 1;
    }
  }
  return t;
}
function Pe(e, t, n) {
  const r = ke(e, (n = n || {}).backwards ? t - 1 : t, n);
  return r !== Le(e, r, n);
}
function Be(e, t) {
  let n = null, r = t;
  for (; r !== n;) n = r, r = Ne(e, r), r = Oe(e, r), r = ke(e, r);
  return r = Re(e, r), r = Le(e, r), !1 !== r && Pe(e, r);
}
function Ie(e, t) {
  let n = null, r = t;
  for (; r !== n;) {
    n = r, r = ke(e, r), r = Oe(e, r), r = Re(e, r), r = Le(e, r);
  }
  return r;
}
function qe(e, t, n) {
  return Ie(e, n(t));
}
function $e(e, t, n) {
  let r = 0;
  for (let s = n = n || 0; s < e.length; ++s) {
    "\t" === e[s]
      ? r = r + t - r % t
      : r++;
  }
  return r;
}
function Me(e, t) {
  const n = e.slice(1, -1),
    r = { quote: '"', regex: /"/g },
    s = { quote: "'", regex: /'/g },
    i = "'" === t ? s : r,
    o = i === s ? r : s;
  let a = i.quote;
  if (n.includes(i.quote) || n.includes(o.quote)) {
    a = (n.match(i.regex) || []).length > (n.match(o.regex) || []).length
      ? o.quote
      : i.quote;
  }
  return a;
}
function Ue(e, t, n) {
  const r = '"' === t ? "'" : '"',
    s = e.replace(
      /\\([\S\s])|(["'])/g,
      ((e, s, i) =>
        s === r
          ? s
          : i === t
          ? "\\" + i
          : i || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s)
            ? s
            : "\\" + s)),
    );
  return t + s + t;
}
function Ge(e, t) {
  (e.comments || (e.comments = [])).push(t),
    t.printed = !1,
    "JSXText" === e.type && (t.printed = !0);
}
var Ve = {
  inferParserByLanguage: function (e, t) {
    const { languages: n } = Fe({ plugins: t.plugins }),
      r = n.find((({ name: t }) => t.toLowerCase() === e)) ||
        n.find((({ aliases: t }) => Array.isArray(t) && t.includes(e))) ||
        n.find(
          (({ extensions: t }) =>
            Array.isArray(t) && t.includes(".".concat(e))),
        );
    return r && r.parsers[0];
  },
  replaceEndOfLineWith: function (e, t) {
    const n = [];
    for (const r of e.split("\n")) 0 !== n.length && n.push(t), n.push(r);
    return n;
  },
  getStringWidth: function (e) {
    return e ? Ae.test(e) ? y(e) : e.length : 0;
  },
  getMaxContinuousCount: function (e, t) {
    const n = e.match(new RegExp("(".concat(a(t), ")+"), "g"));
    return null === n ? 0
    : n.reduce(((e, n) => Math.max(e, n.length / t.length)), 0);
  },
  getMinNotPresentContinuousCount: function (e, t) {
    const n = e.match(new RegExp("(".concat(a(t), ")+"), "g"));
    if (null === n) return 0;
    const r = new Map();
    let s = 0;
    for (const e of n) {
      const n = e.length / t.length;
      r.set(n, !0), n > s && (s = n);
    }
    for (let e = 1; e < s; e++) if (!r.get(e)) return e;
    return s + 1;
  },
  getPenultimate: (e) => e[e.length - 2],
  getLast: (e) => e[e.length - 1],
  getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Ie,
  getNextNonSpaceNonCommentCharacterIndex: qe,
  getNextNonSpaceNonCommentCharacter: function (e, t, n) {
    return e.charAt(qe(e, t, n));
  },
  skip: ve,
  skipWhitespace: we,
  skipSpaces: ke,
  skipToLineEnd: Ne,
  skipEverythingButNewLine: xe,
  skipInlineComment: Oe,
  skipTrailingComment: Re,
  skipNewline: Le,
  isNextLineEmptyAfterIndex: Be,
  isNextLineEmpty: function (e, t, n) {
    return Be(e, n(t));
  },
  isPreviousLineEmpty: function (e, t, n) {
    let r = n(t) - 1;
    return r = ke(e, r, { backwards: !0 }),
      r = Le(e, r, { backwards: !0 }),
      r = ke(e, r, { backwards: !0 }),
      r !== Le(e, r, { backwards: !0 });
  },
  hasNewline: Pe,
  hasNewlineInRange: function (e, t, n) {
    for (let r = t; r < n; ++r) if ("\n" === e.charAt(r)) return !0;
    return !1;
  },
  hasSpaces: function (e, t, n) {
    return ke(e, (n = n || {}).backwards ? t - 1 : t, n) !== t;
  },
  getAlignmentSize: $e,
  getIndentSize: function (e, t) {
    const n = e.lastIndexOf("\n");
    return -1 === n ? 0 : $e(e.slice(n + 1).match(/^[\t ]*/)[0], t);
  },
  getPreferredQuote: Me,
  printString: function (e, t, n) {
    const r = e.slice(1, -1),
      s = !r.includes('"') && !r.includes("'"),
      i = "json" === t.parser ? '"'
      : t.__isInHtmlAttribute ? "'" : Me(e, t.singleQuote ? "'" : '"');
    return n ? s ? i + r + i : e
    : Ue(
      r,
      i,
      !("css" === t.parser || "less" === t.parser || "scss" === t.parser ||
        t.embeddedInHtml),
    );
  },
  printNumber: function (e) {
    return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3")
      .replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.")
      .replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
  },
  isNodeIgnoreComment: function (e) {
    return "prettier-ignore" === e.value.trim();
  },
  makeString: Ue,
  addLeadingComment: function (e, t) {
    t.leading = !0, t.trailing = !1, Ge(e, t);
  },
  addDanglingComment: function (e, t, n) {
    t.leading = !1, t.trailing = !1, n && (t.marker = n), Ge(e, t);
  },
  addTrailingComment: function (e, t) {
    t.leading = !1, t.trailing = !0, Ge(e, t);
  },
  isFrontMatterNode: function (e) {
    return e && "front-matter" === e.type;
  },
  getShebang: function (e) {
    if (!e.startsWith("#!")) return "";
    const t = e.indexOf("\n");
    return -1 === t ? e : e.slice(0, t);
  },
};
var je = {
  guessEndOfLine: function (e) {
    const t = e.indexOf("\r");
    return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf";
  },
  convertEndOfLineToChars: function (e) {
    switch (e) {
      case "cr":
        return "\r";
      case "crlf":
        return "\r\n";
      default:
        return "\n";
    }
  },
  countEndOfLineChars: function (e, t) {
    let n;
    if ("\n" === t) n = /\n/g;
    else if ("\r" === t) n = /\r/g;
    else {
      if ("\r\n" !== t) {
        throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));
      }
      n = /\r\n/g;
    }
    const r = e.match(n);
    return r ? r.length : 0;
  },
  normalizeEndOfLine: function (e) {
    return e.replace(/\r\n?/g, "\n");
  },
};
const { getStringWidth: He } = Ve,
  { convertEndOfLineToChars: Xe } = je,
  { concat: ze, fill: We, cursor: Qe } = f;
let Ye;
function Je(e, t) {
  return Ke(e, { type: "indent" }, t);
}
function Ze(e, t, n) {
  if (t === -1 / 0) return e.root || { value: "", length: 0, queue: [] };
  if (t < 0) return Ke(e, { type: "dedent" }, n);
  if (!t) return e;
  if ("root" === t.type) return Object.assign({}, e, { root: e });
  return Ke(e, {
    type: "string" == typeof t ? "stringAlign" : "numberAlign",
    n: t,
  }, n);
}
function Ke(e, t, n) {
  const r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);
  let s = "", i = 0, o = 0, a = 0;
  for (const e of r) {
    switch (e.type) {
      case "indent":
        l(), n.useTabs ? u(1) : c(n.tabWidth);
        break;
      case "stringAlign":
        l(), s += e.n, i += e.n.length;
        break;
      case "numberAlign":
        o += 1, a += e.n;
        break;
      default:
        throw new Error("Unexpected type '".concat(e.type, "'"));
    }
  }
  return p(), Object.assign({}, e, { value: s, length: i, queue: r });
  function u(e) {
    s += "\t".repeat(e), i += n.tabWidth * e;
  }
  function c(e) {
    s += " ".repeat(e), i += e;
  }
  function l() {
    n.useTabs
      ? function () {
        o > 0 && u(o);
        D();
      }()
      : p();
  }
  function p() {
    a > 0 && c(a), D();
  }
  function D() {
    o = 0, a = 0;
  }
}
function et(e) {
  if (0 === e.length) return 0;
  let t = 0;
  for (
    ;
    e.length > 0 && "string" == typeof e[e.length - 1] &&
    e[e.length - 1].match(/^[\t ]*$/);
  ) {
    t += e.pop().length;
  }
  if (e.length && "string" == typeof e[e.length - 1]) {
    const n = e[e.length - 1].replace(/[\t ]*$/, "");
    t += e[e.length - 1].length - n.length, e[e.length - 1] = n;
  }
  return t;
}
function tt(e, t, n, r, s) {
  let i = t.length;
  const o = [e], a = [];
  for (; n >= 0;) {
    if (0 === o.length) {
      if (0 === i) return !0;
      o.push(t[i - 1]), i--;
      continue;
    }
    const [e, u, c] = o.pop();
    if ("string" == typeof c) a.push(c), n -= He(c);
    else {
      switch (c.type) {
        case "concat":
          for (let t = c.parts.length - 1; t >= 0; t--) {
            o.push([e, u, c.parts[t]]);
          }
          break;
        case "indent":
          o.push([Je(e, r), u, c.contents]);
          break;
        case "align":
          o.push([Ze(e, c.n, r), u, c.contents]);
          break;
        case "trim":
          n += et(a);
          break;
        case "group":
          if (s && c.break) {
            return !1;
          }
          o.push([e, c.break ? 1 : u, c.contents]),
            c.id && (Ye[c.id] = o[o.length - 1][1]);
          break;
        case "fill":
          for (let t = c.parts.length - 1; t >= 0; t--) {
            o.push([e, u, c.parts[t]]);
          }
          break;
        case "if-break": {
          const t = c.groupId ? Ye[c.groupId] : u;
          1 === t && c.breakContents && o.push([e, u, c.breakContents]),
            2 === t && c.flatContents && o.push([e, u, c.flatContents]);
          break;
        }
        case "line":
          switch (u) {
            case 2:
              if (!c.hard) {
                c.soft || (a.push(" "), n -= 1);
                break;
              }
              return !0;
            case 1:
              return !0;
          }
      }
    }
  }
  return !1;
}
var nt = {
  printDocToString: function (e, t) {
    Ye = {};
    const n = t.printWidth, r = Xe(t.endOfLine);
    let s = 0;
    const i = [[{ value: "", length: 0, queue: [] }, 1, e]], o = [];
    let a = !1, u = [];
    for (; 0 !== i.length;) {
      const [e, c, l] = i.pop();
      if ("string" == typeof l) {
        const e = "\n" !== r && l.includes("\n") ? l.replace(/\n/g, r) : l;
        o.push(e), s += He(e);
      } else {
        switch (l.type) {
          case "cursor":
            o.push(Qe.placeholder);
            break;
          case "concat":
            for (let t = l.parts.length - 1; t >= 0; t--) {i.push([
                e,
                c,
                l.parts[t],
              ]);}
            break;
          case "indent":
            i.push([Je(e, t), c, l.contents]);
            break;
          case "align":
            i.push([Ze(e, l.n, t), c, l.contents]);
            break;
          case "trim":
            s -= et(o);
            break;
          case "group":
            switch (c) {
              case 2:
                if (!a) {
                  i.push([e, l.break ? 1 : 2, l.contents]);
                  break;
                }
              case 1: {
                a = !1;
                const r = [e, 2, l.contents], o = n - s;
                if (!l.break && tt(r, i, o, t)) { 
                  i.push(r);
                } else if (l.expandedStates) {
                  const n = l.expandedStates[l.expandedStates.length - 1];
                  if (l.break) {
                    i.push([e, 1, n]);
                    break;
                  }
                  for (let r = 1; r < l.expandedStates.length + 1; r++) {
                    if (r >= l.expandedStates.length) {
                      i.push([e, 1, n]);
                      break;
                    }
                    {
                      const n = [e, 2, l.expandedStates[r]];
                      if (tt(n, i, o, t)) {
                        i.push(n);
                        break;
                      }
                    }
                  }
                } else i.push([e, 1, l.contents]);
                break;
              }
            }
            l.id && (Ye[l.id] = i[i.length - 1][1]);
            break;
          case "fill": {
            const r = n - s, { parts: o } = l;
            if (0 === o.length) break;
            const [a, u] = o,
              p = [e, 2, a],
              D = [e, 1, a],
              h = tt(p, [], r, t, !0);
            if (1 === o.length) {
              h ? i.push(p) : i.push(D);
              break;
            }
            const d = [e, 2, u], f = [e, 1, u];
            if (2 === o.length) {
              h ? (i.push(d), i.push(p)) : (i.push(f), i.push(D));
              break;
            }
            o.splice(0, 2);
            const m = [e, c, We(o)], g = o[0];
            tt([e, 2, ze([a, u, g])], [], r, t, !0)
              ? (i.push(m), i.push(d), i.push(p))
              : h
              ? (i.push(m), i.push(f), i.push(p))
              : (i.push(m), i.push(f), i.push(D));
            break;
          }
          case "if-break": {
            const t = l.groupId ? Ye[l.groupId] : c;
            1 === t && l.breakContents && i.push([e, c, l.breakContents]),
              2 === t && l.flatContents && i.push([e, c, l.flatContents]);
            break;
          }
          case "line-suffix":
            u.push([e, c, l.contents]);
            break;
          case "line-suffix-boundary":
            u.length > 0 && i.push([e, c, { type: "line", hard: !0 }]);
            break;
          case "line":
            switch (c) {
              case 2:
                if (!l.hard) {
                  l.soft || (o.push(" "), s += 1);
                  break;
                }
                a = !0;
              case 1:
                if (u.length) {
                  i.push([e, c, l]), i.push(...u.reverse()), u = [];
                  break;
                }
                l.literal
                  ? e.root
                    ? (o.push(r, e.root.value), s = e.root.length)
                    : (o.push(r), s = 0)
                  : (s -= et(o), o.push(r + e.value), s = e.length);
            }
        }
      }
      0 === i.length && u.length && (i.push(...u.reverse()), u = []);
    }
    const c = o.indexOf(Qe.placeholder);
    if (-1 !== c) {
      const e = o.indexOf(Qe.placeholder, c + 1),
        t = o.slice(0, c).join(""),
        n = o.slice(c + 1, e).join("");
      return {
        formatted: t + n + o.slice(e + 1).join(""),
        cursorNodeStart: t.length,
        cursorNodeText: n,
      };
    }
    return { formatted: o.join("") };
  },
};
const { literalline: rt, concat: st } = f, it = {};
function ot(e, t, n, r) {
  const s = [e];
  for (; 0 !== s.length;) {
    const e = s.pop();
    if (e !== it) {
      if (n && s.push(e, it), !t || !1 !== t(e)) {
        if ("concat" === e.type || "fill" === e.type) {
          for (let t = e.parts.length - 1; t >= 0; --t) s.push(e.parts[t]);
        } else if ("if-break" === e.type) {
          e.flatContents && s.push(e.flatContents),
            e.breakContents && s.push(e.breakContents);
        } else if ("group" === e.type && e.expandedStates) {
          if (r) {
            for (let t = e.expandedStates.length - 1; t >= 0; --t) {
              s.push(e.expandedStates[t]);
            }
          } else {
            s.push(e.contents);
          }
        } else {
          e.contents && s.push(e.contents);
        }
      }
    } else n(s.pop());
  }
}
function at(e, t) {
  if ("concat" === e.type || "fill" === e.type) {
    const n = e.parts.map(((e) => at(e, t)));
    return t(Object.assign({}, e, { parts: n }));
  }
  if ("if-break" === e.type) {
    const n = e.breakContents && at(e.breakContents, t),
      r = e.flatContents && at(e.flatContents, t);
    return t(Object.assign({}, e, { breakContents: n, flatContents: r }));
  }
  if (e.contents) {
    const n = at(e.contents, t);
    return t(Object.assign({}, e, { contents: n }));
  }
  return t(e);
}
function ut(e, t, n) {
  let r = n, s = !1;
  return ot(
    e,
    (function (e) {
      const n = t(e);
      if (void 0 !== n && (s = !0, r = n), s) return !1;
    }),
  ),
    r;
}
function ct(e) {
  return "string" != typeof e && ("line" === e.type || void 0);
}
function lt(e) {
  return !("group" !== e.type || !e.break) ||
    (!("line" !== e.type || !e.hard) || ("break-parent" === e.type || void 0));
}
function pt(e) {
  if (e.length > 0) {
    const t = e[e.length - 1];
    t.expandedStates || (t.break = !0);
  }
  return null;
}
function Dt(e) {
  return "line" !== e.type || e.hard
    ? "if-break" === e.type ? e.flatContents || "" : e
    : e.soft
    ? ""
    : " ";
}
function ht(e) {
  const t = [], n = e.filter(Boolean);
  for (; 0 !== n.length;) {
    const e = n.shift();
    e &&
      ("concat" !== e.type
        ? 0 === t.length || "string" != typeof t[t.length - 1] ||
            "string" != typeof e
          ? t.push(e)
          : t[t.length - 1] += e
        : n.unshift(...e.parts));
  }
  return t;
}
function dt(e) {
  if ("concat" === e.type) {
    const t = [];
    for (let n = 0; n < e.parts.length; ++n) {
      const r = e.parts[n];
      if ("string" != typeof r && "concat" === r.type) t.push(...dt(r).parts);
      else {
        const e = dt(r);
        "" !== e && t.push(e);
      }
    }
    return Object.assign({}, e, { parts: t });
  }
  return "if-break" === e.type
    ? Object.assign({}, e, {
      breakContents: null != e.breakContents ? dt(e.breakContents) : null,
      flatContents: null != e.flatContents ? dt(e.flatContents) : null,
    })
    : "group" === e.type
    ? Object.assign({}, e, {
      contents: dt(e.contents),
      expandedStates: e.expandedStates
        ? e.expandedStates.map(dt)
        : e.expandedStates,
    })
    : e.contents
    ? Object.assign({}, e, { contents: dt(e.contents) })
    : e;
}
function ft(e) {
  if ("string" == typeof e) return JSON.stringify(e);
  if ("line" === e.type) {
    return e.literal ? "literalline" : e.hard
      ? "hardline"
      : e.soft
      ? "softline"
      : "line";
  }
  if ("break-parent" === e.type) return "breakParent";
  if ("trim" === e.type) return "trim";
  if ("concat" === e.type) return "[" + e.parts.map(ft).join(", ") + "]";
  if ("indent" === e.type) return "indent(" + ft(e.contents) + ")";
  if ("align" === e.type) {
    return e.n === -1 / 0
      ? "dedentToRoot(" + ft(e.contents) + ")"
      : e.n < 0
      ? "dedent(" + ft(e.contents) + ")"
      : "root" === e.n.type
      ? "markAsRoot(" + ft(e.contents) + ")"
      : "align(" + JSON.stringify(e.n) + ", " + ft(e.contents) + ")";
  }
  if ("if-break" === e.type) {
    return "ifBreak(" + ft(e.breakContents) + (e.flatContents
      ? ", " + ft(e.flatContents)
      : "") +
      ")";
  }
  if ("group" === e.type) {
    return e.expandedStates
      ? "conditionalGroup([" + e.expandedStates.map(ft).join(",") + "])"
      : (e.break ? "wrappedGroup" : "group") + "(" + ft(e.contents) + ")";
  }
  if ("fill" === e.type) return "fill(" + e.parts.map(ft).join(", ") + ")";
  if ("line-suffix" === e.type) return "lineSuffix(" + ft(e.contents) + ")";
  if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary";
  throw new Error("Unknown doc type " + e.type);
}
var mt = {
  builders: f,
  printer: nt,
  utils: {
    isEmpty: function (e) {
      return "string" == typeof e && 0 === e.length;
    },
    willBreak: function (e) {
      return ut(e, lt, !1);
    },
    isLineNext: function (e) {
      return ut(e, ct, !1);
    },
    traverseDoc: ot,
    findInDoc: ut,
    mapDoc: at,
    propagateBreaks: function (e) {
      const t = new Set(), n = [];
      ot(
        e,
        (function (e) {
          if ("break-parent" === e.type && pt(n), "group" === e.type) {
            if (n.push(e), t.has(e)) return !1;
            t.add(e);
          }
        }),
        (function (e) {
          if ("group" === e.type) n.pop().break && pt(n);
        }),
        !0,
      );
    },
    removeLines: function (e) {
      return at(e, Dt);
    },
    stripTrailingHardline: function e(t, n = !1) {
      if ("concat" === t.type && 0 !== t.parts.length) {
        const r = n
            ? function (e) {
              let t, { parts: n } = e;
              for (let r = e.parts.length; r > 0 && !t; r--) t = n[r - 1];
              return "group" === t.type && (n = t.contents.parts), n;
            }(t)
            : t.parts,
          s = r[r.length - 1];
        if (
          "concat" === s.type
        ) {
          return 2 === s.parts.length && s.parts[0].hard &&
              "break-parent" === s.parts[1].type
            ? { type: "concat", parts: r.slice(0, -1) }
            : { type: "concat", parts: t.parts.slice(0, -1).concat(e(s)) };
        }
      }
      return t;
    },
    normalizeParts: ht,
    normalizeDoc: function (e) {
      return at(
        e,
        ((e) => e.parts ? Object.assign({}, e, { parts: ht(e.parts) }) : e),
      );
    },
    replaceNewlinesWithLiterallines: function (e) {
      return at(
        e,
        ((e) =>
          "string" == typeof e && e.includes("\n")
            ? st(e.split(/(\n)/g).map(((e, t) => t % 2 == 0 ? e : rt))) : e),
      );
    },
  },
  debug: { printDocToDebug: (e) => ft(dt(e)) },
};
const { builders: { hardline: gt, concat: Et, markAsRoot: Ct } } = mt,
  Tt = { "---": "yaml", "+++": "toml" };
var yt = {
  parse: function (e) {
    const t = Object.keys(Tt).map(a).join("|"),
      n = e.match(
        new RegExp(
          "^(".concat(
            t,
            ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)",
          ),
        ),
      );
    if (null === n) return { frontMatter: null, content: e };
    const [r, s, i, o] = n;
    let u = Tt[s];
    return "toml" !== u && i && i.trim() && (u = i.trim()),
      {
        frontMatter: {
          type: "front-matter",
          lang: u,
          value: o,
          raw: r.replace(/\n$/, ""),
        },
        content: r.replace(/[^\n]/g, " ") + e.slice(r.length),
      };
  },
  print: function (e, t) {
    if ("yaml" === e.lang) {
      const n = e.value.trim(),
        r = n ? t(n, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
      return Ct(Et(["---", gt, r, r ? gt : "", "---"]));
    }
  },
};
var St = function (e, t) {
    const n = new SyntaxError(
      e + " (" + t.start.line + ":" + t.start.column + ")",
    );
    return n.loc = t, n;
  },
  _t = {
    "*": [
      "accesskey",
      "autocapitalize",
      "autofocus",
      "class",
      "contenteditable",
      "dir",
      "draggable",
      "enterkeyhint",
      "hidden",
      "id",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "nonce",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate",
    ],
    a: [
      "accesskey",
      "charset",
      "coords",
      "download",
      "href",
      "hreflang",
      "name",
      "ping",
      "referrerpolicy",
      "rel",
      "rev",
      "shape",
      "tabindex",
      "target",
      "type",
    ],
    abbr: ["title"],
    applet: [
      "align",
      "alt",
      "archive",
      "code",
      "codebase",
      "height",
      "hspace",
      "name",
      "object",
      "vspace",
      "width",
    ],
    area: [
      "accesskey",
      "alt",
      "coords",
      "download",
      "href",
      "hreflang",
      "nohref",
      "ping",
      "referrerpolicy",
      "rel",
      "shape",
      "tabindex",
      "target",
      "type",
    ],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    base: ["href", "target"],
    basefont: ["color", "face", "size"],
    bdo: ["dir"],
    blockquote: ["cite"],
    body: ["alink", "background", "bgcolor", "link", "text", "vlink"],
    br: ["clear"],
    button: [
      "accesskey",
      "autofocus",
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "name",
      "tabindex",
      "type",
      "value",
    ],
    canvas: ["height", "width"],
    caption: ["align"],
    col: ["align", "char", "charoff", "span", "valign", "width"],
    colgroup: ["align", "char", "charoff", "span", "valign", "width"],
    data: ["value"],
    del: ["cite", "datetime"],
    details: ["open"],
    dfn: ["title"],
    dialog: ["open"],
    dir: ["compact"],
    div: ["align"],
    dl: ["compact"],
    embed: ["height", "src", "type", "width"],
    fieldset: ["disabled", "form", "name"],
    font: ["color", "face", "size"],
    form: [
      "accept",
      "accept-charset",
      "action",
      "autocomplete",
      "enctype",
      "method",
      "name",
      "novalidate",
      "target",
    ],
    frame: [
      "frameborder",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "noresize",
      "scrolling",
      "src",
    ],
    frameset: ["cols", "rows"],
    h1: ["align"],
    h2: ["align"],
    h3: ["align"],
    h4: ["align"],
    h5: ["align"],
    h6: ["align"],
    head: ["profile"],
    hr: ["align", "noshade", "size", "width"],
    html: ["manifest", "version"],
    iframe: [
      "align",
      "allow",
      "allowfullscreen",
      "allowpaymentrequest",
      "allowusermedia",
      "frameborder",
      "height",
      "loading",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "referrerpolicy",
      "sandbox",
      "scrolling",
      "src",
      "srcdoc",
      "width",
    ],
    img: [
      "align",
      "alt",
      "border",
      "crossorigin",
      "decoding",
      "height",
      "hspace",
      "ismap",
      "loading",
      "longdesc",
      "name",
      "referrerpolicy",
      "sizes",
      "src",
      "srcset",
      "usemap",
      "vspace",
      "width",
    ],
    input: [
      "accept",
      "accesskey",
      "align",
      "alt",
      "autocomplete",
      "autofocus",
      "checked",
      "dirname",
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "height",
      "ismap",
      "list",
      "max",
      "maxlength",
      "min",
      "minlength",
      "multiple",
      "name",
      "pattern",
      "placeholder",
      "readonly",
      "required",
      "size",
      "src",
      "step",
      "tabindex",
      "title",
      "type",
      "usemap",
      "value",
      "width",
    ],
    ins: ["cite", "datetime"],
    isindex: ["prompt"],
    label: ["accesskey", "for", "form"],
    legend: ["accesskey", "align"],
    li: ["type", "value"],
    link: [
      "as",
      "charset",
      "color",
      "crossorigin",
      "disabled",
      "href",
      "hreflang",
      "imagesizes",
      "imagesrcset",
      "integrity",
      "media",
      "nonce",
      "referrerpolicy",
      "rel",
      "rev",
      "sizes",
      "target",
      "title",
      "type",
    ],
    map: ["name"],
    menu: ["compact"],
    meta: ["charset", "content", "http-equiv", "name", "scheme"],
    meter: ["high", "low", "max", "min", "optimum", "value"],
    object: [
      "align",
      "archive",
      "border",
      "classid",
      "codebase",
      "codetype",
      "data",
      "declare",
      "form",
      "height",
      "hspace",
      "name",
      "standby",
      "tabindex",
      "type",
      "typemustmatch",
      "usemap",
      "vspace",
      "width",
    ],
    ol: ["compact", "reversed", "start", "type"],
    optgroup: ["disabled", "label"],
    option: ["disabled", "label", "selected", "value"],
    output: ["for", "form", "name"],
    p: ["align"],
    param: ["name", "type", "value", "valuetype"],
    pre: ["width"],
    progress: ["max", "value"],
    q: ["cite"],
    script: [
      "async",
      "charset",
      "crossorigin",
      "defer",
      "integrity",
      "language",
      "nomodule",
      "nonce",
      "referrerpolicy",
      "src",
      "type",
    ],
    select: [
      "autocomplete",
      "autofocus",
      "disabled",
      "form",
      "multiple",
      "name",
      "required",
      "size",
      "tabindex",
    ],
    slot: ["name"],
    source: ["media", "sizes", "src", "srcset", "type"],
    style: ["media", "nonce", "title", "type"],
    table: [
      "align",
      "bgcolor",
      "border",
      "cellpadding",
      "cellspacing",
      "frame",
      "rules",
      "summary",
      "width",
    ],
    tbody: ["align", "char", "charoff", "valign"],
    td: [
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width",
    ],
    textarea: [
      "accesskey",
      "autocomplete",
      "autofocus",
      "cols",
      "dirname",
      "disabled",
      "form",
      "maxlength",
      "minlength",
      "name",
      "placeholder",
      "readonly",
      "required",
      "rows",
      "tabindex",
      "wrap",
    ],
    tfoot: ["align", "char", "charoff", "valign"],
    th: [
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width",
    ],
    thead: ["align", "char", "charoff", "valign"],
    time: ["datetime"],
    tr: ["align", "bgcolor", "char", "charoff", "valign"],
    track: ["default", "kind", "label", "src", "srclang"],
    ul: ["compact", "type"],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "height",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "width",
    ],
  };
const { inferParserByLanguage: bt, isFrontMatterNode: Ft } = Ve,
  {
    CSS_DISPLAY_TAGS: At,
    CSS_DISPLAY_DEFAULT: vt,
    CSS_WHITE_SPACE_TAGS: wt,
    CSS_WHITE_SPACE_DEFAULT: kt,
  } = {
    CSS_DISPLAY_TAGS: {
      area: "none",
      base: "none",
      basefont: "none",
      datalist: "none",
      head: "none",
      link: "none",
      meta: "none",
      noembed: "none",
      noframes: "none",
      param: "block",
      rp: "none",
      script: "block",
      source: "block",
      style: "none",
      template: "inline",
      track: "block",
      title: "none",
      html: "block",
      body: "block",
      address: "block",
      blockquote: "block",
      center: "block",
      div: "block",
      figure: "block",
      figcaption: "block",
      footer: "block",
      form: "block",
      header: "block",
      hr: "block",
      legend: "block",
      listing: "block",
      main: "block",
      p: "block",
      plaintext: "block",
      pre: "block",
      xmp: "block",
      slot: "contents",
      ruby: "ruby",
      rt: "ruby-text",
      article: "block",
      aside: "block",
      h1: "block",
      h2: "block",
      h3: "block",
      h4: "block",
      h5: "block",
      h6: "block",
      hgroup: "block",
      nav: "block",
      section: "block",
      dir: "block",
      dd: "block",
      dl: "block",
      dt: "block",
      ol: "block",
      ul: "block",
      li: "list-item",
      table: "table",
      caption: "table-caption",
      colgroup: "table-column-group",
      col: "table-column",
      thead: "table-header-group",
      tbody: "table-row-group",
      tfoot: "table-footer-group",
      tr: "table-row",
      td: "table-cell",
      th: "table-cell",
      fieldset: "block",
      button: "inline-block",
      details: "block",
      summary: "block",
      dialog: "block",
      meter: "inline-block",
      progress: "inline-block",
      object: "inline-block",
      video: "inline-block",
      audio: "inline-block",
      select: "inline-block",
      option: "block",
      optgroup: "block",
    },
    CSS_DISPLAY_DEFAULT: "inline",
    CSS_WHITE_SPACE_TAGS: {
      listing: "pre",
      plaintext: "pre",
      pre: "pre",
      xmp: "pre",
      nobr: "nowrap",
      table: "initial",
      textarea: "pre-wrap",
    },
    CSS_WHITE_SPACE_DEFAULT: "normal",
  },
  Nt = Lt([
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "multicol",
    "nav",
    "nextid",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rb",
    "rbc",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp",
  ]),
  xt = function (e, t) {
    const n = Object.create(null);
    for (const r of Object.keys(e)) n[r] = t(e[r], r);
    return n;
  }(_t, Lt),
  Ot = new Set(["\t", "\n", "\f", "\r", " "]),
  Rt = (e) => e.replace(/[\t\n\f\r ]+$/, "");
function Lt(e) {
  const t = Object.create(null);
  for (const n of e) t[n] = !0;
  return t;
}
function Pt(e, t) {
  return !("ieConditionalComment" !== e.type || !e.lastChild ||
    e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) ||
    ("ieConditionalComment" === e.type && !e.complete ||
      (!(!zt(e) ||
        !e.children.some(
          ((e) => "text" !== e.type && "interpolation" !== e.type),
        )) || !(!Kt(e, t) || It(e) || "interpolation" === e.type)));
}
function Bt(e) {
  if ("attribute" === e.type) return !1;
  if (!e.parent) return !1;
  if ("number" != typeof e.index || 0 === e.index) return !1;
  return function (e) {
    return "comment" === e.type && "prettier-ignore" === e.value.trim();
  }(e.parent.children[e.index - 1]);
}
function It(e) {
  return "element" === e.type &&
    ("script" === e.fullName || "style" === e.fullName ||
      "svg:style" === e.fullName ||
      Wt(e) && ("script" === e.name || "style" === e.name));
}
function qt(e) {
  return Qt(e).startsWith("pre");
}
function $t(e) {
  return "element" === e.type && 0 !== e.children.length &&
    (["html", "head", "ul", "ol", "select"].includes(e.name) ||
      e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
}
function Mt(e) {
  return jt(e) || "element" === e.type && "br" === e.fullName || Ut(e);
}
function Ut(e) {
  return Gt(e) && Vt(e);
}
function Gt(e) {
  return e.hasLeadingSpaces &&
    (e.prev
      ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line
      : "root" === e.parent.type ||
        e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function Vt(e) {
  return e.hasTrailingSpaces &&
    (e.next
      ? e.next.sourceSpan.start.line > e.sourceSpan.end.line
      : "root" === e.parent.type ||
        e.parent.endSourceSpan &&
          e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function jt(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return !0;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return !1;
}
function Ht(e) {
  const { type: t, lang: n } = e.attrMap;
  return "module" === t || "text/javascript" === t || "text/babel" === t ||
      "application/javascript" === t || "jsx" === n
    ? "babel"
    : "application/x-typescript" === t || "ts" === n || "tsx" === n
    ? "typescript"
    : "text/markdown" === t
    ? "markdown"
    : "text/html" === t
    ? "html"
    : t && (t.endsWith("json") || t.endsWith("importmap"))
    ? "json"
    : "text/x-handlebars-template" === t
    ? "glimmer"
    : void 0;
}
function Xt(e) {
  return "block" === e || "list-item" === e || e.startsWith("table");
}
function zt(e) {
  return Qt(e).startsWith("pre");
}
function Wt(e) {
  return "element" === e.type && !e.hasExplicitNamespace &&
    !["html", "svg"].includes(e.namespace);
}
function Qt(e) {
  return "element" === e.type && (!e.namespace || Wt(e)) && wt[e.name] || kt;
}
const Yt = new Set(["template", "style", "script"]);
function Jt(e, t) {
  return Zt(e, t) && !Yt.has(e.fullName);
}
function Zt(e, t) {
  return "vue" === t.parser && "element" === e.type &&
    "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
}
function Kt(e, t) {
  return Zt(e, t) && (Jt(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
}
var en = {
  HTML_ELEMENT_ATTRIBUTES: xt,
  HTML_TAGS: Nt,
  htmlTrim: (e) => ((e) => e.replace(/^[\t\n\f\r ]+/, ""))(Rt(e)),
  htmlTrimPreserveIndentation: (e) =>
    ((e) => e.replace(/^[\t\f\r ]*?\n/g, ""))(Rt(e)),
  splitByHtmlWhitespace: (e) => e.split(/[\t\n\f\r ]+/),
  hasHtmlWhitespace: (e) => /[\t\n\f\r ]/.test(e),
  getLeadingAndTrailingHtmlWhitespace: (e) => {
    const [, t, n, r] = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/);
    return { leadingWhitespace: t, trailingWhitespace: r, text: n };
  },
  canHaveInterpolation: function (e) {
    return e.children && !It(e);
  },
  countChars: function (e, t) {
    let n = 0;
    for (let r = 0; r < e.length; r++) e[r] === t && n++;
    return n;
  },
  countParents: function (e, t) {
    let n = 0;
    for (let r = e.stack.length - 1; r >= 0; r--) {
      const s = e.stack[r];
      s && "object" == typeof s && !Array.isArray(s) && t(s) && n++;
    }
    return n;
  },
  dedentString: function (
    e,
    t = function (e) {
      let t = 1 / 0;
      for (const r of e.split("\n")) {
        if (0 === r.length) continue;
        if (!Ot.has(r[0])) return 0;
        const e = (n = r, n.match(/^[\t\n\f\r ]*/)[0]).length;
        r.length !== e && e < t && (t = e);
      }
      var n;
      return t === 1 / 0 ? 0 : t;
    }(e),
  ) {
    return 0 === t ? e : e.split("\n").map(((e) => e.slice(t))).join("\n");
  },
  forceBreakChildren: $t,
  forceBreakContent: function (e) {
    return $t(e) ||
      "element" === e.type && 0 !== e.children.length &&
        (["body", "script", "style"].includes(e.name) || e.children.some(
          ((e) =>
            function (e) {
              return e.children && e.children.some(((e) => "text" !== e.type));
            }(e)),
        )) ||
      e.firstChild && e.firstChild === e.lastChild &&
        "text" !== e.firstChild.type && Gt(e.firstChild) &&
        (!e.lastChild.isTrailingSpaceSensitive || Vt(e.lastChild));
  },
  forceNextEmptyLine: function (e) {
    return Ft(e) ||
      e.next && e.sourceSpan.end &&
        e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
  },
  getLastDescendant: function e(t) {
    return t.lastChild ? e(t.lastChild) : t;
  },
  getNodeCssStyleDisplay: function (e, t) {
    if (e.prev && "comment" === e.prev.type) {
      const t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
      if (t) return t[1];
    }
    let n = !1;
    if ("element" === e.type && "svg" === e.namespace) {
      if (
        !function (e, t) {
          let n = e;
          for (; n;) {
            if (t(n)) return !0;
            n = n.parent;
          }
          return !1;
        }(e, ((e) => "svg:foreignObject" === e.fullName))
      ) {
        return "svg" === e.name ? "inline-block" : "block";
      }
      n = !0;
    }
    switch (t.htmlWhitespaceSensitivity) {
      case "strict":
        return "inline";
      case "ignore":
        return "block";
      default:
        return "vue" === t.parser && e.parent && "root" === e.parent.type
          ? "block"
          : "element" === e.type && (!e.namespace || n || Wt(e)) &&
              At[e.name] || vt;
    }
  },
  getNodeCssStyleWhiteSpace: Qt,
  getPrettierIgnoreAttributeCommentData: function (e) {
    const t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
    return !!t && (!t[1] || t[1].split(/\s+/));
  },
  hasPrettierIgnore: Bt,
  inferScriptParser: function (e, t) {
    return "script" !== e.name || e.attrMap.src
      ? "style" === e.name ? function (e) {
        const { lang: t } = e.attrMap;
        return t && "postcss" !== t && "css" !== t
          ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css";
      }(e)
      : t && Kt(e, t) ? Ht(e) || !("src" in e.attrMap) && bt(e.attrMap.lang, t)
      : void 0 : e.attrMap.lang || e.attrMap.type ? Ht(e) : "babel";
  },
  isVueCustomBlock: Jt,
  isVueNonHtmlBlock: Kt,
  isVueSlotAttribute: function (e) {
    const t = e.fullName;
    return "#" === t.charAt(0) || "slot-scope" === t || "v-slot" === t ||
      t.startsWith("v-slot:");
  },
  isVueSfcBindingsAttribute: function (e, t) {
    const n = e.parent;
    if (!Zt(n, t)) return !1;
    const r = n.fullName, s = e.fullName;
    return "script" === r && "setup" === s || "style" === r && "vars" === s;
  },
  isDanglingSpaceSensitiveNode: function (e) {
    return !(t = e.cssDisplay, Xt(t) || "inline-block" === t || It(e));
    var t;
  },
  isIndentationSensitiveNode: qt,
  isLeadingSpaceSensitiveNode: function (e, t) {
    const n = function () {
      if (Ft(e)) return !1;
      if (
        ("text" === e.type || "interpolation" === e.type) && e.prev &&
        ("text" === e.prev.type || "interpolation" === e.prev.type)
      ) {
        return !0;
      }
      if (!e.parent || "none" === e.parent.cssDisplay) return !1;
      if (zt(e.parent)) return !0;
      if (
        !e.prev &&
        ("root" === e.parent.type || zt(e) && e.parent || It(e.parent) ||
          Jt(e.parent, t) ||
          (n = e.parent.cssDisplay, Xt(n) || "inline-block" === n))
      ) {
        return !1;
      }
      var n;
      if (
        e.prev && !function (e) {
          return !Xt(e);
        }(e.prev.cssDisplay)
      ) {
        return !1;
      }
      return !0;
    }();
    return n && !e.prev && e.parent && e.parent.tagDefinition &&
        e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n;
  },
  isPreLikeNode: zt,
  isScriptLikeTag: It,
  isTextLikeNode: function (e) {
    return "text" === e.type || "comment" === e.type;
  },
  isTrailingSpaceSensitiveNode: function (e, t) {
    return !Ft(e) &&
      (!("text" !== e.type && "interpolation" !== e.type || !e.next ||
        "text" !== e.next.type && "interpolation" !== e.next.type) ||
        !(!e.parent || "none" === e.parent.cssDisplay) &&
          (!!zt(e.parent) ||
            !(!e.next &&
                ("root" === e.parent.type || zt(e) && e.parent ||
                  It(e.parent) || Jt(e.parent, t) ||
                  (n = e.parent.cssDisplay, Xt(n) || "inline-block" === n))) &&
              !(e.next && !function (e) {
                return !Xt(e);
              }(e.next.cssDisplay))));
    var n;
  },
  isWhitespaceSensitiveNode: function (e) {
    return It(e) || "interpolation" === e.type || qt(e);
  },
  isUnknownNamespace: Wt,
  preferHardlineAsLeadingSpaces: function (e) {
    return jt(e) || e.prev && Mt(e.prev) || Ut(e);
  },
  preferHardlineAsTrailingSpaces: Mt,
  shouldNotPrintClosingTag: function (e, t) {
    return !e.isSelfClosing && !e.endSourceSpan && (Bt(e) || Pt(e.parent, t));
  },
  shouldPreserveContent: Pt,
  unescapeQuoteEntities: function (e) {
    return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
  },
};
var tn = {
  hasPragma: function (e) {
    return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e);
  },
  insertPragma: function (e) {
    return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "");
  },
};
const nn = { attrs: !0, children: !0 };
class rn {
  constructor(e = {}) {
    for (const t of Object.keys(e)) {
      const n = e[t];
      t in nn ? this._setNodes(t, n) : this[t] = n;
    }
  }
  _setNodes(e, t) {
    t !== this[e] && (this[e] = function (e, t) {
      const n = e.map(((e) => e instanceof rn ? e.clone() : new rn(e)));
      let r = null, s = n[0], i = n[1] || null;
      for (
        let e = 0; e < n.length; e++
      ) {
        on(s, { index: e, siblings: n, prev: r, next: i, parent: t }),
          r = s,
          s = i,
          i = n[e + 2] || null;
      }
      return n;
    }(t, this),
      "attrs" === e &&
      on(this, {
        attrMap: this[e].reduce(
          ((e, t) => (e[t.fullName] = t.value, e)),
          Object.create(null),
        ),
      }));
  }
  map(e) {
    let t = null;
    for (const n in nn) {
      const r = this[n];
      if (r) {
        const s = sn(r, ((t) => t.map(e)));
        t !== r && (t || (t = new rn()), t._setNodes(n, s));
      }
    }
    if (t) {
      for (const e in this) e in nn || (t[e] = this[e]);
      const { index: e, siblings: n, prev: r, next: s, parent: i } = this;
      on(t, { index: e, siblings: n, prev: r, next: s, parent: i });
    }
    return e(t || this);
  }
  clone(e) {
    return new rn(e ? Object.assign({}, this, e) : this);
  }
  get firstChild() {
    return this.children && 0 !== this.children.length
      ? this.children[0]
      : null;
  }
  get lastChild() {
    return this.children && 0 !== this.children.length
      ? this.children[this.children.length - 1]
      : null;
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
}
function sn(e, t) {
  const n = e.map(t);
  return n.some(((t, n) => t !== e[n])) ? n : e;
}
function on(e, t) {
  const n = Object.keys(t).reduce(
    ((e, n) => (e[n] = { value: t[n], enumerable: !1 }, e)),
    {},
  );
  Object.defineProperties(e, n);
}
var an = { Node: rn };
const { ParseSourceSpan: un } = o,
  cn = [[/^(\[if([^\]]*?)]>)([\S\s]*?)<!\s*\[endif]$/, function (e, t, n) {
    const [, r, s, i] = n,
      o = "\x3c!--".length + r.length,
      a = e.sourceSpan.start.moveBy(o),
      u = a.moveBy(i.length),
      [c, l] = (() => {
        try {
          return [!0, t(i, a).children];
        } catch (e) {
          return [!1, [{ type: "text", value: i, sourceSpan: new un(a, u) }]];
        }
      })();
    return {
      type: "ieConditionalComment",
      complete: c,
      children: l,
      condition: s.trim().replace(/\s+/g, " "),
      sourceSpan: e.sourceSpan,
      startSourceSpan: new un(e.sourceSpan.start, a),
      endSourceSpan: new un(u, e.sourceSpan.end),
    };
  }], [/^\[if([^\]]*?)]><!$/, function (e, t, n) {
    const [, r] = n;
    return {
      type: "ieConditionalStartComment",
      condition: r.trim().replace(/\s+/g, " "),
      sourceSpan: e.sourceSpan,
    };
  }], [/^<!\s*\[endif]$/, function (e) {
    return { type: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
  }]];
var ln = {
  parseIeConditionalComment: function (e, t) {
    if (e.value) {
      let n;
      for (const [r, s] of cn) if (n = e.value.match(r)) return s(e, t, n);
    }
    return null;
  },
};
var pn = {
    locStart: function (e) {
      return e.sourceSpan.start.offset;
    },
    locEnd: function (e) {
      return e.sourceSpan.end.offset;
    },
  },
  Dn = t(
    (function (e, t) {
      function n(e) {
        if (":" != e[0]) return [null, e];
        const t = e.indexOf(":", 1);
        if (-1 == t) {
          throw new Error(
            'Unsupported format "'.concat(e, '" expecting ":namespace:name"'),
          );
        }
        return [e.slice(1, t), e.slice(t + 1)];
      }
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 }),
        function (e) {
          e[e.RAW_TEXT = 0] = "RAW_TEXT",
            e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT",
            e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        }(t.TagContentType || (t.TagContentType = {})),
        t.splitNsName = n,
        t.isNgContainer = function (e) {
          return "ng-container" === n(e)[1];
        },
        t.isNgContent = function (e) {
          return "ng-content" === n(e)[1];
        },
        t.isNgTemplate = function (e) {
          return "ng-template" === n(e)[1];
        },
        t.getNsPrefix = function (e) {
          return null === e ? null : n(e)[0];
        },
        t.mergeNsAndName = function (e, t) {
          return e ? ":".concat(e, ":").concat(t) : t;
        },
        t.NAMED_ENTITIES = {
          Aacute: "\xc1",
          aacute: "\xe1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223e",
          acd: "\u223f",
          acE: "\u223e\u0333",
          Acirc: "\xc2",
          acirc: "\xe2",
          acute: "\xb4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xc6",
          aelig: "\xe6",
          af: "\u2061",
          Afr: "\ud835\udd04",
          afr: "\ud835\udd1e",
          Agrave: "\xc0",
          agrave: "\xe0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03b1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2a3f",
          AMP: "&",
          amp: "&",
          And: "\u2a53",
          and: "\u2227",
          andand: "\u2a55",
          andd: "\u2a5c",
          andslope: "\u2a58",
          andv: "\u2a5a",
          ang: "\u2220",
          ange: "\u29a4",
          angle: "\u2220",
          angmsd: "\u2221",
          angmsdaa: "\u29a8",
          angmsdab: "\u29a9",
          angmsdac: "\u29aa",
          angmsdad: "\u29ab",
          angmsdae: "\u29ac",
          angmsdaf: "\u29ad",
          angmsdag: "\u29ae",
          angmsdah: "\u29af",
          angrt: "\u221f",
          angrtvb: "\u22be",
          angrtvbd: "\u299d",
          angsph: "\u2222",
          angst: "\xc5",
          angzarr: "\u237c",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\ud835\udd38",
          aopf: "\ud835\udd52",
          ap: "\u2248",
          apacir: "\u2a6f",
          apE: "\u2a70",
          ape: "\u224a",
          apid: "\u224b",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224a",
          Aring: "\xc5",
          aring: "\xe5",
          Ascr: "\ud835\udc9c",
          ascr: "\ud835\udcb6",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224d",
          Atilde: "\xc3",
          atilde: "\xe3",
          Auml: "\xc4",
          auml: "\xe4",
          awconint: "\u2233",
          awint: "\u2a11",
          backcong: "\u224c",
          backepsilon: "\u03f6",
          backprime: "\u2035",
          backsim: "\u223d",
          backsimeq: "\u22cd",
          Backslash: "\u2216",
          Barv: "\u2ae7",
          barvee: "\u22bd",
          Barwed: "\u2306",
          barwed: "\u2305",
          barwedge: "\u2305",
          bbrk: "\u23b5",
          bbrktbrk: "\u23b6",
          bcong: "\u224c",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201e",
          becaus: "\u2235",
          Because: "\u2235",
          because: "\u2235",
          bemptyv: "\u29b0",
          bepsi: "\u03f6",
          bernou: "\u212c",
          Bernoullis: "\u212c",
          Beta: "\u0392",
          beta: "\u03b2",
          beth: "\u2136",
          between: "\u226c",
          Bfr: "\ud835\udd05",
          bfr: "\ud835\udd1f",
          bigcap: "\u22c2",
          bigcirc: "\u25ef",
          bigcup: "\u22c3",
          bigodot: "\u2a00",
          bigoplus: "\u2a01",
          bigotimes: "\u2a02",
          bigsqcup: "\u2a06",
          bigstar: "\u2605",
          bigtriangledown: "\u25bd",
          bigtriangleup: "\u25b3",
          biguplus: "\u2a04",
          bigvee: "\u22c1",
          bigwedge: "\u22c0",
          bkarow: "\u290d",
          blacklozenge: "\u29eb",
          blacksquare: "\u25aa",
          blacktriangle: "\u25b4",
          blacktriangledown: "\u25be",
          blacktriangleleft: "\u25c2",
          blacktriangleright: "\u25b8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20e5",
          bnequiv: "\u2261\u20e5",
          bNot: "\u2aed",
          bnot: "\u2310",
          Bopf: "\ud835\udd39",
          bopf: "\ud835\udd53",
          bot: "\u22a5",
          bottom: "\u22a5",
          bowtie: "\u22c8",
          boxbox: "\u29c9",
          boxDL: "\u2557",
          boxDl: "\u2556",
          boxdL: "\u2555",
          boxdl: "\u2510",
          boxDR: "\u2554",
          boxDr: "\u2553",
          boxdR: "\u2552",
          boxdr: "\u250c",
          boxH: "\u2550",
          boxh: "\u2500",
          boxHD: "\u2566",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxhd: "\u252c",
          boxHU: "\u2569",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxhu: "\u2534",
          boxminus: "\u229f",
          boxplus: "\u229e",
          boxtimes: "\u22a0",
          boxUL: "\u255d",
          boxUl: "\u255c",
          boxuL: "\u255b",
          boxul: "\u2518",
          boxUR: "\u255a",
          boxUr: "\u2559",
          boxuR: "\u2558",
          boxur: "\u2514",
          boxV: "\u2551",
          boxv: "\u2502",
          boxVH: "\u256c",
          boxVh: "\u256b",
          boxvH: "\u256a",
          boxvh: "\u253c",
          boxVL: "\u2563",
          boxVl: "\u2562",
          boxvL: "\u2561",
          boxvl: "\u2524",
          boxVR: "\u2560",
          boxVr: "\u255f",
          boxvR: "\u255e",
          boxvr: "\u251c",
          bprime: "\u2035",
          Breve: "\u02d8",
          breve: "\u02d8",
          brvbar: "\xa6",
          Bscr: "\u212c",
          bscr: "\ud835\udcb7",
          bsemi: "\u204f",
          bsim: "\u223d",
          bsime: "\u22cd",
          bsol: "\\",
          bsolb: "\u29c5",
          bsolhsub: "\u27c8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224e",
          bumpE: "\u2aae",
          bumpe: "\u224f",
          Bumpeq: "\u224e",
          bumpeq: "\u224f",
          Cacute: "\u0106",
          cacute: "\u0107",
          Cap: "\u22d2",
          cap: "\u2229",
          capand: "\u2a44",
          capbrcup: "\u2a49",
          capcap: "\u2a4b",
          capcup: "\u2a47",
          capdot: "\u2a40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\ufe00",
          caret: "\u2041",
          caron: "\u02c7",
          Cayleys: "\u212d",
          ccaps: "\u2a4d",
          Ccaron: "\u010c",
          ccaron: "\u010d",
          Ccedil: "\xc7",
          ccedil: "\xe7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2a4c",
          ccupssm: "\u2a50",
          Cdot: "\u010a",
          cdot: "\u010b",
          cedil: "\xb8",
          Cedilla: "\xb8",
          cemptyv: "\u29b2",
          cent: "\xa2",
          CenterDot: "\xb7",
          centerdot: "\xb7",
          Cfr: "\u212d",
          cfr: "\ud835\udd20",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03a7",
          chi: "\u03c7",
          cir: "\u25cb",
          circ: "\u02c6",
          circeq: "\u2257",
          circlearrowleft: "\u21ba",
          circlearrowright: "\u21bb",
          circledast: "\u229b",
          circledcirc: "\u229a",
          circleddash: "\u229d",
          CircleDot: "\u2299",
          circledR: "\xae",
          circledS: "\u24c8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cirE: "\u29c3",
          cire: "\u2257",
          cirfnint: "\u2a10",
          cirmid: "\u2aef",
          cirscir: "\u29c2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201d",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          Colon: "\u2237",
          colon: ":",
          Colone: "\u2a74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2a6d",
          Congruent: "\u2261",
          Conint: "\u222f",
          conint: "\u222e",
          ContourIntegral: "\u222e",
          Copf: "\u2102",
          copf: "\ud835\udd54",
          coprod: "\u2210",
          Coproduct: "\u2210",
          COPY: "\xa9",
          copy: "\xa9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21b5",
          Cross: "\u2a2f",
          cross: "\u2717",
          Cscr: "\ud835\udc9e",
          cscr: "\ud835\udcb8",
          csub: "\u2acf",
          csube: "\u2ad1",
          csup: "\u2ad0",
          csupe: "\u2ad2",
          ctdot: "\u22ef",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22de",
          cuesc: "\u22df",
          cularr: "\u21b6",
          cularrp: "\u293d",
          Cup: "\u22d3",
          cup: "\u222a",
          cupbrcap: "\u2a48",
          CupCap: "\u224d",
          cupcap: "\u2a46",
          cupcup: "\u2a4a",
          cupdot: "\u228d",
          cupor: "\u2a45",
          cups: "\u222a\ufe00",
          curarr: "\u21b7",
          curarrm: "\u293c",
          curlyeqprec: "\u22de",
          curlyeqsucc: "\u22df",
          curlyvee: "\u22ce",
          curlywedge: "\u22cf",
          curren: "\xa4",
          curvearrowleft: "\u21b6",
          curvearrowright: "\u21b7",
          cuvee: "\u22ce",
          cuwed: "\u22cf",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232d",
          Dagger: "\u2021",
          dagger: "\u2020",
          daleth: "\u2138",
          Darr: "\u21a1",
          dArr: "\u21d3",
          darr: "\u2193",
          dash: "\u2010",
          Dashv: "\u2ae4",
          dashv: "\u22a3",
          dbkarow: "\u290f",
          dblac: "\u02dd",
          Dcaron: "\u010e",
          dcaron: "\u010f",
          Dcy: "\u0414",
          dcy: "\u0434",
          DD: "\u2145",
          dd: "\u2146",
          ddagger: "\u2021",
          ddarr: "\u21ca",
          DDotrahd: "\u2911",
          ddotseq: "\u2a77",
          deg: "\xb0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03b4",
          demptyv: "\u29b1",
          dfisht: "\u297f",
          Dfr: "\ud835\udd07",
          dfr: "\ud835\udd21",
          dHar: "\u2965",
          dharl: "\u21c3",
          dharr: "\u21c2",
          DiacriticalAcute: "\xb4",
          DiacriticalDot: "\u02d9",
          DiacriticalDoubleAcute: "\u02dd",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02dc",
          diam: "\u22c4",
          Diamond: "\u22c4",
          diamond: "\u22c4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xa8",
          DifferentialD: "\u2146",
          digamma: "\u03dd",
          disin: "\u22f2",
          div: "\xf7",
          divide: "\xf7",
          divideontimes: "\u22c7",
          divonx: "\u22c7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231e",
          dlcrop: "\u230d",
          dollar: "$",
          Dopf: "\ud835\udd3b",
          dopf: "\ud835\udd55",
          Dot: "\xa8",
          dot: "\u02d9",
          DotDot: "\u20dc",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22a1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222f",
          DoubleDot: "\xa8",
          DoubleDownArrow: "\u21d3",
          DoubleLeftArrow: "\u21d0",
          DoubleLeftRightArrow: "\u21d4",
          DoubleLeftTee: "\u2ae4",
          DoubleLongLeftArrow: "\u27f8",
          DoubleLongLeftRightArrow: "\u27fa",
          DoubleLongRightArrow: "\u27f9",
          DoubleRightArrow: "\u21d2",
          DoubleRightTee: "\u22a8",
          DoubleUpArrow: "\u21d1",
          DoubleUpDownArrow: "\u21d5",
          DoubleVerticalBar: "\u2225",
          DownArrow: "\u2193",
          Downarrow: "\u21d3",
          downarrow: "\u2193",
          DownArrowBar: "\u2913",
          DownArrowUpArrow: "\u21f5",
          DownBreve: "\u0311",
          downdownarrows: "\u21ca",
          downharpoonleft: "\u21c3",
          downharpoonright: "\u21c2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295e",
          DownLeftVector: "\u21bd",
          DownLeftVectorBar: "\u2956",
          DownRightTeeVector: "\u295f",
          DownRightVector: "\u21c1",
          DownRightVectorBar: "\u2957",
          DownTee: "\u22a4",
          DownTeeArrow: "\u21a7",
          drbkarow: "\u2910",
          drcorn: "\u231f",
          drcrop: "\u230c",
          Dscr: "\ud835\udc9f",
          dscr: "\ud835\udcb9",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29f6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22f1",
          dtri: "\u25bf",
          dtrif: "\u25be",
          duarr: "\u21f5",
          duhar: "\u296f",
          dwangle: "\u29a6",
          DZcy: "\u040f",
          dzcy: "\u045f",
          dzigrarr: "\u27ff",
          Eacute: "\xc9",
          eacute: "\xe9",
          easter: "\u2a6e",
          Ecaron: "\u011a",
          ecaron: "\u011b",
          ecir: "\u2256",
          Ecirc: "\xca",
          ecirc: "\xea",
          ecolon: "\u2255",
          Ecy: "\u042d",
          ecy: "\u044d",
          eDDot: "\u2a77",
          Edot: "\u0116",
          eDot: "\u2251",
          edot: "\u0117",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\ud835\udd08",
          efr: "\ud835\udd22",
          eg: "\u2a9a",
          Egrave: "\xc8",
          egrave: "\xe8",
          egs: "\u2a96",
          egsdot: "\u2a98",
          el: "\u2a99",
          Element: "\u2208",
          elinters: "\u23e7",
          ell: "\u2113",
          els: "\u2a95",
          elsdot: "\u2a97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25fb",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25ab",
          emsp: "\u2003",
          emsp13: "\u2004",
          emsp14: "\u2005",
          ENG: "\u014a",
          eng: "\u014b",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\ud835\udd3c",
          eopf: "\ud835\udd56",
          epar: "\u22d5",
          eparsl: "\u29e3",
          eplus: "\u2a71",
          epsi: "\u03b5",
          Epsilon: "\u0395",
          epsilon: "\u03b5",
          epsiv: "\u03f5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2a96",
          eqslantless: "\u2a95",
          Equal: "\u2a75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225f",
          Equilibrium: "\u21cc",
          equiv: "\u2261",
          equivDD: "\u2a78",
          eqvparsl: "\u29e5",
          erarr: "\u2971",
          erDot: "\u2253",
          Escr: "\u2130",
          escr: "\u212f",
          esdot: "\u2250",
          Esim: "\u2a73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03b7",
          ETH: "\xd0",
          eth: "\xf0",
          Euml: "\xcb",
          euml: "\xeb",
          euro: "\u20ac",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          ExponentialE: "\u2147",
          exponentiale: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\ufb03",
          fflig: "\ufb00",
          ffllig: "\ufb04",
          Ffr: "\ud835\udd09",
          ffr: "\ud835\udd23",
          filig: "\ufb01",
          FilledSmallSquare: "\u25fc",
          FilledVerySmallSquare: "\u25aa",
          fjlig: "fj",
          flat: "\u266d",
          fllig: "\ufb02",
          fltns: "\u25b1",
          fnof: "\u0192",
          Fopf: "\ud835\udd3d",
          fopf: "\ud835\udd57",
          ForAll: "\u2200",
          forall: "\u2200",
          fork: "\u22d4",
          forkv: "\u2ad9",
          Fouriertrf: "\u2131",
          fpartint: "\u2a0d",
          frac12: "\xbd",
          frac13: "\u2153",
          frac14: "\xbc",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215b",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xbe",
          frac35: "\u2157",
          frac38: "\u215c",
          frac45: "\u2158",
          frac56: "\u215a",
          frac58: "\u215d",
          frac78: "\u215e",
          frasl: "\u2044",
          frown: "\u2322",
          Fscr: "\u2131",
          fscr: "\ud835\udcbb",
          gacute: "\u01f5",
          Gamma: "\u0393",
          gamma: "\u03b3",
          Gammad: "\u03dc",
          gammad: "\u03dd",
          gap: "\u2a86",
          Gbreve: "\u011e",
          gbreve: "\u011f",
          Gcedil: "\u0122",
          Gcirc: "\u011c",
          gcirc: "\u011d",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          gE: "\u2267",
          ge: "\u2265",
          gEl: "\u2a8c",
          gel: "\u22db",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2a7e",
          ges: "\u2a7e",
          gescc: "\u2aa9",
          gesdot: "\u2a80",
          gesdoto: "\u2a82",
          gesdotol: "\u2a84",
          gesl: "\u22db\ufe00",
          gesles: "\u2a94",
          Gfr: "\ud835\udd0a",
          gfr: "\ud835\udd24",
          Gg: "\u22d9",
          gg: "\u226b",
          ggg: "\u22d9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gl: "\u2277",
          gla: "\u2aa5",
          glE: "\u2a92",
          glj: "\u2aa4",
          gnap: "\u2a8a",
          gnapprox: "\u2a8a",
          gnE: "\u2269",
          gne: "\u2a88",
          gneq: "\u2a88",
          gneqq: "\u2269",
          gnsim: "\u22e7",
          Gopf: "\ud835\udd3e",
          gopf: "\ud835\udd58",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22db",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2aa2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2a7e",
          GreaterTilde: "\u2273",
          Gscr: "\ud835\udca2",
          gscr: "\u210a",
          gsim: "\u2273",
          gsime: "\u2a8e",
          gsiml: "\u2a90",
          GT: ">",
          Gt: "\u226b",
          gt: ">",
          gtcc: "\u2aa7",
          gtcir: "\u2a7a",
          gtdot: "\u22d7",
          gtlPar: "\u2995",
          gtquest: "\u2a7c",
          gtrapprox: "\u2a86",
          gtrarr: "\u2978",
          gtrdot: "\u22d7",
          gtreqless: "\u22db",
          gtreqqless: "\u2a8c",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\ufe00",
          gvnE: "\u2269\ufe00",
          Hacek: "\u02c7",
          hairsp: "\u200a",
          half: "\xbd",
          hamilt: "\u210b",
          HARDcy: "\u042a",
          hardcy: "\u044a",
          hArr: "\u21d4",
          harr: "\u2194",
          harrcir: "\u2948",
          harrw: "\u21ad",
          Hat: "^",
          hbar: "\u210f",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22b9",
          Hfr: "\u210c",
          hfr: "\ud835\udd25",
          HilbertSpace: "\u210b",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21ff",
          homtht: "\u223b",
          hookleftarrow: "\u21a9",
          hookrightarrow: "\u21aa",
          Hopf: "\u210d",
          hopf: "\ud835\udd59",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          Hscr: "\u210b",
          hscr: "\ud835\udcbd",
          hslash: "\u210f",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224e",
          HumpEqual: "\u224f",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xcd",
          iacute: "\xed",
          ic: "\u2063",
          Icirc: "\xce",
          icirc: "\xee",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xa1",
          iff: "\u21d4",
          Ifr: "\u2111",
          ifr: "\ud835\udd26",
          Igrave: "\xcc",
          igrave: "\xec",
          ii: "\u2148",
          iiiint: "\u2a0c",
          iiint: "\u222d",
          iinfin: "\u29dc",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Im: "\u2111",
          Imacr: "\u012a",
          imacr: "\u012b",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          imof: "\u22b7",
          imped: "\u01b5",
          Implies: "\u21d2",
          in: "\u2208",
          incare: "\u2105",
          infin: "\u221e",
          infintie: "\u29dd",
          inodot: "\u0131",
          Int: "\u222c",
          int: "\u222b",
          intcal: "\u22ba",
          integers: "\u2124",
          Integral: "\u222b",
          intercal: "\u22ba",
          Intersection: "\u22c2",
          intlarhk: "\u2a17",
          intprod: "\u2a3c",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012e",
          iogon: "\u012f",
          Iopf: "\ud835\udd40",
          iopf: "\ud835\udd5a",
          Iota: "\u0399",
          iota: "\u03b9",
          iprod: "\u2a3c",
          iquest: "\xbf",
          Iscr: "\u2110",
          iscr: "\ud835\udcbe",
          isin: "\u2208",
          isindot: "\u22f5",
          isinE: "\u22f9",
          isins: "\u22f4",
          isinsv: "\u22f3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xcf",
          iuml: "\xef",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\ud835\udd0d",
          jfr: "\ud835\udd27",
          jmath: "\u0237",
          Jopf: "\ud835\udd41",
          jopf: "\ud835\udd5b",
          Jscr: "\ud835\udca5",
          jscr: "\ud835\udcbf",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039a",
          kappa: "\u03ba",
          kappav: "\u03f0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041a",
          kcy: "\u043a",
          Kfr: "\ud835\udd0e",
          kfr: "\ud835\udd28",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040c",
          kjcy: "\u045c",
          Kopf: "\ud835\udd42",
          kopf: "\ud835\udd5c",
          Kscr: "\ud835\udca6",
          kscr: "\ud835\udcc0",
          lAarr: "\u21da",
          Lacute: "\u0139",
          lacute: "\u013a",
          laemptyv: "\u29b4",
          lagran: "\u2112",
          Lambda: "\u039b",
          lambda: "\u03bb",
          Lang: "\u27ea",
          lang: "\u27e8",
          langd: "\u2991",
          langle: "\u27e8",
          lap: "\u2a85",
          Laplacetrf: "\u2112",
          laquo: "\xab",
          Larr: "\u219e",
          lArr: "\u21d0",
          larr: "\u2190",
          larrb: "\u21e4",
          larrbfs: "\u291f",
          larrfs: "\u291d",
          larrhk: "\u21a9",
          larrlp: "\u21ab",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21a2",
          lat: "\u2aab",
          lAtail: "\u291b",
          latail: "\u2919",
          late: "\u2aad",
          lates: "\u2aad\ufe00",
          lBarr: "\u290e",
          lbarr: "\u290c",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298b",
          lbrksld: "\u298f",
          lbrkslu: "\u298d",
          Lcaron: "\u013d",
          lcaron: "\u013e",
          Lcedil: "\u013b",
          lcedil: "\u013c",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041b",
          lcy: "\u043b",
          ldca: "\u2936",
          ldquo: "\u201c",
          ldquor: "\u201e",
          ldrdhar: "\u2967",
          ldrushar: "\u294b",
          ldsh: "\u21b2",
          lE: "\u2266",
          le: "\u2264",
          LeftAngleBracket: "\u27e8",
          LeftArrow: "\u2190",
          Leftarrow: "\u21d0",
          leftarrow: "\u2190",
          LeftArrowBar: "\u21e4",
          LeftArrowRightArrow: "\u21c6",
          leftarrowtail: "\u21a2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27e6",
          LeftDownTeeVector: "\u2961",
          LeftDownVector: "\u21c3",
          LeftDownVectorBar: "\u2959",
          LeftFloor: "\u230a",
          leftharpoondown: "\u21bd",
          leftharpoonup: "\u21bc",
          leftleftarrows: "\u21c7",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21d4",
          leftrightarrow: "\u2194",
          leftrightarrows: "\u21c6",
          leftrightharpoons: "\u21cb",
          leftrightsquigarrow: "\u21ad",
          LeftRightVector: "\u294e",
          LeftTee: "\u22a3",
          LeftTeeArrow: "\u21a4",
          LeftTeeVector: "\u295a",
          leftthreetimes: "\u22cb",
          LeftTriangle: "\u22b2",
          LeftTriangleBar: "\u29cf",
          LeftTriangleEqual: "\u22b4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVector: "\u21bf",
          LeftUpVectorBar: "\u2958",
          LeftVector: "\u21bc",
          LeftVectorBar: "\u2952",
          lEg: "\u2a8b",
          leg: "\u22da",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2a7d",
          les: "\u2a7d",
          lescc: "\u2aa8",
          lesdot: "\u2a7f",
          lesdoto: "\u2a81",
          lesdotor: "\u2a83",
          lesg: "\u22da\ufe00",
          lesges: "\u2a93",
          lessapprox: "\u2a85",
          lessdot: "\u22d6",
          lesseqgtr: "\u22da",
          lesseqqgtr: "\u2a8b",
          LessEqualGreater: "\u22da",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2aa1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2a7d",
          LessTilde: "\u2272",
          lfisht: "\u297c",
          lfloor: "\u230a",
          Lfr: "\ud835\udd0f",
          lfr: "\ud835\udd29",
          lg: "\u2276",
          lgE: "\u2a91",
          lHar: "\u2962",
          lhard: "\u21bd",
          lharu: "\u21bc",
          lharul: "\u296a",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          Ll: "\u22d8",
          ll: "\u226a",
          llarr: "\u21c7",
          llcorner: "\u231e",
          Lleftarrow: "\u21da",
          llhard: "\u296b",
          lltri: "\u25fa",
          Lmidot: "\u013f",
          lmidot: "\u0140",
          lmoust: "\u23b0",
          lmoustache: "\u23b0",
          lnap: "\u2a89",
          lnapprox: "\u2a89",
          lnE: "\u2268",
          lne: "\u2a87",
          lneq: "\u2a87",
          lneqq: "\u2268",
          lnsim: "\u22e6",
          loang: "\u27ec",
          loarr: "\u21fd",
          lobrk: "\u27e6",
          LongLeftArrow: "\u27f5",
          Longleftarrow: "\u27f8",
          longleftarrow: "\u27f5",
          LongLeftRightArrow: "\u27f7",
          Longleftrightarrow: "\u27fa",
          longleftrightarrow: "\u27f7",
          longmapsto: "\u27fc",
          LongRightArrow: "\u27f6",
          Longrightarrow: "\u27f9",
          longrightarrow: "\u27f6",
          looparrowleft: "\u21ab",
          looparrowright: "\u21ac",
          lopar: "\u2985",
          Lopf: "\ud835\udd43",
          lopf: "\ud835\udd5d",
          loplus: "\u2a2d",
          lotimes: "\u2a34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25ca",
          lozenge: "\u25ca",
          lozf: "\u29eb",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21c6",
          lrcorner: "\u231f",
          lrhar: "\u21cb",
          lrhard: "\u296d",
          lrm: "\u200e",
          lrtri: "\u22bf",
          lsaquo: "\u2039",
          Lscr: "\u2112",
          lscr: "\ud835\udcc1",
          Lsh: "\u21b0",
          lsh: "\u21b0",
          lsim: "\u2272",
          lsime: "\u2a8d",
          lsimg: "\u2a8f",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201a",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          LT: "<",
          Lt: "\u226a",
          lt: "<",
          ltcc: "\u2aa6",
          ltcir: "\u2a79",
          ltdot: "\u22d6",
          lthree: "\u22cb",
          ltimes: "\u22c9",
          ltlarr: "\u2976",
          ltquest: "\u2a7b",
          ltri: "\u25c3",
          ltrie: "\u22b4",
          ltrif: "\u25c2",
          ltrPar: "\u2996",
          lurdshar: "\u294a",
          luruhar: "\u2966",
          lvertneqq: "\u2268\ufe00",
          lvnE: "\u2268\ufe00",
          macr: "\xaf",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21a6",
          mapsto: "\u21a6",
          mapstodown: "\u21a7",
          mapstoleft: "\u21a4",
          mapstoup: "\u21a5",
          marker: "\u25ae",
          mcomma: "\u2a29",
          Mcy: "\u041c",
          mcy: "\u043c",
          mdash: "\u2014",
          mDDot: "\u223a",
          measuredangle: "\u2221",
          MediumSpace: "\u205f",
          Mellintrf: "\u2133",
          Mfr: "\ud835\udd10",
          mfr: "\ud835\udd2a",
          mho: "\u2127",
          micro: "\xb5",
          mid: "\u2223",
          midast: "*",
          midcir: "\u2af0",
          middot: "\xb7",
          minus: "\u2212",
          minusb: "\u229f",
          minusd: "\u2238",
          minusdu: "\u2a2a",
          MinusPlus: "\u2213",
          mlcp: "\u2adb",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22a7",
          Mopf: "\ud835\udd44",
          mopf: "\ud835\udd5e",
          mp: "\u2213",
          Mscr: "\u2133",
          mscr: "\ud835\udcc2",
          mstpos: "\u223e",
          Mu: "\u039c",
          mu: "\u03bc",
          multimap: "\u22b8",
          mumap: "\u22b8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20d2",
          nap: "\u2249",
          napE: "\u2a70\u0338",
          napid: "\u224b\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natur: "\u266e",
          natural: "\u266e",
          naturals: "\u2115",
          nbsp: "\xa0",
          nbump: "\u224e\u0338",
          nbumpe: "\u224f\u0338",
          ncap: "\u2a43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2a6d\u0338",
          ncup: "\u2a42",
          Ncy: "\u041d",
          ncy: "\u043d",
          ndash: "\u2013",
          ne: "\u2260",
          nearhk: "\u2924",
          neArr: "\u21d7",
          nearr: "\u2197",
          nearrow: "\u2197",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200b",
          NegativeThickSpace: "\u200b",
          NegativeThinSpace: "\u200b",
          NegativeVeryThinSpace: "\u200b",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226b",
          NestedLessLess: "\u226a",
          NewLine: "\n",
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\ud835\udd11",
          nfr: "\ud835\udd2b",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2a7e\u0338",
          nges: "\u2a7e\u0338",
          nGg: "\u22d9\u0338",
          ngsim: "\u2275",
          nGt: "\u226b\u20d2",
          ngt: "\u226f",
          ngtr: "\u226f",
          nGtv: "\u226b\u0338",
          nhArr: "\u21ce",
          nharr: "\u21ae",
          nhpar: "\u2af2",
          ni: "\u220b",
          nis: "\u22fc",
          nisd: "\u22fa",
          niv: "\u220b",
          NJcy: "\u040a",
          njcy: "\u045a",
          nlArr: "\u21cd",
          nlarr: "\u219a",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nLeftarrow: "\u21cd",
          nleftarrow: "\u219a",
          nLeftrightarrow: "\u21ce",
          nleftrightarrow: "\u21ae",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2a7d\u0338",
          nles: "\u2a7d\u0338",
          nless: "\u226e",
          nLl: "\u22d8\u0338",
          nlsim: "\u2274",
          nLt: "\u226a\u20d2",
          nlt: "\u226e",
          nltri: "\u22ea",
          nltrie: "\u22ec",
          nLtv: "\u226a\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xa0",
          Nopf: "\u2115",
          nopf: "\ud835\udd5f",
          Not: "\u2aec",
          not: "\xac",
          NotCongruent: "\u2262",
          NotCupCap: "\u226d",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226f",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226b\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2a7e\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224e\u0338",
          NotHumpEqual: "\u224f\u0338",
          notin: "\u2209",
          notindot: "\u22f5\u0338",
          notinE: "\u22f9\u0338",
          notinva: "\u2209",
          notinvb: "\u22f7",
          notinvc: "\u22f6",
          NotLeftTriangle: "\u22ea",
          NotLeftTriangleBar: "\u29cf\u0338",
          NotLeftTriangleEqual: "\u22ec",
          NotLess: "\u226e",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226a\u0338",
          NotLessSlantEqual: "\u2a7d\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2aa2\u0338",
          NotNestedLessLess: "\u2aa1\u0338",
          notni: "\u220c",
          notniva: "\u220c",
          notnivb: "\u22fe",
          notnivc: "\u22fd",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2aaf\u0338",
          NotPrecedesSlantEqual: "\u22e0",
          NotReverseElement: "\u220c",
          NotRightTriangle: "\u22eb",
          NotRightTriangleBar: "\u29d0\u0338",
          NotRightTriangleEqual: "\u22ed",
          NotSquareSubset: "\u228f\u0338",
          NotSquareSubsetEqual: "\u22e2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22e3",
          NotSubset: "\u2282\u20d2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2ab0\u0338",
          NotSucceedsSlantEqual: "\u22e1",
          NotSucceedsTilde: "\u227f\u0338",
          NotSuperset: "\u2283\u20d2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          npar: "\u2226",
          nparallel: "\u2226",
          nparsl: "\u2afd\u20e5",
          npart: "\u2202\u0338",
          npolint: "\u2a14",
          npr: "\u2280",
          nprcue: "\u22e0",
          npre: "\u2aaf\u0338",
          nprec: "\u2280",
          npreceq: "\u2aaf\u0338",
          nrArr: "\u21cf",
          nrarr: "\u219b",
          nrarrc: "\u2933\u0338",
          nrarrw: "\u219d\u0338",
          nRightarrow: "\u21cf",
          nrightarrow: "\u219b",
          nrtri: "\u22eb",
          nrtrie: "\u22ed",
          nsc: "\u2281",
          nsccue: "\u22e1",
          nsce: "\u2ab0\u0338",
          Nscr: "\ud835\udca9",
          nscr: "\ud835\udcc3",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22e2",
          nsqsupe: "\u22e3",
          nsub: "\u2284",
          nsubE: "\u2ac5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20d2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2ac5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2ab0\u0338",
          nsup: "\u2285",
          nsupE: "\u2ac6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20d2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2ac6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xd1",
          ntilde: "\xf1",
          ntlg: "\u2278",
          ntriangleleft: "\u22ea",
          ntrianglelefteq: "\u22ec",
          ntriangleright: "\u22eb",
          ntrianglerighteq: "\u22ed",
          Nu: "\u039d",
          nu: "\u03bd",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224d\u20d2",
          nVDash: "\u22af",
          nVdash: "\u22ae",
          nvDash: "\u22ad",
          nvdash: "\u22ac",
          nvge: "\u2265\u20d2",
          nvgt: ">\u20d2",
          nvHarr: "\u2904",
          nvinfin: "\u29de",
          nvlArr: "\u2902",
          nvle: "\u2264\u20d2",
          nvlt: "<\u20d2",
          nvltrie: "\u22b4\u20d2",
          nvrArr: "\u2903",
          nvrtrie: "\u22b5\u20d2",
          nvsim: "\u223c\u20d2",
          nwarhk: "\u2923",
          nwArr: "\u21d6",
          nwarr: "\u2196",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xd3",
          oacute: "\xf3",
          oast: "\u229b",
          ocir: "\u229a",
          Ocirc: "\xd4",
          ocirc: "\xf4",
          Ocy: "\u041e",
          ocy: "\u043e",
          odash: "\u229d",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2a38",
          odot: "\u2299",
          odsold: "\u29bc",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29bf",
          Ofr: "\ud835\udd12",
          ofr: "\ud835\udd2c",
          ogon: "\u02db",
          Ograve: "\xd2",
          ograve: "\xf2",
          ogt: "\u29c1",
          ohbar: "\u29b5",
          ohm: "\u03a9",
          oint: "\u222e",
          olarr: "\u21ba",
          olcir: "\u29be",
          olcross: "\u29bb",
          oline: "\u203e",
          olt: "\u29c0",
          Omacr: "\u014c",
          omacr: "\u014d",
          Omega: "\u03a9",
          omega: "\u03c9",
          Omicron: "\u039f",
          omicron: "\u03bf",
          omid: "\u29b6",
          ominus: "\u2296",
          Oopf: "\ud835\udd46",
          oopf: "\ud835\udd60",
          opar: "\u29b7",
          OpenCurlyDoubleQuote: "\u201c",
          OpenCurlyQuote: "\u2018",
          operp: "\u29b9",
          oplus: "\u2295",
          Or: "\u2a54",
          or: "\u2228",
          orarr: "\u21bb",
          ord: "\u2a5d",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xaa",
          ordm: "\xba",
          origof: "\u22b6",
          oror: "\u2a56",
          orslope: "\u2a57",
          orv: "\u2a5b",
          oS: "\u24c8",
          Oscr: "\ud835\udcaa",
          oscr: "\u2134",
          Oslash: "\xd8",
          oslash: "\xf8",
          osol: "\u2298",
          Otilde: "\xd5",
          otilde: "\xf5",
          Otimes: "\u2a37",
          otimes: "\u2297",
          otimesas: "\u2a36",
          Ouml: "\xd6",
          ouml: "\xf6",
          ovbar: "\u233d",
          OverBar: "\u203e",
          OverBrace: "\u23de",
          OverBracket: "\u23b4",
          OverParenthesis: "\u23dc",
          par: "\u2225",
          para: "\xb6",
          parallel: "\u2225",
          parsim: "\u2af3",
          parsl: "\u2afd",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041f",
          pcy: "\u043f",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22a5",
          pertenk: "\u2031",
          Pfr: "\ud835\udd13",
          pfr: "\ud835\udd2d",
          Phi: "\u03a6",
          phi: "\u03c6",
          phiv: "\u03d5",
          phmmat: "\u2133",
          phone: "\u260e",
          Pi: "\u03a0",
          pi: "\u03c0",
          pitchfork: "\u22d4",
          piv: "\u03d6",
          planck: "\u210f",
          planckh: "\u210e",
          plankv: "\u210f",
          plus: "+",
          plusacir: "\u2a23",
          plusb: "\u229e",
          pluscir: "\u2a22",
          plusdo: "\u2214",
          plusdu: "\u2a25",
          pluse: "\u2a72",
          PlusMinus: "\xb1",
          plusmn: "\xb1",
          plussim: "\u2a26",
          plustwo: "\u2a27",
          pm: "\xb1",
          Poincareplane: "\u210c",
          pointint: "\u2a15",
          Popf: "\u2119",
          popf: "\ud835\udd61",
          pound: "\xa3",
          Pr: "\u2abb",
          pr: "\u227a",
          prap: "\u2ab7",
          prcue: "\u227c",
          prE: "\u2ab3",
          pre: "\u2aaf",
          prec: "\u227a",
          precapprox: "\u2ab7",
          preccurlyeq: "\u227c",
          Precedes: "\u227a",
          PrecedesEqual: "\u2aaf",
          PrecedesSlantEqual: "\u227c",
          PrecedesTilde: "\u227e",
          preceq: "\u2aaf",
          precnapprox: "\u2ab9",
          precneqq: "\u2ab5",
          precnsim: "\u22e8",
          precsim: "\u227e",
          Prime: "\u2033",
          prime: "\u2032",
          primes: "\u2119",
          prnap: "\u2ab9",
          prnE: "\u2ab5",
          prnsim: "\u22e8",
          prod: "\u220f",
          Product: "\u220f",
          profalar: "\u232e",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221d",
          Proportion: "\u2237",
          Proportional: "\u221d",
          propto: "\u221d",
          prsim: "\u227e",
          prurel: "\u22b0",
          Pscr: "\ud835\udcab",
          pscr: "\ud835\udcc5",
          Psi: "\u03a8",
          psi: "\u03c8",
          puncsp: "\u2008",
          Qfr: "\ud835\udd14",
          qfr: "\ud835\udd2e",
          qint: "\u2a0c",
          Qopf: "\u211a",
          qopf: "\ud835\udd62",
          qprime: "\u2057",
          Qscr: "\ud835\udcac",
          qscr: "\ud835\udcc6",
          quaternions: "\u210d",
          quatint: "\u2a16",
          quest: "?",
          questeq: "\u225f",
          QUOT: '"',
          quot: '"',
          rAarr: "\u21db",
          race: "\u223d\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221a",
          raemptyv: "\u29b3",
          Rang: "\u27eb",
          rang: "\u27e9",
          rangd: "\u2992",
          range: "\u29a5",
          rangle: "\u27e9",
          raquo: "\xbb",
          Rarr: "\u21a0",
          rArr: "\u21d2",
          rarr: "\u2192",
          rarrap: "\u2975",
          rarrb: "\u21e5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarrfs: "\u291e",
          rarrhk: "\u21aa",
          rarrlp: "\u21ac",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21a3",
          rarrw: "\u219d",
          rAtail: "\u291c",
          ratail: "\u291a",
          ratio: "\u2236",
          rationals: "\u211a",
          RBarr: "\u2910",
          rBarr: "\u290f",
          rbarr: "\u290d",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298c",
          rbrksld: "\u298e",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201d",
          rdquor: "\u201d",
          rdsh: "\u21b3",
          Re: "\u211c",
          real: "\u211c",
          realine: "\u211b",
          realpart: "\u211c",
          reals: "\u211d",
          rect: "\u25ad",
          REG: "\xae",
          reg: "\xae",
          ReverseElement: "\u220b",
          ReverseEquilibrium: "\u21cb",
          ReverseUpEquilibrium: "\u296f",
          rfisht: "\u297d",
          rfloor: "\u230b",
          Rfr: "\u211c",
          rfr: "\ud835\udd2f",
          rHar: "\u2964",
          rhard: "\u21c1",
          rharu: "\u21c0",
          rharul: "\u296c",
          Rho: "\u03a1",
          rho: "\u03c1",
          rhov: "\u03f1",
          RightAngleBracket: "\u27e9",
          RightArrow: "\u2192",
          Rightarrow: "\u21d2",
          rightarrow: "\u2192",
          RightArrowBar: "\u21e5",
          RightArrowLeftArrow: "\u21c4",
          rightarrowtail: "\u21a3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27e7",
          RightDownTeeVector: "\u295d",
          RightDownVector: "\u21c2",
          RightDownVectorBar: "\u2955",
          RightFloor: "\u230b",
          rightharpoondown: "\u21c1",
          rightharpoonup: "\u21c0",
          rightleftarrows: "\u21c4",
          rightleftharpoons: "\u21cc",
          rightrightarrows: "\u21c9",
          rightsquigarrow: "\u219d",
          RightTee: "\u22a2",
          RightTeeArrow: "\u21a6",
          RightTeeVector: "\u295b",
          rightthreetimes: "\u22cc",
          RightTriangle: "\u22b3",
          RightTriangleBar: "\u29d0",
          RightTriangleEqual: "\u22b5",
          RightUpDownVector: "\u294f",
          RightUpTeeVector: "\u295c",
          RightUpVector: "\u21be",
          RightUpVectorBar: "\u2954",
          RightVector: "\u21c0",
          RightVectorBar: "\u2953",
          ring: "\u02da",
          risingdotseq: "\u2253",
          rlarr: "\u21c4",
          rlhar: "\u21cc",
          rlm: "\u200f",
          rmoust: "\u23b1",
          rmoustache: "\u23b1",
          rnmid: "\u2aee",
          roang: "\u27ed",
          roarr: "\u21fe",
          robrk: "\u27e7",
          ropar: "\u2986",
          Ropf: "\u211d",
          ropf: "\ud835\udd63",
          roplus: "\u2a2e",
          rotimes: "\u2a35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2a12",
          rrarr: "\u21c9",
          Rrightarrow: "\u21db",
          rsaquo: "\u203a",
          Rscr: "\u211b",
          rscr: "\ud835\udcc7",
          Rsh: "\u21b1",
          rsh: "\u21b1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22cc",
          rtimes: "\u22ca",
          rtri: "\u25b9",
          rtrie: "\u22b5",
          rtrif: "\u25b8",
          rtriltri: "\u29ce",
          RuleDelayed: "\u29f4",
          ruluhar: "\u2968",
          rx: "\u211e",
          Sacute: "\u015a",
          sacute: "\u015b",
          sbquo: "\u201a",
          Sc: "\u2abc",
          sc: "\u227b",
          scap: "\u2ab8",
          Scaron: "\u0160",
          scaron: "\u0161",
          sccue: "\u227d",
          scE: "\u2ab4",
          sce: "\u2ab0",
          Scedil: "\u015e",
          scedil: "\u015f",
          Scirc: "\u015c",
          scirc: "\u015d",
          scnap: "\u2aba",
          scnE: "\u2ab6",
          scnsim: "\u22e9",
          scpolint: "\u2a13",
          scsim: "\u227f",
          Scy: "\u0421",
          scy: "\u0441",
          sdot: "\u22c5",
          sdotb: "\u22a1",
          sdote: "\u2a66",
          searhk: "\u2925",
          seArr: "\u21d8",
          searr: "\u2198",
          searrow: "\u2198",
          sect: "\xa7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\ud835\udd16",
          sfr: "\ud835\udd30",
          sfrown: "\u2322",
          sharp: "\u266f",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xad",
          Sigma: "\u03a3",
          sigma: "\u03c3",
          sigmaf: "\u03c2",
          sigmav: "\u03c2",
          sim: "\u223c",
          simdot: "\u2a6a",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2a9e",
          simgE: "\u2aa0",
          siml: "\u2a9d",
          simlE: "\u2a9f",
          simne: "\u2246",
          simplus: "\u2a24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2a33",
          smeparsl: "\u29e4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2aaa",
          smte: "\u2aac",
          smtes: "\u2aac\ufe00",
          SOFTcy: "\u042c",
          softcy: "\u044c",
          sol: "/",
          solb: "\u29c4",
          solbar: "\u233f",
          Sopf: "\ud835\udd4a",
          sopf: "\ud835\udd64",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\ufe00",
          sqcup: "\u2294",
          sqcups: "\u2294\ufe00",
          Sqrt: "\u221a",
          sqsub: "\u228f",
          sqsube: "\u2291",
          sqsubset: "\u228f",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          squ: "\u25a1",
          Square: "\u25a1",
          square: "\u25a1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228f",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25aa",
          squf: "\u25aa",
          srarr: "\u2192",
          Sscr: "\ud835\udcae",
          sscr: "\ud835\udcc8",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22c6",
          Star: "\u22c6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03f5",
          straightphi: "\u03d5",
          strns: "\xaf",
          Sub: "\u22d0",
          sub: "\u2282",
          subdot: "\u2abd",
          subE: "\u2ac5",
          sube: "\u2286",
          subedot: "\u2ac3",
          submult: "\u2ac1",
          subnE: "\u2acb",
          subne: "\u228a",
          subplus: "\u2abf",
          subrarr: "\u2979",
          Subset: "\u22d0",
          subset: "\u2282",
          subseteq: "\u2286",
          subseteqq: "\u2ac5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228a",
          subsetneqq: "\u2acb",
          subsim: "\u2ac7",
          subsub: "\u2ad5",
          subsup: "\u2ad3",
          succ: "\u227b",
          succapprox: "\u2ab8",
          succcurlyeq: "\u227d",
          Succeeds: "\u227b",
          SucceedsEqual: "\u2ab0",
          SucceedsSlantEqual: "\u227d",
          SucceedsTilde: "\u227f",
          succeq: "\u2ab0",
          succnapprox: "\u2aba",
          succneqq: "\u2ab6",
          succnsim: "\u22e9",
          succsim: "\u227f",
          SuchThat: "\u220b",
          Sum: "\u2211",
          sum: "\u2211",
          sung: "\u266a",
          Sup: "\u22d1",
          sup: "\u2283",
          sup1: "\xb9",
          sup2: "\xb2",
          sup3: "\xb3",
          supdot: "\u2abe",
          supdsub: "\u2ad8",
          supE: "\u2ac6",
          supe: "\u2287",
          supedot: "\u2ac4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27c9",
          suphsub: "\u2ad7",
          suplarr: "\u297b",
          supmult: "\u2ac2",
          supnE: "\u2acc",
          supne: "\u228b",
          supplus: "\u2ac0",
          Supset: "\u22d1",
          supset: "\u2283",
          supseteq: "\u2287",
          supseteqq: "\u2ac6",
          supsetneq: "\u228b",
          supsetneqq: "\u2acc",
          supsim: "\u2ac8",
          supsub: "\u2ad4",
          supsup: "\u2ad6",
          swarhk: "\u2926",
          swArr: "\u21d9",
          swarr: "\u2199",
          swarrow: "\u2199",
          swnwar: "\u292a",
          szlig: "\xdf",
          Tab: "\t",
          target: "\u2316",
          Tau: "\u03a4",
          tau: "\u03c4",
          tbrk: "\u23b4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20db",
          telrec: "\u2315",
          Tfr: "\ud835\udd17",
          tfr: "\ud835\udd31",
          there4: "\u2234",
          Therefore: "\u2234",
          therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03b8",
          thetasym: "\u03d1",
          thetav: "\u03d1",
          thickapprox: "\u2248",
          thicksim: "\u223c",
          ThickSpace: "\u205f\u200a",
          thinsp: "\u2009",
          ThinSpace: "\u2009",
          thkap: "\u2248",
          thksim: "\u223c",
          THORN: "\xde",
          thorn: "\xfe",
          Tilde: "\u223c",
          tilde: "\u02dc",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          times: "\xd7",
          timesb: "\u22a0",
          timesbar: "\u2a31",
          timesd: "\u2a30",
          tint: "\u222d",
          toea: "\u2928",
          top: "\u22a4",
          topbot: "\u2336",
          topcir: "\u2af1",
          Topf: "\ud835\udd4b",
          topf: "\ud835\udd65",
          topfork: "\u2ada",
          tosa: "\u2929",
          tprime: "\u2034",
          TRADE: "\u2122",
          trade: "\u2122",
          triangle: "\u25b5",
          triangledown: "\u25bf",
          triangleleft: "\u25c3",
          trianglelefteq: "\u22b4",
          triangleq: "\u225c",
          triangleright: "\u25b9",
          trianglerighteq: "\u22b5",
          tridot: "\u25ec",
          trie: "\u225c",
          triminus: "\u2a3a",
          TripleDot: "\u20db",
          triplus: "\u2a39",
          trisb: "\u29cd",
          tritime: "\u2a3b",
          trpezium: "\u23e2",
          Tscr: "\ud835\udcaf",
          tscr: "\ud835\udcc9",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040b",
          tshcy: "\u045b",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226c",
          twoheadleftarrow: "\u219e",
          twoheadrightarrow: "\u21a0",
          Uacute: "\xda",
          uacute: "\xfa",
          Uarr: "\u219f",
          uArr: "\u21d1",
          uarr: "\u2191",
          Uarrocir: "\u2949",
          Ubrcy: "\u040e",
          ubrcy: "\u045e",
          Ubreve: "\u016c",
          ubreve: "\u016d",
          Ucirc: "\xdb",
          ucirc: "\xfb",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21c5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296e",
          ufisht: "\u297e",
          Ufr: "\ud835\udd18",
          ufr: "\ud835\udd32",
          Ugrave: "\xd9",
          ugrave: "\xf9",
          uHar: "\u2963",
          uharl: "\u21bf",
          uharr: "\u21be",
          uhblk: "\u2580",
          ulcorn: "\u231c",
          ulcorner: "\u231c",
          ulcrop: "\u230f",
          ultri: "\u25f8",
          Umacr: "\u016a",
          umacr: "\u016b",
          uml: "\xa8",
          UnderBar: "_",
          UnderBrace: "\u23df",
          UnderBracket: "\u23b5",
          UnderParenthesis: "\u23dd",
          Union: "\u22c3",
          UnionPlus: "\u228e",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\ud835\udd4c",
          uopf: "\ud835\udd66",
          UpArrow: "\u2191",
          Uparrow: "\u21d1",
          uparrow: "\u2191",
          UpArrowBar: "\u2912",
          UpArrowDownArrow: "\u21c5",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21d5",
          updownarrow: "\u2195",
          UpEquilibrium: "\u296e",
          upharpoonleft: "\u21bf",
          upharpoonright: "\u21be",
          uplus: "\u228e",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          Upsi: "\u03d2",
          upsi: "\u03c5",
          upsih: "\u03d2",
          Upsilon: "\u03a5",
          upsilon: "\u03c5",
          UpTee: "\u22a5",
          UpTeeArrow: "\u21a5",
          upuparrows: "\u21c8",
          urcorn: "\u231d",
          urcorner: "\u231d",
          urcrop: "\u230e",
          Uring: "\u016e",
          uring: "\u016f",
          urtri: "\u25f9",
          Uscr: "\ud835\udcb0",
          uscr: "\ud835\udcca",
          utdot: "\u22f0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25b5",
          utrif: "\u25b4",
          uuarr: "\u21c8",
          Uuml: "\xdc",
          uuml: "\xfc",
          uwangle: "\u29a7",
          vangrt: "\u299c",
          varepsilon: "\u03f5",
          varkappa: "\u03f0",
          varnothing: "\u2205",
          varphi: "\u03d5",
          varpi: "\u03d6",
          varpropto: "\u221d",
          vArr: "\u21d5",
          varr: "\u2195",
          varrho: "\u03f1",
          varsigma: "\u03c2",
          varsubsetneq: "\u228a\ufe00",
          varsubsetneqq: "\u2acb\ufe00",
          varsupsetneq: "\u228b\ufe00",
          varsupsetneqq: "\u2acc\ufe00",
          vartheta: "\u03d1",
          vartriangleleft: "\u22b2",
          vartriangleright: "\u22b3",
          Vbar: "\u2aeb",
          vBar: "\u2ae8",
          vBarv: "\u2ae9",
          Vcy: "\u0412",
          vcy: "\u0432",
          VDash: "\u22ab",
          Vdash: "\u22a9",
          vDash: "\u22a8",
          vdash: "\u22a2",
          Vdashl: "\u2ae6",
          Vee: "\u22c1",
          vee: "\u2228",
          veebar: "\u22bb",
          veeeq: "\u225a",
          vellip: "\u22ee",
          Verbar: "\u2016",
          verbar: "|",
          Vert: "\u2016",
          vert: "|",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200a",
          Vfr: "\ud835\udd19",
          vfr: "\ud835\udd33",
          vltri: "\u22b2",
          vnsub: "\u2282\u20d2",
          vnsup: "\u2283\u20d2",
          Vopf: "\ud835\udd4d",
          vopf: "\ud835\udd67",
          vprop: "\u221d",
          vrtri: "\u22b3",
          Vscr: "\ud835\udcb1",
          vscr: "\ud835\udccb",
          vsubnE: "\u2acb\ufe00",
          vsubne: "\u228a\ufe00",
          vsupnE: "\u2acc\ufe00",
          vsupne: "\u228b\ufe00",
          Vvdash: "\u22aa",
          vzigzag: "\u299a",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2a5f",
          Wedge: "\u22c0",
          wedge: "\u2227",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\ud835\udd1a",
          wfr: "\ud835\udd34",
          Wopf: "\ud835\udd4e",
          wopf: "\ud835\udd68",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\ud835\udcb2",
          wscr: "\ud835\udccc",
          xcap: "\u22c2",
          xcirc: "\u25ef",
          xcup: "\u22c3",
          xdtri: "\u25bd",
          Xfr: "\ud835\udd1b",
          xfr: "\ud835\udd35",
          xhArr: "\u27fa",
          xharr: "\u27f7",
          Xi: "\u039e",
          xi: "\u03be",
          xlArr: "\u27f8",
          xlarr: "\u27f5",
          xmap: "\u27fc",
          xnis: "\u22fb",
          xodot: "\u2a00",
          Xopf: "\ud835\udd4f",
          xopf: "\ud835\udd69",
          xoplus: "\u2a01",
          xotime: "\u2a02",
          xrArr: "\u27f9",
          xrarr: "\u27f6",
          Xscr: "\ud835\udcb3",
          xscr: "\ud835\udccd",
          xsqcup: "\u2a06",
          xuplus: "\u2a04",
          xutri: "\u25b3",
          xvee: "\u22c1",
          xwedge: "\u22c0",
          Yacute: "\xdd",
          yacute: "\xfd",
          YAcy: "\u042f",
          yacy: "\u044f",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042b",
          ycy: "\u044b",
          yen: "\xa5",
          Yfr: "\ud835\udd1c",
          yfr: "\ud835\udd36",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\ud835\udd50",
          yopf: "\ud835\udd6a",
          Yscr: "\ud835\udcb4",
          yscr: "\ud835\udcce",
          YUcy: "\u042e",
          yucy: "\u044e",
          Yuml: "\u0178",
          yuml: "\xff",
          Zacute: "\u0179",
          zacute: "\u017a",
          Zcaron: "\u017d",
          zcaron: "\u017e",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017b",
          zdot: "\u017c",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200b",
          Zeta: "\u0396",
          zeta: "\u03b6",
          Zfr: "\u2128",
          zfr: "\ud835\udd37",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21dd",
          Zopf: "\u2124",
          zopf: "\ud835\udd6b",
          Zscr: "\ud835\udcb5",
          zscr: "\ud835\udccf",
          zwj: "\u200d",
          zwnj: "\u200c",
        },
        t.NGSP_UNICODE = "\ue500",
        t.NAMED_ENTITIES.ngsp = t.NGSP_UNICODE;
    }),
  ),
  hn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      class n {
        constructor(
          {
            closedByChildren: e,
            implicitNamespacePrefix: t,
            contentType: n = Dn.TagContentType.PARSABLE_DATA,
            closedByParent: r = !1,
            isVoid: s = !1,
            ignoreFirstLf: i = !1,
          } = {},
        ) {
          this.closedByChildren = {},
            this.closedByParent = !1,
            this.canSelfClose = !1,
            e && e.length > 0 &&
            e.forEach(((e) => this.closedByChildren[e] = !0)),
            this.isVoid = s,
            this.closedByParent = r || s,
            this.implicitNamespacePrefix = t || null,
            this.contentType = n,
            this.ignoreFirstLf = i;
        }
        isClosedByChild(e) {
          return this.isVoid || e.toLowerCase() in this.closedByChildren;
        }
      }
      let r, s;
      t.HtmlTagDefinition = n,
        t.getHtmlTagDefinition = function (e) {
          return s ||
            (r = new n(),
              s = {
                base: new n({ isVoid: !0 }),
                meta: new n({ isVoid: !0 }),
                area: new n({ isVoid: !0 }),
                embed: new n({ isVoid: !0 }),
                link: new n({ isVoid: !0 }),
                img: new n({ isVoid: !0 }),
                input: new n({ isVoid: !0 }),
                param: new n({ isVoid: !0 }),
                hr: new n({ isVoid: !0 }),
                br: new n({ isVoid: !0 }),
                source: new n({ isVoid: !0 }),
                track: new n({ isVoid: !0 }),
                wbr: new n({ isVoid: !0 }),
                p: new n({
                  closedByChildren: [
                    "address",
                    "article",
                    "aside",
                    "blockquote",
                    "div",
                    "dl",
                    "fieldset",
                    "footer",
                    "form",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "header",
                    "hgroup",
                    "hr",
                    "main",
                    "nav",
                    "ol",
                    "p",
                    "pre",
                    "section",
                    "table",
                    "ul",
                  ],
                  closedByParent: !0,
                }),
                thead: new n({ closedByChildren: ["tbody", "tfoot"] }),
                tbody: new n({
                  closedByChildren: ["tbody", "tfoot"],
                  closedByParent: !0,
                }),
                tfoot: new n({
                  closedByChildren: ["tbody"],
                  closedByParent: !0,
                }),
                tr: new n({ closedByChildren: ["tr"], closedByParent: !0 }),
                td: new n({
                  closedByChildren: ["td", "th"],
                  closedByParent: !0,
                }),
                th: new n({
                  closedByChildren: ["td", "th"],
                  closedByParent: !0,
                }),
                col: new n({ isVoid: !0 }),
                svg: new n({ implicitNamespacePrefix: "svg" }),
                math: new n({ implicitNamespacePrefix: "math" }),
                li: new n({ closedByChildren: ["li"], closedByParent: !0 }),
                dt: new n({ closedByChildren: ["dt", "dd"] }),
                dd: new n({
                  closedByChildren: ["dt", "dd"],
                  closedByParent: !0,
                }),
                rb: new n({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0,
                }),
                rt: new n({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0,
                }),
                rtc: new n({
                  closedByChildren: ["rb", "rtc", "rp"],
                  closedByParent: !0,
                }),
                rp: new n({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0,
                }),
                optgroup: new n({
                  closedByChildren: ["optgroup"],
                  closedByParent: !0,
                }),
                option: new n({
                  closedByChildren: ["option", "optgroup"],
                  closedByParent: !0,
                }),
                pre: new n({ ignoreFirstLf: !0 }),
                listing: new n({ ignoreFirstLf: !0 }),
                style: new n({ contentType: Dn.TagContentType.RAW_TEXT }),
                script: new n({ contentType: Dn.TagContentType.RAW_TEXT }),
                title: new n({
                  contentType: Dn.TagContentType.ESCAPABLE_RAW_TEXT,
                }),
                textarea: new n({
                  contentType: Dn.TagContentType.ESCAPABLE_RAW_TEXT,
                  ignoreFirstLf: !0,
                }),
              }),
            s[e] || r;
        };
    }),
  ),
  dn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.AstPath = class {
        constructor(e, t = -1) {
          this.path = e, this.position = t;
        }
        get empty() {
          return !this.path || !this.path.length;
        }
        get head() {
          return this.path[0];
        }
        get tail() {
          return this.path[this.path.length - 1];
        }
        parentOf(e) {
          return e && this.path[this.path.indexOf(e) - 1];
        }
        childOf(e) {
          return this.path[this.path.indexOf(e) + 1];
        }
        first(e) {
          for (let t = this.path.length - 1; t >= 0; t--) {
            let n = this.path[t];
            if (n instanceof e) return n;
          }
        }
        push(e) {
          this.path.push(e);
        }
        pop() {
          return this.path.pop();
        }
      };
    }),
  ),
  fn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Text = class {
        constructor(e, t, n) {
          this.value = e, this.sourceSpan = t, this.i18n = n;
        }
        visit(e, t) {
          return e.visitText(this, t);
        }
      };
      t.CDATA = class {
        constructor(e, t) {
          this.value = e, this.sourceSpan = t;
        }
        visit(e, t) {
          return e.visitCdata(this, t);
        }
      };
      t.Expansion = class {
        constructor(e, t, n, r, s, i) {
          this.switchValue = e,
            this.type = t,
            this.cases = n,
            this.sourceSpan = r,
            this.switchValueSourceSpan = s,
            this.i18n = i;
        }
        visit(e, t) {
          return e.visitExpansion(this, t);
        }
      };
      t.ExpansionCase = class {
        constructor(e, t, n, r, s) {
          this.value = e,
            this.expression = t,
            this.sourceSpan = n,
            this.valueSourceSpan = r,
            this.expSourceSpan = s;
        }
        visit(e, t) {
          return e.visitExpansionCase(this, t);
        }
      };
      t.Attribute = class {
        constructor(e, t, n, r = null, s = null, i = null) {
          this.name = e,
            this.value = t,
            this.sourceSpan = n,
            this.valueSpan = r,
            this.nameSpan = s,
            this.i18n = i;
        }
        visit(e, t) {
          return e.visitAttribute(this, t);
        }
      };
      class n {
        constructor(e, t, n, r, s = null, i = null, o = null, a = null) {
          this.name = e,
            this.attrs = t,
            this.children = n,
            this.sourceSpan = r,
            this.startSourceSpan = s,
            this.endSourceSpan = i,
            this.nameSpan = o,
            this.i18n = a;
        }
        visit(e, t) {
          return e.visitElement(this, t);
        }
      }
      t.Element = n;
      t.Comment = class {
        constructor(e, t) {
          this.value = e, this.sourceSpan = t;
        }
        visit(e, t) {
          return e.visitComment(this, t);
        }
      };
      function r(e, t, n = null) {
        const r = [],
          s = e.visit
            ? (t) => e.visit(t, n) || t.visit(e, n)
            : (t) => t.visit(e, n);
        return t.forEach(
          ((e) => {
            const t = s(e);
            t && r.push(t);
          }),
        ),
          r;
      }
      t.DocType = class {
        constructor(e, t) {
          this.value = e, this.sourceSpan = t;
        }
        visit(e, t) {
          return e.visitDocType(this, t);
        }
      }, t.visitAll = r;
      class s {
        constructor() {}
        visitElement(e, t) {
          this.visitChildren(
            t,
            ((t) => {
              t(e.attrs), t(e.children);
            }),
          );
        }
        visitAttribute(e, t) {}
        visitText(e, t) {}
        visitCdata(e, t) {}
        visitComment(e, t) {}
        visitDocType(e, t) {}
        visitExpansion(e, t) {
          return this.visitChildren(
            t,
            ((t) => {
              t(e.cases);
            }),
          );
        }
        visitExpansionCase(e, t) {}
        visitChildren(e, t) {
          let n = [], s = this;
          return t(
            (function (t) {
              t && n.push(r(s, t, e));
            }),
          ),
            Array.prototype.concat.apply([], n);
        }
      }
      function i(e) {
        const t = e.sourceSpan.start.offset;
        let r = e.sourceSpan.end.offset;
        return e instanceof n && (e.endSourceSpan
          ? r = e.endSourceSpan.end.offset
          : e.children && e.children.length &&
            (r = i(e.children[e.children.length - 1]).end)),
          { start: t, end: r };
      }
      t.RecursiveVisitor = s,
        t.findNode = function (e, t) {
          const n = [];
          return r(
            new class extends s {
              visit(e, r) {
                const s = i(e);
                if (!(s.start <= t && t < s.end)) return !0;
                n.push(e);
              }
            }(),
            e,
          ),
            new dn.AstPath(n, t);
        };
    }),
  ),
  mn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.assertArrayOfStrings = function (e, t) {
          if (null != t) {
            if (!Array.isArray(t)) {
              throw new Error(
                "Expected '".concat(e, "' to be an array of strings."),
              );
            }
            for (let n = 0; n < t.length; n += 1) {
              if ("string" != typeof t[n]) {
                throw new Error(
                  "Expected '".concat(e, "' to be an array of strings."),
                );
              }
            }
          }
        };
      const n = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
      t.assertInterpolationSymbols = function (e, t) {
        if (!(null == t || Array.isArray(t) && 2 == t.length)) {
          throw new Error(
            "Expected '".concat(e, "' to be an array, [start, end]."),
          );
        }
        if (null != t) {
          const e = t[0], r = t[1];
          n.forEach(
            ((t) => {
              if (t.test(e) || t.test(r)) {
                throw new Error(
                  "['".concat(e, "', '").concat(
                    r,
                    "'] contains unusable interpolation symbol.",
                  ),
                );
              }
            }),
          );
        }
      };
    }),
  ),
  gn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      class n {
        constructor(e, t) {
          this.start = e, this.end = t;
        }
        static fromArray(e) {
          return e
            ? (mn.assertInterpolationSymbols("interpolation", e),
              new n(e[0], e[1]))
            : t.DEFAULT_INTERPOLATION_CONFIG;
        }
      }
      t.InterpolationConfig = n,
        t.DEFAULT_INTERPOLATION_CONFIG = new n("{{", "}}");
    }),
  ),
  En = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n;
      var s;
      !function (e) {
        e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START",
          e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END",
          e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID",
          e[e.TAG_CLOSE = 3] = "TAG_CLOSE",
          e[e.TEXT = 4] = "TEXT",
          e[e.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT",
          e[e.RAW_TEXT = 6] = "RAW_TEXT",
          e[e.COMMENT_START = 7] = "COMMENT_START",
          e[e.COMMENT_END = 8] = "COMMENT_END",
          e[e.CDATA_START = 9] = "CDATA_START",
          e[e.CDATA_END = 10] = "CDATA_END",
          e[e.ATTR_NAME = 11] = "ATTR_NAME",
          e[e.ATTR_QUOTE = 12] = "ATTR_QUOTE",
          e[e.ATTR_VALUE = 13] = "ATTR_VALUE",
          e[e.DOC_TYPE_START = 14] = "DOC_TYPE_START",
          e[e.DOC_TYPE_END = 15] = "DOC_TYPE_END",
          e[e.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START",
          e[e.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE",
          e[e.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START",
          e[e.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END",
          e[e.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END",
          e[e.EOF = 21] = "EOF";
      }(s = t.TokenType || (t.TokenType = {}));
      class i {
        constructor(e, t, n) {
          this.type = e, this.parts = t, this.sourceSpan = n;
        }
      }
      t.Token = i;
      class a extends o.ParseError {
        constructor(e, t, n) {
          super(n, e), this.tokenType = t;
        }
      }
      t.TokenError = a;
      class u {
        constructor(e, t) {
          this.tokens = e, this.errors = t;
        }
      }
      t.TokenizeResult = u,
        t.tokenize = function (e, t, n, r = {}) {
          return new h(new o.ParseSourceFile(e, t), n, r).tokenize();
        };
      const c = /\r\n?/g;
      function l(e) {
        const t = e === r.$EOF ? "EOF" : String.fromCharCode(e);
        return 'Unexpected character "'.concat(t, '"');
      }
      function p(e) {
        return 'Unknown entity "'.concat(
          e,
          '" - use the "&#<decimal>;" or  "&#x<hex>;" syntax',
        );
      }
      class D {
        constructor(e) {
          this.error = e;
        }
      }
      class h {
        constructor(e, t, n) {
          this._getTagContentType = t,
            this._currentTokenStart = null,
            this._currentTokenType = null,
            this._expansionCaseStack = [],
            this._inInterpolation = !1,
            this._fullNameStack = [],
            this.tokens = [],
            this.errors = [],
            this._tokenizeIcu = n.tokenizeExpansionForms || !1,
            this._interpolationConfig = n.interpolationConfig ||
              gn.DEFAULT_INTERPOLATION_CONFIG,
            this._leadingTriviaCodePoints = n.leadingTriviaChars &&
              n.leadingTriviaChars.map(((e) => e.codePointAt(0) || 0)),
            this._canSelfClose = n.canSelfClose || !1,
            this._allowHtmComponentClosingTags =
              n.allowHtmComponentClosingTags || !1;
          const r = n.range ||
            {
              endPos: e.content.length,
              startPos: 0,
              startLine: 0,
              startCol: 0,
            };
          this._cursor = n.escapedString ? new T(e, r) : new C(e, r);
          try {
            this._cursor.init();
          } catch (e) {
            this.handleError(e);
          }
        }
        _processCarriageReturns(e) {
          return e.replace(c, "\n");
        }
        tokenize() {
          for (; this._cursor.peek() !== r.$EOF;) {
            const e = this._cursor.clone();
            try {
              if (this._attemptCharCode(r.$LT)) {
                if (this._attemptCharCode(r.$BANG)) {this._attemptStr("[CDATA[")
                    ? this._consumeCdata(e)
                    : this._attemptStr("--") ? this._consumeComment(e)
                    : this._attemptStrCaseInsensitive("doctype")
                    ? this._consumeDocType(e)
                    : this._consumeBogusComment(e);} else if (
                  this._attemptCharCode(r.$SLASH)
                ) {
                  this._consumeTagClose(e);
                } else {
                  const t = this._cursor.clone();
                  this._attemptCharCode(r.$QUESTION)
                    ? (this._cursor = t, this._consumeBogusComment(e))
                    : this._consumeTagOpen(e);
                }
              } else {
                this._tokenizeIcu && this._tokenizeExpansionForm() ||
                  this._consumeText();
              }
            } catch (e) {
              this.handleError(e);
            }
          }
          return this._beginToken(s.EOF),
            this._endToken([]),
            new u(
              function (e) {
                const t = [];
                let n = void 0;
                for (let r = 0; r < e.length; r++) {
                  const i = e[r];
                  n && n.type == s.TEXT && i.type == s.TEXT
                    ? (n.parts[0] += i.parts[0],
                      n.sourceSpan.end = i.sourceSpan.end)
                    : (n = i, t.push(n));
                }
                return t;
              }(this.tokens),
              this.errors,
            );
        }
        _tokenizeExpansionForm() {
          if (
            this.isExpansionFormStart()
          ) {
            return this._consumeExpansionFormStart(), !0;
          }
          if (
            ((e = this._cursor.peek()) === r.$EQ || r.isAsciiLetter(e) ||
              r.isDigit(e)) && this._isInExpansionForm()
          ) {
            return this._consumeExpansionCaseStart(), !0;
          }
          var e;
          if (this._cursor.peek() === r.$RBRACE) {
            if (
              this._isInExpansionCase()
            ) {
              return this._consumeExpansionCaseEnd(), !0;
            }
            if (
              this._isInExpansionForm()
            ) {
              return this._consumeExpansionFormEnd(), !0;
            }
          }
          return !1;
        }
        _beginToken(e, t = this._cursor.clone()) {
          this._currentTokenStart = t, this._currentTokenType = e;
        }
        _endToken(e, t = this._cursor.clone()) {
          if (null === this._currentTokenStart) {
            throw new a(
              "Programming error - attempted to end a token when there was no start to the token",
              this._currentTokenType,
              this._cursor.getSpan(t),
            );
          }
          if (null === this._currentTokenType) {
            throw new a(
              "Programming error - attempted to end a token which has no token type",
              null,
              this._cursor.getSpan(this._currentTokenStart),
            );
          }
          const n = new i(
            this._currentTokenType,
            e,
            this._cursor.getSpan(
              this._currentTokenStart,
              this._leadingTriviaCodePoints,
            ),
          );
          return this.tokens.push(n),
            this._currentTokenStart = null,
            this._currentTokenType = null,
            n;
        }
        _createError(e, t) {
          this._isInExpansionForm() &&
            (e +=
              ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
          const n = new a(e, this._currentTokenType, t);
          return this._currentTokenStart = null,
            this._currentTokenType = null,
            new D(n);
        }
        handleError(e) {
          if (
            e instanceof y &&
            (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))),
              !(e instanceof D)
          ) {
            throw e;
          }
          this.errors.push(e.error);
        }
        _attemptCharCode(e) {
          return this._cursor.peek() === e && (this._cursor.advance(), !0);
        }
        _attemptCharCodeCaseInsensitive(e) {
          return t = this._cursor.peek(),
            n = e,
            E(t) == E(n) && (this._cursor.advance(), !0);
          var t, n;
        }
        _requireCharCode(e) {
          const t = this._cursor.clone();
          if (!this._attemptCharCode(e)) {
            throw this._createError(
              l(this._cursor.peek()),
              this._cursor.getSpan(t),
            );
          }
        }
        _attemptStr(e) {
          const t = e.length;
          if (this._cursor.charsLeft() < t) return !1;
          const n = this._cursor.clone();
          for (let r = 0; r < t; r++) {
            if (!this._attemptCharCode(e.charCodeAt(r))) {
              return this._cursor = n, !1;
            }
          }
          return !0;
        }
        _attemptStrCaseInsensitive(e) {
          for (let t = 0; t < e.length; t++) {
            if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) {
              return !1;
            }
          }
          return !0;
        }
        _requireStr(e) {
          const t = this._cursor.clone();
          if (!this._attemptStr(e)) {
            throw this._createError(
              l(this._cursor.peek()),
              this._cursor.getSpan(t),
            );
          }
        }
        _requireStrCaseInsensitive(e) {
          const t = this._cursor.clone();
          if (!this._attemptStrCaseInsensitive(e)) {
            throw this._createError(
              l(this._cursor.peek()),
              this._cursor.getSpan(t),
            );
          }
        }
        _attemptCharCodeUntilFn(e) {
          for (; !e(this._cursor.peek());) this._cursor.advance();
        }
        _requireCharCodeUntilFn(e, t) {
          const n = this._cursor.clone();
          this._attemptCharCodeUntilFn(e);
          if (this._cursor.clone().diff(n) < t) {
            throw this._createError(
              l(this._cursor.peek()),
              this._cursor.getSpan(n),
            );
          }
        }
        _attemptUntilChar(e) {
          for (; this._cursor.peek() !== e;) this._cursor.advance();
        }
        _readChar(e) {
          if (e && this._cursor.peek() === r.$AMPERSAND) {
            return this._decodeEntity();
          }
          {
            const e = String.fromCodePoint(this._cursor.peek());
            return this._cursor.advance(), e;
          }
        }
        _decodeEntity() {
          const e = this._cursor.clone();
          if (this._cursor.advance(), !this._attemptCharCode(r.$HASH)) {
            const t = this._cursor.clone();
            if (
              this._attemptCharCodeUntilFn(g),
                this._cursor.peek() != r.$SEMICOLON
            ) {
              return this._cursor = t, "&";
            }
            const n = this._cursor.getChars(t);
            this._cursor.advance();
            const s = Dn.NAMED_ENTITIES[n];
            if (!s) throw this._createError(p(n), this._cursor.getSpan(e));
            return s;
          }
          {
            const t = this._attemptCharCode(r.$x) ||
                this._attemptCharCode(r.$X),
              n = this._cursor.clone();
            if (
              this._attemptCharCodeUntilFn(m),
                this._cursor.peek() != r.$SEMICOLON
            ) {
              throw this._createError(
                l(this._cursor.peek()),
                this._cursor.getSpan(),
              );
            }
            const s = this._cursor.getChars(n);
            this._cursor.advance();
            try {
              const e = parseInt(s, t ? 16 : 10);
              return String.fromCharCode(e);
            } catch (t) {
              throw this._createError(
                p(this._cursor.getChars(e)),
                this._cursor.getSpan(),
              );
            }
          }
        }
        _consumeRawText(e, t) {
          this._beginToken(e ? s.ESCAPABLE_RAW_TEXT : s.RAW_TEXT);
          const n = [];
          for (;;) {
            const r = this._cursor.clone(), s = t();
            if (this._cursor = r, s) break;
            n.push(this._readChar(e));
          }
          return this._endToken([this._processCarriageReturns(n.join(""))]);
        }
        _consumeComment(e) {
          this._beginToken(s.COMMENT_START, e),
            this._endToken([]),
            this._consumeRawText(!1, (() => this._attemptStr("--\x3e"))),
            this._beginToken(s.COMMENT_END),
            this._requireStr("--\x3e"),
            this._endToken([]);
        }
        _consumeBogusComment(e) {
          this._beginToken(s.COMMENT_START, e),
            this._endToken([]),
            this._consumeRawText(!1, (() => this._cursor.peek() === r.$GT)),
            this._beginToken(s.COMMENT_END),
            this._cursor.advance(),
            this._endToken([]);
        }
        _consumeCdata(e) {
          this._beginToken(s.CDATA_START, e),
            this._endToken([]),
            this._consumeRawText(!1, (() => this._attemptStr("]]>"))),
            this._beginToken(s.CDATA_END),
            this._requireStr("]]>"),
            this._endToken([]);
        }
        _consumeDocType(e) {
          this._beginToken(s.DOC_TYPE_START, e),
            this._endToken([]),
            this._consumeRawText(!1, (() => this._cursor.peek() === r.$GT)),
            this._beginToken(s.DOC_TYPE_END),
            this._cursor.advance(),
            this._endToken([]);
        }
        _consumePrefixAndName() {
          const e = this._cursor.clone();
          let t = "";
          for (
            ;
            this._cursor.peek() !== r.$COLON &&
            !(((n = this._cursor.peek()) < r.$a || r.$z < n) &&
              (n < r.$A || r.$Z < n) && (n < r.$0 || n > r.$9));
          ) {
            this._cursor.advance();
          }
          var n;
          let s;
          this._cursor.peek() === r.$COLON
            ? (t = this._cursor.getChars(e),
              this._cursor.advance(),
              s = this._cursor.clone())
            : s = e,
            this._requireCharCodeUntilFn(f, "" === t ? 0 : 1);
          return [t, this._cursor.getChars(s)];
        }
        _consumeTagOpen(e) {
          let t, n, i, o = this.tokens.length;
          const a = this._cursor.clone(), u = [];
          try {
            if (!r.isAsciiLetter(this._cursor.peek())) {
              throw this._createError(
                l(this._cursor.peek()),
                this._cursor.getSpan(e),
              );
            }
            for (
              i = this._consumeTagOpenStart(e),
                n = i.parts[0],
                t = i.parts[1],
                this._attemptCharCodeUntilFn(d);
              this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT;
            ) {
              const [e, t] = this._consumeAttributeName();
              if (
                this._attemptCharCodeUntilFn(d), this._attemptCharCode(r.$EQ)
              ) {
                this._attemptCharCodeUntilFn(d);
                const n = this._consumeAttributeValue();
                u.push({ prefix: e, name: t, value: n });
              } else u.push({ prefix: e, name: t });
              this._attemptCharCodeUntilFn(d);
            }
            this._consumeTagOpenEnd();
          } catch (t) {
            if (t instanceof D) {
              return this._cursor = a,
                i && (this.tokens.length = o),
                this._beginToken(s.TEXT, e),
                void this._endToken(["<"]);
            }
            throw t;
          }
          if (
            this._canSelfClose &&
            this.tokens[this.tokens.length - 1].type === s.TAG_OPEN_END_VOID
          ) {
            return;
          }
          const c = this._getTagContentType(
            t,
            n,
            this._fullNameStack.length > 0,
            u,
          );
          this._handleFullNameStackForTagOpen(n, t),
            c === Dn.TagContentType.RAW_TEXT
              ? this._consumeRawTextWithTagClose(n, t, !1)
              : c === Dn.TagContentType.ESCAPABLE_RAW_TEXT &&
                this._consumeRawTextWithTagClose(n, t, !0);
        }
        _consumeRawTextWithTagClose(e, t, n) {
          this._consumeRawText(
            n,
            (() =>
              !!this._attemptCharCode(r.$LT) &&
              (!!this._attemptCharCode(r.$SLASH) &&
                (this._attemptCharCodeUntilFn(d),
                  !!this._attemptStrCaseInsensitive(
                    e
                      ? "".concat(e, ":").concat(t)
                      : t,
                  ) &&
                  (this._attemptCharCodeUntilFn(d),
                    this._attemptCharCode(r.$GT))))),
          );
          this._beginToken(s.TAG_CLOSE),
            this._requireCharCodeUntilFn(((e) => e === r.$GT), 3),
            this._cursor.advance(),
            this._endToken([e, t]),
            this._handleFullNameStackForTagClose(e, t);
        }
        _consumeTagOpenStart(e) {
          this._beginToken(s.TAG_OPEN_START, e);
          const t = this._consumePrefixAndName();
          return this._endToken(t);
        }
        _consumeAttributeName() {
          const e = this._cursor.peek();
          if (e === r.$SQ || e === r.$DQ) {
            throw this._createError(l(e), this._cursor.getSpan());
          }
          this._beginToken(s.ATTR_NAME);
          const t = this._consumePrefixAndName();
          return this._endToken(t), t;
        }
        _consumeAttributeValue() {
          let e;
          if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
            this._beginToken(s.ATTR_QUOTE);
            const t = this._cursor.peek();
            this._cursor.advance(),
              this._endToken([String.fromCodePoint(t)]),
              this._beginToken(s.ATTR_VALUE);
            const n = [];
            for (; this._cursor.peek() !== t;) n.push(this._readChar(!0));
            e = this._processCarriageReturns(n.join("")),
              this._endToken([e]),
              this._beginToken(s.ATTR_QUOTE),
              this._cursor.advance(),
              this._endToken([String.fromCodePoint(t)]);
          } else {
            this._beginToken(s.ATTR_VALUE);
            const t = this._cursor.clone();
            this._requireCharCodeUntilFn(f, 1),
              e = this._processCarriageReturns(this._cursor.getChars(t)),
              this._endToken([e]);
          }
          return e;
        }
        _consumeTagOpenEnd() {
          const e = this._attemptCharCode(r.$SLASH) ? s.TAG_OPEN_END_VOID
          : s.TAG_OPEN_END;
          this._beginToken(e), this._requireCharCode(r.$GT), this._endToken([]);
        }
        _consumeTagClose(e) {
          if (
            this._beginToken(s.TAG_CLOSE, e),
              this._attemptCharCodeUntilFn(d),
              this._allowHtmComponentClosingTags &&
              this._attemptCharCode(r.$SLASH)
          ) {
            this._attemptCharCodeUntilFn(d),
              this._requireCharCode(r.$GT),
              this._endToken([]);
          } else {
            const [e, t] = this._consumePrefixAndName();
            this._attemptCharCodeUntilFn(d),
              this._requireCharCode(r.$GT),
              this._endToken([e, t]),
              this._handleFullNameStackForTagClose(e, t);
          }
        }
        _consumeExpansionFormStart() {
          this._beginToken(s.EXPANSION_FORM_START),
            this._requireCharCode(r.$LBRACE),
            this._endToken([]),
            this._expansionCaseStack.push(s.EXPANSION_FORM_START),
            this._beginToken(s.RAW_TEXT);
          const e = this._readUntil(r.$COMMA);
          this._endToken([e]),
            this._requireCharCode(r.$COMMA),
            this._attemptCharCodeUntilFn(d),
            this._beginToken(s.RAW_TEXT);
          const t = this._readUntil(r.$COMMA);
          this._endToken([t]),
            this._requireCharCode(r.$COMMA),
            this._attemptCharCodeUntilFn(d);
        }
        _consumeExpansionCaseStart() {
          this._beginToken(s.EXPANSION_CASE_VALUE);
          const e = this._readUntil(r.$LBRACE).trim();
          this._endToken([e]),
            this._attemptCharCodeUntilFn(d),
            this._beginToken(s.EXPANSION_CASE_EXP_START),
            this._requireCharCode(r.$LBRACE),
            this._endToken([]),
            this._attemptCharCodeUntilFn(d),
            this._expansionCaseStack.push(s.EXPANSION_CASE_EXP_START);
        }
        _consumeExpansionCaseEnd() {
          this._beginToken(s.EXPANSION_CASE_EXP_END),
            this._requireCharCode(r.$RBRACE),
            this._endToken([]),
            this._attemptCharCodeUntilFn(d),
            this._expansionCaseStack.pop();
        }
        _consumeExpansionFormEnd() {
          this._beginToken(s.EXPANSION_FORM_END),
            this._requireCharCode(r.$RBRACE),
            this._endToken([]),
            this._expansionCaseStack.pop();
        }
        _consumeText() {
          const e = this._cursor.clone();
          this._beginToken(s.TEXT, e);
          const t = [];
          do {
            this._interpolationConfig &&
              this._attemptStr(this._interpolationConfig.start)
              ? (t.push(this._interpolationConfig.start),
                this._inInterpolation = !0)
              : this._interpolationConfig && this._inInterpolation &&
                  this._attemptStr(this._interpolationConfig.end)
              ? (t.push(this._interpolationConfig.end),
                this._inInterpolation = !1) : t.push(this._readChar(!0));
          } while (!this._isTextEnd());
          this._endToken([this._processCarriageReturns(t.join(""))]);
        }
        _isTextEnd() {
          if (
            this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF
          ) {
            return !0;
          }
          if (this._tokenizeIcu && !this._inInterpolation) {
            if (this.isExpansionFormStart()) return !0;
            if (
              this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()
            ) {
              return !0;
            }
          }
          return !1;
        }
        _readUntil(e) {
          const t = this._cursor.clone();
          return this._attemptUntilChar(e), this._cursor.getChars(t);
        }
        _isInExpansionCase() {
          return this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] ===
              s.EXPANSION_CASE_EXP_START;
        }
        _isInExpansionForm() {
          return this._expansionCaseStack.length > 0 &&
            this._expansionCaseStack[this._expansionCaseStack.length - 1] ===
              s.EXPANSION_FORM_START;
        }
        isExpansionFormStart() {
          if (this._cursor.peek() !== r.$LBRACE)return !1;
          if (this._interpolationConfig) {
            const e = this._cursor.clone(),
              t = this._attemptStr(this._interpolationConfig.start);
            return this._cursor = e, !t;
          }
          return !0;
        }
        _handleFullNameStackForTagOpen(e, t) {
          const n = Dn.mergeNsAndName(e, t);
          0 !== this._fullNameStack.length &&
              this._fullNameStack[this._fullNameStack.length - 1] !== n ||
            this._fullNameStack.push(n);
        }
        _handleFullNameStackForTagClose(e, t) {
          const n = Dn.mergeNsAndName(e, t);
          0 !== this._fullNameStack.length &&
            this._fullNameStack[this._fullNameStack.length - 1] === n &&
            this._fullNameStack.pop();
        }
      }
      function d(e) {
        return !r.isWhitespace(e) || e === r.$EOF;
      }
      function f(e) {
        return r.isWhitespace(e) || e === r.$GT || e === r.$SLASH ||
          e === r.$SQ || e === r.$DQ || e === r.$EQ;
      }
      function m(e) {
        return e == r.$SEMICOLON || e == r.$EOF || !r.isAsciiHexDigit(e);
      }
      function g(e) {
        return e == r.$SEMICOLON || e == r.$EOF || !r.isAsciiLetter(e);
      }
      function E(e) {
        return e >= r.$a && e <= r.$z ? e - r.$a + r.$A : e;
      }
      class C {
        constructor(e, t) {
          if (e instanceof C) {
            this.file = e.file,
              this.input = e.input,
              this.end = e.end,
              this.state = Object.assign({}, e.state);
          } else {
            if (!t) {
              throw new Error(
                "Programming error: the range argument must be provided with a file argument.",
              );
            }
            this.file = e,
              this.input = e.content,
              this.end = t.endPos,
              this.state = {
                peek: -1,
                offset: t.startPos,
                line: t.startLine,
                column: t.startCol,
              };
          }
        }
        clone() {
          return new C(this);
        }
        peek() {
          return this.state.peek;
        }
        charsLeft() {
          return this.end - this.state.offset;
        }
        diff(e) {
          return this.state.offset - e.state.offset;
        }
        advance() {
          this.advanceState(this.state);
        }
        init() {
          this.updatePeek(this.state);
        }
        getSpan(e, t) {
          if (e = e || this, t) {
            for (
              e = e.clone(); this.diff(e) > 0 && -1 !== t.indexOf(e.peek());
            ) {
              e.advance();
            }
          }
          return new o.ParseSourceSpan(
            new o.ParseLocation(
              e.file,
              e.state.offset,
              e.state.line,
              e.state.column,
            ),
            new o.ParseLocation(
              this.file,
              this.state.offset,
              this.state.line,
              this.state.column,
            ),
          );
        }
        getChars(e) {
          return this.input.substring(e.state.offset, this.state.offset);
        }
        charAt(e) {
          return this.input.charCodeAt(e);
        }
        advanceState(e) {
          if (e.offset >= this.end) {
            throw this.state = e, new y('Unexpected character "EOF"', this);
          }
          const t = this.charAt(e.offset);
          t === r.$LF ? (e.line++, e.column = 0) : r.isNewLine(t) || e.column++,
            e.offset++,
            this.updatePeek(e);
        }
        updatePeek(e) {
          e.peek = e.offset >= this.end ? r.$EOF : this.charAt(e.offset);
        }
      }
      class T extends C {
        constructor(e, t) {
          e instanceof T
            ? (super(e),
              this.internalState = Object.assign({}, e.internalState))
            : (super(e, t), this.internalState = this.state);
        }
        advance() {
          this.state = this.internalState,
            super.advance(),
            this.processEscapeSequence();
        }
        init() {
          super.init(), this.processEscapeSequence();
        }
        clone() {
          return new T(this);
        }
        getChars(e) {
          const t = e.clone();
          let n = "";
          for (
            ; t.internalState.offset < this.internalState.offset;
          ) {
            n += String.fromCodePoint(t.peek()), t.advance();
          }
          return n;
        }
        processEscapeSequence() {
          const e = () => this.internalState.peek;
          if (e() === r.$BACKSLASH) {
            if (
              this.internalState = Object.assign({}, this.state),
                this.advanceState(this.internalState),
                e() === r.$n
            ) {
              this.state.peek = r.$LF;
            } else if (e() === r.$r)this.state.peek = r.$CR;
            else if (e() === r.$v)this.state.peek = r.$VTAB;
            else if (e() === r.$t) this.state.peek = r.$TAB;
            else if (e() === r.$b) this.state.peek = r.$BSPACE;
            else if (e() === r.$f) this.state.peek = r.$FF;
            else if (e() === r.$u) {
              if (this.advanceState(this.internalState), e() === r.$LBRACE) {
                this.advanceState(this.internalState);
                const t = this.clone();
                let n = 0;
                for (; e() !== r.$RBRACE;) {
                  this.advanceState(this.internalState), n++;
                }
                this.state.peek = this.decodeHexDigits(t, n);
              } else {
                const e = this.clone();
                this.advanceState(this.internalState),
                  this.advanceState(this.internalState),
                  this.advanceState(this.internalState),
                  this.state.peek = this.decodeHexDigits(e, 4);
              }
            } else if (e() === r.$x) {
              this.advanceState(this.internalState);
              const e = this.clone();
              this.advanceState(this.internalState),
                this.state.peek = this.decodeHexDigits(e, 2);
            } else if (r.isOctalDigit(e())) {
              let t = "", n = 0, s = this.clone();
              for (; r.isOctalDigit(e()) && n < 3;) {
                s = this.clone(),
                  t += String.fromCodePoint(e()),
                  this.advanceState(this.internalState),
                  n++;
              }
              this.state.peek = parseInt(t, 8),
                this.internalState = s.internalState;
            } else {
              r.isNewLine(this.internalState.peek)
                ? (this.advanceState(this.internalState),
                  this.state = this.internalState)
                : this.state.peek = this.internalState.peek;
            }
          }
        }
        decodeHexDigits(e, t) {
          const n = this.input.substr(e.internalState.offset, t),
            r = parseInt(n, 16);
          if (isNaN(r)) {
            throw e.state = e.internalState,
              new y("Invalid hexadecimal escape sequence", e);
          }
          return r;
        }
      }
      class y {
        constructor(e, t) {
          this.msg = e, this.cursor = t;
        }
      }
      t.CursorError = y;
    }),
  ),
  Cn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      class n extends o.ParseError {
        constructor(e, t, n) {
          super(t, n), this.elementName = e;
        }
        static create(e, t, r) {
          return new n(e, t, r);
        }
      }
      t.TreeError = n;
      class r {
        constructor(e, t) {
          this.rootNodes = e, this.errors = t;
        }
      }
      t.ParseTreeResult = r;
      t.Parser = class {
        constructor(e) {
          this.getTagDefinition = e;
        }
        parse(e, t, n, i = !1, o) {
          const a = (e) => (t, ...n) => e(t.toLowerCase(), ...n),
            u = i ? this.getTagDefinition : a(this.getTagDefinition),
            c = (e) => u(e).contentType,
            l = i ? o : a(o),
            p = o
              ? (e, t, n, r) => {
                const s = l(e, t, n, r);
                return void 0 !== s ? s : c(e);
              }
              : c,
            D = En.tokenize(e, t, p, n),
            h = n && n.canSelfClose || !1,
            d = n && n.allowHtmComponentClosingTags || !1,
            f = new s(D.tokens, u, h, d, i).build();
          return new r(f.rootNodes, D.errors.concat(f.errors));
        }
      };
      class s {
        constructor(e, t, n, r, s) {
          this.tokens = e,
            this.getTagDefinition = t,
            this.canSelfClose = n,
            this.allowHtmComponentClosingTags = r,
            this.isTagNameCaseSensitive = s,
            this._index = -1,
            this._rootNodes = [],
            this._errors = [],
            this._elementStack = [],
            this._advance();
        }
        build() {
          for (; this._peek.type !== En.TokenType.EOF;) {
            this._peek.type === En.TokenType.TAG_OPEN_START
              ? this._consumeStartTag(this._advance())
              : this._peek.type === En.TokenType.TAG_CLOSE
              ? (this._closeVoidElement(), this._consumeEndTag(this._advance()))
              : this._peek.type === En.TokenType.CDATA_START
              ? (this._closeVoidElement(), this._consumeCdata(this._advance()))
              : this._peek.type === En.TokenType.COMMENT_START
              ? (this._closeVoidElement(),
                this._consumeComment(this._advance()))
              : this._peek.type === En.TokenType.TEXT ||
                  this._peek.type === En.TokenType.RAW_TEXT ||
                  this._peek.type === En.TokenType.ESCAPABLE_RAW_TEXT
              ? (this._closeVoidElement(), this._consumeText(this._advance()))
              : this._peek.type === En.TokenType.EXPANSION_FORM_START
              ? this._consumeExpansion(this._advance())
              : this._peek.type === En.TokenType.DOC_TYPE_START
              ? this._consumeDocType(this._advance())
              : this._advance();
          }
          return new r(this._rootNodes, this._errors);
        }
        _advance() {
          const e = this._peek;
          return this._index < this.tokens.length - 1 && this._index++,
            this._peek = this.tokens[this._index],
            e;
        }
        _advanceIf(e) {
          return this._peek.type === e ? this._advance() : null;
        }
        _consumeCdata(e) {
          const t = this._advance(),
            n = this._getText(t),
            r = this._advanceIf(En.TokenType.CDATA_END);
          this._addToParent(
            new fn.CDATA(
              n,
              new o.ParseSourceSpan(
                e.sourceSpan.start,
                (r || t).sourceSpan.end,
              ),
            ),
          );
        }
        _consumeComment(e) {
          const t = this._advanceIf(En.TokenType.RAW_TEXT),
            n = this._advanceIf(En.TokenType.COMMENT_END),
            r = null != t ? t.parts[0].trim() : null,
            s = new o.ParseSourceSpan(
              e.sourceSpan.start,
              (n || t || e).sourceSpan.end,
            );
          this._addToParent(new fn.Comment(r, s));
        }
        _consumeDocType(e) {
          const t = this._advanceIf(En.TokenType.RAW_TEXT),
            n = this._advanceIf(En.TokenType.DOC_TYPE_END),
            r = null != t ? t.parts[0].trim() : null,
            s = new o.ParseSourceSpan(
              e.sourceSpan.start,
              (n || t || e).sourceSpan.end,
            );
          this._addToParent(new fn.DocType(r, s));
        }
        _consumeExpansion(e) {
          const t = this._advance(), r = this._advance(), s = [];
          for (; this._peek.type === En.TokenType.EXPANSION_CASE_VALUE;) {
            const e = this._parseExpansionCase();
            if (!e) return;
            s.push(e);
          }
          if (this._peek.type !== En.TokenType.EXPANSION_FORM_END) {
            return void this._errors.push(
              n.create(
                null,
                this._peek.sourceSpan,
                "Invalid ICU message. Missing '}'.",
              ),
            );
          }
          const i = new o.ParseSourceSpan(
            e.sourceSpan.start,
            this._peek.sourceSpan.end,
          );
          this._addToParent(
            new fn.Expansion(t.parts[0], r.parts[0], s, i, t.sourceSpan),
          ), this._advance();
        }
        _parseExpansionCase() {
          const e = this._advance();
          if (this._peek.type !== En.TokenType.EXPANSION_CASE_EXP_START) {
            return this._errors.push(
              n.create(
                null,
                this._peek.sourceSpan,
                "Invalid ICU message. Missing '{'.",
              ),
            ),
              null;
          }
          const t = this._advance(), r = this._collectExpansionExpTokens(t);
          if (!r) return null;
          const i = this._advance();
          r.push(new En.Token(En.TokenType.EOF, [], i.sourceSpan));
          const a = new s(
            r,
            this.getTagDefinition,
            this.canSelfClose,
            this.allowHtmComponentClosingTags,
            this.isTagNameCaseSensitive,
          ).build();
          if (
            a.errors.length > 0
          ) {
            return this._errors = this._errors.concat(a.errors), null;
          }
          const u = new o.ParseSourceSpan(e.sourceSpan.start, i.sourceSpan.end),
            c = new o.ParseSourceSpan(t.sourceSpan.start, i.sourceSpan.end);
          return new fn.ExpansionCase(
            e.parts[0],
            a.rootNodes,
            u,
            e.sourceSpan,
            c,
          );
        }
        _collectExpansionExpTokens(e) {
          const t = [], r = [En.TokenType.EXPANSION_CASE_EXP_START];
          for (;;) {
            if (
              this._peek.type !== En.TokenType.EXPANSION_FORM_START &&
                this._peek.type !== En.TokenType.EXPANSION_CASE_EXP_START ||
              r.push(this._peek.type),
                this._peek.type === En.TokenType.EXPANSION_CASE_EXP_END
            ) {
              if (!i(r, En.TokenType.EXPANSION_CASE_EXP_START)) {
                return this._errors.push(
                  n.create(
                    null,
                    e.sourceSpan,
                    "Invalid ICU message. Missing '}'.",
                  ),
                ),
                  null;
              }
              if (r.pop(), 0 == r.length) return t;
            }
            if (this._peek.type === En.TokenType.EXPANSION_FORM_END) {
              if (!i(r, En.TokenType.EXPANSION_FORM_START)) {
                return this._errors.push(
                  n.create(
                    null,
                    e.sourceSpan,
                    "Invalid ICU message. Missing '}'.",
                  ),
                ),
                  null;
              }
              r.pop();
            }
            if (
              this._peek.type === En.TokenType.EOF
            ) {
              return this._errors.push(
                n.create(
                  null,
                  e.sourceSpan,
                  "Invalid ICU message. Missing '}'.",
                ),
              ),
                null;
            }
            t.push(this._advance());
          }
        }
        _getText(e) {
          let t = e.parts[0];
          if (t.length > 0 && "\n" == t[0]) {
            const e = this._getParentElement();
            null != e && 0 == e.children.length &&
              this.getTagDefinition(e.name).ignoreFirstLf &&
              (t = t.substring(1));
          }
          return t;
        }
        _consumeText(e) {
          const t = this._getText(e);
          t.length > 0 && this._addToParent(new fn.Text(t, e.sourceSpan));
        }
        _closeVoidElement() {
          const e = this._getParentElement();
          e && this.getTagDefinition(e.name).isVoid && this._elementStack.pop();
        }
        _consumeStartTag(e) {
          const t = e.parts[0], r = e.parts[1], s = [];
          for (; this._peek.type === En.TokenType.ATTR_NAME;) {
            s.push(this._consumeAttr(this._advance()));
          }
          const i = this._getElementFullName(t, r, this._getParentElement());
          let a = !1;
          if (this._peek.type === En.TokenType.TAG_OPEN_END_VOID) {
            this._advance(), a = !0;
            const t = this.getTagDefinition(i);
            this.canSelfClose || t.canSelfClose || null !== Dn.getNsPrefix(i) ||
              t.isVoid ||
              this._errors.push(
                n.create(
                  i,
                  e.sourceSpan,
                  'Only void and foreign elements can be self closed "'.concat(
                    e.parts[1],
                    '"',
                  ),
                ),
              );
          } else {
            this._peek.type === En.TokenType.TAG_OPEN_END &&
              (this._advance(), a = !1);
          }
          const u = this._peek.sourceSpan.start,
            c = new o.ParseSourceSpan(e.sourceSpan.start, u),
            l = new o.ParseSourceSpan(
              e.sourceSpan.start.moveBy(1),
              e.sourceSpan.end,
            ),
            p = new fn.Element(i, s, [], c, c, void 0, l);
          this._pushElement(p), a && (this._popElement(i), p.endSourceSpan = c);
        }
        _pushElement(e) {
          const t = this._getParentElement();
          t && this.getTagDefinition(t.name).isClosedByChild(e.name) &&
          this._elementStack.pop(),
            this._addToParent(e),
            this._elementStack.push(e);
        }
        _consumeEndTag(e) {
          const t = this.allowHtmComponentClosingTags && 0 === e.parts.length
            ? null
            : this._getElementFullName(
              e.parts[0],
              e.parts[1],
              this._getParentElement(),
            );
          if (
            this._getParentElement() &&
            (this._getParentElement().endSourceSpan = e.sourceSpan),
              t && this.getTagDefinition(t).isVoid
          ) {
            this._errors.push(
              n.create(
                t,
                e.sourceSpan,
                'Void elements do not have end tags "'.concat(e.parts[1], '"'),
              ),
            );
          } else if (!this._popElement(t)) {
            const r = 'Unexpected closing tag "'.concat(
              t,
              '". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags',
            );
            this._errors.push(n.create(t, e.sourceSpan, r));
          }
        }
        _popElement(e) {
          for (let t = this._elementStack.length - 1; t >= 0; t--) {
            const n = this._elementStack[t];
            if (
              !e || (Dn.getNsPrefix(n.name)
                ? n.name == e
                : n.name.toLowerCase() == e.toLowerCase())
            ) {
              return this._elementStack.splice(
                t,
                this._elementStack.length - t,
              ),
                !0;
            }
            if (!this.getTagDefinition(n.name).closedByParent)return !1;
          }
          return !1;
        }
        _consumeAttr(e) {
          const t = Dn.mergeNsAndName(e.parts[0], e.parts[1]);
          let n = e.sourceSpan.end, r = "", s = void 0, i = void 0;
          if (this._peek.type === En.TokenType.ATTR_QUOTE) {
            i = this._advance().sourceSpan.start;
          }
          if (this._peek.type === En.TokenType.ATTR_VALUE) {
            const e = this._advance();
            r = e.parts[0], n = e.sourceSpan.end, s = e.sourceSpan;
          }
          if (
            this._peek.type === En.TokenType.ATTR_QUOTE
          ) {
            n = this._advance().sourceSpan.end, s = new o.ParseSourceSpan(i, n);
          }
          return new fn.Attribute(
            t,
            r,
            new o.ParseSourceSpan(e.sourceSpan.start, n),
            s,
            e.sourceSpan,
          );
        }
        _getParentElement() {
          return this._elementStack.length > 0
            ? this._elementStack[this._elementStack.length - 1] : null;
        }
        _getParentElementSkippingContainers() {
          let e = null;
          for (let t = this._elementStack.length - 1; t >= 0; t--) {
            if (!Dn.isNgContainer(this._elementStack[t].name)) {
              return { parent: this._elementStack[t], container: e };
            }
            e = this._elementStack[t];
          }
          return { parent: null, container: e };
        }
        _addToParent(e) {
          const t = this._getParentElement();
          null != t ? t.children.push(e) : this._rootNodes.push(e);
        }
        _insertBeforeContainer(e, t, n) {
          if (t) {
            if (e) {
              const r = e.children.indexOf(t);
              e.children[r] = n;
            } else this._rootNodes.push(n);
            n.children.push(t),
              this._elementStack.splice(this._elementStack.indexOf(t), 0, n);
          } else this._addToParent(n), this._elementStack.push(n);
        }
        _getElementFullName(e, t, n) {
          return "" === e &&
            "" ===
              (e = this.getTagDefinition(t).implicitNamespacePrefix || "") &&
            null != n && (e = Dn.getNsPrefix(n.name)),
            Dn.mergeNsAndName(e, t);
        }
      }
      function i(e, t) {
        return e.length > 0 && e[e.length - 1] === t;
      }
    }),
  ),
  Tn = t(
    (function (e, t) {
      /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = Cn;
      t.ParseTreeResult = n.ParseTreeResult, t.TreeError = n.TreeError;
      class r extends Cn.Parser {
        constructor() {
          super(hn.getHtmlTagDefinition);
        }
        parse(e, t, n, r = !1, s) {
          return super.parse(e, t, n, r, s);
        }
      }
      t.HtmlParser = r;
    }),
  ),
  yn = t(
    (function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        t.TagContentType = Dn.TagContentType;
      let n = null;
      t.parse = function (e, t = {}) {
        const {
          canSelfClose: r = !1,
          allowHtmComponentClosingTags: s = !1,
          isTagNameCaseSensitive: i = !1,
          getTagContentType: o,
        } = t;
        return (n || (n = new Tn.HtmlParser()), n).parse(
          e,
          "angular-html-parser",
          {
            tokenizeExpansionForms: !1,
            interpolationConfig: void 0,
            canSelfClose: r,
            allowHtmComponentClosingTags: s,
          },
          i,
          o,
        );
      };
    }),
  );
const { ParseSourceSpan: Sn, ParseLocation: _n, ParseSourceFile: bn } = o,
  { parse: Fn } = yt,
  { inferParserByLanguage: An } = Ve,
  { HTML_ELEMENT_ATTRIBUTES: vn, HTML_TAGS: wn, isUnknownNamespace: kn } = en,
  { hasPragma: Nn } = tn,
  { Node: xn } = an,
  { parseIeConditionalComment: On } = ln,
  { locStart: Rn, locEnd: Ln } = pn;
function Pn(
  e,
  {
    recognizeSelfClosing: t,
    normalizeTagName: n,
    normalizeAttributeName: r,
    allowHtmComponentClosingTags: s,
    isTagNameCaseSensitive: i,
    getTagContentType: a,
  },
  u,
) {
  const c = yn,
    {
      RecursiveVisitor: l,
      visitAll: p,
      Attribute: D,
      CDATA: h,
      Comment: d,
      DocType: f,
      Element: m,
      Text: g,
    } = fn,
    { ParseSourceSpan: E } = o,
    { getHtmlTagDefinition: C } = hn;
  let { rootNodes: T, errors: y } = c.parse(e, {
    canSelfClose: t,
    allowHtmComponentClosingTags: s,
    isTagNameCaseSensitive: i,
    getTagContentType: a,
  });
  const S = "vue" === u.parser &&
    T.some(
      ((e) =>
        e instanceof f && "html" === e.value ||
        e instanceof m && "html" === e.name.toLowerCase()),
    );
  if ("vue" !== u.parser || S) {
    if (S) {
      t = !0, n = !0, r = !0, s = !0, i = !1;
      const o = c.parse(e, {
        canSelfClose: t,
        allowHtmComponentClosingTags: s,
        isTagNameCaseSensitive: i,
      });
      T = o.rootNodes, y = o.errors;
    }
  } else {
    const n = (e) => {
      if (!e) return !1;
      if ("template" !== e.name) return !1;
      const t = e.attrs.find(((e) => "lang" === e.name)), n = t && t.value;
      return null == n || "html" === An(n, u);
    };
    if (T.some(n)) {
      let r;
      const o = () =>
          c.parse(e, {
            canSelfClose: t,
            allowHtmComponentClosingTags: s,
            isTagNameCaseSensitive: i,
          }),
        a = () => r || (r = o()),
        u = (e) =>
          a().rootNodes.find(
            (({ startSourceSpan: t }) =>
              t && t.start.offset === e.startSourceSpan.start.offset),
          );
      for (let e = 0; e < T.length; e++) {
        const t = T[e], { endSourceSpan: r, startSourceSpan: s } = t;
        if (null === r) y = a().errors, T[e] = u(t) || t;
        else if (n(t)) {
          const n = a(), i = s.end.offset, o = r.start.offset;
          for (const e of n.errors) {
            const { offset: t } = e.span.start;
            if (i < t && t < o) {
              y = [e];
              break;
            }
          }
          T[e] = u(t) || t;
        }
      }
    }
  }
  if (0 !== y.length) {
    const { msg: e, span: { start: t, end: n } } = y[0];
    throw St(e, {
      start: { line: t.line + 1, column: t.col + 1 },
      end: { line: n.line + 1, column: n.col + 1 },
    });
  }
  const _ = (e) => {
      const t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null,
        n = e.nameSpan.toString(),
        r = n.startsWith("".concat(t, ":")),
        s = r ? n.slice(t.length + 1) : n;
      e.name = s, e.namespace = t, e.hasExplicitNamespace = r;
    },
    b = (e, t) => {
      const n = e.toLowerCase();
      return t(n) ? n : e;
    };
  return p(
    new class extends l {
      visit(e) {
        ((e) => {
          if (e instanceof D) e.type = "attribute";
          else if (e instanceof h) e.type = "cdata";
          else if (e instanceof d) e.type = "comment";
          else if (e instanceof f) e.type = "docType";
          else if (e instanceof m) e.type = "element";
          else {
            if (!(e instanceof g)) {
              throw new Error("Unexpected node ".concat(JSON.stringify(e)));
            }
            e.type = "text";
          }
        })(e),
          ((e) => {
            e instanceof m
              ? (_(e),
                e.attrs.forEach(
                  ((e) => {
                    _(e),
                      e.valueSpan
                        ? (e.value = e.valueSpan.toString(),
                          /["']/.test(e.value[0]) &&
                          (e.value = e.value.slice(1, -1)))
                        : e.value = null;
                  }),
                ))
              : e instanceof d
              ? e.value = e.sourceSpan.toString().slice(
                "\x3c!--".length,
                -"--\x3e".length,
              )
              : e instanceof g && (e.value = e.sourceSpan.toString());
          })(e),
          ((e) => {
            if (e instanceof m) {
              const t = C(
                i
                  ? e.name
                  : e.name.toLowerCase(),
              );
              !e.namespace || e.namespace === t.implicitNamespacePrefix || kn(e)
                ? e.tagDefinition = t
                : e.tagDefinition = C("");
            }
          })(e),
          ((e) => {
            if (
              e instanceof m &&
              (!n ||
                e.namespace &&
                  e.namespace !== e.tagDefinition.implicitNamespacePrefix &&
                  !kn(e) ||
                (e.name = b(
                  e.name,
                  ((e) => e in wn),
                )),
                r)
            ) {
              const t = vn[e.name] || Object.create(null);
              e.attrs.forEach(
                ((n) => {
                  n.namespace || (n.name = b(
                    n.name,
                    ((n) => e.name in vn && (n in vn["*"] || n in t)),
                  ));
                }),
              );
            }
          })(e),
          ((e) => {
            e.sourceSpan && e.endSourceSpan &&
              (e.sourceSpan = new E(e.sourceSpan.start, e.endSourceSpan.end));
          })(e);
      }
    }(),
    T,
  ),
    T;
}
function Bn(e, t, n, r = !0) {
  const { frontMatter: s, content: i } = r
      ? Fn(e)
      : { frontMatter: null, content: e },
    o = new bn(e, t.filepath),
    a = new _n(o, 0, 0, 0),
    u = a.moveBy(e.length),
    c = { type: "root", sourceSpan: new Sn(a, u), children: Pn(i, n, t) };
  if (s) {
    const e = new _n(o, 0, 0, 0), t = e.moveBy(s.raw.length);
    s.sourceSpan = new Sn(e, t), c.children.unshift(s);
  }
  const l = new xn(c),
    p = (r, s) => {
      const { offset: i } = s,
        o = Bn(e.slice(0, i).replace(/[^\n\r]/g, " ") + r, t, n, !1);
      o.sourceSpan = new Sn(
        s,
        o.children[o.children.length - 1].sourceSpan.end,
      );
      const a = o.children[0];
      return a.length === i
        ? o.children.shift()
        : (a.sourceSpan = new Sn(
          a.sourceSpan.start.moveBy(i),
          a.sourceSpan.end,
        ),
          a.value = a.value.slice(i)),
        o;
    };
  return l.map(
    ((e) => {
      if ("comment" === e.type) {
        const t = On(e, p);
        if (t) return t;
      }
      return e;
    }),
  );
}
function In(
  {
    recognizeSelfClosing: e = !1,
    normalizeTagName: t = !1,
    normalizeAttributeName: n = !1,
    allowHtmComponentClosingTags: r = !1,
    isTagNameCaseSensitive: s = !1,
    getTagContentType: i,
  } = {},
) {
  return {
    parse: (o, a, u) =>
      Bn(o, u, {
        recognizeSelfClosing: e,
        normalizeTagName: t,
        normalizeAttributeName: n,
        allowHtmComponentClosingTags: r,
        isTagNameCaseSensitive: s,
        getTagContentType: i,
      }),
    hasPragma: Nn,
    astFormat: "html",
    locStart: Rn,
    locEnd: Ln,
  };
}
var qn = {
  parsers: {
    html: In({
      recognizeSelfClosing: !0,
      normalizeTagName: !0,
      normalizeAttributeName: !0,
      allowHtmComponentClosingTags: !0,
    }),
    angular: In(),
    vue: In({
      recognizeSelfClosing: !0,
      isTagNameCaseSensitive: !0,
      getTagContentType: (e, t, n, r) => {
        if (
          "html" !== e.toLowerCase() && !n &&
          ("template" !== e || r.some(
            (({ name: e, value: t }) => "lang" === e && "html" !== t),
          ))
        ) {
          return yn.TagContentType.RAW_TEXT;
        }
      },
    }),
    lwc: In(),
  },
};
export default qn;
