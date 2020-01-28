const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  itemName: {
    type: String,
    default: null
  },
  itemType: {
    type: String,
    default: null
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model("Item", ItemSchema);

class ItemModel {
  //getting all users records
  static async getItem() {
    try {
      const items = await Item.find({}).exec();
      return items;
    } catch (err) {
      return new Error(err);
    }
  }
  // getting user by id
  static async getItemById(id) {
    try {
      const item = await Item.findById({ _id: id }).exec();
      return item;
    } catch (err) {
      return new Error(err);
    }
  }

  // creating new user
  static async createItem(newItem) {
    console.log("New= item inside createUser:", newItem);
    try {
      const item = await Item.create(newItem);
      return item;
    } catch (err) {
      return new Error(err);
    }
  }
  // updating user
  static async updateItem(id, data) {
    try {
      const item = await Item.findByIdAndUpdate(id, data).exec();
      return item;
    } catch (err) {
      return new Error(err);
    }
  }
  // deleteing existing user
  static async deleteItem(id) {
    try {
      const item = await Item.findByIdAndRemove(id).exec();
      return item;
    } catch (err) {
      return new Error(err);
    }
  }
}

module.exports = ItemModel;
