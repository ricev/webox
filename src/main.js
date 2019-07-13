import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "./config";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

axios.defaults.timeout = 5000;
Vue.prototype.$axios = axios;
// 全局配置
Vue.prototype.config = config;

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
