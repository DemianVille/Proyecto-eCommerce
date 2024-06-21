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
          type: DataTypes.STRING(500),
          allowNull: false,
          unique: true,
        },
        colors: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        stock: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        featured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
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
