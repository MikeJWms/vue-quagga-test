import Vue from 'vue'
import App from './App.vue'
import VueBarcodeTest from './VueBarcodeTest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueBarcodeTest),
}).$mount('#app')
