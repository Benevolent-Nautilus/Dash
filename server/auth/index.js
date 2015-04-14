'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../db/user/user.model');
var router = express.Router();

// Passport Configuration
require('./facebook/passport').setup(User, config);

// Auth route configuration
router.use('/facebook', require('./facebook'));

module.exports = router;
