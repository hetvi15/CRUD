module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: 'crud',
    user: 'root',
    password: '',
    options: {
      dialect: 'mysql',
      host: 'localhost'
    }

  }
}

/* {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'crud',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  */
