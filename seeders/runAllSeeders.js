require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");

userSeeder();
adminSeeder();

console.log("The seeders has been runned!");
