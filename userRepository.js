"use strict";
//const mongoose = require("./configureDatabase");
const userSchema = require("./userSchema");

module.exports = {
  getUsers() {
      return userSchema.find();
  },
  saveUser(user) {
      const schemaUser =  new userSchema(user);
      schemaUser.save(schemaUser);
  },
  getUserbyEmail() {
    return userSchema.findOne({ email: email });
  },
};
