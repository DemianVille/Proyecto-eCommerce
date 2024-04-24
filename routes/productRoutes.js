const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const productController = require("../controllers/productContoller");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", productController.index);
router.get("/:id", productController.show);

router.use(
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] })
);

router.post("/", isAdmin, productController.store);
router.delete("/:id", isAdmin, productController.destroy);
router.patch("/:id", isAdmin, productController.update);

module.exports = router;
