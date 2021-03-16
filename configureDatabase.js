'use strict';
const environment = require('./environment');
const mongoose = require('mongoose');

mongoose
  .connect(environment.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection
  .once('open', () => {
    console.log('connected to MongoDB database!');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
