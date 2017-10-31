const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//database connection
mongoose.connect('mongodb://localhost/FlateShare');


module.exports = mongoose;