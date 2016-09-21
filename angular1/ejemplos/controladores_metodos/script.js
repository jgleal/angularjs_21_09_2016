// Code goes here
var app = angular.module("metodos", []);
app.controller("metodosCtrl", function($scope) {
  $scope.numeros = [1, 2, 3, 4, 5];
  $scope.nuevoNumero = function() {
    $scope.numeros.push($scope.numero || 30);
  };
});