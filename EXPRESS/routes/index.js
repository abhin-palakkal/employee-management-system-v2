//import
const express = require('express');
const employeeRoutes = require('./employeeRoutes');
const adminRoutes = require('./adminRoutes');

//connect
const router = express.Router();

//route connect
router.use('/api', employeeRoutes);
router.use('/api', adminRoutes);

//export
module.exports = router;
