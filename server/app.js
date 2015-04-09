/**
@fileOverview 

<p>Server initial file/p>

<p>Open up a port to listen for requests</p>

*/
var express = require('express');
var app = express();
var port = 8080;

app.listen(port);
console.log('Listening to port: ', port);
