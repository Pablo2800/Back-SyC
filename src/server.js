require('dotenv').config()
const express = require('express');
const { connectDB } = require('../config/db')
const routers = require('./routes/index.js');
const server = express();
const cors = require("cors");

// Configurar middlewares
server.use(cors()); // Configurar CORS primero
server.use(express.json()); // Analizar solicitudes JSON

// Configurar rutas
server.use('/', routers);


const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`)
})

connectDB()
//!---------------------------------------------------------

// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001');
//   });
// });

// server.get('/', (req, res) => {
//   res.send('Backend con NodeJs');
// });

// module.exports = server;
