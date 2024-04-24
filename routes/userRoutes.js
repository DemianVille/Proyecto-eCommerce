const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", userController.store);

router.use(
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] })
);

router.get("/", isAdmin, userController.index);
router.get("/:id", userController.show);
router.delete("/:id", userController.destroy);
router.patch("/:id", userController.update);

module.exports = router;
