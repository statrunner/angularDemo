/// <reference path="../../scripts/angular.min.js" />

/*
var myApp = angular.module("page2Module", []);

myApp.controller("page2Controller", function ($scope) {
    var employee = {
        firstName: "Jason",
        lastName: "Burt",
        gender: "Male",
        age: 38
    };

    $scope.employee = employee;
})

*/

//method chaining:

var myApp = angular
    .module("page2Module", [])
    .controller("page2Controller", function ($scope) {

        var employee = {
            firstName: "Jason",
            lastName: "Burt",
            gender: "Male",
            age: 38
        };

        $scope.employee = employee;
    });

