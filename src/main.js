import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
