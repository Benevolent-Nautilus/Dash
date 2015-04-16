// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');

// Components
var Spinner = require('../../components/spinner');
var Dashboard = require('../../components/Profile/Dashboard');
var Footer = require('../../components/Profile/Footer');

var NewChallenges = React.createClass({
  mixins: [],

  render: function() {
    console.log("new challenges");
    return (
      <div className="text-center">
        <button type="submit" className="btn btn-default fitbit-button" aria-label="Fitbit" onClick={ this.connectFitbit }>
          { <span className="fitbit-logo" aria-hidden="true"></span> }
        </button>
        < Footer />
        
      </div>
    );
  }
});

module.exports = NewChallenges;