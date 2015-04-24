'use strict';

var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = require('../../config/config').secrets.session;
var router = express.Router();

router
  //facebook auth
  .get('/', passport.authenticate('facebook', {
    scope: 'email',
    failureRedirect: '/#/login',
    session: false
  }))

  //callback for api
  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/#/login',
    session: false
  }), function(req, res){
    //setting the token for the cookie
    var token = jwt.sign({id:req.user._id}, secret , {expiresInMinutes: 1440 * 360});
    res.cookie('token', JSON.stringify(token));

    //redirect to register device if new user, else go to profile

    if(!req.user.fitnessDevice.token){
      res.redirect('/#/connect');
    } else {
      res.redirect('/#/dashboard');
    }
  });

module.exports = router;
