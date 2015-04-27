/**
@fileOverview 
<p>Register.js - This is where the application will go when the route hits /register </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
var $ = jQuery;
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../actions/actions');
// Stores
var loginStore = require('../stores/loginStore');
// Components
var Spinner = require('../components/spinner');
var Facebook   = require('../components/social/facebook');
/**
@description This is the register View, this will simply load social media componenets such as <Facebook /> to handle AJAX requests to the server.
@class Register
*/
var Login = React.createClass({
  mixins: [],

  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
    $('body').css('background-color', '#00bcd4');
  },


  render: function() {
    return (
      <div className="post-info inner full-height">
        <div className="login-page">
          <img src="../images/splash-login.png" />
              <Facebook />
        </div>
      </div>
    );
  }
});

module.exports = Login;