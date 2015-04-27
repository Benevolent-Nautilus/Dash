//Controller for challenge requests

'use strict';

var User = require('../user/user.model');
var Challenge = require('./challenge.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

//decode the cookies
var decodeFunc = function(rawToken){
  return jwt.verify(JSON.parse(rawToken), config.secrets.session);
}


//updateChallenges after saved
var updateChallenges = function(challenge){
  Challenge
  .findOne({'_id': challenge.id})
  .select('participants')
  .populate({
    path: 'participants._id',
    select: 'activity.totalSteps'
  })
  .exec(function(err, challenge){
    for(var i = 0; i < challenge.participants.length; i++){
      challenge.participants[i].startSteps = challenge.participants[i]._id.activity.totalSteps;
      challenge.participants[i].currentSteps = 0;
    }
    challenge.save();
  })
}

var challengeRequest = {
  getChallenges: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User
    .findOne({'_id': decode.id})
    .select('name profileImage emailAddress fitnessDevice.deviceType challenges')
    .populate({
      path: 'challenges',
      select: 'name goal participants winner'
    })
    .exec(function(err, user){
      res.send(user);
    });
  },

  getSingleChallenge: function(req, res, next){
    var id = req.params.id;
    console.log(id);
    Challenge
    .findOne({'_id' : id})
    .select('name goal participants._id participants.currentSteps winner')
    .populate({
      path: 'participants._id',
      select: 'name profileImage emailAddress fitnessDevice.deviceType'
    })
    .exec(function(err, challenges){
      console.log(challenges);
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
      winner: null,
    });

    //Assign all the participants to the challenge
    for(var i = 0; i < participants.length; i ++){
      challenge.participants.push({
        _id: participants[i],
      })
    }

    //save the challenge and save it to each user
    //update challenge with startSteps and currentSteps after save
    challenge.save(function(err){
      if(err) return console.log(err);
      updateChallenges(challenge);
      participants.forEach(function(participant){
        User
        .findOne({'_id': participant})
        .exec(function(err, user){
          user.challenges.push(challenge._id);
          user.save();
        });
      });
    })

    res.send(201, 'Challenge created');

  }
}; 

module.exports = challengeRequest;
