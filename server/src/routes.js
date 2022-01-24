const AuthenticationController = require('./controllers/AuthenticationController')
console.log(AuthenticationController)

module.exports = (app) => {
  app.post('/SignUp', AuthenticationController.register)
  app.post('/', AuthenticationController.login)
}
