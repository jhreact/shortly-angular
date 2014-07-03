angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.linkUrl = "";
  $scope.link = {};

  $scope.addLink = function(){
    $scope.loading = true;
    $scope.link.url = $scope.linkUrl;
    Links.sendLink($scope.link)
      .success(function(data){
        $scope.link = data;
        $scope.loading = false;
      });
  };
});
