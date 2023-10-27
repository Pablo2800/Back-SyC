const express = require('express');
const server = express();
const cors = require("cors");
const routers = require('./routes/index.js');
const { conn } = require('./db');

// Configurar middlewares
server.use(cors()); // Configurar CORS primero
server.use(express.json()); // Analizar solicitudes JSON

// Configurar rutas
server.use('/', routers);

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
});

server.get('/', (req, res) => {
  res.send('Backend con NodeJs');
});

module.exports = server;
