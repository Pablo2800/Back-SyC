const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById,
    getProductByName
    } = require('../controller/productControllers')

const { token } = require('../controller/auth')
const { login } = require('../controller/LoginController')
const { register } = require('../controller/UserController')



router.get('/products/name', getProductByName)
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)

router.post('/login',token, login)

router.post('/user/create', token, register)

module.exports = router