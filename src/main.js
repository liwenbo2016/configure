import 'amfe-flexible'
import Vue from 'vue'

import '@/styles/index.styl'
import App from './App'
import router from './router'
import store from './store'
import './mock/index'
import '@/utils/useCube'
import './utils/permission'
import '@/icons' // icon
import * as filters from '@/utils/filters' // global filter

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
