'use strict';

const express = require('express');
const enviroment = require('./environment');
const userController = require('./userController');
const userRepository = require('./userRepository');
const userService = require('./userService');
const app = express();
app.use(express.json());

// userRepository.saveUser({
//     userName: 'Khurram',
//     firstName : 'Khurram',
//     lastName: 'Shahzad',
//     email: 'itsmsks@gmail.com'
// });
// const users = userRepository.getUsers();
// console.log(users);
const repo = userRepository();
const service = userService(repo);
const controller =  userController(service)
app.get('/users', controller.getUsers);
app.get('/usersAsync', controller.getUsersAsync);

app.listen(enviroment.PORT, () =>
    console.log(`listening on ${enviroment.URL}:${enviroment.PORT}`)
  );