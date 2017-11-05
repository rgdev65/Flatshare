const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema for total
const totalSchema = new mongoose.Schema({
  id:Number,
  total:Number,
  sectotal:Number,
});

const initialTotal = mongoose.model('Total',totalSchema);


module.exports = initialTotal;