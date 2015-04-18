'use strict';

var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _friends;

var friendsStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.user = _friends;
  },

  getFriendsList: function(){
   console.log('Friends AJAX button pressed');
   $.ajax({
     url: 'https://demo7018697.mockable.io/api/friends',
     async: false,
     dataType: 'json',
     success: function(data) {
        _friends = data.data;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
   return _friends;
  },

  addFriend: function() {

  },

  deleteFriend: function() {

  }
});

module.exports = friendsStore;















