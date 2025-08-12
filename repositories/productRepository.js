const Product = require('../models/Product');


/**
 * Obtiene todos los productos de la base de datos
 * @returns {Promise<Array>} Lista de productos
 */
const getProducts = async () => {
  return await Product.find();
};


/**
 * Obtiene un producto por su ID
 * @param {number|string} id - ID del producto
 * @returns {Promise<Object|null>} Producto o null si no existe
 */
const getProductById = async (id) => {
  return await Product.findOne({ id });
};


/**
 * Crea un nuevo producto en la base de datos
 * @param {Object} data - Datos del producto
 * @returns {Promise<Object>} Producto creado
 */
const createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};


/**
 * Actualiza un producto existente en la base de datos
 * @param {number|string} id - ID del producto
 * @param {Object} data - Datos actualizados
 * @returns {Promise<Object|null>} Producto actualizado o null si no existe
 */
const updateProduct = async (id, data) => {
  return await Product.findOneAndUpdate({ id }, data, { new: true });
};


/**
 * Elimina un producto por su ID de la base de datos
 * @param {number|string} id - ID del producto
 * @returns {Promise<Object|null>} Producto eliminado o null si no existe
 */
const deleteProduct = async (id) => {
  return await Product.findOneAndDelete({ id });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
