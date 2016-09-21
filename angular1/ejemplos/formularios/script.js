// Code goes here
var app = angular.module('formulario', []);
app.controller('formCtrl', function($scope) {
  $scope.datos = {
    correo: 'abc@xyz.com',
    clave: 'Insegura',
    recordarme: true
  };
  $scope.enviar = function() {
    alert('Formulario enviado');
  };
});