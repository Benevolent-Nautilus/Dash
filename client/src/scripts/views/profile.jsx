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
var Dashboard = require('../components/profile/Dashboard');

// Profile Class
var Profile = React.createClass({
  mixins: [
    require('react-router').Navigation,
    // Reflux.listenTo(profileStore, 'onLoaded')
  ],

  getInitialState: function() {
    return {
      // profileData: profileStore.getDefaultData(),
      isLoading: true
    };
  },

  logout: function(e) {
    e.preventDefault();
    this.transitionTo('home');
  },

  render: function() {
    return (
      <div className="content full-width">
       < Dashboard />
      </div>
    );
  }
});

module.exports = Profile;