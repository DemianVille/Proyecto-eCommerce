require("dotenv").config();
const { Sequelize } = require("sequelize");

const User = require("./User");
const Category = require("./Category");
const Admin = require("./Admin");
const Product = require("./Product");
const Order = require("./Order");

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

User.initModel(sequelize);
Category.initModel(sequelize);
Admin.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  User,
  Product,
  Admin,
  Category,
  Order,
};
