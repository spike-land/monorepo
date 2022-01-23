"use strict";
var __createBinding = (this && this.__createBinding) ||
  (Object.create
    ? (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function () {
          return m[k];
        },
      });
    })
    : (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }));
var __setModuleDefault = (this && this.__setModuleDefault) ||
  (Object.create
    ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    })
    : function (o, v) {
      o["default"] = v;
    });
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) {
      if (
        k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)
      ) {
        __createBinding(result, mod, k);
      }
    }
  }
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
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
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) },
    typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }),
    g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) {
      try {
        if (
          f = 1,
            y && (t = op[0] & 2
              ? y["return"]
              : op[0]
              ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
              : y.next) &&
            !(t = t.call(y, op[1])).done
        ) {
          return t;
        }
        if (y = 0, t) op = [op[0] & 2, t.value];
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
            if (
              !(t = _.trys, t = t.length > 0 && t[t.length - 1]) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
            if (t[2]) _.ops.pop();
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
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __values = (this && this.__values) || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") {
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      },
    };
  }
  throw new TypeError(
    s ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemCache = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var FileSystemCache = /** @class */ (function () {
  function FileSystemCache(basePath) {
    this.basePath = basePath;
  }
  FileSystemCache.prototype.getFile = function (uri) {
    try {
      return fs.promises.readFile(
        path.join(this.basePath, this.simplifyUri(uri)),
        { encoding: "utf8" },
      );
    } catch (e) {
      return Promise.resolve(undefined);
    }
  };
  FileSystemCache.prototype.clear = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b, file, e_1_1;
      var e_1, _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _d.trys.push([0, 6, 7, 8]);
            return [4, /*yield*/ fs.promises.readdir(this.basePath)];
          case 1:
            _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
            _d.label = 2;
          case 2:
            if (!!_b.done) return [3, /*break*/ 5];
            file = _b.value;
            return [
              4, /*yield*/
              fs.promises.unlink(path.join(this.basePath, file)),
            ];
          case 3:
            _d.sent();
            _d.label = 4;
          case 4:
            _b = _a.next();
            return [3, /*break*/ 2];
          case 5:
            return [3, /*break*/ 8];
          case 6:
            e_1_1 = _d.sent();
            e_1 = { error: e_1_1 };
            return [3, /*break*/ 8];
          case 7:
            try {
              if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            } finally {
              if (e_1) throw e_1.error;
            }
            return [7 /*endfinally*/];
          case 8:
            return [2 /*return*/];
        }
      });
    });
  };
  FileSystemCache.prototype.storeFile = function (uri, content) {
    return fs.promises.writeFile(
      path.join(this.basePath, this.simplifyUri(uri)),
      content,
    );
  };
  FileSystemCache.prototype.simplifyUri = function (uri) {
    return uri.replace(/\//g, "_").replace(/@/g, "___");
  };
  return FileSystemCache;
}());
exports.FileSystemCache = FileSystemCache;
