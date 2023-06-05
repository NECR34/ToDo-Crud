const Users = require('../models/users.model');

const getAllUsers = async(req, res) =>{
  try {
  const users = await Users.findAll({
    attributes: ["username", "email"]
  });
  res.json(users);
  } catch (error) {
    res.status(400).json(error)
  }
};

const getUserByPk = async (req, res) =>{
  try {
    const { id } = req.params;
    console.log(req.params);

    const user = await Users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserByEmail =  async (req, res) => {
  try{
    const {email} = res.params;
    const user = await Users.findOne({
      where: {email},
    });
    res.json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  
};

const postNewUser = async (req, res) => {
  try {
    const newUser = req.body
    await Users.create(newUser)
    res.status(201).send();
  } catch (error){
  res.status(400).json(error);
  }
};

const deleteUserById =  async (req, res) =>{
  try {
    const { id } = req.params;
    await Users.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const putUserById =  async (req, res) => {
  try {
    const {id} = req.params;
    const { username} = req.body;
    await Users.update({ username}, {
      where: {id}
    });
      res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};




module.exports ={
    getAllUsers,
    getUserByPk,
    getUserByEmail,
    postNewUser,
    deleteUserById,
    putUserById
};