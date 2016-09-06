console.log('hello from client.js');

var myApp = angular.module("myApp", ["ngRoute", "smart-table", "ngModal"]);

//Routes for the site views
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/videos', {
      templateUrl: '/views/videos.html',
      controller: "videoController"
    })
    .otherwise({
      redirectTo: 'newest'
    });
}]);
