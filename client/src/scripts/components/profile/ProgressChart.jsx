var Chart = require('./Chart');

var sampleData = [
      { name: 'Jason', value: 40 },
      { name: 'Derek', value: 60 },
      { name: 'Scott', value: 80 },
      { name: 'Dennis', value: 100 }
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