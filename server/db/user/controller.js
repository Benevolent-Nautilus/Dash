//Controller for user requests

'use strict';

var User = require('./user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

var decodeFunc = function(rawToken){
  return jwt.verify(JSON.parse(rawToken), config.secrets.session);
}

var userRequest = {
  getUserProfile: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User
    .findOne({'_id': decode.id})
    .select('name profileImage fitnessDevice.deviceType activity challenges')
    .populate({
      path: 'challenges',
      match: {'challenges.participants._id': decode.id},
      select: 'name goal participants.currentSteps'
    })
    .exec(function(err, user){
      res.send(user);
    });
  },

  getFriendProfile: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User
    .findOne({'_id': decode.id})
    .select('name fitnessDevice.deviceType email activity profileImage friends friendRequests')
    .populate({
      path:'friends',
      select: 'name profileImage emailAddress fitnessDevice.deviceType activity'
    })
    .populate({
      path: 'friendRequests',
      select: 'name profileImage'
    })
    .exec(function(err, user){
      console.log(user);
      res.send(user);
    });
  },

  getSingleFriendProfile: function(req, res, next){
    var id = req.params.id;
    console.log('hi');
    User
    .findOne({'_id': id})
    .select('name profileImage fitnessDevice.deviceType activity friends')
    .exec(function(err, user){
      var obj = {
        _id: user._id,
        profileImage: user.profileImage,
        activity: user.activity,
        fitnessDevice: user.fitnessDevice,
        name: user.name,
        friendsLength: user.friends.length
      }
      res.send(200, obj);
    })
  },

  postAddFriend: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User.findOne({
      'emailAddress': req.body.email
    },
    function(err, user){
      if(user){
        user.friendRequests.push(decode.id);
        console.log(user);
        user.save();
        res.send(201, 'Friend request sent');
      } else {
        res.send(404, 'User not in our app');
      }
    });
  },

  postAcceptFriend: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User.findOne({
      '_id': decode.id
    },
    function(err, user){
      //only add friend to friends list of the user if the status is true
      if(req.body.status){
        user.friends.push(req.body.uid);
        user.friendRequests.pull(req.body.uid);
        user.save();
        //add user to friend's friends list
        User.findOne({
          '_id': req.body.uid
        }, function(err, user){
          user.friends.push(decode.id);
          user.save();
        });
      }
    });
    res.send(201, 'Friend accepted');
  },

}; 

module.exports = userRequest;
