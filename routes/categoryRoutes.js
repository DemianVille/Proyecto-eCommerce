const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

const isAdmin = require("../middlewares/isAdmin");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.store
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.destroy
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  categoryController.update
);

module.exports = router;
