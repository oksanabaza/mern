const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create shcema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  important: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Item = mongoose.model('item', ItemSchema);