// Components
var Chart = require('./Chart');
var Tracker = require('./Tracker');
var Competitions = require('./Competitions');

var sampleData = 
      { 
        name: 'Jason Chang', 
        steps_today: 5201, 
        daily_goal: 8000, 
        steps_total: 1030102, 
        competitions: [['Everest', 500000, 100000]] //Name of the competition, steps done, steps total
      };

var Dashboard = React.createClass({
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

module.exports = Dashboard;