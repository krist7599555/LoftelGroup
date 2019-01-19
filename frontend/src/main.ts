import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import Buefy from "buefy";
Vue.use(Buefy, { defaultIconPack: "fas" });

import "./style/index.scss";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
library.add(fas, far, fab);
dom.watch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
