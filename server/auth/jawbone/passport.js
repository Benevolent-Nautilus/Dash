'use strict';

var passport = require('passport');
var OAuthStrategy = require('passport-oauth').OAuth2Strategy;
var jwt = require('jsonwebtoken');

var jawboneAuth = {
  setup: function (User, config) {
    passport.use('jawbone', new OAuthStrategy({
        authorizationURL: config.jawbone.authorizationURL,
        tokenURL: config.jawbone.tokenURL,
        clientID: config.jawbone.clientID,
        clientSecret: config.jawbone.clientSecret,
        callbackURL: config.jawbone.callbackURL,
        passReqToCallback: true
      },
      function(req, accessToken, tokenSecret, profile, done) {
        var decode = jwt.verify(JSON.parse(req.cookies.token), config.secrets.session)
        User.findOne({
          '_id': decode.id
        },
        function(err, user) {
          if(err){
            return done(err);
          }
          if(user){
            user.fitnessDevice.deviceType = 'jawbone';
            user.fitnessDevice.token = accessToken;
            user.fitnessDevice.tokenSecret = tokenSecret; 
            user.save(function(err) {
              if(err){
                done(err);
              }
            });
            return done(err, user);
          } else {
            return done(err, user);
          }
        });
      }
    ));
  }
};

module.exports = jawboneAuth;
