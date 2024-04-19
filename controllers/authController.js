require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin, User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });
      const user = await User.findOne({ where: { email } });

      if (!admin || admin.password !== password) {
        if (!user || user.password !== password) {
          return res.json({ message: process.env.SECRET_WORD });
        }
      }

      if (admin) {
        const token = jwt.sign(
          { sub: admin.id, role: "Admin" },
          process.env.SECRET_WORD
        );
        console.log(req.auth);
        return res.status(200).json({ token });
      } else if (user) {
        const token = jwt.sign(
          { sub: user.id, role: "User" },
          process.env.SECRET_WORD
        );
        console.log(req.auth);
        return res.status(200).json({ token });
      }
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = authController;
