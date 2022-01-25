module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    Name: {
      type: DataTypes.STRING,
      required: true
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    Mobile_no: {
      type: DataTypes.STRING,
      required: true
    },
    Joining_date: {
      type: DataTypes.STRING,
      required: true
    },
    Salary: {
      type: DataTypes.STRING,
      required: true
    }
  })

  return employee
}
