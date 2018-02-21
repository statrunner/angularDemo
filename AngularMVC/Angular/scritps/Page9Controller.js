var myApp = angular
    .module("page9Module", [])
    .controller("page9Controller", function ($scope) {

        $scope.title = "Page 9";

        var employees = [
            { firstName: "Jason", lastName: "Burt", age: 37, birthDate: new Date("September 5, 1980") },
            { firstName: "James", lastName: "Steele", age: 31, birthDate: new Date("November 9, 1986") },
            { firstName: "Paul", lastName: "Falcon", age: 29, birthDate: new Date("January 5, 1988") },
            { firstName: "David", lastName: "Lewis", age: 43, birthDate: new Date("March 23, 1974") },
            { firstName: "Teddy", lastName: "Happy", age: 30, birthDate: new Date("February 16, 1987") },
        ];


        $scope.employees = employees;

        $scope.sortColumn = "firstName";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : true;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }


    });