'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var TotalSteps = require('./Tracker/TotalSteps');

var Tracker = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },

  render: function() {
    var totalSteps = this.props.totalSteps;
    return (
        <div className="row">
          <TotalSteps data= { totalSteps } />
        </div>
    );
  }
});

module.exports = Tracker;