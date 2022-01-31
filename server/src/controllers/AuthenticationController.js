const { user } = require('../models/index')

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
  async login (req, res) {
    try {
      console.log('HEYYYYY IN Login')
      console.log(req.body)
      const { Username, Password } = req.body
      console.log(Username + Password)
      const User = await user.findOne({
        where: {
          Username: Username,
          Password: Password
        }
      })
      if (!User) {
        console.log('yaha hi')
        res.status(400).send({
          error: 'The login information was incorrect'
        })
      } else {
        res.status(200).send({
          message: 'Successful'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
}

/* async login (req, res) {
    try {
      const { Username, Password } = req.body
      console.log(Username + Password)
      const User = await user.findOne({
        where: {
          Username: Username,
          Password: Password
        }
      })
      // console.log(User)
      if (User) {
        console.log('successful')
        res.redirect('/HomePage')
      } else {
        console.log('yaha hi')
        res.send({
          message: 'The login information was incorrect'
        })
      }
    } catch (err) {
      console.log(err)
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
