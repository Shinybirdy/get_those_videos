var myApp = angular.module("myApp", ["ngRoute", "smart-table", "ngModal"]);
myApp.controller('VideoController', ["$scope", "http", function($scope, $http){
  $scope.getVideos = function(){

  };
}]);

//Routes for the site views
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/mostLiked', {
      templateUrl: '/views/mostLiked.html',
      controller: "MostLikedController"
    })
    .when('/mostPopular', {
      templateUrl: '/views/mostPopular.html',
      controller: "MostPopularController"
    })
    .when('/newest', {
      templateUrl: '/views/newest.html',
      controller: "NewestController"
    })
    .otherwise({
      redirectTo: 'newest'
    });
}]);
