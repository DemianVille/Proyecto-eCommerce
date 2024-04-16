const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.json(admins);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      res.send(admin);
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
      res.send(admin);
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, password } = req.body;
      const testerAdmin = await Admin.findByPk(1);
      const admin = await Admin.findByPk(id);
      if (admin !== testerAdmin) {
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
      } else {
        return res.json({ message: "You can't modify this Admin" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const testerAdmin = await Admin.findByPk(1);
      const paramsAdmin = await Admin.findByPk(id);
      if (testerAdmin !== paramsAdmin) {
        await Admin.destroy({
          where: {
            id,
          },
        });
        return res.send(`Admin with id ${id} errased`);
      } else {
        return res.json({ message: "You can't errase this Admin" });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = adminController;
