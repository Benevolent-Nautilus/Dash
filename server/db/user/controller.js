//Controller for user requests

'use strict';

var User = require('./user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

var userRequest = {
  getUserProfile: function(req, res, next){
    var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session);
    User.findOne({
      '_id': decode.id
    },
    'name profileImage fitnessDevice.deviceType activity',
    function(err, user){
      res.send(user);
    });
  }
}; 

module.exports = userRequest;