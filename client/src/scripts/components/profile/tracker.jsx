'use strict';
// Actions
var actions = require('../../actions/actions');
// Components
var TotalStepsTracker = require('./tracker/totalStepsTracker');

var Tracker = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
  },

  render: function() {
    var totalSteps = this.props.totalSteps;
    return (
        <div className="row">
          <TotalStepsTracker data= { totalSteps } />
        </div>
    );
  }
});

module.exports = Tracker;