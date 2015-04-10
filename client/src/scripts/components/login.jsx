'use strict';

var Reflux = require('reflux');

var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('./spinner');

var Login = React.createClass({

    mixins: [

    ],

    getInitialState: function() {
        return {
        };
    },

    loginUser: function(e) {
    },

    render: function() {
        return (
            <div className="post-info inner full-height">
                <div className="text-center">
                  <h1>Login from Here</h1>
                  <button className="button button-primary">Login With Facebook</button>
                </div>
            </div>
        );
    }

});

module.exports = Login;