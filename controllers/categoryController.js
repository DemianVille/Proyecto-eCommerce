const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      res.send(category);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      res.send(category);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findByPk(id);

      if (name) {
        category.name = name;
      }

      await category.save();

      return res.json("Category modified");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = categoryController;
