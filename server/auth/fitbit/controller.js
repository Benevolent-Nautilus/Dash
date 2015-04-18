'use strict';

var request = require('request');
var path = require('path');
var User = require('../../db/user/user.model');

var fitbitController = {
  getData: function(reqURL, currentUser, config){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "-" + month + "-" + day;
    request.get({
      url: config.fitbit.apiReq.url + 'activities/date/' + newdate + '.json',
      oauth: {
        consumer_key: config.fitbit.consumerKey,
        consumer_secret: config.fitbit.consumerSecret,
        token: currentUser.fitnessDevice.token,
        token_secret: currentUser.fitnessDevice.tokenSecret
      }
    }, function(e,r,data){
      data = JSON.parse(data);
      console.log(data.activities);
      User.findOne({
        '_id': currentUser._id
      },
      function(err, user){
        user.activity.dailyGoal = data.goals.steps;
        user.save();
      });
    });

    request.get({
      url: config.fitbit.apiReq.url + reqURL,
      oauth: {
        consumer_key: config.fitbit.consumerKey,
        consumer_secret: config.fitbit.consumerSecret,
        token: currentUser.fitnessDevice.token,
        token_secret: currentUser.fitnessDevice.tokenSecret
      }
    }, function(e,r,data){
      data = JSON.parse(data);
      User.findOne({
        '_id': currentUser._id
      },
      function(err, user){
        user.activity.totalSteps = data.lifetime.total.steps;
        user.save();
      });
    });

    request.get({
      url: config.fitbit.apiReq.url + 'activities/steps/date/today/1d.json',
      oauth: {
        consumer_key: config.fitbit.consumerKey,
        consumer_secret: config.fitbit.consumerSecret,
        token: currentUser.fitnessDevice.token,
        token_secret: currentUser.fitnessDevice.tokenSecret
      }
    }, function(e,r,data){
      data = JSON.parse(data);
      User.findOne({
        '_id': currentUser._id
      },
      function(err, user){
        user.activity.dailySteps = data['activities-steps'][0].value;
        user.save();
      });
    });

  }
}

module.exports = fitbitController;