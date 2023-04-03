const express = require('express');
const router = express.Router();
const createUserValidetoin = require('../middlewares/create-user-validetor');
const {createUser} = require('../controllers/employee-controller')

router.post('/:userId', createUserValidetoin ,createUser);

module.exports = router;
