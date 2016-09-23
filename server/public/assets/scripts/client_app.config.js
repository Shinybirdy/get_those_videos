var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(["$routeProvider", function($routeProvider){

  $routeProvider.
    when("/home", {
      templateUrl:"/views/home.html",
    }).
    when("/signIn", {
      templateUrl:"/views/signIn.html",
      controller:"SignInController"
    }).
    when("/allvideos", {
      templateUrl:"/views/videos.html",
      controller:"VideosController"
    }).
    when("/aboutTracey", {
      templateUrl:"/views/tracey.html",
      
    }).
    otherwise({
        redirectTo:"/allvideos"
      });

}]);
