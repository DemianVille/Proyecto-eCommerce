const { User, Order, Admin } = require("../models");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.findAll({ include: Order });
      return res.status(200).json(users);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id == authId) {
        const user = await User.findByPk(id, { include: Order });
        return res.status(200).json(user);
      } else {
        console.error(err);
        return res.status(400).json({ message: "You can't see this user" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, address, phone, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });
      if (admin) {
        return res.status(401).json({ message: "This email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        email,
        address,
        phone,
        password: hashedPassword,
      });
      return res.status(200).json({ message: "User created successfully." });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        firstname,
        lastname,
        email,
        address,
        phone,
        orderList,
        password,
      } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id == authId) {
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
        if (address) {
          user.address = address;
        }
        if (phone) {
          user.phone = phone;
        }
        if (orderList) {
          user.orderList = orderList;
        }
        if (password) {
          user.password = hashedPassword;
        }

        await user.save();

        return res.status(200).json({ message: "User modified" });
      } else {
        console.error(err);
        return res.status(401).json({ message: "You can't update this user" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const authId = req.auth.sub;
      const authRole = req.auth.role;
      if (authRole === "Admin" || id == authId) {
        if (id !== 1) {
          await User.destroy({
            where: {
              id,
            },
          });
        }
        return res.status(200).json({ message: `User with id ${id} erased` });
      } else {
        console.error(err);
        return res.status(401).json({ message: "You can't erase this user" });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = userController;
