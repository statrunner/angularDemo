var myApp = angular
    .module("page5Module", [])
    .controller("page5Controller", function ($scope) {

        $scope.title = "Employees";

        var employees = [
            { firstName: "Jason", lastName: "Burt", age: 38 },
            { firstName: "James", lastName: "Schefter", age: 31 },
            { firstName: "Paul", lastName: "Fowler", age: 29 },
            { firstName: "David", lastName: "Liu", age: 43 }];

        $scope.employees = employees;

        var countries = [
            {
                countryName: "UK",
                cities: [
                    { cityName: "London" },
                    { cityName: "Birmingham" },
                    { cityName: "Manchester" }
                ]
            },
            {
                countryName: "USA",
                cities: [
                    { cityName: "Charleston" },
                    { cityName: "San Antonio" },
                    { cityName: "Seattle" }
                ]
            },
            {
                countryName: "India",
                cities: [
                    { cityName: "Bangalore" },
                    { cityName: "Mumbai" },
                    { cityName: "Chennai" }
                ]
            }
        ];

        $scope.countries = countries;

    });
