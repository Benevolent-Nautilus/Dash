
// Router
var Router = require('react-router');
// Components
var Challenge = require('./Challenge');

var AvailableChallenges = React.createClass({
  render: function() {
    return (
        <ul>
          {this.props.data.map(function(challenge) {
            return <Challenge key={challenge.id} data= { challenge } /> 
          })}
        </ul>
    );
  }
});


module.exports = AvailableChallenges;
