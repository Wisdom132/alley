import Vue from "vue";
import App from "./App";
import router from "./router/index";
import axios from 'axios';
// import swal from 'sweetalert';
import VueSweetalert2 from 'vue-sweetalert2';




import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);
Vue.use(axios);
Vue.use(VueSweetalert2);
// Vue.use(swal);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
