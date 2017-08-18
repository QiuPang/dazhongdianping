// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from "./stores";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookie from "vue-cookie";
import "./assets/rem";
import FastClick from "fastclick";

Vue.use(MintUI);
Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
