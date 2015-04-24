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
  getInitialState: function() {
    this.friends = [];
    return {
      id: this.props.id,
      friends: []
    };
  },
  // When there is a change in the store, the method recieves an updated note list and changes the state. 
  onChange: function(friends) {
    this.setState({
    });
  },

  requestFriendRequest: function(email){
    // console.log(email);
    actions.sendFriendRequest(email);
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
    var that = this;
    var $row = $('.search-tr');
    $(".reactable-filter-input").after("<button class='add-friend btn btn-primary btn-lg outline full-width top-bottom-margin'>Send Friend Request</button>");
    // console.log('input field', $inputField);
    var $addFriend = $(".add-friend");
    $('.reactable-filter-input').keyup(function(){
      if($row.length === 0){
        $addFriend.fadeIn(500);
      } else {
        $addFriend.fadeOut(500);
      }
    });
    $addFriend.click(function() {
      var $friendValue = $(".reactable-filter-input").val();
      that.requestFriendRequest($friendValue);
    });
    $row.click(function() {
      var uid = $(this).attr('id');
      $(this).css('background-color', '#C0C0C0');
      this.friends.push(uid);
    });
  },

  consoleButton: function() {
    console.log(this.state);
  },

  render: function() {
    return (
      <div className="table-responsive search-friends table-hover" >
        <Table className="table table-hover" id="table" filterable={['Name', 'Device']}>
            {this.props.data.map(function(friend){
              return (
                <Tr className="search-tr" id={friend.uid}>
                  <Td column="">
                    <div className="profile-circle">
                    </div>
                  </Td>
                  <Td column="Name" data={friend.name}>
                  </Td>
                  <Td column="Device" data={friend.device}>
                  </Td>
                </Tr>
              )
            })}
        </Table>
        <button onClick = {this.consoleButton} > Next </button>
      </div>
    );
  }
});

module.exports = InviteFriends;