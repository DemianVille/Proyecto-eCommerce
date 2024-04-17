const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authController = {
  getToken: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user === null) return res.json({ message: "Invalid credentials" });

      // const token = jwt.sign({ sub: "user123" }, "UnStringMuySecreto");

      return req.json("OK");
    } catch (err) {
      console.error(err);
      return res.json({ message: "Ups! Something went wrong." });
    }
  },
};

module.exports = authController;
