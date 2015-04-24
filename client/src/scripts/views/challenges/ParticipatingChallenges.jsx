// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var ChallengeStore = require('../../stores/challengeStore')

// Components
var Spinner = require('../../components/spinner');
var ChallengeStats = require('../../components/challenges/ChallengeStats');
var Footer = require('../../components/profile/Footer');

var ParticipatingChallenges = React.createClass({
  getInitialState: function() {
    return { data: ChallengeStore.getCurrentChallenge() };
  }, 

  componentDidMount: function(){
    ChallengeStore.refresh();
  },

  render: function() {
    return (
      <div className="text-center">
        <h2 className="setup">Here Are Your Current Challenges </h2>
        < ChallengeStats data= { this.state.data } />
        <img className="challengeMonster" src="../../images/challengeMonster.png" />
        < Footer />
        
      </div>
    );
  }
});

module.exports = ParticipatingChallenges;