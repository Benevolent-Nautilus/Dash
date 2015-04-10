// Establish the conneciton to MongoDB
// author: Dennis Yang

'use strict'; 
var mongoose = require('mongoose');

// setup mongo local or server URI
// Establish connection to the URI
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/dash';
mongoose.connect(mongoURI);

//log when database connection open or if there is an error
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('MongoDB connection open');
});

module.exports = db;
