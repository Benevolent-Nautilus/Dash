'use strict';

var Reflux = require('reflux');

// actions
var actions = require('../../actions/actions');

// components
var Spinner = require('../../components/spinner');

var Banner = React.createClass({

    mixins: [

    ],

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <div>
              Banner Placed Here
            </div>
        );
    }

});

module.exports = Banner;