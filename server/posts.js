exports.posts = function (app,DB) {

	app.post('/add_fruit',function(req, res){
		
		var toSave = {"name":req.body.name,"desc":req.body.desc};
		DB.collection('kinds').insertOne(toSave,function(){
			res.sendStatus(200);
		})

	});
};