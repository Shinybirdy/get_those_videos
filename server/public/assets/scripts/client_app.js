var myApp = angular.module("myApp", ["ngRoute"]);


    myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home", {
      templateUrl:"/views/index.html",

    }).
    when("/signIn", {
      templateUrl:"/views/signIn.html",

    }).
    when("/videos", {
      templateUrl:"/views/videos.html",
      controller:"indexController"
    }).
     when("/newest", {
       templateUrl:"/views/newest.html",
       controller:"NewestVideosController"
      }).
      when("/mostViewed", {
        templateUrl:"/views/mostViewed.html",
        controller:"MostViewedController"
       }).
      when("/mostLikes", {
        templateUrl:"/views/mostLikes.html",
        controller:"MostLikesController"
         }).
      otherwise({
        redirectTo:"home"
      });

}]);
