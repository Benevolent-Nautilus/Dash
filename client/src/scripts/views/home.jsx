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
    var width = $(window).width();
    if(width < 1024) { 
      window.location.href="#/login";
    }
    $('#app').css('background-color', '#78c9fd');
    return {};
  },

  componentDidMount: function() {
    $('#iphone-container').html('<object data="/#/login" />');
  },

  render: function() {
    return (
      <div className="text-center">
        <div className="fadeInUp animated text-center">
          <img src="../../images/dash-splash.png" width="1200px" height="737px" className="splash-image" />
        </div>
        <div className="row tech-stack-row">
          <span className="tech-stack">
            <h4>Dash.io is built using state-of-the-art technologies such as:</h4>
          </span>
          <span className="tech-stack">
            <img src="../../images/tech-table_01.png" width="319" height="81" alt="" />
            <img src="../../images/tech-table_02.png" width="89" height="81" alt="" />
            <img src="../../images/tech-table_03.png" width="207" height="81" alt="" />
            <img src="../../images/tech-table_04.png" width="173" height="81" alt="" />
            <img src="../../images/tech-table_05.png" width="224" height="81" alt="" />
          </span>
          <span className="tech-stack">
            <img src="../../images/tech-table_06.png" width="223" height="87" alt="" />
            <img src="../../images/tech-table_07.png" width="96" height="87" alt="" />
            <img src="../../images/tech-table_08.png" width="89" height="87" alt="" />
            <img src="../../images/tech-table_09.png" width="195" height="87" alt="" />
            <img src="../../images/tech-table_10.png" width="199" height="87" alt="" />
            <img src="../../images/tech-table_11.png" width="198" height="87" alt="" />
          </span>
        </div>
      </div>
    );
  }
});

module.exports = Home;