const express = require('express');
const router = express.Router();
const {getUserAll,createUser,updateUser,deleteUser} = require('../controllers/users.controller');

router.get('/',getUserAll);

router.post('/',createUser);

router.delete('/',deleteUser);

router.put('/',updateUser);

module.exports = router;


