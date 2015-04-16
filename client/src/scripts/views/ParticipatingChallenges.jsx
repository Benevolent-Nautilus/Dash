// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
// var actions = require('../../actions/actions');

// Components
var Chart = require('../components/profile/Chart');
var Tracker = require('../components/profile/Tracker');
var Competitions = require('../components/profile/Competitions');

var sampleData = 
      { 
        name: 'Jason Chang', 
        steps_today: 5201, 
        daily_goal: 8000, 
        steps_total: 1030102, 
        competitions: [['Everest', 50132, 100000]] //Name of the competition, steps done, steps total
      };

var ParticipatingChallenges = React.createClass({
  getInitialState: function() {
    return {
      //Distribute Data Across Multiple Components
      ChartData:      {  
                        name: sampleData.name, 
                        steps_today: sampleData.steps_today,
                        daily_goal: sampleData.daily_goal
                      },
      TrackerData:    {
                        steps_total: sampleData.steps_total
                      },
      CompetitionData:{
                        competitions: sampleData.competitions
                      }
    };
  },

  render: function() {
    console.log(this.state.TrackerData);
    return (
      <div className="Application">
        <Chart data= { this.state.ChartData } />
        <Tracker data= { this.state.TrackerData } />
        <Competitions data= { this.state.CompetitionData } />
      </div>
    );
  }
});


module.exports = ParticipatingChallenges;