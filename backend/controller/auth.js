const jwt = require("jsonwebtoken");
const secretKey = 'pablitoki'
const {users} = require('../config/db')

const token = async (req, res, next) => {
    try {
      let token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ msg: "Acceso no autorizado" });
      }
      const decoded = jwt.verify(token, secretKey);

      req.userId = decoded.user.id;
  
      const user = await users.findByPk(req.userId,{
        attributes:["name","email"]
      });
      if (!user) return res.status(404).json({ msg: "No existe el usuario" });
  
      req.user = user;  
      next();
  
    } catch (error) {
      return res.status(404).json({ msg: "No autorizado" });
    }
  };

  module.exports  = {
    token
  }