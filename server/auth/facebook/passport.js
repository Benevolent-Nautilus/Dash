var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var facebookAuth = function (User, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
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
            email: profile.emails[0].value,
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
          return done(err, user);
        }
      })
    }
  ));
};

module.exports = facebookAuth;
