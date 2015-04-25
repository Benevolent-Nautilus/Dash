// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Store
var ChallengesStore = require('../../stores/challengesStore');
// Components
var Spinner = require('../../components/spinner');

var ChallengesList = require('../../components/challenges/currentChallengesList');
var Header = require('../../components/profile/header');
var Footer = require('../../components/profile/footer');

var Challenges = React.createClass({
  getInitialState: function() {
    return { data: ChallengesStore.fetchCurrentChallenges() };
  }, 

  render: function() {
    return (
      <div className="text-center">
        <Header />
          <div className="user-progress">
            <h4 className="title bounceIn animated">Your Challenges</h4>
          </div>
          <ChallengesList data={this.state.data} />
        < Footer />
      </div>
    );
  }
});
module.exports = Challenges;