import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Test from '@/views/Test'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {
        keepAlive: false
      }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {

})

export default router;