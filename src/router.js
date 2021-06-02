import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
const login = ()=>import('@/components/Login.vue');
const home = ()=>import('@/views/Home.vue');
Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
