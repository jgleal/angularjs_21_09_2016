// Code goes here
var app = angular.module("reverse", []);

app.service('alReves', function() {
  this.reves = function(frase) {
    return frase.split(" ").reverse().join(" ");
  }
});

app.controller("reverseCtrl", function ($scope,alReves){
  $scope.convertir = function (){
    $scope.reverso = alReves.reves($scope.nombre);
  };
});