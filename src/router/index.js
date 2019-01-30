import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import errPage from '@/components/404'
import goods from '@/modules/goods/route'
import electronicEquipment from '@/modules/electronicEquipment/route'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/404',
      name: '404',
      component: errPage
    },
    goods,
    electronicEquipment
  ]
})

// 路由守卫  页面跳转拦截 
router.beforeResolve((to, from, next) => {
  if (to.fullPath === '/first') {
    console.log(to)
  }
  if (from.fullPath === '/first') {
    
  }
  
  /* next 可以传参  
     @参数
      不传参  进行下一个钩子，也就是跳转到to.fullPath
      false 停止当前页面跳转   
      路由地址 终止导航并进行一个新的导航 比如 '/first'  从而跳转到 '/first' 
      error实例  终止导航  并传入router.onError（）
     */
  next()
})

// 路由错误处理
router.onError(err => {
  console.log(err)
  next('/404')
})

export default router
