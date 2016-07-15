var ObjectId = require('mongodb').ObjectID;

exports.del = function (app,DB) {

	app.delete('/delete_fruit/:fruitId',function(req, res){
		DB.collection('kinds').remove({"_id":ObjectId(req.params.fruitId)},function(){
			res.sendStatus(200);
		});
	});
};