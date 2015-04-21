/**
@fileOverview 
<p>Jawbone.js - Component for Jawbone </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var Spinner = require('../spinner');
var ChallengeStore = require('../../stores/challengeStore')



var SelectChallenge = React.createClass({
  getInitialState: function(){
    return {selected: false}
  },

  toggleSelect: function(){
    ChallengeStore.selectChallenge();
    this.setState( { selected: true } );
  },

  render: function() {
    return (
      <button onClick= {this.toggleSelect}> {this.state.selected ? 'selected' : 'enter challenge'} </button>
      )


  }

});

module.exports = SelectChallenge;