/**
@fileOverview 
<p>Jawbone.js - Component for Jawbone </p>
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
@description Class Dedicated to Jawbones API requests while rendering a button.
@class Jawbone
*/
var Other = React.createClass({
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

  connectOther: function(e) {
    e.preventDefault();
    var self = this;
    console.log('setup Jawbone');
    self.transitionTo('connect');
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
          <button type="button" className="btn btn-default other-button" aria-label="Jawbone" onClick={ this.connectOther }>
            { this.state.submitted ? <Spinner /> : <span className="other" aria-hidden="true"><strong>Missing your device?</strong> Let us know!</span> }
          </button>
          { error }
        </div>
      );
    }
});

module.exports = Other;