const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  title: String,
  image: String,
  description: String,
  price: Number,
  amount: Number,
  numLikes: {
    type: Number,
    min: 0,
    default: 0
  },
  status: {
    type: Boolean,
   default: false
  }
});


//postSchema
//  .virtual('estaLike')
//  .get(function() {
 //   if (this._estaLike == null) {
//      return false;
 //   }

 //   return this._estaLike;
  //})
  //.set(function(v) {
  //  this._estaLike = v;
  //});

  TaskSchema
  .virtual('estaLike')
  .get(function() {
    if (this._estaLike == null) {
      return false;
    }

    return this._estaLike;
  })
  .set(function(v) {
    this._estaLike = v;
  });

//module.exports = mongoose.model('tasks', TaskSchema);

Task = mongoose.model('tasks', TaskSchema);

module.exports = {
  Task
};
