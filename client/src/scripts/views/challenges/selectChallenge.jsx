// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Stores
var ChallengesStore = require('../../stores/challengesStore')

// Components
var Spinner = require('../../components/spinner');
var Header = require('../../components/Profile/Header');
var Footer = require('../../components/Profile/Footer');
var ChallengeList = require('../../components/Challenges/ChallengeList');

var JoinChallenge = React.createClass({
  mixins: [Reflux.connect(ChallengesStore, 'data')],

  getInitialState: function() {
    return { 
      data: ChallengesStore.getAllChallenges()
    };
  },
  
  componentDidMount: function(){
  },

  render: function() {
    return (
      <div className="post-info inner full-height">
        <Header />
          < ChallengeList data= { this.state.data } /> 
        < Footer />
      </div>
    );
  }
});

module.exports = JoinChallenge;

