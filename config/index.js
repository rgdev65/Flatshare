const environment = process.env.NODE_ENV || 'develop';

if(environment === 'develop'){
  process.env.PORT = 5000;
  process.env.MOMGODB_URI = 'mongodb://localhost:27017/flatShare';

}