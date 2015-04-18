var Reflux = require('reflux');
var ChallengeAction = require('../actions/actions');

var _challenges = [];

var ChallengeStore = Reflux.createStore({
  listenables: ChallengeAction,
  init: function(){
    this.challenges = _challenges;
  },
  fetchChallenges: function(){
    $.ajax({
         url: 'http://demo2404350.mockable.io/dash',
         async: false,
         dataType: 'json',
         success: function(data) {
            this.challenges = data;
         }.bind(this),
         error: function(xhr, status, err) {
             console.error(url, status, err.toString());
         }.bind(this)
     });
    return this.challenges;
  },


  select: function(challenge){
    console.log('selected!!!!');
    _challenges.push(challenge);

  }
});

module.exports = ChallengeStore;



