const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.json(admins);
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      res.send(admin);
    } catch (error) {
      console.error("An error has ocurred:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
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
    } catch (error) {
      console.error("An error has ocurred:", error);
    }
  },
};

module.exports = adminController;
