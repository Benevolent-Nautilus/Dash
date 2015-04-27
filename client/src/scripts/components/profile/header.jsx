'use strict';
// Reflux
var Reflux = require('reflux');
// Router
var Router = require('react-router');
// Actions
var actions = require('../../actions/actions');

var Footer = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="row">
                <a className="navbar-brand" href="#/dashboard">
                  <img src="../images/logo.png" />
                </a>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#/dashboard">Dashboard
                  </a>
                </li>
                <li><a href="#/login">Login</a></li>
                <li><a href="#/challenges">Competition</a></li>
                <li><a href="#/friends">Friends</a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
});

module.exports = Footer;