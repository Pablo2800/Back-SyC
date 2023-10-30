const {users} = require('../config/db')


const postUser = async (req, res) => {
    const { email, password, phoneNumber, name, birthDate, confirmPassword } = req.body;
  
    if (!email || !password || !phoneNumber || !name || !birthDate) {
      return res.status(400).json({ message: "Faltan datos" });
    }
  
    if (confirmPassword !== password) {
      return res.status(400).json({ message: "La contraseña de confirmación debe ser igual a la contraseña" });
    }
  
    try {
      const [user, created] = await users.findOrCreate({
        where: { email },
        defaults: { password, phoneNumber, name, birthDate },
      });
  
      if (created) {
        return res.status(201).json({ message: "Usuario creado con éxito", user });
      } else {
        return res.status(409).json({ message: "El usuario ya existe" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    postUser
  };