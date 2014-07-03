angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    $http({
      method: 'GET',
      url: '/api/links'
    }).success(function(data, status, headers, config){
      console.log(data)
    //   $scope.data.links = data;
    });
  };
  $scope.getLinks();
});
