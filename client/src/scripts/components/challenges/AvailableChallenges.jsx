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
            return <button key={challenge.id}> <AvailableChallenge data= { challenge }/> </button>;
        })}
        </ul>
      </div>

    );
  }
});


module.exports = AvailableChallenges;
