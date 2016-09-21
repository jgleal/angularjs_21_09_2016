// Code goes here
var app = angular.module("ejercicio4",[]);
app.controller("ejercicio4Ctrl", function ($scope){
  $scope.nombre = 'Nombre uno';
  $scope.enviar = function (){
    alert('El texto es ' + $scope.nombre);
  };
});