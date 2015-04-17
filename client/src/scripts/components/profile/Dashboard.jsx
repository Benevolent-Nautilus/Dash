// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

// Stores
var profileStore = require('../../stores/profileStore');

// Components
var Chart = require('./Chart');
var Tracker = require('./Tracker');
var Competitions = require('./Competitions');

var Dashboard = React.createClass({

  mixins: [
    require('react-router').Navigation,
    Reflux.listenTo(profileStore, 'onLoaded')
  ],

  getInitialState: function() {
    return {
      //Distribute Data Across Multiple Components
      profileData: profileStore.getDefaultData()
      // ChartData:      {  
      //                   name: sampleData.name, 
      //                   steps_today: sampleData.steps_today,
      //                   daily_goal: sampleData.daily_goal
      //                 },
      // TrackerData:    {
      //                   steps_total: sampleData.steps_total
      //                 },
      // CompetitionData:{
      //                   competitions: sampleData.competitions
      //                 }
     
    };
  },

  render: function() {
    console.log('Dashboard', this.state.profileData);
    return (
      <div className="Application">
        <Chart data= { this.state.profileData } />
        <Tracker data= { this.state.profileData } />
        <Competitions data= { this.state.profileData } />
      </div>
    );
  }
});

module.exports = Dashboard;