angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getAllLinks()
      .success(function(data){
        $scope.data.links = data;
      });
  };
  $scope.getLinks();
});
