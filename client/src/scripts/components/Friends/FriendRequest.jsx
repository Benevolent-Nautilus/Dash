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

      <a href="javascript:;"  className="list-group-item">
        <div className="row">
          <div className="col-xs-1 col-sm-1">
            <div className="circle">
            </div>
          </div>
          <div className="col-xs-5 col-sm-5">
            <span className="approval-text">{this.props.name}</span>
          </div>
          <div className="col-xs-6 col-sm-6">
            <span className="approval-container" onClick= { actions.vetRequest.bind(this, this.props.uid, true) }>
              <div className="approve-button" >
              </div>
              <span className="approval-text">Approve</span>
            </span>
            <span className="denial-button" onClick= { actions.vetRequest.bind(this, this.props.uid, false) }>
              <div className="deny-button">
              </div>
              <span className="approval-text">Deny</span>
            </span>
          </div>
        </div>
      </a>
    );
  }
});

            // {this.props.uid}
module.exports = Friend;