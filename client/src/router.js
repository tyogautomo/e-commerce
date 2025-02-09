import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Carts from './views/Carts.vue'
import Detail from "./views/Detail.vue"
import Products from "./views/Products.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/products',
      component: Products,
      children: [{
        path: '',
        name: 'products',
        component: Main,
      }, {
        path: 'detail/:productId',
        component: Detail
      }]
    },
    {
      path: '/carts',
      name: 'carts',
      component: Carts
    }
  ]
})
