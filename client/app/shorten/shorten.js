angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.linkUrl = "";
  $scope.link = {};

  $scope.addLink = function(){
    $scope.link = {url: $scope.linkUrl};

    $scope.loading = true;
    $http({
      method: 'POST',
      url: '/api/links',
      data: JSON.stringify($scope.link)
    }).success(function(data, status, headers, config){
      console.log("SUCCESS");
      $scope.link = data;
      $scope.loading = false;
    });
  };
});
