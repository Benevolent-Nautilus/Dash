var Chart = require('./Chart');

var sampleData = [
      { 
        name: 'Jason Chang', 
        steps_today: 5201, 
        daily_goal: 10000, 
        steps_total: 1030102, 
        steps_week: 40000, 
        competitions: 100000 
      }
    ];

var ProgressChart = React.createClass({
  getInitialState: function() {
    return {
      data: sampleData
    };
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div className="Application">
        {
          this.state.data.map(function(friend){
            return <Chart key={friend.id} data={friend} />;
          })
        }
      </div>
    );
  }
});

module.exports = ProgressChart;