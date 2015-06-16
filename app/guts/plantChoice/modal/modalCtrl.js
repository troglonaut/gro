var app = angular.module('gro');
app.controller('modalCtrl', function($scope, $modalInstance, $stateParams, veggie, user, plantService, authService){
	console.log(veggie)

	$scope.user = user;
	$scope.veggie = veggie;
	
	// var saveObj = {
	// 	directSowDate: 'july 2nd',
	// 	name: veggie.name,
	// 	zoneDates: veggie.zoneDates,
	// 	// sowDates: 
	// }

	$scope.saveDataArr = [];

	$scope.addSowDates = function(){
    $modalInstance.close(saveObj);
    $modalInstance.close()
  };

  $scope.cancel = function(){
    $modalInstance.dismiss(false);
  };

  $scope.conArr = function(){
  	console.log($scope.saveDataArr)
  }
})