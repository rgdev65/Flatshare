const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//database connection
mongoose.connect('mongodb://localhost/flateShare');


module.exports = mongoose;