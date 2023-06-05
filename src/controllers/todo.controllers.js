const Todos = require('../models/todo.models');

const getAllTodos = async(req, res) =>{
  try {
  const todos = await Todos.findAll({
    attributes: ["title", "description", "completed"]
  });
  res.json(todos);
  } catch (error) {
    res.status(400).json(error)
  }
};

const getTodoByPk = async (req, res) =>{
  try {
    const { id } = req.params;
    console.log(req.params);

    const todo = await Todos.findByPk(id, {
      attributes: ["title", "description", "completed"]
    });
    res.json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const postNewTodo = async (req, res) => {
    try {
    const newtoDo = req.body;
    await Todos.create(newtoDo);
    res.status(201).send();
    }catch (error) {
      res.status(400).json(error);
    }
  };

const deleteTodoById = async (req, res) =>{
    try {
      const { id } = req.params;
      await Todos.destroy({
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  };

const putTodoById = async (req, res) => {
    try {
      const {id} = req.params;
      const { title, description, completed} = req.body;
      await Todos.update({ title, description, completed}, {
        where: {id}
      });
        res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  };
  




module.exports ={
    getAllTodos,
    getTodoByPk,
    postNewTodo,
    deleteTodoById,
    putTodoById
}