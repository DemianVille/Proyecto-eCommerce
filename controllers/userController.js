const { User } = require("../models");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error("Ha ocurrido un error:", error);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.send(user);
    } catch (err) {
      console.error("Ha ocurrido un error:", error);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const user = await User.create({ firstname, lastname, email, password });
      res.send(user);
    } catch (err) {
      console.error("Ha ocurrido un error:", error);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const user = await User.findByPk(id);

      if (firstname) {
        user.firstname = firstname;
      }
      if (lastname) {
        user.lastname = lastname;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = password;
      }

      await user.save();

      return res.json("User modified");
    } catch (err) {
      console.error("An error has ocurred:", error);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({
        where: {
          id,
        },
      });
      res.send(`User with id ${id} errased`);
    } catch (err) {
      console.error("An error has ocurred:", error);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
};

module.exports = userController;
