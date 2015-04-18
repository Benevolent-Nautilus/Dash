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



var SelectChallenge = React.createClass({

  select: function(e){
    console.log('SELECTED!!!!');

  },
  render: function() {
    return (
      <button onClick= {this.select}> enter challenge </button>
      )


  }

});

module.exports = SelectChallenge;