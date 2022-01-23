const { user } = require('../models/index')
// const axios = require('axios')

console.log(user)

module.exports = {
  async register (req, res) {
    try {
      console.log('HEYYYYY IN AUTHENTICATION')
      console.log(req.body)
      console.log(req.body.name)
      const User = await user.create(req.body)
      console.log(User.toJSON())
      console.log('record inserted')
      // res.redirect('http://local.mydomain.com:8080/#')
      // const flash = req.flash('You are registered! Login to continue')
      // res.send(flash)
      res.redirect('/')
    } catch (err) {
      console.log(err)
      res.send({
        message: 'Email already in use'

      })
    }
  }
}

/*
const Tutorial = db.tutorials
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = () => {
    Name: "User1",
    Username: "User1@gmail.com",
    Password : "User1pass",
    Birthdate:"1/1/2001",
    Age:21,
    Gender:"Female"
    Country:"India"
}.then(res => {
    console.log(res);
}).catch(err=>console.log(err));

*/
