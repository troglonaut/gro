var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, veggie){
	console.log(veggie)
	$scope.veggie = veggie;

	$scope.okay = function(){
    $modalInstance.close("Plants n Stuff");
  };

  $scope.cancel = function(){
    $modalInstance.close("CANCELED");
  };

})