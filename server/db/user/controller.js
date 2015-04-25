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
    User.findOne({
      '_id': decode.id
    },
    'name profileImage fitnessDevice.deviceType activity challenges',
    function(err, user){
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
      user.friendRequests.push({
        _id: decode.id,
        isAccepted: null
      });
      console.log(user);
      user.save();
    });
    res.send(201, 'Friend request sent');
  }
}; 

module.exports = userRequest;
