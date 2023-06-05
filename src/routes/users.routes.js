const express = require('express');
const { getAllUsers } = require('../controllers/users.controllers');
const { getUserByPk } = require('../controllers/users.controllers');
const { getUserByEmail } = require('../controllers/users.controllers');
const { postNewUser } = require('../controllers/users.controllers');
const { deleteUserById } = require('../controllers/users.controllers');
const { putUserById } = require('../controllers/users.controllers');

const routerUsers = express.Router();






router.get('/users', getAllUsers );
router.get("/users/:id", getUserByPk );
router.get('/users/email/:email', getUserByEmail );
router.post('/users', postNewUser );
router.delete('/users/:id', deleteUserById);
router.put('/users/:id', putUserById);




module.exports = routerUsers;




