console.log('hello from client.js where myAPP is made');

var videoApp = angular.module("videoApp", ["ngRoute"]);

//Routes for the site views
videoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/videos', {
      templateUrl: '/views/videos.html',
      controller: "videoController"
    })
    .otherwise({
      redirectTo: 'index'
    });
}]);
