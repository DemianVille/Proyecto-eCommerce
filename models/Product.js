const { Model, DataTypes, STRING } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: true,
          /* va en false */
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        price: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: true,
          /* va en false */
        },
        feature: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          /* va en false */
        },
      },
      {
        sequelize,
        modelName: "product",
      }
    );
    return Product;
  }
}

module.exports = Product;
