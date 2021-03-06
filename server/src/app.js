const express = require('express')
// const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())

app.use(cors())

// const db = require('./models')
// db.sequelize.sync()
require('./routes')(app)

module.exports = app

sequelize.sync().then(() => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(config.port)
  }
  // app.listen(config.port)
  console.log(`Server Started at ${config.port}`)
})

// app.listen(process.env.PORT || 8081)

/* console.log(express)
console.log("------------------------cls-----------------------------")
console.log(bodyParser)
console.log("-----------------------------------------------------")
console.log(cors)
console.log("-----------------------------------------------------")
console.log(morgan)
*/
