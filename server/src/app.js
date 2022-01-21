const mysql = require(('mysql'))
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud'
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connected successfully to MySql server')
})

console.log('hrllooo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/SignUp', (req, res) => {
  res.send({
    message: `Hello ${req.body.username}! Your user was registered`
  })
})
app.listen(process.env.PORT || 8081)

/* console.log(express)
console.log("------------------------cls-----------------------------")
console.log(bodyParser)
console.log("-----------------------------------------------------")
console.log(cors)
console.log("-----------------------------------------------------")
console.log(morgan)
*/
