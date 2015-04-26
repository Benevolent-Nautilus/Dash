'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var Spinner = require('../spinner');

var $ = jQuery;
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

  loginFacebook: function(e) {
    e.preventDefault();
    console.log('facebook login button pressed');
    window.location.href='auth/facebook';
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
        <button className="facebook-login" onClick={ this.loginFacebook }>
           { this.state.submitted ? <Spinner /> : <img src="../../../images/facebook-login.png" width="90" height="50" alt="submit" />}
        </button>
        { error }
      </div>
    );
  }
});

module.exports = Facebook;