/* eslint-disable standard/object-curly-even-spacing */
import SignUp from './components/SignUp'
import Login from './components/Login'
// import HelloWorld from './components/HelloWorld'
import HomePage from './components/HomePage'

export default[
  { path: '/', component: Login},
  { path: '/SignUp', component: SignUp},
  // { path: '/Login', component: Login}
  {path: '/HomePage', component: HomePage}
]
