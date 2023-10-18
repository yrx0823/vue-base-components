import Vue from 'vue'
import ServeDev from './serve.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(ServeDev)
}).$mount('#app')
