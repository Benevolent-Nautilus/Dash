'use strict';

// Actions
var actions = require('../../../actions/actions');

var TotalSteps = React.createClass({
  render: function() {
    return ( 
        <div className="tracker">
          <div className="tracker-data">
            <h2>{ this.props.data }</h2>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = TotalSteps;