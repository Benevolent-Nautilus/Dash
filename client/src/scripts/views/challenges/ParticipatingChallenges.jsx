// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var Spinner = require('../../components/spinner');
var ChallengeStats = require('../../components/challenges/ChallengeStats');
var Footer = require('../../components/Profile/Footer');

var involvedChallenges = [
  {
    name: 'Everest',
    totalSteps: 100000,
    currentSteps: 82009,
    friends: [
      {name: 'Dennis',
       currentSteps: 79004
      },
      {name: 'Jason',
      currentSteps: 85000
      }
    ],
  },
  {
    name: "Frodo's Journey to Mount Doom",
    totalSteps: 17000000,
    currentSteps: 6282009,
    friends: [
      {name: 'Dennis',
       currentSteps: 5679004
      },
      {name: 'Jason',
      currentSteps: 689902
      }

    ]
  }
]


var ParticipatingChallenges = React.createClass({
  getInitialState: function() {
    return { data: involvedChallenges };
  }, 

  render: function() {
    console.log("Participating Challenges", this.state.data);
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