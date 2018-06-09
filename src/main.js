// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://193.112.224.24/api'
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  axios
}).$mount('#app')
