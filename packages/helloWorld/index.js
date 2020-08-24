import helloWorld from "./src/helloWorld";

helloWorld.install = function(Vue) {
  Vue.component(helloWorld.name, helloWorld);
};

export const HelloWorld = helloWorld;
export default helloWorld;
