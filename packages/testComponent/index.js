import testComponent from "./src/testComponent";

testComponent.install = function(Vue) {
  Vue.component(testComponent.name, testComponent);
};

export const TestComponent = testComponent;
export default testComponent;
