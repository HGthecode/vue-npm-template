"use strict";

var _interopRequireDefault = require("D:/demo/vue-npm-template/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TestComponent = void 0;

var _testComponent = _interopRequireDefault(require("./src/testComponent"));

_testComponent.default.install = function (Vue) {
  Vue.component(_testComponent.default.name, _testComponent.default);
};

var TestComponent = _testComponent.default;
exports.TestComponent = TestComponent;
var _default = _testComponent.default;
exports.default = _default;