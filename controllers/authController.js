require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin, User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });
      const user = await User.findOne({ where: { email } });

      if (!(admin && (await bcrypt.compare(password, admin.password)))) {
        if (!(user && (await bcrypt.compare(password, user.password)))) {
          return res.status(404).json({ message: "This user doesn't exist." });
        }
      }

      if (admin) {
        const token = jwt.sign(
          { sub: admin.id, role: "Admin" },
          process.env.SECRET_WORD
        );
        return res.status(200).json({ token });
      } else if (user) {
        const token = jwt.sign(
          { sub: user.id, role: "User" },
          process.env.SECRET_WORD
        );
        return res.status(200).json({ token });
      }
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = authController;
