require ('dotenv').config()
const { Sequelize } = require('sequelize')
const {USER, PASS, HOST } = process.env
const url= `postgres://${USER}:${PASS}@${HOST}/pfsyc`
const Product = require('../models/products')

const dataBase = new Sequelize(
    url, {
        logging: false,
        native: false,
    })

const connectDB = async() => {
    try {
        await dataBase.authenticate()
        console.log('Connection has been established')
    } catch (error) {
        console.error('Unable to connect to dataBase')
    }
}
Product(dataBase)

const { products } = dataBase.models

module.exports = {
    connectDB,
    products,
    conn: dataBase
}