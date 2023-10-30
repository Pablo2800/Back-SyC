const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

const { login } = require("../controller/LoginController");
const { postUser } = require("../controller/UserController");

//access. Public
router.get("/products", getAllProducts);

//access. Public
router.get("/products/:id", getProductById);

router.get("/login", login);

router.post("/create", postUser);

module.exports = router;
