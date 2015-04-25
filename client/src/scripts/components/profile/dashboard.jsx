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

var Dashboard = React.createClass({

  mixins: [],

  render: function() {
    return (
      <div className="Application">
        <div className="fixed-tracker-dashboard">
          <Chart name = { this.props.data.name } 
              stepsToday = { this.props.data.stepsToday } 
              dailyGoal = { this.props.data.dailyGoal }/>
          <Tracker totalSteps = { this.props.data.totalSteps }/>
          <Challenges competitions= { this.props.data.competitions } />
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;