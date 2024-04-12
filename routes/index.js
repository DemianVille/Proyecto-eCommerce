const express = require("express");
const router = express.Router();
const userRoutes = require("./userRutes");
const adminRoutes = require("./adminRutes");
const categoryRoutes = require("./categoryRutes");
const orderRoutes = require("./orderRutes");
const productRoutes = require("./productRutes");

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/categories", categoryRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);

module.exports = router;
