// Code goes here
var app = angular.module("repeat", []);
app.service("logica", function (){
  this.nombres = ["Uno", "Dos", "Tres"];
  this.nuevo = function (n){
    this.nombres.push(n);
  };
  this.eliminar=function (i){
    this.nombres.splice(i, 1);
  };
});
app.controller("repeatCtrl", ['$scope','logica', function($scope,logica) {
  $scope.nombres = logica.nombres;
  $scope.borrar = function(indice) {
    console.log('Seleccionado:' + $scope.nombres[indice]);
    logica.eliminar(indice);
  };
  $scope.nuevo = function() {
    console.log('Nuevo nombre:' + $scope.texto);
    logica.nuevo($scope.texto);
    $scope.texto="";
  };
}]);