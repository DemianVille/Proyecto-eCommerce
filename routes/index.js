require("dotenv").config();
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.use("/users", userRoutes);

router.use(
  "/admins",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  isAdmin,
  adminRoutes
);

router.use("/categories", categoryRoutes);

router.use(
  "/orders",
  checkJwt({ secret: process.env.SECRET_WORD, algorithms: ["HS256"] }),
  orderRoutes
);

router.use("/products", productRoutes);

router.use("/tokens", authRoutes);

module.exports = router;
