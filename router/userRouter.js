const express = require('express');
const userRouter = new express.Router();

const { createUser, getUser, updateUser, deleteUser } = require('../Controller/userController');

userRouter.post('/',createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser); //Re-Routing

module.exports = userRouter;