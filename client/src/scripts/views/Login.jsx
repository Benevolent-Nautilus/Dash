/**
@fileOverview 
<p>Register.js - This is where the application will go when the route hits /register </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
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

  render: function() {
    return (
      <div className="post-info inner full-height fill">
        <div className="login-page">
          <img src="../images/splash-login.png" />
              <Facebook />
        </div>
      </div>
    );
  }
});

module.exports = Login;