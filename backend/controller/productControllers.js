const { products } = require('../config/db')
const { Op } = require('sequelize')


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

const getProductByName = async (req, res) => {
    try {
        const { name } = req.query

        const productName = await products.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        res.status(200).json(productName)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el nombre'})
    }
}
module.exports = {
    getAllProducts,
    getProductById,
    getProductByName
}