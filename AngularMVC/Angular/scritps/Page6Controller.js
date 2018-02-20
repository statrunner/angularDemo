var myApp = angular
    .module("page6Module", [])
    .controller("page6Controller", function ($scope) {

        $scope.title = "Page 6";

        var technologies = [
            { name: "C#", like: 0, dislike: 0 }, 
            { name: "Java", like: 0, dislike: 0 }, 
            { name: "AngularJS", like: 0, dislike: 0 },
        ];
        

        $scope.technologies = technologies;

        $scope.incrementLike = function (technology) {
            technology.like += 1;
        }

        $scope.incrementDislike = function (technology) {
            technology.dislike += 1;
        }

    });