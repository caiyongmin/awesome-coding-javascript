
    (function (modules) {
      function require(id) {
        const [requireFn, mapping] = modules[id];
        function localRequire(relativePath) {
          return require(mapping[relativePath]);
        }
        const module = {exports: {}};
        requireFn(localRequire, module, module.exports);
        return module.exports;
      }
      require(0);
    })({0: [
      function (require, module, exports) {
        "use strict";

var _a = _interopRequireDefault(require("./a.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line no-console
console.info(_a["default"]);
      },
      {"./a.js":1},
    ],1: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _b = _interopRequireDefault(require("./b.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var greeting = "hello, ".concat(_b["default"], "!");
var _default = greeting;
exports["default"] = _default;
      },
      {"./b.js":2},
    ],2: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = 'webpack';
exports["default"] = _default;
      },
      {},
    ],})
  