// Code goes here
var app = angular.module("spa", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "uno.html",
      controller: 'unoCtrl'
    })
    .when("/dos", {
      templateUrl: "dos.html",
      controller: 'dosCtrl',
      testdata:'Un valor cualquiera'
    })
    .when("/tres/:id", {
      templateUrl: "tres.html",
      controller: 'tresCtrl'
    })
    .otherwise({
      templateUrl:'error.html'
    });
});
app.controller("unoCtrl", function($scope) {
  $scope.mensaje = "Mensaje uno";
});
app.controller("dosCtrl", function($scope,$route) {
  $scope.mensaje = "Mensaje dos";
  $scope.test = $route.current.testdata;
});
app.controller("tresCtrl", function($scope, $routeParams) {
  $scope.mensaje = "Mensaje tres";
  $scope.parametro = $routeParams.id;
});