'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var ProgressBar = React.createClass({

  mixins: [
    require('../../mixins/formatNumber')
  ],

  render: function(){
    var profileImg = {
      background: 'url(' + this.props.profileImg +')',
      backgroundSize: '100%',
      float: 'left',
      width: '65px',
      height: '65px'
    };
    var challengeGoal = this.formatNumber(this.props.goal);

    return (
          <div className="user-progress">
            <h4 className="title fadeIn animated">You</h4>
            <h4>{ challengeGoal }</h4>
            <span className="user-steps fadeIn animated">Total Steps</span>
          </div>
    ) 
  }
})

module.exports = ProgressBar;


