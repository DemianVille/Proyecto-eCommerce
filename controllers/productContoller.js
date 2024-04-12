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
      const { firstname, lastname, email, password } = req.body;
      const product = await Product.create({
        firstname,
        lastname,
        email,
        password,
      });
      res.send(product);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const product = await Product.findByPk(id);

      if (firstname) {
        product.firstname = firstname;
      }
      if (lastname) {
        product.lastname = lastname;
      }
      if (email) {
        product.email = email;
      }
      if (password) {
        product.password = password;
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
