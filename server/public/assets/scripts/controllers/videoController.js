videoApp.controller("VideoController", ['$scope', '$http', '$filter', function($scope, $http, $filter){

console.log("in VideoController!");

$scope.allVideos = [];

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

  $http.get('/allVideos').then(
    function(response) {

      console.log(response.data);

      $scope.allVideos = response.data;

    }
  );
};
$scope.view = function(){
  $scope.modal.viewed = !$scope.modal.viewed;

  $http.get('/allVideos/' + $scope.modal.modalVideo.api_id).then(
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
