const express = require("express");
const router = express.Router();
const userRoutes = require("./userRutes");
const articleRoutes = require("./articleRoutes");

router.use("/users", userRoutes);
router.use("/articles", articleRoutes);

module.exports = router;
