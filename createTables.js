require("dotenv").config();
const { sequelize } = require("./models/index");

async function createTables() {
  await sequelize.sync({ force: true });
  console.log("The tables has been created!");
}

createTables();
