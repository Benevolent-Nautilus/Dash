/**
@fileOverview 
<p>Setup.js - This is where the user will setup their device</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../../actions/actions');
// Stores
var loginStore = require('../../stores/loginStore');
// Components
var Spinner = require('../../components/spinner');
var Footer = require('../../components/profile/Footer');
var CurrentChallenges = require('../../components/challenges/CurrentChallenges.jsx');
var ChooseChallenges = require('../../components/challenges/ChooseChallenges.jsx');
/**
@description This is where users will be able to set up their application.
Keep an eye out for <Fitbit /> and <Jawbone /> 

These will load their respective devices Components, separating the API requests made to the server.
Remember that everything gets refed to the app.jsx file through the module.exports at the bottom of the page. 
@class Setup
*/
var Challenges = React.createClass({
  mixins: [],

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <div className="post-info inner full-height">
        <div className="setup text-center">
          <h2>Current Challenges</h2>
          <CurrentChallenges />
          <h2>Join Challenges</h2>
          <ChooseChallenges />
        </div>
        <Footer />
      </div>
    );
  }

});

module.exports = Challenges;