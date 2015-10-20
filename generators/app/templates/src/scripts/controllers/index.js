define([], function() {
	'use strict';

	function indexController($scope, $http) {
		$scope.data = {};
		$scope.data.libs = [];
		$http.get('data/data.json').then(function(result) {
			$scope.data.libs = result.data;
			console.log($scope.data.libs);
		});
		$scope.texto = 'xxxxx';
	}
	indexController.$inject = ['$scope', '$http'];
	return indexController;
});