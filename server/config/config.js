'use strict';

//sample env file.
//make a copy of this file and name it config.js
var varPath = process.env.VAR_PATH || 'local.env';
var configVar = require('./'+ varPath);

var config = {
  facebook: {
    clientID:     configVar.facebook.clientID,
    clientSecret: configVar.facebook.clientSecret,
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },
  fitbit: {
    requestTokenURL: 'https://api.fitbit.com/oauth/request_token',
    accessTokenURL: 'https://api.fitbit.com/oauth/access_token',
    userAuthorizationURL: 'https://www.fitbit.com/oauth/authorize',
    consumerKey: configVar.fitbit.consumerKey,
    consumerSecret: configVar.fitbit.consumerSecret,
    callbackURL: (process.env.DOMAIN || '') + '/auth/fitbit/callback',
    apiReq: {
      url: 'https://api.fitbit.com/1/user/-/',
    }
  },
  jawbone: {
    authorizationURL: 'https://jawbone.com/auth/oauth2/auth',
    tokenURL: 'https://jawbone.com/auth/oauth2/token',
    clientID: configVar.jawbone.clientID,
    clientSecret: configVar.jawbone.clientSecret,
    callbackURL: (process.env.DOMAIN || '') + '/auth/jawbone/callback',
  },
  secrets: {
    session: configVar.secrets.session
  }
};

module.exports = config;
