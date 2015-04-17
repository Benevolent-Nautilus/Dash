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
      <li> {props[0].name} | {props[0].currentSteps} / {props[0].totalSteps}
       <div className="challenge-stat">{this.props.data[0].friends[0].name}</div>
      </li>
      );
  }

})

module.exports = ChallengeStat;