require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log(process.env.MONGODB_URI);

//database connection
mongoose.connect(process.env.MONGODB_URI);


module.exports = mongoose;