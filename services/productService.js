const axios = require("axios");
require("dotenv").config();

const BASE_URL = process.env.FAKESTORE_API_URL;

const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

module.exports = {
  getAllProducts,
  getProductById,
};
