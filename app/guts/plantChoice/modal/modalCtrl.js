var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, $stateParams, veggie, user, plantService, authService){
	console.log(veggie)

	$scope.user = user;
	$scope.veggie = veggie;
	
	var saveObj = {
		directSowDate: 'july 2nd',
		name: veggie.name,
		zoneDates: veggie.zoneDates,
		// sowDates: 
	}

	$scope.addSowDates = function(){
    $modalInstance.close(saveObj);
  };

  $scope.cancel = function(){
    $modalInstance.dismiss(false);
  };

  // $scope.minDate = ;

  // $scope.maxDate = ;

})