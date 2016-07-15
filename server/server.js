var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
// var _ = require('underscore');

var URL = 'mongodb://localhost:27017/fruits';
var app = express();
var DB;



app.use('/', express.static('../client'));
app.use(bodyParser.json());


MongoClient.connect(URL, function(err, db){
  if (err) throw err;
  DB = db;
  require('./gets.js').gets(app,DB);
  require('./posts.js').posts(app,DB);
  require('./del.js').del(app,DB);
});


app.listen(3000, function () {
  console.log('Example app listening on localhost:3000!');
});