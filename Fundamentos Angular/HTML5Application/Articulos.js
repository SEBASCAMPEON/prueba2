var app = angular.module('app', []);

app.controller('articuloCtrl', function ($scope, $http) {
 
    $http.get('http://localhost:7000/api/empresas')
	.success(function(data){
		$scope.empresas = data;
	});
});