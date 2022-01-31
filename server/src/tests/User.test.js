/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../app')
describe('Registering', () => {
  test('SignUp should work- response 200', async () => {
    const newStudent = await request(app)
      .post('/SignUp')
      .send({
        Name: 'kash',
        Username: 'kash@gm.co',
        Password: '12345678k',
        Birthdate: '2008/12/26',
        Age: 13,
        Gender: 'Female',
        Country: 'India'

      }).expect(200)

    // make sure we add it correctly
    expect(newStudent.statusCode).toBe(200)
  })
})

describe('Registering', () => {
  test('SignUp Should fail-response 404', async () => {
    const newStud = await request(app)
      .post('/SignUp')
      .send({
        Name: 'kash',
        Username: 'kash@gm.co',
        Password: '12345678k',
        Birthdate: '2008/12/26',
        Age: 13,
        Gender: 'Female',
        Country: 'India'

      }).expect(404)
    expect(newStud.statusCode).toBe(404)
  })
})
describe('Registering', () => {
  test('SignUp Should fail wrong credentials', async () => {
    const newStud = await request(app)
      .post('/SignUp')
      .send({
        Name: 'kash',
        Username: 'kash@gm.co',
        Password: '12k',
        Birthdate: '2008/12/26',
        Age: 13,
        Gender: 'Female',
        Country: 'India'

      }).expect(404)
    expect(newStud.statusCode).toBe(404)
  })
})
describe('Login', () => {
  test('Should Login-response 200', async () => {
    // jest.setTimeout(10000)
    const newStud = await request(app)
      .post('/')
      .send({

        Username: 'Hetvi@gmail.com',
        Password: '12345678h'

      }).expect(200)
    expect(newStud.statusCode).toBe(200)
  })
})

describe('Login', () => {
  test('bad Request-wrong Credentials-400 Bad Request', async () => {
    // jest.setTimeout(10000)
    const newStud = await request(app)
      .post('/')
      .send({

        Username: 'Hetvi@gmail.com',
        Password: '123458h'

      }).expect(400)
    expect(newStud.statusCode).toBe(400)
  })
})
describe('Login', () => {
  test('Should not Authenticate-return 404', async () => {
    // jest.setTimeout(10000)
    const newStud = await request(app)
      .post('/')
      .send({

        Username: 'Hetvi@gmail.com',
        Password: '12345678hjk'

      }).expect(400)
    expect(newStud.statusCode).toBe(400)
  })
})
