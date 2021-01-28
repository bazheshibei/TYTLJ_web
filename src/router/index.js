
import Vue from 'vue'
import Router from 'vue-router'

import Routes from './routes.js'

Vue.use(Router)

const router = new Router({ routes: Routes })

/*
 * [路由守卫]
 */
// router.beforeEach((to, from, next) => {

// })

export default router
