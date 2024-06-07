const { Category } = require("../models");

async function categorySeeder() {
  const categories = [
    { name: "Calzado" },
    { name: "Ropa de baile" },
    { name: "Hombres" },
  ];
  await Category.bulkCreate(categories);
  console.log("The seeder of categories has been runned!");
}

module.exports = categorySeeder;
