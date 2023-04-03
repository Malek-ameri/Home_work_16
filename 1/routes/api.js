var express = require('express');
var router = express.Router();
const employeeHandler = require('./employee-route');


router.use('/employee',employeeHandler)


module.exports = router;