const express = require('express');
const router = express.Router();
const {getUserAll,createUser,updateUser,deleteUser,filterUser} = require('../controllers/users.controller');


/**
 * 3 FORMAS DE ENVIO DE PARAMETROS.
 *  ROUTER DYNAMIC params => object
 *  QUERY PARAMS query => object
 *  BODY PARAMS body => object
 *  PARAM HEADER headers
 */
router.get('/',getUserAll);

router.post('/',createUser);

router.delete('/',deleteUser);

router.put('/',updateUser);

/**ROUTER DYNAMIC ENVIAR PARAMETROS POR LA URL */
router.get('/:id/:name',filterUser);

module.exports = router;


