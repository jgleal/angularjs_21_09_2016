// Code goes here
var app = angular.module("repeat", []);
app.controller("repeatCtrl", ['$scope', function($scope) {
  $scope.nombres = ["Uno", "Dos", "Tres"];
  $scope.borrar = function(indice) {
    console.log('Seleccionado:' + $scope.nombres[indice]);
    $scope.nombres.splice(indice, 1);
  };
  $scope.nuevo = function() {
    console.log('Nuevo nombre:' + $scope.texto);
    $scope.nombres.push($scope.texto);
    $scope.texto="";
  };
}]);