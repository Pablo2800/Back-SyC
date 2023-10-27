const Products = require('../db')
const productsArray = [
    {
      id: 1,
      name: "Café Espresso",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café espresso",
      price: "$3.50",
      descripcion: "Hecho con granos de café de alta calidad.",
    },
    {
      id: 2,
      name: "Café Latte",
      imageSrc: "src/assets/caramel.png",
      imageAlt: "Taza de café latte",
      price: "$4.00",
      descripcion: "Mezcla suave de café y leche con un toque de caramelo.",
    },
    {
      id: 3,
      name: "Café Americano",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café americano",
      price: "$3.00",
      descripcion: "Café negro fuerte y puro para los amantes del café.",
    },
    {
      id: 4,
      name: "Café Mocha",
      imageSrc: "src/assets/caramel.png",
      imageAlt: "Taza de café mocha",
      price: "$4.50",
      descripcion:
        "Mezcla de café con cacao y crema para un sabor chocolatoso.",
    },
    {
      id: 5,
      name: "Café Cappuccino",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 6,
      name: "Café Cappuccino",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 7,
      name: "Café Cappuccino",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 8,
      name: "Café Cappuccino",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 9,
      name: "Café Cappuccino",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
  ];
const getProducts = async () => {
  try {
    const result = await Products.bulkCreate(productsArray);
    console.log(`${result.length} productos insertados correctamente.`);
    return result;
  } catch (error) {
    console.error('Error al insertar productos:', error);
    throw error;
  }
};
module.exports = {
  getProducts,
};
