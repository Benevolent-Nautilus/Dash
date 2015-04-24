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
  ],
  // When there is a change in the store, the method recieves an updated note list and changes the state. 

  render: function() {
    var rowCount = 1;
    return (
      <div className="table-responsive search-friends table-hover" >
        <Table className="table table-hover" id="table">
            {this.props.friends.map(function(friend){
              var profileImage = { 
                        "background": 'url(' + friend.img + ')',
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
                          { friend.name }
                        </span>
                        <span className="device">
                          { friend.device }
                        </span>
                      </div>
                      );
              rowCount++;
              return (
                <Tr className="search-tr" key={friend.uid}>
                  <Td column="">
                    { leaderBoardPhoto }
                  </Td>
                  <Td column="Name">
                      { userDetails }
                  </Td>
                  <Td column="Steps">
                    <span className="friends-steps">
                      { friend.steps }
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