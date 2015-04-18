'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var Friend = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  render: function() {
    return (
      <li> 
        <div className="container">
          <div className="row">
            <a href="#/dashboard">
              <div className="col-xs-6 col-sm-6">
                {this.props.name}
              </div>
              <div className="col-xs-3 col-sm-3">
                {this.props.device} 
              </div>
            </a>
            <a href="#/settings">
              <div className="col-xs-3 col-sm-3">
                {this.props.key}
              </div>
            </a>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Friend;