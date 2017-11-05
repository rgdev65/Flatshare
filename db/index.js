require('../config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//database connection1
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});
module.exports = mongoose;