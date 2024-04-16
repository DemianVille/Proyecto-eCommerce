const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      return res.json(admins);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      return res.send(admin);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
      return res.send(admin);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
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
      return res.json({ message: "Ups! Something went wrong." });
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
      return res.send(`Admin with id ${id} errased`);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = adminController;
