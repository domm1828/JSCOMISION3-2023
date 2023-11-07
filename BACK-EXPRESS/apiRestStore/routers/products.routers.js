const express = require('express');
const { getAll, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const uploadStorage = require('../middlewares/upload.middleware');
const veryToken = require('../middlewares/auth.jwt.middleware');
const router = express.Router();


router.get('/',getAll);
router.post('/',veryToken,uploadStorage.single('photo'),createProduct);
router.put('/:id',veryToken,uploadStorage.single('photo'),updateProduct);
router.delete('/:id',veryToken,deleteProduct); 


module.exports = router;