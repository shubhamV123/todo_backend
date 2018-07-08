'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: {type:String,Required:"kindly enter the name of the task"},
    description: {type:String,Required:"kindly enter the description of the task"},
    date:{type:String,default:Date.now},
    reminder: String
});


module.exports = mongoose.model('Tasks', TaskSchema);