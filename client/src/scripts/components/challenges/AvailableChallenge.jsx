// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var ChallengeStore = require('../../stores/challengeStore')


var AvailableChallenge = React.createClass({
  render: function(){
    console.log(this.onAdd);
    return (
        <li > {this.props.data.name} | {this.props.data.totalSteps} 
          <button onClick={this.onAdd}> select challenge </button>                  
        </li>
    );
  }

})

module.exports = AvailableChallenge;



// // var selectChallenge = function(e){
//   e.preventDefault();
//   console.log('clicked on new challenge!')
// }