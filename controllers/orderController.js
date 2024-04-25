const { Order, Product } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: "user" });
      return res.json(orders);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      const order = await Order.findByPk(id, { include: "user" });
      if (authRole === "Admin" || order.userId === authId) {
        return res.send(order);
      } else {
        console.error("err");
        return res.json({ message: "You can't see this order" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const order = req.body;

      if (!order.address)
        return res.json({ message: "Ups! Something went wrong." });
      if (!order.userId)
        return res.json({ message: "Ups! Something went wrong." });

      for (const product of order.products) {
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
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id === authId) {
        const order = await Order.findByPk(id);

        if (status) {
          order.status = status;
        }

        await order.save();

        return res.json("Order modified");
      } else {
        console.error(err);
        return res.json({ message: "You can't update this order" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.id;
      const authRole = req.auth.role;
      const order = await Order.findByPk(id);
      if (authRole === "Admin" || order.userId === authId) {
        await Order.destroy({
          where: {
            id,
          },
        });
        return res.send(`Order with id ${id} errased`);
      } else {
        console.error(err);
        return res.json({ message: "You can't delete this order" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = orderController;
