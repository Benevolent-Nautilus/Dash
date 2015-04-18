var React = require('react');
var ChallengeAction = require('../actions/ChallengeAction');

var _challenges = [];

var ChallengeStore = Reflux.createStore({
  init: function(){
    this.listenTo(ChallengeAction.selectChallenge, this.select);
  },

  select: function(challenge){
    _challenges.push(challenge);

  }
});

module.exports = ChallengeStore;