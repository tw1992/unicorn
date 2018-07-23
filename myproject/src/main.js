// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "babel-polyfill"
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import global from './global'
Vue.prototype.$http = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;
Vue.use(global)
import './assets/css/common.css'
import './assets/css/contact.css'
import './assets/css/index.css'
import './assets/css/news.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
