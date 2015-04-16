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

/**
@description Class Dedicated to Jawbones API requests while rendering a button.
@class Jawbone
*/
var Jawbone = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      // error message - set default blank
      error: '',
      // submitted set to false, this is purely for the spinner
      submitted: false
    };
  },

   newChallenge: function(e){
    // e.preventDefault();
    var self = this;
    console.log('clickeddfudfj');
    self.transitionTo('NewChallenges');
  },

  render: function() {
    var error = this.state.error ? <div className="error login-error">{ this.state.error }</div> : '';
    return (
        <div className="text-center">
          <button type="button" className="btn btn-default jawbone-button" aria-label="Jawbone" onClick={ this.newChallenge }>
            { this.state.submitted ? <Spinner /> : <span className="jawbone-logo" aria-hidden="true"></span> }
          </button>
          { error }
        </div>
      );
    }
});

module.exports = Jawbone;