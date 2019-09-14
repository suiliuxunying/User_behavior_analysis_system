import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/test/HelloWorld'
import IndexPage from '../pages/dingzhifenxi/index.vue'
import shishi from '../pages/shishi.vue'
import testPage from '../pages/testPage.vue'
import renQun from '../pages/renqunhuaxiang/renQun.vue'
import appList from '../pages/renqunhuaxiang/appListPage.vue'
import  paihang from '../pages/renqunhuaxiang/paihangPage.vue'
import loginTo from "../components/container.vue"
import login from "../components/login.vue"
import loginPage from "../pages/loginPage.vue"
import mainPage from '../pages/mainPage.vue'
import userPage from '../pages/dingzhifenxi/userParge.vue'
import yemianPage from '../pages/dingzhifenxi/yemianPage.vue'
import xingbie from '../pages/renqunhuaxiang/xingbie..vue'
import xitongpaihang from '../pages/renqunhuaxiang/xitongpaihang.vue'
import apppeihao from '../pages/renqunhuaxiang/apppeihao.vue'
import userxingwei from '../pages/renqunhuaxiang/userxingwei.vue'
import forPPTPage from '../pages/dingzhifenxi/forPPTPage.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/loginTo',
      name: 'loginTo',
      component: loginTo,
      children:
      [
        {
          path: '/index',
          name: 'IndexPage',
          component: IndexPage
        },
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/shishi',
          name: 'shishi',
          component: shishi
        },
        {
          path: '/renQun',
          name: 'renQun',
          component: renQun
        },
        {
          path: '/test',
          name: 'test',
          component: testPage
        },
        {
          path: '/appList',
          name: 'appList',
          component: appList
        },
        {
          path: '/paihang',
          name: 'paihang',
          component: paihang
        },
        {
          path: '/yemianPage',
          name: 'yemianPage',
          component: yemianPage
        },
        {
          path: '/userPage',
          name: 'userPage',
          component: userPage
        },
        {
          path: '/forPPTPage',
          name: 'forPPTPage',
          component: forPPTPage
        },
        {
          path: '/xitongpaihang',
          name: 'xitongpaihang',
          component: xitongpaihang
        },
        {
          path: '/xingbie',
          name: 'xingbie',
          component: xingbie
        },
        {
          path: '/apppeihao',
          name: 'apppeihao',
          component: apppeihao
        },
        {
          path: '/userxingwei',
          name: 'userxingwei',
          component: userxingwei
        }
      ]
    },
    {
      "name":'login',
    component:login,
    path:'/login',
      children:
        [
          {
            "name":'loginPage',
            component:loginPage,
            path:'/loginPage'},
          {
            "name":'mainPage',
            component:mainPage,
            path:'/mainPage'}
        ]}
  ]
})
