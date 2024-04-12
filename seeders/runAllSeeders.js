require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const categorySeeder = require("./categorySeeder");

userSeeder();
adminSeeder();
categorySeeder();

console.log("The seeders has been runned!");
