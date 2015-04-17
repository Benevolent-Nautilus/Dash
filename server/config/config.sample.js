'use strict';

//sample env file.
//make a copy of this file and name it config.js

var config = {
  facebook: {
    clientID:     'clientID',
    clientSecret: 'clientSecret',
    callbackURL:  'callbackURL' 
  },
  fitbit: {
    requestTokenURL: 'requestTokenURL',
    accessTokenURL: 'accessTokenURL',
    userAuthorizationURL: 'userAuthorizationURL',
    consumerKey: 'consumerKey',
    consumerSecret: 'consumerSecret',
    callbackURL: 'callbackURL'
  },
  jawbone: {
    authorizationURL: 'authorizationURL',
    tokenURL: 'tokenURL',
    clientID: 'clientID',
    clientSecret: 'clientSecret',
    callbackURL: 'callbackURL',
  },
  secrets: {
    session: 'session'
  }
};

module.exports = config;

