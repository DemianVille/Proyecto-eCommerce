const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      return res.status(200).json(category);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      return res.status(200).json(category);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
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

      return res.status(200).json("Category modified");
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
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
      return res.status(200).json({message: `Category with id ${id} erased`});
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = categoryController;
