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