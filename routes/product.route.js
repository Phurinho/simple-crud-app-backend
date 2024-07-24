const express = require("express");
const Product = require("../models/product.model.js")
const router = express.Router();
const {getProducts
      ,getProduct
      ,createProduct
      ,updateProduct
      ,deleteProduct} = require('../controllers/product.controller.js')


//Read all Products
router.get('/',getProducts);
//Read each Product
router.get('/:id',getProduct);
//Create a new Product
router.post('/',createProduct);
//Update a product
router.put('/:id',updateProduct);
//Delete a product
router.delete('/:id',deleteProduct);



module.exports = router;