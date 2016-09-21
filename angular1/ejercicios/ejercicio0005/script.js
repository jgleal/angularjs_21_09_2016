// Code goes here
var app = angular.module("ejercicio5", []);
app.controller("ejercicio5Ctrl", function($scope) {
  $scope.nombre = 'Nombre uno';
  $scope.enviar = function() {
    $scope.nombreFecha = $scope.nombre + ' ' + new Date();
  };
});