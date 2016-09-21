// Code goes here
var moduloUno = angular.module("ModuloUno", []);
moduloUno.controller("ControllerUno", function($scope) {
  $scope.nombre = "Nombre uno en módulo uno";
});

var moduloDos = angular.module("ModuloDos", []);
moduloDos.controller("ControllerDos", function($scope) {
  $scope.nombre = "Nombre uno en módulo dos";
  $scope.funcionClick = function(e) {
    alert('Click:' + e.clientX + ',' + e.clientY);
  };
});

angular.element(document).ready(function() {
  var myDiv1 = document.getElementById("div1");
  angular.bootstrap(myDiv1, ["ModuloUno", "ModuloDos"]);

  var myDiv2 = document.getElementById("div2");
  angular.bootstrap(myDiv2, ["ModuloDos"]);
});