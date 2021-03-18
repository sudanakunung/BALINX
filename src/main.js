import Vue from 'vue'
import App from './App.vue'
import Guest from './guest.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'

Vue.config.productionTip = false

if(localStorage.token){

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
}else{
  
new Vue({
  router,
  store,
  render: h => h(Guest)
}).$mount('#app')
}
