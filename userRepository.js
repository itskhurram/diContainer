"use strict";
//const mongoose = require("./configureDatabase");
const userSchema = require("./userSchema");

module.exports = {
  getUsers: () => {
    return userSchema.find();
  },
  getByEmail: (email) => {
    return userSchema.findOne({ email: email });
  },

  async getUsersAsync() {
    return await userSchema.find();
  },
  async getByEmailAsync(email) {
    return userSchema.findOne({ email: email });
  },

  //   ,
  //   saveUser(user) {
  //       const schemaUser =  new userSchema(user);
  //       schemaUser.save(schemaUser);
  //   },
  //   getUserbyEmail() {
  //     return userSchema.findOne({ email: email });
  //   },
};
