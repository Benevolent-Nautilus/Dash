// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var AvailableChallenge = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <li> {this.props.data.name} | {this.props.data.totalSteps} 
      </li>
      );
  }

})

module.exports = AvailableChallenge;