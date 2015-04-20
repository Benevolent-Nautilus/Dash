/**
*Main application routes
*/

'use strict';

module.exports = function(app) {
  // routes used below
  app.use('/api/user', require('./db/user'));
  app.use('/api/challenge', require('./db/challenge'))
  app.use('/auth', require('./auth'));

  app.get('/*', function(req, res) {
      res.redirect('/');
    });
};
