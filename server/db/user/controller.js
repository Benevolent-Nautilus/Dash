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
      select: 'name goal participants'
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
      path: 'friendRequests._id',
      select: 'name profileImage'
    })
    .exec(function(err, user){
      console.log(user);
    });
  },

  postAddFriend: function(req, res, next){
    var decode = decodeFunc(req.cookies.token);
    User.findOne({
      'emailAddress': req.body.email
    },
    function(err, user){
      user.friendRequests.push(decode.id);
      console.log(user);
      user.save();
    });
    res.send(201, 'Friend request sent');
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
        user.friendRequest.pull(req.body.uid);
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
  },

}; 

module.exports = userRequest;
