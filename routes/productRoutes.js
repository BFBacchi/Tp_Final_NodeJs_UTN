const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getAllProducts);
router.get("/product/:product_id", productController.getProductById);

module.exports = router;
