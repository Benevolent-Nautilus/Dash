'use strict';

var $ = jQuery;
var Reflux = require('reflux');

var actions = Reflux.createActions([
    'createDashboard',
    'updateDashboard'
  ]);


module.exports = actions;