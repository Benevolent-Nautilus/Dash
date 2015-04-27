// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Store
var ChallengesStore = require('../../stores/challengesStore');
// Components
var Spinner = require('../../components/spinner');
var Header = require('../../components/profile/header');
var Footer = require('../../components/profile/footer');
var CurrentChallengeHeader = require('../../components/challenges/currentChallengeHeader');
var Progress = require('../../components/challenges/currentChallengeProgress');
var ChallengeTable = require('../../components/challenges/challengeTable');


var SingleCurrentChallenge = React.createClass({
  mixins: [ Router.State ],

  getInitialState: function() {
    var id = this.getParams().challengeid;
    ChallengesStore.fetchSingleChallenge(id);
    return { 
        data: ChallengesStore.getSingleChallenge()
    };
  }, 

  render: function() {
    console.log(this.state.data);
    return (
      <div className="page-extend">
        <Header />
            < CurrentChallengeHeader name={ this.state.data.name } img="http://www.dash.fitness/images/challenge.png" />
            < Progress goal={ this.state.data.goal } />
            < ChallengeTable participants={ this.state.data.participants } />
        < Footer />
      </div>
    );
  }
});
module.exports = SingleCurrentChallenge;