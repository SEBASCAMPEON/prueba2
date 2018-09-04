'use strict';
angular
  .module('pruebaAngular', [])
  .controller('ejemploAdsiCtrl', function ($scope) {

    $scope.resultado = 0;
    $scope.numero1 = 0;
    $scope.numero2 = 0;
    $scope.message="";

    $scope.sumar = function () {
      $scope.resultado = parseInt($scope.numero1) + parseInt($scope.numero2);
      $scope.numero1 = 0;
      $scope.numero2 = 0;
      $scope.message="";
    }
    $scope.restar = function () {
      $scope.resultado = parseInt($scope.numero1) - parseInt($scope.numero2);
      $scope.numero1 = 0;
      $scope.numero2 = 0;
      $scope.message="";
    }
    $scope.multiplicar = function(){
      $scope.resultado = parseInt($scope.numero1) * parseInt($scope.numero2);
      $scope.numero1 = 0;
      $scope.numero2 = 0;
      $scope.message="";

    }

    $scope.dividir = function(){
      if($scope.numero2===0){
         $scope.resultado="Infinity";
         $scope.message="La operacion no se puede realizar";

      }else{
      $scope.resultado =  parseInt($scope.numero1) / parseInt($scope.numero2);
      $scope.numero1 = 0;
      $scope.numero2 = 0;
      $scope.message="";   
    }
  }
     $scope.concatenar=function(){
     $scope.resultado = $scope.numero1 + $scope.numero2;
     $scope.numero1 = 0;
     $scope.numero2 = 0;
     $scope.message="";
    }


  
  })
 

//No tiene nada de buenas practicas...
//Eso lo veremos un poco más adelante ...