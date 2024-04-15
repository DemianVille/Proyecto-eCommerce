const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
      res.send(order);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  store: async (req, res) => {
    try {
      const { product, address, status } = req.body;
      const order = await Order.create({
        product,
        address,
        status,
      });
      res.send(order);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { product, address, status } = req.body;
      const order = await Order.findByPk(id);

      if (product) {
        order.product = product;
      }
      if (address) {
        order.address = address;
      }
      if (status) {
        order.status = status;
      }

      await order.save();

      return res.json("Order modified");
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Order.destroy({
        where: {
          id,
        },
      });
      res.send(`Order with id ${id} errased`);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
};

module.exports = orderController;
