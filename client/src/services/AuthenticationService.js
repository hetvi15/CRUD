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
  }
}

/* AuthenticationService.register({
  email: 'hetvish2000@gmail.com',
  password: '12345678'
}) */
