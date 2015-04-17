// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var ChallengeStat = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <li> {this.props.data.name} | {this.props.data.totalSteps} 
      </li>
      );
  }

})

module.exports = ChallengeStat;