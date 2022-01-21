module.exports = (sequelize, Sequelize) =>
  sequelize.define('user', {
    Name: {
      type: Sequelize.STRING
    },
    Username: {
      type: Sequelize.STRING,
      primarykey: true
    },
    Password: {
      type: Sequelize.STRING
    },
    Birthdate: {
      type: Sequelize.STRING
    },
    Age: {
      type: Sequelize.STRING
    },
    Gender: {
      type: Sequelize.STRING
    },
    Country: {
      type: Sequelize.STRING
    }

  })
