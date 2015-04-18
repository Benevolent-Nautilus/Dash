// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var ChallengeStat = React.createClass({
  render: function(){
    var props = this.props.data
    for(var i = 0; i < props.length; i++){

    }
    return (
      <div className= "challenge-stat">
        <div> Challenge Name: {props[0].name} </div>
        <div> Current Progress: {props[0].currentSteps} / {props[0].totalSteps} steps</div>
        <div>
          <div> Participating Friends: {this.props.data[0].friends[0].name}</div>
        </div>
      </div>
      );
  }

})

module.exports = ChallengeStat;