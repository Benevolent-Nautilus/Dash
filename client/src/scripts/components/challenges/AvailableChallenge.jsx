// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
var ChallengeStore = require('../../stores/challengeStore')
var SelectButton = require('./selectButton');


var AvailableChallenge = React.createClass({
  render: function(){
    // console.log(this.onAdd);
    return (
        <div > {this.props.data.name} | {this.props.data.totalSteps} 
          <SelectButton />                 
        </div>
    );
  }

})

module.exports = AvailableChallenge;



// // var selectChallenge = function(e){
//   e.preventDefault();
//   console.log('clicked on new challenge!')
// }