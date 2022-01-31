/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../app')
describe('Adding Employee', () => {
  test('Create a new employee', async () => {
    const newStud = await request(app)
      .post('/Create')
      .send({
        Name: 'kash',
        Email: 'kash@gm.co',
        Mobie_No: '9426015121',
        Joining_date: '2008/12/26',
        Salary: 250000

      }).expect(200)
    expect(newStud.statusCode).toBe(200)
  })
})

describe('Updating Employee', () => {
  test('Update an  employee', async () => {
    const newStud = await request(app)
      .post('/Update')
      .send({
        email: 'kash@gm.co',
        Name: 'kash',
        Email: 'kash@gmail.co',
        Mobie_No: 9426015121,
        Joining_date: '2008/12/26',
        Salary: 250000

      }).expect(200)
    expect(newStud.statusCode).toBe(200)
  })
})

describe('Deleting Employee', () => {
  test(' Delete an  employee', async () => {
    const newStud = await request(app)
      .post('/Delete')
      .send({

        Email: 'kash@gmail.co'

      }).expect(200)
    expect(newStud.statusCode).toBe(200)
  })
})

describe('Read All Employees', () => {
  test(' Read All Employees', async () => {
    const newStud = await request(app)
      .post('/Read').expect(200)
    expect(newStud.statusCode).toBe(200)
  })
})
