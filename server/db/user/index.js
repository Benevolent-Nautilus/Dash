//route for db related to user
//author: Dennis Yang
'use strict';

var express = require('express');
var router = express.Router();
var User = require('./user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var controller = require('./controller');


router
  .get('/', controller.getUserProfile)
  .get('/friends', controller.getFriendProfile)
  .post('/addfriend', controller.postAddFriend)

module.exports = router;
