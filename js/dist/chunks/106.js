yoastWebpackJsonp([106],{474:function(module,exports,__webpack_require__){"use strict";eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };\n\n!function (e, t) {\n  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.mk = t());\n}(undefined, function () {\n  "use strict";\n  return [{ locale: "mk", pluralRuleFunction: function pluralRuleFunction(e, t) {\n      var a = String(e).split("."),\n          o = a[0],\n          r = a[1] || "",\n          i = !a[1],\n          n = o.slice(-1),\n          l = o.slice(-2),\n          u = r.slice(-1);return t ? 1 == n && 11 != l ? "one" : 2 == n && 12 != l ? "two" : 7 != n && 8 != n || 17 == l || 18 == l ? "other" : "many" : i && 1 == n || 1 == u ? "one" : "other";\n    }, fields: { year: { displayName: "година", relative: { 0: "оваа година", 1: "следната година", "-1": "минатата година" }, relativeTime: { future: { one: "за {0} година", other: "за {0} години" }, past: { one: "пред {0} година", other: "пред {0} години" } } }, month: { displayName: "месец", relative: { 0: "овој месец", 1: "следниот месец", "-1": "минатиот месец" }, relativeTime: { future: { one: "за {0} месец", other: "за {0} месеци" }, past: { one: "пред {0} месец", other: "пред {0} месеци" } } }, day: { displayName: "ден", relative: { 0: "денес", 1: "утре", 2: "задутре", "-2": "завчера", "-1": "вчера" }, relativeTime: { future: { one: "за {0} ден", other: "за {0} дена" }, past: { one: "пред {0} ден", other: "пред {0} дена" } } }, hour: { displayName: "час", relative: { 0: "часов" }, relativeTime: { future: { one: "за {0} час", other: "за {0} часа" }, past: { one: "пред {0} час", other: "пред {0} часа" } } }, minute: { displayName: "минута", relative: { 0: "оваа минута" }, relativeTime: { future: { one: "за {0} минута", other: "за {0} минути" }, past: { one: "пред {0} минута", other: "пред {0} минути" } } }, second: { displayName: "секунда", relative: { 0: "сега" }, relativeTime: { future: { one: "за {0} секунда", other: "за {0} секунди" }, past: { one: "пред {0} секунда", other: "пред {0} секунди" } } } } }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/jip/Yoast/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/mk.js\n// module id = 474\n// module chunks = 106\n\n//# sourceURL=webpack:////Users/jip/Yoast/wp-content/plugins/wordpress-seo/node_modules/react-intl/locale-data/mk.js?')}});