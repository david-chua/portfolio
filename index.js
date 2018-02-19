var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/views'));

app.use(express.static(__dirname + '/script'));


app.get('/skills', function(req,res){
  res.sendFile(__dirname + "/views" + "/skills.html");
});

app.get('/design', function(req, res){
  res.sendFile(__dirname +'/views'+ '/design.html');
});

app.get('/projects', function(req,res){
  res.sendFile(__dirname + '/views' + '/projects.html');
});


app.get('/', function(req,res){
  res.sendFile('/index.html');
});




app.listen(process.env.PORT || 3000, function(){
  console.log('working portfolio');
})
