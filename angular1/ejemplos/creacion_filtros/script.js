// Code goes here
var app = angular.module("filtros",[]);
app.controller("filtrosCtrl", function ($scope){
  $scope.nombres=["uno","dos","tres"];
});
app.filter("mayusculas", function (){
  return function (item){
    return item.toUpperCase();
  };
});
