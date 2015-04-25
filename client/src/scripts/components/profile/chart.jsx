// Chart.js
'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var D3Chart = require('./d3Chart');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },
  // Create
  componentDidMount: function() {
    var width = 380;
    var el = this.getDOMNode();
    D3Chart.create(el, this.getChartState(), width - 20);
    $('.radial-svg').css({ 'width' : (width - 74) + 'px', 
                           'height' : (width * .96) + 'px',
                           'margin-top': (width * 0.06) + 'px',
                         });
  },
  // Update (Figure out what to do with this later)
  // componentDidUpdate: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.update(el, this.getChartState());
  // },

  getChartState: function() {
    return {
      name: this.props.name,
      steps_today: this.props.stepsToday, 
      daily_goal: this.props.dailyGoal
    };
  },
  // Destroy (Figure out what to do with this later)
  // componentWillUnmount: function() {
  //   var el = this.getDOMNode();
  //   d3Chart.destroy(el);
  // },

  render: function() {
    return (
      <div className="chart-center bounceIn animated">
        <div className="Chart"></div>
      </div>
    );
  }
});

module.exports = Chart;