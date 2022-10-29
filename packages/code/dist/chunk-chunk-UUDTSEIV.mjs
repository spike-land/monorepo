import {
  Children,
  Component,
  Fragment,
  cloneElement,
  createContext,
  createElement,
  forwardRef,
  init_reactMod,
  isValidElement,
  reactMod_default,
  useCallback,
  useContext,
  useEffect,
  useId,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "./chunk-chunk-I6TZPSNP.mjs";
import {
  __commonJS,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM,
  define_process_default,
  init_define_process
} from "./chunk-chunk-DSXGUE46.mjs";

// ../../.yarn/global/cache/@emotion-memoize-npm-0.7.4-5648cf11b8-9.zip/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
var require_memoize_browser_cjs = __commonJS({
  "../../.yarn/global/cache/@emotion-memoize-npm-0.7.4-5648cf11b8-9.zip/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    function memoize(fn) {
      var cache = {};
      return function(arg) {
        if (cache[arg] === void 0)
          cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports.default = memoize;
  }
});

// ../../.yarn/global/cache/@emotion-is-prop-valid-npm-0.8.8-261a0f2426-9.zip/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js
var require_is_prop_valid_browser_cjs = __commonJS({
  "../../.yarn/global/cache/@emotion-is-prop-valid-npm-0.8.8-261a0f2426-9.zip/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var memoize = _interopDefault(require_memoize_browser_cjs());
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var index = memoize(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
    );
    exports.default = index;
  }
});

// ../../.yarn/global/cache/tslib-npm-2.4.0-9cb6dc5030-9.zip/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../.yarn/global/cache/tslib-npm-2.4.0-9cb6dc5030-9.zip/node_modules/tslib/tslib.js"(exports, module) {
    init_define_process();
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id3, v) {
          return exports2[id3] = previous ? previous(id3, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
        d.__proto__ = b2;
      } || function(d, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d[p] = b2[p];
      };
      __extends2 = function(d, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d, b2);
        function __() {
          this.constructor = d;
        }
        d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
        return c2 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m2, o) {
        for (var p in m2)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m2, p);
      };
      __createBinding2 = Object.create ? function(o, m2, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m2, k);
        if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m2[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m2, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m2[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
        if (m2)
          return m2.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m2 = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m2)
          return o;
        var i = m2.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m2 = i["return"]))
              m2.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a2 = arguments[i], j = 0, jl = a2.length; j < jl; j++, k++)
            r[k] = a2[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m2 = o[Symbol.asyncIterator], i;
        return m2 ? m2.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
init_define_process();
init_reactMod();
var MotionConfigContext = createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
init_define_process();
init_reactMod();
var MotionContext = createContext({});
function useVisualElementContext() {
  return useContext(MotionContext).visualElement;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
init_define_process();
init_reactMod();
var PresenceContext = createContext(null);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/is-browser.mjs
init_define_process();
var isBrowser = typeof document !== "undefined";

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
init_define_process();
init_reactMod();
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
init_define_process();
init_reactMod();
var LayoutGroupContext = createContext({});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
init_define_process();
init_reactMod();
var SwitchLayoutGroupContext = createContext({});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/index.mjs
init_define_process();
init_reactMod();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/LazyContext.mjs
init_define_process();
init_reactMod();
var LazyContext = createContext({ strict: false });

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement) {
  const parent = useVisualElementContext();
  const lazyContext = useContext(LazyContext);
  const presenceContext = useContext(PresenceContext);
  const reducedMotionConfig = useContext(MotionConfigContext).reducedMotion;
  const visualElementRef = useRef(void 0);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceId: presenceContext ? presenceContext.id : void 0,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(() => {
    visualElement2 && visualElement2.syncRender();
  });
  useEffect(() => {
    if (visualElement2 && visualElement2.animationState) {
      visualElement2.animationState.animateChanges();
    }
  });
  useIsomorphicLayoutEffect(() => () => visualElement2 && visualElement2.notifyUnmount(), []);
  return visualElement2;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
init_define_process();
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement2, externalRef) {
  return useCallback(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement2) {
        instance ? visualElement2.mount(instance) : visualElement2.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    [visualElement2]
  );
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
init_define_process();
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
init_define_process();
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
var variantProps = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate4 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate4) ? animate4 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate4 } = getCurrentTreeVariants(props, useContext(MotionContext));
  return useMemo(() => ({ initial, animate: animate4 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate4)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
init_define_process();
var createDefinition = (propNames) => ({
  isEnabled: (props) => propNames.some((name) => !!props[name])
});
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
init_define_process();
function loadFeatures(features) {
  for (const key in features) {
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/id.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-constant.mjs
init_define_process();
init_reactMod();
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/state.mjs
init_define_process();
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(() => {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
init_define_process();
init_reactMod();
var VisualElementHandler = class extends reactMod_default.Component {
  getSnapshotBeforeUpdate() {
    const { visualElement: visualElement2, props } = this.props;
    if (visualElement2)
      visualElement2.setProps(props);
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
init_define_process();
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent({ preloadedFeatures, createVisualElement, projectionNodeConstructor, useRender, useVisualState: useVisualState2, Component: Component2 }) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    const configAndProps = __spreadProps(__spreadValues(__spreadValues({}, useContext(MotionConfigContext)), props), {
      layoutId: useLayoutId(props)
    });
    const { isStatic } = configAndProps;
    let features = null;
    const context = useCreateMotionContext(props);
    const projectionId = isStatic ? void 0 : useProjectionId();
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement);
      const lazyStrictMode = useContext(LazyContext).strict;
      const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
      if (context.visualElement) {
        features = context.visualElement.loadFeatures(
          configAndProps,
          lazyStrictMode,
          preloadedFeatures,
          projectionId,
          projectionNodeConstructor || featureDefinitions.projectionNodeConstructor,
          initialLayoutGroupConfig
        );
      }
    }
    return createElement(
      VisualElementHandler,
      { visualElement: context.visualElement, props: configAndProps },
      features,
      createElement(MotionContext.Provider, { value: context }, useRender(Component2, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement))
    );
  }
  const ForwardRefComponent = forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
init_define_process();
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
init_define_process();
var isMotionValue = (value) => !!(value === null || value === void 0 ? void 0 : value.getVelocity);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
init_define_process();
var animationProps = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
];
var tapProps = ["whileTap", "onTap", "onTapStart", "onTapCancel"];
var panProps = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"];
var inViewProps = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
];
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "onHoverStart",
  "onHoverEnd",
  "layoutScroll",
  ...inViewProps,
  ...tapProps,
  ...animationProps,
  ...panProps
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
init_define_process();
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/resolve-value.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
init_define_process();
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
init_define_process();
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext(MotionContext);
  const presenceContext = useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props);
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate4 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate4 === void 0)
      animate4 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate4 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      const _a = resolved, { transitionEnd, transition } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd)
        values[key] = transitionEnd[key];
    });
  }
  return values;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/types.mjs
init_define_process();
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/use-dom-event.mjs
init_define_process();
init_reactMod();
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
function useDomEvent(ref, eventName, handler, options) {
  useEffect(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/event-info.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
init_define_process();
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/event-info.mjs
function filterPrimaryPointer(eventHandler) {
  return (event) => {
    const isMouseEvent2 = event instanceof MouseEvent;
    const isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType = "page") {
  const primaryTouch = e.touches[0] || e.changedTouches[0];
  const point2 = primaryTouch || defaultPagePoint;
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function pointFromMouse(point2, pointType = "page") {
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType = "page") {
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = (handler, shouldFilterPrimaryPointer = false) => {
  const listener = (event) => handler(event, extractEventInfo(event));
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/utils.mjs
init_define_process();
var supportsPointerEvents = () => isBrowser && window.onpointerdown === null;
var supportsTouchEvents = () => isBrowser && window.ontouchstart === null;
var supportsMouseEvents = () => isBrowser && window.onmousedown === null;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
init_define_process();
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
init_define_process();
init_reactMod();
function useUnmountEffect(callback) {
  return useEffect(() => () => callback(), []);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
init_define_process();
init_reactMod();
function usePresence() {
  const context = useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id3 = useId();
  useEffect(() => register(id3), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id3);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent(useContext(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/delay.mjs
init_define_process();

// ../../.yarn/global/cache/framesync-npm-6.1.2-3eeffdf40f-9.zip/node_modules/framesync/dist/es/index.mjs
init_define_process();

// ../../.yarn/global/cache/framesync-npm-6.1.2-3eeffdf40f-9.zip/node_modules/framesync/dist/es/on-next-frame.mjs
init_define_process();
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// ../../.yarn/global/cache/framesync-npm-6.1.2-3eeffdf40f-9.zip/node_modules/framesync/dist/es/create-render-step.mjs
init_define_process();
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// ../../.yarn/global/cache/framesync-npm-6.1.2-3eeffdf40f-9.zip/node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelSync.read(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  es_default.read(checkElapsed, true);
  return () => cancelSync.read(checkElapsed);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/index.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/index.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/index.mjs
init_define_process();

// ../../.yarn/global/cache/tslib-npm-2.4.0-9cb6dc5030-9.zip/node_modules/tslib/modules/index.js
init_define_process();
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/generators/spring.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
init_define_process();

// ../../.yarn/global/cache/hey-listen-npm-1.0.8-adb7dae9da-9.zip/node_modules/hey-listen/dist/hey-listen.es.js
init_define_process();
var warning = function() {
};
var invariant = function() {
};
if (true) {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/clamp.mjs
init_define_process();
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
var zero = (_t) => 0;

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/interpolate.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/progress.mjs
init_define_process();
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/mix.mjs
init_define_process();
var mix = (from, to, progress3) => -progress3 * from + progress3 * to + from;

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/mix-color.mjs
init_define_process();

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/index.mjs
init_define_process();

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/numbers/index.mjs
init_define_process();

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/utils.mjs
init_define_process();
var clamp2 = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/numbers/units.mjs
init_define_process();
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/hsla.mjs
init_define_process();

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/utils.mjs
init_define_process();
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a2, b2, c2, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/rgba.mjs
init_define_process();
var clampRgbUnit = clamp2(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/hex.mjs
init_define_process();
function parseHex(v) {
  let r = "";
  let g = "";
  let b2 = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b2 = v.substr(5, 2);
    a2 = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b2 = v.substr(3, 1);
    a2 = v.substr(4, 1);
    r += r;
    g += g;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/color/index.mjs
init_define_process();
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/complex/index.mjs
init_define_process();
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// ../../.yarn/global/cache/style-value-types-npm-5.1.2-f9d7bb50ee-9.zip/node_modules/style-value-types/dist/es/complex/filter.mjs
init_define_process();
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
  const functions = v.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
init_define_process();
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/mix-complex.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/inc.mjs
init_define_process();
var isNum = (v) => typeof v === "number";

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/pipe.mjs
init_define_process();
var combineFunctions = (a2, b2) => (v) => b2(a2(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/easing/index.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/easing/utils.mjs
init_define_process();
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p) => p;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/generators/decay.mjs
init_define_process();
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys2 = new Set(Object.keys(config));
  if (keys2.has("ease") || keys2.has("duration") && !keys2.has("dampingRatio")) {
    return keyframes;
  } else if (keys2.has("dampingRatio") || keys2.has("stiffness") || keys2.has("mass") || keys2.has("damping") || keys2.has("restSpeed") || keys2.has("restDelta")) {
    return spring;
  }
  return keyframes;
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
init_define_process();
function loopElapsed(elapsed, duration, delay2 = 0) {
  return elapsed - duration - delay2;
}
function reverseElapsed(elapsed, duration, delay2 = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay2) : duration - (elapsed - duration) + delay2;
}
function hasRepeatDelayElapsed(elapsed, duration, delay2, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay2 : elapsed <= -delay2;
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/inertia.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
init_define_process();
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function boundaryNearest(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/angle.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/radians-to-degrees.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/apply-offset.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/attract.mjs
init_define_process();
var identity = (v) => v;
var createAttractor = (alterDisplacement = identity) => (constant, origin, v) => {
  const displacement = origin - v;
  const springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
  return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};
var attract = createAttractor();
var attractExpo = createAttractor(Math.sqrt);

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/degrees-to-radians.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/distance.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/is-point.mjs
init_define_process();
var isPoint = (point2) => point2.hasOwnProperty("x") && point2.hasOwnProperty("y");

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/is-point-3d.mjs
init_define_process();
var isPoint3D = (point2) => isPoint(point2) && point2.hasOwnProperty("z");

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/point-from-vector.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/smooth-frame.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/to-decimal.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/smooth.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/snap.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/velocity-per-frame.mjs
init_define_process();

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/utils/wrap.mjs
init_define_process();
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
init_define_process();
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// ../../.yarn/global/cache/popmotion-npm-11.0.5-3c551ada08-9.zip/node_modules/popmotion/dist/es/easing/steps.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/array.mjs
init_define_process();
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a2, b2, c2) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var MotionValue = class {
  constructor(init) {
    this.version = "7.6.2";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = getFrameData();
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        es_default.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current) {
        this.updateSubscribers.notify(this.current);
      }
      if (this.velocityUpdateSubscribers.getSize()) {
        this.velocityUpdateSubscribers.notify(this.getVelocity());
      }
      if (render) {
        this.renderSubscribers.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => es_default.postRender(this.velocityCheck);
    this.velocityCheck = ({ timestamp }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        this.velocityUpdateSubscribers.notify(this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  onChange(subscription) {
    return this.updateSubscribers.add(subscription);
  }
  clearListeners() {
    this.updateSubscribers.clear();
  }
  onRenderRequest(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  }
  attach(passiveEffect) {
    this.passiveEffect = passiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(animation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.stopAnimation = animation(resolve);
    }).then(() => this.clearAnimation());
  }
  stop() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  }
};
function motionValue(init) {
  return new MotionValue(init);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/setters.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
init_define_process();
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
init_define_process();
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
init_define_process();
var int = __spreadProps(__spreadValues({}, number), {
  transform: Math.round
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = __spreadProps(__spreadValues({}, numberValueTypes), {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = (key) => defaultValueTypes[key];

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
init_define_process();
var testValueType = (v) => (type) => type.test(v);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
init_define_process();
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
init_define_process();
function getCurrent(visualElement2) {
  const current = {};
  visualElement2.forEachValue((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement2) {
  const velocity = {};
  visualElement2.forEachValue((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement2, definition, custom) {
  const props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  const resolved = resolveVariant(visualElement2, definition);
  let _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, { transitionEnd = {}, transition = {} } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
  target = __spreadValues(__spreadValues({}, target), transitionEnd);
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function setVariants(visualElement2, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach((key) => {
    var _a;
    const variant = visualElement2.getVariant(key);
    variant && setTarget(visualElement2, variant);
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      setVariants(child, variantLabels);
    });
  });
}
function setValues(visualElement2, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement2, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement2, [definition]);
  } else {
    setTarget(visualElement2, definition);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter((key) => !visualElement2.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a;
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    origin[key] = transitionOrigin !== void 0 ? transitionOrigin : (_a = visualElement2.getValue(key)) === null || _a === void 0 ? void 0 : _a.get();
  }
  return origin;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/animation.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/time-conversion.mjs
init_define_process();
var secondsToMilliseconds = (seconds) => seconds * 1e3;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/easing.mjs
init_define_process();
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = (ease) => {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
init_define_process();
var isAnimatable = (key, value) => {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
init_define_process();
var underDampedSpring = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
});
var criticallyDampedSpring = (to) => ({
  type: "spring",
  stiffness: 550,
  damping: to === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var linearTween = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
});
var keyframes2 = (values) => ({
  type: "keyframes",
  duration: 0.8,
  values
});
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = (valueKey, to) => {
  let transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes2;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __spreadValues({ to }, transitionFactory(to));
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
init_define_process();
var instantAnimationState = {
  current: false
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined(_a) {
  var _b = _a, { when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from } = _b, transition = __objRest(_b, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var _b = _a, { ease, times, yoyo, flip, loop } = _b, transition = __objRest(_b, ["ease", "times", "yoyo", "flip", "loop"]);
  const options = __spreadValues({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  const valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = [...options.to];
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  if (Array.isArray(options.to) && transition.duration === void 0) {
    transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __spreadValues(__spreadValues({}, transition), getDefaultTransition(key, options.to));
  }
  return __spreadValues(__spreadValues({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  const valueTransition = getValueTransition(transition, key) || {};
  let origin = valueTransition.from !== void 0 ? valueTransition.from : value.get();
  const isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  const isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${key} from "${origin}" to "${target}". ${origin} is not an animatable value - to enable this animation set ${origin} to a value animatable to ${target} via the \`style\` property.`);
  function start() {
    const options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: (v) => value.set(v)
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__spreadValues(__spreadValues({}, options), valueTransition)) : animate(__spreadProps(__spreadValues({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
      onUpdate: (v) => {
        options.onUpdate(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        options.onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    }));
  }
  function set() {
    const finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    valueTransition.onUpdate && valueTransition.onUpdate(finalTarget);
    valueTransition.onComplete && valueTransition.onComplete();
    return { stop: () => {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition = {}) {
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start((onComplete) => {
    let controls;
    const animation = getAnimation(key, value, target, transition, onComplete);
    const delayBy = getDelayFromTransition(transition, key);
    const start = () => controls = animation();
    let cancelDelay;
    if (delayBy) {
      cancelDelay = delay(start, secondsToMilliseconds(delayBy));
    } else {
      start();
    }
    return () => {
      cancelDelay && cancelDelay();
      controls && controls.stop();
    };
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
init_define_process();
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
init_define_process();
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement2, definition, options = {}) {
  visualElement2.notifyAnimationStart(definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement2, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(() => visualElement2.notifyAnimationComplete(definition));
}
function animateVariant(visualElement2, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement2, variant, options.custom);
  let { transition = visualElement2.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation2 = resolved ? () => animateTarget(visualElement2, resolved, options) : () => Promise.resolve();
  const getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let _a2 = visualElement2.makeTargetAnimatable(definition), { transition = visualElement2.getDefaultTransition(), transitionEnd } = _a2, target = __objRest(_a2, ["transition", "transitionEnd"]);
  const willChange = visualElement2.getValue("willChange");
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && ((_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.getState()[type]);
  for (const key in target) {
    const value = visualElement2.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    let valueTransition = __spreadValues({ delay: delay2 }, transition);
    if (visualElement2.shouldReduceMotion && transformProps.has(key)) {
      valueTransition = __spreadProps(__spreadValues({}, valueTransition), {
        type: false,
        delay: 0
      });
    }
    let animation = startAnimation(key, value, valueTarget, valueTransition);
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation = animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  return Promise.all(animations2).then(() => {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    animations2.push(animateVariant(child, variant, __spreadProps(__spreadValues({}, options), {
      delay: delayChildren + generateStaggerDuration(i)
    })).then(() => child.notifyAnimationComplete(variant)));
  });
  return Promise.all(animations2);
}
function stopAnimation(visualElement2) {
  visualElement2.forEachValue((value) => value.stop());
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/animations.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
init_define_process();
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement2, animation, options)));
}
function createAnimationState(visualElement2) {
  let animate4 = animateList(visualElement2);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      const _a = resolved, { transition, transitionEnd } = _a, target = __objRest(_a, ["transition", "transitionEnd"]);
      acc = __spreadValues(__spreadValues(__spreadValues({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate4 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    const props = visualElement2.getProps();
    const context = visualElement2.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __spreadValues({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = __spreadValues(__spreadValues({}, prevResolvedValues), resolvedValues);
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __spreadValues(__spreadValues({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: __spreadValues({ type }, options)
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate4(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    [AnimationType.Animate]: createTypeState(true),
    [AnimationType.InView]: createTypeState(),
    [AnimationType.Hover]: createTypeState(),
    [AnimationType.Tap]: createTypeState(),
    [AnimationType.Drag]: createTypeState(),
    [AnimationType.Focus]: createTypeState(),
    [AnimationType.Exit]: createTypeState()
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
init_define_process();
var makeRenderlessComponent = (hook) => (props) => {
  hook(props);
  return null;
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(({ visualElement: visualElement2, animate: animate4 }) => {
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate4)) {
      useEffect(() => animate4.subscribe(visualElement2), [animate4]);
    }
  }),
  exit: makeRenderlessComponent((props) => {
    const { custom, visualElement: visualElement2 } = props;
    const [isPresent2, safeToRemove] = usePresence();
    const presenceContext = useContext(PresenceContext);
    useEffect(() => {
      visualElement2.isPresent = isPresent2;
      const animation = visualElement2.animationState && visualElement2.animationState.setActive(AnimationType.Exit, !isPresent2, {
        custom: presenceContext && presenceContext.custom || custom
      });
      if (animation && !isPresent2) {
        animation.then(safeToRemove);
      }
    }, [isPresent2]);
  })
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
init_define_process();
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/models.mjs
init_define_process();
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/index.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
init_define_process();
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs
init_define_process();
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  const managers = names.map(() => new SubscriptionManager());
  const propSubscriptions = {};
  const lifecycles = {
    clearAllListeners: () => managers.forEach((manager) => manager.clear()),
    updatePropListeners: (props) => {
      names.forEach((name) => {
        var _a;
        const on = "on" + name;
        const propListener = props[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach((manager, i) => {
    lifecycles["on" + names[i]] = (handler) => manager.add(handler);
    lifecycles["notify" + names[i]] = (...args) => manager.notify(...args);
  });
  return lifecycles;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/warn-once.mjs
init_define_process();
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const { willChange } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (true) {
        warnOnce(nextValue.version === "7.6.2", `Attempting to mix Framer Motion versions ${nextValue.version} with 7.6.2 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/process.mjs
init_define_process();
var defaultEnvironment = "production";
var env = typeof define_process_default === "undefined" || define_process_default.env === void 0 ? defaultEnvironment : "development";

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/index.mjs
init_reactMod();
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var visualElement = ({ treeType = "", build, getBaseTarget, makeTargetAnimatable, measureViewportBox: measureViewportBox2, render: renderInstance, readValueFromInstance, removeValueFromRenderState, sortNodePosition, scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3 }) => ({ parent, props, presenceId, blockInitialAnimation, visualState, reducedMotionConfig }, options = {}) => {
  let isMounted = false;
  const { latestValues, renderState } = visualState;
  let instance;
  const lifecycles = createLifecycles();
  const values = /* @__PURE__ */ new Map();
  const valueSubscriptions = /* @__PURE__ */ new Map();
  let prevMotionValues = {};
  const baseTarget = __spreadValues({}, latestValues);
  const initialValues = props.initial ? __spreadValues({}, latestValues) : {};
  let removeFromVariantTree;
  function render() {
    if (!instance || !isMounted)
      return;
    triggerBuild();
    renderInstance(instance, renderState, props.style, element.projection);
  }
  function triggerBuild() {
    build(element, renderState, latestValues, options, props);
  }
  function update() {
    lifecycles.notifyUpdate(latestValues);
  }
  function bindToMotionValue(key, value) {
    const removeOnChange = value.onChange((latestValue) => {
      latestValues[key] = latestValue;
      props.onUpdate && es_default.update(update, false, true);
    });
    const removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
    valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  const _a = scrapeMotionValuesFromProps3(props), { willChange } = _a, initialMotionValues = __objRest(_a, ["willChange"]);
  for (const key in initialMotionValues) {
    const value = initialMotionValues[key];
    if (latestValues[key] !== void 0 && isMotionValue(value)) {
      value.set(latestValues[key], false);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
    }
  }
  if (props.values) {
    for (const key in props.values) {
      const value = props.values[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  const element = __spreadProps(__spreadValues({
    treeType,
    current: null,
    depth: parent ? parent.depth + 1 : 0,
    parent,
    children: /* @__PURE__ */ new Set(),
    presenceId,
    shouldReduceMotion: null,
    variantChildren: isVariantNode$1 ? /* @__PURE__ */ new Set() : void 0,
    isVisible: void 0,
    manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
    blockInitialAnimation,
    isMounted: () => Boolean(instance),
    mount(newInstance) {
      isMounted = true;
      instance = element.current = newInstance;
      if (element.projection) {
        element.projection.mount(newInstance);
      }
      if (isVariantNode$1 && parent && !isControllingVariants$1) {
        removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
      }
      values.forEach((value, key) => bindToMotionValue(key, value));
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      element.shouldReduceMotion = reducedMotionConfig === "never" ? false : reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
      parent === null || parent === void 0 ? void 0 : parent.children.add(element);
      element.setProps(props);
    },
    unmount() {
      var _a2;
      (_a2 = element.projection) === null || _a2 === void 0 ? void 0 : _a2.unmount();
      cancelSync.update(update);
      cancelSync.render(render);
      valueSubscriptions.forEach((remove) => remove());
      removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
      parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
      lifecycles.clearAllListeners();
      instance = void 0;
      isMounted = false;
    },
    loadFeatures(renderedProps, isStrict, preloadedFeatures, projectionId, ProjectionNodeConstructor, initialLayoutGroupConfig) {
      const features = [];
      if (env !== "production" && preloadedFeatures && isStrict) {
        invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
      }
      for (let i = 0; i < numFeatures; i++) {
        const name = featureNames[i];
        const { isEnabled, Component: Component2 } = featureDefinitions[name];
        if (isEnabled(renderedProps) && Component2) {
          features.push(createElement(Component2, __spreadProps(__spreadValues({
            key: name
          }, renderedProps), {
            visualElement: element
          })));
        }
      }
      if (!element.projection && ProjectionNodeConstructor) {
        element.projection = new ProjectionNodeConstructor(projectionId, element.getLatestValues(), parent && parent.projection);
        const { layoutId, layout, drag: drag2, dragConstraints, layoutScroll } = renderedProps;
        element.projection.setOptions({
          layoutId,
          layout,
          alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
          visualElement: element,
          scheduleRender: () => element.scheduleRender(),
          animationType: typeof layout === "string" ? layout : "both",
          initialPromotionConfig: initialLayoutGroupConfig,
          layoutScroll
        });
      }
      return features;
    },
    addVariantChild(child) {
      var _a2;
      const closestVariantNode = element.getClosestVariantNode();
      if (closestVariantNode) {
        (_a2 = closestVariantNode.variantChildren) === null || _a2 === void 0 ? void 0 : _a2.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    },
    sortNodePosition(other) {
      if (!sortNodePosition || treeType !== other.treeType)
        return 0;
      return sortNodePosition(element.getInstance(), other.getInstance());
    },
    getClosestVariantNode: () => isVariantNode$1 ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode(),
    getLayoutId: () => props.layoutId,
    getInstance: () => instance,
    getStaticValue: (key) => latestValues[key],
    setStaticValue: (key, value) => latestValues[key] = value,
    getLatestValues: () => latestValues,
    setVisibility(visibility) {
      if (element.isVisible === visibility)
        return;
      element.isVisible = visibility;
      element.scheduleRender();
    },
    makeTargetAnimatable(target, canMutate = true) {
      return makeTargetAnimatable(element, target, props, canMutate);
    },
    measureViewportBox() {
      return measureViewportBox2(instance, props);
    },
    addValue(key, value) {
      if (element.hasValue(key))
        element.removeValue(key);
      values.set(key, value);
      latestValues[key] = value.get();
      bindToMotionValue(key, value);
    },
    removeValue(key) {
      var _a2;
      values.delete(key);
      (_a2 = valueSubscriptions.get(key)) === null || _a2 === void 0 ? void 0 : _a2();
      valueSubscriptions.delete(key);
      delete latestValues[key];
      removeValueFromRenderState(key, renderState);
    },
    hasValue: (key) => values.has(key),
    getValue(key, defaultValue) {
      if (props.values && props.values[key]) {
        return props.values[key];
      }
      let value = values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue);
        element.addValue(key, value);
      }
      return value;
    },
    forEachValue: (callback) => values.forEach(callback),
    readValue: (key) => latestValues[key] !== void 0 ? latestValues[key] : readValueFromInstance(instance, key, options),
    setBaseTarget(key, value) {
      baseTarget[key] = value;
    },
    getBaseTarget(key) {
      var _a2;
      const { initial } = props;
      const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a2 = resolveVariantFromProps(props, initial)) === null || _a2 === void 0 ? void 0 : _a2[key] : void 0;
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      if (getBaseTarget) {
        const target = getBaseTarget(props, key);
        if (target !== void 0 && !isMotionValue(target))
          return target;
      }
      return initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : baseTarget[key];
    }
  }, lifecycles), {
    build() {
      triggerBuild();
      return renderState;
    },
    scheduleRender() {
      es_default.render(render, false, true);
    },
    syncRender: render,
    setProps(newProps) {
      if (newProps.transformTemplate || props.transformTemplate) {
        element.scheduleRender();
      }
      props = newProps;
      lifecycles.updatePropListeners(newProps);
      prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
    },
    getProps: () => props,
    getVariant: (name) => {
      var _a2;
      return (_a2 = props.variants) === null || _a2 === void 0 ? void 0 : _a2[name];
    },
    getDefaultTransition: () => props.transition,
    getTransformPagePoint: () => {
      return props.transformPagePoint;
    },
    getVariantContext(startAtParent = false) {
      if (startAtParent)
        return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
      if (!isControllingVariants$1) {
        const context2 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
        if (props.initial !== void 0) {
          context2.initial = props.initial;
        }
        return context2;
      }
      const context = {};
      for (let i = 0; i < numVariantProps; i++) {
        const name = variantProps2[i];
        const prop = props[name];
        if (isVariantLabel(prop) || prop === false) {
          context[name] = prop;
        }
      }
      return context;
    }
  });
  return element;
};
var variantProps2 = ["initial", ...variantPriorityOrder];
var numVariantProps = variantProps2.length;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/animate.mjs
init_define_process();
function animate2(from, to, transition = {}) {
  const value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: () => value.stop(),
    isAnimating: () => value.isAnimating()
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
init_define_process();
var compareByDepth = (a2, b2) => a2.depth - b2.depth;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/motion.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
init_define_process();
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
init_define_process();
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (typeof Component2 !== "string" || Component2.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component2) > -1 || /[A-Z]/.test(Component2)) {
    return true;
  }
  return false;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/use-props.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
init_define_process();
function isForcedMotionValue(key, { layout, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
init_define_process();
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var sortTransformProps = (a2, b2) => transformPropOrder.indexOf(a2) - transformPropOrder.indexOf(b2);
function buildTransform({ transform: transform2, transformKeys: transformKeys2 }, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate) {
  let transformString = "";
  transformKeys2.sort(sortTransformProps);
  for (const key of transformKeys2) {
    transformString += `${translateAlias[key] || key}(${transform2[key]}) `;
  }
  if (enableHardwareAcceleration && !transform2.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
init_define_process();
function isCSSVariable(key) {
  return key.startsWith("--");
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
init_define_process();
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const { style: style2, vars, transform: transform2, transformKeys: transformKeys2, transformOrigin } = state;
  transformKeys2.length = 0;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== (valueType.default || 0))
        transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style2[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style2.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    } else if (style2.transform) {
      style2.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style2.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
init_define_process();
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style2 = {};
  copyRawValuesOnly(style2, styleProp, props);
  Object.assign(style2, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style2) : style2;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style2 = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style2.userSelect = style2.WebkitUserSelect = style2.WebkitTouchCallout = "none";
    style2.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  htmlProps.style = style2;
  return htmlProps;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
init_define_process();
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
init_define_process();
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length2, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length2);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var _b = _a, {
    attrX,
    attrY,
    originX,
    originY,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0
  } = _b, latest = __objRest(_b, [
    "attrX",
    "attrY",
    "originX",
    "originY",
    "pathLength",
    "pathSpacing",
    "pathOffset"
  ]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  const { attrs, style: style2, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style2.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style2.transform)) {
    style2.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
init_define_process();
var createSvgRenderState = () => __spreadProps(__spreadValues({}, createHtmlRenderState()), {
  attrs: {}
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState) {
  const visualProps = useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __spreadProps(__spreadValues({}, state.attrs), {
      style: __spreadValues({}, state.style)
    });
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __spreadValues(__spreadValues({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, projectionId, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = __spreadProps(__spreadValues(__spreadValues({}, filteredProps), visualProps), {
      ref
    });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return createElement(Component2, elementProps);
  };
  return useRender;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
init_define_process();
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/render.mjs
init_define_process();
function renderHTML(element, { style: style2, vars }, styleProp, projection) {
  Object.assign(element.style, style2, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
init_define_process();
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
init_define_process();
function scrapeMotionValuesFromProps(props) {
  const { style: style2 } = props;
  const newValues = {};
  for (const key in style2) {
    if (isMotionValue(style2[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style2[key];
    }
  }
  return newValues;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props) {
  const newValues = scrapeMotionValuesFromProps(props);
  for (const key in props) {
    if (isMotionValue(props[key])) {
      const targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/config-motion.mjs
init_define_process();
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, { forwardMotionProps = false }, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return __spreadProps(__spreadValues({}, baseConfig), {
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    projectionNodeConstructor,
    Component: Component2
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
init_define_process();
function useFocusGesture({ whileFocus, visualElement: visualElement2 }) {
  const { animationState } = visualElement2;
  const onFocus = () => {
    animationState && animationState.setActive(AnimationType.Focus, true);
  };
  const onBlur = () => {
    animationState && animationState.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
init_define_process();
function createHoverEvent(visualElement2, isActive, callback) {
  return (event, info) => {
    if (!isMouseEvent(event) || isDragActive())
      return;
    if (visualElement2.animationState) {
      visualElement2.animationState.setActive(AnimationType.Hover, isActive);
    }
    callback && callback(event, info);
  };
}
function useHoverGesture({ onHoverStart, onHoverEnd, whileHover, visualElement: visualElement2 }) {
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0, { passive: !onHoverStart });
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
init_define_process();
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function useTapGesture({ onTap, onTapStart, onTapCancel, whileTap, visualElement: visualElement2 }) {
  const hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  const isPressing = useRef(false);
  const cancelPointerEndListeners = useRef(null);
  const eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
  };
  function removePointerEndListener() {
    cancelPointerEndListeners.current && cancelPointerEndListeners.current();
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    removePointerEndListener();
    isPressing.current = false;
    visualElement2.animationState && visualElement2.animationState.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel && onTapCancel(event, info) : onTap && onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel && onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    visualElement2.animationState && visualElement2.animationState.setActive(AnimationType.Tap, true);
    onTapStart && onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
  useUnmountEffect(removePointerEndListener);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
init_define_process();
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var _b = _a, { root } = _b, options = __objRest(_b, ["root"]);
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __spreadValues({ root }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport({ visualElement: visualElement2, whileInView, onViewportEnter, onViewportLeave, viewport = {} }) {
  const state = useRef({
    hasEnteredView: false,
    isInView: false
  });
  let shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  const useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement2, { root, margin: rootMargin, amount = "some", once }) {
  useEffect(() => {
    if (!shouldObserve)
      return;
    const options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const intersectionCallback = (entry) => {
      const { isIntersecting } = entry;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      if (visualElement2.animationState) {
        visualElement2.animationState.setActive(AnimationType.InView, isIntersecting);
      }
      const props = visualElement2.getProps();
      const callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement2, { fallback = true }) {
  useEffect(() => {
    if (!shouldObserve || !fallback)
      return;
    if (env !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(() => {
      state.hasEnteredView = true;
      const { onViewportEnter } = visualElement2.getProps();
      onViewportEnter && onViewportEnter(null);
      if (visualElement2.animationState) {
        visualElement2.animationState.setActive(AnimationType.InView, true);
      }
    });
  }, [shouldObserve]);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/drag.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/PanSession.mjs
init_define_process();
var PanSession = class {
  constructor(event, handlers, { transformPagePoint } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point3 } = info2;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push(__spreadProps(__spreadValues({}, point3), { timestamp: timestamp2 }));
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        this.handlePointerUp(event2, info2);
        return;
      }
      es_default.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd } = this.handlers;
      const panInfo = getPanInfo(transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point: point2 } = initialInfo;
    const { timestamp } = getFrameData();
    this.history = [__spreadProps(__spreadValues({}, point2), { timestamp })];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo({ point: point2 }, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time2 = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
init_define_process();
function applyConstraints(point2, { min, max }, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
init_define_process();
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
init_define_process();
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2)
    return point2;
  const topLeft = transformPoint2({ x: point2.left, y: point2.top });
  const bottomRight = transformPoint2({ x: point2.right, y: point2.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
init_define_process();
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  var _a, _b;
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms2, [key, scaleKey, originKey]) {
  const axisOrigin = transforms2[originKey] !== void 0 ? transforms2[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms2[key], transforms2[scaleKey], originPoint, transforms2.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll: scroll2 } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.x);
    translateAxis(viewportBox.y, scroll2.y);
  }
  return viewportBox;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    if (this.visualElement.isPresent === false)
      return;
    const onSessionStart = (event) => {
      this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      var _a;
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock)
          this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        var _a2, _b;
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const measuredAxis = (_b = (_a2 = this.visualElement.projection) === null || _a2 === void 0 ? void 0 : _a2.layout) === null || _b === void 0 ? void 0 : _b.actual[axis];
          if (measuredAxis) {
            const length2 = calcLength(measuredAxis);
            current = length2 * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a = this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Drag, true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  }
  cancel() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { layout } = this.visualElement.projection || {};
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      var _a;
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = __spreadValues(__spreadValues({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10
      }, dragTransition), transition);
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  getAxisMotionValue(axis) {
    var _a, _b;
    const dragKey = "_drag" + axis.toUpperCase();
    const externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  }
  snapToCursor(point2) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.actual[axis];
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var _a;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    var _a;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.getInstance();
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.syncRender();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return __spreadProps(__spreadValues({}, props), {
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    });
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  const { dragControls: groupDragControls, visualElement: visualElement2 } = props;
  const dragControls = useConstant(() => new VisualElementDragControls(visualElement2));
  useEffect(() => groupDragControls && groupDragControls.subscribe(dragControls), [dragControls, groupDragControls]);
  useEffect(() => dragControls.addListeners(), [dragControls]);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
init_define_process();
init_reactMod();
function usePanGesture({ onPan, onPanStart, onPanEnd, onPanSessionStart, visualElement: visualElement2 }) {
  const hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  const panSession = useRef(null);
  const { transformPagePoint } = useContext(MotionConfigContext);
  const handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  useEffect(() => {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(() => panSession.current && panSession.current.end());
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/visual-element.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
init_define_process();
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var target = __objRest(_a, []);
  const element = visualElement2.getInstance();
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __spreadValues({}, transitionEnd);
  }
  visualElement2.forEachValue((value) => {
    const current = value.get();
    if (!isCSSVariable2(current))
      return;
    const resolved = getVariableValue(current, element);
    if (resolved)
      value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariable2(current))
      continue;
    const resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd && transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
init_define_process();
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = (value, to) => {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = (v) => v === number || v === px;
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform2 }) => {
  if (transform2 === "none" || !transform2)
    return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement2) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = (target, visualElement2, changedKeys) => {
  const originBbox = visualElement2.measureViewportBox();
  const element = visualElement2.getInstance();
  const elementComputedStyle = getComputedStyle(element);
  const { display } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  const targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach((key) => {
    const value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement2, target, origin = {}, transitionEnd = {}) => {
  target = __spreadValues({}, target);
  transitionEnd = __spreadValues({}, transitionEnd);
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach((key) => {
    const value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({ top: scrollY });
    }
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement2, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/html/visual-element.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance(domElement, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(domElement);
      const value = (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  },
  sortNodePosition(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox(element, { transformPagePoint }) {
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform(element, domElement, props) {
    const { transformTemplate } = props;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState(key, { vars, style: style2 }) {
    delete vars[key];
    delete style2[key];
  },
  makeTargetAnimatable(element, _a, { transformValues }, isMounted = true) {
    var _b = _a, { transition, transitionEnd } = _b, target = __objRest(_b, ["transition", "transitionEnd"]);
    let origin = getOrigin(target, transition || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      const parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __spreadValues({
      transition,
      transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps,
  build(element, renderState, latestValues, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/svg/visual-element.mjs
init_define_process();
var svgVisualElement = visualElement(__spreadProps(__spreadValues({}, htmlConfig), {
  getBaseTarget(props, key) {
    return props[key];
  },
  readValueFromInstance(domElement, key) {
    var _a;
    if (transformProps.has(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  build(_element, renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderSVG
}));

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
init_define_process();
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
init_define_process();
var varToken = "_$css";
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const containsCSSVariables = latest.includes("var(");
    const cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, (match) => {
        cssVariables.push(match);
        return varToken;
      });
    }
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    let output = template(shadow);
    if (containsCSSVariables) {
      let i = 0;
      output = output.replace(varToken, () => {
        const cssVariable = cssVariables[i];
        i++;
        return cssVariable;
      });
    }
    return output;
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends reactMod_default.Component {
  componentDidMount() {
    const { visualElement: visualElement2, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement2;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions(__spreadProps(__spreadValues({}, projection.options), {
        onExitComplete: () => this.safeToRemove()
      }));
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement: visualElement2, drag: drag2, isPresent: isPresent2 } = this.props;
    const projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        es_default.postRender(() => {
          var _a;
          if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  }
  componentWillUnmount() {
    const { visualElement: visualElement2, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement2;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = useContext(LayoutGroupContext);
  return reactMod_default.createElement(MeasureLayoutWithContext, __spreadProps(__spreadValues({}, props), { layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent: isPresent2, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __spreadProps(__spreadValues({}, correctBorderRadius), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
init_define_process();
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress3, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(
      0,
      (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1,
      easeCrossfadeIn(progress3)
    );
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress3));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress3);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress3), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress3);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
init_define_process();
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
init_define_process();
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms2, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms2[key], transforms2[scaleKey], transforms2[originKey], transforms2.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms2, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms2, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms2, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
init_define_process();
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function isCloseTo(a2, b2, max = 0.1) {
  return distance(a2, b2) <= max;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/shared/stack.mjs
init_define_process();
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    var _a;
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/styles/transform.mjs
init_define_process();
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  let transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  if (latestTransform) {
    const { rotate, rotateX, rotateY } = latestTransform;
    if (rotate)
      transform2 += `rotate(${rotate}deg) `;
    if (rotateX)
      transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform2 += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  return transform2 === identityProjection ? "none" : transform2;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var animationTarget = 1e3;
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(id3, latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id3;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id3 && this.root.registerPotentialNode(id3, this);
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    registerPotentialNode(id3, node) {
      this.potentialNodes.set(id3, node);
    }
    mount(instance, isLayoutDirty = false) {
      var _a;
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      const { layoutId, layout, visualElement: visualElement2 } = this.options;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          var _a2, _b, _c, _d, _e;
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = (_b = (_a2 = this.options.transition) !== null && _a2 !== void 0 ? _a2 : visualElement2.getDefaultTransition()) !== null && _b !== void 0 ? _b : defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement2.getProps();
          const targetChanged = !this.targetLayout || !boxEquals(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_c = this.resumeFrom) === null || _c === void 0 ? void 0 : _c.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = __spreadProps(__spreadValues({}, getValueTransition(layoutTransition, "layout")), {
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && this.animationProgress === 0) {
              finishAnimation(this);
            }
            this.isLead() && ((_e = (_d = this.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d));
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      var _a, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var _a;
      return this.isAnimationBlocked || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) || false;
    }
    startUpdate() {
      var _a;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
    }
    willUpdate(shouldNotifyListeners = true) {
      var _a, _b, _c;
      if (this.root.isUpdateBlocked()) {
        (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      const { layoutId, layout } = this.options;
      if (layoutId === void 0 && !layout)
        return;
      const transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      es_default.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      es_default.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      const measured = this.measure();
      const layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    }
    updateLayout() {
      var _a;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const measured = this.measure();
      roundBox(measured);
      const prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    }
    updateScroll() {
      if (this.options.layoutScroll && this.instance) {
        this.isScrollRoot = checkIsScrollRoot(this.instance);
        this.scroll = measureScroll(this.instance);
      }
    }
    resetTransform() {
      var _a;
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
      const transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure() {
      const { visualElement: visualElement2 } = this.options;
      if (!visualElement2)
        return createBox();
      const box = visualElement2.measureViewportBox();
      const { scroll: scroll2 } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.x);
        translateAxis(box.y, scroll2.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll: scroll2, options, isScrollRoot } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (isScrollRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const { scroll: rootScroll } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.x);
          translateAxis(boxWithoutScroll.y, scroll2.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      var _a;
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    }
    setOptions(options) {
      this.options = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      });
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    resolveTargetDelta() {
      var _a;
      const { layout, layoutId } = this.options;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    calcProjection() {
      var _a;
      const { layout, layoutId } = this.options;
      this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      const lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      const { target } = lead;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      var _a, _b, _c;
      (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
      notifyAll2 && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      var _a;
      const snapshot = this.snapshot;
      const snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      const mixedValues = __spreadValues({}, this.latestValues);
      const targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      const isOnlyMember = (((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.members.length) || 0) <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = (latest) => {
        var _a2;
        const progress3 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress3);
        mixAxisDelta(targetDelta.y, delta.y, progress3);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.layout)) {
          calcRelativePosition(relativeLayout, this.layout.actual, this.relativeParent.layout.actual);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress3);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress3, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress3;
      };
      this.mixTargetDelta(0);
    }
    startAnimation(options) {
      var _a, _b;
      this.notifyListeners("animationStart");
      (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = es_default.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animate2(0, animationTarget, __spreadProps(__spreadValues({}, options), {
          onUpdate: (latest) => {
            var _a2;
            this.mixTargetDelta(latest);
            (_a2 = options.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(options, latest);
          },
          onComplete: () => {
            var _a2;
            (_a2 = options.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(options);
            this.completeAnimation();
          }
        }));
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var _a;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var _a;
      if (this.currentAnimation) {
        (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout)
        return;
      if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.actual, layout.actual)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.actual.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.actual.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      var _a, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const { visualElement: visualElement2 } = this.options;
      if (!visualElement2)
        return;
      let hasRotate = false;
      const resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        const axis = transformAxes[i];
        const key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (const key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    }
    getProjectionStyles(styleProp = {}) {
      var _a, _b, _c;
      const styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      const transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_c = (_b = valuesToRender.opacity) !== null && _b !== void 0 ? _b : this.latestValues.opacity) !== null && _c !== void 0 ? _c : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { actual: layout, measured: measuredLayout } = node.layout;
    const { animationType } = node.options;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        const length2 = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length2;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layout, layout)) {
      eachAxis((axis) => {
        const axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        const length2 = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length2;
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layout);
    const visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layout);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = node.relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_c = (_b = node.options).onExitComplete) === null || _c === void 0 ? void 0 : _c.call(_b);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  const { visualElement: visualElement2 } = node.options;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id3) {
  let searchNode = node.root;
  for (let i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  const searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  const element = searchElement.querySelector(`[data-projection-id="${id3}"]`);
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isCloseTo(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
init_define_process();
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, featureBundle, createDomVisualElement, HTMLProjectionNode));
function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, { forwardMotionProps: false }, featureBundle, createDomVisualElement, HTMLProjectionNode));
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
init_define_process();
var m = createMotionProxy(createDomMotionConfig);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
init_define_process();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
init_define_process();
init_reactMod();
function useIsMounted() {
  const isMounted = useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = useState(0);
  const forceRender = useCallback(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = useCallback(() => es_default.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
init_define_process();
init_reactMod();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
init_define_process();
init_reactMod();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
init_define_process();
init_reactMod();
init_reactMod();
var PopChildMeasure = class extends Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent: isPresent2 }) {
  const id3 = useId();
  const ref = useRef(null);
  const size = useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  useInsertionEffect(() => {
    const { width, height, top, left } = size.current;
    if (isPresent2 || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id3;
    const style2 = document.createElement("style");
    document.head.appendChild(style2);
    if (style2.sheet) {
      style2.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style2);
    };
  }, [isPresent2]);
  return createElement(PopChildMeasure, { isPresent: isPresent2, childRef: ref, sizeRef: size }, cloneElement(children, { ref }));
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent: isPresent2, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id3 = useId();
  const context = useMemo(
    () => ({
      id: id3,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    presenceAffectsLayout ? void 0 : [isPresent2]
  );
  useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = createElement(PopChild, { isPresent: isPresent2 }, children);
  }
  return createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach((child) => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync" }) => {
  if (exitBeforeEnter) {
    mode = "wait";
    warnOnce(false, "Replace exitBeforeEnter with mode='wait'");
  }
  let [forceRender] = useForceUpdate();
  const forceRenderLayoutGroup = useContext(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exiting = /* @__PURE__ */ new Set();
  const presentChildren = useRef(childrenToRender);
  const allChildren = useRef(/* @__PURE__ */ new Map()).current;
  const isInitialRender = useRef(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return createElement(Fragment, null, childrenToRender.map((child) => createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout, mode }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (mode === "wait" && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach((key) => {
    if (targetKeys.indexOf(key) !== -1)
      return;
    const child = allChildren.get(key);
    if (!child)
      return;
    const insertionIndex = presentKeys.indexOf(key);
    const onExit = () => {
      allChildren.delete(key);
      exiting.delete(key);
      const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout, mode }, child));
  });
  childrenToRender = childrenToRender.map((child) => {
    const key = child.key;
    return exiting.has(key) ? child : createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout, mode }, child);
  });
  if (env !== "production" && mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return createElement(Fragment, null, exiting.size ? childrenToRender : childrenToRender.map((child) => cloneElement(child)));
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
init_define_process();
init_reactMod();
var DeprecatedLayoutGroupContext = createContext(null);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
init_define_process();
init_reactMod();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/node/group.mjs
init_define_process();
var notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */ new Set();
  const subscriptions = /* @__PURE__ */ new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: (node) => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: (node) => {
      var _a;
      nodes.delete(node);
      (_a = subscriptions.get(node)) === null || _a === void 0 ? void 0 : _a();
      subscriptions.delete(node);
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var shouldInheritGroup = (inherit) => inherit === true;
var shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({ children, id: id3, inheritId, inherit = true }) => {
  if (inheritId !== void 0)
    inherit = inheritId;
  const layoutGroupContext = useContext(LayoutGroupContext);
  const deprecatedLayoutGroupContext = useContext(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = useRef(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id3 = id3 ? upstreamId + "-" + id3 : upstreamId;
    }
    context.current = {
      id: id3,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = useMemo(() => __spreadProps(__spreadValues({}, context.current), { forceRender }), [key]);
  return createElement(LayoutGroupContext.Provider, { value: memoizedContext }, children);
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
init_define_process();
init_reactMod();
var id2 = 0;
var AnimateSharedLayout = ({ children }) => {
  useEffect(() => {
    warning(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return createElement(LayoutGroup, { id: useConstant(() => `asl-${id2++}`) }, children);
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
init_define_process();
init_reactMod();
init_reactMod();
function MotionConfig(_a) {
  var _b = _a, { children, isValidProp } = _b, config = __objRest(_b, ["children", "isValidProp"]);
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = __spreadValues(__spreadValues({}, useContext(MotionConfigContext)), config);
  config.isStatic = useConstant(() => config.isStatic);
  const context = useMemo(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return createElement(MotionConfigContext.Provider, { value: context }, children);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
init_define_process();
init_reactMod();
init_reactMod();
function LazyMotion({ children, features, strict = false }) {
  const [, setIsLoaded] = useState(!isLazyBundle(features));
  const loadedRenderer = useRef(void 0);
  if (!isLazyBundle(features)) {
    const _a = features, { renderer } = _a, loadedFeatures = __objRest(_a, ["renderer"]);
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  useEffect(() => {
    if (isLazyBundle(features)) {
      features().then((_a2) => {
        var _b = _a2, { renderer } = _b, loadedFeatures = __objRest(_b, ["renderer"]);
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return createElement(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict } }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
init_define_process();
init_reactMod();
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = useState(initial);
    useEffect(() => value.onChange(setLatest), []);
  }
  return value;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/transform.mjs
init_define_process();
var isCustomValueType = (v) => {
  return typeof v === "object" && v.mix;
};
var getMixer2 = (v) => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, __spreadValues({
    mixer: getMixer2(outputRange[0])
  }, options));
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-transform.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-on-change.mjs
init_define_process();
function useOnChange(value, callback) {
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(value))
      return value.onChange(callback);
  }, [callback]);
}
function useMultiOnChange(values, handler, cleanup) {
  useIsomorphicLayoutEffect(() => {
    const subscriptions = values.map((value) => value.onChange(handler));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cleanup();
    };
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useMultiOnChange(values, () => es_default.update(updateValue, false, true), () => cancelSync.update(updateValue));
  return value;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/index.mjs
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
init_define_process();
init_reactMod();
init_reactMod();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/context/ReorderContext.mjs
init_define_process();
init_reactMod();
var ReorderContext = createContext(null);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
init_define_process();
function checkReorder(order2, value, offset, velocity) {
  if (!velocity)
    return order2;
  const index = order2.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order2;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order2[index + nextOffset];
  if (!nextItem)
    return order2;
  const item = order2[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mix(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order2, index, index + nextOffset);
  }
  return order2;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function ReorderGroup(_a, externalRef) {
  var _b = _a, { children, as = "ul", axis = "y", onReorder, values } = _b, props = __objRest(_b, ["children", "as", "axis", "onReorder", "values"]);
  const Component2 = useConstant(() => motion(as));
  const order2 = [];
  const isReordering = useRef(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout) => {
      if (layout && order2.findIndex((entry) => value === entry.value) === -1) {
        order2.push({ value, layout: layout[axis] });
        order2.sort(compareMin);
      }
    },
    updateOrder: (id3, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order2, id3, offset, velocity);
      if (order2 !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  useEffect(() => {
    isReordering.current = false;
  });
  return createElement(
    Component2,
    __spreadProps(__spreadValues({}, props), { ref: externalRef }),
    createElement(ReorderContext.Provider, { value: context }, children)
  );
}
var Group = forwardRef(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a2, b2) {
  return a2.layout.min - b2.layout.min;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
init_define_process();
init_reactMod();
init_reactMod();
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem(_a, externalRef) {
  var _b = _a, { children, style: style2 = {}, value, as = "li", onDrag, layout = true } = _b, props = __objRest(_b, ["children", "style", "value", "as", "onDrag", "layout"]);
  const Component2 = useConstant(() => motion(as));
  const context = useContext(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style2.x),
    y: useDefaultMotionValue(style2.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  const measuredLayout = useRef(null);
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const { axis, registerItem, updateOrder } = context;
  useEffect(() => {
    registerItem(value, measuredLayout.current);
  }, [context]);
  return createElement(Component2, __spreadProps(__spreadValues({ drag: axis }, props), { dragSnapToOrigin: true, style: __spreadProps(__spreadValues({}, style2), { x: point2.x, y: point2.y, zIndex }), layout, onDrag: (event, gesturePoint) => {
    const { velocity } = gesturePoint;
    velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onLayoutMeasure: (measured) => {
    measuredLayout.current = measured;
  }, ref: externalRef }), children);
}
var Item = forwardRef(ReorderItem);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/components/Reorder/index.mjs
var Reorder = {
  Group,
  Item
};

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
init_define_process();
var domAnimation = __spreadValues(__spreadValues({
  renderer: createDomVisualElement
}, animations), gestureAnimations);

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/render/dom/features-max.mjs
init_define_process();
var domMax = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, domAnimation), drag), layoutFeatures), {
  projectionNodeConstructor: HTMLProjectionNode
});

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-motion-template.mjs
init_define_process();
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value)
        output += values[i].get();
    }
    return output;
  }
  return useCombineMotionValues(values, buildValue);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-spring.mjs
init_define_process();
init_reactMod();
function useSpring(source, config = {}) {
  const { isStatic } = useContext(MotionConfigContext);
  const activeSpringAnimation = useRef(null);
  const value = useMotionValue(isMotionValue(source) ? source.get() : source);
  useMemo(() => {
    return value.attach((v, set) => {
      if (isStatic)
        return set(v);
      if (activeSpringAnimation.current) {
        activeSpringAnimation.current.stop();
      }
      activeSpringAnimation.current = animate(__spreadProps(__spreadValues({
        from: value.get(),
        to: v,
        velocity: value.getVelocity()
      }, config), {
        onUpdate: set
      }));
      return value.get();
    });
  }, [JSON.stringify(config)]);
  useOnChange(source, (v) => value.set(parseFloat(v)));
  return value;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-velocity.mjs
init_define_process();
init_reactMod();
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  useEffect(() => {
    return value.velocityUpdateSubscribers.add((newVelocity) => {
      velocity.set(newVelocity);
    });
  }, [value]);
  return velocity;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-scroll.mjs
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/animate-style.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/data.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-types-npm-10.14.0-209a936e66-9.zip/node_modules/@motionone/types/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-types-npm-10.14.0-209a936e66-9.zip/node_modules/@motionone/types/dist/MotionValue.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/css-var.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/array.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/clamp.es.js
init_define_process();
var clamp3 = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/defaults.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/easing.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-easing-list.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-number.es.js
init_define_process();
var isNumber = (value) => typeof value === "number";

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-easing-list.es.js
var isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/wrap.es.js
init_define_process();
var wrap2 = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/easing.es.js
function getEasingForSegment(easing, i) {
  return isEasingList(easing) ? easing[wrap2(0, easing.length, i)] : easing;
}

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/interpolate.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/mix.es.js
init_define_process();
var mix2 = (min, max, progress3) => -progress3 * min + progress3 * max + min;

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/noop.es.js
init_define_process();
var noopReturn = (v) => v;

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/offset.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/progress.es.js
init_define_process();
var progress2 = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/offset.es.js
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress2(0, remaining, i);
    offset.push(mix2(min, 1, offsetProgress));
  }
}
function defaultOffset2(length2) {
  const offset = [0];
  fillOffset(offset, length2 - 1);
  return offset;
}

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/interpolate.es.js
function interpolate2(output, input = defaultOffset2(output.length), easing = noopReturn) {
  const length2 = output.length;
  const remainder = length2 - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t) => {
    let i = 0;
    for (; i < length2 - 2; i++) {
      if (t < input[i + 1])
        break;
    }
    let progressInRange = clamp3(0, 1, progress2(input[i], input[i + 1], t));
    const segmentEasing = getEasingForSegment(easing, i);
    progressInRange = segmentEasing(progressInRange);
    return mix2(output[i], output[i + 1], progressInRange);
  };
}

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-cubic-bezier.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-easing-generator.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-function.es.js
init_define_process();
var isFunction = (value) => typeof value === "function";

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/is-string.es.js
init_define_process();
var isString2 = (value) => typeof value === "string";

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/time.es.js
init_define_process();
var time = {
  ms: (seconds) => seconds * 1e3,
  s: (milliseconds) => milliseconds / 1e3
};

// ../../.yarn/global/cache/@motionone-utils-npm-10.14.0-0281934633-9.zip/node_modules/@motionone/utils/dist/velocity.es.js
init_define_process();
function velocityPerSecond2(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/transforms.es.js
var axes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (v) => v + "deg"
};
var baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (v) => v + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
var transformDefinitions = /* @__PURE__ */ new Map();
var asTransformCssVar = (name) => `--motion-${name}`;
var transforms = ["x", "y", "z"];
order.forEach((name) => {
  axes.forEach((axis) => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
var transformLookup = new Set(transforms);

// ../../.yarn/global/cache/@motionone-animation-npm-10.14.0-26ae26acd7-9.zip/node_modules/@motionone/animation/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-animation-npm-10.14.0-26ae26acd7-9.zip/node_modules/@motionone/animation/dist/Animation.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-animation-npm-10.14.0-26ae26acd7-9.zip/node_modules/@motionone/animation/dist/utils/easing.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-easing-npm-10.14.0-97af278bce-9.zip/node_modules/@motionone/easing/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-easing-npm-10.14.0-97af278bce-9.zip/node_modules/@motionone/easing/dist/cubic-bezier.es.js
init_define_process();
var calcBezier2 = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision2 = 1e-7;
var subdivisionMaxIterations2 = 12;
function binarySubdivide2(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier2(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision2 && ++i < subdivisionMaxIterations2);
  return currentT;
}
function cubicBezier2(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noopReturn;
  const getTForX = (aX) => binarySubdivide2(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier2(getTForX(t), mY1, mY2);
}

// ../../.yarn/global/cache/@motionone-easing-npm-10.14.0-97af278bce-9.zip/node_modules/@motionone/easing/dist/steps.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-animation-npm-10.14.0-26ae26acd7-9.zip/node_modules/@motionone/animation/dist/utils/easing.es.js
var namedEasings = {
  ease: cubicBezier2(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier2(0.42, 0, 1, 1),
  "ease-in-out": cubicBezier2(0.42, 0, 0.58, 1),
  "ease-out": cubicBezier2(0, 0, 0.58, 1)
};

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/easing.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
init_define_process();
var testAnimation = (keyframes3, options) => document.createElement("div").animate(keyframes3, options);
var featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
  linearEasing: () => {
    try {
      testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }
};
var results = {};
var supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/style.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/options.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
init_define_process();
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/controls.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/utils/stagger.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/timeline/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/timeline/utils/calc-time.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/timeline/utils/edit.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/timeline/utils/sort.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/easing/spring/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/glide/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/utils/velocity.es.js
init_define_process();
var sampleT = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - sampleT, 0);
  return velocityPerSecond2(current - resolveValue(prevT), t - prevT);
}

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/spring/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/spring/defaults.es.js
init_define_process();
var defaults2 = {
  stiffness: 100,
  damping: 10,
  mass: 1
};

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/spring/utils.es.js
init_define_process();
var calcDampingRatio = (stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass) => damping / (2 * Math.sqrt(stiffness * mass));

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/utils/has-reached-target.es.js
init_define_process();
function hasReachedTarget(origin, target, current) {
  return origin < target && current >= target || origin > target && current <= target;
}

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/spring/index.es.js
var spring2 = ({ stiffness = defaults2.stiffness, damping = defaults2.damping, mass = defaults2.mass, from = 0, to = 1, velocity = 0, restSpeed = 2, restDistance = 0.5 } = {}) => {
  velocity = velocity ? time.s(velocity) : 0;
  const state = {
    done: false,
    hasReachedTarget: false,
    current: from,
    target: to
  };
  const initialDelta = to - from;
  const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
  const dampingRatio = calcDampingRatio(stiffness, damping, mass);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    resolveSpring = (t) => to - Math.exp(-dampingRatio * undampedAngularFreq * t) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
  } else {
    resolveSpring = (t) => {
      return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t);
    };
  }
  return (t) => {
    state.current = resolveSpring(t);
    const currentVelocity = t === 0 ? velocity : calcGeneratorVelocity(resolveSpring, t, state.current);
    const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
    state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
    state.hasReachedTarget = hasReachedTarget(from, to, state.current);
    return state;
  };
};

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/glide/index.es.js
var glide = ({ from = 0, velocity = 0, power = 0.8, decay: decay2 = 0.325, bounceDamping, bounceStiffness, changeTarget, min, max, restDistance = 0.5, restSpeed }) => {
  decay2 = time.ms(decay2);
  const state = {
    hasReachedTarget: false,
    done: false,
    current: from,
    target: from
  };
  const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = changeTarget === void 0 ? ideal : changeTarget(ideal);
  state.target = target;
  if (target !== ideal)
    amplitude = target - from;
  const calcDelta = (t) => -amplitude * Math.exp(-t / decay2);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDistance;
    state.current = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.current))
      return;
    timeReachedBoundary = t;
    spring$1 = spring2({
      from: state.current,
      to: nearestBoundary(state.current),
      velocity: calcGeneratorVelocity(calcLatest, t, state.current),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDistance,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return (t) => {
    let hasUpdatedFrame = false;
    if (!spring$1 && timeReachedBoundary === void 0) {
      hasUpdatedFrame = true;
      applyFriction(t);
      checkCatchBoundary(t);
    }
    if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
      state.hasReachedTarget = true;
      return spring$1(t - timeReachedBoundary);
    } else {
      state.hasReachedTarget = false;
      !hasUpdatedFrame && applyFriction(t);
      return state;
    }
  };
};

// ../../.yarn/global/cache/@motionone-generators-npm-10.14.0-ffd261b86d-9.zip/node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js
init_define_process();
var timeStep = 10;
var maxDuration2 = 1e4;
function pregenerateKeyframes(generator, toUnit = noopReturn) {
  let overshootDuration = void 0;
  let timestamp = timeStep;
  let state = generator(0);
  const keyframes3 = [toUnit(state.current)];
  while (!state.done && timestamp < maxDuration2) {
    state = generator(timestamp);
    keyframes3.push(toUnit(state.done ? state.target : state.current));
    if (overshootDuration === void 0 && state.hasReachedTarget) {
      overshootDuration = timestamp;
    }
    timestamp += timeStep;
  }
  const duration = timestamp - timeStep;
  if (keyframes3.length === 1)
    keyframes3.push(state.current);
  return {
    keyframes: keyframes3,
    duration: duration / 1e3,
    overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1e3
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js
init_define_process();
function createGeneratorEasing(createGenerator) {
  const keyframesCache = /* @__PURE__ */ new WeakMap();
  return (options = {}) => {
    const generatorCache = /* @__PURE__ */ new Map();
    const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
      const key = `${from}-${to}-${velocity}-${isScale}`;
      if (!generatorCache.has(key)) {
        generatorCache.set(key, createGenerator(Object.assign({
          from,
          to,
          velocity,
          restSpeed: isScale ? 0.05 : 2,
          restDistance: isScale ? 0.01 : 0.5
        }, options)));
      }
      return generatorCache.get(key);
    };
    const getKeyframes = (generator) => {
      if (!keyframesCache.has(generator)) {
        keyframesCache.set(generator, pregenerateKeyframes(generator));
      }
      return keyframesCache.get(generator);
    };
    return {
      createAnimation: (keyframes3, getOrigin2, canUseGenerator, name, motionValue2) => {
        var _a, _b;
        let settings;
        const numKeyframes = keyframes3.length;
        let shouldUseGenerator = canUseGenerator && numKeyframes <= 2 && keyframes3.every(isNumberOrNull);
        if (shouldUseGenerator) {
          const target = keyframes3[numKeyframes - 1];
          const unresolvedOrigin = numKeyframes === 1 ? null : keyframes3[0];
          let velocity = 0;
          let origin = 0;
          const prevGenerator = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.generator;
          if (prevGenerator) {
            const { animation, generatorStartTime } = motionValue2;
            const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
            const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
            const prevGeneratorCurrent = prevGenerator(currentTime).current;
            origin = (_a = unresolvedOrigin) !== null && _a !== void 0 ? _a : prevGeneratorCurrent;
            if (numKeyframes === 1 || numKeyframes === 2 && keyframes3[0] === null) {
              velocity = calcGeneratorVelocity((t) => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
            }
          } else {
            origin = (_b = unresolvedOrigin) !== null && _b !== void 0 ? _b : parseFloat(getOrigin2());
          }
          const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
          const keyframesMetadata = getKeyframes(generator);
          settings = Object.assign(Object.assign({}, keyframesMetadata), { easing: "linear" });
          if (motionValue2) {
            motionValue2.generator = generator;
            motionValue2.generatorStartTime = performance.now();
          }
        } else {
          const keyframesMetadata = getKeyframes(getGenerator(0, 100));
          settings = {
            easing: "ease",
            duration: keyframesMetadata.overshootDuration
          };
        }
        return settings;
      }
    };
  };
}
var isNumberOrNull = (value) => typeof value !== "string";

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/easing/spring/index.es.js
var spring3 = createGeneratorEasing(spring2);

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/easing/glide/index.es.js
init_define_process();
var glide2 = createGeneratorEasing(glide);

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/in-view.es.js
init_define_process();
var thresholds = {
  any: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "any" } = {}) {
  if (typeof IntersectionObserver === "undefined") {
    return () => {
    };
  }
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (isFunction(newOnEnd)) {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer2.observe(element));
  return () => observer2.disconnect();
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/resize/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js
init_define_process();
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const { inlineSize, blockSize } = borderBoxSize[0];
    return { width: inlineSize, height: blockSize };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js
init_define_process();
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/resize/index.es.js
function resize(a2, b2) {
  return isFunction(a2) ? resizeWindow(a2) : resizeElement(a2, b2);
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/info.es.js
init_define_process();
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time2) {
  const axis = info[axisName];
  const { length: length2, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length2] - element["client" + length2];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress2(0, axis.scrollLength, axis.current);
  const elapsed = time2 - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond2(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time2) {
  updateAxisInfo(element, "x", info, time2);
  updateAxisInfo(element, "y", info, time2);
  info.time = time2;
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js
init_define_process();
function calcInset(element, container) {
  let inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
      const { top, left } = current.getBBox();
      inset.x += left;
      inset.y += top;
      while (current && current.tagName !== "svg") {
        current = current.parentNode;
      }
    }
  }
  return inset;
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js
init_define_process();
var ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js
init_define_process();
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length2, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (isString2(edge)) {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (isNumber(edge)) {
    delta = length2 * edge;
  }
  return inset + delta;
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js
var defaultOffset3 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset3;
  let targetPoint = 0;
  let containerPoint = 0;
  if (isNumber(offset)) {
    offsetDefinition = [offset, offset];
  } else if (isString2(offset)) {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js
var point = { x: 0, y: 0 };
function resolveOffsets(container, info, options) {
  let { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : { width: target.clientWidth, height: target.clientHeight };
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged2 = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged2 && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged2 = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged2) {
    info[axis].interpolate = interpolate2(defaultOffset2(numOffsets), info[axis].offset);
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node != container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  const axis = options.axis || "y";
  return {
    measure: () => measure(element, options.target, info),
    update: (time2) => {
      updateScrollInfo(element, info, time2);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: isFunction(onScroll) ? () => onScroll(info) : scrubAnimation(onScroll, info[axis])
  };
}
function scrubAnimation(controls, axisInfo) {
  controls.pause();
  controls.forEachNative((animation, { easing }) => {
    var _a, _b;
    if (animation.updateDuration) {
      if (!easing)
        animation.easing = noopReturn;
      animation.updateDuration(1);
    } else {
      const timingOptions = { duration: 1e3 };
      if (!easing)
        timingOptions.easing = "linear";
      (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
    }
  });
  return () => {
    controls.currentTime = axisInfo.progress;
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/gestures/scroll/index.es.js
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
  var { container = document.documentElement } = _a, options = __rest(_a, ["container"]);
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const listener2 = () => {
      const time2 = performance.now();
      for (const handler of containerHandlers)
        handler.measure();
      for (const handler of containerHandlers)
        handler.update(time2);
      for (const handler of containerHandlers)
        handler.notify();
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, { passive: true });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, { passive: true });
  }
  const listener = scrollListeners.get(container);
  const onLoadProcesss = requestAnimationFrame(listener);
  return () => {
    var _a2;
    if (typeof onScroll !== "function")
      onScroll.stop();
    cancelAnimationFrame(onLoadProcesss);
    const containerHandlers2 = onScrollHandlers.get(container);
    if (!containerHandlers2)
      return;
    containerHandlers2.delete(containerHandler);
    if (containerHandlers2.size)
      return;
    const listener2 = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (listener2) {
      getEventTarget(container).removeEventListener("scroll", listener2);
      (_a2 = resizeListeners.get(container)) === null || _a2 === void 0 ? void 0 : _a2();
      window.removeEventListener("resize", listener2);
    }
  };
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/index.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/utils/has-changed.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/utils/resolve-variant.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/utils/is-variant.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/utils/schedule.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/utils/events.es.js
init_define_process();
function dispatchPointerEvent(element, name, event) {
  element.dispatchEvent(new CustomEvent(name, { detail: { originalEvent: event } }));
}
function dispatchViewEvent(element, name, entry) {
  element.dispatchEvent(new CustomEvent(name, { detail: { originalEntry: entry } }));
}

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/gestures/in-view.es.js
var inView2 = {
  isActive: (options) => Boolean(options.inView),
  subscribe: (element, { enable, disable }, { inViewOptions = {} }) => {
    const { once } = inViewOptions, viewOptions = __rest(inViewOptions, ["once"]);
    return inView(element, (enterEntry) => {
      enable();
      dispatchViewEvent(element, "viewenter", enterEntry);
      if (!once) {
        return (leaveEntry) => {
          disable();
          dispatchViewEvent(element, "viewleave", leaveEntry);
        };
      }
    }, viewOptions);
  }
};

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/gestures/hover.es.js
init_define_process();
var mouseEvent = (element, name, action) => (event) => {
  if (event.pointerType && event.pointerType !== "mouse")
    return;
  action();
  dispatchPointerEvent(element, name, event);
};
var hover = {
  isActive: (options) => Boolean(options.hover),
  subscribe: (element, { enable, disable }) => {
    const onEnter = mouseEvent(element, "hoverstart", enable);
    const onLeave = mouseEvent(element, "hoverend", disable);
    element.addEventListener("pointerenter", onEnter);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointerenter", onEnter);
      element.removeEventListener("pointerleave", onLeave);
    };
  }
};

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/gestures/press.es.js
init_define_process();
var press = {
  isActive: (options) => Boolean(options.press),
  subscribe: (element, { enable, disable }) => {
    const onPointerUp = (event) => {
      disable();
      dispatchPointerEvent(element, "pressend", event);
      window.removeEventListener("pointerup", onPointerUp);
    };
    const onPointerDown = (event) => {
      enable();
      dispatchPointerEvent(element, "pressstart", event);
      window.addEventListener("pointerup", onPointerUp);
    };
    element.addEventListener("pointerdown", onPointerDown);
    return () => {
      element.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }
};

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/state/index.es.js
var gestures = { inView: inView2, hover, press };
var stateTypes = ["initial", "animate", ...Object.keys(gestures), "exit"];

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/style-object.es.js
init_define_process();

// ../../.yarn/global/cache/@motionone-dom-npm-10.13.1-2b54608f7c-9.zip/node_modules/@motionone/dom/dist/animate/utils/style-string.es.js
init_define_process();

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-scroll.mjs
init_reactMod();
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll(_a = {}) {
  var _b = _a, { container, target, layoutEffect = true } = _b, options = __objRest(_b, ["container", "target", "layoutEffect"]);
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : useEffect;
  useLifecycleEffect(() => {
    return scroll(({ x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, __spreadProps(__spreadValues({}, options), {
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    }));
  }, []);
  return values;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
init_define_process();
function useElementScroll(ref) {
  warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  return useScroll({ container: ref });
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
init_define_process();
function useViewportScroll() {
  warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  return useScroll();
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
init_define_process();
init_reactMod();
function useAnimationFrame(callback) {
  const initialTimestamp = useRef(0);
  const { isStatic } = useContext(MotionConfigContext);
  useEffect(() => {
    if (isStatic)
      return;
    const provideTimeSinceStart = ({ timestamp, delta }) => {
      if (!initialTimestamp.current)
        initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    es_default.update(provideTimeSinceStart, true);
    return () => cancelSync.update(provideTimeSinceStart);
  }, [callback]);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-time.mjs
init_define_process();
function useTime() {
  const time2 = useMotionValue(0);
  useAnimationFrame((t) => time2.set(t));
  return time2;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
init_define_process();
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.members = [];
    this.transforms = /* @__PURE__ */ new Set();
  }
  add(name) {
    let memberName;
    if (transformProps.has(name)) {
      this.transforms.add(name);
      memberName = "transform";
    } else if (!name.startsWith("origin") && !isCSSVariable(name) && name !== "willChange") {
      memberName = camelToDash(name);
    }
    if (memberName) {
      addUniqueItem(this.members, memberName);
      this.update();
    }
  }
  remove(name) {
    if (transformProps.has(name)) {
      this.transforms.delete(name);
      if (!this.transforms.size) {
        removeItem(this.members, "transform");
      }
    } else {
      removeItem(this.members, camelToDash(name));
    }
    this.update();
  }
  update() {
    this.set(this.members.length ? this.members.join(", ") : "auto");
  }
};
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
init_define_process();
init_reactMod();
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = useState(prefersReducedMotion.current);
  return shouldReduceMotion;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
init_define_process();
init_reactMod();
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const { reducedMotion } = useContext(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/animation-controls.mjs
init_define_process();
function animationControls() {
  let hasMounted = false;
  const pendingAnimations = [];
  const subscribers = /* @__PURE__ */ new Set();
  const controls = {
    subscribe(visualElement2) {
      subscribers.add(visualElement2);
      return () => void subscribers.delete(visualElement2);
    },
    start(definition, transitionOverride) {
      if (hasMounted) {
        const animations2 = [];
        subscribers.forEach((visualElement2) => {
          animations2.push(animateVisualElement(visualElement2, definition, {
            transitionOverride
          }));
        });
        return Promise.all(animations2);
      } else {
        return new Promise((resolve) => {
          pendingAnimations.push({
            animation: [definition, transitionOverride],
            resolve
          });
        });
      }
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach((visualElement2) => {
        setValues(visualElement2, definition);
      });
    },
    stop() {
      subscribers.forEach((visualElement2) => {
        stopAnimation(visualElement2);
      });
    },
    mount() {
      hasMounted = true;
      pendingAnimations.forEach(({ animation, resolve }) => {
        controls.start(...animation).then(resolve);
      });
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/use-animation.mjs
init_define_process();
init_reactMod();
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-cycle.mjs
init_define_process();
init_reactMod();
function useCycle(...items) {
  const index = useRef(0);
  const [item, setItem] = useState(items[index.current]);
  const runCycle = useCallback(
    (next) => {
      index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
      setItem(items[index.current]);
    },
    [items.length, ...items]
  );
  return [item, runCycle];
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-in-view.mjs
init_define_process();
init_reactMod();
function useInView(ref, { root, margin, amount, once = false } = {}) {
  const [isInView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount: amount === "some" ? "any" : amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once]);
  return isInView;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
init_define_process();
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  start(event, options) {
    this.componentControls.forEach((controls) => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
init_define_process();
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
init_define_process();
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
init_define_process();
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current)
    return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
init_define_process();
init_reactMod();
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  useEffect(() => {
    es_default.postRender(() => es_default.postRender(() => instantAnimationState.current = false));
  }, [forcedRenderCount]);
  return (callback) => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
    });
  };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
init_define_process();
init_reactMod();
function useResetProjection() {
  const reset = useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root)
      return;
    root.resetTree();
  }, []);
  return reset;
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/animation/use-animated-state.mjs
init_define_process();
init_reactMod();
var createObject = () => ({});
var stateVisualElement = visualElement({
  build() {
  },
  measureViewportBox: createBox,
  resetTransform() {
  },
  restoreTransform() {
  },
  removeValueFromRenderState() {
  },
  render() {
  },
  scrapeMotionValuesFromProps: createObject,
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  },
  makeTargetAnimatable(element, _a) {
    var _b = _a, { transition, transitionEnd } = _b, target = __objRest(_b, ["transition", "transitionEnd"]);
    const origin = getOrigin(target, transition || {}, element);
    checkTargetForNewValues(element, target, origin);
    return __spreadValues({ transition, transitionEnd }, target);
  }
});
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = useState(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => stateVisualElement({ props: {}, visualState }, { initialState }));
  useEffect(() => {
    element.mount({});
    return element.unmount;
  }, [element]);
  useEffect(() => {
    element.setProps({
      onUpdate: (v) => {
        setAnimationState(__spreadValues({}, v));
      }
    });
  }, [setAnimationState, element]);
  const startAnimation2 = useConstant(() => (animationDefinition) => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation2];
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
init_define_process();
var maxScale = 1e5;
var invertScale = (scale2) => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const visualElement2 = useVisualElementContext();
  invariant(!!(scale2 || visualElement2), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement2) {
    parentScaleX = visualElement2.getValue("scaleX", 1);
    parentScaleY = visualElement2.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return { scaleX, scaleY };
}

// ../../.yarn/__virtual__/framer-motion-virtual-f2663e67ae/0/global/cache/framer-motion-npm-7.6.2-cc6e4732fc-9.zip/node_modules/framer-motion/dist/es/index.mjs
init_define_process();

export {
  MotionConfigContext,
  MotionContext,
  useVisualElementContext,
  PresenceContext,
  isBrowser,
  useIsomorphicLayoutEffect,
  LayoutGroupContext,
  SwitchLayoutGroupContext,
  createMotionComponent,
  addScaleCorrector,
  isMotionValue,
  isValidMotionProp,
  filterProps,
  resolveMotionValue,
  makeUseVisualState,
  AnimationType,
  useDomEvent,
  wrapHandler,
  addPointerEvent,
  isDragActive,
  useUnmountEffect,
  usePresence,
  useIsPresent,
  delay,
  MotionValue,
  motionValue,
  checkTargetForNewValues,
  animateVisualElement,
  animations,
  calcLength,
  createBox,
  visualElement,
  animate2 as animate,
  FlatTree,
  motion,
  createDomMotionComponent,
  m,
  useForceUpdate,
  AnimatePresence,
  DeprecatedLayoutGroupContext,
  LayoutGroup,
  AnimateSharedLayout,
  MotionConfig,
  LazyMotion,
  useMotionValue,
  transform,
  useTransform,
  Reorder,
  domAnimation,
  domMax,
  useMotionTemplate,
  useSpring,
  useVelocity,
  useScroll,
  useElementScroll,
  useViewportScroll,
  useAnimationFrame,
  useTime,
  useWillChange,
  useReducedMotion,
  useReducedMotionConfig,
  animationControls,
  useAnimationControls,
  useAnimation,
  useCycle,
  useInView,
  DragControls,
  useDragControls,
  isMotionComponent,
  unwrapMotionComponent,
  useInstantLayoutTransition,
  useInstantTransition,
  useResetProjection,
  useAnimatedState,
  useInvertedScale
};
