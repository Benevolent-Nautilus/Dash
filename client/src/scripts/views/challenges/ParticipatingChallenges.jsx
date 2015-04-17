// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var Spinner = require('../../components/spinner');
var Dashboard = require('../../components/Profile/Dashboard');
var Footer = require('../../components/Profile/Footer');


var challenges = ["Frodo's Journey to Mt Doom", 15000000, 17790000] 

var ParticipatingChallenges = React.createClass({
  getInitialState: function() {
    return {
      ChartData: {
        challenge_Name : challenges[0],
        steps_completed: challenges[1],
        challenges_goal: challenges[2],
      }
    }
  },

  render: function() {
    console.log("hello");
    return (
      <div className="text-center">
        < Dashboard />
        < Footer />
        
      </div>
    );
  }
});

module.exports = ParticipatingChallenges;