//api route for db related to challenge
//author: Dennis Yang
'use strict';

var express = require('express');
var router = express.Router();
var User = require('../user/user.model');
var Challenge = require('./challenge.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');


router
  .get('/', function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    User.findOne({
      '_id': decode.id
    },
    function(err, user){
      var challenges = {
        challenges: user.challenges
      }
      res.send(challenges);
    });
  })
  .get('/:id', function(req, res, next){
    var id = req.params.id;
    Challenge.findOne({
      '_id' : id
    },
    function(err, challenges){
      res.send(challenges);
    });
  })
  .post('/new', function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    var challengeData = req.body;
    challengeData.participants.push(decode.id);
    var challenge = new Challenge({
      name: challengeData.name,
      goal: challengeData.goal,
    });
    challengeData.participants.forEach(function(element){
      challenge.participants.push(element);
    });
  })
module.exports = router;
