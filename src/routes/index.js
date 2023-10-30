const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const {getAllProducts,
    getProductById
    } = require('../controllers/getProducts')

// const login = require('../controllers/login')
// const postUser= require('../controllers/createUser')
// const {showUsers} = require('../controllers/showUsers')

router.get("/products",getAllProducts)
router.get('/products/:id', getProductById)
// router.get("/login", login)
// router.post("/login", postUser);
// router.get('/allUsers',showUsers)
module.exports = router;