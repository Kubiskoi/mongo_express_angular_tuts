var _ = require('underscore');
var ObjectId = require('mongodb').ObjectID;

exports.gets = function (app,DB) {

//     app.get('/fruits', function(req, res) {
// 	DB.collection('kinds').find().toArray(function(err, result){
// 	  	if (err) throw err 
// 	  	else{
// 	  		_.each(result,function(fruit){
// 	  			delete fruit.desc;
// 	  		})
// 			res.send(result);
// 	  	}
// 	});
// });

    app.get('/fruits/:fruitId', function(req, res) {
    	var id = req.params.fruitId;
    	if(id == "all"){
    		DB.collection('kinds').find().toArray(function(err, result){
    		  	if (err) throw err 
    		  	else{
    		  		_.each(result,function(fruit){
    		  			delete fruit.desc;
    		  		})
    				res.send(result);
    		  	}
    		});
    	}else{
			DB.collection('kinds').find({ "_id": ObjectId(req.params.fruitId) }).toArray(function(err, result){
				if (err) throw err 
				res.send(result);
			});
		}
});



};