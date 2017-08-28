import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '@/Hello.vue'

Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

const routeOptions = <VueRouter.RouterOptions>{
	routes: [
		{ path: '/', component: Hello}
	]
}

export default new VueRouter(routeOptions)
