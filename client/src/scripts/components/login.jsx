'use strict';

var Reflux = require('reflux');

var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('./spinner');
var Facebook   = require('../components/social/facebook');

var Login = React.createClass({

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
                 <h1>Sign Up With Facebook</h1>
                     <Facebook />
               </div>
            </div>
        );
    }

});

module.exports = Login;