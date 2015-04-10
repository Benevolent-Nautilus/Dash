
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
var Reflux   = require('reflux');

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
var Router        = require('react-router');
/** 
A <RouteHandler> renders the handler of the route at the level of the route hierarchy in which it is used.
More info here: https://github.com/rackt/react-router
@type {method}
*/
var RouteHandler  = Router.RouteHandler;
/** 
A Route renders the route at the level of the handler in which it is used.
More info here: https://github.com/rackt/react-router
@type {method}
*/
var Route         = Router.Route;
// var NotFoundRoute = Router.NotFoundRoute;
/** 
A <DefaultRoute> is active when the parent route's path matches exactly.
More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/DefaultRoute.md
@type {method}
*/
var DefaultRoute  = Router.DefaultRoute;
/** 
A <Link> renders an <a> tag that links to a route in the application. If you change the path of your route, you don't also have to change your links.
More info here: https://github.com/rackt/react-router/blob/master/docs/api/components/Link.md
@type {method}
*/
var Link          = Router.Link;
/** 
userStore is linking to file `scripts/stores/userStore`.  Running here is basically like running a model of sorts.  Functionality refering to the user will be documented here.   
Documentation on Stores: https://facebook.github.io/flux/docs/overview.html
@type {store}
*/
// var userStore  = require('./stores/userStore');
/** 
Part of the reflux architecture, will send out emit triggers that will be heard throughout the app to update. 
Documentation on Actions: https://facebook.github.io/flux/docs/overview.html  
@type {actions}
*/
var actions    = require('./actions/actions');
/** 
Posts is linking to file `scripts/views/posts.jsx`. Posts will render the full Posts page
Documentation on Stores: https://facebook.github.io/flux/docs/overview.html
@type {store}
*/
var Home      = require('./views/home');
var Login      = require('./components/login');
var Register   = require('./components/register');
var Setup   = require('./views/setup');

var Dash = React.createClass({

    mixins: [
        require('react-router').Navigation,
    ],

    getInitialState: function() {
        return {
        };
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

var routes = (
    <Route handler={ Dash }>
        <Route name="register" path="/register" handler={ Register } />
        <Route name="login" path="/login" handler={ Login } />
        <Route name="setup" path="/setup" handler={ Setup } />
        <DefaultRoute name="home" handler={ Home } />
    </Route>
);


Router.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

// fastclick eliminates 300ms click delay on mobile
attachFastClick(document.body);