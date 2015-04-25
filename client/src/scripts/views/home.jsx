/**
@fileOverview 
<p>Home.js - The main point of interest for home</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
var $ = jQuery;
// Reflux
var Reflux = require('reflux');
// Actions
var actions = require('../actions/actions');
// Stores
// Components
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

  componentDidMount: function() {
    var width = $( window ).width();
    var height = $( window ).height();
    $('#iphone-container').html('<object data="/#/login" />');
    $('.full-page').css({'width': width +'px', 'height': height +'px' });
  },

  render: function() {
    return (
      <div className="full-page">
        <div className="full-width">
          <div id="iphone">
            <div id="iphone-container">
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;