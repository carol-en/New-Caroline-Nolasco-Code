import Vue from 'vue'
import App from './App.vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas, fab)
Vue.component('font-awesome-icon',  FontAwesomeIcon)
dom.watch()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
