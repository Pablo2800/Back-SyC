const {Products} = require('../../config/db')

const getAllProducts = async (req, res) => {
  try {
    const product = await Products.findAll({})

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({error: 'Error al obtener los productos'})
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = await Products.findByPk(req.params.id)

    res.status(200).json(productId)
  } catch (error) {
    res.status(500).json({error: 'Errot al obtener el id de los productos'})
  }
}
module.exports = {
  getAllProducts,
  getProductById
};
