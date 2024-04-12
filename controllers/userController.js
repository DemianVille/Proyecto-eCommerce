const { User } = require("../models");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.send(user);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const user = await User.create({ firstname, lastname, email, password });
      res.send(user);
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
};

module.exports = userController;
