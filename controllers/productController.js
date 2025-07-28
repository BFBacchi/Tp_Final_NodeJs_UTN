const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error("Error al obtener productos:", err.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getProductById = async (req, res) => {
  const { product_id } = req.params;
  try {
    const product = await productService.getProductById(product_id);
    res.json(product);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    console.error("Error al obtener producto:", err.message);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
