import Vue from 'vue'
import Router from 'vue-router'

// router에 vue를 import를 해야 페이지 전환 가능하다
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
});
