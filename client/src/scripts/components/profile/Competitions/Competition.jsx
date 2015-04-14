
var Competitions = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
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
        <div className="competition-box tracker">
          <div className="col-xs-4 col-md-4 line-right">
            <img src="../../../images/challenge.png" />
            <h4>{this.props.data[0]}</h4>
          </div>
          <div className="col-xs-8 col-md-8 competition-text text-right">
            <span className="competition-score">
              <span className="competition-accumulated">{this.props.data[1]}</span> / <span className="competition-total">{this.props.data[2]}</span>
            </span>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = Competitions;