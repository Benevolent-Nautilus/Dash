'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
//Components
var LatestCompetition = require('./Competitions/Competition.jsx');

var Competition = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var firstCompetition = this.props.competitions[0];
    return (
          <div className="row">
            <LatestCompetition data= { (firstCompetition) ? firstCompetition : 'Add Competition' } />
          </div>
    );
  }
});

module.exports = Competition;