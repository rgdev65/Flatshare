const mongoose = require('../db');

const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: {
    type: String
  },
  item: {
    type: String
  },
  price: {
    type: Number
  },
  total: {
    type: Number
  }
});

const Todo = mongoose.model('Todo', itemSchema);


module.exports = Todo;