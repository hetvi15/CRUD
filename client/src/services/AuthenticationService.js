import api from './api.js'
console.log('Heyyyyyyy')

export default{
  register (credentials) {
    console.log('Registering')
    // console.log(credentials)
    // alert('Adding You......')
    return api().post('SignUp', credentials)
  },
  login (credentials) {
    console.log('Login')
    // console.log(credentials)
    // alert('Adding You......')
    return api().post('/', credentials)
  },
  add (credentials) {
    console.log('adding')
    console.log(credentials)
    return api().post('/Create', credentials)
  },
  read () {
    console.log('reading')
    // console.log(credentials)
    return api().post('/Read')
  },
  update (credentials) {
    console.log('updating')
    // console.log(credentials)
    return api().post('/Update', credentials)
  },
  delete (credentials) {
    console.log('deleting')
    // console.log(credentials)
    return api().post('/Delete', credentials)
  }
}

/* AuthenticationService.register({
  email: 'hetvish2000@gmail.com',
  password: '12345678'
}) */
