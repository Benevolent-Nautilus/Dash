
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../../actions/actions');
// Router
var Router = require('react-router');
// Stores
// var profileStore = require('../stores/profileStore');
// var userStore = require('../stores/userStore');
// Components
var Spinner = require('../../components/spinner');
var Header = require('../../components/profile/header');
var Footer = require('../../components/profile/footer');
var FriendRequests = require('../../components/friends/friendRequests');
var InviteFriendsTable = require('../../components/friends/inviteFriendsTable');

// Stores
var friendsStore = require('../../stores/friendsStore');
var challengesStore = require('../../stores/challengesStore');

// Profile Class
var Friends = React.createClass({
  
  mixins: [
    require('react-router').Navigation,
    Reflux.listenTo(friendsStore, 'onChange'),
    Router.State
  ],

  // When the View loads up, get the data from the Store
  getInitialState: function() {
    this.id= this.getParams().challengeid;
    return {
      friendsList: friendsStore.getFriendsList(),
      friendRequests: friendsStore.getFriendRequests(),
      isLoading: true
    };
  },

  // When there is a change in the store, the method recieves an updated note list and changes the state. 
  onChange: function() {
    this.setState({
      friendRequests: friendsStore.getFriendRequests(), // state changes
      friendsList: friendsStore.getFriendsList() // state changes
    });
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
    this.unsubscribe = friendsStore.listen(this.onChange);
    // console.log('friends store challenge object', challengesStore.joinChallenge());
  },

  componentWillUnmount: function() {
    // this will remove the listener.
    // will always stay up-to-date by listening to the Store's change event
    this.unsubscribe();
  },

  render: function() {
    return (
      <div className="content full-width">
        < Header />
        < FriendRequests data= {this.state.friendRequests} />
        < InviteFriendsTable id={this.id} data= {this.state.friendsList} />
        < Footer />
      </div>
    );
  }
});

module.exports = Friends;