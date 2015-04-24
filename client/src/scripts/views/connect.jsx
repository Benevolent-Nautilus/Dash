/**
@fileOverview 
<p>Setup.js - This is where the user will setup their device</p>
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
var Spinner = require('../components/spinner');
var Header = require('../components/profile/header');
var Jawbone = require('../components/devices/jawbone');
var Fitbit = require('../components/devices/fitbit');
var Other = require('../components/devices/other');

/**
@description This is where users will be able to set up their application.
Keep an eye out for <Fitbit /> and <Jawbone /> 

These will load their respective devices Components, separating the API requests made to the server.
Remember that everything gets refed to the app.jsx file through the module.exports at the bottom of the page. 
@class Setup
*/
var Setup = React.createClass({
  mixins: [],

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <div className="post-info inner full-height">
        <div className="setup text-center">
          <span className="setup-steps">Step 1 of 2</span>
          <h2>Choose your device!</h2>
          <img src="../../images/setup-monster.png" />
            <Fitbit />
            <Jawbone />
            <Other />
        </div>
      </div>
    );
  }

});

module.exports = Setup;