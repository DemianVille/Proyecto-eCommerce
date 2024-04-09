require("dotenv").config();
const { Sequelize } = require("sequelize");

const User = require("./User");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

module.exports = {
  sequelize,
  User,
};
