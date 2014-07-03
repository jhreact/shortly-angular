angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.addLink = function(){
    $scope.loading = true;
    $http({
      method: 'POST',
      url: '/api/links'
    }).success(function(data, status, headers, config){
      $scope.loading = false;
    });

  }
});
