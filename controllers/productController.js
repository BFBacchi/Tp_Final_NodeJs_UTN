const productService = require('../services/productService');

/**
 * Clase que representa el controlador de productos
 */
class ProductController {
  /**
   * Controlador para obtener todos los productos
   * @param {Object} req - Request de Express
   * @param {Object} res - Response de Express
   */
  async getProducts(req, res) {
    const products = await productService.getProducts();
    res.json(products);
  }

  /**
   * Controlador para obtener un producto por ID
   * @param {Object} req - Request de Express
   * @param {Object} res - Response de Express
   */
  async getProductById(req, res) {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Producto no encontrado' });
    res.json(product);
  }

  /**
   * Controlador para crear un nuevo producto
   * @param {Object} req - Request de Express
   * @param {Object} res - Response de Express
   */
  async createProduct(req, res) {
    const result = await productService.createProduct(req.body);
    if (result.error) return res.status(400).json({ msg: result.error });
    res.status(201).json(result);
  }

  /**
   * Controlador para actualizar un producto existente
   * @param {Object} req - Request de Express
   * @param {Object} res - Response de Express
   */
  async updateProduct(req, res) {
    const result = await productService.updateProduct(req.params.id, req.body);
    if (!result) return res.status(404).json({ msg: 'Producto no encontrado' });
    if (result.error) return res.status(400).json({ msg: result.error });
    res.json(result);
  }

  /**
   * Controlador para eliminar un producto por ID
   * @param {Object} req - Request de Express
   * @param {Object} res - Response de Express
   */
  async deleteProduct(req, res) {
    const result = await productService.deleteProduct(req.params.id);
    if (!result) return res.status(404).json({ msg: 'Producto no encontrado' });
    res.json({ msg: 'Producto eliminado' });
  }
}

module.exports = new ProductController();
