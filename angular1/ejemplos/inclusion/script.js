// Code goes here
var app = angular.module("crud", []);
app.controller("estaticoCtrl", function($scope, $http) {
  $http.get("incluido.html")
    .then(
      function exito(response) {
        $scope.paginaEstatica = response.data;
      },
      function fallo(response) {
        $scope.paginaEstatica = response.statusText;
      }
    );
    $scope.nombres=["uno","dos","tres"];
});