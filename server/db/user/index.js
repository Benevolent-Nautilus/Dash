//route for db related to user
//author: Dennis Yang
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.redirect('/');

});

module.exports = router;
