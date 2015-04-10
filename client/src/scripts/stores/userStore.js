'use strict';

var $ = jQuery;
var Reflux = require('reflux');
var actions = require('../actions/actions');

var defaultUser = {
    uid: '',
    profile: {
        username: '',
        upvoted: {}
    },
    isLoggedIn: false
};

var userStore = Reflux.createStore({

    listenables: actions
});

module.exports = userStore;















