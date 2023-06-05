const Users = require ('./users.model');
const Todo = require('./todo.models');
const Categories = require('./categories.model');




const initModels = () => {
    Users.hasMany(Todo, {foreignKey: 'userId'});
    Todo.belongsTo(Users, {foreignKey: 'userId'});
    
    Todo.belongsTo(Categories, { foreignKey: 'categoryId'});
    Categories.hasMany(Todo, { foreignKey: 'categoryId'});
};

module.exports = initModels;
