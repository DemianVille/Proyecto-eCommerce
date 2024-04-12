require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const categorySeeder = require("./categorySeeder");
const productSeeder = require("./productSeeder");

userSeeder();
adminSeeder();
categorySeeder();
productSeeder();

console.log("The seeders has been runned!");
