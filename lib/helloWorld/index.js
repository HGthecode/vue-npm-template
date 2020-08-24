"use strict";

var _interopRequireDefault = require("D:/demo/vue-npm-template/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HelloWorld = void 0;

var _helloWorld = _interopRequireDefault(require("./src/helloWorld"));

_helloWorld.default.install = function (Vue) {
  Vue.component(_helloWorld.default.name, _helloWorld.default);
};

var HelloWorld = _helloWorld.default;
exports.HelloWorld = HelloWorld;
var _default = _helloWorld.default;
exports.default = _default;