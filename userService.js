module.exports = (userRepository) => {
  const userService = {};
  (userService.getUsers = () => {
    return userRepository.getUsers();
  }),
    (userService.getByEmail = (email) => {
      return userRepository.getByEmail(email);
    }),
    (userService.saveUser = (user) => {
        userRepository.saveUser(user);
    }),
    (userService.getUsersAsync = async () => {
      return await userRepository.getUsers();
    }),
    (userService.getByEmailAsync = async (email) => {
      return userRepository.getByEmail(email);
    }),
    (userService.saveUserAsync = async (user) => {
        await userRepository.saveUserAsync();
    });
    return userService;
};
