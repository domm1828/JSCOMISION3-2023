const express = require('express');
const router = express.Router();
const {getUserAll,createUser,updateUser,deleteUser,filterUser} = require('../controllers/users.controller');
const validateUser = require('../request/user.request');


/**
 * 3 FORMAS DE ENVIO DE PARAMETROS.
 *  ROUTER DYNAMIC params => object
 *  QUERY PARAMS query => object
 *  BODY PARAMS body => object
 *  PARAM HEADER headers
 */
router.get('/',getUserAll);

router.post('/',validateUser,createUser);

router.delete('/:id',deleteUser);

router.put('/',updateUser);

/**ROUTER DYNAMIC ENVIAR PARAMETROS POR LA URL */
router.get('/:id/:name',filterUser);

module.exports = router;


