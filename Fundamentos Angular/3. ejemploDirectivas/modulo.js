'use strict';
angular
.module('pruebaAngular', [])
.controller('ejemploAdsiCtrl', ['$scope', function($scope){
	$scope.mensaje1 = "Hola Chicos!";
    $scope.mensaje2 = "Como han estado?";
    $scope.mensaje3 = "bn Gracias a Dios aqui estudiando Angular";
    $scope.mensaje4 = "Ahh ok sigue asi";

}]);

	
//No tiene nada de buenas practicas...
//Eso lo veremos un poco más adelante ...