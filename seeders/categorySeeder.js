const { Category } = require("../models");

async function categorySeeder() {
  const categories = [
    { name: "Footwear" },
    { name: "Dancewear" },
    { name: "Men" },
  ];
  await Category.bulkCreate(categories);
  console.log("The seeder of categories has been runned!");
}

module.exports = categorySeeder;
