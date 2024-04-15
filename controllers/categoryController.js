const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      res.send(category);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
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
      return res.json({ message: "Ups! Algo salió mal." });
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
      return res.json({ message: "Ups! Algo salió mal." });
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
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
};

module.exports = categoryController;
