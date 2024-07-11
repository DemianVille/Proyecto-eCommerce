require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const categorySeeder = require("./categorySeeder");
const productSeeder = require("./productSeeder");

async function seeders() {
  await userSeeder();
  await adminSeeder();
  await categorySeeder();
  await productSeeder();
}

seeders();

console.log("The seeders has been runned!");
