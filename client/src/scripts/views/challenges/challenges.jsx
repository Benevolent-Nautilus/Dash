// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Store
var ChallengesStore = require('../../stores/challengesStore');
// Components
var Spinner = require('../../components/spinner');

var CurrentChallengesList = require('../../components/Challenges/CurrentChallengesList');
var Header = require('../../components/Profile/Header');
var Footer = require('../../components/Profile/Footer');

var Challenges = React.createClass({
  getInitialState: function() {
    return { data: ChallengesStore.fetchCurrentChallenges() };
  }, 

  render: function() {
    return (
      <div className="text-center">
        <Header />
          <div className="user-progress">
            <h4 className="title">Your Challenges</h4>
          </div>
          <CurrentChallengesList data={this.state.data} />
        < Footer />
      </div>
    );
  }
});
module.exports = Challenges;