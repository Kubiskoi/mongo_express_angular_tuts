exports.gets = function (app,DB) {

    app.get('/fruits', function(req, res) {
	DB.collection('kinds').find().toArray(function(err, result){
	  if (err) throw err;
	  res.send(result);
	});
});
};