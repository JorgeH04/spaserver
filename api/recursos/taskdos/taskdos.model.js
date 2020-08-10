const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  title: String,
  image: String,
  description: String,
  price: Number,
  amount: Number,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasksdos', TaskSchema);