const mongoose = require('../db');
const Todo = require('./itemSchema');
const initialTotal = require('./totalSchema');


module.exports = {
  Todo,
  initialTotal
}