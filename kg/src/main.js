import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import './assets/css/global.css'
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount('#app')