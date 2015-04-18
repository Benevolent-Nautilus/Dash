/**
@fileOverview 
<p>Fitbit.js - Component for Fitbit </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var Spinner = require('../spinner');

/**
@description Class Dedicated to Fitbits API requests while rendering a button.
@class Fitbit
*/
var Fitbit = React.createClass({
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

  connectFitbit: function(e) {
    e.preventDefault();
    console.log('fitbit pressed');
    window.location.href='/auth/fitbit';
  },

  // Function is built for error messages.  
  onErrorMessage: function(errorMessage) {
    this.refs.submit.getDOMNode().disabled = false;
    this.setState({
      error: errorMessage,
      submitted: false
    });
  },

  render: function() {
    var error = this.state.error ? <div className="error login-error">{ this.state.error }</div> : '';
    return (
      <div className="text-center">
        <button type="submit" className="btn btn-default fitbit-button" aria-label="Fitbit" onClick={ this.connectFitbit }>
          { this.state.submitted ? <Spinner /> : <span className="fitbit-logo" aria-hidden="true"></span> }
        </button>
        { error }
      </div>
    );
  }
});

module.exports = Fitbit;