//import
const express = require('express');
const checkToken = require('../middlewares/checkToken');
const {
  postEmployee,
  getByIdEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee-controller');

//connect
const router = express.Router();

//routes connect
router.post('/employee', checkToken('ADMIN'), postEmployee);
router.get('/employee', checkToken('ADMIN'), getEmployee);
router.get('/employee/:id', checkToken('ADMIN'), getByIdEmployee);
router.patch('/employee/:id', checkToken('ADMIN'), updateEmployee);
router.delete('/employee/:id', checkToken('ADMIN'), deleteEmployee);

//export
module.exports = router;
