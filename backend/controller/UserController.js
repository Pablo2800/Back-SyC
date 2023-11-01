const {users} = require('../config/db')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = 'pablitoki'

const register = async (req, res) => {
  try {
    const { email, password, phoneNumber, name, birthDate } = req.body;
    err = ""

    if (!name) {
      err += `[name can't be empty] `
    }
    if (!email) {
      err += `[email can't be empty] `
    }
    if (!password) {
      err += `[password can't be empty] `
    }
    if (!phoneNumber ) {
      err += `[phoneNumber can't be empty] `
    }
    if (!birthDate) {
      err += `[birthDate can't be empty] `
    }
    if (err != ""){
      res.status(400).send(err)
    }

    let passCript
    if (password.length >= 6) {
      passCript = bcrypt.hashSync(password, 10)
    } else {
      passCript = password
    }

    const user = await users.create({
      name,
      email,
      password: passCript,
      phoneNumber,
      birthDate
    })

    if (user) {
      let token = jwt.sign({ user: user}, secretKey, {
        expiresIn: '7d'
      })
      res.json({
        user: user,
        token: token,
      })
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}
  module.exports = {
    register,
  };