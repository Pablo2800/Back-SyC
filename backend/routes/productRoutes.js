const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById,
    getProductByName
    } = require('../controller/productControllers')

const { login } = require('../controller/LoginController')
const { postUser } = require('../controller/UserController')



router.get('/products/name', getProductByName)
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)

router.get('/login', login)

router.post('/create' , postUser)

module.exports = router