"use strict";
/// <reference types="@emotion/react/types/css-prop" />
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.pageQuery = void 0;
/** @jsx jsx */
var react_1 = require("@emotion/react");
var React = require("react");
var gatsby_1 = require("gatsby");
var bio_1 = require("../components/bio");
var layout_1 = require("../components/layout");
var seo_1 = require("../components/seo");
var getUser_1 = require("../components/code/getUser");
var typography_1 = require("../components/utils/typography");
var Qr_1 = require("../components/code/Qr");
var forkMe_png_1 = require("../../assets/forkMe.png");
var isMobile = function () {
    if (typeof window === "undefined")
        return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
};
var BlogIndex = function (_a) {
    var data = _a.data;
    var edges = data.allMdx.edges;
    React.useEffect(function () {
        if (typeof window !== "undefined") {
            var install = function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = console).log;
                            return [4 /*yield*/, getUser_1.getUserId()];
                        case 1:
                            _b.apply(_a, [_c.sent()]);
                            return [2 /*return*/];
                    }
                });
            }); };
            install();
            // registerSW();
        }
    }, []);
    return (react_1.jsx(layout_1.Layout, null,
        react_1.jsx(seo_1.SEO, { title: "This is Zed vision" }),
        isMobile() === false
            ? react_1.jsx("h1", null,
                "Link your mobile with this code: ",
                react_1.jsx(Qr_1.Qr, null))
            : react_1.jsx("h1", null, "This is my blog."),
        react_1.jsx("a", { href: "https://github.com/zed-vision/monorepo" },
            react_1.jsx("img", { loading: "lazy", width: "149", height: "149", src: forkMe_png_1["default"], style: { position: "absolute", top: 0, right: 0 }, alt: "Fork me on GitHub" })),
        edges.map(function (_a) {
            var node = _a.node;
            var title = node.frontmatter.title || node.fields.slug;
            return (react_1.jsx("article", { key: node.fields.slug },
                react_1.jsx("header", null,
                    react_1.jsx("h3", { css: react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["  \n                      margin-bottom: ", ";\n                      "], ["  \n                      margin-bottom: ", ";\n                      "])), typography_1.rhythm(1 / 4)) },
                        react_1.jsx(gatsby_1.Link, { css: react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["    \n                    box-shadow: \"none\";\n                  "], ["    \n                    box-shadow: \"none\";\n                  "]))), to: node.fields.slug }, title)),
                    react_1.jsx("small", null, node.frontmatter.date)),
                react_1.jsx("section", null,
                    react_1.jsx("p", { dangerouslySetInnerHTML: {
                            __html: node.frontmatter.description || node.excerpt
                        } }))));
        }),
        react_1.jsx(bio_1.Bio, null)));
};
exports["default"] = BlogIndex;
exports.pageQuery = gatsby_1.graphql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {\n      edges {\n        node {\n          excerpt\n          fields {\n            slug\n          }\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    site {\n      siteMetadata {\n        title\n      }\n    }\n    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {\n      edges {\n        node {\n          excerpt\n          fields {\n            slug\n          }\n          frontmatter {\n            date(formatString: \"MMMM DD, YYYY\")\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
