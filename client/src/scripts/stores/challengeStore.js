var Reflux = require('reflux');
var ChallengeAction = require('../actions/actions');

var _challenges = [];

var ChallengeStore = Reflux.createStore({
  listenables: ChallengeAction,
  init: function(){
    this.fetchChallenges();
  },
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
  refresh: function(){
    this.trigger(_challenges);
  },
  selectChallenge: function(){
    console.log('SELECTED!!!!');
    // $.ajax({
    //   type: 'POST',
    //   url: 
    //   data: JSON.stringify(message),
    //   success: function(json){
    //     console.log('success!!')
    //   },
    // });
  },


  select: function(challenge){
    console.log('selected!!!!');
    _challenges.push(challenge);

  }
});

module.exports = ChallengeStore;



