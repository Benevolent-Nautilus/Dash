/**
@fileOverview 

<p>Server initial file/p>

<p>Open up a port to listen for requests</p>

*/
var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

//Setting views to correct directory
app.set('views', path.join(__dirname, '../client/dist/'));
app.set('view engine', 'ejs');

//Serving mainpage
app.use(express.static(path.join(__dirname, '../client/dist')));

//Using ejs as template engine
app.engine('html', require('ejs').renderFile);

app.listen(port);
console.log('Listening on port: ', port);
