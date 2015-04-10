/**
@fileOverview 
<p>App.js - Dependencies and Routes Injected Here</p>
@author Jason Chang, Scott Kao, Derek Van Dyk, Dennis Yang
*/
'use strict';
/** 
$ will be used to reference jQuery throughout the React Application
@type {dependency}
*/
var $ = jQuery;
/** 
window.React will load addons.js from the React folder in nodes_modules. 
@type {dependency}
*/
window.React = require('react/addons');
/** 
Reflux is a simple library fro undirectional dataflow architectured, inspired for React. 
More info here: https://github.com/spoike/refluxjs
@type {dependency}
*/
var Reflux = require('reflux');

/** 
FastClick is a simple, easy-to-use library for eliminating the 300ms delay between physical tap and the firing of a click event on a mobile browser.
More info here: https://github.com/ftlabs/fastclick
@type {library}
*/
var attachFastClick = require('fastclick');

/** 
React Router is a complete routing library for React. 
More info here: https://github.com/rackt/react-router
@type {library}
*/
var Router = require('react-router');
/** 
A <RouteHandler> renders the handler of the route at the level of the route hierarchy in which it is used.
More info here: https://github.com/rackt/react-router
@type {method}
*/
var RouteHandler = Router.RouteHandler;
/** 
A Route renders the route at the level of the handler in which it is used.
More info here: https://github.com/rackt/react-router
@type {method}
*/
var Route = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
/** 
A <DefaultRoute> is active when the parent route's path matches exactly.
More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/DefaultRoute.md
@type {method}
*/
var DefaultRoute = Router.DefaultRoute;
/** 
A <Link> renders an <a> tag that links to a route in the application. If you change the path of your route, you don't also have to change your links.
More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/Link.md
@type {method}
*/
var Link = Router.Link;
/** 
Part of the reflux architecture, will send out emit triggers that will be heard throughout the app to update. 
Documentation on Actions: https://facebook.github.io/flux/docs/overview.html  
@type {actions}
*/
var actions = require('./actions/actions');
/** 
Components are the backbone of React, every view should be devided into multiple bits.  
Attached is 'Home', which is located in the /views folder.  Home has the main landing view. 
@type {View}
*/
var Home = require('./views/home');
/** 
Components are the backbone of React, every view should be devided into multiple bits.  
Attached is 'Login', which is located in the /components folder. Login will hold the necessary information for users to Login. 
Reason for why the files are in the components folder is mainly due to modulator amongst many views. 
@type {Component}
*/
var Login = require('./components/login');
/** 
Components are the backbone of React, every view should be devided into multiple bits.  
Attached is 'Register', which is located in the /components folder. Register will hold the necessary information for users to Login. 
Reason for why the files are in the components folder is mainly due to modulator amongst many views. 
@type {Component}
*/
var Register = require('./components/register');
/** 
Attached is 'Setup', which is located in the /views folder. Setup will hold a view for users to have new devices. 
@type {View}
*/
var Setup = require('./views/setup');
/**
@description This is the main React Class used to delegate tasks throughout our app.  Everything will come here as the main point of interest. 
@class React
*/
var Dash = React.createClass({
  mixins: [
      require('react-router').Navigation
    ],

  getInitialState: function() {
      return {};
  },

  render: function() {
    var cx = React.addons.classSet;

    var headerCx = cx({
      'header': true,
      'panel-open': this.state.showPanel
    });

    return (
      <div className="wrapper full-height">
        <header className={ headerCx }>
          <div className="header-main">
              <div className="float-left">
                  <Link to="home" className="menu-title">Dash.io</Link>
              </div>
              <div className="float-right">
              </div>
          </div>
        </header>
        <main id="content" className="full-height inner">
            <RouteHandler />
        </main>
      </div>
    );
  }
});
/** 
Router.  This dictates the route and links with the above Router.  This is the main mutator in rendering Components to the View. 
Remember that everything in between hander={' '} is a component to load. 

Home is set the default route for the time being

@type {DOM Node}
*/
var routes = (
  <Route handler={ Dash }>
    <Route name="register" path="/register" handler={ Register } />
    <Route name="login" path="/login" handler={ Login } />
    <Route name="setup" path="/setup" handler={ Setup } />
    // Home is set to the default route for the time being. 
    <DefaultRoute name="home" handler={ Home } />
  </Route>
);

/**
@param {variables}  routes, func(Handler, state)
@returns {object} a Handler/state from the above routes. 
*/
Router.run(routes, function(Handler, state) {
  React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

// fastclick eliminates 300ms click delay on mobile
attachFastClick(document.body);