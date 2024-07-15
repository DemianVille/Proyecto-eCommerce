require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const categorySeeder = require("./categorySeeder");
const productSeeder = require("./productSeeder");
const orderSeeder = require("./orderSeeders");

async function seeders() {
  await userSeeder();
  await adminSeeder();
  await categorySeeder();
  await productSeeder();
  await orderSeeder();
}

seeders();

console.log("The seeders has been runned!");
