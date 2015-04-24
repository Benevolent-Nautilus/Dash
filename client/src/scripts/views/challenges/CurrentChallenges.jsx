// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Store
var ChallengesStore=require('../../stores/challengesStore');
// Components
var Spinner = require('../../components/spinner');
var CurrentChallengesList = require('../../components/challenges/CurrentChallengesList');
var Header = require('../../components/Profile/Header');
var Footer = require('../../components/Profile/Footer');


var ParticipatingChallenges = React.createClass({
  getInitialState: function() {
    return { data: ChallengesStore.getCurrentChallenges() };
  }, 

  render: function() {
    return (
      <div className="text-center">
        <Header />
          <CurrentChallengesList data={this.state.data} />
        < Footer />
      </div>
    );
  }
});
module.exports = ParticipatingChallenges;