const express = require("express");
const router = express.Router();
const controller_item = require("../controllers/item");

router.get("/", controller_item.getItem);
router.get("/:id", controller_item.getItemById);
router.post("/",controller_item.createItem);
router.put("/:id", controller_item.updateItem);
router.delete("/:id", controller_item.deleteItem);

module.exports = router;
