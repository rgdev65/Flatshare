 require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//database connection
mongoose.connect(process.env.MONGODB_URI);


module.exports = mongoose;