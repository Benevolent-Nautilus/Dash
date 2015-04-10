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
@description This is the Facebook module, this will simply just load Facebook login button with its respective methods to the DOM.

More may be added on later
@class Facebook
*/
var Facebook = React.createClass({
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

  registerUser: function(e) {
    e.preventDefault();
    var self = this;
    console.log('ajax call for facebook component!');
    self.transitionTo('login');
  },

  // If oAuth runs into a problem.
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
        <button className="button button-primary" onClick={ this.registerUser }>
           { this.state.submitted ? <Spinner /> : 'Register with Facebook' }
        </button>
        { error }
      </div>
    );
  }
});

module.exports = Facebook;