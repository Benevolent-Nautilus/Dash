'use strict';

var $ = jQuery;
var Reflux = require('reflux');

// used to create email hash for gravatar
var hash = require('crypto').createHash('md5');

var actions = Reflux.createActions({
    // user actions
    'login': {},
    'logout': { asyncResult: true },
    'register': {},
    'createProfile': {},
    'updateProfile': {},
    // error actions
    'loginError': {},
    'competitionError': {},
    // ui actions
    'showOverlay': {},
    'goToCompetition': {}
});


/* User Actions
===============================*/

actions.login.listen(function(user, username) {
    // username only provided when registering a new user
    // used to create a user profile
    ref.authWithPassword(user, function(error, authData) {
        if (error !== null) {
            actions.loginError(error.code);
        } else {
            // sucessful login
            var userId = authData.uid;
            if (username) {
                // new user logging in for first time
                var email = authData.password.email;
                actions.createProfile(userId, username, email);
            } else {
                // returning user
                usersRef.child(userId).on('value', function(profile) {
                    actions.updateProfile(userId, profile.val());
                });
            }
        } 
    });
});

actions.logout.listen(function() {
    // because of firebase API, callback must
    // be declared via ref.onAuth() (see above)
    ref.unauth();
});

actions.register.listen(function(username, loginData) {

    function checkForUsername(name) {
        // checks if username is taken
        var defer = $.Deferred();
        usersRef.orderByChild('username').equalTo(name).once('value', function(user) {
            defer.resolve(!!user.val());
        });
        return defer.promise();
    }

    if (!username) {
        // no username provided
        actions.loginError('NO_USERNAME');
    } else {
        // check if username is already taken
        checkForUsername(username).then(function(usernameTaken) {
            if (usernameTaken) {
                actions.loginError('USERNAME_TAKEN');
            } else {
                ref.createUser(loginData, function(error) {
                    if (error) {
                        // error during user creation
                        actions.loginError(error.code);
                    } else {
                        // user successfully created
                        actions.login(loginData, username);
                    }
                });
            }
        });
    }
});

actions.createProfile.listen(function(uid, username, email) {
    var md5hash = hash.update(email).digest('hex');
    var profile = {
        username: username,
        md5hash: md5hash,
        upvoted: {}
    };
    usersRef.child(uid).set(profile, function(error) {
        if (error === null) {
            // user profile successfully created
            actions.updateProfile(uid, profile);
        }
    });
});


module.exports = actions;