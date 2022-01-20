import api from './api.js'
console.log('Heyyyyyyy')

export default{
  register (credentials) {
    console.log('Registering')
    console.log(credentials)
    return api().post('SignUp', credentials)
  }
}

/* AuthenticationService.register({
  email: 'hetvish2000@gmail.com',
  password: '12345678'
}) */
