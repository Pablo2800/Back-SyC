const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  getProductByName,
} = require("../controller/productControllers");

const { login } = require("../controller/LoginController");
const { register } = require("../controller/UserController");

router.get("/products/name", getProductByName);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

router.get("/login", login);

router.post("/user/create", register);

module.exports = router;
