exports.posts = function (app,DB) {

	app.post('/fruits',function(req, res){
		
		var toSave = {"name":req.body.name};
		DB.collection('kinds').insertOne(toSave,function(){
			res.sendStatus(200);
		})

	});
};