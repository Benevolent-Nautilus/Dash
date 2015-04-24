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
                <div className="col-xs-4 col-sm-4">
                  <button type="button" className="navbar-toggle collapsed visible-md-block hidden-md " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-xs-4 col-sm-4">
                  <a className="navbar-brand" href="#">
                    <img src="../images/logo.png" />
                  </a>
                </div>
                <div className="col-xs-4 col-sm-4">
                </div>
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