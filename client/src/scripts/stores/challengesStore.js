'use strict';

// Required components
var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _allChallenges = [];
var _currentChallenges = [];
var _singleChallenge = [];
var _inviteList = {};
var _ChallengeDetails = {
                        name: null,
                        goal: null
                      };

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
          _allChallenges = data.data;
       }.bind(this),
       error: function(xhr, status, err) {
          console.error(xhr, status, err.toString());
       }.bind(this)
     });
  },

// API call to fetch challenges users are participating in
  fetchCurrentChallenges: function(){
   $.ajax({
     url: '/api/challenge',
     // url: 'http://demo7018697.mockable.io/api/challenges',
     async: false,
     dataType: 'json',
     success: function(data) {
        _currentChallenges = data.challenges;
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
     url: '/api/challenge/' + uid,
     async: false,
     dataType: 'json',
     success: function(data) {
        _singleChallenge = data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
  },

  setChallengeDetails: function(uid, name, goal) {
    _ChallengeDetails.name = name;
    _ChallengeDetails.goal = goal;
  },

  inviteFriends: function(uid) {
    if(_inviteList[uid] === undefined){
      _inviteList[uid] = uid;
    } else { 
      console.log('Friend is already on list');
    }
  },

  unInviteFriends: function(uid) {
    delete _inviteList[uid];
  },

  joinChallenge: function(name){
    var participants = Object.keys(_inviteList);
    var configure = {
                    name: _ChallengeDetails.name,
                    goal: _ChallengeDetails.goal,
                    participants: participants
                  };  
    $.ajax({
     type: 'POST',
     url: '/api/challenge/new',
     async: false,
     data: JSON.stringify(configure),
     contentType: 'application/json',
     success: function(data) {
        //clear the configure for future use
        configure = {
                      name: null,
                      goal: null,
                      participants: null
                    };  
        // redirect client
        window.location.href = "#/challenges"
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

});

module.exports = friendsStore;