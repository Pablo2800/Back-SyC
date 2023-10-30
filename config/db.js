require ('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env
const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/syc`
const Product = require('../src/models/products')

const dataBase = new Sequelize(
    url, {
        logging: false,
        native: false
    }
)

const connectDB = async () => {
    try {
        await dataBase.authenticate()
        console.log('Connection has ben established')
    } catch (error) {
        console.error('Unable to connect to DB')
    }
}

Product(dataBase)

const { Products } = dataBase.models

module.exports = {
    connectDB,
    Products,
    conn: dataBase
}