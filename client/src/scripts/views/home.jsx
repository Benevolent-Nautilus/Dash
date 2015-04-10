'use strict';

var Reflux = require('reflux');

// actions
var actions = require('../actions/actions');

// stores
var loginStore = require('../stores/loginStore');

// components
var Banner = require('../components/frontpage/banner');
var Info = require('../components/frontpage/info');
var Spinner = require('../components/spinner');

var Home = React.createClass({

    mixins: [
    ],

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <div class="full-width">
              <Banner />
              <Info />
            </div>
        );
    }

});

module.exports = Home;