"use strict";
const { Sequelize } = require('sequelize');
const sequelizee = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: '12345678',
    database: 'typescript',
    host: 'localhost',
});
module.exports = sequelizee;
