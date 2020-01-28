const UserModel = require("../models/user");

module.exports = {
  async getUser(req, res) {
    try {
      const users = await UserModel.getUser();
      console.log("Users:", users);
      res.status(200).json({
        message: "Users data found successfully!",
        users: users
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },

  async getUserById(req, res) {
    const id = req.params.id;
    console.log("id:", id);

    try {
      const user = await UserModel.getUserById(id);
      res.status(200).json({
        message: "User data found successfully!",
        user: user
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },

  async createUser(req, res) {
    let newUser = req.body;
    console.log("User:", newUser);
    try {
      const user = await UserModel.createUser(newUser);
      console.log("user:", user);

      res.status(200).json({ message: "User has created successfully!" });
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong | internal server error!",
        error: err
      });
    }
  },

  async updateUser(req, res) {
    const id = req.params.id;
    console.log("id:", id);

    try {
      const user = await UserModel.updateUser(id,req.body);
      res.status(200).json({
        message: "User data updated successfully!",
        user: user
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },
  async deleteUser(req, res, next) {
    const id = req.params.id;
    try {
      const user = await UserModel.deleteUser(id);
      res.status(200).json({
        message: "Users has deleted successfully!",
        user: user
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  }
};
