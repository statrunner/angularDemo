var myApp = angular
    .module("page4Module", [])
    .controller("page4Controller", function ($scope) {

        
            $scope.message = "Hello Angular!";

            var employee = {
                firstName: "Jason",
                lastName: "Burt",
                age: 38
            };

            $scope.employee = employee;

    });