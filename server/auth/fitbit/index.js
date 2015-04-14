'use strict';

var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router
  //facebook auth
  .get('/', passport.authenticate('fitbit', {
    failureRedirect: '#/register',
    session: false
  }))

  //callback for api
  .get('/callback', passport.authenticate('fitbit', {
    failureRedirect: '#/register',
    session: false
  }), function(req, res){
    
  });

module.exports = router;
