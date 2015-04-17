// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

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

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <TotalSteps data= { this.props.totalSteps } />
        </div>
      </div>
    );
  }
});

module.exports = Tracker;