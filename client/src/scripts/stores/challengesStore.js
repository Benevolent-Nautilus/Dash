'use strict';

var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _currentChallenges = [];
var _singleChallenge = [];

var friendsStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.fetchCurrentChallenges();
  },

  fetchCurrentChallenges: function(){
   $.ajax({
     // url: '/api/user/friends',
     url: 'http://demo7018697.mockable.io/api/challenges',
     async: false,
     dataType: 'json',
     success: function(data) {
        _currentChallenges = data.data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
  },

  fetchSingleChallenge: function(uid){
   $.ajax({
     // url: '/api/user/friends',
     type: 'POST',
     url: 'http://demo7018697.mockable.io/api/challenges/' + uid,
     async: false,
     data: JSON.stringify(uid),
     contentType: 'application/json',
     success: function(data) {
        console.log('ajax singleChallenge', data);
        _singleChallenge = data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
  },

  getCurrentChallenges: function(){
    return _currentChallenges;
  },

  getSingleChallenge: function(){
    return _singleChallenge;
  },

  vetRequest: function(uid, status){
    for(var i=0; i < _requests.length; i++){
      if(_requests[i].uid === uid){
        var friend = _requests.splice(i, 1);
        if(status === true) {
          this.addFriend(friend);
        }
        break;
      }
    }
    this.trigger(_requests);
  }

});

module.exports = friendsStore;















