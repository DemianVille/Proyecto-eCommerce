const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.json(admins);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      res.send(admin);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const admin = await Admin.create({
        firstname,
        lastname,
        email,
        password,
      });
      res.send(admin);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const admin = await Admin.findByPk(id);

      if (firstname) {
        admin.firstname = firstname;
      }
      if (lastname) {
        admin.lastname = lastname;
      }
      if (email) {
        admin.email = email;
      }
      if (password) {
        admin.password = password;
      }

      await admin.save();

      return res.json("Admin modified");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Admin.destroy({
        where: {
          id,
        },
      });
      res.send(`Admin with id ${id} errased`);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Algo salió mal." });
    }
  },
};

module.exports = adminController;
