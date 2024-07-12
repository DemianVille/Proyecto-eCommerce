const { Order, Product } = require("../models");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: "user" });
      return res.json(orders);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      const order = await Order.findByPk(id, { include: "user" });
      if (authRole === "Admin" || order.userId == authId) {
        return res.status(200).json(order);
      } else {
        console.error("err");
        return res.status(401).json({ message: "You can't see this order" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const order = req.body;

      if (!order.address)
        return res.status(400).json({ message: "Address required." });

      if (!order.products)
        return res.status(400).json({ message: "Product required." });

      if (req.auth.role === "Admin") {
        if (!order.userId)
          return res.status(400).json({ message: "User ID required." });

        for (const product of order.products) {
          const productInDb = await Product.findByPk(product.id);
          if (productInDb.stock < product.qty) {
            return res.status(400).json({
              message: "Out of stock.",
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
        return res.status(200).json({ message: "Order received." });
      }

      for (const product of order.products) {
        const productInDb = await Product.findByPk(product.id);
        if (productInDb.stock < product.qty) {
          return res.status(400).json({
            message: "Out of stock.",
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
      return res.status(200).json({ message: "Order received." });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id == authId) {
        const order = await Order.findByPk(id);
        console.log(status)
        if (status) {
          order.status = status;
        }

        await order.save();

        return res.status(200).json({ message: "Order modified" });
      } else {
        console.error(err);
        return res.status(400).json({ message: "You can't update this order" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      const order = await Order.findByPk(id);
      if (authRole === "Admin" || order.userId == authId) {
        await Order.destroy({
          where: {
            id,
          },
        });
        return res.status(200).json({ message: `Order with id ${id} erased` });
      } else {
        console.error(err);
        return res.status(401).json({ message: "You can't erase this order" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = orderController;
