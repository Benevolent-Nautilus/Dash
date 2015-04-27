'use strict';
//Require components
var Reflux = require('reflux');
var actions = require('../actions/actions');


// Private variable to hold dashboard data
var _userInfo = {};

// Create store in Reflux
var profileStore = Reflux.createStore({

  // Lstens to the actions stores as a whole.
  listenables: actions,

  // Initialize user data
  init: function() {
    this.userId = '';
    this.name = '';
    this.stepsToday = 0;
    this.dailyGoal = 0;
    this.totalSteps = 0;
    this.competitions = [];
  },

  // API call to fetch user data for profile 
  fetchUserData: function(){
     $.ajax({
         url: '/api/user',
         async: false,
         dataType: 'json',
         success: function(data) {
          //Divide up data into new initialized object
            console.log(data);
            this.userId = data.msg;
            this.name = data.name.first + ' ' + data.name.last;
            this.stepsToday = data.activity.dailySteps;
            this.dailyGoal = data.activity.dailyGoal;
            this.totalSteps = data.activity.totalSteps;
            this.competitions = data.challenges;
         }.bind(this),
         error: function(xhr, status, err) {
             console.error(xhr, status, err.toString());
         }.bind(this)
     });
  },

  fetchFriendsData: function(uid){
     $.ajax({
         url: '/api/user/' + uid,
         async: false,
         dataType: 'json',
         success: function(data) {
            this.userId = data.msg;
            this.name = data.name.first + ' ' + data.name.last;
            this.stepsToday = data.activity.dailySteps;
            this.dailyGoal = data.activity.dailyGoal;
            this.totalSteps = data.activity.totalSteps;
            this.profileImg = data.profileImage;
            this.device = data.deviceType;
            this.friendsCount = data.friendsLength;
            this.competitions = undefined;
         }.bind(this),
         error: function(xhr, status, err) {
             console.error(xhr, status, err.toString());
         }.bind(this)
     });
     return {
               userId : this.userId,
               name : this.name,
               stepsToday : this.stepsToday,
               dailyGoal : this.dailyGoal,
               totalSteps : this.totalSteps,
               device : this.device,
               profileImg : this.profileImg,
               friendsCount : this.friendsCount,
               competitions: this.competitions
             }; 
  },

  // Create and render dashboard data by calling fetchUserData
  createDashboard: function() {
    this.fetchUserData();
    return {
              userId: this.userId,
              name: this.name,
              stepsToday: this.stepsToday,
              dailyGoal: this.dailyGoal,
              totalSteps: this.totalSteps,
              competitions: this.competitions
            };
  },

  // Function to update user dashboard
  updateDashboard: function() {
     this.fetchUserData();
  },

  // 
  triggerAll: function () {
      this.trigger({
          userId: this.userId,
          name: this.name,
          stepsToday: this.stepsToday,
          totalSteps: this.totalSteps,
          dailyGoal: this.dailyGoal,
          competitions: this.competitions
      });
  },

});

module.exports = profileStore;