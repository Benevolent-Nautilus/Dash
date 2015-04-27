'use strict';

var $ = jQuery;
var Reflux = require('reflux');

var actions = Reflux.createActions([
    'createDashboard',
    'updateDashboard',
    'getFriendsList',
    'deleteFriend',
    'addFriend',
    'vetRequest',
    'sendFriendRequest',
    'fetchSingleChallenge',
    'joinChallenge', 
    'inviteFriends',
    'unInviteFriends',
    'setChallengeDetails'
  ]);


module.exports = actions;