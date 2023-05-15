const express = require('express');
require('dotenv').config();
const toDo = require('./models/todo.models')

const PORT = process.env.PORT || 8000;

const db = require('./utils/database');

db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log(err));
  
db.sync()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());



app.post('/toDo',async (req, res) => {
  try {
  const newtoDo = req.body;
  await toDo.create(newtoDo);
  res.status(201).send();
  }catch (error) {
    res.status(400).json(error);
  }
});

app.get('/toDo', async(req, res) =>{
  try {
  const toDos = await toDo.findAll({
    attributes: ["title", "description", "completed"]
  });
  res.json(toDos);
  } catch (error) {
    res.status(400).json(error)
  }
});

app.get("/toDo/:id", async (req, res) =>{
  try {
    const { id } = req.params;
    console.log(req.params);

    const to_do = await toDo.findByPk(id, {
      attributes: ["title", "description", "completed"]
    });
    res.json(to_do);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/toDo/:id", async (req, res) =>{
  try {
    const { id } = req.params;
    await toDo.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});

app.put("/toDo/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const { title, description, completed} = req.body;
    await toDo.update({ title, description, completed}, {
      where: {id}
    });
      res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puert ${PORT}`);
});