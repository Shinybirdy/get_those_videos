myApp.controller('NewestVideosController', ['$scope', '$http', function ($scope, $http){

console.log("newest controller is running!!!");


  var newestVideosArray =[];
  var addVideoObjectToSend;

  var loadVideos = function(){
     $http({
      method: "GET",
       url: "/videos",
     }).then( function( response ){
      $scope.newestVideosArray = response.data;
      console.log("get Videos! GET");
    }); //end .then
  };    //end loadVideos


  $scope.addVideo = function () {
    console.log("CLICK!");
    event.preventDefault();
      $scope.videoArray = [];

      addVideoObjectToSend = {

         id: $scope.id,
         title: $scope.title,
         url: $scope.url,
         slug: $scope.slug,
         view_tally: $scope.view_tally,
         vote_tally: $scope.vote_tally,
         created: $scope.created,
         updated: $scope.updated

      };//end object

      $http({
       method: 'POST',
       url: '/videos', //videos.js has the answer.....
       data: addVideoObjectToSend
      }).then(function(response){

       console.log(response);
       //if err, then blah --- do this
       loadVideos();

     }); //end .then

     $scope.newestVideosArray.push(addVideoObjectToSend);

   }; // end addVideo function
}]);
