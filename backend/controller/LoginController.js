const {users} = require('../config/db')

const login = async (req, res) => {
    try {
      const { email, password } = req.query;
    
      if (!email || !password) {
        return res.status(400).json({ message: "Faltan datos" });
      }

      const user = await users.findOne({ where: { email } });
      
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jwt.sign({ user: user }, secretKey, {
            expiresIn: "7d",
          });
          res.json({
            user: user,
            token: token,
          });
        }
        if (!bcrypt.compareSync(password, user.password))
          res.status(401).json({ msg: "Contraseña incorrecta" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    login
  };