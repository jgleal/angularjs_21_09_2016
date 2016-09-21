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
  app.directive('validarLongitud', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, mCtrl) {
        function myValidation(value) {
          if (value.length < 5) {
            mCtrl.$setValidity('textoCorto', false);
          } else {
            mCtrl.$setValidity('textoCorto', true);
          }
          return value;
        }
        mCtrl.$parsers.push(myValidation);
      }
    };
  });