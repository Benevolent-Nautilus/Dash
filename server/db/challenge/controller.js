//Controller for challenge requests

'use strict';

var User = require('../user/user.model');
var Challenge = require('./challenge.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

var decodeFunc = function(rawToken){
  return jwt.verify(JSON.parse(rawToken), config.secrets.session);
}

var challengeRequest = {
  getChallenges: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User
    .findOne({'_id': decode.id})
    .select('name profileImage emailAddress fitnessDevice.deviceType challenges')
    .populate({
      path: 'challenges',
      select: 'name goal participants.currentSteps winner'
    })
    .exec(function(err, user){
      res.send(user);
    });
  },

  getSingleChallenge: function(req, res, next){
    var id = req.params.id;
    Challenge
    .findOne({'_id' : id})
    .select('name goal participants.currentSteps winner')
    .populate({
      path: 'participants',
      select: ('name profileImage emailAddress fitnessDevice.deviceType')
    })
    .exec(function(err, challenges){
      res.send(challenges);
    });
  },

  postNewChallenge: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    var participants = req.body.participants;
    //add current user to the participants list
    participants.push(decode.id); 
    
    //construct a new challenge
    var challenge = new Challenge({
      name: req.body.name,
      goal: req.body.goal, 
      winner: null
    });

    //Assign all the participants to the challenge
    participants.forEach(function(participant){
      User
      .findOne({'_id': participant})
      .exec(function(err, user){
        challenge.participants.push({
          _id: user._id,
          startSteps: user.activity.totalSteps,
          currentSteps: user.activity.totalSteps - this.startSteps 
        });
      });
    })

    //save the challenge and save it to each user
    challenge.save(function(err){
      if(err) return console.log(err);
      participants.forEach(function(participant){
        User
        .findOne({'_id': participant})
        .exec(function(err, user){
          user.challenges.push(challenge._id);
          user.save();
        });
      });
    })

  }
}; 

module.exports = challengeRequest;
