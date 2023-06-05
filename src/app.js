const express = require('express');
require('dotenv').config();
const db = require('./utils/database');
require('./models/initModels');
const userRoutes = require("./routes/users.routes");
const todoRoutes = require('./routes/todos.routes');


const PORT = process.env.PORT || 8000;



db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.log(err));
  
db.sync( {force:true})
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});
app.use(todoRoutes);
app.use(userRoutes);



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puert ${PORT}`);
});