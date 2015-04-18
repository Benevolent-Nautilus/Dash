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
    return (
        <div className="container">
          <div className="row">
            <LatestCompetition data= { (this.props.competitions[0]) ? this.props.competitions[0] : 'Add Competition' } />
          </div>
        </div>
    );
  }
});

module.exports = Competition;