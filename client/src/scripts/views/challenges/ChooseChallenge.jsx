// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var ChallengeStore = require('../../stores/challengeStore')

// Components
var Spinner = require('../../components/spinner');
var Footer = require('../../components/Profile/Footer');
var AvailableChallenges = require('../../components/Challenges/AvailableChallenges');

var NewChallenges = React.createClass({
  mixins: [Reflux.connect(ChallengeStore, 'data')],

  getInitialState: function() {
    return { data: [{}] };
  },
  
  componentDidMount: function(){
    ChallengeStore.refresh();
  },

  render: function() {
    console.log("data", this.state.data);
    return (
      <li className="text-center" >
        < AvailableChallenges data= { this.state.data } /> 
        < Footer />
      </li>
    );
  }
});

module.exports = NewChallenges;