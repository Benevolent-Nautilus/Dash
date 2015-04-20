'use strict';

var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _friends = [],
    _requests = [];

var friendsStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.fetch();
  },

  fetch: function(){
   $.ajax({
     // url: '/api/user/friends',
     url: 'http://demo7018697.mockable.io/api/friends',
     async: false,
     dataType: 'json',
     success: function(data) {
        console.log(data);
        _friends = data.friends;
        _requests = data.requests;
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
   });
   return _friends;
  },

  getFriendsList: function(){
    return _friends;
  },

  getFriendRequests: function(){
    return _requests;
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
  },

  addFriend: function(friend) {
    _friends.push(friend[0]);
    this.trigger(_friends);
  },

  deleteFriend: function() {
    // add this later
  }
});

module.exports = friendsStore;















