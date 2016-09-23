//client side
myApp.controller('VideosController', ['$scope', '$http', function ($scope, $http){

console.log("VideosController is running!!!");

$scope.videos=[];
$scope.video={
  id: $scope.id,
  title: $scope.title,
  url: $scope.url,
  slug: $scope.slug,
  view_tally: $scope.view_tally,
  vote_tally: $scope.vote_tally,
  created: $scope.created,
  updated: $scope.updated
};
///////////////////////////////////////////////

$scope.loadAllVideos = function(){

     $http({
      method: "GET",
       url: "https://proofapi.herokuapp.com/videos?page&per_page",
     }).then( function( token, response ){

      //showResults();

      console.log("get Videos! GET");
      $scope.allVideosArray.push(response.data.results);
      console.log($scope.allVideosArray);
    }); //end .then
  };    //end loadVideos

$scope.loadAllVideos();

// var showResults = function( results ){
//   console.log( 'in showResults', results );
//   // fields for each result: Year, Title, Poster (image URL)
//   // empty output div
//   $( '#outputDiv').empty();
//   // loop through results and display movies
//   for( var i = 0 ; i < results.length; i++ ){
//     $( '#outputDiv').append( '<p><b>' + results[ i ].title + '</b> (' + results[ i ].url + ')</p>' );
//
//   } // end for
// }; // end showResults
  //
  // $scope.addVideo = function () {
  //   console.log("CLICK!");
  //   event.preventDefault();
  //     $scope.videoArray = [];
  //
  //     addVideoObjectToSend = {
  //
  //        id: $scope.id,
  //        title: $scope.title,
  //        url: $scope.url,
  //        slug: $scope.slug,
  //        view_tally: $scope.view_tally,
  //        vote_tally: $scope.vote_tally,
  //        created: $scope.created,
  //        updated: $scope.updated
  //
  //     };//end object
  //
  //     $http({
  //      method: 'POST',
  //      url: '/videos', //videos.js has the answer.....
  //      data: addVideoObjectToSend
  //     }).then(function(response){
  //
  //      console.log(response);
  //      //if err, then blah --- do this
  //      loadVideos();
  //
  //    }); //end .then
  //
  //    $scope.allVideosArray.push(addVideoObjectToSend);

  //  }; // end addVideo function
}]);
