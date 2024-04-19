const express = require("express");
const { expressjwt: checkJwt } = require("express-jwt");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  adminController.show
);
router.post("/", adminController.store);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  adminController.destroy
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  adminController.update
);

module.exports = router;
