var myApp = angular
    .module("page4Module", [])
    .controller("page4Controller", function ($scope) {

        $scope.title = "Employees";

        var employee = [
            { firstName: "Jason", lastName: "Burt", age: 38 },
            { firstName: "James", lastName: "Steele", age: 31 },
            { firstName: "Paul", lastName: "Falcon", age: 29 },
            { firstName: "David", lastName: "Lewis", age: 43 }];

        $scope.employee = employee;

    });