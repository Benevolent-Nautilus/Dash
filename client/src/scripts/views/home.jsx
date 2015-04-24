/**
@fileOverview 
<p>Home.js - The main point of interest for home</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
var loginStore = require('../stores/loginStore');

// Components
var Banner = require('../components/frontpage/banner');
var Info = require('../components/frontpage/info');
var Spinner = require('../components/spinner');
/**
@description This is the Home class.  The Routes will basically load this as a view once the user goes to anywhere on the site with the path '/'. 
The reason why is important to note is because of the nested components inside the View. 
- Banner will load its respective view
- Info will load its respective view

All of which is nested inside the file! Remember that everything gets refed to the app.jsx file through the module.exports at the bottom of the page. 
@class Home
*/
var Home = React.createClass({
  mixins: [],

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div class="full-width">
        <Banner />
        <Info />
      </div>
    );
  }
});

module.exports = Home;