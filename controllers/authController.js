require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Admin.findOne({ where: { email } });

      if (!user || user.password !== password)
        return res.json({ message: process.env.SECRET_WORD });

      const token = jwt.sign({ sub: user.id }, process.env.SECRET_WORD);

      return res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = authController;
