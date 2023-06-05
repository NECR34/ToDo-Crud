const express = require('express');
const { getAllTodos} = require('../controllers/todo.controllers');
const { getTodoByPk } = require('../controllers/todo.controllers');
const { postNewTodo } = require('../controllers/todo.controllers');
const { deleteTodoById } = require('../controllers/todo.controllers');
const { putTodoById } = require('../controllers/todo.controllers');

const routerTodo = express.Router();

router.get('/toDo', getAllTodos );
router.get("/toDo/:id", getTodoByPk );
router.post('/toDo',postNewTodo );
router.delete('/toDo/:id',deleteTodoById );
router.put('/toDo/:id',putTodoById );



module.exports = routerTodo;