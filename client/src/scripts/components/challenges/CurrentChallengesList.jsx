
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var CurrentChallenge = require('./CurrentChallenge');

var CurrentChallengesList = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="current-challenges">
            {this.props.data.map(function(stat){
              return <CurrentChallenge key={stat.uid} uid={stat.uid} name={stat.name} currentSteps={stat.currentSteps} goal={stat.goal} amountOfFriends={stat.amountOfFriends} />
            })}  
        </ul>
      </div>
    )
  }
})

module.exports = CurrentChallengesList;