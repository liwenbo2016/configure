import router from '@/router'
// import store from '@/store'
router.beforeEach((to, from, next) => {
  // TODO 路由拦截
  next()
})
router.afterEach((to, from) => {
  // ...
  // window.scrollTo(0, 0)
})
