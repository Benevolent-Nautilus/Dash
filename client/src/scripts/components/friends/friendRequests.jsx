'use strict';
var $ = jQuery;
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');
//Components
var FriendRequest = require('./friendRequest')


var Competition = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  getInitialState: function() {
    return { mounted: false };
  },
  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  render: function() {
    var amountOfChallenges = this.props.data.length;
    var Requests = (this.state.mounted) ? 
                      this.props.data.map(function(request) {
                        return <FriendRequest key={request._id} name={request.name} uid={request._id} img={request.profileImage} />
                      }) :null;
    return (
        <div className="row">
          <div className="list-group panel">
            <a href="#demo3" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">
            <span className=" bounceIn animated">{ amountOfChallenges } New Friend Requests!</span></a>
            <div className="collapse" id="demo3">
                { Requests }
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Competition;