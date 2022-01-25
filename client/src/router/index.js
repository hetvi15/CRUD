import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Create from '@/components/Create'
import Read from '@/components/Read'
import Update from '@/components/Update'
import Delete from '@/components/Delete'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Read',
      name: 'Read',
      component: Read
    },
    {
      path: '/Update',
      name: 'Update',
      component: Update
    },
    {
      path: '/Delete',
      name: 'Delete',
      component: Delete
    }
  ]

})
