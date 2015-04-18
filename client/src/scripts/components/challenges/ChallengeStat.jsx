// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var ChallengeStat = React.createClass({
  render: function(){
    var props = this.props.data
    console.log(props)
  
    return (
      <div className= "challenge-stat">
        <ul>
          <div> Challenge Name: {props.name} </div>
          <div> Current Progress: {props.currentSteps} / {props.totalSteps} steps</div>
          <div>
            <div> Participating Friends: {this.props.data.friends[0].name}</div>
          </div>
        </ul>
      </div>
      );
  }

})

module.exports = ChallengeStat;