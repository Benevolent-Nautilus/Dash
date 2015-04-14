// Components
// var Module = require('./Tracker/');
var TotalSteps = require('./Tracker/TotalSteps');

var Tracker = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },

  // componentDidMount: function() {
  //   // var el = this.getDOMNode();
  //   // D3Chart.create(el, this.getChartState());
  // },

  getChartState: function() {
    return {
      steps_total: this.props.data.steps_total
    };
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <TotalSteps data= { this.props.data.steps_total } />
        </div>
      </div>
    );
  }
});

module.exports = Tracker;