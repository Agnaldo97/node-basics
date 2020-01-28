const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    default: null
  },

  lastName: {
    type: String,
    default: null
  },
  userName: {
    type: String,
    default: null
  },
  password: {
    type: String,
    required: true,
    default: null
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

class UserModel {
  //getting all users records
  static async getUser() {
    try {
      const users = await User.find({}).exec();
      return users;
    } catch (err) {
      return new Error(err);
    }
  }
  // getting user by id
  static async getUserById(id) {
    try {
      const user = await User.findById({ _id: id }).exec();
      return user;
    } catch (err) {
      return new Error(err);
    }
  }

  // creating new user
  static async createUser(newUser) {
    console.log("Newuser inside createUser:", newUser);
    try {
      const user = await User.create(newUser);
      return user;
    } catch (err) {
      return new Error(err);
    }
  }
  // updating user
  static async updateUser(id,data) {
    try {
      const user = await User.findByIdAndUpdate(id,data).exec();
      return user;
    } catch (err) {
      return new Error(err);
    }
  }
  // deleteing existing user
  static async deleteUser(id) {
    try {
      const user = await User.findByIdAndRemove(id).exec();
      return user;
    } catch (err) {
      return new Error(err);
    }
  }
}

module.exports = UserModel;
