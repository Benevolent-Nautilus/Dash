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
      <li> {this.props.data[0].name} | {this.props.data[0].currentSteps} / {this.props.data[0].totoalSteps}
       <div>{this.props.data[0].friends[0].name}</div>
      </li>
      );
  }

})

module.exports = ChallengeStat;