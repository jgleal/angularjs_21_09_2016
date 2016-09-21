// Code goes here
var app = angular.module("tablas", []);

app.controller("tablasCtrl", function($scope) {
  $scope.nombres = [{
    nombre: "Nombre Uno",
    apellido: "Apellido uno"
  }, {
    nombre: "Nombre Dos",
    apellido: "Apellido Dos"
  }, {
    nombre: "Nombre Tres",
    apellido: "Apellido Tres"
  }];

  $scope.data = {
    opciones: $scope.nombres,
    seleccionado: $scope.nombres[0]
  };
});
app.controller("otro",function ($scope){
  $scope.test = "Uso de un segundo controlador";
});