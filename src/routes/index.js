const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {getProducts} = require('../controllers/getProducts')
const login = require('../controllers/login')
const postUser= require('../controllers/createUser')
const {showUsers} = require('../controllers/showUsers')

router.get("/products",getProducts)
router.get("/login", login)
router.post("/login", postUser);
router.get('/allUsers',showUsers)
module.exports = router;