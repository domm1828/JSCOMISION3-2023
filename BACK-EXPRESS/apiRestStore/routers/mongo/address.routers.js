const express = require('express'); 
const { getAll,createAddress} = require('../../controllers/mongodb/addressUser.controller');
 const router = express.Router();


router.get('/',getAll);
router.post('/',createAddress);
 


module.exports = router;