const express = require("express");
const router = express.Router();
const userRoutes = require("./userRutes");

router.use("/users", userRoutes);

module.exports = router;
