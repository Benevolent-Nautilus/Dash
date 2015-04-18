'use strict';
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
//Components
var Friend = require('./Friend')


var Competition = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
        <ul>
          { this.props.data.map(function(friend) {
            return <Friend key={friend.uid} name={friend.name} device={friend.device} uid={friend.uid}  />
          })}
        </ul>
        </div>
      </div>
    );
  }
});

module.exports = Competition;