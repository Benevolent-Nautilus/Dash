/**
@fileOverview 

<p>Server initial file/p>

<p>Open up a port to listen for requests</p>

*/
var express = require('express');
var session = require('express-session');
var morgan = require('morgan');
var config = require('./config/config');
var path = require('path');
var app = express();
var port = 8080;

require('./db/db.config');

//Setting views to correct directory
app.set('views', path.join(__dirname, '../client/dist/'));
app.set('view engine', 'ejs');

//Serving mainpage
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

//set setting for oauth
app.use(session({
  secret: config.secrets.session,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: new Date(Date.now() + 3600000),
  }
}));

//Using ejs as template engine
app.engine('html', require('ejs').renderFile);

app.listen(port);
console.log('Listening on port: ', port);

require('./routes')(app);
exports = module.exports = app;
