const express = require("express");
const { expressjwt: checkJwt } = require("express-jwt");
const router = express.Router();
const adminController = require("../controllers/adminController");

const isAdmin = require("../middlewares/isAdmin");

router.get("/", adminController.index);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  adminController.show
);
router.post("/", adminController.store);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  adminController.destroy
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  adminController.update
);

module.exports = router;
