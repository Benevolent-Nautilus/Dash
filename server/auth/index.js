'use strict';

var express = require('express');

var router = express.Router();

router.use('/facebook', require('./facebook'));

module.exports = router;