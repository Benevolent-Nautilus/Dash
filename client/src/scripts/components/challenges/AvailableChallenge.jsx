// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

var selectChallenge = function(e){
  e.preventDefault();
  console.log('clicked on new challenge!')
}

var AvailableChallenge = React.createClass({
  render: function(){
    console.log(this.props);
    return (
        <li onClick={ this.selectChallenge }> {this.props.data.name} | {this.props.data.totalSteps} 
        </li>
    );
  }

})

module.exports = AvailableChallenge;