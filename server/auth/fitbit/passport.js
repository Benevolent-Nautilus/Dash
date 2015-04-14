'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-oauth').Strategy;

var facebookAuth = {
  setup: function (User, config) {
    passport.use(new FacebookStrategy({
        requestTokenURL: config.fitbit.requestTokenURL,
        accessTokenURL: config.fitbit.accessTokenURL,
        userAuthorizationURL: config.fitbit.userAuthorizationURL,
        consumerKey: config.fitbit.consumerKey,
        consumerSecret: config.fitbit.consumerSecret,
        callbackURL: config.fitbit.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOne({
          'oauth.facebook.id': profile.id
        },
        function(err, user) {
          if(err){
            return done(err);
          }
          if(!user){
            user = new User({
              name: {
                first:profile.name.familyName,
                last: profile.name.givenName
              },
              emailAddress: profile.emails[0].value,
              username: profile.username,
              oauth:{
                facebook:{
                  id: profile.id
                }
              }
            });
            user.save(function(err) {
              if(err){

                done(err);
                return done(err, user);
              }
            });
          } else {
            console.log('found USER');
            return done(err, user);
          }
        });
      }
    ));
  }
};

module.exports = facebookAuth;
