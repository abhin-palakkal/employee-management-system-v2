//import
const mongoose = require('mongoose');
const chalk = require('chalk');

//connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(chalk.yellow('DB CONNECTED'));
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
