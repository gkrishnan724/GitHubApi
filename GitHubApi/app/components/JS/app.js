/**
 * Created by gopal on 11/2/17.
 */
var app = angular.module("MyApp",[]);
app.controller("DataFetch",function($scope,$http) {

    $scope.Display = function (user) {
        $scope.Loading = 1;
        $http.get("http://api.github.com/users/"+user)
            .then(function (response) {
                $scope.Loading = 0;
                $scope.Data = response.data;
                $scope.bio = $scope.Data.bio;
                $scope.avatar = $scope.Data.avatar_url;
                console.log($scope.Data);

            });
    }

})