//Create challenge schema using mongoose
//author: Dennis Yang
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  name: {type: String},
  goal: {type: Number},
  participants: [{
    userId : {type: Schema.Types.ObjectId, ref: 'User'},
    startSteps: {type: Number},
    endSteps: {type: Number}
  }],
  winner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Challenge', challengeSchema);
