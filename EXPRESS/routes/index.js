//import
const express = require('express');
const employeeRoutes = require('./employeeRoutes');

//connect
const router = express.Router();

//route connect
router.use('/api', employeeRoutes);

//export
module.exports = router;
