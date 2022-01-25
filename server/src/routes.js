const AuthenticationController = require('./controllers/AuthenticationController')
const CrudController = require('./controllers/CrudController')
console.log(AuthenticationController)
console.log(CrudController)

module.exports = (app) => {
  app.post('/SignUp', AuthenticationController.register)
  app.post('/', AuthenticationController.login)
  app.post('/Create', CrudController.add)
  app.post('/Read', CrudController.read)
  app.post('/Update', CrudController.update)
  app.post('/Delete', CrudController.delete)
}
