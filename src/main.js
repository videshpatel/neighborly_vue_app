import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "vue-event-calendar/dist/style.css"; //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from "vue-event-calendar";
Vue.use(vueEventCalendar, { locale: "us" }); //locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi'

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
