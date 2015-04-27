'use strict';
var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../../actions/actions');
var Reactable = require('reactable'),
    Table = Reactable.Table,
    Tr = Reactable.Tr,
    Td = Reactable.Td;


var InviteFriends = React.createClass({
  
  mixins: [
    require('react-router').Navigation,
    require('../../mixins/formatNumber')
  ],
  // When there is a change in the store, the method recieves an updated note list and changes the state. 

  loadFriend: function(uid) {
    console.log(uid);
    window.location.href = "#/friend/" + uid;
  },

  render: function() {
    var rowCount = 1;
    var that = this;
    return (
      <div className="table-responsive search-friends table-hover" >
        <Table className="table table-hover fadeInUp animated" id="table">
            {this.props.participants.map(function(friend){
              var name = friend._id.name.first + " " + friend._id.name.last;
              var profileImage = { 
                        "background": 'url(' + friend._id.profileImage + ')',
                        "backgroundSize": "100%"
                      };
              var leaderBoardPhoto = (
                        <div className="leader-board-photo">
                          <div className="position">
                            <span>{ rowCount }</span>
                          </div>
                          <div className="profile-circle" style={ profileImage } >
                          </div>
                        </div>
                      );
              var userDetails = (
                      <div className="user-details">
                        <span>
                          { name }
                        </span>
                        <span className="device">
                          { friend._id.fitnessDevice.deviceType }
                        </span>
                      </div>
                      );
              var userSteps = that.formatNumber(friend.currentSteps);
              rowCount++;
              return (
                <Tr className="search-tr fadeInDown animated" key={friend._id._id} onClick={ that.loadFriend.bind(that, friend._id._id) }>
                  <Td column="">
                    { leaderBoardPhoto }
                  </Td>
                  <Td column="Name">
                      { userDetails }
                  </Td>
                  <Td column="Steps">
                    <span className="friends-steps">
                      { userSteps }
                    </span>
                  </Td>
                </Tr>
              )
            })}
        </Table>
      </div>
    );
  }
});

module.exports = InviteFriends;