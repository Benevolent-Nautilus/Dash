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

  mixins: [
    require('react-router').Navigation,
  ],

  getInitialState: function() {
    console.log('Prop State', this.props.data);
    return {
      // Distribute Data Across Multiple Components
      ChartData:      {  
                        name: this.props.data.name, 
                        steps_today: this.props.data.steps_today,
                        daily_goal: this.props.data.daily_goal
                      },
      TrackerData:    {
                        steps_total: this.props.data.steps_total
                      },
      CompetitionData:{
                        competitions: this.props.data.competitions
                      }
     
    };
  },

  render: function() {
    console.log('Dashboard', this.state.profileData);
    return (
      <div className="Application">
        <Chart data= { this.state.ChartData } />
        <Tracker data= { this.state.TrackerData } />
        <Competitions data= { this.state.CompetitionData } />
      </div>
    );
  }
});

module.exports = Dashboard;