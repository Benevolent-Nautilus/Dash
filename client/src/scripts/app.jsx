// app.js - Main page--Dependencies and Routes Injected Here <br />
// author: Jason Chang, Scott Kao, Derek Van Dyke, and Dennis Yang

// <br />
'use strict';

// $ will be used to reference jQuery throughout the React Application <br />
// type: Dependency
var $ = jQuery;

// window.React will load addons.js from the React folder in nodes modules. <br />
// type: Dependency

window.React = require('react/addons');
 
// Use Reflux  for unidirectional data flow architecture for React. <br />
// More info here: https://github.com/spoike/refluxjs <br />
// type: Dependency

var Reflux = require('reflux');

 
// FastClick is a library for eliminating 300ms delay between physical tap and the firing of a click event on a mobile browser. <br />
// More info here: https://github.com/ftlabs/fastclick <br />
// type: Library

var attachFastClick = require('fastclick');

// React Router is a complete routing library for React. <br />
// More info here: https://github.com/rackt/react-router <br />
// type: Library

var Router = require('react-router');

// A RouteHandler renders the handler of the route at the level of the route hierarchy in which it is used. <br />
// More info here: https://github.com/rackt/react-router <br />
// type: Method

var RouteHandler = Router.RouteHandler;

// A Route renders the route at the level of the handler in which it is used. <br />
// More info here: https://github.com/rackt/react-router <br />
// type: Method

var Route = Router.Route;

// A DefaultRoute is active when the parent route's path matches exactly. <br />
// More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/DefaultRoute.md <br />
// type: Method

var DefaultRoute = Router.DefaultRoute;

// A Link renders an <a> tag that links to a route in the application. If you change the path of your route, you don't also have to change your links. <br />
// More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/Link.md <br />
// type: Method


// Transition
var Link = Router.Link;
 
// Part of the reflux architecture, will send out triggers that will be heard throughout the app for update. <br />
// Documentation on Actions: https://facebook.github.io/flux/docs/overview.html  <br />
// type: Actions

var actions = require('./actions/actions');

// Components are the backbone of React, every view should be devided into multiple bits.  <br />
// Attached is 'Home', which is located in the /views folder.  Home has the main landing view. <br />
// type: View

var Home = require('./views/home');

// Attached is 'Login';located in the /components folder. Login will hold the necessary information for users to Login. <br />
// Files are in the components folder mainly due to modulator amongst many views. <br />
// type: Component

var Login = require('./views/login');

// Attached is 'Setup', which is located in the /views folder. Setup will hold a view for users to have new devices. <br />
// type: View

var Connect = require('./views/connect');

// Require Profile View
var Profile = require('./views/profile');

// Require Friends View
var Friends = require('./views/friends');

// Settings
var Settings = require('./views/settings');

var Challenges = require('./views/challenges/challenges');
var CurrentChallenge = require('./views/challenges/currentChallenge');
// Require New Challenges View
var SelectChallenge = require('./views/challenges/selectChallenge');
var InviteFriends = require('./views/challenges/inviteFriends');


// This is the main React Class used to delegate tasks throughout the application.  <br />
// Everything will come here as the main point of interest. <br />
// class React

var Dash = React.createClass({
  mixins: [
      require('react-router').Navigation,
    ],

  getInitialState: function() {
      return {};
  },

  render: function() {
    
    return (
      <div className="wrapper full-height">
        <main id="content" className="full-height inner">
            <RouteHandler />
        </main>
      </div>
    );
  }
});

// Router: This dictates the route and links with the above Router. <br />
// This is the main mutator in rendering Components to the View. <br />
// Note: everything in between hander={' '} is a component to load. <br />

// type: DOM Node
var routes = (
  <Route handler={ Dash }>
    <Route name="Login" path="/login" handler={ Login } />
    <Route name="Connect" path="/connect" handler={ Connect } />
    <Route name="Dashboard" path="/dashboard" handler={ Profile } />
    <Route name="Friends" path="/friends" handler={ Friends } />
    <Route name="Challenges" path="/challenges" handler={ Challenges } />
    <Route name="CurrentChallenge" path="/challenges/:challengeid" handler={ CurrentChallenge } />
    <Route name="SelectChallenge" path="/join-challenge" handler={ SelectChallenge } />
    <Route name="JoinChallenge" path="/join-challenge/:challengeid" handler={ InviteFriends } />
    <Route name="Settings" path="/settings" handler={ Settings } />
    <DefaultRoute name="Home" handler={ Login } />
  </Route>
);


// param {variables}  routes, func(Handler, state) <br />
// returns {object} a Handler/state from the above routes. <br /> 

Router.run(routes, function(Handler, state) {
  React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

// fastclick eliminates 300ms click delay on mobile
attachFastClick(document.body);