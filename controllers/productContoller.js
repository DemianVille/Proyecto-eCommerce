const { Product } = require("../models");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      res.send(product);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  store: async (req, res) => {
    try {
      const {
        name,
        description,
        color,
        photo,
        price,
        stock,
        category,
        feature,
      } = req.body;
      const product = await Product.create({
        name,
        description,
        color,
        photo,
        price,
        stock,
        category,
        feature,
      });
      res.send(product);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        color,
        photo,
        price,
        stock,
        category,
        feature,
      } = req.body;
      const product = await Product.findByPk(id);

      if (name) {
        product.name = name;
      }
      if (description) {
        product.description = description;
      }
      if (color) {
        product.color = color;
      }
      if (photo) {
        product.photo = photo;
      }
      if (price) {
        product.price = price;
      }
      if (stock) {
        product.stock = stock;
      }
      if (category) {
        product.category = category;
      }
      if (feature) {
        product.feature = feature;
      }

      await product.save();

      return res.json("Product modified");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Product.destroy({
        where: {
          id,
        },
      });
      res.send(`Product with id ${id} errased`);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
};

module.exports = productController;
