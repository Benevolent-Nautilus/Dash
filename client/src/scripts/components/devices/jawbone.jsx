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
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
    console.log('jawbone pressed');
    window.location.href='/auth/jawbone';
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
          <button type="button" className="jawbone-button" aria-label="Jawbone" onClick={ this.connectJawbone }>
            { this.state.submitted ? <Spinner /> : <span className="jawbone-logo" aria-hidden="true"></span> }
          </button>
          { error }
        </div>
      );
    }
});

module.exports = Jawbone;