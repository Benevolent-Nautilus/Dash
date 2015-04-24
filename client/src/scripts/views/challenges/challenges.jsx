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
var Header = require('../../components/profile/Header');
var ChallengeButton = require('../../components/challenges/ChallengeButton');
/**
@description This is where users will be able to set up their application.
Keep an eye out for <Fitbit /> and <Jawbone /> 

These will load their respective devices Components, separating the API requests made to the server.
Remember that everything gets refed to the app.jsx file through the module.exports at the bottom of the page. 
@class Setup
*/
var Challenges = React.createClass({
  mixins: [
    require('react-router').Navigation
  ],

  render: function() {
    return (
      <div className="post-info inner full-height">
        <Header />
        <div className="challenges text-center">
          <span className="setup-steps">Pick Your Battles</span>
          <h2>Challenges!</h2>
          <img src="../../../images/current-challenge-monster.png" />
          <ChallengeButton type="CurrentChallenge" name="Current Challenges" />
          <ChallengeButton type="JoinChallenges" name="Join Challenges" />
        </div>
        <Footer />
      </div>
    );
  }

});

module.exports = Challenges;