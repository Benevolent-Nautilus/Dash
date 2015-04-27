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
      <div className="text-center page-extend">
        <Header />
          <div className="user-progress">
            <h4 className="title bounceIn animated">Your Challenges</h4>
          </div>
          <ChallengesList data={this.state.data} />
            <a href="#/join-challenge">
              <div className = "join-challenge fadeInUp animated">
                <span className="add-icon">+</span>
                <span className="text">Join More Challenges</span>
              </div>
            </a>
        < Footer />
      </div>
    );
  }
});
module.exports = Challenges;