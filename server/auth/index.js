'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/config');
var User = require('../db/user/user.model');
var router = express.Router();

// Passport Configuration
require('./facebook/passport').setup(User, config);
require('./fitbit/passport').setup(User, config);
require('./jawbone/passport').setup(User, config);

// Auth route configuration
router.use('/facebook', require('./facebook'));
router.use('/fitbit', require('./fitbit'));
router.use('/jawbone', require('./jawbone'));

module.exports = router;
