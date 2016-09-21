// Code goes here
var app = angular.module("crud", []);
app.run(function($rootScope) {
  $rootScope.baseUrl = 'https://jsonplaceholder.typicode.com';
});
app.controller("crudCtrl", function($scope, $rootScope, $http) {
  $scope.getClick = function() {
    $scope.seleccion = false;
    $scope.urlPeticion = $rootScope.baseUrl + '/posts/1';
    $http.get($scope.urlPeticion)
      .then(
        function(response) {
          $scope.datos = response.data;
        },
        function(response) {
          $scope.datos = "Error: " + response.statusText;
        }
      );
    $scope.seleccion = true;
  };
  $scope.postClick = function() {
    $scope.seleccion = false;
    $scope.urlPeticion = $rootScope.baseUrl + '/posts';
    $http.post(
      $scope.urlPeticion, {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    ).then(
      function(response) {
        $scope.datos = response.data;
      },
      function(response) {
        $scope.datos = "Error: " + response.statusText;
      }
    );
    $scope.seleccion = true;
  };
  $scope.putClick = function() {
    $scope.seleccion = false;
    $scope.urlPeticion = $rootScope.baseUrl + '/posts/1';
    $http.put($scope.urlPeticion, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }).then(
      function(response) {
        $scope.datos = response.data;
      },
      function(response) {
        $scope.datos = "Error: " + response.statusText;
      }
    );
    $scope.seleccion = true;
  };
    $scope.deleteClick = function() {
    $scope.seleccion = false;
    $scope.urlPeticion = $rootScope.baseUrl + '/posts/1';
    $http.delete($scope.urlPeticion)
      .then(
        function(response) {
          $scope.datos = response.data;
        },
        function(response) {
          $scope.datos = "Error: " + response.statusText;
        }
      );
    $scope.seleccion = true;
  };
});