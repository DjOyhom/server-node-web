var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/lagaferia', function (req, res) {
    res.sendFile(__dirname + "/lagaferia/index.html");
});

app.get('/soy', function (req, res) {
  res.sendFile(__dirname + "/soy/index.html");
});

app.get('/lupenni', function (req, res) {
    res.sendFile(__dirname + "/lupenni/index.html");
});

app.get('/lupenni-cel', function (req, res) {
  res.sendFile(__dirname + "/lupenni-cel/index.html");
});

app.get('/victoria', function (req, res) {
    res.sendFile(__dirname + "/victoria/index.html");
});

app.get('/Invitacion', function (req, res) {
  res.sendFile(__dirname + "/Invitacion/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

  