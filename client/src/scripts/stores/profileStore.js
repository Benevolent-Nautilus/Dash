'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');


// Private variable to hold dashboard data
var _userInfo = {};

var profileStore = Reflux.createStore({

  // listens to the actions stores as a whole.
  listenables: actions,

  init: function() {
    this.userId = '';
    this.name = '';
    this.stepsToday = 0;
    this.dailyGoal = 0;
    this.totalSteps = 0;
    this.competitions = [];
    // Listen to actions and register callbacks
    // this.listenTo(actions.loadDashboard, this.getDefaultData);
    // this.listenTo(actions.updateDashboard, this.updateDashboard);
  },

  fetchUserData: function(){
     console.log('AJAX button pressed');
     $.ajax({
         url: '/api/user',
         async: false,
         dataType: 'json',
         success: function(data) {
          console.log('user data', data);
          //Divide up data into new initialized object
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

  updateDashboard: function() {
     console.log('Update Dashboard Commenced in Store');
     this.fetchUserData();
  },

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