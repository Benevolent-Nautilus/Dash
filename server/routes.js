/**
*Main application routes
*/

'use strict';

module.exports = function(app) {
  // routes used below
  app.use('./auth', require('./auth'));

  app.get('/*', function(req, res) {
      res.type('.html').sendFile('./client/src/index.html');
    });
};
