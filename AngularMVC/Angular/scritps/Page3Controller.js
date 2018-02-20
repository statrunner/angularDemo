var myApp = angular
    .module("page3Module", [])
    .controller("page3Controller", function ($scope) {

        var country = {
            name : "USA",
            capital : "Washington, D.C.",
            flag : "./media/usa_flag.png"
        };

        $scope.country = country;
    });