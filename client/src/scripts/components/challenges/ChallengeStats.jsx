// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');


var ChallengeStats = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          {this.prop.data.map(function(stat){
            return <li key=(stat.id)> <ChallengeStat data= { stat }>
          })}
        </ul>
      </div>
    );
  };
});