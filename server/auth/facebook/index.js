'use strict';

var express = require('express');
var passport = require('passport');

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    failureRedirect: '/',
    session: false
  }))

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
    session: false
  }));

module.exports = router;
