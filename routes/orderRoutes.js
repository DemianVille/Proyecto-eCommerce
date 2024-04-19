const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

const isAdmin = require("../middlewares/isAdmin");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post("/", orderController.store);
router.delete("/:id", orderController.destroy);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  orderController.update
);

module.exports = router;
