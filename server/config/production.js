'use strict';

//local environment variable

var productionEnv = {
  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET
  },
  fitbit: {
    consumerKey: process.env.FITBIT_KEY,
    consumerSecret: process.env.FITBIT_SECRET
  },
  jawbone: {
    clientID: process.env.JAWBONE_ID,
    clientSecret: process.env.JAWBONE_SECRET
  },
  secrets: {
    session: process.env.SECRETS_SESSION
  }
};

module.exports = productionEnv;
