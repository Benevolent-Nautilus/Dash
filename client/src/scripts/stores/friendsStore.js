'use strict';

// Required components
var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create a private friends object to populate
var _friends = [],
    _requests = [], 
    _requestText = 'Send Friend Request';

// Create friend store in Reflux
var friendsStore = Reflux.createStore({

  listenables: actions,

  init: function() {
    this.fetch();
  },

// API call to request user's current friend list
  fetch: function(){
   $.ajax({
     url: '/api/user/friends',
     // url: 'http://demo7018697.mockable.io/api/friends',
     async: false,
     dataType: 'json',
     success: function(data) {
        _friends = data.friends;
        _requests = data.friendRequests;
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

  updateSendRequest: function(){
    return _requestText;
  },

  vetRequest: function(uid, status){
    var acceptFriend = { uid: uid, 
                         status: status
                       };
    $.ajax({
      type: 'POST',
      url: '/api/user/acceptfriend',
      async: false,
      data: JSON.stringify(acceptFriend),
      contentType: 'application/json',
      success: function(data) {
        this.fetch();
      }.bind(this),
      error: function(xhr, status, err) {
         console.error(xhr, status, err.toString());
      }.bind(this)
    });
    this.trigger(_friends);
    this.trigger(_requests);
    // for(var i=0; i < _requests.length; i++){
    //   if(_requests[i].uid === uid){
    //     var friend = _requests.splice(i, 1);
    //     if(status === true) {
    //       this.addFriend(friend);
    //     }
    //     break;
    //   }
    // }
    // this.trigger(_requests);
  },

  // Function call to send request to friend.  Takes user's email as argument
  sendFriendRequest: function(email) {
    var addFriend = {email: email};
    $.ajax({
     type: 'POST',
     url: '/api/user/addfriend',
     async: false,
     data: JSON.stringify(addFriend),
     contentType: 'application/json',
     success: function(data) {
      console.log('request has been sent');
       _requestText = 'Request has been sent!';
       this.trigger(_requestText);
     }.bind(this),
     error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
     }.bind(this)
    });
  },

  // Add new friend into user's friend list 
  addFriend: function(friend) {
    _friends.push(friend[0]);
    this.trigger(_friends);
  },

});

module.exports = friendsStore;