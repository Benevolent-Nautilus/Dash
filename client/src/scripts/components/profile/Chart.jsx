// Chart.js

var d3Chart = require('./d3Chart');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },
  // Create
  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, this.getChartState());
  },
  // Update (Figure out what to do with this later)
  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.update(el, this.getChartState());
  // },

  getChartState: function() {
    return {
      name: this.props.data.name,
      steps: this.props.data.value
    };
  },
  // Destroy (Figure out what to do with this later)
  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return (
      <div class="Chart"></div>
    );
  }
});

module.exports = Chart;