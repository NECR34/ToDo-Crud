const db = require( '../utils/database' );
const { DataTypes } = require('sequelize');


const toDo = db.define('todo', {
   
    title:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'user_id',
    }
});

module.exports = toDo;