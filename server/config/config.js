'use strict';

//sample env file.
//make a copy of this file and name it config.js
var localEnv = require('./local.env');

var config = {
  facebook: {
    clientID:     process.env.FACEBOOK_ID || localEnv.facebook.clientID,
    clientSecret: process.env.FACEBOOK_SECRET|| localEnv.facebook.clientSecret,
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },
  fitbit: {
    requestTokenURL: 'https://api.fitbit.com/oauth/request_token',
    accessTokenURL: 'https://api.fitbit.com/oauth/access_token',
    userAuthorizationURL: 'https://www.fitbit.com/oauth/authorize',
    consumerKey: process.env.FITBIT_KEY|| localEnv.fitbit.consumerSecret,
    consumerSecret: process.env.FITBIT_SECRET|| localEnv.fitbit.consumerSecret,
    callbackURL: (process.env.DOMAIN || '') + '/auth/fitbit/callback',
    apiReq: {
      url: 'https://api.fitbit.com/1/user/-/',
    }
  },
  jawbone: {
    authorizationURL: 'https://jawbone.com/auth/oauth2/auth',
    tokenURL: 'https://jawbone.com/auth/oauth2/token',
    clientID: process.env.JAWBONE_ID|| localEnv.jawbone.clientID,
    clientSecret: process.env.JAWBONE_SECRET||localEnv.jawbone.clientSecret,
    callbackURL: (process.env.DOMAIN || '') + '/auth/jawbone/callback',
  },
  secrets: {
    session: process.env.SECRETS_SESSION || localEnv.secrets.session
  }
};

module.exports = config;

