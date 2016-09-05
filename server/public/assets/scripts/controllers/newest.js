myApp.controller("NewestController", ['$scope', '$http', '$filter', function($scope, $http, $filter){
  console.log("in NewestController!");

$scope.videos = [];

$scope.modal = {
  info:false,
  modalVideo:{},
  viewed: false,
  votedUp: false,
  votedDown: false,
  update: false,
  success:false,
  successText:""};

$scope.getNewestVideos = function(){

  $http.get('/videos').then(
    function(response) {

      console.log(response.data);

      $scope.videos = response.data;

    }
  );
};
$scope.view = function(){
  $scope.modal.viewed = !$scope.modal.viewed;

  $http.get('/video/' + $scope.modal.modalVideo.api_id).then(
    function(response){

      $scope.getVideos();

      if (response.status == 200) {
        $scope.modal.successText = "success!";
        $scope.modal.success = !$scope.modal.success;
      }
    }
  );
};

////more functions here :)

}]);
