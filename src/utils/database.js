const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
    host: "localhost",
    port: 5432,
    database: 'todo_crud',
    username: 'postgres',
    password: 'Naranjo1988',
    dialect: 'postgres',
   
});

module.exports = db;