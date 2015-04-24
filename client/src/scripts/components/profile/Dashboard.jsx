'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

// Components
var Chart = require('./Chart');
var Tracker = require('./Tracker');
var Competitions = require('./Competitions');

var Dashboard = React.createClass({

  mixins: [],

  render: function() {
    return (
      <div className="Application">
        <Chart name = { this.props.data.name } 
              stepsToday = { this.props.data.stepsToday } 
              dailyGoal = { this.props.data.dailyGoal }/>
        <div className="fixed-tracker-dashboard">
          <Tracker totalSteps = { this.props.data.totalSteps }/>
          <Competitions competitions= { this.props.data.competitions } />
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;