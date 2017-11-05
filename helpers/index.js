const {Todo, initialTotal} = require('./models');

function retrieveUser(callback) {
  initialTotal.find({},(err,data) => {
    if(err) callback(null,err);
    else callback(null,data[0]);
  });
};