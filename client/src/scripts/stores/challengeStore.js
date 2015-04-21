'use strict';

var Reflux = require('reflux');
var ChallengeAction = require('../actions/actions');

var _challenges = [];
var _joinedChallenge = [];

var ChallengeStore = Reflux.createStore({
  listenables: ChallengeAction,
  init: function(){
    this.fetchChallenges();
  },
  // load available challenges
  fetchChallenges: function(){
    var context = this;
    $.ajax({
         url: 'http://demo2404350.mockable.io/dash',
         async: false,
         dataType: 'json',
         success: function(data) {
          console.log('ajax data', data);
            _challenges = data.data;
            context.trigger(_challenges);
         }.bind(this),
         error: function(xhr, status, err) {
             console.error(url, status, err.toString());
         }.bind(this)
     });
  },
  // load currently involved challenges
  // loadCurrentChallenges: function(){
  //   var context = this;
  //   $.ajax({
  //        url: '/api/challenge', //http://demo2404350.mockable.io/dash
  //        async: false,
  //        dataType: 'json',
  //        success: function(data) {
  //           _joinedChallenge = data.data;
  //           context.trigger(_joinedChallenge);
  //        }.bind(this),
  //        error: function(xhr, status, err) {
  //            console.error(url, status, err.toString());
  //        }.bind(this)
  //    });
  // },

  // refresh: function(){
  //   this.trigger(_challenges);
  // },
  // // select new challenge to participate in
  // selectChallenge: function(){
  //   console.log('SELECTED!!!!');

  //   $.ajax({
  //     type: 'POST',
  //     url: 'api/challenge/new',
  //     success: function(data){
  //       console.log(data)
  //       this.name = data.name;
  //       this.goal = data.totalSteps;
  //       participant.push();
  //       // console.log('success!!');
  //     },
  //   });
  // },

  // // select: function(challenge){
  // //   console.log('selected!!!!');
  // //   _challenges.push(challenge);
  // // }

});

module.exports = ChallengeStore;



