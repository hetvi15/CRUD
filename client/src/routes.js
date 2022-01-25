/* eslint-disable standard/object-curly-even-spacing */
import SignUp from './components/SignUp'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'

export default[
  { path: '/', component: Login},
  { path: '/SignUp', component: SignUp},
  {path: '/HomePage', component: HomePage},
  {path: '/Create', component: Create},
  {path: '/Read', component: Read},
  {path: '/Update', component: Update},
  {path: '/Delete', component: Delete}

]
