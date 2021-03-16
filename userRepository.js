"use strict";

const userSchema = require("./userSchema");

module.exports = () => {
    const userRepository = {};
  userRepository.getUsers =() => {
    return userSchema.find();
  },
  userRepository.getByEmail = (email) => {
    return userSchema.findOne({ email: email });
  },
  userRepository.saveUser = (user)=> {
    const schemaUser = new userSchema(user);
    schemaUser.save(schemaUser);
  },
  userRepository.getUsersAsync = async() =>{
    return await userSchema.find();
  },
  userRepository.getByEmailAsync = async (email) => {
    return userSchema.findOne({ email: email });
  },
  userRepository.saveUserAsync =  async (user) => {
    const schemaUser = new userSchema(user);
    await schemaUser.save(schemaUser);
  }
  return userRepository;
};
