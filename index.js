'use strict';

const express = require('express');
const userRepository = require('./userRepository');
const enviroment = require('./environment');
const app = express();
app.use(express.json());

// userRepository.saveUser({
//     userName: 'Khurram',
//     firstName : 'Khurram',
//     lastName: 'Shahzad',
//     email: 'itsmsks@gmail.com'
// });
const users = userRepository.getUsers();
console.log(users);
app.listen(enviroment.PORT, () =>
    console.log(`listening on ${enviroment.URL}:${enviroment.PORT}`)
  );