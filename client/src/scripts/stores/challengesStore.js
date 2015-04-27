'use strict';

// Required components
var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _allChallenges = [];
var _currentChallenges = [];
var _singleChallenge = [];

// Create friend store in Reflux
var friendsStore = Reflux.createStore({

  listenables: actions,

// Initialize
  init: function() {
    this.fetchAllChallenges();
  },

// API call to fetch all available challenges for user to participate
  fetchAllChallenges: function() {
     $.ajax({
       url: 'http://demo7018697.mockable.io/api/allchallenges',
       async: false,
       dataType: 'json',
       success: function(data) {
          console.log('all challenges', data);
          _allChallenges = data.data;
       }.bind(this),
       error: function(xhr, status, err) {
          console.error(xhr, status, err.toString());
       }.bind(this)
     });
     return _allChallenges;
  },

// API call to fetch challenges users are participating in
  fetchCurrentChallenges: function(){
   $.ajax({
     url: '/api/challenge',
     // url: 'http://demo7018697.mockable.io/api/challenges',
     async: false,
     dataType: 'json',
     success: function(data) {
        console.log('current challenges', data);
        _currentChallenges = data.data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
   return _currentChallenges;
  },

// API call to fetch single challenge  
  fetchSingleChallenge: function(uid){
   $.ajax({
     // url: '/api/user/friends',
     type: 'POST',
     url: 'http://demo7018697.mockable.io/api/challenges/' + uid,
     async: false,
     data: JSON.stringify(uid),
     contentType: 'application/json',
     success: function(data) {
        _singleChallenge = data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
  },

  getSingleChallenge: function(){
    return _singleChallenge;
  },

  getAllChallenges: function(){
    return _allChallenges;
  },

  configureChallenge: function() {
    return {
      uid: '',
      friends: []
    };
  },

  joinChallenge: function(){
    challengeId = function() {
      console.log('function invoked');
    };
    return {
      challengeId: challengeId,
      friends: []
    }
  },

});

module.exports = friendsStore;