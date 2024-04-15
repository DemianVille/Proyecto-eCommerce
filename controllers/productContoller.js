const { Product } = require("../models");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      res.send(product);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
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
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
};

module.exports = productController;
