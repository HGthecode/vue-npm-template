

import HelloWorld from './helloWorld'
import TestComponent from './testComponent'


// 按需加载的组件
const components = [
  HelloWorld,
  TestComponent
]

// 默认安装
function install (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}



if (typeof window !== 'undefined' && window.Vue && window.Vue.use) {
  install(window.Vue)
}

export * from './helloWorld'
export * from './testComponent'

export default {
  install
}
