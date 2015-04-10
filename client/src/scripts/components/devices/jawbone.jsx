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

  connectJawbone: function(e) {
    e.preventDefault();
    var self = this;
    console.log('setup Jawbone');
    self.transitionTo('login');
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
        <button className="button button-primary" onClick={ this.connectJawbone }>
           { this.state.submitted ? <Spinner /> : 'Connect Jawbone' }
        </button>
        { error }
      </div>
      );
    }
});

module.exports = Jawbone;