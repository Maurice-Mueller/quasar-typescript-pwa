require(`quasar/dist/quasar.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Quasar)

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}
// import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

/* eslint-disable no-new */
console.log(JSON.stringify(App))
const vm = new Vue({
  el: '#q-app',
  router,
  render: h => h(App)
})

export {vm}
