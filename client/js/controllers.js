
var fruitsControllers = angular.module('fruitsControllers',[]);


fruitsControllers.controller('fruitsListCtrl',['$scope','Fruits',
	function($scope,Fruits){
		$scope.fruits = Fruits.query({fruitId:"all"});
	}
	])


fruitsControllers.controller('fruitDetailCtrl',['$scope','$routeParams','Fruits',
	function($scope,$routeParams,Fruits){
		$scope.fruit = Fruits.query($routeParams);
	}
	])

fruitsControllers.controller('fruitEditCtrl',['$scope','$routeParams','Fruits','putFruit','$location',
	function($scope,$routeParams,Fruits,putFruit,$location){
		Fruits.query($routeParams).$promise.then(function(fruit){
			$scope.name = fruit[0].name;
			$scope.desc = fruit[0].desc;	
		})

		$scope.submit = function() {
			putFruit.send_to_server($routeParams,{"name":$scope.name,"desc":$scope.desc}).$promise.then(function(){
      			$location.path('#/fruits');
    		});
		}
		
	}
	])

fruitsControllers.controller('fruitAddCtrl',['$scope','postFruit','$location',
	function($scope,postFruit,$location){
		$scope.submit = function() {
			postFruit.send_to_server({"name":$scope.name,"desc":$scope.desc}).$promise.then(function(){
      			$location.path('#/fruits');
    		});
		}
	}
	])


fruitsControllers.controller('fruitDeleteCtrl',['$scope','$routeParams','deleteFruit','$location',
	function($scope,$routeParams,deleteFruit,$location){
		deleteFruit.delete($routeParams).$promise.then(function(){
			$location.path('#/fruits');
		});
	}
	])