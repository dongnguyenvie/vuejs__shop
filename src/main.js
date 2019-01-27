import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import listIcon from './font/fontawe.js'

// setup router
import routes from './routes/Routes.js'

Vue.use(VueRouter)
Vue.use(listIcon)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
