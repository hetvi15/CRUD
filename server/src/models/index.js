const fs = require('fs')
const path = require('path')
const db = {}
const Config = require('../config/config')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  Config.db.database,
  Config.db.user,
  Config.db.password,
  Config.db.options

)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.user = require('./User.js')(sequelize, Sequelize)

module.exports = db

/* const dbConfig = require('../config/config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.tutorials = require('./User.js')(sequelize, Sequelize)

module.exports = db
*/
