const express = require('express');
const router = express.Router();
 const validateUser = require('../../request/user.request');
const { getUserAll,createUser,deleteUser,updateUser,getById } = require('../../controllers/mongodb/user.controller');

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

router.put('/:id',updateUser);

router.get('/:id',getById);

/**ROUTER DYNAMIC ENVIAR PARAMETROS POR LA URL */
//router.get('/:id/:name',filterUser);

module.exports = router;
