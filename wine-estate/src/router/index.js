import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import allOrders from '@/components/allOrders/allOrders'
import obliGation from '@/components/obliGation/obliGation'
import forEvaluate from '@/components/forEvaluate/forEvaluate'
import forGoods from '@/components/forGoods/forGoods'
import orderDetails from '@/components/orderDetails/orderDetails'
import orderSure from '@/components/orderSure/orderSure'
import orderFinish from '@/components/orderFinish/orderFinish'
import orderPay from '@/components/orderPay/orderPay'
import commentlist from '@/components/commentlist/commentlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/allOrders',
      name: 'allOrders',
      component: allOrders
    },
    {
      path: '/obliGation',
      name: 'obliGation',
      component: obliGation
    },
    {
      path: '/forEvaluate',
      name: 'forEvaluate',
      component: forEvaluate
    },
    {
      path: '/forGoods',
      name: 'forGoods',
      component: forGoods
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/orderSure',
      name: 'orderSure',
      component: orderSure
    },
    {
      path: '/orderFinish',
      name: 'orderFinish',
      component: orderFinish
    },
    {
      path: '/orderPay',
      name: 'orderPay',
      component: orderPay
    },
    {
      path: '/commentlist',
      name: 'commentlist',
      component: commentlist
    }
  ]
})
