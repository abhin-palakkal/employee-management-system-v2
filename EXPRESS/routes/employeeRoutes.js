//import
const express = require('express');
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
router.post('/employee', postEmployee);
router.get('/employee', getEmployee);
router.get('/employee/:id', getByIdEmployee);
router.patch('/employee/:id', updateEmployee);
router.delete('/employee/:id', deleteEmployee);

//export
module.exports = router;
