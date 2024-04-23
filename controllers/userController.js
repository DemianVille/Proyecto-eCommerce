const { User } = require("../models");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.id;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id === authId) {
        const user = await User.findByPk(id);
        return res.send(user);
      } else {
        console.error(err);
        return res.json({ message: "You can´t delete this user" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      return res.send(user);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const authId = req.auth.id;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id === authId) {
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
          user.password = hashedPassword;
        }

        await user.save();

        return res.json("User modified");
      } else {
        console.error(err);
        return res.json({ message: "You can´t delete this user" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.id;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id === authId) {
        await User.destroy({
          where: {
            id,
          },
        });
        return res.send(`User with id ${id} errased`);
      } else {
        console.error(err);
        return res.json({ message: "You can´t delete this user" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = userController;
