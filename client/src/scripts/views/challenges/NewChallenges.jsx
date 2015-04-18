// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var Spinner = require('../../components/spinner');
var Footer = require('../../components/Profile/Footer');
var AvailableChallenges = require('../../components/Challenges/AvailableChallenges');

var challengeList = [
                  {
                    name: 'Everest',
                    totalSteps: 100000
                  }, 
                  {
                    name: "Frodo's Journey to Mount Doom",
                    totalSteps: 17000000
                  }, 
                  {
                    name: "Great Wall of China",
                    totalSteps: 1800000
                  }
    ] 


var NewChallenges = React.createClass({
  mixins: [],

  getInitialState: function() {
    return { data: challengeList };
  }, 

  render: function() {
    console.log("new challenges");
    return (
      <li className="text-center" >
        < AvailableChallenges data= { this.state.data } />
        < Footer />
        
      </li>
    );
  }
});

module.exports = NewChallenges;