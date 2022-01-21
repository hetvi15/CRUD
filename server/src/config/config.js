module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'crud',
    user: process.env.DB_USER || 'root',
    PASSWORD: '',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './crud.mysql'
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
