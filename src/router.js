import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreatePostPage from '@/views/CreatePostPage.vue'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import Search from '@/views/Search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: CreatePostPage
    },
    {
      path: '/search=:keyword',
      name: 'search',
      component: SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG.vue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
