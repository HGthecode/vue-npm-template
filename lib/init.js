"use strict";

var _interopRequireWildcard = require("D:/demo/vue-npm-template/node_modules/@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _helloWorld = _interopRequireWildcard(require("./helloWorld"));

Object.keys(_helloWorld).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helloWorld[key];
    }
  });
});

var _testComponent = _interopRequireWildcard(require("./testComponent"));

Object.keys(_testComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testComponent[key];
    }
  });
});
// 按需加载的组件
var components = [_helloWorld.default, _testComponent.default]; // 默认安装

function install(Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue && window.Vue.use) {
  install(window.Vue);
}

var _default = {
  install: install
};
exports.default = _default;