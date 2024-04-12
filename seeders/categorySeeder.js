const { Category } = require("../models");

async function categorySeeder() {
  const categories = ["footwear", "leotards", "bottoms", "tights"];
  await Category.bulkCreate(categories);
  console.log("The seeder of categories has been runned!");
}

module.exports = categorySeeder;
