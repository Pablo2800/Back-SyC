const {users} = require('../config/db')

const login = async (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    try {
      const user = await users.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "Email o contraseña incorrectos" });
      }
  
      if (user.password !== password) {
        return res.status(403).json({ message: "Email o contraseña incorrectos" });
      }
      return res.status(200).json({ access: true });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    login
  };