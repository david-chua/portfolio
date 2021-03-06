var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');


app.use(logger('dev'));

app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/script'));

app.use(express.static(__dirname + '/files'));

app.get('/design/portfolio', function(req, res){
  res.sendFile(__dirname +'/views'+ '/portfolio_design.html');
});

app.get('/design/unitour', function(req, res){
  res.sendFile(__dirname +'/views'+ '/unitour.html');
});

app.get('/design/aquacycle', function(req, res){
  res.sendFile(__dirname +'/views'+ '/aquacycle.html');
});

app.get('/design', function(req, res){
  res.sendFile(__dirname +'/views'+ '/design.html');
});

app.get('/projects/mobile', function(req, res){
  res.sendFile(__dirname +'/views'+ '/mobile.html');
});

app.get('/projects/mobile/hello_udacity', function(req, res){
  res.sendFile(__dirname +'/views'+ '/hello_udacity.html');
});

app.get('/projects/web', function(req, res){
  res.sendFile(__dirname +'/views'+ '/web.html');
});



app.get('/projects', function(req,res){
  res.sendFile(__dirname + '/views' + '/projects.html');
});

app.get('/resume', function(req,res){
  res.sendFile(__dirname + '/views' + '/resume.html');
});

app.get('/about', function(req,res){
  res.sendFile(__dirname + '/views' + '/about.html');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/views' + '/contact.html');
});

app.get('/success', function(req,res){
  res.sendFile(__dirname + '/views' + '/success.html');
});

app.get('/', function(req,res){
  res.sendFile('/index.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
