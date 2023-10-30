const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById
    } = require('../controller/productControllers')



//access. Public
router.get('/products', getAllProducts)

//access. Public
router.get('/products/:id', getProductById)

module.exports = router