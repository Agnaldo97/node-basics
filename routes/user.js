const express = require("express");
const router = express.Router();
const controller_user = require("../controllers/user");

router.get("/", controller_user.getUser);
router.get("/:id", controller_user.getUserById);
router.post("/", controller_user.createUser);
router.put("/:id", controller_user.updateUser);
router.delete("/:id", controller_user.deleteUser);

module.exports = router;
