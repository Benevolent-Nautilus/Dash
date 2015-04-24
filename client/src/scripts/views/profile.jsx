/**
@fileOverview 
<p>Profile.js - This will be where the application will load profile for curated views</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
// var profileStore = require('../stores/profileStore');
// var userStore = require('../stores/userStore');
// Components
var Spinner = require('../components/spinner');
var Dashboard = require('../components/profile/dashboard');
var Header = require('../components/profile/header');
var Footer = require('../components/profile/footer');

var profileStore = require('../stores/profileStore');

// Profile Class
var Profile = React.createClass({
  mixins: [
    require('react-router').Navigation,
    Reflux.listenTo(profileStore, 'onLoaded')
  ],

  // When the View loads up, get the data from the Store
  getInitialState: function() {
    return {
      profileData: profileStore.createDashboard(),
      isLoading: true
    };
  },

  // When there is a change in the store, the method recieves an updated note list and changes the state. 
  onChange: function(stats) {
    this.setState({
      profileData: stats // state changes
    });
  },

  componentDidMount: function() {
    // when the component mounts we start listening to profileStore's 
    // change event.  This is broadcast whenever there is a mutation in the notes lists
    // the following line registers as a listener.
    this.unsubscribe = profileStore.listen(this.onChange);
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
         < Dashboard data= {this.state.profileData} />
         < Footer />
        </div>
    );
  }
});

module.exports = Profile;