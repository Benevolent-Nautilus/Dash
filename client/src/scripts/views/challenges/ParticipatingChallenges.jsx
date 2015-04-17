// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var Spinner = require('../../components/spinner');
var ChallengeStat = require('../../components/challenges/ChallengeStat');
var Footer = require('../../components/Profile/Footer');



var ParticipatingChallenges = React.createClass({

  render: function() {
    console.log("hello");
    return (
      <div className="text-center">
         < ChallengeStat />
        < Footer />
        
      </div>
    );
  }
});

module.exports = ParticipatingChallenges;