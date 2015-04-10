'use strict';

var Reflux = require('reflux');

// actions
var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Spinner = require('../components/spinner');
var Jawbone = require('../components/devices/jawbone');
var Fitbit = require('../components/devices/fitbit');

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
                  <h1>Connect Your Device</h1>
                        <Fitbit />
                        <Jawbone />
                </div>
            </div>
        );
    }

});

module.exports = Register;