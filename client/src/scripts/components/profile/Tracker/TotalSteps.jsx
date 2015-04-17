
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
  // Destroy (Figure out what to do with this later)
  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    console.log(this.props.totalSteps);
    return ( 
        <div className="tracker">
          <div className="tracker-header">
            <h4>Total Steps</h4>
          </div>
          <div className="tracker-data">
            <h2>{ this.props.data }</h2>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = TotalSteps;