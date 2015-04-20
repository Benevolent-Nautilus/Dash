//route for db related to user
//author: Dennis Yang
'use strict';

var express = require('express');
var router = express.Router();
var User = require('./user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');


router
  .get('/', function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    User.findOne({
      '_id': decode.id
    },
    function(err, user){
      res.send(user);
    });
  })
  .get('/friends', function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    User.findOne({
      '_id': decode.id
    },
    function(err, user){
      var friends = {
        friends: user.friends
      }
      res.send(friends);
    });
  })
  .post('/addfriend', function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    User.findOne({
      'emailAddress': req.body.email
    },
    function(err, user){
      user.friendRequests.push(user);
      user.save();
    });
    res.send(201, 'Friend request sent');
  })

module.exports = router;
