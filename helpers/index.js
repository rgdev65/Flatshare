const {Todo, initialTotal} = require('../models');

function retrieveUser(callback) {
  initialTotal.find({}, (err, data) => {
    console.log(data);
    if(err) callback(err, null);
    else callback(null, data[0]);
  });
};

module.exports = {
  retrieveUser
}