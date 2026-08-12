//import
const mongoose = require('mongoose');
const chalk = require('chalk');

//connect
mongoose
  .connect('mongodb://localhost:27017/employeeDB')
  .then(() => {
    console.log(chalk.yellow('DB CONNECTED'));
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
