const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post("/", orderController.store);
router.delete("/:id", orderController.destroy);
router.patch("/:id", orderController.update);

module.exports = router;
