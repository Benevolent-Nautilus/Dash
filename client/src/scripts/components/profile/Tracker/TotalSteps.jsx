
var TotalSteps = React.createClass({
  propTypes: {
    data: React.PropTypes.number,
  },
  // Create
  componentDidMount: function() {
    // var el = this.getDOMNode();
    // D3Chart.create(el, this.getChartState());
  },
  // Update (Figure out what to do with this later)
  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.update(el, this.getChartState());
  // },

  getChartState: function() {
    return {
      // name: this.props.data.name,
      // steps_today: this.props.data.steps_today, 
      // daily_goal: this.props.data.daily_goal
    };
  },
  // Destroy (Figure out what to do with this later)
  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return ( 
        <div className="tracker">
          <div className="tracker-header">
            <h4>Total Steps</h4>
          </div>
          <div className="tracker-data">
            <h2>{this.props.data}</h2>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = TotalSteps;