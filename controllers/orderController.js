const { Order, User, Product } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByPk(id);
      res.send(order);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  /*   store: async (req, res) => {
    try {
      const { product, status, userId } = req.body;
      const user = User.findByPk(userId);
      const address = user.address;
      const order = await Order.create({
        products,
        address,
        status,
      });
      res.send(order);
    } catch (err) {
      console.error(err);
    }
  }, */
  store: async (req, res) => {
    try {
      const order = req.body;

      if (!order.address) return res.json({ message: "Ups! Algo salió mal." });
      if (!order.userId) return res.json({ message: "Ups! Algo salió mal." });

      for (const product of order.products) {
        /* TODO: obtener el userId de forma segura */
        const productInDb = await Product.findByPk(product.id);
        if (productInDb.stock < product.qty) {
          return res.json({
            message: "Unsuficient stock.",
            product: product.id,
            stock: productInDb.stock,
          });
        }
        product.price = productInDb.price;
      }
      order.status = "pending";

      for (const product of order.products) {
        const productInDb = await Product.findByPk(product.id);
        productInDb.stock -= product.qty;
        await productInDb.save();
      }
      await Order.create(order);
      return res.send("Orden recibida");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { products, address, status } = req.body;
      const order = await Order.findByPk(id);

      if (products) {
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
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
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
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
};

module.exports = orderController;
