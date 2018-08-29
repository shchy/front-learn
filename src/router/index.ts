import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: () => import('../views/debug.vue'),
        },
    ]
})