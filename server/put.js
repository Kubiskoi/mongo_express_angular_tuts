var ObjectId = require('mongodb').ObjectID;

exports.put = function (app,DB) {

	app.put('/edit_fruit/:fruitId',function(req, res){
		// console.log('ide put');
		DB.collection('kinds').update({"_id":ObjectId(req.params.fruitId)},{"name":req.body.name,"desc":req.body.desc},function(){
			res.sendStatus(200);
		});
		// res.sendStatus(200);

	});
};