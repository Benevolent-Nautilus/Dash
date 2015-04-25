'use strict';
// Required components
var Reflux = require('reflux');
var actions = require('../actions/actions');

// Create login store in Reflux
var loginStore = Reflux.createStore({

    listenables: actions,

// Initialize
    init: function() {
        this.message = '';
    },
// Set up for user authentication
// (currently not being called-- using Facebook authentication through Passport)
    loginError: function(errorCode) {
        var message;
        switch (errorCode) {
            case 'INVALID_EMAIL':
                message = 'Invalid email address.'; break;
            case 'INVALID_PASSWORD':
                message = 'Invalid password.'; break;
            case 'INVALID_USER':
                message = 'User doesn\'t exist.'; break;
            case 'NO_USERNAME':
                message = 'You must enter a username.'; break;
            case 'EMAIL_TAKEN':
                message = 'That email is taken.'; break;
            case 'USERNAME_TAKEN':
                message = 'That username is taken.'; break;
            default:
                message = 'Something went wrong.';
        }
        this.trigger(message);
    }

});

module.exports = loginStore;


