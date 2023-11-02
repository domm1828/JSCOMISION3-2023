const express = require('express'); 
const { getAll, createAddress, updateAddress, deleteAddress } = require('../controllers/addressUser.controller');
const router = express.Router();


router.get('/',getAll);
router.post('/',createAddress);
router.put('/:id',updateAddress);
router.delete('/:id',deleteAddress); 


module.exports = router;