const productRepository = require('../repositories/productRepository');


/**
 * Valida los datos de un producto
 * @param {Object} data - Datos del producto
 * @returns {string|null} Mensaje de error o null si es válido
 */
const validateProductData = (data) => {
  if (!data.id || !data.title || !data.price) {
    return 'Faltan campos obligatorios';
  }
  // Puedes agregar más validaciones aquí
  return null;
};


/**
 * Obtiene todos los productos
 * @returns {Promise<Array>} Lista de productos
 */
const getProducts = async () => {
  return await productRepository.getProducts();
};


/**
 * Obtiene un producto por su ID
 * @param {number|string} id - ID del producto
 * @returns {Promise<Object|null>} Producto o null si no existe
 */
const getProductById = async (id) => {
  return await productRepository.getProductById(id);
};


/**
 * Crea un nuevo producto
 * @param {Object} data - Datos del producto
 * @returns {Promise<Object>} Producto creado o error
 */
const createProduct = async (data) => {
  const error = validateProductData(data);
  if (error) return { error };
  const exists = await productRepository.getProductById(data.id);
  if (exists) return { error: 'Ya existe un producto con ese ID' };
  return await productRepository.createProduct(data);
};


/**
 * Actualiza un producto existente
 * @param {number|string} id - ID del producto
 * @param {Object} data - Datos actualizados
 * @returns {Promise<Object|null>} Producto actualizado o error
 */
const updateProduct = async (id, data) => {
  const error = validateProductData(data);
  if (error) return { error };
  return await productRepository.updateProduct(id, data);
};


/**
 * Elimina un producto por su ID
 * @param {number|string} id - ID del producto
 * @returns {Promise<Object|null>} Resultado de la eliminación
 */
const deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
