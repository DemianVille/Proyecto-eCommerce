const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.get(
  "/",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  userController.index
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  userController.show
);
router.post("/", userController.store);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  userController.destroy
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  userController.update
);

module.exports = router;
