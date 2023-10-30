const { products } = require('../config/db')


const getAllProducts = async (req, res) => {
    try {
        const product = await products.findAll({})

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: "Error al obtener todos los productos"})
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = await products.findByPk(req.params.id)

        res.status(200).json(productId)
    } catch (error) {
        res.status(500).json({error: "Error al obtener todos los productos por id"})
    }
}

module.exports = {
    getAllProducts,
    getProductById
}