// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
var ChallengeStat = require('../../components/challenges/ChallengeStat');


var ChallengeStats = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          {this.props.data.map(function(stat){
            return <ul key={stat.id}> <ChallengeStat data= { stat } /> </ul>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ChallengeStats