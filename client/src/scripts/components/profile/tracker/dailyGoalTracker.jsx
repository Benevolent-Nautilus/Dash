'use strict';

// Actions
var actions = require('../../../actions/actions');

var TotalSteps = React.createClass({

  mixins: [
    require('../../../mixins/formatNumber')
  ],

  render: function() {
    var dailyGoal = this.props.dailyGoal;
    console.log('dailygoal', dailyGoal);
    return ( 
        <div className="tracker dailygoal">
          <div className="tracker-data fadeInUp animated">
            <h2>{ this.formatNumber(dailyGoal) }</h2>
            <span>Daily Goal</span>
          </div>
        </div>
    );
  }
});

module.exports = TotalSteps;