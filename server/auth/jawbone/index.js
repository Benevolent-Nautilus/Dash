'use strict';

var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router
  //facebook auth
  .get('/', passport.authorize('jawbone', {
    scope: ['move_read', 'extended_read'],
    failureRedirect: '/#/connect',
    session: false
  }))

  //callback for api
  .get('/callback', passport.authorize('jawbone', {
    failureRedirect: '/#/connect',
    session: false
  }), function(req, res){
    res.redirect('/#/dashboard');
  });

module.exports = router;
