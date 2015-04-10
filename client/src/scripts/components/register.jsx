'use strict';

var Reflux = require('reflux');

var Router = require('react-router');

// actions
var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('../components/spinner');
var Facebook   = require('../components/social/facebook');

var Register = React.createClass({

    mixins: [
    ],

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <div className="post-info inner full-height">
                <div className="text-center">
                  <h1>Register With Social Media</h1>
                      <Facebook />
                </div>
            </div>
        );
    }

});

module.exports = Register;