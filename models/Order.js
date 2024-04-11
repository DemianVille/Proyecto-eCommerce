const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequalize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        products: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          values: ["pending", "rejected", "processing", "shipped", "delivered"],
          allowNull: false,
        },
      },
      {
        sequalize,
        modelName: "order",
      }
    );
  }
}

module.exports = Order;
