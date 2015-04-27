'use strict';
var $ = jQuery;
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var Friend = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  componentDidMount: function() {
      // store the node on the `this.node` so we can access elsewhere
  },

  componentWillUnmount: function() {
    // this will remove the listener.
    // will always stay up-to-date by listening to the Store's change event
    // console.log('unmount', $(this));
  },

  render: function() {
    var profileImage = { 
              "background": 'url(' + this.props.img + ')',
              "backgroundSize": "100%"
            };
    return (
        <a href="javascript:;"  className="list-group-item" key={this.props.key}>
          <div className="row fadeInDown animated" key={this.props.uid}>
            <div className="col-xs-1 col-sm-1">
              <div className="circle" style={profileImage}>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4">
              <span className="approval-text">{this.props.name}</span>
            </div>
            <div className="col-xs-12 col-sm-7">
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