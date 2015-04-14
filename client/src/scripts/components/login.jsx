/**
@fileOverview 
<p>Login.js - This is where the user will login page for the user to login.  The reason why its in components is for modularity if a pop-up box needs to be made. </p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
var loginStore = require('../stores/loginStore');
// Components
var Spinner = require('./spinner');
var Facebook   = require('../components/social/facebook');

var jQuery = require('jquery');
/**
@description This is the Login class.  This is the made component/module that will load our applications login.

It is dependent on social media components such as <Facebook /> 

More may be added on later
@class Login
*/
var Login = React.createClass({

  mixins: [],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className="post-info inner full-height">
        <div className="text-center">
         <h1>Sign Up With Facebook</h1>
             <Facebook />
        </div>
      </div>
    );
  }
});

module.exports = Login;