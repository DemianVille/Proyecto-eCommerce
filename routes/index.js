const express = require("express");
const router = express.Router();
const userRoutes = require("./userRutes");
const adminRoutes = require("./adminRutes");

router.use("/users", userRoutes);
router.use("/admins", adminRoutes);

module.exports = router;
