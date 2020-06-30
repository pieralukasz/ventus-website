import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAgile);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
