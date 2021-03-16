module.exports = (userService) => {
    const userController = {};
    (userController.getUsers = (httpRequest, httpResponse, next) => {
        userService.getUsers().then((result)=>{
            httpResponse.json(result);
        });
    }),
      (userController.getByEmail = (httpRequest, httpResponse, next) => {
          const email =  httpRequest.email;
        return userService.getByEmail(email).then((result)=>{
            httpResponse.json(result);
        });
      }),
      (userController.saveUser = (httpRequest, httpResponse, next) => {
        userService.saveUser(user);
      }),
      (userController.getUsersAsync = async (httpRequest, httpResponse, next) => {
          const users =  await userService.getUsersAsync();
          return httpResponse.json(users);
      }),
      (userController.getByEmailAsync = async (httpRequest, httpResponse, next) => {
        return userService.getByEmailAsync(email);
      }),
      (userController.saveUserAsync = async (httpRequest, httpResponse, next) => {
        await userService.saveUserAsync(user);
      });
      return userController;
  };
  