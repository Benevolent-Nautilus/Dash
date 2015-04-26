//api route for db related to challenge
//author: Dennis Yang
'use strict';

var express = require('express');
var router = express.Router();
var User = require('../user/user.model');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var controller = require('./controller');


router
  .get('/', controller.getChallenges)
  .get('/:id', controller.getSingleChallenge)
  .post('/new', controller.postNewChallenge)
  
module.exports = router;
