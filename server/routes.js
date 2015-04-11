/**
*Main application routes
*/

'use strict';

module.exports = function(app) {
 
  // routes used below
  app.route('/*')
    .get(function(req, res) {
      res.send('Hello World!');
    });
};