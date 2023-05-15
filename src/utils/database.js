const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
    host: "DB_HOST",
    port: "DB_PORT",
    database: 'DB_NAME',
    username: 'DB_USERNAME',
    password: 'DB_PASSWORD',
    dialect: 'postgres',
    dialectOptions: { ssl: {require: true, rejectUnautorized: false}};
});

module.exports = db;