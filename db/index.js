const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//database connection
mongoose.connect('mongodb://heroku_1chmdmmw:invg6cbj921n87hp14mr9eadof@ds243335.mlab.com:43335/heroku_1chmdmmw');


module.exports = mongoose;