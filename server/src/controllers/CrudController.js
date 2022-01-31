const { employee } = require('../models/index')
// const axios = require('axios')

console.log(employee)

module.exports = {
  async add (req, res) {
    try {
      console.log('HEYYYYY IN ADDING')
      console.log(req.body)
      const Employee = await employee.create(req.body)
      console.log(Employee.toJSON())
      console.log('record inserted')
      res.send({
        message: 'Record Inserted'
      })
    } catch (err) {
      console.log(err)
      res.status(404).send({
        error: 'Email already in use'

      })
    }
  },
  async read (req, res) {
    try {
      console.log('HEYYYYY IN ReadING')
      // console.log(req.body)
      let Employee = []
      Employee = await employee.findAll()
      res.send({
        Employee
      })
    } catch (err) {
      console.log(err)
      res.status(404).send({
        error: 'Error'

      })
    }
  },
  async update (req, res) {
    try {
      console.log('HEYYYYY IN Updating')
      console.log(req.body)
      const Employee = await employee.update(
        {
          Name: req.body.Name,
          Email: req.body.Email,
          Mobile_no: req.body.Mobile_no,
          Joining_date: req.body.Joining_date,
          Salary: req.body.Salary
        },
        { where: { Email: req.body.email } }
      )
      console.log(Employee)
      res.status(200).send({
        message: 'Record Updated'
      })
    } catch (err) {
      console.log(err)
      res.status(404).send({
        error: 'Error'

      })
    }
  },
  async delete (req, res) {
    try {
      console.log('HEYYYYY IN deleting')
      console.log(req.body)
      const Employee = await employee.destroy(
        { where: { Email: req.body.Email } }
      )
      console.log(Employee)
      res.send({
        message: 'Record Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(404).send({
        error: 'Email Not Found'

      })
    }
  }
}
