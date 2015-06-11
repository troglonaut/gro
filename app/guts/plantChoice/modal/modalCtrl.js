var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, $stateParams, veggie, plantService, authService){
	console.log(veggie)

	$scope.user = authService.getUser($stateParams.userId)
	$scope.veggie = veggie;
	var saveObj = {
		directSowDate: 'july 2nd',
		name: 'peas',
	}
	
	$scope.addSowDates = function(){
    $modalInstance.close(saveObj);
  };

  $scope.cancel = function(){
    $modalInstance.dismiss(false);
  };

})