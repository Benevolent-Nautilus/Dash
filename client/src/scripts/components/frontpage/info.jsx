'use strict';

var Reflux = require('reflux');

// actions
var actions = require('../../actions/actions');

// components
var Spinner = require('../../components/spinner');

var Info = React.createClass({

    mixins: [

    ],

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <div>
              Info Placed Here
            </div>
        );
    }

});

module.exports = Info;