const ItemModel = require("../models/item");

module.exports = {
  async getItem(req, res) {
    try {
      const items = await ItemModel.getItem();
      res.status(200).json({
        message: "items data found successfully!",
        items: items
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },

  async getItemById(req, res) {
    const id = req.params.id;
    console.log("id:", id);

    try {
      const item = await ItemModel.getItemById(id);
      res.status(200).json({
        message: "item data found successfully!",
        item: item
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },

  async createItem(req, res) {
    let newItem = req.body;
    console.log("item:", newItem);
    try {
      const item = await ItemModel.createItem(newItem);
      res
        .status(200)
        .json({ message: "item has created successfully!", item: item });
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong | internal server error!",
        error: err
      });
    }
  },

  async updateItem(req, res) {
    const id = req.params.id;
    console.log("id:", id);

    try {
      const item = await ItemModel.updateItem(id, req.body);
      res.status(200).json({
        message: "User data updated successfully!",
        item: item
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  },
  async deleteItem(req, res) {
    const id = req.params.id;
    try {
      const item = await ItemModel.deleteItem(id);
      res.status(200).json({
        message: "item has deleted successfully!",
        item: item
      });
    } catch (err) {
      res.status(500).json({
        message: "something went wrong | internal server error!",
        error: err
      });
    }
  }
};
