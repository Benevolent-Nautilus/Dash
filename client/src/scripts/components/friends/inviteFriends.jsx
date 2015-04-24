'use strict';
var $ = jQuery;
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
//Components
var InviteFriend = require('./inviteFriend')


var Competition = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var amountOfChallenges = this.props.data.length;
    return (
      <div className="container">
        <div className="row">
          <div className="list-group panel">
            <a href="#demo3" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu"> { amountOfChallenges } New Friend Requests!</a>
            <div className="collapse" id="demo3">
              { this.props.data.map(function(request) {
                return <InviteFriend key={request.uid} name={request.name} uid={request.uid}  />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Competition;