'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

// Components
var Chart = require('./chart');
var Tracker = require('./tracker');
var Challenges = require('./challenges');
var CurrentChallenge = require('../challenges/currentChallenge');

var Dashboard = React.createClass({

  mixins: [],

  render: function() {
    var goal = (this.props.competitions === undefined) ? this.props.data.dailyGoal : null;
    var LatestChallenge = <CurrentChallenge key="12348" uid="12348" name="Everest" currentSteps="384729" goal="100000" amountOfFriends="5" />;
    var UserActivity = (this.props.competitions === undefined) ? null : LatestChallenge;
    // console.log(this.props.competitions);
    return (
      <div className="Application">
        <div className="fixed-tracker-dashboard">
          <Chart name = { this.props.data.name } 
              stepsToday = { this.props.data.stepsToday } 
              dailyGoal = { this.props.data.dailyGoal }/>
          <Tracker totalSteps = { this.props.data.totalSteps } dailyGoal = { goal }/>
          <ul className="current-challenges challenges-box-dash">
            { UserActivity }
          </ul>
        </div>
      </div>
    );
  }
});

            // <CurrentChallenge key={stat.uid} uid={stat.uid} name={stat.name} currentSteps={stat.currentSteps} goal={stat.goal} amountOfFriends={stat.amountOfFriends} />

// <Challenges competitions= { this.props.data.competitions } />
module.exports = Dashboard;