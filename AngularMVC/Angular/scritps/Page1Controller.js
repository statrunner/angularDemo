/// <reference path="../../scripts/angular.min.js" />


var myApp = angular.module("myModule", []);

/*
var myController = function ($scope) {
    $scope.message = "AngularJS Tutorial";
    
}

myApp.controller("myController", myController);
*/

myApp.controller("myController", function ($scope) {
    $scope.message = "AngularJS Tutorial";
});




