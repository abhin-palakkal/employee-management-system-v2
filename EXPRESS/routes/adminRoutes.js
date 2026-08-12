//import
const express = require('express');
const { signupAdmin, loginAdmin } = require('../controllers/admin-controller');

//connect
const router = express.Router();

//routes connect
router.post('/admin/signup', signupAdmin);
router.post('/admin/login', loginAdmin);

//export
module.exports = router;
