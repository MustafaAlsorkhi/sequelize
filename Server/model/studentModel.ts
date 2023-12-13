const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;
