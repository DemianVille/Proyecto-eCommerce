const { User } = require("../models");

const userController = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(user);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const user = await User.create({ firstname, lastname, email, password });
    res.send(user);
  },
  update: async (req, res) => {
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

    return res.json("Usuario modificado");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.send(`Usuario con id ${id} eliminado`);
  },
};

module.exports = userController;
