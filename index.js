'use strict';

const express = require('express');
const enviroment = require('./environment');

//part of Current Initializaition.
// const userController = require('./userController');
// const userRepository = require('./userRepository');
// const userService = require('./userService');

//DI Intialization
const DependencyContainer = require('./dependencyContainer');

const  diContainer = new DependencyContainer();
diContainer.factory('userRepository',require('./userRepository'));
diContainer.factory('userService',require('./userService'));
diContainer.factory('userController',require('./userController'));
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

// //Current Initialization
// const repo = userRepository();
// const service = userService(repo);
// const controller =  userController(service)


const controller = diContainer.get('userController');

app.get('/users', controller.getUsers);
app.get('/usersAsync', controller.getUsersAsync);

app.listen(enviroment.PORT, () =>
    console.log(`listening on ${enviroment.URL}:${enviroment.PORT}`)
  );