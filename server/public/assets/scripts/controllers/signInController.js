myApp.controller("SignInController", ['$scope', '$http', '$window', '$location',
function($scope, $http, $window, $location){

console.log("in SignInController!");

$scope.auth = {};

//Logs user into Proof API, then redirects to home page upon success.
$scope.signIn = function (authInfo) {
      $http.post('/videos', authInfo)
        .then(function (response) {
          if (response.status == 200 ) {
            console.log("success!", response);
            if (response.data.hasOwnProperty('errors')) {
            alert("Incorrect login credentials. Please try again.");
          } else {
            $window.location.href='#/videos';
            $window.location.reload();
          }
        } else {
            console.log("login error");
          }
        });
};



}]);
