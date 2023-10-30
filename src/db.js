// require("dotenv").config();
// const Sequelize = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST,BDD } = process.env;
// const user = require("./models/usuario.js");
// const products = require("./models/products.js");
// const merch = require("./models/Merch.js")
// const frases = require("./models/Frases.js")

// const database = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${BDD}`,
//   { logging: false, native: false }
// );
// user(database);
// products(database);
// merch(database);
// frases(database)

// const { Users,Frases } = database.models;
// Users.belongsToMany(Frases,{through:"frases_users"})
// Frases.belongsToMany(Users,{through:"frases_users"})

// module.exports = {
//   Users,
//   Frases,
//   conn: database,
// };
