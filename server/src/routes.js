const AuthenticationController = require('./controllers/AuthenticationController.js')
console.log(AuthenticationController)

module.exports = (app) => {
  app.post('/SignUp', AuthenticationController.register)
}
