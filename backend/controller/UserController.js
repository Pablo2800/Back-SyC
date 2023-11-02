const { users } = require("../config/db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "pablitoki";

const register = async (req, res) => {
  try {
    const { email, password, lastName, name, birthDate, confirmPassword } =
      req.body;
    err = "";

    if (!name) {
      err += `[name can't be empty] `;
    }
    if (!email) {
      err += `[email can't be empty] `;
    }
    if (!password) {
      err += `[password can't be empty] `;
    }
    if (!lastName) {
      err += `[lastName can't be empty] `;
    }
    if (!birthDate) {
      err += `[birthDate can't be empty] `;
    }
    if (!confirmPassword) {
      err += `[confirmPassword can't be empty] `;
    }
    if (err != "") {
      res.status(400).send(err);
    }

    let passCript;
    if (password.length >= 6) {
      passCript = bcrypt.hashSync(password, 10);
    } else {
      passCript = password;
    }

    const user = await users.create({
      name,
      email,
      password: passCript,
      lastName,
      birthDate,
      confirmPassword,
    });

    if (user) {
      let token = jwt.sign({ user: user }, secretKey, {
        expiresIn: "7d",
      });
      res.json({
        user: user,
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = {
  register,
};
