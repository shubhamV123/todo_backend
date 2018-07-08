// var mongoose = require('mongoose')


// var ToDoSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date,
//     status: String
// })

// const ToDo = mongoose.model('Todo', ToDoSchema)

// module.exports = ToDo;
'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);