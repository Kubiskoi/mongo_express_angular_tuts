var fruitsApp = angular.module('fruitsApp',[
	'ngRoute',
	'fruitsControllers',
	'fruitsServices'
	]);

fruitsApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/fruits',{
				templateUrl: 'templates/fruits-list.html',
				controller: 'fruitsListCtrl'
			}).
			when('/add',{
				templateUrl: 'templates/add.html',
				controller: 'fruitAddCtrl'
			}).
			when('/fruits/:fruitId',{
				templateUrl: 'templates/fruit-detail.html',
				controller: 'fruitDetailCtrl'
			}).
			when('/delete_fruit/:fruitId',{
				template: '',
				controller: 'fruitDeleteCtrl'
			}).
			otherwise({
				redirectTo: '/fruits'
			});
	}
	])


