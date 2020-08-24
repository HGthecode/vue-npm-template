import Vue from "vue";
import App from "./App.vue";

import myCompontents from "../index";
Vue.use(myCompontents);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
