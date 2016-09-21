// Code goes here
var app = angular.module("directivas",[]);
app.directive("simple", function (){
  return {
    template: '<h1>Directiva simple</h1>'
  };
});
app.directive("dinamica", function (){
  return {
    template: '<h2>El nombre es {{nombre}}</h2>'
  };
});
app.controller("directivasCtrl", function ($scope){
  $scope.nombre='Un nombre cualquiera';
});
