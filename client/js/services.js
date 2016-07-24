

var fruitsServices = angular.module('fruitsServices',['ngResource']);

// fruitsServices.factory('Fruits', ['$resource',
//   function($resource){
//     return $resource('fruits', {}, {
//       query: {method:'GET',  isArray:true}
//     });
//   }]);

fruitsServices.factory('Fruits', ['$resource',
  function($resource){
    return $resource('fruits/:fruitId', {}, 'query');
  }]);


fruitsServices.factory('postFruit', ['$resource',
  function($resource){
    return $resource('add_fruit', {}, {
      send_to_server: {method:'POST',params:{}}
    });
  }]);

fruitsServices.factory('putFruit', ['$resource',
  function($resource){
    return $resource('edit_fruit/:fruitId', {}, {
      send_to_server: {method:'put',params:{}}
    });
  }]);

fruitsServices.factory('deleteFruit', ['$resource',
  function($resource){
    return $resource('delete_fruit/:fruitId', {}, 'delete');
  }]);