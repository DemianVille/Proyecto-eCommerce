const { Category } = require("../models");

async function categorySeeder() {
  const categories = [
    { name: "footwear" },
    { name: "leotards" },
    { name: "bottoms" },
    { name: "tights" },
  ];
  await Category.bulkCreate(categories);
  console.log("The seeder of categories has been runned!");
}

module.exports = categorySeeder;
