// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var ParticipatingChallenges = React.createClass({
  mixins: [],

  render: function() {
    console.log("hello");
    return (
      <div className="text-center">
        <button type="submit" className="btn btn-default fitbit-button" aria-label="Fitbit" onClick={ this.connectFitbit }>
          { <span className="fitbit-logo" aria-hidden="true"></span> }
        </button>
        
      </div>
    );
  }
});

module.exports = ParticipatingChallenges;