//npm install express
var express = require('express');
var app = express();
app.get('/', function (require, res) {
    res.send('Hello i m express');
})
var server = app.listen(8080, function ()
{
    var host = server.address().address;
    var posrt = server.address().port;
    console.log("hi express invoked");
})