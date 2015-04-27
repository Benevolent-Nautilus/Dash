'use strict';

// Actions
var actions = require('../../../actions/actions');

var TotalSteps = React.createClass({

  mixins: [
    require('../../../mixins/formatNumber')
  ],

  render: function() {
    var totalSteps = this.props.data;
    return ( 
        <div className="tracker">
          <div className="tracker-data fadeInUp animated">
            <h2>{ this.formatNumber(totalSteps) }</h2>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = TotalSteps;