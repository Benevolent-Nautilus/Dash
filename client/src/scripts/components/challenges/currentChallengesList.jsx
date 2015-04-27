'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
// Components
var CurrentChallenge = require('./currentChallenge');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var CurrentChallengesList = React.createClass({

  getInitialState: function() {
    return { mounted: false };
  },
  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  render: function() {
    var Challenge = 
                    (this.state.mounted) ? 
                      this.props.data.map(function(stat){
                        return <CurrentChallenge key={stat._id} uid={stat._id} name={stat.name} currentSteps={stat.currentSteps} 
                                  goal={stat.goal} amountOfFriends={stat.participants} img="../../../images/challenge.png" />
                      }) :null;
    return (
      <div>
        <ul className="current-challenges">
            {Challenge}  
        </ul>
      </div>
    )
  }
})

module.exports = CurrentChallengesList;