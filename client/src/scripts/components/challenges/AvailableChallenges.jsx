// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var AvailableChallenge = require('./AvailableChallenge');

var AvailableChallenges = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
        {this.props.data.map(function(challenge) {
            return <li key={challenge.id}> <AvailableChallenge data= { challenge }/> </li>;
        })}
        </ul>
      </div>

    );
  }
});


module.exports = AvailableChallenges;
