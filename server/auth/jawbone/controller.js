'use strict';

var request = require('request');
var path = require('path');
var User = require('../../db/user/user.model');

var jawboneController = {
  getData: function(reqURL, currentUser, config){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "0" + month + "" + day;
    console.log(newdate);
    request.get({
      url: 'https://jawbone.com/nudge/api/v.1.1/users/@me/goals',
      headers: {
        'Authorization': 'Bearer ' + currentUser.fitnessDevice.token,
      },
    }, function(e,r,data){
      data = JSON.parse(data);
      User.findOne({
        '_id': currentUser._id
      },
      function(err, user){
        user.activity.dailyGoal = data.data.move_steps;
        user.save();
      });
    });

     request.get({
      url: 'https://jawbone.com/nudge/api/v.1.1/users/@me/moves?date=' + newdate,
      headers: {
        'Authorization': 'Bearer ' + currentUser.fitnessDevice.token,
      },
    }, function(e,r,data){
      data = JSON.parse(data);
      console.log(data);
      User.findOne({
        '_id': currentUser._id
      },
      function(err, user){
        if(!data.data.items){
          user.activity.dailySteps = data.data.items[0].details.steps;
        } else {
          user.activity.dailySteps = 0;
        }
        user.save();
      });
    });

  }
}

module.exports = jawboneController;
