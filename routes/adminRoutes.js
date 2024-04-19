const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

const isAdmin = require("../middlewares/isAdmin");

router.get("/", adminController.index);
router.get("/:id", adminController.show);
router.post("/", adminController.store);
router.delete("/:id", adminController.destroy);
router.patch("/:id", adminController.update);

module.exports = router;
