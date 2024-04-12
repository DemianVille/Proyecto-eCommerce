const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      res.send(category);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const category = await Category.create({
        firstname,
        lastname,
        email,
        password,
      });
      res.send(category);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const category = await Category.findByPk(id);

      if (firstname) {
        category.firstname = firstname;
      }
      if (lastname) {
        category.lastname = lastname;
      }
      if (email) {
        category.email = email;
      }
      if (password) {
        category.password = password;
      }

      await category.save();

      return res.json("Category modified");
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Category.destroy({
        where: {
          id,
        },
      });
      res.send(`Category with id ${id} errased`);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
};

module.exports = categoryController;
