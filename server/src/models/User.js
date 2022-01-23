module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    Name: {
      type: DataTypes.STRING,
      required: true
    },
    Username: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    Password: {
      type: DataTypes.STRING,
      required: true
    },
    Birthdate: {
      type: DataTypes.STRING,
      required: true
    },
    Age: {
      type: DataTypes.STRING,
      required: true
    },
    Gender: {
      type: DataTypes.STRING,
      required: true
    },
    Country: {
      type: DataTypes.STRING,
      required: true
    }
  })

  return user
}
