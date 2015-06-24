var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {

    $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    }).when("/view1", {
        templateUrl: 'view/view1.html',
        controller: 'view1Ctrl'
    }).when('/view2', {
        templateUrl: 'view/view2.html',
        controller: 'view2Ctrl'
    }).
    otherwise({
        redirectTo: '/'
    })

}])


app.controller('MainCtrl', function($scope, $http) {
    console.log("success");
    $http.get('/xyz').
    success(function(data, status, headers, config) {
        console.log("success");
        $scope.name = data;
    }).
    error(function(data, status, headers, config) {
        $scope.name = 'Error!';
    })
});

app.controller('view1Ctrl', function($scope) {
    $scope.name = "MyName";
});

app.controller('view2Ctrl', function($scope) {
    $scope.name = "MyName";
});
