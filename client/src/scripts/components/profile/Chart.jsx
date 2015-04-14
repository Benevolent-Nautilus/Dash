// Chart.js
var D3Chart = require('./D3Chart');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },
  // Create
  componentDidMount: function() {
    var el = this.getDOMNode();
    D3Chart.create(el, this.getChartState());
  },
  // Update (Figure out what to do with this later)
  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.update(el, this.getChartState());
  // },

  getChartState: function() {
    return {
      name: this.props.data.name,
      steps_today: this.props.data.steps_today, 
      daily_goal: this.props.data.daily_goal
    };
  },
  // Destroy (Figure out what to do with this later)
  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return (
      <div class="chart-center">
        <div class="Chart"></div>
      </div>
    );
  }
});

module.exports = Chart;