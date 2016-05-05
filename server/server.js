var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var _ = require('underscore');

var URL = 'mongodb://localhost:27017/fruits';
var app = express();
var DB;

MongoClient.connect(URL, function(err, db){
  if (err) throw err;
  DB = db;
});

app.use(bodyParser.json());


app.get('/fruits', function(req, res) {
	DB.collection('kinds').find().toArray(function(err, result){
	  if (err) throw err;
	  res.send(result);
	});
});


app.post('/fruits',function(req, res){
	
	var toSave = {"name":req.body.name};
	DB.collection('kinds').insertOne(toSave,function(){
		res.sendStatus(200);
	})

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


