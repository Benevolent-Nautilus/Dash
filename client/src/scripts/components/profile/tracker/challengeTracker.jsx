'use strict';

// Router
var Router = require('react-router');
// Actions
var actions = require('../../../actions/actions');

var Competitions = React.createClass({
  render: function() {
    return (
        <div className="competition-box tracker">
          <div className="col-xs-4 col-md-4 line-right fadeInUp animated">
            <img src="../../../images/challenge.png" />
            <h4>{this.props.data[0]}</h4>
          </div>
          <div className="col-xs-8 col-md-8 competition-text text-right fadeInUp animated">
            <span className="competition-score">
              <span className="competition-accumulated">{this.props.data[1]}</span> / <span className="competition-total">{this.props.data[2]}</span>
            </span>
            <span>Total Steps</span>
          </div>
        </div>
    );
  }
});

module.exports = Competitions;