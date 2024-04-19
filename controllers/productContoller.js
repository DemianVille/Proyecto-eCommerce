const { Product } = require("../models");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      return res.send(product);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
        featured,
      } = req.body;
      const product = await Product.create({
        name,
        description,
        color,
        photo,
        price,
        stock,
        category,
        featured,
      });
      return res.send(product);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
        featured,
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
      if (featured) {
        product.featured = featured;
      }

      await product.save();

      return res.json("Product modified");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
      return res.send(`Product with id ${id} errased`);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = productController;
