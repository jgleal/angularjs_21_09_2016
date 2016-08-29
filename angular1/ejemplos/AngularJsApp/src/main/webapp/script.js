var app = angular.module("listaDeTareas", []);
app.controller("ctrlTareas", function ($scope, $http) {
//                $scope.tareas = ["Tarea uno", "Tarea Dos", "Tarea Tres"];
    $http.get("TareasServlet")
            .then(
                    function (response) {
                        $scope.tareas = response.data;
                        console.log("Tareas existentes " + $scope.tareas);
                    },
                    function (response) {
                        $scope.errortext = "Ha ocurrifo un error al cargar la lista de tareas: " + response.statusText;
                    });
    $scope.nuevaTarea = function () {
        $scope.errortext = "";
        if (!$scope.nueva) {
            $scope.errortext = "La nueva tarea está vacía.";
            return;
        }
        if ($scope.tareas.indexOf($scope.nueva) === -1) {
//                        $scope.tareas.push($scope.nueva);
            var datos = $.param({
                test: $scope.nueva
            });
            console.log(datos);
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };
            $http.post("TareasServlet", datos, config)
                    .then(
                            function (response) {
                                console.log("Ok Post: " + response.data);
                                $scope.tareas = response.data;
                            },
                            function (response) {
                                console.log("Error Post: " + response.statusText);
                            }
                    );
        } else {
            $scope.errortext = "La tarea ya se encuentra en la lista.";
        }
    };
    $scope.borrarTarea = function (x) {
        $http.delete("TareasServlet?test=" + $scope.tareas[x])
                .then(
                        function (response) {
                            console.log("Ok delete: " + response.data);
                            $scope.tareas = response.data;
                        },
                        function (response) {
                            console.log("Error delete: " + response.statusText);
                        }
                );
        $scope.errortext = "";
//                    $scope.tareas.splice(x, 1);
    };
    $scope.seleccion = function (x) {
        $scope.seleccionado = $scope.tareas[x];
        console.log("Tarea seleccionada: " + $scope.seleccionado);
    };
    $scope.actualizarTarea = function () {
        var datos = $.param({
            antiguo: $scope.seleccionado,
            nuevo: $scope.paraActualizar
        });
        $http.put("TareasServlet?" + datos).then(
                function (response) {
                    console.log("Ok put: " + response.data);
                    $scope.tareas = response.data;
                },
                function (response) {
                    console.log("Error put: " + response.statusText);
                }
        );
    };
});