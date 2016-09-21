// Code goes here
// 'use strict';
var app = angular.module("constantes", []);
app.controller("constantesCtrl", [
  '$scope', 'configuracion', 'usuario',
  function($scope, configuracion, usuario) {
    $scope.nombre = 'Nombre uno';
    $scope.url = configuracion.url;
    $scope.puerto = configuracion.puerto;
    usuario.email = 'otro@def.com'
    $scope.correo = usuario.email;
  }
]);
app.constant("configuracion", {
  "url": "http://localhost",
  "puerto": "80"
});
app.value("usuario", {
    email: 'abc@xyz.com'
});