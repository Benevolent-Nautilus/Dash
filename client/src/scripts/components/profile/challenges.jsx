'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
//Components
var ChallengeTracker = require('./tracker/challengeTracker');

var Challenges = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var firstCompetition = this.props.competitions[0];
    return (
          <div className="row">
            <ChallengeTracker data= { (firstCompetition) ? firstCompetition : 'Add Competition' } />
          </div>
    );
  }
});

module.exports = Challenges;